import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Hybrid Renewable Energy Systems Project Development Center in Chennai",
  "IEEE Hybrid Renewable Energy Projects 2023–2025",
  "Solar Wind Biomass Hybrid Projects",
  "Hybrid Renewable Energy Systems Chennai",
  "AI Based Hybrid Energy Management",
  "Grid Integrated Hybrid Renewable Systems",
  "Hybrid Renewable Microgrid Projects",
  "B.Tech Hybrid Renewable Energy Projects",
  "M.Tech Hybrid Energy Management Systems",
  "Ph.D Hybrid Renewable Energy Research",
  "Narpavi Research Institute Renewable Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question: "What services does the Hybrid Renewable Energy Systems Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Hybrid Renewable Energy Systems Project Development Center supports B.Tech, M.Tech, and Ph.D. students in designing, modeling, and implementing IEEE-aligned (2023–2025) projects on solar-wind-biomass hybrid systems, energy storage integration, grid connectivity, and intelligent energy management."
  },
  {
    question: "What types of Hybrid Renewable projects are supported?",
    answer:
      "We support B.Tech, M.Tech, and Ph.D. projects covering hybrid PV-wind systems, AI-based energy management, hybrid storage integration, and grid-connected hybrid renewable systems."
  },
  {
    question: "Which technologies are used in Hybrid Renewable project development?",
    answer:
      "MATLAB/Simulink, HOMER Pro, PSIM, TensorFlow, PyTorch, MQTT-based IoT platforms, FPGA/DSP controllers, and HIL testing environments."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are based on IEEE Transactions (2023–2025) focusing on hybrid system optimization, adaptive storage integration, intelligent control, and grid stability."
  },
  {
    question: "What academic support is provided?",
    answer:
      "Complete guidance including IEEE topic selection, simulations, hardware prototyping, documentation, and IEEE/Scopus/SCI journal publications."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Hybrid Renewable Energy Systems – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Hybrid Renewable Energy Systems Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering solar-wind-biomass hybrids, energy storage integration, AI-based energy management, IoT monitoring, and grid-connected hybrid systems.";

const pageUrl =
  "/department/renewable-energy-systems/hybrid-renewable-systems";

const EEEHybridRenewableEnergySystemsProjectDevelopmentCenter = () => {
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
                <strong>Narpavi Research Institute</strong> presents the Hybrid Renewable Energy Systems (HRES) Project Development Center, 
                a global platform empowering B.Tech, M.Tech, and Ph.D. scholars to advance IEEE-aligned high-performance hybrid systems, 
                integrating solar, wind, biomass, and energy storage solutions (2023–2025).
              </p>
              <p>
                Projects emphasize both simulation and hardware integration—covering AI-assisted management, IoT-enabled monitoring, predictive optimization, 
                and scalable systems for industrial, commercial, and utility-scale applications.
              </p>
            </section>

            {/* B.Tech Section */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Hybrid Renewable Project Development</h2>
              <p>For undergraduate students, the focus is on fundamentals and lab-scale hybrid implementations:</p>
              <ul>
                <li>Basic understanding of hybrid renewable integration and energy storage</li>
                <li>Study of IEEE publications (2023–2025) on hybrid systems</li>
                <li>Simulation using MATLAB/Simulink, PSIM, HOMER Pro</li>
                <li>Performance analysis for energy efficiency, load-sharing, and quality</li>
                <li>Microcontroller/FPGA-based hardware prototypes</li>
                <li>IoT-enabled monitoring for real-time optimization</li>
                <li>IEEE-style project reports and documentation</li>
              </ul>
              <p>The emphasis is on conceptual clarity, simulation practice, and practical demos.</p>
            </section>

            {/* M.Tech Section */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Hybrid Renewable Project Development</h2>
              <p>For postgraduates, projects involve advanced simulations, optimization, and hybrid energy management.</p>
              <ul>
                <li>Detailed study of IEEE Transactions (2023–2025) on hybrid integration and storage</li>
                <li>AI/ML-assisted real-time energy management and balancing</li>
                <li>Simulation of hybrid energy efficiency and stability improvements</li>
                <li>FPGA/DSP hardware prototypes with IoT-enabled monitoring</li>
                <li>Testing for microgrids and industrial hybrid networks</li>
                <li>Development of utility-compliant hybrid prototypes</li>
                <li>IEEE-style research publication support</li>
              </ul>
              <p>The emphasis is on optimization for efficiency, reliability, and industrial feasibility.</p>
            </section>

            {/* Ph.D Section */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Hybrid Renewable Project Development</h2>
              <p>For doctoral-level researchers, the focus is on innovative, large-scale and grid-oriented integrations.</p>
              <ul>
                <li>Comprehensive IEEE literature review (2023–2025) on hybrid optimization</li>
                <li>Advanced AI/ML and deep-learning algorithms for predictive optimization</li>
                <li>Development of grid-compliant integrated solar-wind-biomass-storage systems</li>
                <li>Experimental lab-scale HIL hybrid prototypes</li>
                <li>IoT-based real-time performance tracking, predictive maintenance</li>
                <li>Global-level publications, IEEE journals, and patents</li>
              </ul>
              <p>The emphasis is on groundbreaking methods, patents, and contributions to IEEE/industry standards.</p>
            </section>

            {/* Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Hybrid Renewable Technologies vs. Industry Applications</h2>
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
                      <td>Solar-Wind Hybrid Systems</td>
                      <td>Microgrids, remote areas</td>
                      <td>Energy optimization, load balancing</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, HOMER Pro</td>
                    </tr>
                    <tr>
                      <td>PV-Wind-Biomass Integrated Systems</td>
                      <td>Industrial, commercial, utility-scale</td>
                      <td>Storage integration, AI-assisted energy management</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, PSIM</td>
                    </tr>
                    <tr>
                      <td>Hybrid Energy Storage Systems</td>
                      <td>Renewable power plants, microgrids</td>
                      <td>Battery, supercapacitor, fuel cell coordination</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink</td>
                    </tr>
                    <tr>
                      <td>AI/ML-Assisted Energy Management</td>
                      <td>Smart grids, industrial automation</td>
                      <td>Real-time adaptive optimization</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch, Python</td>
                    </tr>
                    <tr>
                      <td>IoT-Based Monitoring & Diagnostics</td>
                      <td>Remote renewable installations</td>
                      <td>Real-time tracking, predictive maintenance</td>
                      <td>B.Tech/Ph.D.</td>
                      <td>MQTT, IoT platforms, Python</td>
                    </tr>
                    <tr>
                      <td>Grid-Integrated Hybrid Systems</td>
                      <td>Utility-scale integration</td>
                      <td>IEEE compliance, stability under load</td>
                      <td>Ph.D.</td>
                      <td>MATLAB/Simulink, HOMER Pro</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global hub for Electrical and Electronics Engineering project development. 
                Through the Hybrid Renewable Energy Systems Project Development Center, we provide comprehensive worldwide 
                support to scholars for IEEE topics, algorithm design, prototyping, and publication.
              </p>
              <p>
                Our focus is on practical, simulation-backed, and industry-relevant renewable system development—ensuring 
                academic preparation and international recognition.
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

export default EEEHybridRenewableEnergySystemsProjectDevelopmentCenter;
