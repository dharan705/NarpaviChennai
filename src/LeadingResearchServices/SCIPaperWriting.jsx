import React from "react";
import "./SCIPaperWriting.scss";
import { CheckCircle, BookOpenCheck, Brain, ClipboardCheck, FileEdit } from "lucide-react";
import Subsidebar from "../pages/Subsidebar";

const faqs = [
  {
    question: "What is an SCI-indexed journal?",
    answer:
      "SCI (Science Citation Index) journals are globally recognized journals indexed in Web of Science, known for their academic rigor and high impact factor. Publishing here increases your research visibility and credibility.",
  },
  {
    question: "How long does it take to complete an SCI journal paper?",
    answer:
      "We usually take between 15–25 working days, depending on the complexity, domain, and depth of your research.",
  },
  {
    question: "Can you help with selecting the right SCI journal?",
    answer:
      "Yes. We perform journal matching based on your topic, citation requirements, and preferred impact factor. We also consider journal scope and acceptance trends.",
  },
  {
    question: "Do you provide plagiarism check and reduction?",
    answer:
      "Absolutely. We use AI-powered tools and manual rewriting to ensure Turnitin similarity ≤10%—ready for submission.",
  },
  {
    question: "Will you help with formatting and submission?",
    answer:
      "Yes, we format the manuscript as per journal guidelines (APA, IEEE, Elsevier, Springer, etc.) and assist with final submission and handling reviewer comments.",
  },
];

const SCIPaperWriting = () => {
  return (
    <section className="sci-writing">
      <Subsidebar />
      <div className="sci-layout">
      <div className="container">
        <h2>📘 SCI Journal Paper Writing</h2>
        <p className="intro">
          <strong>🚀 Accelerate Your Academic Journey</strong> with Premium <strong>SCI Journal Paper Writing</strong> by Narpavi.
          Publishing in SCI-indexed journals requires technical excellence, clear structure, and strict adherence to journal standards. Narpavi transforms your findings into globally accepted, peer-reviewed contributions across domains like Engineering, AI, Healthcare, and Business.
        </p>

        <h3>🎯 Why Narpavi for SCI Journal Paper Writing?</h3>
        <ul className="highlights-list">
          <li><CheckCircle size={18} /> End-to-end support from topic to journal submission</li>
          <li><CheckCircle size={18} /> Domain experts with PhD credentials</li>
          <li><CheckCircle size={18} /> Native-English technical editing & rewriting</li>
          <li><CheckCircle size={18} /> AI-assisted plagiarism control (Turnitin ≤10%)</li>
          <li><CheckCircle size={18} /> Reviewer response drafting for R1/R2 rounds</li>
        </ul>

        <h3>📊 Service Comparison Table</h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Features & Services</th>
                <th>SCI Journal Paper Writing (Narpavi)</th>
                <th>Traditional Editing Providers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dedicated PhD Writer in Same Domain</td>
                <td>✅ Available</td>
                <td>❌ Not Assured</td>
              </tr>
              <tr>
                <td>SCI Journal Scope Matching</td>
                <td>✅ Done per IF & Field</td>
                <td>❌ Generic Approach</td>
              </tr>
              <tr>
                <td>Advanced Plagiarism Reduction</td>
                <td>✅ Hybrid AI + Manual</td>
                <td>⚠️ Limited or Optional</td>
              </tr>
              <tr>
                <td>Reviewer Comment Support</td>
                <td>✅ Included (R1, R2, R3)</td>
                <td>❌ Not Provided</td>
              </tr>
              <tr>
                <td>Journal Formatting</td>
                <td>✅ Custom Styling</td>
                <td>❌ Generic Templates</td>
              </tr>
              <tr>
                <td>Technical & Language Editing</td>
                <td>✅ Multi-level Editing</td>
                <td>⚠️ Basic Proofreading Only</td>
              </tr>
              <tr>
                <td>Submission Help</td>
                <td>✅ Included</td>
                <td>❌ Not Covered</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>🔄 SCI Journal Paper Writing Workflow</h3>
        <pre className="flowchart">
CopyEdit
[1. Research Idea / Topic Finalization]
        ↓
[2. Selection of SCI Journal Based on Impact Factor & Scope]
        ↓
[3. Drafting of Manuscript (Content, Data, Methodology)]
        ↓
[4. AI-Powered Plagiarism Check & Refinement (≤10% Turnitin)]
        ↓
[5. Technical Review & Statistical Validation]
        ↓
[6. Language Editing & Formatting to Journal Template]
        ↓
[7. Response Preparation to Reviewer Comments (R1, R2)]
        ↓
[8. Final Submission & Acceptance Support]
        </pre>

        <h3>🌍 Global Reach & Client Success</h3>
        <ul className="stats">
          <li><BookOpenCheck size={20} /> Trusted by researchers in 10+ countries (India, USA, UK, UAE…)</li>
          <li><Brain size={20} /> 900+ SCI paper successes</li>
          <li><ClipboardCheck size={20} /> 94% acceptance in first 2 submissions</li>
          <li><FileEdit size={20} /> 45+ research domains handled</li>
        </ul>
      </div>
      <aside className="right-sidebar">
          <h4>📌 SCI Writing Guides</h4>
          <ul className="relative-services">
            <li><a href="/sci-journal-paper-writing/sci-writing-guide">SCI Writing Guide</a></li>
            <li><a href="/sci-journal-paper-writing/trending-engineering-topics-for-scopus">Trending Engineering Topics</a></li>
            <li><a href="/sci-journal-paper-writing/novelty-in-engineering">Novelty in Engineering</a></li>
            <li><a href="/sci-journal-paper-writing/sci-vs-scopus">SCI vs Scopus</a></li>
            <li><a href="/sci-journal-paper-writing/sci-benefits">Benefits of SCI Journals</a></li>
            <li><a href="/sci-journal-paper-writing/sci-journal-selection">SCI Journal Selection</a></li>
          </ul>
        </aside>
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
         <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
        
          </section>
          
    </section>
  );
};

export default SCIPaperWriting;
