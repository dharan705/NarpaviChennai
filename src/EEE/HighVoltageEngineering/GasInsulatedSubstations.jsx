import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Gas Insulated Substations Project Development Center in Chennai",
  "Gas Insulated Substations GIS IEEE Projects 2023–2025",
  "Compact GIS Substation Design",
  "SF6 Insulation Optimization Projects",
  "Partial Discharge Monitoring GIS",
  "B.Tech GIS Projects",
  "M.Tech AI Based GIS Monitoring",
  "Ph.D GIS Research Projects",
  "IoT Based GIS Substation Monitoring",
  "Smart Grid GIS Integration",
  "Narpavi Research Institute GIS Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Gas Insulated Substations (GIS) Project Development Center offer?",
    answer:
      "We support B.Tech, M.Tech, and Ph.D. students working on IEEE-aligned (2023–2025) projects in compact GIS design, SF6 insulation optimization, partial discharge monitoring, and renewable energy integration."
  },
  {
    question: "What types of GIS projects are supported?",
    answer:
      "We support B.Tech, M.Tech, and Ph.D. projects covering compact GIS layouts, AI-assisted diagnostics, IoT-based monitoring, renewable integration, and IEEE publications."
  },
  {
    question: "Which tools and technologies are used for GIS projects?",
    answer:
      "MATLAB/Simulink, PSCAD, COMSOL Multiphysics, IoT platforms, FPGA/DSP controllers, TensorFlow, and PyTorch."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects align with IEEE Transactions (2023–2025) focusing on GIS insulation, partial discharge diagnostics, smart substations, and grid integration."
  },
  {
    question: "What academic support is provided?",
    answer:
      "Guidance in IEEE topic selection, GIS modeling, PD testing, AI-based diagnostics, documentation, and IEEE/Scopus/SCI publications."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Gas Insulated Substations – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Gas Insulated Substations Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering compact GIS design, SF6 insulation, partial discharge monitoring, AI diagnostics, and smart grid integration.";

const pageUrl =
  "/department/high-voltage-engineering/gas-insulated-substations";

const EEEGISProjectDevelopmentCenter = () => {
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
              <p>
                <strong>Narpavi Research Institute</strong> presents the Gas Insulated Substations (GIS) Project Development Center, 
                where B.Tech, M.Tech, and Ph.D. students explore IEEE-aligned (2023–2025) domains including compact GIS design, partial discharge monitoring, insulation optimization, and smart renewable-energy integration.
              </p>
              <p>
                Our scholars gain expertise in GIS modeling, insulation testing, AI-assisted predictive maintenance, IoT-enabled monitoring, and laboratory validation of GIS systems.
              </p>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech GIS Project Development</h2>
              <ul>
                <li>Understanding GIS architecture, layouts, and insulation concepts</li>
                <li>Study of IEEE publications (2023–2025) on GIS reliability & PD analysis</li>
                <li>Simulation with MATLAB/Simulink, PSCAD, COMSOL Multiphysics</li>
                <li>Testing insulation performance and PD measurement</li>
                <li>IoT-enabled GIS data acquisition (gas levels, PD signals)</li>
                <li>IEEE-formatted reports & project evaluation</li>
              </ul>
              <p>Focus: basic GIS design, PD evaluation & hands-on experimentation.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech GIS Project Development</h2>
              <ul>
                <li>IEEE Transactions (2023–2025) review of GIS diagnostics & compact designs</li>
                <li>AI/ML algorithms for predictive GIS maintenance</li>
                <li>IoT-based GIS performance monitoring & environmental safety</li>
                <li>Advanced insulation & PD diagnostics with lab-scale GIS prototypes</li>
                <li>Testing substation reliability & renewable grid integration</li>
                <li>IEEE-compliant research outputs</li>
              </ul>
              <p>Focus: predictive fault diagnostics, reliability optimization, renewable coordination.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. GIS Project Development</h2>
              <ul>
                <li>Critical IEEE review (2023–2025) on SF6 insulation & PD smart grids</li>
                <li>Deep learning-based PD detection & predictive maintenance</li>
                <li>Development of smart GIS models w/ renewable integration</li>
                <li>Real-time IoT-based monitoring of GIS health</li>
                <li>HIL testing of GIS prototypes</li>
                <li>Patents & IEEE journal publications</li>
              </ul>
              <p>Focus: pioneering GIS research, patents, and industry-standard methodologies.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – GIS Technologies vs. Applications</h2>
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
                      <td>Compact GIS Design & Layout</td>
                      <td>Urban/Industrial Substations</td>
                      <td>Space optimization & reliability</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, PSCAD</td>
                    </tr>
                    <tr>
                      <td>SF6 Insulation & Gas Management</td>
                      <td>High Voltage Substations</td>
                      <td>Dielectric performance & leakage mitigation</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>COMSOL, ANSYS</td>
                    </tr>
                    <tr>
                      <td>Partial Discharge (PD) Monitoring</td>
                      <td>GIS, Transformers</td>
                      <td>Predictive insulation monitoring</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>LabVIEW, MATLAB</td>
                    </tr>
                    <tr>
                      <td>AI-Assisted Diagnostics</td>
                      <td>Utility Substations</td>
                      <td>Smart predictive maintenance</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch</td>
                    </tr>
                    <tr>
                      <td>Smart Grid Integration</td>
                      <td>Microgrids, Urban Networks</td>
                      <td>Optimal power flow w/ RES</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>PSCAD, MATLAB</td>
                    </tr>
                    <tr>
                      <td>IoT-Enabled Monitoring</td>
                      <td>GIS substations, HVDC</td>
                      <td>Real-time PD & gas-level monitoring</td>
                      <td>B.Tech/Ph.D.</td>
                      <td>MQTT, IoT Platforms</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is renowned for global EEE project innovation. 
                Through the GIS Project Development Center, we train scholars on compact GIS modeling, SF6 insulation management, 
                PD anomaly detection, AI-driven predictive maintenance, and renewable integration.
              </p>
              <p>
                Our research guidance ensures scholars achieve IEEE-level outcomes in publications, prototypes, and industrial-class GIS reliability standards.
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

export default EEEGISProjectDevelopmentCenter;
