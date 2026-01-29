import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "PLC & SCADA Systems Project Development Center in Chennai",
  "PLC SCADA IEEE Projects 2023–2025",
  "Industrial Automation PLC SCADA Projects",
  "IoT Enabled SCADA Systems",
  "Smart Grid SCADA Projects",
  "Industry 4.0 PLC Automation",
  "AI Integrated SCADA Systems",
  "B.Tech PLC SCADA Projects",
  "M.Tech PLC SCADA Projects",
  "Ph.D PLC SCADA Research",
  "Industrial Control Systems Projects",
  "Narpavi Research Institute PLC SCADA"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the PLC & SCADA Systems Project Development Center offer?",
    answer:
      "We provide B.Tech, M.Tech, and Ph.D. scholars IEEE-aligned (2023–2025) support in PLC programming, SCADA integration, IoT-SCADA projects, energy monitoring systems, and AI-integrated SCADA including hardware prototyping and IEEE/Scopus journal publication."
  },
  {
    question: "What types of projects are supported?",
    answer:
      "B.Tech projects include traffic light automation, conveyor systems, and water level monitoring. M.Tech projects focus on IoT-enabled SCADA and energy monitoring. Ph.D. projects cover AI-integrated and cyber-secure SCADA frameworks."
  },
  {
    question: "Which tools and technologies are used?",
    answer:
      "Siemens, Allen Bradley, Delta PLCs, Wonderware, WinCC, Ignition SCADA, MATLAB/Simulink, LabVIEW, Modbus, OPC-UA, Profibus, MQTT, TensorFlow, and PyTorch."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects reference IEEE Transactions (2023–2025) on industrial automation, Industry 4.0, SCADA cybersecurity, and AI-driven predictive maintenance."
  },
  {
    question: "What academic support is provided?",
    answer:
      "End-to-end support including topic selection, PLC-SCADA integration, IoT/AI automation, IEEE report formatting, and publication in IEEE, Springer, Elsevier, and SCI journals."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "PLC & SCADA Systems – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) PLC & SCADA Systems Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering PLC automation, SCADA integration, IoT-enabled monitoring, Industry 4.0 systems, and AI-driven industrial control.";

const pageUrl = "/department/industrial-automation/plc-scada";

const EEEPlcScadaSystemsProjectDevelopmentCenter = () => {
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
                <strong>Narpavi Research Institute</strong> offers the PLC & SCADA Systems Project Development Center, providing IEEE-aligned (2023–2025) support for industrial automation, monitoring, and control systems.
              </p>
              <p>
                PLC & SCADA systems form the backbone of Industry 4.0 and IIoT-based automation, enabling centralized monitoring and adaptive real-time control in manufacturing, energy, smart grids, and process industries.
              </p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of PLC & SCADA Systems</h2>
              <ul>
                <li>Centralized monitoring and control of industrial processes.</li>
                <li>Enhanced safety, fault detection, and emergency handling.</li>
                <li>Supports predictive maintenance and IIoT connectivity.</li>
                <li>Integration with Industry 4.0 for real-time efficiency.</li>
                <li>Extensively used in manufacturing, smart grids, oil & gas, and utilities.</li>
              </ul>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech PLC & SCADA Projects</h2>
              <ul>
                <li>Traffic light automation with PLC</li>
                <li>Conveyor system automation</li>
                <li>Water level monitoring and control</li>
                <li>Home/industrial automation projects</li>
              </ul>
              <p>Focus: fundamentals of PLC programming, SCADA setup, and hands-on automation training.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech PLC & SCADA Projects</h2>
              <ul>
                <li>IoT-SCADA integration for predictive monitoring</li>
                <li>Industrial safety automation systems</li>
                <li>Energy monitoring systems with SCADA dashboards</li>
                <li>Smart grid implementations aligned with IEEE standards</li>
              </ul>
              <p>Focus: advanced IIoT-SCADA integrations, industrial case studies, and real-time automation.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D PLC & SCADA Projects</h2>
              <ul>
                <li>AI-driven SCADA systems with predictive learning</li>
                <li>Digital twin integration for industrial plants</li>
                <li>Cyber-secure SCADA and PLC network architectures</li>
                <li>Industry 4.0 enabled PLC frameworks</li>
              </ul>
              <p>Focus: futuristic PLC-SCADA architectures, cybersecurity, AI/ML integration, IEEE/SCI publications, and patents.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Technologies – PLC & SCADA Systems</h2>
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
                      <td>PLC-based Automation</td>
                      <td>Manufacturing, Assembly</td>
                      <td>Reliable, Customizable</td>
                    </tr>
                    <tr>
                      <td>SCADA Systems</td>
                      <td>Power, Water Treatment</td>
                      <td>Centralized monitoring & control</td>
                    </tr>
                    <tr>
                      <td>PLC-SCADA Integration</td>
                      <td>Oil & Gas, Smart Grids</td>
                      <td>Highly efficient end-to-end automation</td>
                    </tr>
                    <tr>
                      <td>IoT-enabled SCADA</td>
                      <td>Factories, Industry 4.0</td>
                      <td>Remote access, predictive insights</td>
                    </tr>
                    <tr>
                      <td>AI-Integrated SCADA</td>
                      <td>Cyber-Physical Systems</td>
                      <td>Intelligent control, fault prevention</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                At Narpavi Research Institute, we provide IEEE/SCI-standard guidance for PLC & SCADA projects. From PLC programming, SCADA setup, IIoT integration, to AI-enabled predictive monitoring, we help scholars bridge academia and industrial case practices while publishing globally.
              </p>
            </section>

            {/* ❓ FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((faq,idx)=>(
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

export default EEEPlcScadaSystemsProjectDevelopmentCenter;
