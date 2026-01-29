import React from "react";
import "./Phdservices.scss";
import Subsidebar from ".././pages/Subsidebar"
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "What is a PhD research proposal?",
    answer:
      "A PhD research proposal is a document outlining your intended research topic, objectives, methodology, and significance. It helps universities evaluate the feasibility and academic merit of your study.",
  },
  {
    question: "Can I get help with writing my research proposal?",
    answer:
      "Yes, services like Narpavi Technologies offer guidance, editing, formatting, and methodology support to help you write a compelling and structured proposal.",
  },
  {
    question: "Will the research proposal be original and plagiarism-free?",
    answer:
      "Yes, professional services ensure the content is original, well-cited, and plagiarism-checked, but the core idea should always come from the student.",
  },
  {
    question: "Do I need to attend workshops if I use Narpavi Technologies' services?",
    answer:
      "No, Narpavi Technologies provides complete guidance and writing support, so attending external workshops is not necessary.",
  },
  {
    question: "Is it ethical to use research proposal writing services?",
    answer:
      "Yes, it is ethical if the services are used for support, editing, and guidance—not for submitting someone else's work as your own.",
  },
];

const ResearchProposal = () => {
  return (
    <div className="phd-service">
      <SEO
        title="Research Proposal Writing Help & Services"
        description="Narpavi Technologies provides PhD research proposal support worldwide: topic framing, structure, methodology guidance, editing, formatting, and plagiarism-checked documentation."
        url="/service/research-proposal-writing"
        keywords={[
          "PhD research proposal writing",
          "research proposal help Narpavi",
          "proposal methodology and editing",
          "PhD proposal plagiarism check",
        ]}
        faqs={faqs}
      />

         <Subsidebar
  extraLinks={[
    { id: "service", label: "service", path: "/service" }
  ]}
/>

      <div className="phd-guidance-container">
        <h1 className="title">Research Proposal Writing Help & Services</h1>
        <p>
          Research proposal writing services for PhD studies provide structured
          support to candidates who need help shaping, refining, and presenting
          their proposed work.{" "}
          <strong>Narpavi Technologies</strong> offers such services for PhD
          aspirants across the globe.
        </p>

        <p>Here are some common services offered by Narpavi Technologies:</p>

        <ol>
          <li>
            <strong>Research Proposal Writing:</strong> Assistance in framing
            research problems, articulating questions and objectives, and
            outlining appropriate methodology and significance.
          </li>
          <li>
            <strong>Proposal Editing and Proofreading:</strong> Detailed review
            to improve clarity, coherence, academic tone, and adherence to
            institutional formats.
          </li>
          <li>
            <strong>Proposal Review and Feedback:</strong> Constructive comments
            and suggestions to align the proposal with PhD program expectations
            and research goals.
          </li>
          <li>
            <strong>Formatting and Presentation:</strong> Help with cover pages,
            sectioning, citation styles, and reference lists to match university
            guidelines.
          </li>
          <li>
            <strong>Research Methodology Guidance:</strong> Support in choosing
            appropriate research designs, data collection strategies, and
            analysis methods.
          </li>
          <li>
            <strong>Access to Research Resources:</strong> Direction on
            accessing databases, journals, and references useful for the
            proposal’s literature review.
          </li>
        </ol>

        <p>
          Support services should complement, not replace, the student’s own
          intellectual work. Candidates remain responsible for the originality
          of ideas, and Narpavi Technologies maintains confidentiality while
          working within academic integrity boundaries.
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

export default ResearchProposal;
