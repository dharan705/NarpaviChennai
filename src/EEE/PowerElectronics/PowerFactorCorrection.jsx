import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Power Factor Correction Circuits Project Development Center in Chennai",
  "Power Factor Correction IEEE Projects 2023–2025",
  "Active PFC Circuit Projects",
  "Passive PFC Circuit Projects",
  "B.Tech Power Factor Correction Projects",
  "M.Tech AI Based PFC Control",
  "Ph.D Hybrid PFC Research",
  "IoT Based PFC Monitoring",
  "Harmonic Mitigation PFC Circuits",
  "Narpavi Research Institute Power Electronics"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question: "What services does the Power Factor Correction Circuits Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Power Factor Correction Circuits Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on high-efficiency PFC circuits, adaptive control algorithms, and IoT-enabled monitoring for industrial, commercial, and renewable energy applications."
  },
  {
    question: "What types of Power Factor Correction projects are supported?",
    answer:
      "We support B.Tech projects (active/passive PFC circuits, IoT monitoring), M.Tech projects (AI-based control, hybrid PFC techniques), and Ph.D. projects (dynamic performance and predictive control)."
  },
  {
    question: "Which technologies are used in Power Factor Correction project development?",
    answer:
      "MATLAB/Simulink, PSIM, LTSpice, TensorFlow, PyTorch, MQTT, FPGA/DSP controllers, and hardware-in-the-loop (HIL) platforms."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects align with IEEE Transactions (2023–2025) focusing on active PFC, harmonic mitigation, and AI-driven power quality improvement."
  },
  {
    question: "What support is provided for academic submissions?",
    answer:
      "End-to-end guidance including topic selection, simulation, hardware prototyping, documentation, and IEEE/Scopus/SCI publication support."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Power Factor Correction Circuits – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Power Factor Correction Circuits Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering active, passive, and hybrid PFC circuits, AI-based control, harmonic mitigation, and IoT monitoring.";

const pageUrl =
  "/department/power-electronics/power-factor-correction";

const EEEPowerFactorCorrectionCircuitsProjectDevelopmentCenter = () => {
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
     <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Power Factor Correction Circuits Project Development Center, a global platform empowering B.Tech, M.Tech, and Ph.D. scholars to advance high-efficiency power factor correction systems aligned with IEEE Transactions (2023–2025). Our projects focus on active, passive, and hybrid PFC techniques for industrial, commercial, and renewable energy applications.
              </p>
              <p>
                By integrating simulations, hardware prototyping, and IoT-enabled monitoring, we deliver reliable, industry-ready solutions for academic excellence and practical applications.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Power Factor Correction Circuits Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational projects in PFC circuit design, aligned with IEEE topics.
              </p>
              <ul>
                <li>Understanding PFC principles, circuit topologies, and industrial applications</li>
                <li>Study of IEEE publications (2023–2025) on power factor correction circuits and energy efficiency</li>
                <li>MATLAB/Simulink, PSIM, and LTSpice modeling of active, passive, and hybrid PFC circuits</li>
                <li>Performance analysis for power factor improvement, harmonic reduction, and efficiency</li>
                <li>Microcontroller, FPGA, or DSP-based prototype PFC circuits</li>
                <li>Generation of IEEE-style project reports</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical PFC implementation, and academic-ready output.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Power Factor Correction Circuits Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced optimization and real-time control.
              </p>
              <ul>
                <li>Detailed study of IEEE Transactions (2023–2025) on active, passive, and hybrid PFC circuits</li>
                <li>AI/ML-based adaptive control for dynamic load handling and power factor optimization</li>
                <li>Multi-objective simulation for harmonic reduction, voltage regulation, and efficiency improvement</li>
                <li>FPGA/DSP-based real-time PFC prototypes with IoT monitoring</li>
                <li>Testing for industrial loads, renewable energy systems, and EV chargers</li>
                <li>IEEE-compliant report writing and research publication</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade PFC solutions.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Power Factor Correction Circuits Project Development</h2>
              <p>
                For doctoral scholars, our center supports pioneering research in intelligent PFC systems.
              </p>
              <ul>
                <li>Comprehensive review of IEEE Transactions (2023–2025) in PFC circuits, adaptive control, and energy optimization</li>
                <li>AI, ML, and deep learning-based adaptive algorithms for real-time power factor correction and efficiency optimization</li>
                <li>Optimization for industrial, renewable, and EV applications to meet stringent IEEE standards</li>
                <li>Laboratory-scale PFC prototypes with HIL testing and IoT-enabled monitoring</li>
                <li>Predictive optimization and fault diagnostics for industrial and renewable applications</li>
                <li>Publication in IEEE journals and filing patents</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Power Factor Correction Technologies vs. Industry Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Research Focus</th>
                      <th>Industry Application</th>
                      <th>Research & Development Focus (2023–2025)</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Active PFC Circuits</td>
                      <td>Industrial drives, commercial power systems</td>
                      <td>High-efficiency power factor correction and harmonic mitigation</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, PSIM, LTSpice</td>
                    </tr>
                    <tr>
                      <td>Passive PFC Circuits</td>
                      <td>Consumer electronics, low-power industrial loads</td>
                      <td>Simple design, cost-effectiveness, and harmonic reduction</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, PSIM, LTSpice</td>
                    </tr>
                    <tr>
                      <td>Hybrid PFC Techniques</td>
                      <td>Renewable energy systems, electric vehicles</td>
                      <td>Combination of active and passive methods for optimal performance</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, PSIM, LTSpice</td>
                    </tr>
                    <tr>
                      <td>AI/ML-Assisted Control</td>
                      <td>Smart grids, industrial automation</td>
                      <td>Real-time adaptation for dynamic loads and efficiency improvement</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Python, TensorFlow, PyTorch</td>
                    </tr>
                    <tr>
                      <td>IoT-Based Monitoring & Diagnostics</td>
                      <td>Industry 4.0, renewable plants</td>
                      <td>Predictive monitoring, efficiency tracking, and fault detection</td>
                      <td>B.Tech/Ph.D.</td>
                      <td>MQTT, IoT platforms, Python</td>
                    </tr>
                    <tr>
                      <td>High-Frequency PFC Design</td>
                      <td>Compact power supplies, EV chargers</td>
                      <td>Reduced size, weight, and improved transient response</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, PSIM, LTSpice</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a globally recognized hub for Electrical and Electronics Engineering project development. Through the Power Factor Correction Circuits Project Development Center, we provide comprehensive support to B.Tech, M.Tech, and Ph.D. scholars worldwide.
              </p>
              <p>
                From IEEE topic selection and adaptive control design to hardware prototyping and publication guidance, Narpavi Research Institute ensures students gain hands-on experience, advanced technical expertise, and international recognition in power factor correction research.
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
              <li><a href="/department/power-electronics">Power Electronics</a></li>
              <li><a href="/department/power-electronics/dc-dc-converters">DC–DC Converters & Applications</a></li>
              <li><a href="/department/power-electronics/multilevel-inverters">Multilevel Inverters</a></li>
              <li><a href="/department/power-electronics/renewable-energy-controllers">Renewable Energy Controllers</a></li>
              <li><a href="/department/power-electronics/power-factor-correction">Power Factor Correction Circuits</a></li>
              <li><a href="/department/power-electronics/solid-state-drives">Solid State Drives</a></li>
              <li><a href="/department/power-electronics/wireless-power-transfer">Wireless Power Transfer</a></li>
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

export default EEEPowerFactorCorrectionCircuitsProjectDevelopmentCenter;
