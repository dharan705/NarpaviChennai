import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY
========================= */
const keywords = [
  "Real-Time Monitoring & SCADA Project Development Center in Chennai",
  "SCADA IEEE Projects 2023–2025",
  "Real-Time Monitoring Smart Grid Projects",
  "B.Tech SCADA Projects",
  "M.Tech AI Based SCADA Monitoring",
  "Ph.D Secure SCADA Systems",
  "IoT Enabled SCADA Dashboards",
  "Predictive Fault Detection SCADA",
  "Industrial SCADA Automation",
  "Narpavi Research Institute SCADA Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Real-Time Monitoring & SCADA Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Real-Time Monitoring & SCADA Project Development Center supports B.Tech, M.Tech, and Ph.D. students in IEEE-aligned (2023–2025) projects on SCADA system design, IoT-enabled monitoring, predictive fault detection, and intelligent control for smart grids and microgrids."
  },
  {
    question: "What types of SCADA and Monitoring projects are supported?",
    answer:
      "We support B.Tech, M.Tech, and Ph.D. projects covering SCADA dashboards, AI-based predictive monitoring, cloud-integrated SCADA, cybersecurity, and HIL-tested intelligent control systems."
  },
  {
    question: "Which technologies are used?",
    answer:
      "MATLAB/Simulink, LabVIEW, Python, PSIM, IoT protocols (MQTT, Modbus, Zigbee), cloud platforms, TensorFlow, PyTorch, and FPGA/DSP controllers."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are based on IEEE Transactions (2023–2025) covering SCADA design, IoT security, predictive monitoring, and adaptive AI-based fault detection."
  },
  {
    question: "What academic support is provided?",
    answer:
      "End-to-end support including IEEE topic selection, simulation, hardware prototyping, IoT integration, documentation, and IEEE/Scopus/SCI publication guidance."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Real-Time Monitoring & SCADA – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Real-Time Monitoring & SCADA Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering IoT-enabled SCADA, AI predictive fault detection, industrial automation, and smart grid monitoring.";

const pageUrl =
  "/department/smart-grid-microgrid/real-time-monitoring-scada";

const EEERealtimeMonitoringSCADAProjectDevelopmentCenter = () => {
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
              <p><strong>Narpavi Research Institute</strong> presents the Real-Time Monitoring & SCADA Project Development Center, helping scholars develop IEEE-aligned (2023–2025) solutions in real-time monitoring, predictive fault detection, SCADA dashboards, IoT sensors, and automated control.</p>
              <p>Students gain both theoretical and hands-on expertise in SCADA modeling, FPGA/IoT prototyping, predictive analytics, cloud-enabled monitoring, and AI-assisted adaptive control strategies.</p>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Real-Time Monitoring & SCADA Project Development</h2>
              <ul>
                <li>Concepts of SCADA architecture, IoT-enabled sensing, real-time monitoring</li>
                <li>IEEE studies (2023–2025) in automation, predictive maintenance</li>
                <li>Simulations: MATLAB/Simulink, LabVIEW, Python</li>
                <li>Performance analysis of monitoring, efficiency, fault detection</li>
                <li>Prototyping microcontroller/FPGA-based SCADA dashboards</li>
                <li>IoT-enabled adaptive monitoring demos</li>
                <li>IEEE-style reports and technical documentation</li>
              </ul>
              <p>Focus: basics of SCADA systems, IoT integration, hands-on student prototypes.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Real-Time Monitoring & SCADA Project Development</h2>
              <ul>
                <li>IEEE Transactions (2023–2025) review of SCADA, AI-enabled monitoring</li>
                <li>AI/ML algorithms for predictive fault detection</li>
                <li>Multi-objective simulations: efficiency, reliability, automation</li>
                <li>FPGA/DSP SCADA prototypes with IoT integration</li>
                <li>Cloud-based monitoring dashboards for real-time reliability</li>
                <li>Research outputs formatted for IEEE publication</li>
              </ul>
              <p>Focus: advanced AI algorithms, simulations, and scalable validation for industrial applications.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Real-Time Monitoring & SCADA Project Development</h2>
              <ul>
                <li>Comprehensive IEEE reviews (2023–2025) for predictive SCADA monitoring</li>
                <li>Deep-learning adaptive fault prediction algorithms</li>
                <li>Blockchain & cybersecurity integration into SCADA frameworks</li>
                <li>IoT-enabled, HIL-tested real-time SCADA prototypes</li>
                <li>Industrial-standard resilient SCADA architecture design</li>
                <li>Patents, IEEE journals, and practical implementation standards</li>
              </ul>
              <p>Focus: cutting-edge predictive monitoring, secure resilient SCADA standards.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – SCADA Technologies vs. Industry Applications</h2>
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
                      <td>SCADA System Design</td>
                      <td>Industrial/Utility Grids</td>
                      <td>Real-time acquisition & supervisory control</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, LabVIEW</td>
                    </tr>
                    <tr>
                      <td>IoT-Enabled Monitoring</td>
                      <td>Microgrids, Smart Campuses</td>
                      <td>Remote monitoring & analytics</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MQTT, Zigbee, IoT Platforms</td>
                    </tr>
                    <tr>
                      <td>Predictive Fault Detection</td>
                      <td>Industrial SCADA</td>
                      <td>Anomaly detection & reliability boost</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch</td>
                    </tr>
                    <tr>
                      <td>Cloud-Based SCADA</td>
                      <td>Utility & Commercial Grids</td>
                      <td>Centralized analytics & remote secure access</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>AWS, Azure IoT, Python</td>
                    </tr>
                    <tr>
                      <td>Adaptive Control & Automation</td>
                      <td>Industrial Plants</td>
                      <td>Load balancing & optimization</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>FPGA/DSP, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Cybersecurity Integration</td>
                      <td>Utility Microgrids</td>
                      <td>Secure, encrypted SCADA channels</td>
                      <td>Ph.D.</td>
                      <td>Python (CryptoLibs), IoT Security Frameworks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is an international hub for EEE project development. 
                Through the Real-Time Monitoring & SCADA Project Development Center, we train scholars in IEEE-based innovation, 
                SCADA dashboarding, AI-assisted monitoring, predictive analytics, and resilient control systems.
              </p>
              <p>
                Scholars gain end-to-end expertise in designing reliable and intelligent SCADA solutions ready for academic publishing 
                and industrial scaling.
              </p>
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

export default EEERealtimeMonitoringSCADAProjectDevelopmentCenter;
