import { useEffect } from "react";

const BASE_URL = "https://www.narpavitechchennai.in";

const DEFAULT_DESCRIPTION =
  "Narpavi Tech Chennai provides IEEE projects, final year engineering projects, Scopus journal publication services, and PhD research support.";

const DEFAULT_KEYWORDS = [
  "Narpavi Tech Chennai",
  "Project Center in Chennai",
  "IEEE Projects Chennai",
  "Final Year Projects Chennai",
  "Scopus Journal Publication Services",
  "PhD Guidance Chennai",
  "Research Paper Writing Chennai",
];

const DEFAULT_IMAGE = `${BASE_URL}/images/og-image.jpg`;

const SEO = ({
  title,
  description,
  url,
  image,
  keywords,
  faqs,
}) => {
  const pageTitle = title
    ? `${title} | Narpavi Tech Chennai`
    : "Narpavi Research Institute";

  const pageDescription = description || DEFAULT_DESCRIPTION;
  const pageUrl = url ? `${BASE_URL}${url}` : BASE_URL;
  const pageImage = image || DEFAULT_IMAGE;

  const pageKeywords = Array.isArray(keywords)
    ? keywords.join(", ")
    : keywords || DEFAULT_KEYWORDS.join(", ");

  useEffect(() => {
    /* ---------- TITLE ---------- */
    document.title = pageTitle;

    /* ---------- META DESCRIPTION ---------- */
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = pageDescription;

    /* ---------- META KEYWORDS ---------- */
    let metaKeywords = document.querySelector("meta[name='keywords']");
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = pageKeywords;

    /* ---------- ROBOTS ---------- */
    let robots = document.querySelector("meta[name='robots']");
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.content = "index, follow";

    /* ---------- CANONICAL ---------- */
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = pageUrl;

    /* ---------- OPEN GRAPH ---------- */
    const setOG = (property, content) => {
      let tag = document.querySelector(`meta[property='${property}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    setOG("og:type", "website");
    setOG("og:site_name", "Narpavi Tech Chennai");
    setOG("og:locale", "en_IN");
    setOG("og:title", pageTitle);
    setOG("og:description", pageDescription);
    setOG("og:url", pageUrl);
    setOG("og:image", pageImage);

    /* ---------- TWITTER ---------- */
    const setTwitter = (name, content) => {
      let tag = document.querySelector(`meta[name='${name}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    setTwitter("twitter:card", "summary_large_image");
    setTwitter("twitter:title", pageTitle);
    setTwitter("twitter:description", pageDescription);
    setTwitter("twitter:image", pageImage);
    setTwitter("twitter:site", "@narpavitech"); // optional

    /* ---------- FAQ SCHEMA ---------- */
    if (faqs && faqs.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
           mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      };

      let script = document.getElementById("faq-schema");

      if (!script) {
        script = document.createElement("script");
        script.id = "faq-schema";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify(faqSchema);
    }
  }, [
    pageTitle,
    pageDescription,
    pageUrl,
    pageImage,
    pageKeywords,
    faqs,
  ]);

  return null;
};

export default SEO;
