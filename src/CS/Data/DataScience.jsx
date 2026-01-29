import "./DataScience.scss";
import Subsidebar from "../../pages/Subsidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";
import Csesidebar from "../../assets/Csesidebar";

const keywords = [
  "Data Science – Project Development Center in Chennai",
  "Data Engineering Project Development Center in Chennai",
  "Data Mining Project Development Center in Chennai",
  "IEEE Data Science Projects 2023–2025",
  "B.Tech Data Science Projects",
  "M.Tech Data Engineering Projects",
  "Ph.D. Data Mining Research",
  "Big Data Analytics Projects",
  "Real-Time Data Processing Projects",
  "Scalable Data Pipeline Development"
];

const faqs = [
  {
    question: "What services does the Data Science, Data Engineering & Data Mining Project Development Center offer?",
    answer:
      "Narpavi Research Institute supports B.Tech, M.Tech, and Ph.D. students in IEEE-aligned (2023–2025) Data Science, Data Engineering, and Data Mining projects across healthcare, finance, and smart cities."
  },
  {
    question: "What types of projects are supported?",
    answer:
      "We support predictive analytics, real-time pipelines, scalable big data systems, and advanced research projects for undergraduate, postgraduate, and doctoral scholars."
  },
  {
    question: "Which technologies are used?",
    answer:
      "Our stack includes Python, R, Apache Spark, Hadoop, Kafka, TensorFlow, and cloud platforms like AWS, Azure, and GCP."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are selected from IEEE Transactions (2023–2025), covering federated learning, graph mining, and real-time analytics."
  },
  {
    question: "What academic support is provided?",
    answer:
      "We provide end-to-end guidance including topic selection, implementation, validation, documentation, and IEEE/Scopus publication support."
  }
];

