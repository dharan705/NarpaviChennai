import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Smart Building Energy Management Project Development Center in Chennai",
  "Smart Building Energy Management IEEE Projects 2023–2025",
  "AI Based HVAC and Lighting Optimization",
  "IoT Smart Building Energy Systems",
  "Predictive Analytics for Building Energy",
  "B.Tech Smart Building Energy Projects",
  "M.Tech AI Based Building Energy Optimization",
  "Ph.D Smart Building Energy Research",
  "Deep Learning Smart Building Control",
  "Smart City Building Energy Management",
  "Narpavi Research Institute Smart Building Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Smart Building Energy Management Project Development Center offer?",
    answer:
      "We offer IEEE-aligned (2023–2025) project support for B.Tech, M.Tech, and Ph.D. students in HVAC optimization, lighting control, predictive energy analytics, IoT-based monitoring, and publication assistance in IEEE/Scopus/SCI journals."
  },
  {
    question: "What kinds of projects are supported?",
    answer:
      "We support B.Tech, M.Tech, and Ph.D. projects covering AI-based HVAC and lighting optimization, hybrid CNN-LSTM and RL-driven control, multi-building and smart city energy optimization, and IEEE/SCI publications."
  },
  {
    question: "Which tools and platforms are used?",
    answer:
      "MATLAB/Simulink, Python (TensorFlow, PyTorch, Scikit-learn), Arduino, Raspberry Pi, IoT sensors, SCADA/BACnet systems, and AWS/Azure cloud platforms."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects align with IEEE Transactions (2023–2025) on Smart Grid, Sustainable Energy, and Industrial Electronics."
  },
  {
    question: "What academic support is provided?",
    answer:
      "We guide students through IEEE topic selection, AI/ML/DL model development, simulation and hardware integration, validation, IEEE-format reporting, and Scopus/SCI publication support."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Smart Building Energy Management – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Smart Building Energy Management Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering HVAC and lighting optimization, IoT monitoring, predictive analytics, and AI-driven smart building control.";

const pageUrl =
  "/department/energy-management-systems/smart-building-energy";

const EEESmartBuildingEnergyManagementProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">

      {/* 🔍 SEO */}
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        url={pageUrl}
        faqs={faqs}
      />

      <Sidebar />

      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* ⬅ LEFT SIDEBAR */}
          <aside className="left-sidebar2">
            <Leftsidebar />
          </aside>

          {/* 📑 CENTER CONTENT */}
          <div className="EEEProjectDevelopmentCenter-center">
            {/* ✅ ONLY ONE H1 */}
            <h1>{pageTitle}</h1>
    {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p>The <strong>Smart Building Energy Management Project Development Center</strong> at Narpavi Research Institute helps students implement IEEE-aligned (2023–2025) projects for intelligent energy control. Projects cover HVAC, lighting, appliances, IoT sensor integration, predictive AI, and cloud analytics to minimize waste while maintaining comfort.</p>
            </section>

            {/* Global Context */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Global Trends & Industry Context</h2>
              <ul>
                <li><strong>Building Automation:</strong> AI optimizes HVAC & lighting, saving energy while reducing operational costs.</li>
                <li><strong>Occupancy-Adaptive Control:</strong> AI adjusts energy use based on real-time occupancy behavior.</li>
                <li><strong>IEEE 2023–2025 Alignment:</strong> Projects reflect IEEE Smart Grid and Sustainable Energy research on predictive optimization.</li>
              </ul>
            </section>

            {/* Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Technology – Smart Building Approaches</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead><tr><th>Technology</th><th>Application</th><th>AI/Control Technique</th><th>Benefits</th></tr></thead>
                  <tbody>
                    <tr><td>Rule-Based Automation</td><td>Conventional Buildings</td><td>Logic Control</td><td>Static, less adaptive</td></tr>
                    <tr><td>Machine Learning</td><td>Smart Buildings</td><td>Regression, DTs</td><td>Predictive, moderate efficiency</td></tr>
                    <tr><td>Deep Learning</td><td>Smart IoT Buildings</td><td>RNN, LSTM</td><td>Real-time, adaptive, accurate</td></tr>
                    <tr><td>Hybrid AI + IoT</td><td>Smart Cities</td><td>RL + DL</td><td>Max savings, predictive control</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* B.Tech Cycle */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Smart Building Projects</h2>
              <ul>
                <li>IEEE review of AI-based HVAC & lighting optimization</li>
                <li>Smart meter and IoT dataset collection</li>
                <li>Decision Trees, SVM, simple RNN models</li>
                <li>Arduino/Raspberry Pi sensor-based system (optional)</li>
              </ul>
              <p>Focus: practical exposure to AI-driven building energy savings with simulations and prototypes.</p>
            </section>

            {/* M.Tech Cycle */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Smart Building Projects</h2>
              <ul>
                <li>Hybrid CNN-LSTM algorithms for demand prediction</li>
                <li>Reinforcement Learning for adaptive scheduling</li>
                <li>IoT-sensor integration for HVAC/lighting automation</li>
                <li>Benchmarking vs classical systems (traditional BMS)</li>
              </ul>
              <p>Focus: advanced hybrid AI for building energy optimization, IEEE-ready prototypes.</p>
            </section>

            {/* Ph.D Cycle */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D Smart Building Research</h2>
              <ul>
                <li>Novel GAN/Transformer/RL-DL hybrid architectures</li>
                <li>Multi-building & city-scale energy optimization</li>
                <li>Cloud simulation & embedded experimentation</li>
                <li>SCI/Scopus-indexed publications + smart building collaborations</li>
              </ul>
              <p>Focus: frontier AI-enabled predictive building energy management research scalable to smart cities.</p>
            </section>

            {/* Case Studies */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Case Studies & Applications</h2>
              <ul>
                <li><strong>HVAC Optimization:</strong> AI reduced usage by ~20% with comfort preserved.</li>
                <li><strong>IoT Lighting Control:</strong> DL predicted occupancy, saving 18% energy in pilot studies.</li>
                <li><strong>Multi-Building:</strong> AI coordinated loads across campuses for optimal distribution.</li>
              </ul>
            </section>

            {/* IEEE Titles */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-Based HVAC Energy Optimization (2023)</li>
                <li>Deep Learning Lighting Control Systems (2024)</li>
                <li>RL for Building Scheduling (2024)</li>
                <li>Hybrid AI Models for Multi-Building Coordination (2025)</li>
                <li>Predictive Analytics in Smart Building Management (2025)</li>
                <li>IoT-DL Integration for Energy Optimization (2025)</li>
                <li>LSTM Networks for Real-Time Building Prediction (2024)</li>
                <li>Commercial Energy Efficiency Optimization (2023)</li>
                <li>AI-Driven Demand Response in Buildings (2025)</li>
                <li>RL+DL Smart Building Management System (2024)</li>
              </ul>
            </section>

            {/* Future Scope */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Future Research & Scope</h2>
              <ul>
                <li>Integration into IoT-enabled smart city ecosystems.</li>
                <li>Self-adaptive comfort + energy-aware control strategies.</li>
                <li>Multi-campus and regional-level optimization studies.</li>
                <li>Advanced occupant comfort prediction + energy modeling.</li>
              </ul>
            </section>

            {/* About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p><strong>Narpavi Research Institute</strong> is a global leader in IEEE-aligned smart building energy research. We provide complete guidance in AI-based building optimization, integrating simulations, IoT hardware, predictive models, and international publication to meet academic + industrial needs.</p>
            </section>

            {/* FAQ Section */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((f,idx)=>(
                  <details key={idx}>
                    <summary>{f.question}</summary>
                    <p>{f.answer}</p>
                  </details>
                ))}
              </div>
    
            </section>
          </div>

          {/* ➡ RIGHT SIDEBAR */}
          <aside className="right-sidebar1">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/department/energy-management-systems">Energy Management Systems – Project Development Center</a></li>
              <li><a href="/department/energy-management-systems/smart-building-energy">Smart Building Energy Management</a></li>
              <li><a href="/department/energy-management-systems/demand-side-management">Demand-Side Management (DSM)</a></li>
              <li><a href="/department/energy-management-systems/energy-efficiency-industries">Energy Efficiency in Industries</a></li>
              <li><a href="/department/energy-management-systems/renewable-energy-scheduling">Renewable Energy Scheduling</a></li>
              <li><a href="/department/energy-management-systems/home-energy-management">Home Energy Management Systems</a></li>
              <li><a href="/department/energy-management-systems/data-analytics-energy-savings">Data Analytics for Energy Savings</a></li>
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

export default EEESmartBuildingEnergyManagementProjectDevelopmentCenter;
