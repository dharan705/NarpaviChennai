import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY
========================= */
const keywords = [
  "Integration of Distributed Generation Project Development Center in Chennai",
  "Distributed Generation IEEE Projects 2023–2025",
  "DG Integration Projects",
  "B.Tech Solar Wind Distributed Generation Projects",
  "M.Tech AI Based DG Optimization",
  "Ph.D Hybrid Renewable DG Systems",
  "Smart Inverter DG Research",
  "Microgrid Distributed Generation Integration",
  "Predictive DG Energy Management",
  "Narpavi Research Institute DG Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Integration of Distributed Generation Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Integration of Distributed Generation Project Development Center supports B.Tech, M.Tech, and Ph.D. students in IEEE-aligned (2023–2025) projects focusing on DG planning, renewable energy interfacing, smart inverters, predictive control, and stability enhancement for grids and microgrids."
  },
  {
    question: "What types of Distributed Generation projects are supported?",
    answer:
      "We support B.Tech, M.Tech, and Ph.D. projects covering solar/wind DG systems, AI-based scheduling, hybrid coordination, stability control, and predictive energy management."
  },
  {
    question: "Which technologies are used in DG project development?",
    answer:
      "MATLAB/Simulink, PSIM, HOMER Pro, TensorFlow, PyTorch, IoT/SCADA platforms, and FPGA/DSP-based hardware prototyping."
  },
  {
    question: "How are DG projects aligned with IEEE standards?",
    answer:
      "Projects follow IEEE Transactions (2023–2025) on smart inverters, adaptive DG control, fault-tolerant interconnections, and hybrid renewable dispatch."
  },
  {
    question: "What academic support is provided?",
    answer:
      "Complete support including IEEE topic mentoring, modeling, simulations, hardware prototyping, performance analysis, documentation, and IEEE/Scopus/SCI publication guidance."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Integration of Distributed Generation – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Integration of Distributed Generation Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering DG planning, smart inverters, AI-based predictive control, renewable energy interfacing, and microgrid integration.";

const pageUrl =
  "/department/smart-grid-microgrid/integration-distributed-generation";

const EEEIntegrationDistributedGenerationProjectDevelopmentCenter = () => {
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

            {/* ✅ SINGLE H1 */}
            <h1>{pageTitle}</h1>
  {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Integration of Distributed Generation (DG) Project Development Center, 
                focusing on IEEE-aligned (2023–2025) projects addressing renewable energy interfacing, smart converters, distributed planning, 
                adaptive coordination and predictive optimization.
              </p>
              <p>
                Scholars learn simulation, FPGA/DSP prototyping, IoT-enabled monitoring, and real-time DG dispatch strategies 
                for industrial, residential, and smart microgrids.
              </p>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Distributed Generation Project Development</h2>
              <ul>
                <li>Understanding DG systems, renewable interfacing, smart inverters</li>
                <li>Review of IEEE publications (2023–2025)</li>
                <li>Simulation (MATLAB/Simulink, PSIM, HOMER Pro)</li>
                <li>Performance analysis for stability & power quality</li>
                <li>Microcontroller/FPGA-based prototypes for solar/wind DG</li>
                <li>IoT-enabled monitoring and predictive scheduling</li>
                <li>IEEE-style documentation and evaluation</li>
              </ul>
              <p>Focus: foundations, renewable integration, and grid-quality enhancement.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Distributed Generation Project Development</h2>
              <ul>
                <li>Comprehensive review of IEEE DG integration (2023–2025)</li>
                <li>AI/ML algorithms for predictive load sharing, adaptive scheduling</li>
                <li>Multi-objective simulations of DG stability, efficiency, reliability</li>
                <li>FPGA/DSP hardware-in-loop DG controllers</li>
                <li>Real-time IoT monitoring of hybrid DG prototypes</li>
                <li>Research publications meeting IEEE standards</li>
              </ul>
              <p>Focus: optimization, predictive controls, hybrid-integrated DG systems.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Distributed Generation Project Development</h2>
              <ul>
                <li>In-depth IEEE-based research on hybrid DG grids (2023–2025)</li>
                <li>Deep Learning predictive DG/energy dispatch algorithms</li>
                <li>Hybrid DG coordination with storage + demand response</li>
                <li>HIL-validation for DG control under fault/uncertainty</li>
                <li>IoT-adaptive monitoring & predictive analytics</li>
                <li>Patents, IEEE journals, and industrial standards contributions</li>
              </ul>
              <p>Focus: groundbreaking innovation in DG optimization & adaptive controls.</p>
            </section>

            {/* Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Distributed Generation Technologies vs. Industry Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Research Focus</th>
                      <th>Industry Application</th>
                      <th>R&D Focus (2023–2025)</th>
                      <th>Academic Level</th>
                      <th>Tools & Frameworks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Solar & Wind DG Integration</td>
                      <td>Residential/Industrial microgrids</td>
                      <td>Smart inverters, quality improvement</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, PSIM, HOMER Pro</td>
                    </tr>
                    <tr>
                      <td>Hybrid DG Systems</td>
                      <td>Microgrids, Off-grid</td>
                      <td>Optimal renewable + storage dispatch</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink</td>
                    </tr>
                    <tr>
                      <td>AI-Based DG Management</td>
                      <td>Commercial microgrids</td>
                      <td>Adaptive load sharing, efficiency</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch</td>
                    </tr>
                    <tr>
                      <td>Grid-Tied Smart Inverters</td>
                      <td>Utility-scale distributed networks</td>
                      <td>Fault mitigation, voltage/freq. control</td>
                      <td>B.Tech/M.Tech</td>
                      <td>PSIM, MATLAB</td>
                    </tr>
                    <tr>
                      <td>IoT-Enabled Monitoring</td>
                      <td>Smart plants, microgrids</td>
                      <td>Performance optimization, fault detection</td>
                      <td>B.Tech/Ph.D.</td>
                      <td>MQTT, IoT Platforms</td>
                    </tr>
                    <tr>
                      <td>DG System Stability & Control</td>
                      <td>Smart grids/microgrids</td>
                      <td>Stability, power flow optimization</td>
                      <td>Ph.D.</td>
                      <td>MATLAB, PSIM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global hub for EEE project innovation. Through the DG Integration Project Development Center,
                we support scholars internationally with IEEE topics, prototyping, adaptive optimization, IoT-enabled monitoring, and academic publications.
              </p>
              <p>
                Scholars gain practical expertise with real-time implementation of distributed generation, bridging research and industry solutions.
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

export default EEEIntegrationDistributedGenerationProjectDevelopmentCenter;
