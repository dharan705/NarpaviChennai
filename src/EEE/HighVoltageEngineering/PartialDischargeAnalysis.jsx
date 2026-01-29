import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Partial Discharge Analysis Project Development Center in Chennai",
  "Partial Discharge IEEE Projects 2023–2025",
  "PD Detection Projects",
  "High Voltage Insulation Diagnostics",
  "B.Tech Partial Discharge Projects",
  "M.Tech AI-Based PD Analysis",
  "Ph.D IoT PD Monitoring",
  "Predictive Maintenance PD Systems",
  "Transformer PD Analysis",
  "GIS Partial Discharge Monitoring",
  "Narpavi Research Institute PD Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Partial Discharge Analysis Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Partial Discharge Analysis Project Development Center supports B.Tech, M.Tech, and Ph.D. students in IEEE-aligned (2023–2025) projects on PD detection, insulation diagnostics, predictive maintenance, and condition monitoring of high-voltage systems."
  },
  {
    question: "What types of PD projects are supported?",
    answer:
      "We support B.Tech projects, M.Tech projects, and Ph.D. projects covering PD detection, AI-based diagnostics, IoT monitoring, and predictive maintenance."
  },
  {
    question: "Which tools are used in PD research?",
    answer:
      "MATLAB/Simulink, COMSOL Multiphysics, PSCAD, LabVIEW, MQTT-based IoT platforms, TensorFlow, and PyTorch."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects follow IEEE Transactions (2023–2025) on partial discharge detection, insulation degradation monitoring, and predictive diagnostics."
  },
  {
    question: "What academic support is provided?",
    answer:
      "We guide students in IEEE topic selection, PD algorithm development, insulation testing, report writing, and IEEE/Scopus/SCI publications."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Partial Discharge Analysis – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Partial Discharge Analysis Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering PD detection, insulation diagnostics, AI-based predictive maintenance, and IoT monitoring of high-voltage systems.";

const pageUrl =
  "/department/high-voltage-engineering/partial-discharge-analysis";

const EEEPartialDischargeAnalysisProjectDevelopmentCenter = () => {
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
              <p><strong>Narpavi Research Institute</strong> presents the Partial Discharge Analysis Project Development Center, focused on IEEE-aligned (2023–2025) project areas including PD detection, insulation diagnostics, predictive maintenance, and condition monitoring for high-voltage systems.</p>
              <p>Students gain expertise in PD testing setups, AI-assisted insulation diagnostics, IoT-enabled monitoring, and predictive maintenance of transformers, GIS, and high-voltage transmission networks.</p>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Partial Discharge Projects</h2>
              <ul>
                <li>Understanding PD basics, insulation degradation, and HV testing</li>
                <li>IEEE papers (2023–2025) on PD detection techniques</li>
                <li>Simulation using MATLAB/Simulink, PSCAD, COMSOL</li>
                <li>Lab experiments with PD sensors (ultrasonic, HF, EM)</li>
                <li>Testing transformers, switchgear & GIS models</li>
                <li>IEEE-style reports</li>
              </ul>
              <p>Focus: foundational PD detection concepts and lab-based training.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Partial Discharge Projects</h2>
              <ul>
                <li>IEEE Transactions review (2023–2025) of advanced PD diagnostics</li>
                <li>Signal processing & AI/ML algorithms for PD analysis</li>
                <li>Simulation of PD patterns with predictive maintenance objectives</li>
                <li>IoT-enabled remote PD monitoring </li>
                <li>Prototype testing for transformers/GIS</li>
                <li>IEEE-format research outputs & journals</li>
              </ul>
              <p>Focus: predictive PD analysis with AI/IoT-based diagnostic monitoring.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Partial Discharge Projects</h2>
              <ul>
                <li>Comprehensive IEEE review of insulation diagnostics</li>
                <li>Deep learning-driven PD predictive models</li>
                <li>IoT-enabled monitoring of HVDC, GIS, Smart Grids</li>
                <li>HIL testing with PD monitoring for reliability validation</li>
                <li>Patents & IEEE journal publications</li>
              </ul>
              <p>Focus: ground-breaking predictive diagnostic frameworks, IEEE journals, patents.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – PD Analysis Technologies vs. Applications</h2>
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
                      <td>Electrical PD Detection Techniques</td>
                      <td>Transformers, Switchgear</td>
                      <td>Fault location & insulation degradation</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, PSCAD</td>
                    </tr>
                    <tr>
                      <td>Ultrasonic & EM Sensing</td>
                      <td>HV equipment, Machines</td>
                      <td>Non-invasive PD field testing</td>
                      <td>B.Tech/M.Tech</td>
                      <td>LabVIEW, COMSOL</td>
                    </tr>
                    <tr>
                      <td>AI-Assisted Signal Analysis</td>
                      <td>Smart Grids, Industry Plants</td>
                      <td>Anomaly detection, insulation health</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch</td>
                    </tr>
                    <tr>
                      <td>High-Frequency PD Detection</td>
                      <td>GIS, HVDC Lines</td>
                      <td>High-resolution predictive detection</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB, PSCAD</td>
                    </tr>
                    <tr>
                      <td>IoT-Enabled PD Monitoring</td>
                      <td>Utilities, Renewable Grids</td>
                      <td>Remote monitoring & data logging</td>
                      <td>B.Tech/Ph.D.</td>
                      <td>MQTT, IoT Frameworks</td>
                    </tr>
                    <tr>
                      <td>Dielectric & Insulation Diagnostic Tools</td>
                      <td>Transformers, Cables</td>
                      <td>Insulation life expectancy & PD assessment</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>COMSOL, Multiphysics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is an international hub for EEE research and development. 
                Through our Partial Discharge Analysis Project Development Center, we train scholars in signal processing, insulation diagnostics, 
                IoT-based monitoring, predictive AI models, and IEEE-standard validation methods.
              </p>
            </section>

            {/* ❓ FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((item, i) => (
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

export default EEEPartialDischargeAnalysisProjectDevelopmentCenter;
