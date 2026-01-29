import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "High Voltage Testing of Equipment Project Development Center in Chennai",
  "High Voltage Testing IEEE Projects 2023–2025",
  "Dielectric Testing Projects",
  "AC DC Withstand Voltage Testing",
  "Impulse Testing High Voltage",
  "Partial Discharge Analysis Projects",
  "B.Tech High Voltage Testing Projects",
  "M.Tech AI Based HV Diagnostics",
  "Ph.D Predictive High Voltage Monitoring",
  "IoT Based HV Equipment Monitoring",
  "Narpavi Research Institute High Voltage Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the High Voltage Testing of Equipment Project Development Center offer?",
    answer:
      "We support B.Tech, M.Tech, and Ph.D. projects in IEEE-aligned (2023–2025) research on dielectric testing, withstand voltage analysis, partial discharge diagnostics, AI-assisted monitoring, and predictive high voltage testing systems."
  },
  {
    question: "What types of projects are supported?",
    answer:
      "We support B.Tech, M.Tech, and Ph.D. projects covering AC/DC withstand testing, impulse simulations, partial discharge diagnostics, AI-assisted fault detection, and IEEE publications."
  },
  {
    question: "Which tools and technologies are used?",
    answer:
      "MATLAB/Simulink, PSCAD, COMSOL Multiphysics, LabVIEW, IoT platforms, FPGA/DSP controllers, TensorFlow, and PyTorch."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects align with IEEE Transactions (2023–2025) on dielectric testing, partial discharge diagnostics, and standard-compliant high voltage equipment testing."
  },
  {
    question: "What academic support is provided?",
    answer:
      "We provide IEEE topic selection, HV lab testing guidance, AI-based diagnostics, IEEE-format documentation, and IEEE/Scopus/SCI publication support."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "High Voltage Testing of Equipment – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) High Voltage Testing of Equipment Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering dielectric testing, AC/DC withstand, impulse testing, partial discharge diagnostics, and AI-based predictive monitoring.";

const pageUrl =
  "/department/high-voltage-engineering/high-voltage-testing";

const EEEHighVoltageTestingEquipmentProjectDevelopmentCenter = () => {
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
  {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> presents the High Voltage Testing of Equipment Project Development Center, supporting global scholars in IEEE-aligned (2023–2025) testing, diagnostic, and predictive analysis of high voltage systems.</p>
              <p>This center trains students in AC/DC withstand tests, impulse testing, PD diagnostics, and real-time IoT/AI-based HV monitoring for transformers, switchgear, HVDC links, and renewable-integrated systems.</p>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech High Voltage Testing Projects</h2>
              <ul>
                <li>Basics of HV insulation and test methodologies</li>
                <li>IEEE (2023–2025) publications on dielectric testing & PD techniques</li>
                <li>Simulations with MATLAB/Simulink, PSCAD, COMSOL</li>
                <li>Lab-scale AC/DC withstand and impulse testing setups</li>
                <li>Partial discharge measurement & safety protocols</li>
                <li>Preparation of IEEE-style technical reports</li>
              </ul>
              <p>Focus: foundational knowledge, dielectric strength analysis, and safety-compliant testing.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech High Voltage Testing Projects</h2>
              <ul>
                <li>Review of IEEE Transactions (2023–2025) on HV testing and diagnostics</li>
                <li>AI/ML-assisted predictive fault detection & insulation diagnostics</li>
                <li>Multi-objective simulations for reliability & optimization</li>
                <li>IoT-enabled lab setups for AC/DC & impulse testing</li>
                <li>Advanced PD detection for predictive maintenance</li>
                <li>IEEE-compliant reporting & publications</li>
              </ul>
              <p>Focus: predictive analytics, AI/IoT-based HV testing automation, and practical validation.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. High Voltage Testing Projects</h2>
              <ul>
                <li>Comprehensive IEEE reviews (2023–2025) on HV testing & PD monitoring</li>
                <li>Deep learning-driven predictive insulation testing frameworks</li>
                <li>IoT-enabled real-time condition monitoring for HVDC/smart grids</li>
                <li>Experimental HIL lab-scale validation for impulse and withstand testing</li>
                <li>Patents & publications in IEEE journals on advanced PD algorithms</li>
              </ul>
              <p>Focus: pioneering AI-driven testing, predictive maintenance, and industrial standards contribution.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – HV Testing Technologies vs. Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Focus</th>
                      <th>Industry Application</th>
                      <th>Research & Development Focus (2023–2025)</th>
                      <th>Academic Level</th>
                      <th>Tools & Frameworks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AC & DC Withstand Testing</td>
                      <td>Transformers, Switchgear, Cables</td>
                      <td>HV stress endurance validation</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, PSCAD</td>
                    </tr>
                    <tr>
                      <td>Impulse Testing</td>
                      <td>Transmission Lines, Substations</td>
                      <td>Lightning & surges simulation</td>
                      <td>B.Tech/M.Tech</td>
                      <td>PSCAD, COMSOL</td>
                    </tr>
                    <tr>
                      <td>Partial Discharge Measurement</td>
                      <td>Transformers, GIS</td>
                      <td>Fault prediction & insulation health</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>LabVIEW, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Insulation Resistance Testing</td>
                      <td>HVDC, Machines</td>
                      <td>Dielectric reliability assessment</td>
                      <td>B.Tech/M.Tech</td>
                      <td>ANSYS, COMSOL</td>
                    </tr>
                    <tr>
                      <td>IoT-enabled HV Monitoring</td>
                      <td>Smart Grids, Utilities</td>
                      <td>Real-time condition evaluation</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>IoT Platforms, MQTT</td>
                    </tr>
                    <tr>
                      <td>AI-Assisted Test Analysis</td>
                      <td>Industrial HV Systems</td>
                      <td>Predictive fault mitigation</td>
                      <td>Ph.D.</td>
                      <td>TensorFlow, PyTorch</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a globally recognized center of excellence in Electrical and Electronics Engineering. 
                Through the High Voltage Testing of Equipment Project Development Center, we empower scholars to develop IEEE-standard simulations, 
                laboratory testing frameworks, IoT/AI-based monitoring, and world-class project publications.
              </p>
              <p>
                We ensure scholars gain both hands-on and research expertise in reliable and safe HV testing methods relevant worldwide.
              </p>
            </section>

            {/* ❓ FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((faq, idx) => (
                  <details key={idx}>
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

export default EEEHighVoltageTestingEquipmentProjectDevelopmentCenter;
