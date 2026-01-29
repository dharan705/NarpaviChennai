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
  robots,
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

  const robotsValue = robots || (description ? "index, follow" : "noindex, follow");

  useEffect(() => {
    /* ---------- TITLE ---------- */
    document.title = pageTitle;

    const setMeta = (selector, name, content) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    /* DESCRIPTION */
    setMeta("meta[name='description']", "description", pageDescription);

    /* KEYWORDS */
    setMeta("meta[name='keywords']", "keywords", pageKeywords);

    /* ROBOTS */
    setMeta("meta[name='robots']", "robots", robotsValue);

    /* ---------- CANONICAL ---------- */
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = pageUrl;

    const setOG = (property, content) => {
      let ogTag = document.querySelector(`meta[property='${property}']`);
      if (!ogTag) {
        ogTag = document.createElement("meta");
        ogTag.setAttribute("property", property);
        document.head.appendChild(ogTag);
      }
      ogTag.content = content;
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
      let twitterTag = document.querySelector(`meta[name='${name}']`);
      if (!twitterTag) {
        twitterTag = document.createElement("meta");
        twitterTag.setAttribute("name", name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.content = content;
    };

    setTwitter("twitter:card", "summary_large_image");
    setTwitter("twitter:title", pageTitle);
    setTwitter("twitter:description", pageDescription);
    setTwitter("twitter:image", pageImage);
    setTwitter("twitter:site", "@narpavitech");

    /* ---------- FAQ SCHEMA ---------- */
    let faqScript = document.getElementById("faq-schema");

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

      if (!faqScript) {
        faqScript = document.createElement("script");
        faqScript.id = "faq-schema";
        faqScript.type = "application/ld+json";
        document.head.appendChild(faqScript);
      }
      faqScript.textContent = JSON.stringify(faqSchema);
    } else if (faqScript) {
      faqScript.remove();
    }
  }, [
    pageTitle,
    pageDescription,
    pageUrl,
    pageImage,
    pageKeywords,
    robotsValue,
    faqs,
  ]);

  return null;
};

export default SEO;
