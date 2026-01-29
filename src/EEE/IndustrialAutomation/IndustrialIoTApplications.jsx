import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Industrial IoT IIoT Applications Project Development Center in Chennai",
  "Industrial IoT IEEE Projects 2023–2025",
  "IIoT Applications in Industrial Automation",
  "Smart Factory IIoT Projects",
  "Edge Computing IIoT Projects",
  "Cloud Based IIoT Systems",
  "AI Driven IIoT Predictive Maintenance",
  "Blockchain Secured IIoT Systems",
  "Industry 4.0 IIoT Projects",
  "B.Tech IIoT Projects",
  "M.Tech IIoT Projects",
  "Ph.D IIoT Research Projects",
  "Narpavi Research Institute IIoT Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Industrial IoT (IIoT) Applications Project Development Center offer?",
    answer:
      "We provide B.Tech, M.Tech, and Ph.D. scholars IEEE-aligned (2023–2025) support in IIoT system design, sensor integration, cloud and edge computing, predictive maintenance, and secure Industry 4.0 automation including hardware prototyping, simulations, and IEEE/SCI publication guidance."
  },
  {
    question: "What types of IIoT projects are supported?",
    answer:
      "B.Tech projects include IIoT dashboards and sensor-to-cloud systems. M.Tech projects focus on AI-driven predictive maintenance and edge computing. Ph.D. projects cover blockchain-secured IIoT, autonomous IIoT frameworks, and industrial-scale research."
  },
  {
    question: "Which tools and platforms are used?",
    answer:
      "ESP32, Raspberry Pi, ARM Cortex, MQTT, OPC-UA, PLC-SCADA integration, AWS IoT, Azure IoT Hub, edge platforms, MATLAB/Simulink, TensorFlow, and PyTorch."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects follow IEEE Transactions (2023–2025) on IIoT security, edge and cloud computing, digital twins, AI-driven IIoT, and Industry 4.0 frameworks."
  },
  {
    question: "What academic support is provided?",
    answer:
      "Complete IEEE, Scopus, and SCI publication support, topic selection, IIoT protocol integration, hardware/software mentoring, and global research guidance."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Industrial IoT (IIoT) Applications – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Industrial IoT (IIoT) Applications Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering sensor integration, cloud and edge computing, AI predictive maintenance, Industry 4.0 automation, and secure IIoT systems.";

const pageUrl = "/department/industrial-automation/iiot-applications";

const EEEIndustrialIiotApplicationsProjectDevelopmentCenter = () => {
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
              <p>
                <strong>Narpavi Research Institute</strong> leads the Industrial IoT (IIoT) Applications Project Development Center,
                enabling students and researchers to design IEEE-aligned (2023–2025) IIoT projects integrating 
                smart sensors, cloud-edge infrastructures, and data-driven predictive systems.
              </p>
              <p>
                IIoT empowers industries with real-time monitoring, AI-enhanced predictive maintenance, and secure, 
                scalable automation for Industry 4.0 factories and smart enterprises.
              </p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of IIoT Applications</h2>
              <ul>
                <li>Real-time data monitoring & analytics in industries.</li>
                <li>Enables predictive maintenance & failure prevention.</li>
                <li>Integration with edge & cloud computing platforms.</li>
                <li>Remote access and control of machines & processes.</li>
                <li>Boosts productivity while ensuring safety & cost-efficiency.</li>
              </ul>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech IIoT Projects</h2>
              <ul>
                <li>Sensor-to-cloud data integration (temperature, vibration, etc.)</li>
                <li>IoT-based smart dashboards for factory monitoring</li>
                <li>Energy monitoring & efficiency analysis using IIoT devices</li>
                <li>IEEE-style technical documentation</li>
              </ul>
              <p>Focus: foundations of IIoT hardware-software design and data visualization.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech IIoT Projects</h2>
              <ul>
                <li>AI/ML-based predictive maintenance for machines</li>
                <li>Edge Computing with IIoT for real-time decision making</li>
                <li>SCADA/PLC integration with IIoT cloud platforms</li>
                <li>IEEE-compliant reports aligned with Industry 4.0</li>
              </ul>
              <p>Focus: advanced integration of IIoT with AI, edge computing, and secure industrial prototyping.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D IIoT Projects</h2>
              <ul>
                <li>Secure architectures in IIoT using blockchain</li>
                <li>Autonomous decision-making IIoT-driven industries</li>
                <li>Large-scale IIoT deployment frameworks</li>
                <li>Research patents and IEEE/SCI/Scopus publications</li>
              </ul>
              <p>Focus: pioneering autonomous, secure, and blockchain-enabled IIoT structures for Industry 4.0.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Technologies – Traditional vs IIoT Systems</h2>
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
                      <td>Traditional SCADA</td>
                      <td>Process Industries</td>
                      <td>Centralized monitoring</td>
                    </tr>
                    <tr>
                      <td>IIoT-Based Monitoring</td>
                      <td>Manufacturing & Logistics</td>
                      <td>Real-time distributed data</td>
                    </tr>
                    <tr>
                      <td>Edge + IIoT</td>
                      <td>Energy & Power Plants</td>
                      <td>Low-latency, faster decisions</td>
                    </tr>
                    <tr>
                      <td>Cloud IIoT Platforms</td>
                      <td>Smart Factories, IT systems</td>
                      <td>Scalable, analytics-enabled</td>
                    </tr>
                    <tr>
                      <td>AI-Driven IIoT</td>
                      <td>Robotics, Automotive</td>
                      <td>Predictive, self-optimizing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute offers world-class IEEE-standard project support in Industrial IoT Applications. 
                Our guidance covers hardware design, cloud & edge integration, AI/ML algorithm development, IIoT cybersecurity,
                and global research publication assistance.
              </p>
            </section>

            {/* ❓FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((faq, idx)=>(
                  <details key={idx}>
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
              <li><a href="/department/industrial-automation">Industrial Automation</a></li>
              <li><a href="/department/industrial-automation/dcs">DCS</a></li>
              <li><a href="/department/industrial-automation/hmi">HMI</a></li>
              <li><a href="/department/industrial-automation/iiot-applications">IIoT Applications</a></li>
              <li><a href="/department/industrial-automation/plc-scada">PLC & SCADA</a></li>
              <li><a href="/department/industrial-automation/predictive-maintenance">Predictive Maintenance</a></li>
              <li><a href="/department/industrial-automation/rpa">RPA</a></li>
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

export default EEEIndustrialIiotApplicationsProjectDevelopmentCenter;
