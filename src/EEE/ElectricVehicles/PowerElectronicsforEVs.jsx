import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Power Electronics for EVs Project Development Center in Chennai",
  "Power Electronics for Electric Vehicles IEEE Projects 2023–2025",
  "EV Inverter Design Projects",
  "DC DC Converter Projects for EVs",
  "Bidirectional Converter V2G Projects",
  "Wide Bandgap SiC GaN Power Electronics",
  "AI Based EV Power Electronics Control",
  "B.Tech EV Power Electronics Projects",
  "M.Tech EV Inverter Research",
  "Ph.D EV Power Electronics Optimization",
  "Narpavi Research Institute EV Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question: "What services does the Power Electronics for EVs Project Development Center offer?",
    answer:
      "We provide IEEE-aligned (2023–2025) project support for B.Tech, M.Tech, and Ph.D. students focusing on DC-DC converters, inverters, bidirectional converters, charging controllers, wide-bandgap devices, and AI-based power electronics design."
  },
  {
    question: "What types of EV power electronics projects are supported?",
    answer:
      "B.Tech projects include DC-DC converters and inverter simulations. M.Tech projects focus on SiC/GaN-based converters, bidirectional V2G systems, and high-efficiency inverters. Ph.D research includes AI-driven converter control, fault-tolerant EV power electronics, and high-power propulsion systems."
  },
  {
    question: "Which tools and technologies are used?",
    answer:
      "MATLAB/Simulink, PSCAD, PLECS, FPGA/DSP controllers, Arduino/STM32, SiC/GaN wide-bandgap devices, CAN protocols, IoT telemetry, and AI frameworks such as TensorFlow and PyTorch."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects align with IEEE Transactions (2023–2025) focusing on EV motor drives, wide-bandgap power electronics, fault-tolerant converters, regenerative braking, and V2G integration."
  },
  {
    question: "What academic support is provided?",
    answer:
      "Complete academic support including IEEE topic identification, circuit design, hardware prototyping, AI-based optimization, IEEE-format documentation, and Scopus/SCI/IEEE publication guidance."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Power Electronics for EVs – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Power Electronics for EVs Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering DC-DC converters, inverters, bidirectional V2G systems, wide-bandgap SiC/GaN devices, AI-based control, and EV propulsion research.";

const pageUrl = "/department/electric-vehicles/power-electronics-evs";

const EEEPowerElectronicsEvsProjectDevelopmentCenter = () => {
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
            {/* ✅ SINGLE H1 */}
            <h1>{pageTitle}</h1>
   {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> provides students with IEEE-aligned (2023–2025) project development in EV power electronics, enabling innovations in converters, inverters, regenerative systems, and AI-optimized drive electronics for electrified transport.</p>
              <p>Power electronics govern the energy exchange between EV batteries, motor drives, and charging systems, playing a pivotal role in EV safety, range, thermal management, and performance optimization.</p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of Power Electronics for EVs</h2>
              <ul>
                <li>Manages battery-to-motor energy conversion efficiently.</li>
                <li>Integrates with motor drives, BMS, chargers, and regenerative braking.</li>
                <li>Enhances EV performance, range, and safety.</li>
                <li>Reduces system power losses.</li>
                <li>IEEE trends (2023–2025): SiC/GaN wide-bandgap devices and AI-based converter optimization.</li>
              </ul>
            </section>

            {/* B.Tech Projects */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Projects in EV Power Electronics</h2>
              <ul>
                <li>Basic DC-DC converter circuits</li>
                <li>Inverter and motor drive controller prototypes</li>
                <li>MATLAB/Simulink circuit-level EV simulations</li>
              </ul>
              <p>Focus: learning fundamentals of EV converters and inverter drive optimization.</p>
            </section>

            {/* M.Tech Projects */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Projects in EV Power Electronics</h2>
              <ul>
                <li>High-efficiency inverter design with SiC/GaN MOSFETs</li>
                <li>Bidirectional converter design for V2G and regenerative braking</li>
                <li>Integration of converters with BMS and motor controller</li>
                <li>IEEE-aligned optimization strategies and prototyping</li>
              </ul>
              <p>Focus: advanced EV converter/inverter systems and energy optimization with wide-bandgap devices.</p>
            </section>

            {/* Ph.D Projects */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Projects in EV Power Electronics</h2>
              <ul>
                <li>AI-based predictive control of converters</li>
                <li>Fault-tolerant converter topologies for EV propulsion</li>
                <li>High-power system integration with grid interfaces (V2G)</li>
                <li>SCI/Scopus-indexed publications and patents on future EV electronics</li>
              </ul>
              <p>Focus: next-gen fault-tolerant, AI-integrated EV power electronics architectures.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative EV Power Electronics Technologies</h2>
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
                      <td>Conventional Silicon MOSFETs</td>
                      <td>Motor Drives, Converters</td>
                      <td>Standard efficiency, cost-effective</td>
                    </tr>
                    <tr>
                      <td>Wide-Bandgap Devices (SiC/GaN)</td>
                      <td>High-performance EVs</td>
                      <td>High efficiency, reduced thermal losses</td>
                    </tr>
                    <tr>
                      <td>DC-DC Converters</td>
                      <td>Battery Management & Charging</td>
                      <td>Voltage regulation, energy efficiency</td>
                    </tr>
                    <tr>
                      <td>Bidirectional Converters</td>
                      <td>EV fleets, V2G</td>
                      <td>Two-way energy flow, regenerative braking</td>
                    </tr>
                    <tr>
                      <td>Inverter + Drive Integration</td>
                      <td>EV Propulsion</td>
                      <td>Efficient torque/speed control</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            {/* About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute advances EV innovation with IEEE-standard guidance in power electronics. From converter & inverter design, wide-bandgap device research, to IoT-enabled optimization and SCI/IEEE publications, we help scholars globally bridge EV research to industrial ecosystems.</p>
            </section>

            {/* ❓ FAQ Section */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((item,i)=>(
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

export default EEEPowerElectronicsEvsProjectDevelopmentCenter;
