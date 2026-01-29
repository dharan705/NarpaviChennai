import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Distributed Control Systems Project Development Center in Chennai",
  "DCS IEEE Projects 2023–2025",
  "Industrial Automation DCS Projects",
  "Process Automation DCS Systems",
  "B.Tech DCS Mini Projects",
  "M.Tech IoT Enabled DCS",
  "Ph.D AI Cyber Physical DCS",
  "Industry 4.0 Distributed Control Systems",
  "Profibus Modbus OPC DCS",
  "Narpavi Research Institute DCS Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Distributed Control Systems (DCS) Project Development Center offer?",
    answer:
      "We guide B.Tech, M.Tech, and Ph.D. students through IEEE-aligned (2023–2025) projects in DCS, covering simulation, hardware setup, communication integration, AI/ML-based DCS, and publication support."
  },
  {
    question: "What types of DCS projects are supported?",
    answer:
      "B.Tech projects include mini-DCS setups and plant simulations. M.Tech projects focus on industrial protocols and IoT-enabled DCS. Ph.D. projects cover AI-integrated cyber-physical DCS and Industry 4.0 architectures."
  },
  {
    question: "Which tools and platforms are used?",
    answer:
      "MATLAB/Simulink, LabVIEW, PLC/DCS trainers, Wonderware, DeltaV, Modbus, Profibus, OPC, IoT devices, TensorFlow, and PyTorch."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are aligned with IEEE Transactions (2023–2025) on industrial automation, distributed control, AI-based monitoring, and Industry 4.0 systems."
  },
  {
    question: "What academic support is provided?",
    answer:
      "End-to-end support including topic selection, simulations, hardware prototyping, networking, IEEE documentation, and Scopus/SCI publications."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Distributed Control Systems – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Distributed Control Systems Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering industrial automation, IoT-enabled DCS, AI predictive monitoring, and Industry 4.0 compliant control systems.";

const pageUrl = "/department/industrial-automation/dcs";

const EEEDcsProjectDevelopmentCenter = () => {
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
            <h1>{pageTitle}</h1>
 {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> presents the Distributed Control Systems (DCS) Project Development Center, guiding scholars worldwide in developing IEEE-aligned (2023–2025) projects on process automation, multi-loop control, IIoT-enabled DCS, and cyber-secure Industry 4.0 DCS systems.</p>
              <p>DCS is widely deployed in power plants, chemical refineries, energy industries, and smart factories where fault tolerance, scalability, and reliability are non-negotiable.</p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of Distributed Control Systems</h2>
              <ul>
                <li>Provides hierarchical and decentralized control in complex plants.</li>
                <li>Ensures safety, reliability, and fault tolerance in large operations.</li>
                <li>Highly flexible & modular for process industries.</li>
                <li>Supports seamless integration with IoT, SCADA, and smart grid protocols.</li>
                <li>Key enabler for Industry 4.0 compliant automation.</li>
              </ul>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech DCS Projects</h2>
              <ul>
                <li>Mini-DCS implementations for industrial plant simulations</li>
                <li>Water treatment and chemical process control DCS systems</li>
                <li>SCADA-integrated small automation projects</li>
              </ul>
              <p>Focus: understanding basic multi-loop automation and small-scale industrial reliability models.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech DCS Projects</h2>
              <ul>
                <li>IoT-based DCS monitoring for smart grids or factories</li>
                <li>Design of modular DCS with Profibus, Modbus, and OPC protocols</li>
                <li>Integration of SCADA with distributed control infrastructure</li>
                <li>Simulation of resilient industrial operations</li>
              </ul>
              <p>Focus: advanced DCS process control with IoT and industrial networking aligned to IEEE standards.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D DCS Projects</h2>
              <ul>
                <li>AI/ML augmented predictive DCS architectures</li>
                <li>Cyber-secure, fault-tolerant DCS for Industry 4.0</li>
                <li>Digital twin-enabled DCS systems</li>
                <li>Patent filings and IEEE/SCI-compliant journal papers</li>
              </ul>
              <p>Focus: futuristic cyber-physical DCS enabling resilient, scalable, and intelligent industrial control systems.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – DCS vs Other Systems</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology</th>
                      <th>Industry Application</th>
                      <th>Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Traditional PLC Systems</td>
                      <td>Small-scale automation</td>
                      <td>Low cost, simple logic</td>
                    </tr>
                    <tr>
                      <td>Distributed Control Systems</td>
                      <td>Power Plants, Refineries</td>
                      <td>Scalable, reliable, fault-tolerant</td>
                    </tr>
                    <tr>
                      <td>SCADA Systems</td>
                      <td>Utilities & Infrastructure</td>
                      <td>Remote supervisory monitoring</td>
                    </tr>
                    <tr>
                      <td>IoT-Integrated DCS</td>
                      <td>Smart Factories</td>
                      <td>Cloud connectivity + analytics</td>
                    </tr>
                    <tr>
                      <td>AI/ML-based DCS</td>
                      <td>Future Automation Research</td>
                      <td>Predictive, self-learning optimization</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute supports students and researchers worldwide with end-to-end solutions in Distributed Control Systems projects — from modeling, protocol integration, simulation, to IEEE-quality publication. We ensure every scholar contributes impactful solutions to industrial automation fields.</p>
            </section>

            {/* ❓ FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((item,idx)=>(
                  <details key={idx}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>

            </section>
          </div>

          {/* ➡ RIGHT SIDEBAR */}
          <aside className="right-sidebar1">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/department/industrial-automation">Industrial Automation</a></li>
              <li><a href="/department/industrial-automation/dcs">Distributed Control Systems</a></li>
              <li><a href="/department/industrial-automation/hmi">Human Machine Interface</a></li>
              <li><a href="/department/industrial-automation/iiot-applications">IIoT Applications</a></li>
              <li><a href="/department/industrial-automation/plc-scada">PLC & SCADA</a></li>
              <li><a href="/department/industrial-automation/predictive-maintenance">Predictive Maintenance</a></li>
              <li><a href="/department/industrial-automation/rpa">Robotic Process Automation</a></li>
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

export default EEEDcsProjectDevelopmentCenter;
