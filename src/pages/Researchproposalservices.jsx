import React from 'react';
import './Researchproposalservices.scss'; // Optional for custom styling
import SEO from '../assets/SEO';
const PhDProposalHero = () => {
  return (
    <section className="phd-proposal-hero">
      <SEO
  title="PhD Research Proposal Writing Services in Chennai | Topic Selection & Funding"
  description="Expert PhD proposal writing services including topic selection, proposal structuring, funding proposal drafting, and research-ready deliverables for scholars across all Indian universities."
  url="/research-proposal-services"
  keywords={[
    "PhD Proposal Writing Chennai",
    "Research Proposal Services",
    "PhD Topic Selection Help",
    "Funding Proposal Writing",
    "Engineering PhD Proposal Guide",
    "Research Proposal Support India",
    "Doctoral Proposal Assistance"
  ]}
  faqs={[
    {
      question: "Do you provide complete PhD proposal writing help?",
      answer: "Yes. We support scholars with topic selection, research framing, proposal drafting, methodology design, timeline creation, and plagiarism-free final submission."
    },
    {
      question: "Can you assist with funding proposal writing?",
      answer: "Absolutely. We help craft grant-winning proposals for government, private, and institutional funding schemes."
    },
    {
      question: "Is this service limited to engineering PhDs?",
      answer: "No. We support PhD scholars across engineering, management, arts, science, and interdisciplinary fields."
    }
  ]}
/>

      <div className="hero-content">
        <h1>Top-Rated PhD Research Proposal Writing Services Across Indian Universities in Chennai</h1>
        <h2>
          📌 Empowering doctoral scholars with expert guidance, customized proposals, and research-ready solutions across disciplines.
        </h2>
      </div>

      <div className="quick-links">
        <div className="quick-card">
          <h3>🧠 How to Write an Effective Research Proposal</h3>
          <p>Step-by-step guide to structure, methodology, and framing your research question.</p>
          <a href="/research-proposal-services/how-to-write-research-proposal" className="read-more">🔗 Read More</a>
        </div>

        <div className="quick-card">
          <h3>🔥 Choosing Trending Topics for Your Research Proposal</h3>
          <p>Explore high-demand, future-ready research areas in your field.</p>
          <a href="/research-proposal-services/trending-research-topics" className="read-more">🔗 Explore Topics</a>
        </div>

        <div className="quick-card">
          <h3>💰 Writing Research Proposals for Funding</h3>
          <p>Craft persuasive proposals that win grants and institutional approvals.</p>
          <a href="/research-proposal-services/research-proposal-for-funding" className="read-more">🔗 Learn Now</a>
        </div>

        <div className="quick-card">
          <h3>🛠 Step-by-Step Research Proposal Writing for Engineers</h3>
          <p>Blueprint your innovation journey: structure, methods, timelines, and tools tailored for engineering PhDs.</p>
          <a href="/research-proposal-services/engineering-research-proposal-guide" className="read-more">🔗 Talk to an Expert</a>
        </div>

      </div>
    </section>
  );
};

export default PhDProposalHero;
