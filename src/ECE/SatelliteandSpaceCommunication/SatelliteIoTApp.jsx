import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* ================= FAQs ================= */
const faqs = [
  {
    question: "What are Satellite IoT (Sat-IoT) Applications?",
    answer:
      "Sat-IoT combines satellites with IoT networks to provide global connectivity, especially in remote and disaster-prone regions."
  },
  {
    question: "What projects are pursued by B.Tech students in Sat-IoT?",
    answer:
      "IoT sensors with satellite uplinks, asset tracking, weather monitoring, and energy-efficient IoT systems."
  },
  {
    question: "What advanced designs do M.Tech projects focus on?",
    answer:
      "LEO-based Sat-IoT, AI-driven agriculture, disaster management, and vehicular Sat-IoT systems."
  },
  {
    question: "What research areas are emphasized in Ph.D. Sat-IoT projects?",
    answer:
      "Security protocols, energy-aware architectures, ML optimization, and hybrid satellite–terrestrial IoT."
  },
  {
    question: "Which tools support Sat-IoT projects?",
    answer:
      "NS3, MATLAB, Python, STK, TensorFlow, LoRaWAN, MQTT, and ThingsBoard."
  }
];

/* ================= KEYWORDS ARRAY ================= */
const keywords = [
  "Satellite IoT Projects",
  "Sat-IoT Applications",
  "LEO IoT Communication",
  "Smart Agriculture with Sat-IoT",
  "Disaster Management IoT via Satellites",
  "Hybrid Satellite-Terrestrial IoT",
  "AI in Satellite IoT",
  "Secure Sat-IoT Systems",
  "IEEE Satellite IoT Research",
  "Narpavi Research Institute IoT Projects"
];

const SatelliteIoTApplicationsProject = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">

      {/* ================= SEO ================= */}
      <SEO
        title="Satellite IoT (Sat-IoT) Applications – Project Development Center in Chennai"
        description="IEEE-aligned (2023–2025) Satellite IoT projects on LEO/MEO/GEO Sat-IoT coverage, hybrid satellite–terrestrial IoT, smart agriculture, disaster management, asset tracking, and AI-based energy-aware architectures."
        keywords={keywords}
        url="/department/satellite-communication/satellite-iot-applications-project-development-center-in-chennai"
        faqs={faqs}
      />

      <Sidebar
        extraLinks={[
          { id: "ece", label: "ece", path: "/department?dept=ece" }
        ]}
      />

      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          {/* ================= LEFT SIDEBAR ================= */}
          <aside className="left-sidebar2">
          <Leftsidebar/>
          </aside>

          {/* ================= CENTER CONTENT ================= */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>
              Satellite IoT (Sat-IoT) Applications – Project Development Center in Chennai
            </h1>
               <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> offers expert guidance and project support in Satellite IoT systems, focusing on global IoT connectivity, hybrid networks, AI-powered applications, and energy-efficient designs aligned with IEEE standards (2023–2025).
              </p>
              <p>
                Students and researchers explore applications from smart agriculture and logistics to disaster management and military surveillance using Sat-IoT technologies.
              </p>
            </section>

            {/* Comparative Technology–Industry Table */}
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
                      <td>LEO Sat-IoT</td>
                      <td>Low latency IoT coverage</td>
                      <td>Smart agriculture, logistics</td>
                      <td>NS3, MATLAB</td>
                    </tr>
                    <tr>
                      <td>MEO/GEO Sat-IoT</td>
                      <td>Wide coverage IoT connectivity</td>
                      <td>Military, maritime</td>
                      <td>STK, Python</td>
                    </tr>
                    <tr>
                      <td>Sat-IoT Security</td>
                      <td>Cryptographic protocols</td>
                      <td>Critical IoT networks</td>
                      <td>MATLAB, NS3</td>
                    </tr>
                    <tr>
                      <td>AI in Sat-IoT</td>
                      <td>Predictive analytics & fault detection</td>
                      <td>Smart cities, disaster management</td>
                      <td>TensorFlow, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Hybrid Networks</td>
                      <td>Sat-IoT + terrestrial IoT</td>
                      <td>Universal IoT access</td>
                      <td>LoRaWAN, MQTT</td>
                    </tr>
                    <tr>
                      <td>Energy Optimization</td>
                      <td>Battery-efficient IoT nodes</td>
                      <td>Remote environmental monitoring</td>
                      <td>Python, MATLAB</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Project Development Cycles */}
            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Projects in Satellite IoT</h2>
              <p>
                Focus on IoT sensors with satellite uplink simulation, asset tracking with LEO satellites, weather monitoring via satellite, and energy-efficient IoT device design using Arduino, Raspberry Pi, MATLAB, and ThingsBoard.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Projects in Satellite IoT</h2>
              <p>
                In-depth design of LEO-based Sat-IoT systems, AI-driven smart agriculture, disaster management systems, and satellite-enabled vehicular IoT using MATLAB, NS3, Python, and LoRaWAN.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Research in Satellite IoT</h2>
              <p>
                Research on security protocols, energy-aware architectures, ML-based Sat-IoT optimization, and interoperability of hybrid terrestrial-satellite IoT networks with publications in IEEE journals.
              </p>
            </section>

            {/* IEEE Project Titles */}
            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>LEO Satellite IoT for Global Asset Tracking (2023)</li>
                <li>Smart Agriculture Monitoring with Sat-IoT and AI (2023)</li>
                <li>Secure Satellite IoT Architectures for Disaster Recovery (2024)</li>
                <li>Hybrid Satellite-Terrestrial IoT Networks for Global Coverage (2024)</li>
                <li>Machine Learning for Satellite-Enabled IoT Optimization (2025)</li>
                <li>Energy-Aware Sat-IoT Architectures for Smart Cities (2025)</li>
              </ul>
            </section>

            {/* About Section */}
            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a leader in Satellite IoT project support, driving innovation in global connectivity and AI-enabled applications for next-generation IoT systems aligned with IEEE standards.
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

          {/* ================= RIGHT SIDEBAR ================= */}
          <aside className="right-sidebar1">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/department/satellite-communication">Satellite & Space Communication</a></li>
              <li><a href="/department/satellite-communication/antenna-systems-space-applications">Antenna Systems for Space Applications</a></li>
              <li><a href="/department/satellite-communication/cubesat-nanosatellite">CubeSat & Nanosatellite Projects</a></li>
              <li><a href="/department/satellite-communication/deep-space-communication">Deep Space Communication</a></li>
              <li><a href="/department/satellite-communication/gnss-project">GNSS Projects</a></li>
              <li><a href="/department/satellite-communication/satellite-communication-5g-6g">Satellite Communication for 5G & 6G</a></li>
              <li><a href="/department/satellite-communication/satellite-iot-applications">Satellite IoT Applications</a></li>
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

export default SatelliteIoTApplicationsProject;
