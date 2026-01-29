import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Predictive Maintenance Systems Project Development Center in Chennai",
  "Predictive Maintenance IEEE Projects 2023–2025",
  "AI Based Predictive Maintenance Projects",
  "IIoT Predictive Maintenance Systems",
  "Condition Based Monitoring Projects",
  "Digital Twin Predictive Maintenance",
  "Smart Factory Maintenance Systems",
  "Industrial Equipment Health Monitoring",
  "B.Tech Predictive Maintenance Projects",
  "M.Tech Predictive Maintenance Projects",
  "Ph.D Predictive Maintenance Research",
  "Narpavi Research Institute Predictive Maintenance"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Predictive Maintenance Systems Project Development Center offer?",
    answer:
      "We provide B.Tech, M.Tech, and Ph.D. students IEEE-aligned (2023–2025) support for predictive maintenance projects integrating IIoT sensors, AI/ML models, condition-based monitoring, and cloud-enabled industrial analytics."
  },
  {
    question: "What types of projects are supported?",
    answer:
      "B.Tech projects include vibration monitoring and motor fault detection. M.Tech projects focus on AI/ML predictive models and IoT dashboards. Ph.D. research covers deep learning-driven predictive frameworks, digital twins, and IEEE/SCI publications."
  },
  {
    question: "Which tools and platforms are used?",
    answer:
      "Arduino, Raspberry Pi, PLCs, MATLAB/Simulink, LabVIEW, MQTT, OPC-UA, AWS IoT, Azure, TensorFlow, PyTorch, and Python predictive analytics libraries."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects follow IEEE Transactions (2023–2025) on predictive analytics, condition-based monitoring, deep learning maintenance, and Industry 4.0 strategies."
  },
  {
    question: "What academic support is provided?",
    answer:
      "End-to-end guidance including topic selection, AI/ML model development, IoT integration, IEEE-format documentation, and Scopus/SCI publication support."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Predictive Maintenance Systems – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Predictive Maintenance Systems Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering IIoT sensors, AI/ML condition monitoring, digital twins, and Industry 4.0 smart factory maintenance.";

const pageUrl =
  "/department/industrial-automation/predictive-maintenance";

const EEEPredictiveMaintenanceProjectDevelopmentCenter = () => {
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
              <p><strong>Narpavi Research Institute</strong> introduces the Predictive Maintenance Systems Project Development Center, offering IEEE-aligned (2023–2025) research on data-driven industrial maintenance strategies. Students develop intelligent, IIoT-enabled, and AI-driven predictive systems to reduce downtime and optimize asset life.</p>
              <p>Predictive maintenance leverages sensors, analytics, and machine learning to forecast failures, providing smarter, safer, and cost-efficient operations across industries.</p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of Predictive Maintenance Systems</h2>
              <ul>
                <li>Reduces downtime and maintenance costs.</li>
                <li>Improves equipment reliability and operational life.</li>
                <li>Integrates IIoT, cloud platforms, and ML algorithms.</li>
                <li>Applicable to aerospace, automotive, energy, and manufacturing.</li>
                <li>IEEE focus (2023–2025) on predictive analytics & Industry 4.0 maintenance.</li>
              </ul>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Predictive Maintenance Projects</h2>
              <ul>
                <li>Motor vibration and temperature monitoring</li>
                <li>Arduino/PLC-based real-time maintenance alerts</li>
                <li>IoT-based dashboards for equipment health</li>
                <li>IEEE-guided reporting and analysis</li>
              </ul>
              <p>Focus: foundations of IoT + predictive maintenance simulation and hardware prototyping.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Predictive Maintenance Projects</h2>
              <ul>
                <li>ML-driven predictive health analytics</li>
                <li>IoT-enabled real-time condition monitoring dashboards</li>
                <li>Edge and cloud integration for predictive maintenance</li>
                <li>Smart factory predictive frameworks aligned with IEEE trends</li>
              </ul>
              <p>Focus: advanced AI/ML models, cloud-edge integration, real-time predictive analysis.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D Predictive Maintenance Projects</h2>
              <ul>
                <li>Deep learning predictive models for industrial assets</li>
                <li>Digital twin integration for smart factories</li>
                <li>Blockchain-secured predictive maintenance frameworks</li>
                <li>IEEE/SCI journal and patent contributions</li>
              </ul>
              <p>Focus: pioneering predictive maintenance models for Industry 4.0-scale industrial systems.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Maintenance Strategies – Technologies & Benefits</h2>
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
                      <td>Reactive Maintenance</td>
                      <td>Manufacturing, Utilities</td>
                      <td>Repair after failure, costly downtime</td>
                    </tr>
                    <tr>
                      <td>Preventive Maintenance</td>
                      <td>Process Industries</td>
                      <td>Scheduled checks, moderate downtime</td>
                    </tr>
                    <tr>
                      <td>Predictive Maintenance</td>
                      <td>Automotive, Aviation, Energy</td>
                      <td>Failure prediction, cost-saving, higher uptime</td>
                    </tr>
                    <tr>
                      <td>Condition-Based Maintenance</td>
                      <td>Factories, Power Plants</td>
                      <td>Real-time sensor monitoring</td>
                    </tr>
                    <tr>
                      <td>Cloud-Enabled Predictive Maintenance</td>
                      <td>Smart Factories, IIoT</td>
                      <td>Remote monitoring, analytics, optimization</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>  

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute provides end-to-end IEEE-compliant project development in predictive maintenance systems. From IoT sensor integration, AI-driven algorithms, digital twin prototyping, to journal publication, we ensure global-quality academic + industrial excellence.
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

export default EEEPredictiveMaintenanceProjectDevelopmentCenter;
