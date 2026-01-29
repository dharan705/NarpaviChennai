import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "FACTS Devices in Power Systems Project Development Center in Chennai",
  "FACTS Devices IEEE Projects 2023–2025",
  "STATCOM Project Development",
  "SSSC Power System Projects",
  "UPFC Power Flow Control Research",
  "DVR Voltage Restoration Projects",
  "B.Tech FACTS Device Projects",
  "M.Tech Power System FACTS Control",
  "Ph.D FACTS Optimization Research",
  "Narpavi Research Institute Power Systems"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question: "What services does the FACTS Devices in Power Systems Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s FACTS Devices in Power Systems Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in FACTS technologies like STATCOM, SSSC, UPFC, and DVR for enhancing power system reliability, stability, and control."
  },
  {
    question: "What types of FACTS Devices in Power Systems projects are supported?",
    answer:
      "We support B.Tech projects (STATCOM/DVR modeling, IoT monitoring), M.Tech projects (multi-device coordination, adaptive control), and Ph.D. projects (AI-optimized FACTS and wide-area integration)."
  },
  {
    question: "Which technologies are used in FACTS Devices in Power Systems project development?",
    answer:
      "MATLAB/Simulink, PSCAD, DIgSILENT PowerFactory, TensorFlow, PyTorch, IoT platforms, and hardware-in-the-loop (HIL) testbeds."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects align with IEEE Transactions (2023–2025) covering FACTS-based voltage control, power flow optimization, and AI-driven stability enhancement."
  },
  {
    question: "What support is provided for academic submissions?",
    answer:
      "End-to-end guidance including topic selection, algorithm design, simulation, hardware prototyping, documentation, and IEEE/Scopus/SCI publication support."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "FACTS Devices in Power Systems – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) FACTS Devices in Power Systems Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering STATCOM, SSSC, UPFC, DVR, AI-based control, smart grids, and power system stability.";

const pageUrl =
  "/department/power-systems/facts-power-systems";

const EEEFACTSPowerSystemsProjectDevelopmentCenter = () => {
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
                <strong>Narpavi Research Institute</strong> presents the FACTS Devices in Power Systems Project Development Center, a global platform empowering B.Tech, M.Tech, and Ph.D. scholars to advance Flexible AC Transmission Systems (FACTS) aligned with IEEE Transactions (2023–2025). Our projects focus on devices like STATCOM, SSSC, UPFC, and DVR to enhance power system reliability, controllability, and stability.
              </p>
              <p>
                By combining simulation studies, hardware prototypes, IoT-enabled monitoring, and AI-assisted control, we deliver innovative, industry-ready solutions for academic excellence and practical applications.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech FACTS Devices in Power Systems Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational FACTS device projects, aligned with IEEE topics.
              </p>
              <ul>
                <li>Understanding principles of STATCOM, SSSC, UPFC, and DVR</li>
                <li>Study of IEEE publications (2023–2025) on modern FACTS implementations</li>
                <li>MATLAB/Simulink and PSCAD-based modeling of FACTS devices</li>
                <li>Load flow improvement and voltage stability analysis</li>
                <li>Microcontroller-based prototypes for STATCOM or DVR modules</li>
                <li>Generation of IEEE-style project reports</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical FACTS applications, and academic-ready output.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech FACTS Devices in Power Systems Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced FACTS modeling and control techniques.
              </p>
              <ul>
                <li>In-depth study of IEEE Transactions (2023–2025) on FACTS applications</li>
                <li>Implementation of STATCOM, SSSC, UPFC, and DVR in multi-machine systems</li>
                <li>Integration with HVDC links and renewable energy sources</li>
                <li>Development of AI/ML-based adaptive controllers</li>
                <li>Real-time simulation using HIL setups and laboratory-scale prototypes</li>
                <li>IEEE-style report writing and journal/conference publication</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade FACTS solutions.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. FACTS Devices in Power Systems Project Development</h2>
              <p>
                For doctoral scholars, our center supports pioneering research in FACTS technologies.
              </p>
              <ul>
                <li>Comprehensive review of IEEE Transactions (2023–2025) on FACTS technology</li>
                <li>AI-ML-based hybrid optimization of FACTS devices</li>
                <li>Multi-device coordination algorithms for voltage stability and power flow control</li>
                <li>HIL and laboratory-scale implementation of STATCOM, UPFC, and DVR</li>
                <li>IoT-enabled real-time monitoring for predictive maintenance</li>
                <li>Publication in IEEE journals and filing patents</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – FACTS Devices Technologies vs. Industry Applications</h2>
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
                      <td>STATCOM (Static Synchronous Compensator)</td>
                      <td>Voltage control in transmission and distribution</td>
                      <td>AI-based control for rapid reactive power support</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, PSCAD</td>
                    </tr>
                    <tr>
                      <td>SSSC (Static Synchronous Series Compensator)</td>
                      <td>Power flow control in transmission lines</td>
                      <td>Adaptive control algorithms for congestion management</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>DIgSILENT PowerFactory, MATLAB</td>
                    </tr>
                    <tr>
                      <td>UPFC (Unified Power Flow Controller)</td>
                      <td>Coordinated voltage and power flow control</td>
                      <td>Hybrid AI-optimization strategies for dynamic response</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>PSCAD, MATLAB/Simulink</td>
                    </tr>
                    <tr>
                      <td>DVR (Dynamic Voltage Restorer)</td>
                      <td>Mitigation of voltage sags in industrial feeders</td>
                      <td>Predictive models for fault and load variations</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, PSCAD</td>
                    </tr>
                    <tr>
                      <td>Wide-Area FACTS Integration</td>
                      <td>National grids and smart grids</td>
                      <td>Multi-device coordination for large-scale stability</td>
                      <td>Ph.D.</td>
                      <td>PMU data tools, Python, MATLAB</td>
                    </tr>
                    <tr>
                      <td>AI/ML-enhanced FACTS Control</td>
                      <td>Renewable-integrated microgrids and industrial plants</td>
                      <td>Predictive maintenance and dynamic optimization</td>
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
                Narpavi Research Institute is a globally recognized hub for Electrical and Electronics Engineering project development. Through the FACTS Devices in Power Systems Project Development Center, we provide comprehensive support to B.Tech, M.Tech, and Ph.D. students worldwide.
              </p>
              <p>
                From conceptual design and simulation to hardware implementation and IEEE publication, Narpavi Research Institute ensures that scholars gain hands-on experience, analytical skills, and international recognition in FACTS research.
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

export default EEEFACTSPowerSystemsProjectDevelopmentCenter;
