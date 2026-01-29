import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import SEO from "../../assets/SEO";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "IoT Integration with Wireless Sensor Networks Project Development Center in Chennai",
  "IoT WSN Integration Projects",
  "MQTT CoAP 6LoWPAN WSN",
  "Smart City IoT WSN Projects",
  "Healthcare IoT WSN Integration",
  "Precision Agriculture IoT WSN",
  "Edge Fog Computing IoT WSN",
  "Blockchain IoT WSN Projects",
  "IEEE IoT WSN Projects 2023–2025",
  "Narpavi Research Institute IoT WSN"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question: "What is the significance of integrating IoT with Wireless Sensor Networks?",
    answer:
      "Integrating IoT with WSN enables seamless connectivity between physical environments and cloud analytics, expanding applications across smart cities, healthcare, agriculture, and industrial IoT."
  },
  {
    question: "What are the major approaches for IoT and WSN integration?",
    answer:
      "Approaches include MQTT/CoAP, 6LoWPAN, cloud-centric models, edge/fog computing, and blockchain-enabled IoT–WSN integration."
  },
  {
    question: "Which tools are commonly used for IoT–WSN projects?",
    answer:
      "Arduino, ESP32, Raspberry Pi, NS3, Contiki Cooja, MATLAB, OMNeT++, and Python IoT libraries."
  },
  {
    question: "What applications benefit from IoT–WSN integration?",
    answer:
      "Smart cities, healthcare IoT, precision agriculture, industrial IoT, and autonomous systems."
  },
  {
    question: "How does Narpavi Research Institute support IoT–WSN projects?",
    answer:
      "We provide sensor deployment, cloud connectivity, AI analytics, secure communication, hardware prototyping, and IEEE publication support."
  }
];

/* =========================
   📌 TITLE (SAME EVERYWHERE)
========================= */
const pageTitle =
  "IoT Integration with Wireless Sensor Networks – Project Development Center in Chennai";

const pageUrl =
  "/department/wireless-sensor-networks/iot-wsn-project-development-center-in-chennai";

const pageDescription =
  "IoT Integration with Wireless Sensor Networks Project Development Center in Chennai offering IEEE-aligned (2023–2025) projects using MQTT, CoAP, 6LoWPAN, edge computing, blockchain, and AI for smart cities, healthcare, and agriculture.";

