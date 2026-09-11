import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { BlogCard } from "@/components/cards/BlogCard";
import { QuestionForm } from "@/components/contact/QuestionForm";
import { CtaBanner } from "@/components/cta/CtaBanner";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { articulos } from "@/data/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog de Hematología",
  description:
    "Información clara y confiable para comprender mejor la salud hematológica.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Educación"
        title="Blog de Hematología"
        description="Información clara y confiable para comprender mejor la salud hematológica."
      />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articulos.map((item) => (
            <BlogCard key={item.id} articulo={item} />
          ))}
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <QuestionForm />
          <div className="space-y-4 self-start">
            <MedicalNotice />
            <MedicalNotice variant="urgent" />
          </div>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
