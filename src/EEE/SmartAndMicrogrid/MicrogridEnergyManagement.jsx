import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY
========================= */
const keywords = [
  "Microgrid Energy Management Project Development Center in Chennai",
  "Microgrid Energy Management IEEE Projects 2023–2025",
  "B.Tech Microgrid Control Projects",
  "M.Tech AI Based Microgrid Optimization",
  "Ph.D Predictive Load Management",
  "Distributed Generation Coordination",
  "IoT Based Microgrid Monitoring",
  "Smart Microgrid Systems",
  "Renewable Integrated Microgrids",
  "Narpavi Research Institute Microgrid Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Microgrid Energy Management Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Microgrid Energy Management Project Development Center supports B.Tech, M.Tech, and Ph.D. students in IEEE-aligned (2023–2025) projects on microgrid energy management, distributed generation, predictive control, renewable integration, and AI-based optimization."
  },
  {
    question: "What types of Microgrid Energy Management projects are supported?",
    answer:
      "We support B.Tech, M.Tech, and Ph.D. projects covering microgrid control, predictive scheduling, AI-based optimization, distributed generation coordination, and HIL-tested experimental platforms."
  },
  {
    question: "Which technologies are used?",
    answer:
      "MATLAB/Simulink, HOMER Pro, PSIM, IoT/SCADA platforms, TensorFlow, PyTorch, and FPGA/DSP-based real-time controllers."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects follow IEEE Transactions (2023–2025) on microgrid planning, adaptive control, renewable scheduling, and intelligent demand response."
  },
  {
    question: "What academic support is provided?",
    answer:
      "End-to-end support including IEEE topic selection, simulations, hardware prototyping, IoT integration, documentation, and IEEE/Scopus/SCI publication guidance."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Microgrid Energy Management – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Microgrid Energy Management Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering distributed generation scheduling, AI predictive control, renewable integration, and smart microgrid optimization.";

const pageUrl =
  "/department/smart-grid-microgrid/microgrid-energy-management";

const EEEMicrogridEnergyManagementProjectDevelopmentCenter = () => {
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
              <p><strong>Narpavi Research Institute</strong> presents the Microgrid Energy Management Project Development Center, a global hub for scholars to explore IEEE-aligned (2023–2025) domains in distributed generation scheduling, renewable integration, storage coordination, and predictive AI-assisted optimization.</p>
              <p>Students gain expertise in microgrid control, IoT-based monitoring, FPGA-based prototyping, load scheduling, and demand-side energy dispatch with real-time performance validation.</p>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Microgrid Energy Management Project Development</h2>
              <ul>
                <li>Introduction to microgrid architecture, distributed generation, and storage</li>
                <li>Review IEEE topics (2023–2025) on microgrid control</li>
                <li>Simulations in MATLAB/Simulink, HOMER Pro, PSIM</li>
                <li>Performance analysis for stability, efficiency, and optimal dispatch</li>
                <li>FPGA/Microcontroller-based prototypes for microgrid controls</li>
                <li>IoT-enabled real-time load scheduling systems</li>
                <li>IEEE-style academic report preparation</li>
              </ul>
              <p>Focus: foundation building, simulation practice, experimental exposure.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Microgrid Energy Management Project Development</h2>
              <ul>
                <li>IEEE Transactions (2023–2025) on microgrid control, distributed scheduling</li>
                <li>AI/ML predictive load optimization algorithms</li>
                <li>Multi-objective performance simulations for resilience and quality</li>
                <li>FPGA/DSP-based microgrid controllers with IoT integration</li>
                <li>Testing for both grid-connected and islanded modes</li>
                <li>Research paper writing aligned with IEEE standards</li>
              </ul>
              <p>Focus: advanced modeling, optimization strategies, and IEEE publications.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Microgrid Energy Management Project Development</h2>
              <ul>
                <li>Comprehensive IEEE Reviews (2023–2025) on predictive optimization & control</li>
                <li>Deep learning-based adaptive energy dispatch algorithms</li>
                <li>Hybrid microgrid development: integration of renewables & storage</li>
                <li>HIL simulations and lab-scale microgrid testbeds</li>
                <li>Predictive stability assessments with IoT-enabled monitoring</li>
                <li>Patents, IEEE publications, and global contributions</li>
              </ul>
              <p>Focus: innovation, predictive microgrid management, and global-level research impact.</p>
            </section>

            {/* Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Microgrid Technologies vs. Industry Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Research Focus</th>
                      <th>Industry Application</th>
                      <th>Research & Development Focus (2023–2025)</th>
                      <th>Academic Level</th>
                      <th>Tools & Frameworks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AI-Based Microgrid Energy Management</td>
                      <td>Industrial campuses, commercial microgrids</td>
                      <td>Predictive load optimization & adaptive control</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, TensorFlow, PyTorch</td>
                    </tr>
                    <tr>
                      <td>Distributed Generation Scheduling</td>
                      <td>Solar, wind, hybrid microgrids</td>
                      <td>Efficient dispatch, reliability</td>
                      <td>B.Tech/M.Tech</td>
                      <td>HOMER Pro, MATLAB/Simulink</td>
                    </tr>
                    <tr>
                      <td>Energy Storage Coordination</td>
                      <td>Off-grid/remote microgrids</td>
                      <td>Peak shaving, stability enhancement</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, PSIM</td>
                    </tr>
                    <tr>
                      <td>IoT-Enabled SCADA Monitoring</td>
                      <td>Smart campuses, industrial microgrids</td>
                      <td>Real-time diagnostics, predictive control</td>
                      <td>B.Tech/Ph.D.</td>
                      <td>MQTT, IoT Platforms</td>
                    </tr>
                    <tr>
                      <td>Demand Response & Load Prioritization</td>
                      <td>Industrial/commercial microgrids</td>
                      <td>Adaptive scheduling, cost reduction</td>
                      <td>M.Tech</td>
                      <td>Python, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Grid-Connected & Islanded Control</td>
                      <td>Utility, smart remote microgrids</td>
                      <td>Seamless transitions, stability</td>
                      <td>Ph.D.</td>
                      <td>PSIM, MATLAB/Simulink</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in EEE research and development support. 
                Through the Microgrid Energy Management Project Development Center, we provide worldwide support on IEEE topics, algorithm design, prototyping, and academic publishing.
              </p>
              <p>
                Scholars gain practical lab exposure, learning advanced techniques for predictive microgrid control, 
                renewable integration, and international-level publishing opportunities.
              </p>
            </section>

            {/* FAQs */}
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
              <li><a href="/department/smart-grid-microgrid">Smart Grid & Microgrid – Project Development Center</a></li>
              <li><a href="/department/smart-grid-microgrid/cybersecurity-smart-grids">Cybersecurity for Smart Grids</a></li>
              <li><a href="/department/smart-grid-microgrid/ev-charging-microgrids">EV Charging & Microgrids</a></li>
              <li><a href="/department/smart-grid-microgrid/integration-distributed-generation">Integration of Distributed Generation</a></li>
              <li><a href="/department/smart-grid-microgrid/microgrid-energy-management">Microgrid Energy Management</a></li>
              <li><a href="/department/smart-grid-microgrid/real-time-monitoring-scada">Real-Time Monitoring & SCADA Systems</a></li>
              <li><a href="/department/smart-grid-microgrid/smart-metering-demand-response">Smart Metering & Demand Response</a></li>
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

export default EEEMicrogridEnergyManagementProjectDevelopmentCenter;
