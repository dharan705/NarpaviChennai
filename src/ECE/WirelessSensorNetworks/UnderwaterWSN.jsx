import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Underwater Wireless Sensor Networks Project Development Center in Chennai",
  "UWSN IEEE Projects",
  "Acoustic Communication in UWSN",
  "NS3-UAN Aqua-Sim UWSN",
  "Tsunami Detection Underwater WSN",
  "Marine Biodiversity Monitoring UWSN",
  "AUV Integrated UWSN Systems",
  "Ocean Pollution Monitoring WSN",
  "Blockchain Enabled Underwater WSN",
  "Narpavi Research Institute UWSN"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question: "What distinguishes Underwater Wireless Sensor Networks from terrestrial WSNs?",
    answer:
      "UWSNs use acoustic communication, pressure-tolerant nodes, and adaptive routing to function in harsh underwater environments."
  },
  {
    question: "What are the key applications of Underwater Wireless Sensor Networks?",
    answer:
      "Applications include ocean pollution monitoring, tsunami alerts, oil & gas pipeline monitoring, naval surveillance, and marine biodiversity studies."
  },
  {
    question: "What tools are used for UWSN project development?",
    answer:
      "NS3-UAN, Aqua-Sim, MATLAB, OMNeT++, Arduino, ESP32, Raspberry Pi, and hydrophone sensors."
  },
  {
    question: "What challenges are unique to UWSNs?",
    answer:
      "Challenges include limited bandwidth, high energy consumption, bio-corrosion, deep-sea deployment issues, and secure communication."
  },
  {
    question: "What support does Narpavi Research Institute provide?",
    answer:
      "We provide sensor integration, AI optimization, secure protocol design, project guidance, and IEEE publication support."
  }
];

/* =========================
   📌 TITLE (SAME EVERYWHERE)
========================= */
const pageTitle =
  "Underwater Wireless Sensor Networks - Project Development Center in Chennai";

const pageUrl =
  "/department/wireless-sensor-networks/underwater-wireless-sensor-networks-project-development-center-in-chennai";

const pageDescription =
  "Underwater Wireless Sensor Networks Project Development Center in Chennai offering IEEE-aligned (2023–2025) projects using acoustic communication, NS3-UAN, Aqua-Sim, MATLAB, Arduino, ESP32 for ocean monitoring, tsunami detection, and naval surveillance.";

const UWSNProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      {/* =========================
          🔍 SEO (ONLY ONCE)
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
            <Leftsidebar/>
          </aside>

          {/* =========================
              🧠 MAIN CONTENT
          ========================= */}
          <div className="ECEProjectDevelopmentCenter-center">
            {/* ✅ ONLY H1 UPDATED */}
            <h1>{pageTitle}</h1>
             <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> offers specialized IEEE-aligned (2023–2025) project development for B.Tech, M.Tech, and Ph.D. scholars in Underwater Wireless Sensor Networks, focusing on marine research, environmental monitoring, and defense applications.
              </p>
              <p>
                UWSNs require sophisticated technologies like acoustic communication and AI-driven optimization to operate effectively in challenging underwater environments marked by pressure, corrosion, and limited bandwidth.
              </p>
            </section>
            {/* Comparative Table */}
            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – UWSN Applications</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Application</th>
                      <th>UWSN Role</th>
                      <th>Benefits</th>
                      <th>Challenges</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ocean Pollution Monitoring</td>
                      <td>Deploying chemical/biological underwater sensors</td>
                      <td>Real-time water quality assessment</td>
                      <td>Sensor fouling and bio-corrosion</td>
                    </tr>
                    <tr>
                      <td>Tsunami &amp; Earthquake Alerts</td>
                      <td>Ocean pressure & seismic sensors</td>
                      <td>Early warnings, coastal safety</td>
                      <td>Deep-sea deployment challenges</td>
                    </tr>
                    <tr>
                      <td>Oil &amp; Gas Pipeline Monitoring</td>
                      <td>Acoustic sensor networks</td>
                      <td>Prevent leakage, ensure structural safety</td>
                      <td>Long-term durability</td>
                    </tr>
                    <tr>
                      <td>Naval Surveillance</td>
                      <td>UWSN for target detection</td>
                      <td>Enhances maritime defense</td>
                      <td>Secure communication in dynamic waters</td>
                    </tr>
                    <tr>
                      <td>Marine Biodiversity Study</td>
                      <td>Sensor-based tracking of aquatic species</td>
                      <td>Supports ecosystem preservation</td>
                      <td>Limited bandwidth in acoustic channels</td>
                    </tr>
                    <tr>
                      <td>Underwater Robotics</td>
                      <td>WSN-enabled Autonomous Underwater Vehicles (AUVs)</td>
                      <td>Coordinated exploration & mapping</td>
                      <td>High energy consumption</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            {/* B.Tech Cycle */}
            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Project Development Cycle</h2>
              <p>
                Focus on underwater sensing and monitoring like IoT-integrated water quality and fish habitat monitoring using Arduino, Raspberry Pi, ESP32, hydrophone sensors, and cloud dashboards.
              </p>
            </section>
            {/* M.Tech Cycle */}
            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Project Development Cycle</h2>
              <p>
                Emphasis on energy-efficient routing, secure communication, and hybrid acoustic-optical communication using simulators like NS3-UAN, Aqua-Sim, MATLAB, OMNeT++, including AI optimization.
              </p>
            </section>
            {/* Ph.D. Cycle */}
            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Project Development Cycle</h2>
              <p>
                Advanced research includes blockchain-enabled secure communication, AI-driven AUV collaboration, digital twin modeling, and 5G/6G-assisted smart maritime IoT, targeting IEEE Transactions publications.
              </p>
            </section>
            {/* IEEE Project Titles */}
            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>Low-Cost IoT-Based UWSN for Water Quality Monitoring (2023)</li>
                <li>Energy-Efficient Routing in UWSN for Tsunami Prediction (2023)</li>
                <li>Hybrid Acoustic–Optical Communication in UWSN (2024)</li>
                <li>Secure Blockchain-Enabled UWSN for Offshore Monitoring (2024)</li>
                <li>AI-Assisted AUV and UWSN Integration for Marine Biodiversity Study (2024)</li>
                <li>Fog-Enabled UWSN for Oil and Gas Pipeline Monitoring (2025)</li>
                <li>Digital Twin Modeling of Underwater Ecosystems Using UWSN (2025)</li>
              </ul>
            </section>
            {/* About Section */}
            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute specializes in UWSN project development, sensor integration, AI analysis, secure protocols, and IEEE publication support for academic and industrial impact.
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
          <aside className="right-sidebar1">
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

export default UWSNProjectDevelopmentCenter;
