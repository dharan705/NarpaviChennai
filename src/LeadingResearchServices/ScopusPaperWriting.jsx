import React from "react";
import "./ScopusPaperWriting.scss";
import { CheckCircle, BookCheck, Table, FileText, RefreshCcw, PenLine } from "lucide-react";
import Subsidebar from "../pages/Subsidebar";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is a Scopus-indexed journal?",
    answer:
      "Scopus is one of the largest abstract and citation databases of peer-reviewed literature. A Scopus-indexed journal meets specific quality benchmarks and is recognized internationally for academic publishing.",
  },
  {
    question: "How is Scopus paper writing different from regular paper writing?",
    answer:
      "Scopus papers require strict adherence to journal scope, formatting, citation styles, and originality checks. Regular papers may not meet indexing or quality standards required for Scopus publication.",
  },
  {
    question: "Do you help with selecting the right Scopus journal?",
    answer:
      "Yes. Our team recommends journals based on domain, scope, impact, and turnaround time. We consider your research topic and indexing goals before suggesting suitable options.",
  },
  {
    question: "How many references are used in a Scopus paper?",
    answer:
      "Typically, 30+ high-quality references are included from Scopus, Web of Science, and Google Scholar to ensure credibility and depth.",
  },
  {
    question: "What is the usual turnaround time?",
    answer:
      "Our standard delivery time is 10–15 working days, but expedited options are available depending on the complexity and requirements.",
  },
];

