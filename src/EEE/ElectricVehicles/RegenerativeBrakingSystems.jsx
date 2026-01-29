import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Regenerative Braking Systems Project Development Center in Chennai",
  "Regenerative Braking IEEE Projects 2023–2025",
  "EV Braking Energy Recovery Projects",
  "Multi Motor Regenerative Braking Systems",
  "AI Based Regenerative Braking Control",
  "Hybrid Braking Systems for Electric Vehicles",
  "B.Tech Regenerative Braking Projects",
  "M.Tech EV Braking Research",
  "Ph.D Predictive Regenerative Braking",
  "Energy Recovery Systems for EVs",
  "Narpavi Research Institute EV Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question: "What services does the Regenerative Braking Systems Project Development Center offer?",
    answer:
      "We support B.Tech, M.Tech, and Ph.D. scholars with IEEE-aligned (2023–2025) project guidance in regenerative braking, including control algorithm design, motor-inverter integration, energy storage optimization, AI-based braking systems, and IEEE/Scopus/SCI publications."
  },
  {
    question: "What types of regenerative braking projects are supported?",
    answer:
      "B.Tech projects include basic EV regenerative braking simulations. M.Tech projects focus on adaptive braking strategies and multi-motor systems. Ph.D research covers AI/ML-based predictive braking, hybrid braking integration, patents, and publications."
  },
  {
    question: "Which tools and technologies are used?",
    answer:
      "MATLAB/Simulink, PSCAD, PLECS, embedded controllers (Arduino, STM32, DSP, FPGA), CAN bus integration, LabVIEW dashboards, IoT modules, and AI frameworks such as TensorFlow and PyTorch."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects align with IEEE Transactions (2023–2025) focusing on vehicular energy recovery systems, adaptive braking strategies, power electronics integration, and AI-enabled regenerative braking."
  },
  {
    question: "What academic support is provided?",
    answer:
      "End-to-end academic support including simulations, hardware integration, system optimization, IEEE-format documentation, and international journal publication guidance."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Regenerative Braking Systems – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Regenerative Braking Systems Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering EV energy recovery, adaptive braking, multi-motor systems, AI-based braking control, and hybrid braking integration.";

const pageUrl =
  "/department/electric-vehicles/regenerative-braking-systems";

const EEERegenerativeBrakingSystemsProjectDevelopmentCenter = () => {
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
            {/* ✅ SINGLE H1 ONLY */}
            <h1>{pageTitle}</h1>
    {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> hosts the Regenerative Braking Systems Project Development Center, where students explore IEEE-aligned (2023–2025) innovations in braking energy recovery, algorithms, and battery-supercapacitor energy storage systems.</p>
              <p>By combining electric drives, control strategies, and AI-enabled optimization, students gain real-world experience in EV braking efficiency, range extension, and predictive braking safety systems.</p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of Regenerative Braking Systems</h2>
              <ul>
                <li>Recovers vehicle kinetic energy to extend range.</li>
                <li>Integrates seamlessly with motors, batteries, and inverters.</li>
                <li>Reduces wear on brake systems, enhancing lifespan.</li>
                <li>Crucial for electric cars, buses, and fleet vehicles.</li>
                <li>IEEE trends (2023–2025): adaptive and AI-driven regenerative braking in multi-motor vehicles.</li>
              </ul>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Regenerative Braking Projects</h2>
              <ul>
                <li>Basic regenerative braking model in MATLAB/Simulink</li>
                <li>Small EV braking energy recovery prototype with Arduino</li>
                <li>Simple battery charging integration from motor inverter</li>
              </ul>
              <p>Focus: foundations of EV braking recovery design & fundamental control testing.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Regenerative Braking Projects</h2>
              <ul>
                <li>Multi-motor regenerative braking system simulations</li>
                <li>Adaptive control algorithms for regenerative energy optimization</li>
                <li>Integration of regenerative braking with hybrid drive-train and BMS</li>
              </ul>
              <p>Focus: advanced controller design, power electronics integration, IEEE-guided performance validation.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D Regenerative Braking Projects</h2>
              <ul>
                <li>AI/ML predictive regenerative braking models</li>
                <li>Vehicle-wide hybrid braking optimization algorithms</li>
                <li>Adaptive braking safety with sensor fusion</li>
                <li>Patents & IEEE/SCI publications in EV braking research</li>
              </ul>
              <p>Focus: cutting-edge braking optimization with AI, digital twins, IoT, and Industry 4.0 mobility systems.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Braking Technologies – Conventional vs EV Systems</h2>
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
                      <td>Mechanical Friction Braking</td>
                      <td>Conventional Vehicles</td>
                      <td>Reliable, but energy wasted</td>
                    </tr>
                    <tr>
                      <td>Single-Motor Regenerative Braking</td>
                      <td>Cars, Scooters</td>
                      <td>Moderate efficiency recovery</td>
                    </tr>
                    <tr>
                      <td>Multi-Motor Regenerative Braking</td>
                      <td>EV Buses, Commercial EVs</td>
                      <td>High efficiency, balanced braking</td>
                    </tr>
                    <tr>
                      <td>AI-Enhanced Regenerative Braking</td>
                      <td>Smart EVs</td>
                      <td>Adaptive, predictive braking recovery</td>
                    </tr>
                    <tr>
                      <td>Hybrid (Regen+Friction)</td>
                      <td>Passenger & Fleet EVs</td>
                      <td>Optimal safety + energy recovery</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute supports scholars in regenerative braking projects across simulation, inverter-battery energy recovery integration, AI-enhanced braking control, and IEEE-quality publications. We ensure innovations lead to future-ready EV energy recovery solutions globally.</p>
            </section>

            {/* ❓ FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((f, i)=>(
                  <details key={i}>
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

export default EEERegenerativeBrakingSystemsProjectDevelopmentCenter;
