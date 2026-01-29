import "./Phdservices.scss";
import Subsidebar from ".././pages/Subsidebar"
import SEO from "../assets/SEO";

const faqs = [
  {
    question:
      "Which indexing databases are preferred by SRM University for research publication?",
    answer:
      "SRM University commonly prefers indexing databases such as SCI, Scopus, Web of Science, IEEE Xplore, and PubMed depending on the research domain.",
  },
  {
    question:
      "Is it mandatory to publish in Scopus or SCI journals at SRM University?",
    answer:
      "While not always mandatory, SRM strongly encourages publishing in high-impact journals indexed in Scopus, SCI, or Web of Science, especially for PhD students.",
  },
  {
    question: "Can I publish in Google Scholar indexed journals?",
    answer:
      "Yes, but it is advised to prioritize journals indexed in Scopus, SCI, or equivalent reputed databases for academic and institutional recognition.",
  },
  {
    question: "Does SRM University provide support for publication fees?",
    answer:
      "Some departments may offer partial or full financial support for publication in reputed journals. Students should consult their research supervisor or department.",
  },
  {
    question: "Are conferences accepted for PhD publication requirements?",
    answer:
      "Yes, conferences—especially those indexed in Scopus or IEEE—are often accepted. However, it depends on the department’s specific guidelines.",
  },
];

const ResearchPublication = () => {
  return (
    <div className="phd-service">
      <SEO
        title="Research Paper Publication Services for PhD Students from SRM University"
        description="Guidance for SRM University PhD scholars on preferred indexing databases (SCI, Scopus, Web of Science, IEEE Xplore, PubMed), departmental expectations, and publication support."
        url="/service/research-paper-publication-services-for-phd-students-from-srm-university"
        keywords={[
          "SRM University PhD publication",
          "SRMIST research paper indexing",
          "Scopus SCI Web of Science SRM",
          "SRM research publication guidelines",
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
          Research Paper Publication Services for PhD students from SRM
          University
        </h1>
        <p>
          SRM Institute of Science and Technology encourages faculty and
          research scholars to publish in high‑quality, indexed journals and
          conferences, and many regulations explicitly mention indexed journals
          such as SCI, SSCI, Web of Science and Scopus as preferred venues for
          research outputs.[web:278][web:282]
        </p>
        <p>
          Specific requirements can differ by campus, department, and PhD
          regulation version, but policies commonly emphasize publication in
          peer‑reviewed or indexed journals with good impact metrics and often
          link synopsis/thesis submission to a minimum number of such
          publications.[web:282][web:284]
        </p>

        <ol>
          <li>
            <strong>SCI (Science Citation Index):</strong> SCI and related Web
            of Science indexes (for example SSCI, AHCI) are strongly valued for
            their selectivity and impact; some SRM PhD regulations explicitly
            mention SCI or indexed journals as preferred targets.[web:278][web:286]
          </li>
          <li>
            <strong>Scopus:</strong> Scopus is widely accepted as a key
            indexing database, and SRM webinars and policies discuss publishing
            in Scopus and Web of Science indexed journals as a goal for
            scholars.[web:276][web:281]
          </li>
          <li>
            <strong>Web of Science:</strong> In addition to SCI, broader Web of
            Science coverage is used for evaluating publications and is often
            referenced in research and PhD regulations.[web:278][web:282]
          </li>
          <li>
            <strong>IEEE Xplore:</strong> For engineering, technology, and
            computer science, IEEE Xplore–indexed conferences and journals are
            commonly recognized as reputable venues.
          </li>
          <li>
            <strong>PubMed:</strong> For medical and life‑science research,
            PubMed‑indexed journals are often recommended to ensure reach and
            credibility.
          </li>
          <li>
            <strong>Other Indexes (ESCI, DBLP, etc.):</strong> Emerging Sources
            Citation Index (ESCI), DBLP for computer science, and similar
            databases may also be accepted depending on departmental norms.[web:278]
          </li>
          <li>
            <strong>Google Scholar:</strong> Although useful for discovery,
            Google Scholar alone is typically not treated as a primary indexing
            criterion; SRM policies instead emphasize established indexing
            services like Scopus, Web of Science, and SCI for quality
            evaluation.[web:278][web:283]
          </li>
        </ol>

        <p>
          Because policies and preferred indexes are updated periodically,
          scholars should always consult the latest SRM PhD regulations and
          their department or research office to confirm which indexing
          databases and minimum publication requirements apply to their specific
          program and batch.[web:277][web:282]
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

export default ResearchPublication;
