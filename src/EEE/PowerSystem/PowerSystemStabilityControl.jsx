import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Power System Stability and Control Project Development Center in Chennai",
  "Power System Stability IEEE Projects 2023–2025",
  "Transient Stability Analysis Projects",
  "Small Signal Stability Projects",
  "FACTS Assisted Stability Control",
  "Smart Grid Stability Research",
  "AI Based Power System Control",
  "Wide Area Monitoring Systems Projects",
  "B.Tech Power System Stability Projects",
  "M.Tech Stability Control Projects",
  "Ph.D Power System Dynamics Research",
  "Narpavi Research Institute Power Systems"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question: "What services does the Power System Stability & Control Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Power System Stability & Control Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in power system dynamics, stability analysis, and advanced control strategies."
  },
  {
    question: "What types of Power System Stability & Control projects are supported?",
    answer:
      "We support B.Tech projects (transient and small-signal stability), M.Tech projects (FACTS-assisted and adaptive control), and Ph.D. projects (AI-based stability and wide-area monitoring)."
  },
  {
    question: "Which technologies are used in Power System Stability & Control project development?",
    answer:
      "MATLAB/Simulink, PSCAD, DIgSILENT PowerFactory, TensorFlow, PyTorch, PMU tools, and hardware-in-the-loop platforms."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects follow IEEE Transactions on Power Systems and Smart Grid (2023–2025), focusing on transient stability, FACTS integration, and AI-driven control."
  },
  {
    question: "What support is provided for academic submissions?",
    answer:
      "End-to-end support including topic selection, simulation, HIL testing, documentation, and IEEE/Scopus/SCI publication guidance."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Power System Stability & Control – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Power System Stability & Control Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering transient stability, small-signal analysis, FACTS-assisted control, AI-based stability, and smart grid dynamics.";

const pageUrl =
  "/department/power-systems/power-system-stability-control";

const EEEPowerSystemStabilityControlProjectDevelopmentCenter = () => {
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
     <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Power System Stability & Control Project Development Center, a premier facility empowering B.Tech, M.Tech, and Ph.D. scholars to advance power system dynamics aligned with IEEE Transactions (2023–2025). Our projects focus on transient, small-signal, and voltage stability, addressing challenges in renewable integration, microgrids, and smart grids.
              </p>
              <p>
                By integrating advanced control strategies, AI-enhanced algorithms, and hardware-in-the-loop testing, we deliver innovative, industry-ready solutions for academic excellence and practical applications.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Power System Stability & Control Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational stability and control projects, aligned with IEEE topics.
              </p>
              <ul>
                <li>Understanding rotor angle, frequency, and voltage stability</li>
                <li>Introduction to IEEE research on dynamic power systems (2023–2025)</li>
                <li>MATLAB/Simulink and PSCAD-based transient and small-signal stability simulations</li>
                <li>Load and generation variation studies to observe system response</li>
                <li>Design of AVR and governor models for small-scale synchronous machines</li>
                <li>Generation of IEEE-style technical reports</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical stability analysis, and academic-ready output.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Power System Stability & Control Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced stability analysis and control techniques.
              </p>
              <ul>
                <li>Detailed study of IEEE Transactions (2023–2025) in power system stability</li>
                <li>Developing models for multi-machine systems and microgrids</li>
                <li>Implementation of FACTS devices (STATCOM, SSSC, UPFC) for stability enhancement</li>
                <li>Design of PID, adaptive, and model predictive controllers</li>
                <li>Hardware-in-the-loop (HIL) testing of controllers</li>
                <li>Conference and journal submissions to validate research outcomes</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade stability solutions.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Power System Stability & Control Project Development</h2>
              <p>
                For doctoral scholars, our center supports pioneering research in power system dynamics.
              </p>
              <ul>
                <li>Critical review of IEEE Transactions on Power Systems and Smart Grid (2023–2025)</li>
                <li>Development of AI-based, hybrid, and predictive control models</li>
                <li>Multi-objective optimization of voltage, frequency, and oscillation damping</li>
                <li>Real-time implementation using advanced digital controllers</li>
                <li>Integration of PMU-based wide-area monitoring for large-scale grids</li>
                <li>IEEE journal publications and proposal of new standards</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Power System Stability & Control Technologies vs. Industry Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Research Focus</th>
                      <th>Industry Application</th>
                      <th>Research and Development Focus (2023–2025)</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Transient Stability Analysis</td>
                      <td>Power plants & transmission networks</td>
                      <td>AI-assisted predictive modeling</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, PSCAD</td>
                    </tr>
                    <tr>
                      <td>Small-Signal Stability</td>
                      <td>Large interconnected grids</td>
                      <td>Oscillation damping via robust controllers</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>DIgSILENT PowerFactory, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Voltage & Frequency Regulation</td>
                      <td>Renewable-integrated microgrids</td>
                      <td>Adaptive and model predictive control</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, PSCAD</td>
                    </tr>
                    <tr>
                      <td>FACTS-Assisted Control</td>
                      <td>HVDC & AC transmission systems</td>
                      <td>Integration of STATCOM, SSSC, UPFC</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>PSCAD, MATLAB/Simulink</td>
                    </tr>
                    <tr>
                      <td>Wide-Area Monitoring & Control Systems</td>
                      <td>Smart grid automation & national grid resilience</td>
                      <td>PMU-based monitoring and AI optimization</td>
                      <td>Ph.D.</td>
                      <td>PMU data tools, Python, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Renewable Energy Dynamic Modeling</td>
                      <td>Solar, wind, and hybrid power plants</td>
                      <td>Grid-tied stability enhancement</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>DIgSILENT PowerFactory, HOMER</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a globally recognized hub for Electrical and Electronics Engineering project development. Through the Power System Stability & Control Project Development Center, we support B.Tech, M.Tech, and Ph.D. scholars in executing IEEE-standard projects (2023–2025) with full access to laboratory infrastructure, simulation tools, prototype development, and publication guidance.
              </p>
              <p>
                By bridging academic research and industrial application, Narpavi Research Institute ensures students gain technical excellence and global recognition for their work.
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

export default EEEPowerSystemStabilityControlProjectDevelopmentCenter;
