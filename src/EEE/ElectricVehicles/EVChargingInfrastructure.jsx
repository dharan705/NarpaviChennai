import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "EV Charging Infrastructure Project Development Center in Chennai",
  "EV Charging Infrastructure IEEE Projects 2023–2025",
  "AC DC EV Charger Projects",
  "Fast EV Charging Systems",
  "Wireless EV Charging IEEE Projects",
  "Vehicle to Grid V2G Charging Systems",
  "Smart Grid EV Charging Infrastructure",
  "IoT Based EV Charging Monitoring",
  "B.Tech EV Charging Projects",
  "M.Tech EV Charging Research",
  "Ph.D EV Charging Research",
  "Narpavi Research Institute EV Charging Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question: "What services does the EV Charging Infrastructure Project Development Center offer?",
    answer:
      "We provide IEEE-aligned (2023–2025) project support for B.Tech, M.Tech, and Ph.D. students covering charger design, AC/DC charging systems, wireless charging prototypes, smart grid integration, IoT monitoring systems, and publication guidance."
  },
  {
    question: "What types of EV Charging projects are supported?",
    answer:
      "B.Tech projects include AC/DC chargers and monitoring circuits. M.Tech projects cover fast charging, smart load management, and wireless charging. Ph.D research focuses on grid-integrated smart charging, V2G systems, AI-enabled charging, and SCI/Scopus publications."
  },
  {
    question: "Which tools and technologies are used?",
    answer:
      "MATLAB/Simulink, PSCAD, PLECS, IoT platforms (MQTT, AWS IoT, Azure IoT), power electronics hardware, FPGA/DSP controllers, and TensorFlow for AI-based optimization."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects reference IEEE Transactions (2023–2025) on fast charging, wireless charging, bidirectional V2G energy systems, predictive load management, and smart charging platforms."
  },
  {
    question: "What academic support is provided?",
    answer:
      "Complete support including IEEE topic selection, charger circuit design, IoT-enabled monitoring, renewable energy integration, IEEE documentation, and international journal publication mentorship."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "EV Charging Infrastructure – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) EV Charging Infrastructure Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering AC/DC fast chargers, wireless EV charging, vehicle-to-grid V2G systems, smart grid integration, IoT monitoring, and AI-enabled load optimization.";

const pageUrl = "/department/electric-vehicles/ev-charging-infrastructure";

const EEEEvChargingInfrastructureProjectDevelopmentCenter = () => {
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
 {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p>The <strong>EV Charging Infrastructure Project Development Center</strong> at Narpavi Research Institute empowers scholars to design IEEE-aligned (2023–2025) charging solutions that include AC/DC fast chargers, wireless charging systems, V2G architectures, and IoT-monitoring dashboards for smart charging networks.</p>
              <p>Students integrate hardware, power electronics, and AI-based control strategies for future-ready EV charging stations and Industry 4.0 deployments.</p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of EV Charging Infrastructure</h2>
              <ul>
                <li>Provides efficient and safe charging for EV batteries.</li>
                <li>Enables fast charging, load balancing, and grid integration.</li>
                <li>Seamless integration with IoT and renewable sources.</li>
                <li>Essential for EV fleets, urban transport, and smart cities.</li>
                <li>IEEE 2023–2025 focus areas: wireless charging, V2G, AI load management.</li>
              </ul>
            </section>

            {/* B.Tech Projects */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech EV Charging Projects</h2>
              <ul>
                <li>Design of basic AC/DC charging circuits</li>
                <li>Microcontroller-based voltage/current monitoring</li>
                <li>Small-scale charger prototype implementation</li>
              </ul>
              <p>Focus: fundamental EV charger design and lab implementation projects.</p>
            </section>

            {/* M.Tech Projects */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech EV Charging Projects</h2>
              <ul>
                <li>Fast DC charger systems and inverter optimization</li>
                <li>IoT-enabled smart charging dashboards</li>
                <li>Wireless EV charging system prototypes</li>
              </ul>
              <p>Focus: industrial-scale and IoT-embedded EV charging aligned to IEEE 2023–2025 standards.</p>
            </section>

            {/* Ph.D Research */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D EV Charging Research</h2>
              <ul>
                <li>Smart grid-integrated EV charging systems</li>
                <li>Bidirectional Vehicle-to-Grid (V2G) energy management</li>
                <li>AI-enabled predictive energy optimization</li>
                <li>High-power wireless EV charging prototypes</li>
              </ul>
              <p>Focus: futuristic scalable EV charging systems, V2G integration, SCI-indexed research outcomes.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative EV Charging Technologies</h2>
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
                      <td>Level 1 AC Charging</td>
                      <td>Residential EVs</td>
                      <td>Simple, cost-effective</td>
                    </tr>
                    <tr>
                      <td>Level 2 AC Charging</td>
                      <td>Public/Fleet EVs</td>
                      <td>Moderately fast charging</td>
                    </tr>
                    <tr>
                      <td>DC Fast Charging</td>
                      <td>EV Stations</td>
                      <td>Rapid charging, low downtime</td>
                    </tr>
                    <tr>
                      <td>Wireless Charging</td>
                      <td>Urban Parking, EV fleets</td>
                      <td>Contactless and convenient</td>
                    </tr>
                    <tr>
                      <td>Smart/Grid-Integrated Charging</td>
                      <td>Smart Factories, Cities</td>
                      <td>Load balancing, V2G ready</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p><strong>Narpavi Research Institute</strong> provides academic and research expertise in EV Charging Infrastructure projects, covering IEEE-topic aligned circuit development, power electronics hardware, IoT-smart grid integration, predictive load balancing, and IEEE/Springer/Elsevier publication mentoring.</p>
            </section>

            {/* ❓ FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((item, i)=>(
                  <details key={i}>
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
              <li><a href="/department/electric-vehicles">Electric Vehicles – Project Development Center</a></li>
              <li><a href="/department/electric-vehicles/bms">Battery Management Systems (BMS)</a></li>
              <li><a href="/department/electric-vehicles/ev-charging-infrastructure">EV Charging Infrastructure</a></li>
              <li><a href="/department/electric-vehicles/ev-motor-drive-systems">EV Motor Drive Systems</a></li>
              <li><a href="/department/electric-vehicles/hev">Hybrid Electric Vehicles (HEV)</a></li>
              <li><a href="/department/electric-vehicles/power-electronics-evs">Power Electronics for EVs</a></li>
              <li><a href="/department/electric-vehicles/regenerative-braking-systems">Regenerative Braking Systems</a></li>
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

export default EEEEvChargingInfrastructureProjectDevelopmentCenter;
