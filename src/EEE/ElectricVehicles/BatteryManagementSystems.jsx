import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Battery Management Systems Project Development Center in Chennai",
  "Battery Management Systems BMS IEEE Projects 2023–2025",
  "EV Battery Management System Projects",
  "SoC SoH Estimation IEEE Projects",
  "IoT Enabled Battery Monitoring Systems",
  "AI Based Battery Management Systems",
  "B.Tech BMS Projects",
  "M.Tech Smart BMS Research",
  "Ph.D Predictive BMS Algorithms",
  "Narpavi Research Institute BMS Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Battery Management Systems (BMS) Project Development Center offer?",
    answer:
      "We provide B.Tech, M.Tech, and Ph.D. students IEEE-aligned (2023–2025) support in BMS hardware design, monitoring circuits, SoC/SoH estimation, IoT-enabled analytics, AI-based predictive diagnostics, and IEEE/Scopus/SCI paper publication."
  },
  {
    question: "What types of BMS projects are supported?",
    answer:
      "B.Tech projects include basic voltage and temperature monitoring, cell balancing, and battery protection circuits. M.Tech projects focus on IoT-enabled predictive diagnostics, AI-based SoC/SoH estimation, and smart BMS dashboards. Ph.D. projects involve predictive health algorithms, EV fleet optimization, patents, and IEEE publications."
  },
  {
    question: "Which tools and technologies are used?",
    answer:
      "MATLAB/Simulink, LabVIEW, Arduino/STM32 microcontrollers, IoT cloud platforms (AWS, Azure IoT, ThingSpeak), CAN bus, thermal sensors, TensorFlow, and PyTorch."
  },
  {
    question: "How are BMS projects aligned with IEEE standards?",
    answer:
      "Projects align with IEEE Transactions (2023–2025) on BMS algorithms, predictive diagnostics, EV energy optimization, smart charging integration, and AI-driven fault prediction."
  },
  {
    question: "What academic support is provided?",
    answer:
      "End-to-end guidance including IEEE topic selection, hardware and firmware development, IoT/AI integration, documentation, and global publication assistance."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Battery Management Systems – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Battery Management Systems Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering SoC/SoH estimation, IoT-enabled battery monitoring, AI-based predictive diagnostics, EV battery safety, and smart energy optimization.";

const pageUrl =
  "/department/electric-vehicles/bms";

const EEEBmsProjectDevelopmentCenter = () => {
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
              <p><strong>Narpavi Research Institute</strong> provides IEEE 2023–2025 aligned support in Battery Management Systems (BMS), enabling students to build advanced EV battery technologies, from SoC/SoH estimation to IoT-enabled predictive monitoring and AI-driven optimization.</p>
              <p>BMS lies at the heart of EV safety and performance, ensuring range optimization, thermal safety, and integration with EV drives and chargers.</p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of BMS Projects</h2>
              <ul>
                <li>Ensures battery safety, performance, and life extension.</li>
                <li>Prevents overcharge, over-discharge, and thermal runaway risks.</li>
                <li>Optimizes EV range and energy efficiency.</li>
                <li>Integrates with motor drives, braking, and charging systems.</li>
                <li>IEEE topics (2023–2025): predictive AI/ML diagnostics and smart BMS architectures.</li>
              </ul>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech BMS Projects</h2>
              <ul>
                <li>Voltage and temperature monitoring circuits</li>
                <li>Basic cell balancing prototypes with microcontrollers</li>
                <li>Battery protection hardware implementations</li>
              </ul>
              <p>Focus: fundamental BMS design and embedded prototyping.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech BMS Projects</h2>
              <ul>
                <li>AI/ML-based SoC/SoH prediction models</li>
                <li>IoT dashboards for real-time battery monitoring</li>
                <li>IEEE-topic aligned predictive diagnostics</li>
              </ul>
              <p>Focus: advanced algorithms and Smart BMS solutions integrated with IoT analytics.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D BMS Projects</h2>
              <ul>
                <li>Deep-learning predictive algorithms for EV batteries</li>
                <li>Smart BMS with digital twin integration</li>
                <li>Cross-integration with EV fleet monitoring systems</li>
                <li>Patents & IEEE/SCI-indexed publications</li>
              </ul>
              <p>Focus: cutting-edge AI-integrated predictive BMS designs for electric mobility and grid integration.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – BMS Technologies & Applications</h2>
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
                      <td>Passive BMS</td>
                      <td>Two-wheelers, small EVs</td>
                      <td>Cost-effective, simple monitoring</td>
                    </tr>
                    <tr>
                      <td>Active BMS</td>
                      <td>Cars, Buses</td>
                      <td>Improved balancing, longer battery life</td>
                    </tr>
                    <tr>
                      <td>IoT-Enabled BMS</td>
                      <td>Smart Fleets</td>
                      <td>Remote monitoring, predictive analytics</td>
                    </tr>
                    <tr>
                      <td>AI-Based BMS</td>
                      <td>EVs, Energy Storage</td>
                      <td>Predictive SoC/SoH, efficiency optimization</td>
                    </tr>
                    <tr>
                      <td>Thermal-Integrated BMS</td>
                      <td>High-performance EVs</td>
                      <td>Thermal safety, optimized energy output</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                At Narpavi Research Institute, we provide full guidance in Battery Management Systems (BMS). 
                Our support spans hardware design, embedded algorithm development, IoT analytics, and publication preparation for Scopus/SCI-indexed journals.
              </p>
            </section>

            {/* ❓FAQ Section */}
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

export default EEEBmsProjectDevelopmentCenter;
