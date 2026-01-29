import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY
========================= */
const keywords = [
  "EV Charging in Microgrids Project Development Center in Chennai",
  "IEEE EV Charging Projects 2023–2025",
  "Smart EV Charging Station Projects",
  "B.Tech Microgrid EV Charging Projects",
  "M.Tech V2G Integration Projects",
  "Ph.D AI Based EV Load Management",
  "Renewable Integrated EV Charging",
  "Predictive EV Charging Optimization",
  "Smart Grid EV Charging Systems",
  "Narpavi Research Institute EV Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Electric Vehicle Charging in Microgrids Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s EV Charging in Microgrids Project Development Center supports B.Tech, M.Tech, and Ph.D. scholars in IEEE-aligned (2023–2025) projects on smart charging stations, microgrid integration, V2G frameworks, predictive load optimization, and renewable energy-based EV charging."
  },
  {
    question: "What types of EV charging projects are supported?",
    answer:
      "We support B.Tech, M.Tech, and Ph.D. projects covering smart EV chargers, AI-assisted charging optimization, V2G integration, and renewable-powered EV charging systems."
  },
  {
    question: "Which technologies are used in EV charging project development?",
    answer:
      "MATLAB/Simulink, HOMER Pro, PSIM, Python, AI frameworks (TensorFlow, PyTorch), FPGA/DSP platforms, IoT protocols, and HIL testing."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects follow IEEE Transactions (2023–2025) focusing on EV charging optimization, V2G systems, renewable integration, and grid-interactive charging."
  },
  {
    question: "What academic support is provided?",
    answer:
      "End-to-end guidance including IEEE topic selection, simulations, hardware prototyping, V2G testing, documentation, and IEEE/Scopus/SCI publication support."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "EV Charging in Microgrids – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) EV Charging in Microgrids Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering smart charging stations, V2G frameworks, AI-based load optimization, and renewable-integrated microgrid charging.";

const pageUrl =
  "/department/smart-grid-microgrid/ev-charging-microgrids";

const EEEEVChargingMicrogridsProjectDevelopmentCenter = () => {
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
              <p><strong>Narpavi Research Institute</strong> presents the EV Charging in Microgrids Project Development Center, offering global scholars IEEE-aligned (2023–2025) research opportunities in smart EV charging, renewable integration, V2G frameworks, and predictive load optimization.</p>
              <p>Students gain hands-on experience with AI-optimized charging, IoT-enabled monitoring, simulation, hardware prototypes, and real-time adaptive charging management in microgrids.</p>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech EV Charging in Microgrids Projects</h2>
              <ul>
                <li>Basics of EV charging systems and microgrid integration</li>
                <li>Study of IEEE papers (2023–2025) on V2G and smart charging</li>
                <li>Simulations with MATLAB, HOMER Pro, PSIM</li>
                <li>Performance testing for load management and charging efficiency</li>
                <li>FPGA/Microcontroller prototypes for small-scale smart chargers</li>
                <li>IoT-enabled chargers with real-time monitoring</li>
                <li>IEEE-style reports & presentations</li>
              </ul>
              <p>Focus: fundamentals, IoT-augmented smart chargers, student prototypes.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech EV Charging in Microgrids Projects</h2>
              <ul>
                <li>Literature review of IEEE Transactions (2023–2025) for EV-V2G research</li>
                <li>AI/ML-assisted predictive scheduling for energy-aware charging</li>
                <li>Simulations for efficiency, stability, and renewable integration</li>
                <li>FPGA/DSP charging prototyping with IoT dashboards</li>
                <li>Testing charging infrastructure for microgrid-scale deployment</li>
                <li>IEEE research outputs aligned with industry use cases</li>
              </ul>
              <p>Focus: predictive optimization, hybrid microgrids, experimental validation.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. EV Charging in Microgrids Projects</h2>
              <ul>
                <li>Comprehensive IEEE review (2023–2025) on V2G, predictive load management</li>
                <li>Deep learning architectures for adaptive EV charging</li>
                <li>Developing V2G predictive optimization frameworks</li>
                <li>IoT-enabled HIL-tested real-time charging systems</li>
                <li>Contributions toward IEEE/industry EV-charging standards</li>
                <li>Patents & IEEE journals</li>
              </ul>
              <p>Focus: innovative EV charging solutions with global impact and custom standardization.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – EV Charging in Microgrids vs. Industry Applications</h2>
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
                      <td>Smart EV Charging Algorithms</td>
                      <td>Microgrids, EV stations</td>
                      <td>Load balancing, peak shaving</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, Simulink, PSIM</td>
                    </tr>
                    <tr>
                      <td>Vehicle-to-Grid (V2G)</td>
                      <td>Renewables & Microgrids</td>
                      <td>Bidirectional flow, grid stability</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, HOMER Pro</td>
                    </tr>
                    <tr>
                      <td>IoT-Enabled EV Chargers</td>
                      <td>Smart campuses, industries</td>
                      <td>Real-time monitoring, predictive load</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MQTT, IoT Platforms</td>
                    </tr>
                    <tr>
                      <td>Renewable-Integrated Charging</td>
                      <td>Solar-Wind Microgrids</td>
                      <td>Efficient sustainable fueling</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>HOMER Pro, PSIM</td>
                    </tr>
                    <tr>
                      <td>AI/ML-Based Load Forecasting</td>
                      <td>Industrial/Commercial</td>
                      <td>Predictive schedules</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Python, TensorFlow, PyTorch</td>
                    </tr>
                    <tr>
                      <td>Secure Communication Protocols</td>
                      <td>Utility-linked chargers</td>
                      <td>Encrypted and resilient comms</td>
                      <td>Ph.D.</td>
                      <td>Python (Crypto), IoT-sec frameworks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About Section */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute is a global leader in Electrical and Electronics Engineering project development. Through the EV Charging in Microgrids Project Development Center, we support global scholars from IEEE mentoring to prototyping and IEEE/SCI publishing guidance.</p>
              <p>Our scholars develop intelligent, scalable, and industry-ready systems connecting EVs, V2G, and renewable energies with microgrids.</p>
            </section>

            {/* ❓ FAQs */}
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

export default EEEEVChargingMicrogridsProjectDevelopmentCenter;
