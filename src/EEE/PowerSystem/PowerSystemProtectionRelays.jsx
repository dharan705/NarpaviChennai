import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Power System Protection and Relays Project Development Center in Chennai",
  "Power System Protection IEEE Projects 2023–2025",
  "Digital Relays Project Development",
  "Adaptive Protection Projects",
  "Relay Coordination IEEE Projects",
  "IEC 61850 Substation Automation Projects",
  "AI Based Relay Protection",
  "Smart Grid Protection Systems",
  "B.Tech Power System Protection Projects",
  "M.Tech Relay Protection Projects",
  "Ph.D Power System Protection Research",
  "Narpavi Research Institute Power Systems"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question: "What services does the Power System Protection & Relays Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Power System Protection & Relays Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in protection systems, relay coordination, and grid stability for substations, smart grids, and renewable energy systems."
  },
  {
    question: "What types of Power System Protection & Relays projects are supported?",
    answer:
      "We support B.Tech projects (overcurrent, differential relays), M.Tech projects (adaptive protection, IEC 61850 automation), and Ph.D. projects (AI-based relaying and cyber-physical security)."
  },
  {
    question: "Which technologies are used in Power System Protection & Relays project development?",
    answer:
      "MATLAB/Simulink, ETAP, PSCAD, FPGA/ARM controllers, TensorFlow, PyTorch, and IEC 61850 protocols."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects align with IEEE Transactions on Power Delivery and Smart Grid (2023–2025), covering adaptive protection, wide-area monitoring, and AI-driven relaying."
  },
  {
    question: "What support is provided for academic submissions?",
    answer:
      "End-to-end guidance including topic selection, algorithm design, simulation, HIL testing, documentation, and IEEE/Scopus/SCI publication support."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Power System Protection & Relays – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Power System Protection & Relays Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering digital relays, adaptive protection, IEC 61850, AI-based relaying, smart grids, and renewable integration.";

const pageUrl =
  "/department/power-systems/power-system-protection-relays";

const EEEPowerSystemProtectionRelaysProjectDevelopmentCenter = () => {
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
  <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Power System Protection & Relays Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to advance power system protection aligned with IEEE Transactions (2023–2025). Our projects focus on reliability, safety, and resilience in modern power systems, addressing renewable integration, smart grids, and distributed generation.
              </p>
              <p>
                By blending simulation tools, hardware prototypes, and AI-driven fault detection, we deliver innovative, industry-ready solutions for academic excellence and practical applications.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Power System Protection & Relays Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational protection and relay coordination projects, aligned with IEEE topics.
              </p>
              <ul>
                <li>Understanding protection principles: overcurrent, differential, distance, and directional relays</li>
                <li>Introduction to IEEE papers (2023–2025) on modern protection techniques</li>
                <li>Using MATLAB/Simulink, ETAP, and PSCAD for relay coordination studies</li>
                <li>Designing protection schemes for feeders, transformers, and generators</li>
                <li>Interfacing microcontroller-based relays for fault simulation</li>
                <li>Creating IEEE-style reports and technical documentation</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical protection system design, and academic-ready output.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Power System Protection & Relays Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced relay technologies and grid automation.
              </p>
              <ul>
                <li>Critical study of IEEE Transactions on Power Delivery and Smart Grid (2023–2025)</li>
                <li>Selecting industry-relevant issues like relay coordination in renewable-heavy grids</li>
                <li>Implementing adaptive, distance, and differential protection schemes</li>
                <li>Incorporating Wide Area Monitoring Systems (WAMS) and Phasor Measurement Units (PMUs)</li>
                <li>FPGA/ARM-based relay implementation and hardware-in-the-loop (HIL) testing</li>
                <li>Paper publication in IEEE/Springer indexed journals</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade protection solutions.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Power System Protection & Relays Project Development</h2>
              <p>
                For doctoral scholars, our center supports pioneering research in power system protection.
              </p>
              <ul>
                <li>Comprehensive study of IEEE Transactions (2023–2025) on adaptive and intelligent protection</li>
                <li>Development of novel protection algorithms using optimization, AI, and deep learning</li>
                <li>Multi-objective protection strategy modeling for interconnected grids</li>
                <li>Real-time implementation using advanced digital relays</li>
                <li>Large-scale testing on smart grid and microgrid platforms</li>
                <li>Publishing in IEEE/Elsevier/Springer journals and filing patents</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Power System Protection & Relays Technologies vs. Industry Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology Area</th>
                      <th>Industrial Applications</th>
                      <th>Current Industry Adoption (2023–2025)</th>
                      <th>Research Potential</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Digital Relays & Microprocessor-based Protection</td>
                      <td>Substations, Transmission Networks</td>
                      <td>Widely adopted</td>
                      <td>Enhancements in communication and AI-based decision-making</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, ETAP, PSCAD</td>
                    </tr>
                    <tr>
                      <td>Wide-Area Protection Systems (WAPS)</td>
                      <td>National Grids & Smart Grids</td>
                      <td>Growing rapidly</td>
                      <td>IEEE transactions emphasize system-wide stability monitoring</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>PMU data tools, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Adaptive Protection Schemes</td>
                      <td>Renewable Integration, Microgrids</td>
                      <td>Emerging</td>
                      <td>Strong potential for adaptive algorithms and ML integration</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Python, TensorFlow, ROS</td>
                    </tr>
                    <tr>
                      <td>IEC 61850 Based Substation Automation</td>
                      <td>Power Utilities & Smart Cities</td>
                      <td>Increasing</td>
                      <td>Need for standardization and global interoperability</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>IEC 61850 tools, MATLAB</td>
                    </tr>
                    <tr>
                      <td>AI & Machine Learning in Relaying</td>
                      <td>Industrial Plants, Smart Grids</td>
                      <td>Early adoption</td>
                      <td>High research potential for intelligent, self-learning relays</td>
                      <td>Ph.D.</td>
                      <td>TensorFlow, PyTorch, Python</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in EEE project development services. With expertise in Power System Protection & Relays, we support B.Tech, M.Tech, and Ph.D. students in creating impactful IEEE-standard projects.
              </p>
              <p>
                Our institute bridges the gap between academic research and industrial applications by offering professional mentorship, advanced lab facilities, simulation support, and publication assistance.
              </p>
            </section>

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
              <li><a href="/department/power-systems">Power Systems</a></li>
              <li><a href="/department/power-systems/distributed-generation-integration">Distributed Generation Integration</a></li>
              <li><a href="/department/power-systems/facts-power-systems">FACTS Power Systems</a></li>
              <li><a href="/department/power-systems/load-flow-analysis">Load Flow Analysis</a></li>
              <li><a href="/department/power-systems/power-system-protection-relays">Power System Protection & Relays</a></li>
              <li><a href="/department/power-systems/power-system-stability-control">Power System Stability & Control</a></li>
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

export default EEEPowerSystemProtectionRelaysProjectDevelopmentCenter;
