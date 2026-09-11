import { siteConfig } from "@/config/site";
import { contact } from "@/config/contact";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: contact.phoneDisplay,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address,
      addressLocality: contact.city,
      addressCountry: "AR",
    },
    medicalSpecialty: "Hematology",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PhysicianJsonLd({
  name,
  url,
}: {
  name: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name,
    url,
    medicalSpecialty: "Hematology",
    worksFor: {
      "@type": "MedicalOrganization",
      name: siteConfig.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  date,
  url,
}: {
  title: string;
  description: string;
  date: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    url,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "MedicalOrganization",
      name: siteConfig.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
