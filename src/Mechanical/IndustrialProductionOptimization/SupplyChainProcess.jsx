import "../MEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Supply Chain & Process Optimization Project Development Center in Chennai",
  "Supply Chain IEEE Projects 2023–2025",
  "AI Supply Chain Forecasting Projects",
  "Blockchain Supply Chain Transparency",
  "IoT Enabled Logistics Tracking",
  "Digital Twin Supply Chain Optimization",
  "Green Supply Chain Projects",
  "B.Tech Supply Chain Projects",
  "M.Tech Logistics Optimization",
  "Narpavi Research Institute SCM Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question: "What services does the Supply Chain & Process Optimization Project Development Center offer?",
    answer:
      "Narpavi Research Institute supports IEEE-aligned (2023–2025) projects on AI-driven demand forecasting, blockchain transparency, IoT tracking, digital twins, and green logistics."
  },
  {
    question: "Who can apply for these projects?",
    answer:
      "B.Tech, M.Tech, and Ph.D. students from Industrial, Production, and Manufacturing disciplines."
  },
  {
    question: "Which tools are used?",
    answer:
      "MATLAB, ARENA, Python, Arduino, Raspberry Pi, cloud platforms, blockchain frameworks, and digital twin systems."
  },
  {
    question: "Are projects IEEE aligned?",
    answer:
      "Yes, projects are aligned with IEEE Transactions (2023–2025) on Industrial Informatics and Logistics."
  },
  {
    question: "Is publication support provided?",
    answer:
      "Yes, IEEE, Scopus, Elsevier journal and patent support is available."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Supply Chain & Process Optimization – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Supply Chain & Process Optimization Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering AI forecasting, blockchain transparency, IoT logistics, digital twins, and green supply chains.";

const pageUrl =
  "/department/industrial-production-optimization/supply-chain-process";

const MESupplyChainProcessOptimizationProjectDevelopmentCenter = () => {
  return (
    <div className="MEProjectDevelopmentCenter">

      {/* 🔍 SEO */}
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        url={pageUrl}
        faqs={faqs}
      />

      <Sidebar />

      <div className="MEProjectDevelopmentCenter-main">
        <div className="MEProjectDevelopmentCenter-grid">

          {/* ⬅ LEFT SIDEBAR */}
          <aside className="left-sidebar2">
            <Leftsidebar />
          </aside>

          {/* 📑 CENTER CONTENT */}
          <div className="MEProjectDevelopmentCenter-center">
            {/* ✅ SINGLE H1 */}
            <h1>{pageTitle}</h1>
    <section className="MEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Supply Chain & Process Optimization Project Development Center, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on AI-powered demand forecasting, blockchain-enabled transparency, IoT-based tracking, digital twins, and green logistics.
              </p>
              <p>
                Our projects leverage MATLAB, ARENA, Python, and IoT platforms to address challenges in e-commerce, automotive, pharmaceutical, and manufacturing supply chains, ensuring high-impact research and industrial applicability.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-principles">
              <h2>Core Principles of Supply Chain & Process Optimization</h2>
              <ul>
                <li><strong>End-to-End Visibility:</strong> Full monitoring across supply chain stages.</li>
                <li><strong>Demand Forecasting:</strong> AI/ML-based market need prediction.</li>
                <li><strong>Inventory Optimization:</strong> Balancing stock to reduce costs.</li>
                <li><strong>Logistics Efficiency:</strong> Optimized routes and warehouse layouts.</li>
                <li><strong>Agility & Resilience:</strong> Preparing for disruptions like pandemics.</li>
                <li><strong>Cost & Time Reduction:</strong> Streamlining operations to cut waste.</li>
                <li><strong>Sustainability:</strong> Green logistics for carbon-neutral supply chains.</li>
                <li><strong>Collaboration & Integration:</strong> Cloud and blockchain for data exchange.</li>
                <li><strong>Digital Supply Chains:</strong> IoT tracking and digital twin simulations.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-subtopics">
              <h2>Extended Subtopics for Student Projects</h2>
              <ul>
                <li>AI-powered demand forecasting (LSTM, RNN, hybrid ML)</li>
                <li>Blockchain-enabled supply chain transparency</li>
                <li>IoT-based fleet and inventory tracking systems</li>
                <li>Digital twin for supply chain resilience</li>
                <li>Green supply chain and sustainable logistics models</li>
                <li>Smart warehousing with robotics and IoT</li>
                <li>Big data analytics for supplier risk management</li>
                <li>Multi-echelon inventory optimization</li>
                <li>Cloud-based collaborative supply chain platforms</li>
                <li>Cybersecurity in digital supply chains</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-btech">
              <h2>B.Tech Supply Chain & Process Optimization Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational supply chain projects aligned with IEEE topics.</p>
              <ul>
                <li>Review IEEE papers on SCM and logistics optimization</li>
                <li>Simulate EOQ, JIT, or AI-based models using MATLAB or ARENA</li>
                <li>Integrate Arduino/Raspberry Pi for IoT tracking demos</li>
                <li>Compare optimized vs. traditional supply chain models</li>
              </ul>
              <p>Example: IoT-based shipment tracking system using Raspberry Pi.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Supply Chain & Process Optimization Project Development</h2>
              <p>For postgraduate students, projects focus on advanced supply chain challenges.</p>
              <ul>
                <li>Identify inefficiencies like delays or overstocking</li>
                <li>Develop ML algorithms for forecasting or optimization</li>
                <li>Integrate AI, IoT, and blockchain for resilience</li>
                <li>Validate with IEEE datasets or industry benchmarks</li>
              </ul>
              <p>Example: AI-driven demand forecasting for e-commerce logistics.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Supply Chain & Process Optimization Project Development</h2>
              <p>For doctoral scholars, our center supports cutting-edge supply chain research.</p>
              <ul>
                <li>Identify gaps in cybersecurity or self-optimizing supply chains</li>
                <li>Develop AI + blockchain + digital twin models</li>
                <li>Simulate cloud-based multi-agent systems</li>
                <li>Publish in IEEE, SCI, or Scopus-indexed journals</li>
              </ul>
              <p>Example: Blockchain-secured digital twin for automotive supply chains.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Technology & Industry Applications</h2>
              <div className="MEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Approach</th>
                      <th>Industry Application</th>
                      <th>Example Use Case</th>
                      <th>Key Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>IoT Tracking Devices</td>
                      <td>Logistics, Retail</td>
                      <td>Amazon RFID tags & GPS</td>
                      <td>Real-time visibility</td>
                    </tr>
                    <tr>
                      <td>AI-Based Forecasting</td>
                      <td>Retail, E-commerce</td>
                      <td>Walmart demand prediction</td>
                      <td>Reduced stockouts, accurate planning</td>
                    </tr>
                    <tr>
                      <td>Blockchain Smart Contracts</td>
                      <td>Food & Pharma</td>
                      <td>IBM Food Trust blockchain</td>
                      <td>Traceability, authenticity</td>
                    </tr>
                    <tr>
                      <td>Digital Twin Simulation</td>
                      <td>Automotive, Aerospace</td>
                      <td>Siemens supply chain optimization</td>
                      <td>Predictive scenario testing</td>
                    </tr>
                    <tr>
                      <td>Green Supply Chain Models</td>
                      <td>FMCG, Electronics</td>
                      <td>Unilever eco-logistics</td>
                      <td>Carbon reduction</td>
                    </tr>
                    <tr>
                      <td>Cloud Collaboration Platforms</td>
                      <td>Manufacturing, Healthcare</td>
                      <td>SAP Integrated SCM</td>
                      <td>Real-time partner coordination</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="MEProjectDevelopmentCenter-casestudies">
              <h2>Case Studies – Supply Chain Optimization in Action</h2>
              <ul>
                <li><strong>Amazon:</strong> IoT + AI enabled 25% faster deliveries.</li>
                <li><strong>Walmart:</strong> AI forecasting reduced food wastage by 20%.</li>
                <li><strong>IBM Food Trust:</strong> Blockchain improved food chain traceability.</li>
                <li><strong>Maersk:</strong> Blockchain shipping reduced documentation costs by 40%.</li>
                <li><strong>Siemens:</strong> Digital twin resolved supply chain bottlenecks.</li>
                <li><strong>Unilever:</strong> Green supply chain reduced carbon emissions.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>IoT-Enabled Supply Chain Tracking System (2023)</li>
                <li>AI-Based Demand Forecasting for E-Commerce Logistics (2024)</li>
                <li>Blockchain-Secured Pharmaceutical Supply Chain (2025)</li>
                <li>Digital Twin for Automotive Supply Chain Optimization (2024)</li>
                <li>Cloud-Based Collaborative Logistics Platform (2023)</li>
                <li>Big Data Analytics for Supply Chain Risk Management (2025)</li>
                <li>Green Supply Chain Models for Sustainable Manufacturing (2024)</li>
                <li>Hybrid AI-Blockchain System for Supply Chain Transparency (2025)</li>
                <li>Multi-Echelon Inventory Optimization Using Simulation Tools (2023)</li>
                <li>Cybersecure IoT-Integrated Supply Chains (2024)</li>
                <li>AI-Driven Route Optimization for Last-Mile Delivery (2025)</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-futurescope">
              <h2>Future Scope & Research Opportunities</h2>
              <ul>
                <li><strong>Self-Optimizing Supply Chains:</strong> AI and reinforcement learning.</li>
                <li><strong>Resilient Networks:</strong> Handling global crises.</li>
                <li><strong>Cybersecure Supply Chains:</strong> Blockchain + AI integration.</li>
                <li><strong>Green Logistics:</strong> Climate-positive operations.</li>
                <li><strong>Autonomous Logistics:</strong> Drones, AGVs, and robotic warehouses.</li>
                <li><strong>Global IEEE Benchmarks:</strong> Supply chain efficiency standards.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in Supply Chain & Process Optimization project development for B.Tech, M.Tech, and Ph.D. students. With expertise in MATLAB, ARENA, Python, IoT, blockchain, and digital twins, we provide IEEE-aligned (2023–2025) project support and publication services in high-impact journals (IEEE, SCI, Scopus). Our projects empower students to contribute to e-commerce, automotive, pharmaceutical, and manufacturing innovations.
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

            </section>
          </div>

          {/* ➡ RIGHT SIDEBAR */}
          <aside className="right-sidebar1">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/department/industrial-production-optimization">Industrial Production Optimization</a></li>
              <li><a href="/department/industrial-production-optimization/lean-manufacturing">Lean Manufacturing</a></li>
              <li><a href="/department/industrial-production-optimization/supply-chain-process">Supply Chain Process Optimization</a></li>
              <li><a href="/department/industrial-production-optimization/industrial-safety-ergonomics">Industrial Safety & Ergonomics</a></li>
              <li><a href="/department/industrial-production-optimization/smart-factory-systems">Smart Factory Systems</a></li>
              <li><a href="/department/industrial-production-optimization/cost-time-optimization">Cost & Time Optimization</a></li>
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

export default MESupplyChainProcessOptimizationProjectDevelopmentCenter;