const DataScienceDataEngineeringDataMiningProjectDevelopmentCenter = () => {
  return (
    <div className="MobileAppDevelopmentCenter">

      {/* ✅ SEO FIXED */}
      <SEO
        title="Data Science, Data Engineering & Data Mining – Project Development Center in Chennai"
        description="Data Science, Data Engineering & Data Mining – Project Development Center in Chennai offering IEEE 2023–2025 projects in machine learning, big data analytics, Spark, Hadoop, and real-time data pipelines for B.Tech, M.Tech, and Ph.D. students."
        keywords={keywords}
        url="/department/data-science-project-development-center-in-chennai"
        faqs={faqs}
      />

      <Subsidebar
        extraLinks={[
          { id: "cse", label: "CSE", path: "/department?dept=cse" }
        ]}
      />

      <div className="MobileAppDevelopmentCenter-main">
        <div className="MobileAppDevelopmentCenter-grid">

          {/* ✅ LEFT SIDEBAR */}
          <div className="left-sidebar2">
           <Leftsidebar/>
            <h3>🔑 Keywords</h3>
            <ul>
              {keywords.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* 🔒 CENTER CONTENT (UNCHANGED) */}
          <div className="MobileAppDevelopmentCenter-center">
            <h1>Data Science, Data Engineering & Data Mining – Project Development Center in Chennai</h1>
  <section className="MobileAppDevelopmentCenter-intro">
              <p>
                Data Science, Data Engineering & Data Mining – Project Development Center at Narpavi Research Institute is a global hub for innovation, research, and project execution in data-driven technologies. We provide world-class project development support for B.Tech, M.Tech, and Ph.D. students worldwide, covering both software and hardware solutions. All project topics are carefully selected from IEEE Transactions (2023 to 2025) to ensure they are academically current and industry-relevant.
              </p>
              <p>
                Through expert mentorship and cutting-edge tools, we enable students to create scalable solutions for industries like healthcare, finance, and smart cities, bridging academic excellence with real-world applications.
              </p>
            </section>

            <section className="MobileAppDevelopmentCenter-btech">
              <h2>B.Tech Data Science, Data Engineering & Data Mining Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational data-driven projects like predictive analytics or data visualization, aligned with IEEE topics.
              </p>
              <ul>
                <li>Topic selection from IEEE 2023–2025 trends</li>
                <li>Development using Python, R, or Apache Spark</li>
                <li>Features like data preprocessing or visualization dashboards</li>
                <li>Accuracy evaluation with statistical metrics</li>
                <li>Documentation and IEEE-format presentation support</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, scalable pipelines, and academic-ready output.
              </p>
            </section>

            <section className="MobileAppDevelopmentCenter-mtech">
              <h2>M.Tech Data Science, Data Engineering & Data Mining Project Development</h2>
              <p>
                For postgraduate students, we develop advanced projects like real-time analytics or scalable data pipelines, aligned with IEEE research.
              </p>
              <ul>
                <li>IEEE topic selection with literature review</li>
                <li>Development with Hadoop, Spark Streaming, or Kafka</li>
                <li>Features like deep learning models or automated pipelines</li>
                <li>Benchmarking and cloud-based deployment</li>
                <li>Thesis support with journal-ready documentation</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade data solutions.
              </p>
            </section>

            <section className="MobileAppDevelopmentCenter-phd">
              <h2>Ph.D. Data Science, Data Engineering & Data Mining Project Development</h2>
              <p>
                For doctoral scholars, our center focuses on pioneering research in novel algorithms, federated learning, and adaptive data systems.
              </p>
              <ul>
                <li>Problem formulation with IEEE 2023–2025 gap analysis</li>
                <li>Advanced model design with graph-based or quantum-inspired approaches</li>
                <li>Integration with AI, IoT, or blockchain</li>
                <li>Validation with large-scale or real-world datasets</li>
                <li>Publication assistance for IEEE/Scopus journals</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="MobileAppDevelopmentCenter-table">
              <h2>Technology vs. Industry Comparative Table</h2>
              <div className="MobileAppDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology</th>
                      <th>Industry Applications</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Machine Learning & Deep Learning</td><td>Financial Fraud Detection, Medical Diagnostics</td><td>B.Tech/M.Tech</td><td>TensorFlow, PyTorch</td><td>High</td></tr>
                    <tr><td>Big Data Frameworks</td><td>Retail Analytics, IoT Data Management</td><td>B.Tech/M.Tech</td><td>Hadoop, Apache Spark</td><td>High</td></tr>
                    <tr><td>Real-time Data Processing</td><td>Streaming Analytics for E-commerce, Telecom</td><td>M.Tech/Ph.D.</td><td>Kafka, Flink</td><td>Very High</td></tr>
                    <tr><td>Data Warehousing & ETL Pipelines</td><td>Banking Data Integration, Business Intelligence</td><td>B.Tech/M.Tech</td><td>AWS Glue, Talend</td><td>High</td></tr>
                    <tr><td>Graph Databases & Mining Algorithms</td><td>Social Network Analysis, Cyber Threat Intelligence</td><td>M.Tech/Ph.D.</td><td>Neo4j, GraphX</td><td>Very High</td></tr>
                    <tr><td>Cloud-based Data Solutions</td><td>SaaS Platforms, Global CRM Analytics</td><td>M.Tech/Ph.D.</td><td>AWS, Azure, GCP</td><td>Expert</td></tr>
                    <tr><td>Automated Data Cleaning & Governance</td><td>Regulatory Compliance in Healthcare, Finance</td><td>Ph.D.</td><td>Trifacta, Collibra</td><td>Expert</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="MobileAppDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>Federated Learning-Based Data Mining for Privacy-Preserving Healthcare Analytics – 2023</li>
                <li>Graph Neural Networks for Multi-Relational Data Mining in Social Media – 2023</li>
                <li>Blockchain-Integrated Data Engineering for Secure Cloud Data Pipelines – 2024</li>
                <li>Automated Feature Engineering in Big Data Environments Using AutoML – 2024</li>
                <li>Spatio-Temporal Mining of Urban Mobility Patterns for Smart Cities – 2024</li>
                <li>Adaptive Data Stream Mining for Real-Time Fraud Detection – 2025</li>
                <li>Quantum-Inspired Algorithms for Large-Scale Data Analytics – 2025</li>
                <li>Energy-Efficient Distributed Data Processing in Edge Computing – 2025</li>
                <li>Hybrid Data Mining Approaches for Climate Change Prediction – 2023</li>
                <li>Privacy-Aware Multi-Source Data Integration for Business Intelligence – 2024</li>
              </ul>
            </section>

            <section className="MobileAppDevelopmentCenter-excellence">
              <h2>Excellence in Data Science, Data Engineering & Data Mining Project Development</h2>
              <p>
                Narpavi Research Institute's Data Science, Data Engineering & Data Mining – Project Development Center integrates cutting-edge IEEE research with hands-on project development, fostering scalable and innovative data-driven solutions.
              </p>
              <p>
                Our global mentorship ensures students excel in creating impactful data systems for academia and industry, from predictive analytics to real-time data pipelines.
              </p>
            </section>

            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((faq, index) => (
                  <details key={index}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>          </div>

          {/* ✅ RIGHT SIDEBAR */}
          <div className="right-sidebar1">
           <Csesidebar/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DataScienceDataEngineeringDataMiningProjectDevelopmentCenter;