const IoTIntegrationWSNProject = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      {/* =========================
          🔍 SEO
      ========================= */}
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        url={pageUrl}
        faqs={faqs}
      />

      <Sidebar
        extraLinks={[
          { id: "ece", label: "ece", path: "/department?dept=ece" }
        ]}
      />

      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          {/* =========================
              ⬅ LEFT SIDEBAR
          ========================= */}
          <aside className="left-sidebar2">
            <h3>🔑 Keywords</h3>
            <ul>
              {keywords.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </aside>

          {/* =========================
              🧠 MAIN CONTENT
          ========================= */}
          <div className="ECEProjectDevelopmentCenter-center">
            {/* ✅ ONLY H1 UPDATED */}
            <h1>{pageTitle}</h1>
              <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the <em>Excellence in IoT Integration with WSN Project Development</em>, offering IEEE-aligned (2023–2025) innovative solutions targeting B.Tech, M.Tech, and Ph.D. scholars focused on expanding WSN capabilities within IoT ecosystems.
              </p>
              <p>
                WSNs form the backbone of IoT environments by bridging physical sensors with cloud analytics. Integration challenges include ensuring low latency, security, scalability, energy efficiency, and interoperability among diverse devices and protocols.
              </p>
            </section>
            {/* Comparative Table */}
            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – IoT and WSN Integration Approaches</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Integration Approach</th>
                      <th>Advantages</th>
                      <th>Challenges</th>
                      <th>Applications</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>MQTT/CoAP over WSN</td>
                      <td>Lightweight, low energy, scalable</td>
                      <td>Limited QoS, security overhead</td>
                      <td>Smart homes, environmental monitoring</td>
                    </tr>
                    <tr>
                      <td>IPv6 over Low-Power WSN (6LoWPAN)</td>
                      <td>Direct internet connectivity, global addressing</td>
                      <td>Memory and processing overhead</td>
                      <td>Smart cities, IIoT, healthcare IoT</td>
                    </tr>
                    <tr>
                      <td>Cloud-Centric IoT–WSN Integration</td>
                      <td>Centralized analytics, big data processing</td>
                      <td>Latency, bandwidth requirements</td>
                      <td>Precision agriculture, e-health</td>
                    </tr>
                    <tr>
                      <td>Edge/Fog Computing with WSN</td>
                      <td>Reduced latency, distributed intelligence</td>
                      <td>Device complexity, management issues</td>
                      <td>Autonomous systems, industrial IoT</td>
                    </tr>
                    <tr>
                      <td>Blockchain-enabled IoT–WSN</td>
                      <td>Secure, tamper-proof integration</td>
                      <td>High energy cost, scalability challenges</td>
                      <td>Smart contracts, financial IoT apps</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            {/* B.Tech Cycle */}
            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Project Development Cycle</h2>
              <p>
                B.Tech projects emphasize basic IoT–WSN connectivity like sensor data integration with cloud platforms (ThingSpeak, Blynk, AWS IoT). Tools include Arduino, ESP32, Raspberry Pi using MQTT/CoAP protocols. Example projects: temperature monitoring, smart home energy monitoring.
              </p>
            </section>
            {/* M.Tech Cycle */}
            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Project Development Cycle</h2>
              <p>
                M.Tech research covers advanced architectures such as 6LoWPAN healthcare monitoring, fog-enabled agriculture, and secure data aggregation. Tools used: NS3, Contiki Cooja, MATLAB, OMNeT++, and Python IoT libraries.
              </p>
            </section>
            {/* Ph.D. Cycle */}
            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Project Development Cycle</h2>
              <p>
                Ph.D. projects focus on AI-driven edge computing, blockchain-secured frameworks, federated learning for sensor optimization, and digital twins for WSNs, aiming for scalable, efficient, and secure IEEE-standard publications.
              </p>
            </section>
            {/* IEEE Project Titles */}
            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>MQTT-Based Lightweight IoT–WSN Integration for Smart Homes (2023)</li>
                <li>Secure IoT–WSN Architecture Using Blockchain Technology (2023)</li>
                <li>6LoWPAN-Enabled Healthcare IoT Monitoring Systems (2024)</li>
                <li>Fog-Assisted IoT–WSN Framework for Precision Agriculture (2024)</li>
                <li>AI-Powered Edge Analytics in IoT–WSN for Industrial IoT (2024)</li>
                <li>Federated Learning Framework for IoT–WSN Data Optimization (2025)</li>
                <li>Blockchain-Integrated Digital Twin for IoT–WSN in Smart Cities (2025)</li>
              </ul>
            </section>
            {/* About Section */}
            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute specializes in IoT–WSN integration projects, providing comprehensive support from sensor deployment to cloud connectivity, AI analytics, secure communications, hardware prototyping, and IEEE publication assistance.
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

          {/* =========================
              ➡ RIGHT SIDEBAR
          ========================= */}
          <aside className="right-sidebar">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/department/wireless-sensor-networks">Wireless Sensor Networks</a></li>
              <li><a href="/department/wireless-sensor-networks/energy-eff-routing-wsn">Energy Efficient Routing in WSN</a></li>
              <li><a href="/department/wireless-sensor-networks/secure-data-transmission-wsn">Secure Data Transmission in WSN</a></li>
              <li><a href="/department/wireless-sensor-networks/iot-wsn">IoT Based Wireless Sensor Networks</a></li>
              <li><a href="/department/wireless-sensor-networks/environmental-disaster-monitoring">Environmental Disaster Monitoring using WSN</a></li>
              <li><a href="/department/wireless-sensor-networks/underwater-wireless-sensor-networks">Underwater Wireless Sensor Networks</a></li>
              <li><a href="/department/wireless-sensor-networks/ai-based-wsn-optimization">AI-Based WSN Optimization</a></li>
            </ul>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default IoTIntegrationWSNProject;
