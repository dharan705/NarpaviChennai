import "./CEProjectDevelopmentCenter.scss";
import Subsidebar from ".././pages/Subsidebar";
import SEO from "../assets/SEO";
import Leftsidebar from "../assets/Leftsidebar";

/* ✅ KEYWORDS ARRAY OBJECT */
const keywords = [
  "Construction Management IEEE Projects 2023–2025",
  "Project Scheduling Civil Projects",
  "BIM Construction Projects",
  "IoT Construction Monitoring",
  "AI in Construction Management",
  "Blockchain Construction Projects",
  "Digital Twin Civil Engineering",
  "Construction Robotics Projects",
  "Smart City Construction Projects",
  "Narpavi Research Institute Civil Projects",
];

const faqs = [
  {
    question:
      "What services does the Construction & Project Management Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Construction & Project Management Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on project scheduling, BIM integration, IoT-based monitoring, and AI-driven construction management.",
  },
  {
    question:
      "What types of Construction & Project Management projects are supported?",
    answer:
      "We support B.Tech, M.Tech, and Ph.D. projects covering planning, smart construction, AI, IoT, and blockchain-based systems.",
  },
  {
    question:
      "Which tools and technologies are used in Construction & Project Management projects?",
    answer:
      "Our stack includes BIM (Revit), Primavera, MS Project, MATLAB, IoT sensors, AI frameworks, blockchain, and drones.",
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are based on IEEE Transactions (2023–2025) on Construction Management and Civil Engineering.",
  },
  {
    question: "What support is provided for academic submissions?",
    answer:
      "We provide end-to-end guidance including simulation, validation, documentation, and publication support.",
  },
];

