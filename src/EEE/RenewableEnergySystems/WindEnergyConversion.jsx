import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Wind Energy Conversion Systems Project Development Center in Chennai",
  "IEEE Wind Energy Projects 2023–2025",
  "B.Tech Wind Turbine Projects",
  "M.Tech AI Based Wind Control Projects",
  "Ph.D Wind Energy Research Chennai",
  "Hybrid Wind Solar Energy Systems",
  "IoT Based Wind Monitoring Systems",
  "Smart Grid Wind Integration Projects",
  "Adaptive MPPT Wind Systems",
  "Narpavi Research Institute Wind Energy"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question: "What services does the Wind Energy Conversion Systems Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Wind Energy Conversion Systems Project Development Center supports B.Tech, M.Tech, and Ph.D. students in designing, modeling, and implementing IEEE-aligned (2023–2025) projects on wind turbine systems, energy conversion techniques, intelligent control, and grid integration strategies."
  },
  {
    question: "What types of Wind Energy projects are supported?",
    answer:
      "We support B.Tech, M.Tech, and Ph.D. projects covering wind turbine design, AI-based control, hybrid wind–solar systems, and grid integration."
  },
  {
    question: "Which technologies are used in Wind Energy project development?",
    answer:
      "MATLAB/Simulink, PSIM, ANSYS, TensorFlow, PyTorch, MQTT-based IoT platforms, FPGA/DSP controllers, and HIL testbeds."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are based on IEEE Transactions (2023–2025) focusing on turbine optimization, generator dynamics, smart converters, and AI-assisted control."
  },
  {
    question: "What academic support is provided?",
    answer:
      "Complete guidance including topic selection, simulation, hardware prototyping, documentation, and IEEE/Scopus/SCI journal publications."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Wind Energy Conversion Systems – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Wind Energy Conversion Systems Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering wind turbine design, AI-based control, IoT monitoring, hybrid wind–solar systems, and smart grid integration.";

const pageUrl =
  "/department/renewable-energy-systems/wind-energy-conversion";

const EEEWindEnergyConversionSystemsProjectDevelopmentCenter = () => {
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
              <p><strong>Narpavi Research Institute</strong> presents the Wind Energy Conversion Systems (WECS) Project Development Center, a global platform empowering B.Tech, M.Tech, and Ph.D. scholars to advance high-efficiency wind turbines, grid integration technologies, and hybrid renewable systems aligned with IEEE research (2023–2025).</p>
              <p>Our projects emphasize practical learning by combining simulation tools, hardware prototyping, IoT-enabled monitoring, AI-assisted control, and predictive maintenance for real-world renewable energy applications.</p>
            </section>

            {/* B.Tech Section */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Wind Energy Project Development</h2>
              <p>For undergraduate students, the cycle focuses on foundational knowledge and basic implementation.</p>
              <ul>
                <li>Understanding wind turbine design, generator types, and converters</li>
                <li>Study of IEEE publications (2023–2025) on WECS</li>
                <li>Simulation using MATLAB/Simulink, PSIM, and ANSYS</li>
                <li>Performance analysis (efficiency, torque, energy output)</li>
                <li>FPGA/Microcontroller prototypes for small-scale turbines</li>
                <li>IoT-based monitoring and data acquisition</li>
                <li>IEEE-style reports and project documentation</li>
              </ul>
              <p>The emphasis is on foundational design, real-time monitoring, and academic outputs.</p>
            </section>

            {/* M.Tech Section */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Wind Energy Project Development</h2>
              <p>For postgraduates, projects involve advanced modeling, AI-assisted control, and hybridization.</p>
              <ul>
                <li>Literature review of IEEE Transactions (2023–2025) on WECS</li>
                <li>AI/ML-assisted turbine control and predictive maintenance</li>
                <li>Adaptive MPPT and hybrid energy management</li>
                <li>Multi-objective torque control, efficiency optimization</li>
                <li>FPGA/DSP based real-time prototyping with IoT monitoring</li>
                <li>Utility-scale and microgrid testing scenarios</li>
                <li>IEEE-compliant papers and implementation validation</li>
              </ul>
              <p>The focus is on optimization and advanced research-driven solutions.</p>
            </section>

            {/* Ph.D Section */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Wind Energy Project Development</h2>
              <p>For doctoral researchers, the objective is groundbreaking contributions to hybrid renewable energy.</p>
              <ul>
                <li>Comprehensive IEEE review (2023–2025) on turbine design, hybrid integration</li>
                <li>AI/ML/Deep learning adaptive energy management</li>
                <li>Hybrid wind-solar system development with predictive optimization</li>
                <li>HIL validation and lab-scale turbine prototyping</li>
                <li>IoT-enabled predictive analytics and real-time efficiency monitoring</li>
                <li>Patents, IEEE journal papers, and contribution to standards</li>
              </ul>
              <p>The emphasis is on innovation, patents, and international recognition.</p>
            </section>

            {/* Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Wind Energy Technologies vs. Industry Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Research Focus</th>
                      <th>Industry Application</th>
                      <th>Research & Development Focus (2023–2025)</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Horizontal Axis Wind Turbines (HAWT)</td>
                      <td>Utility-scale wind farms, industrial power</td>
                      <td>Blade design optimization, efficiency improvement</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, ANSYS</td>
                    </tr>
                    <tr>
                      <td>Vertical Axis Wind Turbines (VAWT)</td>
                      <td>Urban/small-scale applications</td>
                      <td>Compact design, low-noise adaptive control</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, PSIM</td>
                    </tr>
                    <tr>
                      <td>Wind Turbine Generator Systems</td>
                      <td>Grid-tied WECS plants</td>
                      <td>Permanent magnet, synchronous & induction machine optimization</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink</td>
                    </tr>
                    <tr>
                      <td>AI/ML-Assisted Wind Control</td>
                      <td>Smart grids, automation</td>
                      <td>Load adaptation, predictive maintenance</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch, Python</td>
                    </tr>
                    <tr>
                      <td>IoT-Based Monitoring & Diagnostics</td>
                      <td>Onshore/offshore wind farms</td>
                      <td>Real-time tracking, predictive fault detection</td>
                      <td>B.Tech/Ph.D.</td>
                      <td>MQTT, Python IoT Platforms</td>
                    </tr>
                    <tr>
                      <td>Hybrid Wind-Solar Systems</td>
                      <td>Microgrids, remote areas</td>
                      <td>Integrated storage, hybrid load balancing</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, PVSyst</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute is a globally recognized hub for Electrical and Electronics Engineering project development. Through the Wind Energy Conversion Systems Project Development Center, we provide comprehensive support to scholars worldwide.</p>
              <p>Our expertise spans IEEE topic selection, algorithm development, hardware prototyping, and publication guidance, ensuring students gain hands-on experience and global recognition.</p>
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

          {/* ➡ RIGHT SIDEBAR */}
          <aside className="right-sidebar1">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/department/renewable-energy-systems">Renewable Energy Systems – Project Development Center</a></li>
              <li><a href="/department/renewable-energy-systems/solar-photovoltaic">Solar Photovoltaic Systems</a></li>
              <li><a href="/department/renewable-energy-systems/wind-energy-conversion">Wind Energy Conversion Systems</a></li>
              <li><a href="/department/renewable-energy-systems/biomass-fuel-cell">Biomass Fuel Cell Technologies</a></li>
              <li><a href="/department/renewable-energy-systems/energy-storage-integration">Energy Storage & Renewable Integration</a></li>
              <li><a href="/department/renewable-energy-systems/hybrid-renewable-systems">Hybrid Renewable Energy Systems</a></li>
              <li><a href="/department/renewable-energy-systems/grid-integration-renewables">Grid Integration of Renewables</a></li>
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

export default EEEWindEnergyConversionSystemsProjectDevelopmentCenter;
