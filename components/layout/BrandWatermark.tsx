export function BrandWatermark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        className="absolute inset-[-30%] opacity-[0.07] dark:opacity-[0.14]"
        style={{
          backgroundImage: "url(/images/marca-agua-ghemas.jpg)",
          backgroundRepeat: "repeat",
          backgroundSize: "240px",
          transform: "rotate(-16deg)",
        }}
      />
    </div>
  );
}
