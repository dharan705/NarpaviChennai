import "./Phdservices.scss";
import Subsidebar from ".././pages/Subsidebar"
import SEO from "../assets/SEO";

const faqs = [
  {
    question:
      "Which indexing databases are accepted by Sathyabama University for PhD publications?",
    answer:
      "Sathyabama University accepts journals indexed in SCI, Scopus, Web of Science, IEEE Xplore, PubMed, ESCI, DBLP, and Google Scholar, depending on the discipline.",
  },
  {
    question:
      "Is Scopus-indexed publication mandatory for PhD students at Sathyabama?",
    answer:
      "While it may not be mandatory for all, many departments strongly encourage or require Scopus-indexed journals for higher research credibility and recognition.",
  },
  {
    question:
      "Does Sathyabama University provide any publication support for PhD students?",
    answer:
      "Yes, the university often supports students by organizing workshops, funding conference papers, and recommending quality journals for publication.",
  },
  {
    question:
      "Can I publish in international journals as a Sathyabama PhD student?",
    answer:
      "Absolutely. The university encourages international publications in reputed journals to increase global research visibility.",
  },
  {
    question:
      "How can I find suitable journals accepted by my department?",
    answer:
      "You should consult your research guide, departmental research coordinator, or the official PhD regulations issued by Sathyabama University.",
  },
];

const SathyabamaResearch = () => {
  return (
    <div className="phd-service">
      <SEO
        title="Research Paper Publication Services for PhD Students from Sathyabama University"
        description="Guidance for Sathyabama Institute of Science and Technology PhD students on preferred indexing databases (SCI, Scopus, Web of Science, IEEE Xplore, PubMed, ESCI, DBLP, Google Scholar) and publication expectations."
        url="/service/research-paper-sathyabama"
        keywords={[
          "Sathyabama PhD publication",
          "Sathyabama research indexing SCI Scopus",
          "Sathyabama research policy",
          "PhD journals for Sathyabama University",
        ]}
        faqs={faqs}
      />

         <Subsidebar
  extraLinks={[
    { id: "service", label: "service", path: "/service" }
  ]}
/>

      <div className="phd-guidance-container">
        <h1 className="title">
          Research Paper Publication Services for PhD Students from Sathyabama
          University
        </h1>
        <p>
          Sathyabama Institute of Science and Technology promotes research and
          encourages faculty and scholars to publish in refereed, indexed
          journals, with institutional policy documents explicitly emphasizing
          Science Citation Indexed journals with good impact factors and
          publication ethics.[web:295][web:297]
        </p>
        <p>
          While detailed publication requirements differ across PhD regulations
          and disciplines, scholars are generally expected to publish original
          work in recognized indexed venues before synopsis or thesis
          submission, following the institute’s PhD regulations and research
          promotion policies.[web:291][web:297]
        </p>

        <ol>
          <li>
            <strong>SCI (Science Citation Index):</strong> SCI‑indexed journals
            are prioritized for their quality and impact, and Sathyabama’s
            research policy highlights quality publications in SCI journals with
            good impact factors as a key objective.[web:295][web:297]
          </li>
          <li>
            <strong>Scopus:</strong> Scopus‑indexed journals across multiple
            disciplines are widely accepted to demonstrate research visibility
            and citation potential.
          </li>
          <li>
            <strong>Web of Science:</strong> Beyond SCI, other Web of Science
            citation indexes (for example SSCI, AHCI, ESCI) can also be relevant
            depending on the field.
          </li>
          <li>
            <strong>IEEE Xplore:</strong> For engineering, technology, and
            computer science, IEEE conferences and journals indexed in IEEE
            Xplore provide strong technical visibility.
          </li>
          <li>
            <strong>PubMed:</strong> In medical and life‑science domains,
            PubMed‑indexed journals are important for reaching clinical and
            biomedical audiences.
          </li>
          <li>
            <strong>ESCI:</strong> Emerging Sources Citation Index (ESCI)
            journals, which are part of Web of Science, may count where accepted
            by departmental norms.
          </li>
          <li>
            <strong>DBLP:</strong> For computer science and related areas, DBLP
            indexing can indicate reputable conference and journal venues.
          </li>
          <li>
            <strong>Google Scholar:</strong> While useful for discoverability,
            Google Scholar alone is usually not treated as a primary quality
            index; departments typically prioritize SCI, Scopus, or equivalent
            curated databases.[web:295][web:297]
          </li>
        </ol>

        <p>
          Because indexing expectations and minimum publication criteria may
          change over time, PhD scholars should always consult the latest
          Sathyabama PhD regulations and their department or research guide to
          confirm exactly which indexes, counts, and types of publications are
          currently required.[web:290][web:291]
        </p>

        <section className="servicefaq-section">
          <h2>📘 FAQs on Annexure Journal Publications</h2>
          <div className="faq-items">
            {faqs.map((faq, index) => (
              <details key={index}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SathyabamaResearch;
