import bpy, math, random, os
from mathutils import Vector

# Clear scene
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
for datablocks in (bpy.data.materials,):
    for block in list(datablocks):
        if block.users == 0:
            datablocks.remove(block)

def mat(name, color, roughness=0.42, metallic=0.0):
    m = bpy.data.materials.new(name)
    m.diffuse_color = (*color, 1)
    m.use_nodes = True
    p = m.node_tree.nodes.get('Principled BSDF')
    p.inputs['Base Color'].default_value = (*color, 1)
    p.inputs['Roughness'].default_value = roughness
    p.inputs['Metallic'].default_value = metallic
    return m

YELLOW = mat('Skin • Simpson yellow', (1.0, 0.72, 0.025), .48)
WHITE = mat('Shirt • warm white', (.93, .94, .88), .68)
BLUE = mat('Trousers • Homer blue', (.035, .12, .68), .55)
BLACK = mat('Shoes • charcoal', (.045, .035, .03), .5)
EYE = mat('Eyes • ivory', (1.0, .99, .91), .24)
PUPIL = mat('Pupils', (.012, .009, .006), .22)
MOUTH = mat('Smile', (.19, .055, .015), .65)
TOOTH = mat('Teeth', (1.0, .97, .8), .3)
DONUT = mat('Donut • golden dough', (.62, .22, .055), .62)
ICING = mat('Donut • pink frosting', (.98, .13, .32), .3)
SPRINKLE_MATS = [mat('Sprinkle • '+n,c,.32) for n,c in [
    ('cyan',(.04,.75,1)),('lemon',(1,.8,.02)),('white',(1,.94,.8)),('violet',(.45,.07,.8))]]

def uv(name, loc, scale, material, seg=32, rings=20):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=seg, ring_count=rings, location=loc)
    o=bpy.context.object; o.name=name; o.scale=scale; bpy.ops.object.shade_smooth()
    if material: o.data.materials.append(material)
    return o

def cyl(name, loc, radius, depth, material, vertices=48, bevel=0.06):
    bpy.ops.mesh.primitive_cylinder_add(vertices=vertices, radius=radius, depth=depth, location=loc)
    o=bpy.context.object; o.name=name
    if material: o.data.materials.append(material)
    if bevel:
        mod=o.modifiers.new('Soft rounded edges','BEVEL'); mod.width=bevel; mod.segments=3
        o.modifiers.new('Weighted corner normals','WEIGHTED_NORMAL')
    for f in o.data.polygons: f.use_smooth=True
    return o

def capsule(name, a, b, radius, material, depth_ratio=1.0):
    a,b=Vector(a),Vector(b); d=b-a
    o=uv(name,(a+b)/2,(radius,radius*depth_ratio,d.length/2+radius*.48),material)
    o.rotation_mode='QUATERNION'; o.rotation_quaternion=d.to_track_quat('Z','Y')
    return o

def curve(name, points, radius, material, cyclic=False):
    cu=bpy.data.curves.new(name,'CURVE'); cu.dimensions='3D'; cu.resolution_u=16
    cu.bevel_depth=radius; cu.bevel_resolution=3
    sp=cu.splines.new('BEZIER'); sp.bezier_points.add(len(points)-1)
    for p,co in zip(sp.bezier_points,points):
        p.co=co; p.handle_left_type='AUTO'; p.handle_right_type='AUTO'
    sp.use_cyclic_u=cyclic
    ob=bpy.data.objects.new(name,cu); bpy.context.collection.objects.link(ob); ob.data.materials.append(material)
    return ob