const CEConstructionProjectManagementProjectDevelopmentCenter = () => {
  return (
    <div className="CEProjectDevelopmentCenter">

      {/* ✅ SEO FIXED */}
      <SEO
        title="Construction & Project Management – Project Development Center in Chennai"
        description="Construction & Project Management project development for B.Tech, M.Tech, and Ph.D. students using BIM, AI, IoT, blockchain, and digital twin technologies."
        keywords={keywords}
        url="/department/construction-project-management"
        faqs={faqs}
      />

      <Subsidebar
        extraLinks={[
          { id: "civil", label: "civil", path: "/department?dept=civil" },
        ]}
      />

      <div className="CEProjectDevelopmentCenter-main">
        <div className="CEProjectDevelopmentCenter-grid">

          {/* ✅ LEFT SIDEBAR */}
          <aside className="left-sidebar2">
          <Leftsidebar/>
          
          </aside>

          {/* CENTER CONTENT */}
          <div className="CEProjectDevelopmentCenter-center">

            {/* ✅ H1 MATCHES SEO */}
            <h1>
              Construction & Project Management – Project Development Center in Chennai
            </h1>
                 <section className="CEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Construction & Project Management Project Development Center, a global platform empowering B.Tech, M.Tech, and Ph.D. scholars to develop IEEE-aligned (2023–2025) projects on project scheduling, BIM integration, IoT-based monitoring, and smart construction management.
              </p>
              <p>
                By integrating AI, IoT, blockchain, and digital twin technologies, we deliver innovative solutions for academic excellence and real-world construction challenges.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-btech">
              <h2>B.Tech Construction & Project Management Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational construction management projects aligned with IEEE topics.</p>
              <ul>
                <li>Identify issues like delays, cost overruns, or resource inefficiencies</li>
                <li>Use PERT/CPM, MS Project, or basic BIM software for planning</li>
                <li>Implement scheduling and budgeting simulations</li>
                <li>Test time, cost, and quality metrics</li>
                <li>Generate IEEE-style project reports and demonstrations</li>
              </ul>
              <p>The style emphasizes practical learning in construction workflows.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Construction & Project Management Project Development</h2>
              <p>For postgraduate students, projects involve advanced optimization and automation in construction.</p>
              <ul>
                <li>Address mega projects or smart city planning challenges</li>
                <li>Use Primavera, Revit BIM, MATLAB, and GIS-based systems</li>
                <li>Implement digital twin models and IoT monitoring</li>
                <li>Test cost, time, safety, and sustainability metrics</li>
                <li>Publish in IEEE conferences with focus on smart construction</li>
              </ul>
              <p>The style focuses on scalable, smart construction solutions.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Construction & Project Management Project Development</h2>
              <p>For doctoral scholars, our center supports pioneering research in intelligent construction systems.</p>
              <ul>
                <li>Explore global project risks or lean construction strategies</li>
                <li>Design IoT, AI, blockchain, and cloud-based frameworks</li>
                <li>Implement real-time data simulations and smart contracts</li>
                <li>Validate using digital twins and multi-objective optimization</li>
                <li>Contribute to IEEE, Scopus, and SCI journal publications</li>
              </ul>
              <p>The style emphasizes innovation, scalability, and publication-ready outcomes.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Technologies vs. Applications</h2>
              <div className="CEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Tool</th>
                      <th>Application in Construction Management</th>
                      <th>Key Benefits</th>
                      <th>Challenges</th>
                      <th>Academic Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>BIM (Building Information Modeling)</td>
                      <td>Design, planning & execution</td>
                      <td>Accurate planning, clash detection</td>
                      <td>Software complexity and training needs</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>Digital Twin Models</td>
                      <td>Real-time project monitoring & simulation</td>
                      <td>Predictive analytics, reduced risks</td>
                      <td>High computational requirements</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Primavera / MS Project</td>
                      <td>Project scheduling & resource allocation</td>
                      <td>Optimized time & cost management</td>
                      <td>Limited real-time adaptability</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>IoT-enabled Sensors</td>
                      <td>Site safety & equipment monitoring</td>
                      <td>Increased safety, real-time alerts</td>
                      <td>Sensor reliability and connectivity</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Blockchain Smart Contracts</td>
                      <td>Construction contracts & payments</td>
                      <td>Transparency, reduced disputes</td>
                      <td>Integration with existing systems</td>
                      <td>Ph.D.</td>
                    </tr>
                    <tr>
                      <td>AI & Machine Learning</td>
                      <td>Risk prediction & project optimization</td>
                      <td>Data-driven decision-making</td>
                      <td>Data quality and model complexity</td>
                      <td>Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Drones & Robotics</td>
                      <td>Site surveying & automated construction</td>
                      <td>Improved accuracy & efficiency</td>
                      <td>High costs and regulatory constraints</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="CEProjectDevelopmentCenter-casestudy">
              <h2>Case Study – AI-driven Construction Scheduling</h2>
              <p>
                At Narpavi Research Institute, an M.Tech project was executed using AI-based scheduling integrated with Primavera and BIM data. The system automatically adjusted schedules based on real-time resource availability and risk assessment, reducing project delays by 35% compared to conventional planning methods.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-enabled Construction Scheduling and Delay Prediction</li>
                <li>Blockchain-based Smart Contracts for Construction Projects</li>
                <li>Digital Twin Modeling for Real-time Project Monitoring</li>
                <li>IoT-based Construction Site Safety Management</li>
                <li>Risk Assessment and Optimization Using Machine Learning</li>
                <li>BIM-Integrated Cost and Time Control Framework</li>
                <li>Robotics for Automated Construction and Quality Control</li>
                <li>Cloud-based Construction Resource Management Systems</li>
                <li>Multi-objective Optimization for Smart City Project Delivery</li>
                <li>Lean Construction Strategies using AI and Data Analytics</li>
              </ul>
            </section>

            <section className="CEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute provides end-to-end project guidance in Construction & Project Management for B.Tech, M.Tech, and Ph.D. students globally. Our services cover IEEE-aligned projects, BIM modeling, digital twin development, IoT integration, AI-based risk analysis, and blockchain contract management. We ensure projects are technologically advanced, academically strong, and industrially relevant.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-futurescope">
              <h2>Future Research Directions in Construction & Project Management</h2>
              <ul>
                <li>AI-driven lean construction strategies</li>
                <li>Blockchain in global infrastructure financing</li>
                <li>Digital twin cities for sustainable urban planning</li>
                <li>Robotics and automation in mega projects</li>
                <li>Green project management for net-zero carbon targets</li>
              </ul>
            </section>

            {/* FAQ UI (schema handled by SEO component) */}
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
            </section>
          </div>

          {/* ✅ RIGHT SIDEBAR */}
          <aside className="right-sidebar1">
            <h3>🔗 Related Services</h3>
            <ul>
              <li>
                <a href="/department/construction-project-management">
                  Construction Project Management
                </a>
              </li>
              <li>
                <a href="/department/construction-project-management/smart-construction-techniques">
                  Smart Construction Techniques
                </a>
              </li>
              <li>
                <a href="/department/construction-project-management/cost-optimization-in-projects">
                  Cost Optimization in Projects
                </a>
              </li>
              <li>
                <a href="/department/construction-project-management/project-scheduling-planning">
                  Project Scheduling & Planning
                </a>
              </li>
            </ul>
              <h3>🔑 Keywords</h3>
            <ul>
              {keywords.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default CEConstructionProjectManagementProjectDevelopmentCenter;
