import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import { Link } from "react-router-dom";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

const faqs = [
  {
    question: "What are IoT-enabled healthcare devices?",
    answer:
      "IoT-enabled healthcare devices connect medical sensors and devices to cloud platforms, enabling remote patient monitoring, smart diagnostics, and proactive health management.",
  },
  {
    question: "What projects do B.Tech students typically work on in IoT healthcare devices?",
    answer:
      "Projects include smart heart rate monitors, IoT-enabled temperature sensors, and wireless patient alert systems using microcontrollers like Arduino and ESP8266/ESP32 with cloud platforms.",
  },
  {
    question: "What advanced topics do M.Tech projects cover?",
    answer:
      "M.Tech projects focus on secure, scalable, and AI-assisted IoT healthcare systems, cloud dashboards, wearable ECG monitoring, blockchain-enabled secure data management, and predictive analytics.",
  },
  {
    question: "What research directions are emphasized at the Ph.D. level?",
    answer:
      "Ph.D. research includes federated IoT healthcare architectures, AI-driven predictive diagnostics, cyber-physical healthcare systems, and edge computing for real-time monitoring.",
  },
  {
    question: "Which technologies support IoT healthcare projects?",
    answer:
      "Technologies include Arduino, ESP32, cloud platforms (AWS IoT, Azure IoT, Firebase), AI frameworks (TensorFlow, Python), blockchain platforms (Hyperledger, Ethereum), and edge computing tools.",
  },
];

/* ✅ KEYWORDS ARRAY (SEO + SIDEBAR ONLY) */
const keywords = [
  "IoT-enabled Healthcare Devices",
  "IoT in Medical Devices Projects",
  "IEEE IoT Healthcare Projects 2023–2025",
  "Wearable IoT Health Monitoring Systems",
  "Cloud IoT Healthcare Solutions",
  "Secure IoT Healthcare with Blockchain",
  "Edge Computing in IoT Medical Devices",
  "Ph.D. research in IoT Healthcare",
  "AI-IoT for Smart Healthcare",
  "Narpavi Research Institute IoT Biomedical Projects",
];

const IoTEnabledHealthcareDevicesProject = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">

      {/* ✅ SEO TAG (FIXED ONLY HERE) */}
      <SEO
        title="IoT-enabled Healthcare Devices – Project Development Center in Chennai"
        description="IEEE-aligned (2023–2025) IoT-enabled healthcare device projects using wearables, cloud and edge computing, AI analytics, and blockchain-secured medical IoT for remote monitoring and smart diagnostics."
        keywords={keywords}
        url="/department/biomedical-electronics/iot-enabled-healthcare-devices–project-development-center-in-chennai"
        faqs={faqs}
      />

      <Sidebar
        extraLinks={[
          { id: "ece", label: "ece", path: "/department?dept=ece" },
        ]}
      />

      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          {/* ✅ LEFT SIDEBAR (CLASSNAME FIX ONLY) */}
          <aside className="left-sidebar2">
           <Leftsidebar/>
          </aside>

          {/* 🔒 CENTER CONTENT — NOT CHANGED */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>IoT-enabled Healthcare Devices – Project Development Center in Chennai</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> supports IEEE-aligned
                (2023–2025) IoT-enabled healthcare device projects that use
                connected sensors and wearables for remote monitoring,
                telehealth, and smart diagnostics.
              </p>
              <p>
                The center focuses on wearable biosensors, medical IoT networks,
                cloud and edge analytics, and AI integration to enable proactive,
                personalized healthcare.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology Area</th>
                      <th>Research Focus</th>
                      <th>Industry Applications</th>
                      <th>Tools/Platforms</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Wearable IoT Sensors</td>
                      <td>Vital signs monitoring, biomedical sensing</td>
                      <td>Smartwatches, fitness trackers</td>
                      <td>Arduino, ESP32</td>
                    </tr>
                    <tr>
                      <td>IoT Cloud Platforms</td>
                      <td>Data storage, visualization, remote access</td>
                      <td>Telemedicine, remote diagnostics</td>
                      <td>AWS IoT, Azure IoT, Firebase</td>
                    </tr>
                    <tr>
                      <td>AI in IoT Healthcare</td>
                      <td>Predictive health monitoring</td>
                      <td>Smart diagnostics</td>
                      <td>TensorFlow, Python</td>
                    </tr>
                    <tr>
                      <td>Blockchain in IoT Healthcare</td>
                      <td>Secure data sharing</td>
                      <td>Hospital record systems</td>
                      <td>Hyperledger, Ethereum</td>
                    </tr>
                    <tr>
                      <td>Edge Computing</td>
                      <td>Low-latency processing</td>
                      <td>Emergency monitoring</td>
                      <td>Raspberry Pi, EdgeX Foundry</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Projects in IoT-enabled Healthcare Devices</h2>
              <p>
                B.Tech projects build low-cost prototypes such as heart rate and
                temperature monitors, wearable alert systems, and basic remote
                dashboards using Arduino or ESP8266/ESP32.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Projects in IoT-enabled Healthcare Devices</h2>
              <p>
                M.Tech projects emphasize secure, scalable IoT healthcare with
                cloud dashboards, wearable ECG systems, and blockchain-backed
                health-data pipelines combined with AI-based analytics.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Research in IoT-enabled Healthcare Devices</h2>
              <p>
                Ph.D. work targets federated IoT healthcare architectures,
                AI-driven diagnostics, cyber-physical healthcare systems, and
                edge-computing frameworks.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>IoT-Enabled Wearable Heart Rate and ECG Monitoring Device (2023)</li>
                <li>Cloud-Based Patient Health Monitoring with IoT and AI (2023)</li>
                <li>Blockchain-Assisted Secure IoT Healthcare Data Transmission (2024)</li>
                <li>Edge Computing Framework for IoT Healthcare Systems (2024)</li>
                <li>AI-Powered Predictive Healthcare Using IoT Wearables (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute guides students and researchers
                through design, implementation, and publication of IoT
                healthcare projects using biomedical sensing, AI, cloud,
                blockchain, and edge technologies.
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

          {/* ✅ RIGHT SIDEBAR (CLASSNAME FIX ONLY) */}
          <aside className="right-sidebar">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/department/biomedical-electronics">Biomedical Electronics</a></li>
              <li><a href="/department/biomedical-electronics/ai-biomedical-diagnostics">AI Biomedical Diagnostics</a></li>
              <li><a href="/department/biomedical-electronics/biomedical-signal-acquisition">Biomedical Signal Acquisition</a></li>
              <li><a href="/department/biomedical-electronics/brain-computer-interface">Brain Computer Interface</a></li>
              <li><a href="/department/biomedical-electronics/iot-enabled-healthcare-devices">IoT Enabled Healthcare Devices</a></li>
              <li><a href="/department/biomedical-electronics/implantable-medical-electronics">Implantable Medical Electronics</a></li>
              <li><a href="/department/biomedical-electronics/wearable-biomedical-devices">Wearable Biomedical Devices</a></li>
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

export default IoTEnabledHealthcareDevicesProject;
