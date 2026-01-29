import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Hybrid Electric Vehicles Project Development Center in Chennai",
  "Hybrid Electric Vehicles IEEE Projects 2023–2025",
  "HEV Propulsion Systems Projects",
  "Hybrid Energy Management Systems",
  "Regenerative Braking HEV Projects",
  "Parallel Series Plug-in Hybrid Vehicles",
  "AI Based HEV Energy Optimization",
  "B.Tech HEV Projects",
  "M.Tech HEV Energy Management Research",
  "Ph.D HEV Optimization Projects",
  "Narpavi Research Institute HEV Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question: "What services does the Hybrid Electric Vehicles (HEV) Project Development Center offer?",
    answer:
      "We provide IEEE-aligned (2023–2025) support for B.Tech, M.Tech, and Ph.D. projects on hybrid propulsion systems, energy management strategies, motor–generator integration, regenerative braking, power electronics, and IEEE/Scopus/SCI journal publications."
  },
  {
    question: "What types of HEV projects are supported?",
    answer:
      "B.Tech projects include basic HEV drive models and MATLAB simulations. M.Tech projects focus on energy management optimization and regenerative braking. Ph.D research includes AI/ML predictive HEV management, multi-motor hybrids, advanced powertrain optimization, and patent-ready innovations."
  },
  {
    question: "Which tools and technologies are used?",
    answer:
      "MATLAB/Simulink, PSCAD, PLECS, Arduino/STM32, DSP/FPGA controllers, power electronics circuits, CAN bus communication, IoT platforms, and AI/ML libraries such as TensorFlow and PyTorch."
  },
  {
    question: "How are HEV projects aligned with IEEE standards?",
    answer:
      "Projects are aligned with IEEE Transactions (2023–2025) focusing on hybrid powertrain optimization, predictive energy management, adaptive control strategies, and regenerative braking integration."
  },
  {
    question: "What academic support is provided?",
    answer:
      "Complete academic support including IEEE topic selection, simulation and hardware validation, energy management algorithm design, IEEE-format documentation, and international publication assistance."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Hybrid Electric Vehicles (HEV) – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Hybrid Electric Vehicles Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering hybrid propulsion systems, energy management strategies, regenerative braking, AI-based optimization, and automotive powertrain research.";

const pageUrl = "/department/electric-vehicles/hev";

const EeeHevProjectDevelopmentCenter = () => {
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
    {/* Introduction */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> runs the HEV Project Development Center, aligned with IEEE 2023–2025 standards. Students design IEEE-standardized hybrid propulsion projects combining ICE with electric drives for fuel efficiency and reduced emissions.</p>
              <p>Research covers energy management, regenerative technology, motor-generator integration, control systems, and AI-powered optimization for Automotive 4.0 mobility.</p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of HEV Research</h2>
              <ul>
                <li>Improves fuel efficiency and reduces carbon emissions.</li>
                <li>Integrates electric drive with ICE efficiently.</li>
                <li>Enables regenerative braking and hybrid energy optimization.</li>
                <li>Applicable in passenger vehicles, buses, fleet vehicles.</li>
                <li>IEEE 2023–2025 scope: AI-driven hybrid management & predictive optimization.</li>
              </ul>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech HEV Projects</h2>
              <ul>
                <li>Basic HEV drive and control strategy simulations</li>
                <li>MATLAB/Simulink hybrid propulsion prototypes</li>
                <li>Microcontroller-based hybrid engine controller</li>
              </ul>
              <p>Focus: fundamental understanding of hybrid drives & lab-scale prototyping.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech HEV Projects</h2>
              <ul>
                <li>Energy management for hybrid powertrains</li>
                <li>Integration of regenerative braking with HEV control</li>
                <li>Optimization of HEV algorithms for real-time driving cycles</li>
              </ul>
              <p>Focus: advanced optimization, multi-source integration, IEEE-standardized algorithms.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D HEV Research</h2>
              <ul>
                <li>AI/ML algorithms for predictive hybrid energy management</li>
                <li>Multi-motor propulsion coordination</li>
                <li>HEV optimization with smart grids and V2X interfaces</li>
                <li>SCI/Scopus publications and patent-ready HEV innovations</li>
              </ul>
              <p>Focus: next-generation HEV research tackling predictive energy systems, autonomy, and efficiency standardization.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Conventional vs HEVs</h2>
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
                      <td>Conventional ICE</td>
                      <td>Passenger Vehicles</td>
                      <td>Affordable, widely available</td>
                    </tr>
                    <tr>
                      <td>Parallel Hybrid</td>
                      <td>Passenger Cars, Buses</td>
                      <td>Improved fuel efficiency, simple design</td>
                    </tr>
                    <tr>
                      <td>Series Hybrid</td>
                      <td>Commercial Vehicles</td>
                      <td>Electric-only mode, simplified ICE</td>
                    </tr>
                    <tr>
                      <td>Plug-in Hybrid (PHEV)</td>
                      <td>Passenger EVs & Fleets</td>
                      <td>Extended electric range with ICE backup</td>
                    </tr>
                    <tr>
                      <td>AI-Enhanced HEVs</td>
                      <td>Future Smart Cars</td>
                      <td>Optimized energy via predictive AI</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute continues to lead in EV & HEV systems research. Through the HEV Project Development Center, we provide total support: hybrid control simulation, hardware prototyping, smart grid integration, and IEEE-standard research dissemination.</p>
            </section>

            {/* ❓ FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((faq,i)=>(
                  <details key={i}>
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

export default EeeHevProjectDevelopmentCenter;
