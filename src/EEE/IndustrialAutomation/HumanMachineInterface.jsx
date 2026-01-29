import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Human Machine Interface Project Development Center in Chennai",
  "HMI IEEE Projects 2023–2025",
  "Industrial Automation HMI Projects",
  "PLC SCADA HMI Projects",
  "IoT Based HMI Systems",
  "Smart Factory HMI Projects",
  "AR VR HMI Research",
  "B.Tech HMI Projects",
  "M.Tech IoT SCADA HMI",
  "Ph.D AI Driven HMI",
  "Industry 4.0 HMI Systems",
  "Narpavi Research Institute HMI Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Human-Machine Interface (HMI) Project Development Center offer?",
    answer:
      "We provide IEEE-aligned (2023–2025) project support for B.Tech, M.Tech, and Ph.D. students in PLC/SCADA HMI systems, IoT-enabled dashboards, AR/VR interfaces, and AI-driven adaptive HMI designs."
  },
  {
    question: "What types of HMI projects are supported?",
    answer:
      "B.Tech projects include PLC touchscreen HMIs and dashboards. M.Tech projects focus on IoT-enabled SCADA HMIs and predictive visualization. Ph.D. projects involve AI/ML, AR/VR-based adaptive HMIs with IEEE/SCI publications."
  },
  {
    question: "Which tools and platforms are used?",
    answer:
      "WinCC, FactoryTalk, Ignition, Wonderware, LabVIEW, MATLAB/Simulink, Node-RED, MQTT, OPC-UA, cloud dashboards, TensorFlow, and PyTorch."
  },
  {
    question: "How are HMI projects aligned with IEEE standards?",
    answer:
      "Projects align with IEEE Transactions (2023–2025) on industrial automation, human-centered design, IIoT visualization, and AI-enhanced interfaces."
  },
  {
    question: "What academic support is provided?",
    answer:
      "Support includes IEEE topic selection, PLC-HMI/SCADA integration, IoT dashboard prototyping, documentation, and publication guidance."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Human Machine Interface – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Human Machine Interface Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering PLC SCADA integration, IoT dashboards, AR VR HMI, AI-driven interfaces, and Industry 4.0 smart factories.";

const pageUrl = "/department/industrial-automation/hmi";

const EEEHmiProjectDevelopmentCenter = () => {
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
              <p><strong>Narpavi Research Institute</strong> offers a dedicated HMI Project Development Center for IEEE-aligned (2023–2025) projects focused on designing intuitive, interactive, and advanced operator interfaces for industrial automation.</p>
              <p>HMI bridges operators and automation systems (PLC, SCADA, IIoT), enabling real-time visualization, predictive decision-making, and efficiency in Industry 4.0 environments.</p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of HMI Systems</h2>
              <ul>
                <li>Provides real-time monitoring and visualization of processes.</li>
                <li>Improves safety, usability, and operational efficiency.</li>
                <li>Seamless integration with PLC, SCADA, and IIoT platforms.</li>
                <li>Enhances productivity in predictive, digitally-enabled factories.</li>
                <li>IEEE research trend (2023–2025): AI-driven HMI and AR/VR integration.</li>
              </ul>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech HMI Projects</h2>
              <ul>
                <li>PLC touchscreen-based interfaces</li>
                <li>Sensor monitoring dashboards</li>
                <li>Basic IoT-based HMI for energy/logistics</li>
              </ul>
              <p>Focus: fundamental projects that combine PLC/SCADA with basic HMI integrations.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech HMI Projects</h2>
              <ul>
                <li>Graphical HMI with SCADA dashboards</li>
                <li>IoT-based predictive maintenance panels</li>
                <li>AI-driven visualization systems</li>
              </ul>
              <p>Focus: advanced IoT/IIoT HMI dashboards, predictive insight integration, real-time SCADA systems.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D HMI Projects</h2>
              <ul>
                <li>AI-powered adaptive operator interfaces</li>
                <li>AR/VR-based HMI for smart factories or robotics</li>
                <li>Next-gen HMI for Industry 4.0/cyber-physical systems</li>
                <li>IEEE/Scopus/SCI indexed publications</li>
              </ul>
              <p>Focus: pioneering research on operator-centric intelligent HMI frameworks, user adaptability, and industrial resilience.</p>
            </section>

            {/* 📊 Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – HMI Technologies vs Applications</h2>
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
                      <td>Traditional Panels</td>
                      <td>Small Industries</td>
                      <td>Simple local control</td>
                    </tr>
                    <tr>
                      <td>PLC-based HMI</td>
                      <td>Process Plants</td>
                      <td>Direct PLC integration</td>
                    </tr>
                    <tr>
                      <td>SCADA HMIs</td>
                      <td>Power, Water Treatment</td>
                      <td>Centralized monitoring</td>
                    </tr>
                    <tr>
                      <td>Touch/Graphical HMIs</td>
                      <td>Smart Factories</td>
                      <td>Interactive and user-friendly</td>
                    </tr>
                    <tr>
                      <td>Web/Cloud HMI</td>
                      <td>IIoT, Industry 4.0</td>
                      <td>Remote monitoring and analytics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute empowers students to design and deploy world-class HMI projects. We provide support in PLC-HMI/SCADA integration, IoT dashboards, AR/VR-based systems, and global IEEE publication training — equipping scholars to serve Industry 4.0-ready smart enterprises.
              </p>
            </section>

            {/* ❓ FAQs */}
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
              <li><a href="/department/industrial-automation">Industrial Automation</a></li>
              <li><a href="/department/industrial-automation/dcs">Distributed Control Systems</a></li>
              <li><a href="/department/industrial-automation/hmi">Human Machine Interface</a></li>
              <li><a href="/department/industrial-automation/iiot-applications">IIoT Applications</a></li>
              <li><a href="/department/industrial-automation/plc-scada">PLC & SCADA Systems</a></li>
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

export default EEEHmiProjectDevelopmentCenter;
