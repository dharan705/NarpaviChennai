import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Overvoltage & Surge Protection Project Development Center in Chennai",
  "Overvoltage Surge Protection IEEE Projects 2023–2025",
  "Lightning Arrester Projects",
  "Surge Protective Devices SPD",
  "B.Tech Overvoltage Protection Projects",
  "M.Tech AI Surge Detection Projects",
  "Ph.D Smart Protective Relays",
  "Transient Voltage Suppression Projects",
  "IoT Surge Monitoring Systems",
  "Narpavi Research Institute Surge Protection"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Overvoltage & Surge Protection Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Overvoltage & Surge Protection Project Development Center supports B.Tech, M.Tech, and Ph.D. students in IEEE-aligned (2023–2025) projects on surge protection devices, lightning arresters, transient suppression methods, intelligent protective relays, and AI-assisted monitoring systems."
  },
  {
    question: "What types of projects are supported?",
    answer:
      "We support B.Tech, M.Tech, and Ph.D. projects in lightning arresters, surge protection circuits, AI-assisted detection, smart relays, and grid-level surge coordination."
  },
  {
    question: "Which tools are used?",
    answer:
      "MATLAB/Simulink, PSCAD, COMSOL Multiphysics, FPGA/DSP platforms, IoT tools, TensorFlow, and PyTorch."
  },
  {
    question: "How are projects aligned with IEEE?",
    answer:
      "Projects follow IEEE Transactions (2023–2025) on surge protective devices, lightning protection, smart relays, and protection coordination."
  },
  {
    question: "What academic support is provided?",
    answer:
      "We provide IEEE topic selection, simulations, hardware prototyping, documentation, and IEEE/Scopus/SCI publication support."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Overvoltage & Surge Protection – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Overvoltage & Surge Protection Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering lightning arresters, surge protective devices, AI-assisted smart relays, and transient voltage mitigation.";

const pageUrl =
  "/department/high-voltage-engineering/overvoltage-surge-protection";

const EEEOvervoltageSurgeProtectionProjectDevelopmentCenter = () => {
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
              <p>
                <strong>Narpavi Research Institute</strong> presents the Overvoltage & Surge Protection Project Development Center, 
                providing global scholars with IEEE-aligned (2023–2025) insights into transient voltage suppression, lightning surge analysis, 
                coordination of protection devices, and predictive AI-assisted mitigation systems.
              </p>
              <p>
                Scholars gain expertise in designing SPDs, arresters, SCADA-linked protection schemes, surge transient analysis, 
                IoT-fault monitoring, and resilient coordination for smart grids and industrial power systems.
              </p>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Overvoltage & Surge Protection Projects</h2>
              <ul>
                <li>Basics of surge, transient & overvoltage phenomena</li>
                <li>IEEE publications (2023–2025) on lightning arresters, surge systems</li>
                <li>Simulation using MATLAB/Simulink, PSCAD, COMSOL</li>
                <li>Device evaluation: surge currents, transient spikes</li>
                <li>Prototyping arresters, SPDs, IoT-enabled monitoring</li>
                <li>Prepare IEEE-style technical reports</li>
              </ul>
              <p>Focus: foundation-level transient studies + protection hardware practice.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Overvoltage & Surge Protection Projects</h2>
              <ul>
                <li>Detailed IEEE Transactions survey (2023–2025) in SPD/relay design</li>
                <li>AI/ML-assisted surge prediction + adaptive protective control</li>
                <li>Simulation for transient mitigation & voltage stress reduction</li>
                <li>FPGA/DSP-based smart relay prototypes</li>
                <li>Testing SPDs + arresters under real surge waveforms</li>
                <li>IEEE-compliant reports supporting journal submission</li>
              </ul>
              <p>Focus: advanced design, AI protection coordination, experiments for industry readiness.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Overvoltage & Surge Protection Projects</h2>
              <ul>
                <li>Comprehensive IEEE literature review of surge protection trends</li>
                <li>AI/Deep Learning adaptive surge detection frameworks</li>
                <li>Development of HVDC & Microgrid transient resilience systems</li>
                <li>IoT-enabled lab-scale surge protection + HIL testing</li>
                <li>Patents, IEEE journal publications in smart relays & SPDs</li>
              </ul>
              <p>Focus: groundbreaking industrial surge resilience, predictive & intelligent algorithms.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Overvoltage & Surge Protection vs. Industry Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Focus</th>
                      <th>Industry Application</th>
                      <th>R&D Focus (2023–2025)</th>
                      <th>Academic Level</th>
                      <th>Tools & Frameworks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Lightning & Surge Arresters</td>
                      <td>Transmission Lines, Substations</td>
                      <td>Transient + Lightning Overvoltage Mitigation</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, PSCAD</td>
                    </tr>
                    <tr>
                      <td>Surge Protective Devices (SPDs)</td>
                      <td>Industrial/Residential Systems</td>
                      <td>Voltage suppression & clamping</td>
                      <td>B.Tech/M.Tech</td>
                      <td>COMSOL, PSIM</td>
                    </tr>
                    <tr>
                      <td>Smart Protective Relays</td>
                      <td>Utility Grids, Industrial Plants</td>
                      <td>Automated trip & transient mitigation</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>FPGA, DSP, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Transient Suppression Circuits</td>
                      <td>Renewable Integration, Power Electronics</td>
                      <td>Device protection from spikes</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink</td>
                    </tr>
                    <tr>
                      <td>AI-Assisted Surge Monitoring</td>
                      <td>Microgrids, Smart Grids</td>
                      <td>Predictive transient anomaly detection</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Python, TensorFlow</td>
                    </tr>
                    <tr>
                      <td>Device Coordination & Reliability</td>
                      <td>HVDC, Renewable Grids</td>
                      <td>System-level protection coordination</td>
                      <td>Ph.D.</td>
                      <td>PSCAD, COMSOL</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global R&D hub in EEE project development. 
                Our Overvoltage & Surge Protection Center delivers IEEE-centric project guidance across dielectric arresters, surge systems, 
                smart relays, and AI-driven predictive mitigation techniques.
              </p>
              <p>
                From simulations to prototypes and IEEE-publication, we ensure our scholars 
                contribute to both industrial implementation and academic innovation.
              </p>
            </section>

            {/* ❓ FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((q, index) => (
                  <details key={index}>
                    <summary>{q.question}</summary>
                    <p>{q.answer}</p>
                  </details>
                ))}
              </div>

            </section>
          </div>

          {/* ➡ RIGHT SIDEBAR */}
          <aside className="right-sidebar1">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/department/high-voltage-engineering">High Voltage Engineering</a></li>
              <li><a href="/department/high-voltage-engineering/gas-insulated-substations">Gas Insulated Substations</a></li>
              <li><a href="/department/high-voltage-engineering/high-voltage-testing">High Voltage Testing Equipment</a></li>
              <li><a href="/department/high-voltage-engineering/hvdc-transmission">HVDC Transmission Systems</a></li>
              <li><a href="/department/high-voltage-engineering/insulation-materials">Insulation Materials & Techniques</a></li>
              <li><a href="/department/high-voltage-engineering/overvoltage-surge-protection">Overvoltage & Surge Protection</a></li>
              <li><a href="/department/high-voltage-engineering/partial-discharge-analysis">Partial Discharge Analysis</a></li>
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

export default EEEOvervoltageSurgeProtectionProjectDevelopmentCenter;