# Shoes, trouser legs, waist and shirt
uv('Left shoe',( -.31,-.075,.22),(.38,.56,.21),BLACK)
uv('Right shoe',( .31,-.075,.22),(.38,.56,.21),BLACK)
capsule('Left trouser leg',(-.27,0,1.02),(-.29,0,.47),.24,BLUE,.92)
capsule('Right trouser leg',(.27,0,1.02),(.29,0,.47),.24,BLUE,.92)
cyl('Blue trouser waist',(0,0,1.25),.48,.42,BLUE,bevel=.12)
# Torso shaped as a gently tapered shirt
bpy.ops.mesh.primitive_cone_add(vertices=48, radius1=.61, radius2=.44, depth=1.08, location=(0,0,2.0))
shirt=bpy.context.object; shirt.name='White short-sleeved shirt'; shirt.data.materials.append(WHITE)
bev=shirt.modifiers.new('Soft shirt silhouette','BEVEL'); bev.width=.17; bev.segments=4
shirt.modifiers.new('Shirt normals','WEIGHTED_NORMAL')
for f in shirt.data.polygons: f.use_smooth=True
uv('Rounded shirt belly',(0,-.035,1.91),(.58,.46,.48),WHITE)
uv('Neck',(0,0,2.58),(.25,.24,.24),YELLOW)
curve('Shirt collar',[(-.25,-.2,2.52),(0,-.31,2.42),(.25,-.2,2.52)],.045,WHITE)

# Arms and hands (right hand raises the classic pink donut)
uv('Left sleeve',(-.48,0,2.28),(.30,.32,.34),WHITE)
uv('Right sleeve',(.48,0,2.28),(.30,.32,.34),WHITE)
capsule('Left yellow arm',(-.55,-.01,2.26),(-.78,-.08,1.86),.145,YELLOW,.92)
capsule('Left forearm',(-.78,-.08,1.86),(-.82,-.20,1.63),.13,YELLOW,.92)
uv('Left hand',(-.82,-.22,1.57),(.17,.16,.17),YELLOW)
capsule('Right yellow arm',(.55,-.01,2.28),(.76,-.14,2.03),.145,YELLOW,.92)
capsule('Right forearm',(.76,-.14,2.03),(.85,-.3,1.84),.13,YELLOW,.92)
uv('Donut hand',(.86,-.34,1.78),(.17,.16,.17),YELLOW)
# Four simple fingers on relaxed hand
for i in range(3):
    x=-.91+i*.08
    uv('Left finger %d'%i,(x,-.32,1.48),(.055,.075,.12),YELLOW,20,12)

