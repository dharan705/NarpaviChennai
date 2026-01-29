import "./EEEProjectDevelopmentCenter.scss";
import Subsidebar from ".././pages/Subsidebar";
import SEO from "../assets/SEO";
import Leftsidebar from "../assets/Leftsidebar";

/* ✅ KEYWORDS ARRAY OBJECT */
const keywords = [
  "Renewable Energy Systems Project Development Center Chennai",
  "Renewable Energy IEEE Projects",
  "Solar PV IEEE Projects",
  "Wind Energy IEEE Projects",
  "Hybrid Renewable Microgrid Projects",
  "Fuel Cell IEEE Projects",
  "Energy Storage Integration Projects",
  "AI in Renewable Energy Systems",
  "B.Tech Renewable Energy Projects",
  "M.Tech Renewable Energy Projects",
  "Ph.D. Renewable Energy Research",
  "Narpavi Research Institute"
];

const faqs = [
  {
    question: "What services does the Renewable Energy Systems Project Development Center offer?",
    answer:
      "Narpavi Research Institute's Renewable Energy Systems Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in solar, wind, fuel cell, and hybrid energy systems."
  },
  {
    question: "What types of renewable energy projects are supported?",
    answer:
      "We support B.Tech projects (solar PV MPPT, wind converters), M.Tech projects (hybrid microgrids, energy storage), and Ph.D. projects (AI-based forecasting, V2G integration)."
  },
  {
    question: "Which technologies are used in renewable energy project development?",
    answer:
      "Our stack includes MATLAB/Simulink, HOMER, PVSyst, Arduino, and Raspberry Pi."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are based on IEEE Transactions (2023–2025), covering solar PV MPPT, hybrid microgrids, and AI-driven forecasting."
  },
  {
    question: "What support is provided for academic submissions?",
    answer:
      "We provide topic selection, simulation, hardware prototyping, validation, documentation, and IEEE/Scopus journal publication support."
  }
];

const EEERenewableEnergySystemsProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">

      {/* ✅ SEO FIXED */}
      <SEO
        title="Renewable Energy Systems – Project Development Center in Chennai"
        description="Renewable Energy Systems Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. students focusing on solar PV, wind energy, hybrid microgrids, fuel cells, energy storage, V2G, and IEEE-aligned research (2023–2025)."
        url="/renewable-energy-systems-project-development-center-chennai"
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

          {/* ❌ MAIN CONTENT (UNCHANGED) */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Renewable Energy Systems – Project Development Center in Chennai</h1>
            
            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Renewable Energy Systems – Project Development Center, a dedicated hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop cutting-edge, IEEE-aligned (2023–2025) projects in solar, wind, fuel cell, and hybrid energy systems.
              </p>
              <p>
                With expertise in MATLAB/Simulink, HOMER, and embedded platforms, we deliver innovative solutions for smart grids, rural electrification, and green mobility, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Renewable Energy Systems Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational renewable energy projects like solar PV MPPT or wind energy converters, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>MATLAB/Simulink-based modeling of PV or wind systems</li>
                <li>Hardware prototypes of solar charge controllers or hybrid systems</li>
                <li>Performance analysis for efficiency and control</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical renewable energy systems, and academic-ready output.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Renewable Energy Systems Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced renewable energy systems and industrial applications.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions (2023–2025)</li>
                <li>Simulation of hybrid microgrids or energy storage systems</li>
                <li>Hardware-in-the-loop testing with embedded platforms</li>
                <li>Integration with smart grids or EVs</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade renewable energy solutions.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Renewable Energy Systems Project Development</h2>
              <p>
                For doctoral scholars, our center supports cutting-edge research in renewable energy with cross-domain integration.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>Advanced simulation and optimization of hybrid grids or V2G systems</li>
                <li>Experimental validation for AI-driven forecasting or hydrogen storage</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Patent filing support for innovative renewable designs</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Renewable Energy Technologies vs. Applications</h2>
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
                      <td>Solar PV with MPPT</td>
                      <td>Rooftop Solar, EV Charging Stations</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, PVSyst</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Wind Energy Conversion Systems</td>
                      <td>Offshore & Onshore Wind Farms</td>
                      <td>B.Tech/M.Tech</td>
                      <td>HOMER, MATLAB/Simulink</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Hybrid Renewable Microgrids</td>
                      <td>Rural Electrification, Smart Cities</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, GridLab-D</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Fuel Cell & Hydrogen Systems</td>
                      <td>Green Mobility, Power Backup</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>COMSOL, MATLAB</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Energy Storage Integration</td>
                      <td>Grid Stabilization, Battery Management</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>HOMER, MATLAB/Simulink</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>AI & IoT for Renewable Forecasting</td>
                      <td>Smart Grids, Predictive Maintenance</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, AWS IoT</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>V2G (Vehicle-to-Grid) Integration</td>
                      <td>Electric Vehicles, Smart Grid Services</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, PLECS</td>
                      <td>Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="EEEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Renewable Energy Systems Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-Based MPPT Techniques for Solar PV Systems (2023)</li>
                <li>Smart Microgrid Design with Solar-Wind Hybrid Systems (2024)</li>
                <li>Hydrogen Fuel Cell Integration for Green Transportation (2025)</li>
                <li>Blockchain-Enabled Renewable Energy Trading in Smart Grids (2024)</li>
                <li>IoT-Based Monitoring and Control of Hybrid Energy Systems (2023)</li>
                <li>Vehicle-to-Grid (V2G) Integration for Smart Cities (2025)</li>
                <li>Energy Storage Optimization using AI-Enabled Controllers (2024)</li>
                <li>Predictive Renewable Forecasting with Machine Learning Models (2025)</li>
              </ul>
            </section>

            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute leads innovation in Renewable Energy Systems research and project development. Through its Renewable Energy Systems – Project Development Center, the institute provides world-class simulation labs, prototyping facilities, domain expertise, and IEEE publication support.
              </p>
              <p>
                By aligning every project with IEEE Transactions (2023–2025), the institute ensures scholars create impactful renewable energy solutions for global challenges.
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
            <ul>
              <li><a href="/department/renewable-energy-systems">Renewable Energy Systems</a></li>
              <li><a href="/department/renewable-energy-systems/solar-photovoltaic">Solar Photovoltaic Systems</a></li>
              <li><a href="/department/renewable-energy-systems/wind-energy-conversion">Wind Energy Conversion Systems</a></li>
              <li><a href="/department/renewable-energy-systems/biomass-fuel-cell">Biomass & Fuel Cell Technologies</a></li>
              <li><a href="/department/renewable-energy-systems/energy-storage-integration">Energy Storage Integration</a></li>
              <li><a href="/department/renewable-energy-systems/hybrid-renewable-systems">Hybrid Renewable Systems</a></li>
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

export default EEERenewableEnergySystemsProjectDevelopmentCenter;
