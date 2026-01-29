import React from "react";
import { Helmet } from "react-helmet";
import "./TrendingResearchTopics.scss";
import Subsidebar from "../pages/Subsidebar";
import Leftsidebar from "../assets/Leftsidebar";

const faqs = [
  {
    question: "How do I choose a trending research topic?",
    answer:
      "Focus on current industry challenges, emerging technologies, and your area of interest. Align with themes like AI, sustainability, or smart infrastructure for broader impact."
  },
  {
    question: "Are these topics suitable for funding proposals?",
    answer:
      "Yes. Many listed topics align with funding agency priorities like green energy, digital innovation, and public infrastructure, making them strong candidates."
  },
  {
    question: "Can I get help narrowing down these topics?",
    answer:
      "Absolutely! Narpavi Research Institute provides expert assistance in refining your research topic based on your background and university guidelines."
  }
];

const topicsByDiscipline = [
  {
    title: "Computer Science / AI",
    topics: [
      "AI for Edge Computing",
      "Explainable AI in Critical Systems",
      "Blockchain for Cybersecurity",
      "AI in Healthcare Diagnostics"
    ]
  },
  {
    title: "Electrical Engineering",
    topics: [
      "Smart Grid Optimization",
      "Wireless Power Transfer",
      "Power Electronics for EVs",
      "6G Communication Systems"
    ]
  },
  {
    title: "Mechanical Engineering",
    topics: [
      "Soft Robotics",
      "Digital Twin for Predictive Maintenance",
      "Microfluidics in Biomedical Devices",
      "Energy Harvesting Systems"
    ]
  },
  {
    title: "Civil Engineering",
    topics: [
      "Sustainable Concrete Alternatives",
      "Earthquake-Resilient Structures",
      "AI in Urban Planning",
      "Smart Transportation Systems"
    ]
  },
  {
    title: "Electronics & Communication",
    topics: [
      "IoT-Enabled Sensors",
      "Millimeter Wave Technology",
      "MEMS for Medical Applications",
      "RF Energy Harvesting"
    ]
  },
  {
    title: "Chemical Engineering",
    topics: [
      "Green Hydrogen Production",
      "Carbon Capture Technologies",
      "Sustainable Polymer Synthesis",
      "Waste-to-Energy Conversion"
    ]
  },
  {
    title: "Biomedical Engineering",
    topics: [
      "Neural Interface Systems",
      "Smart Prosthetics with AI",
      "Organ-on-a-Chip Models",
      "Bioprinting for Tissue Engineering"
    ]
  },
  {
    title: "Environmental Engineering",
    topics: [
      "Water Purification using Nanomaterials",
      "Smart Waste Management Systems",
      "Climate-Resilient Infrastructure",
      "Air Quality Modeling with ML"
    ]
  },
  {
    title: "Aerospace Engineering",
    topics: [
      "Hypersonic Propulsion Systems",
      "Autonomous Drones for Logistics",
      "Lightweight Composite Materials",
      "Space Habitat Design"
    ]
  },
  {
    title: "Industrial Engineering",
    topics: [
      "Human-Centered Automation",
      "AI-Driven Supply Chain Optimization",
      "Industry 5.0 Applications",
      "Lean Systems with IoT"
    ]
  }
];

const TrendingResearchTopics = () => {
  return (
    <div className="ieee-page">
      <Subsidebar />

      {/* LEFT SIDEBAR */}
      <aside className="left-sidebar2">
        <ul>
          <li><a href="/research-proposal-services/how-to-write-research-proposal">How to Write a Research Proposal</a></li>
          <li><a href="/research-proposal-services/trending-research-topics">Trending Research Topics</a></li>
          <li><a href="/research-proposal-services/research-proposal-for-funding">Research Proposal for Funding</a></li>
          <li><a href="/research-proposal-services/engineering-research-proposal-guide">Engineering Research Proposal Guide</a></li>
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <h1>Choosing Trending Topics for Your Research Proposal</h1>
        <h2>Align Your Passion with the Future of Engineering</h2>

        <p className="intro">
          Selecting the right topic is the first — and often most crucial — step toward writing a successful research proposal.
          The ideal research topic should not only ignite your curiosity but also reflect the latest trends, industry demands,
          and global challenges. Before finalizing your topic, it is recommended to understand the overall
          {" "}
          <a
            href="/research-proposal-services/how-to-write-research-proposal"
            className="internal-link highlight-link"
          >
            research proposal writing process
          </a>
          {" "}
          to ensure alignment with academic and funding expectations.
        </p>

        <p className="intro">
          To help you get started, we’ve curated a list of cutting-edge research themes across various engineering disciplines.
          These topics are shaping the future of technology and innovation in 2025 — from AI-powered diagnostics and sustainable
          infrastructure to space systems and next-gen energy solutions. Many of these themes are also well-suited for
          {" "}
          <a
            href="/research-proposal-services/research-proposal-for-funding"
            className="internal-link highlight-link"
          >
            research proposals for funding
          </a>
          {" "}
          due to their strong societal and industrial relevance.
        </p>

        <p className="intro">
          Explore the table below to find inspiration that fits your field, and begin crafting a proposal that matters.
          For discipline-specific structuring and technical depth, you may also refer to our
          {" "}
          <a
            href="/research-proposal-services/engineering-research-proposal-guide"
            className="internal-link highlight-link"
          >
            Engineering Research Proposal Guide
          </a>
          {" "}
          before moving ahead.
        </p>

        <div className="topics-table">
          {topicsByDiscipline.map((discipline, idx) => (
            <div className="topic-card" key={idx}>
              <h3>{discipline.title}</h3>
              <ul>
                {discipline.topics.map((topic, i) => (
                  <li key={i}> {topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="closing-note">
          <h3>Conclusion: Start with the Right Topic, Shape the Future</h3>
          <p>
            Choosing the right research topic is more than a starting point — it’s the foundation for impactful innovation.
            The trends listed above are not just academic interests; they represent the direction in which industries,
            technologies, and societies are evolving.
          </p>
          <p>
            At Narpavi Research Institute, we’re here to help you align your research passion with the most relevant,
            high-impact areas of engineering. Whether you’re preparing for a funding proposal, academic thesis,
            or collaborative project, we offer the insights and support you need to choose a topic that resonates — and leads.
          </p>
          <p className="connect">
            🔧 The future is being engineered right now — let your research lead the way.
            <br />
            📞 Connect with our experts to explore your topic and refine your proposal strategy.
          </p>
        </div>

        <section className="alluniversityfaq-section">
          <h2>FAQs on Trending Research Topics</h2>
          <div className="faq-items">
            {faqs.map((faq, index) => (
              <details key={index}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="right-sidebar1">
       <Leftsidebar/>

        <h3>Keywords</h3>
        <ul>
          <li>Research Proposal Topics 2025</li>
          <li>Trending Engineering Ideas</li>
          <li>AI Research PhD Topics</li>
          <li>Civil Engineering Project Ideas</li>
          <li>Narpavi Research Institute</li>
        </ul>
      </aside>
    </div>
  );
};

export default TrendingResearchTopics;