# Head, ears and muzzle
uv('Head',(0,0,3.27),(.67,.56,.79),YELLOW,48,32)
uv('Left ear',(-.65,-.02,3.27),(.17,.16,.19),YELLOW)
uv('Right ear',(.65,-.02,3.27),(.17,.16,.19),YELLOW)
uv('Left ear inner',(-.735,-.16,3.28),(.045,.035,.075),MOUTH,20,12)
uv('Right ear inner',(.735,-.16,3.28),(.045,.035,.075),MOUTH,20,12)
# Eyes sit forward and slightly overlap, as in the cartoon design
uv('Left eye',(-.19,-.485,3.57),(.235,.18,.30),EYE)
uv('Right eye',(.19,-.485,3.57),(.235,.18,.30),EYE)
uv('Left pupil',(-.115,-.65,3.56),(.065,.045,.092),PUPIL,24,16)
uv('Right pupil',(.205,-.65,3.56),(.065,.045,.092),PUPIL,24,16)
uv('Nose',(0,-.68,3.31),(.16,.25,.14),YELLOW)
uv('Muzzle',(0,-.49,3.04),(.44,.19,.27),YELLOW)
# Open cheerful smile with two visible upper teeth
uv('Smile opening',(0,-.652,2.99),(.31,.045,.115),MOUTH)
uv('Upper teeth',(0,-.692,3.045),(.22,.028,.045),TOOTH)
curve('Lower smile',[(-.3,-.63,3.0),(0,-.685,2.89),(.3,-.63,3.0)],.018,MOUTH)
# Sparse Homer stubble dots across his cheeks
random.seed(12)
for side in (-1,1):
    for i in range(5):
        x=side*(.31+.055*(i%2)); z=2.98+.085*(i//2)
        uv('Stubble', (x,-.646,z),(.018,.012,.018),MOUTH,12,8)

# Two iconic wisps on the crown and a small hairline above each ear
curve('Hair wisp one',[(-.12,-.06,4.00),(-.23,-.035,4.12),(-.37,-.005,4.05)],.034,YELLOW)
curve('Hair wisp two',[(.03,-.035,4.04),(.10,-.025,4.14),(.18,-.015,4.08)],.03,YELLOW)
curve('Left side hair',[(-.58,0,3.62),(-.61,0,3.76),(-.55,0,3.83)],.045,YELLOW)
curve('Right side hair',[(.58,0,3.62),(.61,0,3.76),(.55,0,3.83)],.045,YELLOW)

# Pink frosted donut held upright in the character's right hand
bpy.ops.mesh.primitive_torus_add(major_radius=.27,minor_radius=.115,major_segments=48,minor_segments=16,location=(1.03,-.39,1.91),rotation=(math.radians(90),0,0))
donut=bpy.context.object; donut.name='Homer favorite • donut'; donut.data.materials.append(DONUT)
for f in donut.data.polygons: f.use_smooth=True
# Frosting as a slightly smaller ring on the camera-facing side
bpy.ops.mesh.primitive_torus_add(major_radius=.27,minor_radius=.079,major_segments=48,minor_segments=12,location=(1.03,-.505,1.91),rotation=(math.radians(90),0,0))
icing=bpy.context.object; icing.name='Pink donut icing'; icing.data.materials.append(ICING)
for f in icing.data.polygons: f.use_smooth=True
for i in range(12):
    a=2*math.pi*i/12+.12; x=1.03+.27*math.cos(a); z=1.91+.27*math.sin(a)
    ob=uv('Colorful donut sprinkle',(x,-.592,z),(.018,.012,.052),SPRINKLE_MATS[i%len(SPRINKLE_MATS)],12,8)
    ob.rotation_euler[1]=-a

# Simple studio ground and backdrop
FLOOR=mat('Backdrop • deep teal',(.035,.12,.16),.8)
bpy.ops.mesh.primitive_plane_add(size=200, location=(0,0,0))
ground=bpy.context.object; ground.name='Studio floor'; ground.data.materials.append(FLOOR)

def aim(obj, point): obj.rotation_euler=(Vector(point)-obj.location).to_track_quat('-Z','Y').to_euler()
bpy.ops.object.camera_add(location=(5.8,-10.5,5.0)); camera=bpy.context.object; camera.name='Portrait camera'; aim(camera,(0,-.02,2.14)); camera.data.type='ORTHO'; camera.data.ortho_scale=5.15; bpy.context.scene.camera=camera

def area(name, loc, energy, size, color, target):
    bpy.ops.object.light_add(type='AREA', location=loc); l=bpy.context.object; l.name=name
    l.data.energy=energy; l.data.shape='DISK'; l.data.size=size; l.data.color=color; aim(l,target)
area('Key • softbox',(-4,-6,7),850,5.0,(1.0,.78,.48),(0,0,2.4))
area('Fill • softbox',(4,-4,4),650,4.0,(.48,.72,1.0),(0,0,2.4))
area('Rim light',(1,3,6),1000,3.0,(1.0,.4,.12),(0,0,2.5))
scene=bpy.context.scene
scene.render.engine='CYCLES'; scene.cycles.samples=24
scene.render.resolution_x=900; scene.render.resolution_y=900; scene.render.resolution_percentage=100
scene.render.image_settings.file_format='PNG'
scene.world.color=(.12,.12,.12)
scene.view_settings.view_transform='AgX'
ROOT=os.path.dirname(os.path.abspath(__file__))
scene.render.filepath=os.path.join(ROOT,'homer_simpson_preview.png')

# Select only the character for a clean opening viewport; preserve all pieces editable.
bpy.ops.object.select_all(action='DESELECT')
for ob in bpy.context.scene.objects:
    if ob.name not in {'Studio floor','Portrait camera','Key • softbox','Fill • softbox','Rim light'}:
        ob.select_set(True)
bpy.context.view_layer.objects.active=bpy.data.objects['Head']
# Frame the model in the startup viewport
for screen in bpy.data.screens:
    for area0 in screen.areas:
        if area0.type=='VIEW_3D':
            area0.spaces.active.region_3d.view_location=(0,0,2.15)
            area0.spaces.active.region_3d.view_distance=6.8
            area0.spaces.active.region_3d.view_rotation=(0.82,0.48,0.22,0.22)

out=os.path.join(ROOT,'homer_simpson_3d.blend')
bpy.ops.wm.save_as_mainfile(filepath=out)
bpy.ops.render.render(write_still=True)
print('Saved:',out)
print('Rendered:',scene.render.filepath)
