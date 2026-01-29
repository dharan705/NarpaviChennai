import "./EEEProjectDevelopmentCenter.scss";
import Subsidebar from ".././pages/Subsidebar";
import SEO from "../assets/SEO";
import Leftsidebar from "../assets/Leftsidebar";

/* ✅ KEYWORDS ARRAY OBJECT */
const keywords = [
  "High Voltage Engineering IEEE Projects",
  "High Voltage Engineering Project Development Center Chennai",
  "HVDC IEEE Projects",
  "GIS Substation IEEE Projects",
  "High Voltage Insulation IEEE Projects",
  "Partial Discharge Analysis IEEE Projects",
  "B.Tech High Voltage Projects",
  "M.Tech HVDC Projects",
  "Ph.D. High Voltage Engineering Research",
  "Smart Grid High Voltage Projects",
  "Narpavi Research Institute"
];

const faqs = [
  {
    question: "What services does the High Voltage Engineering Project Development Center offer?",
    answer:
      "Narpavi Research Institute's High Voltage Engineering Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in HVDC transmission, insulation systems, and smart grid diagnostics."
  },
  {
    question: "What types of high voltage engineering projects are supported?",
    answer:
      "We support B.Tech projects (insulation modeling, overvoltage protection), M.Tech projects (HVDC/FACTS, GIS substations), and Ph.D. projects (AI-based diagnostics, nanodielectrics)."
  },
  {
    question: "Which technologies are used in high voltage engineering project development?",
    answer:
      "Our stack includes MATLAB/Simulink, COMSOL, PSCAD, and high-voltage lab equipment for advanced insulation modeling and diagnostics."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are based on IEEE Transactions (2023–2025), covering partial discharge analysis, HVDC protection, and advanced insulation systems."
  },
  {
    question: "What support is provided for academic submissions?",
    answer:
      "We provide topic selection, simulation, experimental validation, documentation, and IEEE/Scopus publication support."
  }
];

const EEEHighVoltageEngineeringProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">

      {/* ✅ SEO FIXED */}
      <SEO
        title="High Voltage Engineering – Project Development Center in Chennai"
        description="High Voltage Engineering project development center in Chennai for B.Tech, M.Tech, and Ph.D. students focusing on HVDC transmission, insulation systems, partial discharge analysis, and smart grid diagnostics (IEEE 2023–2025)."
        url="/high-voltage-engineering-project-development-center-chennai"
        keywords={keywords}
        faqs={faqs}
      />

      <Subsidebar
        extraLinks={[
          { id: "eee", label: "eee", path: "/department?dept=eee" }
        ]}
      />

      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* ✅ LEFT SIDEBAR */}
          <aside className="left-sidebar2">
            <Leftsidebar/>
          
          </aside>

          {/* ❌ MAIN CONTENT (NOT CHANGED) */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>High Voltage Engineering – Project Development Center in Chennai</h1>
              <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the High Voltage Engineering – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop cutting-edge, IEEE-aligned (2023–2025) projects in HVDC transmission, insulation systems, and smart grid diagnostics.
              </p>
              <p>
                With expertise in MATLAB/Simulink, COMSOL, and high-voltage lab facilities, we deliver innovative solutions for power transmission, substations, and renewable integration, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech High Voltage Engineering Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational high voltage engineering projects like insulation modeling or overvoltage protection, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>Modeling using MATLAB/Simulink, COMSOL, or PSCAD</li>
                <li>Hardware prototypes of protection circuits or insulation systems</li>
                <li>Performance analysis for diagnostics and protection</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical high voltage systems, and academic-ready output.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech High Voltage Engineering Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced high voltage applications and industrial systems.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions (2023–2025)</li>
                <li>Simulation of HVDC/FACTS or GIS-based substations</li>
                <li>Experimental validation with high-voltage lab testing</li>
                <li>Integration with renewable energy or smart grids</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade high voltage solutions.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. High Voltage Engineering Project Development</h2>
              <p>
                For doctoral scholars, our center supports cutting-edge research in high voltage engineering with cross-domain integration.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>Advanced simulation and optimization of HVDC or nanodielectric systems</li>
                <li>Experimental validation for AI-driven diagnostics or UHVDC systems</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Patent filing support for innovative insulation designs</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – High Voltage Engineering Technologies vs. Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology Domain</th>
                      <th>Industry Application</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>HVDC Transmission Systems</td>
                      <td>Long-Distance Renewable Power Transfer</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>PSCAD, MATLAB/Simulink</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Gas-Insulated Switchgear (GIS)</td>
                      <td>Compact Substations, Urban Power</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>COMSOL, ANSYS</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>High Voltage Testing & Diagnostics</td>
                      <td>Transformer Testing, Cable Fault Detection</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, LabVIEW</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Insulation Coordination & Design</td>
                      <td>Lightning Protection, Overvoltage Protection</td>
                      <td>B.Tech/M.Tech</td>
                      <td>COMSOL, PSCAD</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Partial Discharge (PD) Analysis</td>
                      <td>Predictive Maintenance of Transformers</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, COMSOL</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>UHVAC/UHVDC Systems</td>
                      <td>Bulk Power Transfer, Grid Interconnection</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>PSCAD, MATLAB</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>Nanodielectrics & Advanced Materials</td>
                      <td>High-Performance Insulation</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>COMSOL, ANSYS</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>High Voltage Surge Arresters</td>
                      <td>Grid Protection from Surges</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, PSCAD</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>AI/ML in High Voltage Diagnostics</td>
                      <td>Condition Monitoring, Fault Prediction</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, MATLAB</td>
                      <td>Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="EEEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned High Voltage Engineering Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-Enabled Partial Discharge Analysis for Transformer Insulation (2023)</li>
                <li>HVDC Transmission Protection under Renewable Power Variability (2024)</li>
                <li>GIS-Based Compact Substation Modeling for Urban Power Networks (2025)</li>
                <li>Nanodielectric-Based High Voltage Insulation for Power Equipment (2023)</li>
                <li>Lightning Overvoltage Protection in Smart Grids using Surge Arresters (2024)</li>
                <li>Condition Monitoring of Underground Cables using High-Frequency PD Signals (2025)</li>
                <li>UHVDC System Design for Cross-Border Power Transfer (2024)</li>
                <li>Digital Twin Approach for High Voltage Substation Monitoring (2025)</li>
              </ul>
            </section>

            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute provides extensive support in High Voltage Engineering by offering simulation labs, testing support, modeling expertise, and IEEE publication assistance. Through the High Voltage Engineering – Project Development Center, the institute helps scholars create innovative and industry-relevant solutions.
              </p>
              <p>
                By aligning projects with IEEE Transactions (2023–2025), the institute ensures their work contributes to global advancements in power transmission and insulation systems.
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

          {/* ✅ RIGHT SIDEBAR */}
          <aside className="right-sidebar1">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/department/high-voltage-engineering">High Voltage Engineering</a></li>
              <li><a href="/department/high-voltage-engineering/gis">GIS Substations</a></li>
              <li><a href="/department/high-voltage-engineering/high-voltage-testing">High Voltage Testing</a></li>
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

export default EEEHighVoltageEngineeringProjectDevelopmentCenter;