const ScopusPaperWriting = () => {
  return (
    <section className="scopus-writing">
      <Subsidebar />
       <aside className="left-sidebar2">
        <ul>
          <li><a href="/service">Our PhD Support Services in Chennai</a></li>
          <li><a href="/review-article-writing">Review Article Writing in Chennai</a></li>
          <li><a href="/sci-journal-paper-writing">SCI Journal Paper Writing in Chennai</a></li>
          <li><a href="/scopus-journal-paper-writing">Scopus Journal Paper Writing in Chennai</a></li>
          <li><a href="/ieee-conference-paper-writing">IEEE Conference Paper Writing in Chennai</a></li>

          <li><a href="/publication-services">Publication Services in Chennai</a></li>
          <li><a href="/publication-services/conference-paper-publication-services">Conference Paper Publication in Chennai</a></li>
          <li><a href="/publication-services/SCIJournal">SCI Journal Publication in Chennai</a></li>
          <li><a href="/publication-services/scopus-journal-publication-services">Scopus Journal Publication in Chennai</a></li>
          <li><a href="/publication-services/review-article-publication">Review Article Publication in Chennai</a></li>
          <li><a href="/publication-services/ugc-care-journal-publication-services">UGC Care Journal Publication in Chennai</a></li>
          <li><a href="/publication-services/book-isbn-publication-support">Book ISBN Publication Support in Chennai</a></li>

          <li><a href="/research-proposal-services/how-to-write-research-proposal">How to Write Research Proposal in Chennai</a></li>
          <li><a href="/research-proposal-services/trending-research-topics">Trending Research Topics in Chennai</a></li>
          <li><a href="/research-proposal-services/research-proposal-for-funding">Research Proposal For Funding in Chennai</a></li>
          <li><a href="/research-proposal-services/engineering-research-proposal-guide">Engineering Research Proposal Guide in Chennai</a></li>

          <li><a href="/scopus-journal-paper-writing/scopus-services">Scopus Services in Chennai</a></li>

          <li><a href="/service/ieee-project-center-in-chennai">IEEE Project Centers in Chennai</a></li>
          <li><a href="/service/matlab-project-center-in-chennai">Matlab Project Centers in Chennai</a></li>
          <li><a href="/service/ns2-ns3-project-center-in-chennai">NS2 NS3 Project Centers in Chennai</a></li>
          <li><a href="/service/phd-project-center-in-chennai">PhD Project Centers in Chennai</a></li>
          <li><a href="/service/me-mtech-project-center-in-chennai">M.E M.Tech Project Centers in Chennai</a></li>
          <li><a href="/service/be-btech-project-center-in-chennai">B.E B.Tech Project Centers in Chennai</a></li>
          <li><a href="/service/engineering-phd-research-guidance-chennai">Engineering PhD Research Project Guidance Centers in Chennai</a></li>
          <li><a href="/service/phd-research-thesis-writing-services-help">PhD Thesis Writing Services in Chennai</a></li>
          <li><a href="/service/research-paper-writing">Research Paper Writing Service in Chennai</a></li>
          <li><a href="/service/conference-paper">Conference Paper Writing Services in Chennai</a></li>
          <li><a href="/service/research-paper-publication-help-and-services">Research Paper Publication Support Services in Chennai</a></li>
          <li><a href="/service/phd-research-guidance-chennai">PhD Research Guidance in Chennai</a></li>
        </ul>
      </aside>
      <div className="container">
        <h2>📘 Scopus Journal Paper Writing</h2>
        <p className="intro">
          At <strong>Narpavi Research Institute</strong>, our <strong>Scopus Journal Paper Writing</strong> service is designed to deliver customized manuscripts that align with the strict standards of Scopus-indexed journals. From selecting a journal to final formatting, we offer full-spectrum support for researchers across all domains.
        </p>

        <h3>✅ Key Benefits of Choosing Narpavi</h3>
        <ul className="benefits-list">
          <li><CheckCircle size={18} /> Customized to journal scope and submission guidelines</li>
          <li><BookCheck size={18} /> Strong literature base: 30+ references from Scopus/Web of Science</li>
          <li><Table size={18} /> Tables, graphs, and figures as per journal norms</li>
          <li><PenLine size={18} /> Expert writing team: Technical + domain-specific</li>
          <li><RefreshCcw size={18} /> Unlimited revisions until reviewer-ready</li>
        </ul>

        <h3>📊 Scopus Journal Paper Writing vs General Paper Writing</h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Features</th>
                <th>Scopus Journal Paper Writing</th>
                <th>General Paper Writing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Indexing Compliance</td>
                <td>Fully compliant with Scopus standards</td>
                <td>Not always aligned with indexed requirements</td>
              </tr>
              <tr>
                <td>Language Quality</td>
                <td>Professional, Academic, Technical</td>
                <td>Varies; not always journal-ready</td>
              </tr>
              <tr>
                <td>Formatting</td>
                <td>Strict journal-specific templates</td>
                <td>Generic or self-chosen</td>
              </tr>
              <tr>
                <td>Reference Style</td>
                <td>APA / IEEE / MLA / Elsevier-specific</td>
                <td>Basic or inconsistent</td>
              </tr>
              <tr>
                <td>Acceptance Support</td>
                <td>High (compliance + quality)</td>
                <td>Uncertain</td>
              </tr>
              <tr>
                <td>Review/Revision Assistance</td>
                <td>Yes</td>
                <td>Often not included</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>🧠 Scopus Journal Paper Writing Architecture</h3>
        <pre className="flowchart">
CopyEdit
+---------------------------+
| 1. Domain Analysis        |
+---------------------------+
            ↓
+---------------------------+
| 2. Topic Finalization     |
+---------------------------+
            ↓
+---------------------------+
| 3. Literature Review      |
|    (Scopus-based)         |
+---------------------------+
            ↓
+---------------------------+
| 4. Methodology Design     |
+---------------------------+
            ↓
+---------------------------+
| 5. Draft Writing & QA     |
+---------------------------+
            ↓
+---------------------------+
| 6. Journal Formatting     |
+---------------------------+
            ↓
+---------------------------+
| 7. Final Review & Submit  |
+---------------------------+
        </pre>

        <h3>🚀 Key Features of Our Scopus Journal Paper Writing</h3>
        <ul className="features">
          <li>📌 <strong>Scopus Journal Paper Writing</strong> keyword included 4+ times for SEO</li>
          <li>✒️ Technical writing support for Engineering, CS, Management, Medicine & Social Science</li>
          <li>📥 Includes Turnitin report, Grammarly scorecard & citation index</li>
          <li>📚 Assistance with journal selection, submission & reviewer responses</li>
        </ul>

      </div>
        <section className="faq-section">
        <h2>FAQs on Topic Selection</h2>
        <div className="faq-items">
          {faqs.map((faq, index) => (
            <details key={index}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
         
          </section>
          <aside className="right-sidebar">
 
<ul>
  <li>
    <NavLink to="/review-article-writing">Review Article Writing</NavLink>
  </li>
  <li>
    <NavLink to="/sci-journal-paper-writing">SCI Journal Paper Writing</NavLink>
  </li>
  <li>
    <NavLink to="/scopus-journal-paper-writing">Scopus Journal Paper Writing</NavLink>
  </li>
  <li>
    <NavLink to="/ieee-conference-paper-writing">IEEE Conference Paper Writing</NavLink>
  </li>
</ul>
</aside>
    </section>
  );
};

export default ScopusPaperWriting;
