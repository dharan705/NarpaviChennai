import React from "react";
import "./ReviewArticleWriting.scss";
import { BookOpen, ListChecks, CheckCircle2, FileText } from "lucide-react";
import Subsidebar from "../pages/Subsidebar";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is a Review Article?",
    answer:
      "A review article summarizes and synthesizes previous research on a topic, offering critical insights, gaps, and future directions.",
  },
  {
    question: "How is a review article different from a research article?",
    answer:
      "Review articles analyze existing studies, while research articles present original experimental results.",
  },
  {
    question: "How many references are included?",
    answer:
      "Typically 50–150+ citations from reputed databases such as Scopus, PubMed, and Web of Science.",
  },
  {
    question: "Do you follow journal formats?",
    answer:
      "Yes, APA, IEEE, Elsevier, Springer, and journal-specific formats are supported.",
  },
  {
    question: "What is the delivery time?",
    answer:
      "Usually 7–10 working days depending on topic complexity.",
  },
];

const ReviewArticleWriting = () => {
  return (
    <section className="review-article">
      <Subsidebar />

      {/* GRID LAYOUT */}
      <div className="review-layout">
        {/* MAIN CONTENT */}
        <div className="container">
          <h2>📖 Review Article Writing</h2>

          <p className="intro">
            At <strong>Narpavi Research Institute</strong>, we specialize in
            <strong> Review Article Writing</strong> for Scopus, SCI, IEEE, and
            Springer-indexed journals with deep analysis and extensive citations.
          </p>

          {/* FEATURES */}
          <div className="features-grid">
            <div className="feature-card">
              <BookOpen size={28} />
              <h4>📚 Literature-Rich Content</h4>
              <p>50+ citations from reputed academic databases.</p>
            </div>

            <div className="feature-card">
              <ListChecks size={28} />
              <h4>🧠 Domain-Centric Analysis</h4>
              <p>Prepared by subject-matter experts.</p>
            </div>

            <div className="feature-card">
              <CheckCircle2 size={28} />
              <h4>🧾 Publication Ready</h4>
              <p>Formatted as per journal guidelines.</p>
            </div>

            <div className="feature-card">
              <FileText size={28} />
              <h4>✍️ End-to-End Support</h4>
              <p>From topic selection to submission.</p>
            </div>
          </div>

          {/* COMPARISON TABLE */}
          <h3>🔍 Review vs Research Article</h3>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Review Article</th>
                  <th>Research Article</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Purpose</td>
                  <td>Summarize existing research</td>
                  <td>Present new findings</td>
                </tr>
                <tr>
                  <td>References</td>
                  <td>50–150+</td>
                  <td>Limited</td>
                </tr>
                <tr>
                  <td>Data</td>
                  <td>Secondary</td>
                  <td>Primary</td>
                </tr>
                <tr>
                  <td>Timeline</td>
                  <td>7–10 days</td>
                  <td>10–15 days</td>
                </tr>
              </tbody>
            </table>
          </div>

        <h3>🔧 Review Article Writing Workflow</h3>

<div className="architecture-steps">
  <div className="step">
    <span className="step-number">1</span>
    <p>Topic Selection</p>
  </div>

  <div className="step">
    <span className="step-number">2</span>
    <p>Literature Collection (Scopus, PubMed, Web of Science)</p>
  </div>

  <div className="step">
    <span className="step-number">3</span>
    <p>Theme-Based Organization</p>
  </div>

  <div className="step">
    <span className="step-number">4</span>
    <p>Critical Analysis & Research Gap Identification</p>
  </div>

  <div className="step">
    <span className="step-number">5</span>
    <p>Structured Drafting</p>
  </div>

  <div className="step">
    <span className="step-number">6</span>
    <p>Plagiarism Check & Quality Assurance</p>
  </div>

  <div className="step">
    <span className="step-number">7</span>
    <p>Journal Formatting & Submission Support</p>
  </div>
</div>


          {/* HIGHLIGHTS */}
          <div className="highlights">
            <h3>✅ Service Highlights</h3>
            <ul>
              <li>SEO-optimized academic content</li>
              <li>100% plagiarism-free</li>
              <li>Unlimited revisions</li>
              <li>Engineering & Medical domains</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="right-sidebar">
          <h4>📌 Related Review Services Link</h4>
          <ul className="relative-services">
            <li><a href="/review-ariticle-writing/engineering-literature-guide">Engineering Literature Guide</a></li>
            <li><a href="/review-ariticle-writing/medical-review-writing">Medical Review Writing</a></li>
            <li><a href="/review-ariticle-writing/literature-review-guide">Literature Review Guide</a></li>
            <li><a href="/review-ariticle-writing/sci-review-guide">SCI Review Guide</a></li>
            <li><a href="/review-ariticle-writing/scopus-review-guide">Scopus Review Guide</a></li>
            <li><a href="/review-ariticle-writing/systematic-review-guide">Systematic Review Guide</a></li>
          </ul>
           <ul>
            <li>
              <Link to="/review-article-writing">Review Article Writing</Link>
            </li>
            <li>
              <Link to="/sci-journal-paper-writing">SCI Journal Paper Writing</Link>
            </li>
            <li>
              <Link to="/scopus-journal-paper-writing">Scopus Journal Paper Writing</Link>
            </li>
            <li>
              <Link to="/ieee-conference-paper-writing">
                IEEE Conference Paper Writing
              </Link>
            </li>
          </ul>
        </aside>
      </div>

      {/* FAQ */}
      <section className="faq-section">
        <h2>FAQs</h2>
        {faqs.map((faq, i) => (
          <details key={i}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </section>
    </section>
  );
};

export default ReviewArticleWriting;
