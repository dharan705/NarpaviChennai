import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Insulation Materials & Techniques Project Development Center in Chennai",
  "Insulation Materials IEEE Projects 2023–2025",
  "High Voltage Insulation Techniques",
  "Dielectric Materials Projects",
  "B.Tech Insulation Materials Projects",
  "M.Tech Composite Insulation Systems",
  "Ph.D AI Based Insulation Diagnostics",
  "Nanocomposite Insulation Research",
  "Partial Discharge Insulation Analysis",
  "Narpavi Research Institute Insulation Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Insulation Materials & Techniques Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Insulation Materials & Techniques Project Development Center supports B.Tech, M.Tech, and Ph.D. students in IEEE-aligned (2023–2025) research on dielectric materials, high-voltage insulation, thermal-resistant composites, and predictive insulation performance systems."
  },
  {
    question: "What types of insulation projects are supported?",
    answer:
      "We support B.Tech, M.Tech, and Ph.D. projects covering dielectric testing, nanocomposite insulation systems, AI-assisted diagnostics, and IEEE publications."
  },
  {
    question: "Which tools are used in insulation system research?",
    answer:
      "MATLAB/Simulink, COMSOL Multiphysics, ANSYS, PSIM, IoT platforms, TensorFlow, and PyTorch."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are aligned with IEEE Transactions (2023–2025) focusing on dielectric materials, composite insulation, predictive diagnostics, and HV insulation standards."
  },
  {
    question: "What academic support is provided?",
    answer:
      "We support IEEE topic selection, simulation, lab testing, insulation optimization, and IEEE/Scopus/SCI publication guidance."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Insulation Materials & Techniques – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Insulation Materials & Techniques Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering dielectric materials, nanocomposites, AI-based insulation diagnostics, and high-voltage applications.";

const pageUrl =
  "/department/high-voltage-engineering/insulation-materials";

const EEEInsulationMaterialsTechniquesProjectDevelopmentCenter = () => {
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
                <strong>Narpavi Research Institute</strong> introduces the Insulation Materials & Techniques Project Development Center, 
                enabling B.Tech, M.Tech, and Ph.D. scholars to pursue IEEE-aligned (2023–2025) research on dielectric materials, 
                polymeric composites, nanocomposites, predictive degradation diagnostics, and advanced layering techniques.
              </p>
              <p>
                Scholars gain hands-on expertise through computational simulations, laboratory testing, IoT-enabled insulation monitoring, 
                and AI-based predictive performance evaluation for industrial and academic excellence.
              </p>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Insulation Materials & Techniques Projects</h2>
              <ul>
                <li>Introduction to dielectric materials & insulation principles</li>
                <li>IEEE papers (2023–2025) on insulation composites & techniques</li>
                <li>Simulation in MATLAB, COMSOL Multiphysics, ANSYS</li>
                <li>Test dielectric strength, thermal stress endurance</li>
                <li>Lab-scale setups for breakdown voltage & partial discharge</li>
                <li>Generate IEEE-format project reports</li>
              </ul>
              <p>Focus: basics of insulation design and real-world HV reliability practice.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Insulation Materials & Techniques Projects</h2>
              <ul>
                <li>IEEE Transactions (2023–2025) reviews on dielectric & HV materials</li>
                <li>AI/ML-supported diagnostics for insulation performance</li>
                <li>Multi-objective analysis: dielectric strength, thermal stability</li>
                <li>Nanocomposite insulation design & validation</li>
                <li>IoT-enabled monitoring of insulation health in lab conditions</li>
                <li>Publication-ready IEEE-aligned reports</li>
              </ul>
              <p>Focus: optimization, predictive diagnostics, material science innovations.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Insulation Materials & Techniques Projects</h2>
              <ul>
                <li>Comprehensive IEEE review (2023–2025) of advanced HV insulation</li>
                <li>Deep learning-based predictive degradation modeling</li>
                <li>Development of nanocomposite & cryogenic insulation systems</li>
                <li>Experimental insulation monitoring with HIL setups</li>
                <li>Patents and publications in IEEE leading journals</li>
                <li>Contributions to global HV insulation standards</li>
              </ul>
              <p>Focus: pioneering insulation technologies, durability, AI diagnostics, and standards research.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Insulation Technologies vs. Industry Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Research Focus</th>
                      <th>Industry Application</th>
                      <th>Research & Development Focus (2023–2025)</th>
                      <th>Academic Level</th>
                      <th>Tools & Frameworks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Polymeric & Composite Insulation Materials</td>
                      <td>Transformers, Cables, Generators</td>
                      <td>High-dielectric & eco-friendly composites</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, COMSOL</td>
                    </tr>
                    <tr>
                      <td>High-Temperature Insulation</td>
                      <td>HV Machines, Power Electronics</td>
                      <td>Thermal stress reliability</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>ANSYS, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Nanocomposite Insulation</td>
                      <td>HVDC, Industrial Machinery</td>
                      <td>Dielectric performance, longevity</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>COMSOL, PSIM</td>
                    </tr>
                    <tr>
                      <td>Cryogenic Insulation</td>
                      <td>Superconductors, LNG Facilities</td>
                      <td>Low-temp dielectric stability</td>
                      <td>Ph.D.</td>
                      <td>ANSYS, Multiphysics</td>
                    </tr>
                    <tr>
                      <td>Condition Monitoring & AI Prediction</td>
                      <td>Motors, HV Transformers</td>
                      <td>Degradation prediction, fault prevention</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch, IoT Frameworks</td>
                    </tr>
                    <tr>
                      <td>Advanced Coating Techniques</td>
                      <td>Switchgear, HV Equipment</td>
                      <td>Surface insulation, corona resistance</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Material Testing Labs, MATLAB</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is an internationally recognized hub for EEE innovation. 
                Through the Insulation Materials & Techniques Project Development Center, we train students 
                from material design through diagnostics, prototyping, patents, and IEEE publications.
              </p>
              <p>
                Scholars gain hands-on expertise with AI-based predictive diagnostics, IoT-enabled monitoring, and material science validation techniques.
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

export default EEEInsulationMaterialsTechniquesProjectDevelopmentCenter;
