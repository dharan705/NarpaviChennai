import "../MEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Wind Turbine Design & Optimization Project Development Center in Chennai",
  "Wind Turbine IEEE Projects 2023–2025",
  "CFD Based Turbine Optimization",
  "AI Enabled Wind Energy Projects",
  "IoT Wind Turbine Monitoring",
  "Hybrid Wind Solar Projects",
  "Renewable Energy Student Projects",
  "Structural Analysis of Wind Turbines",
  "Predictive Maintenance Wind Energy",
  "Narpavi Research Institute Wind Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Wind Turbine Design & Optimization Project Development Center offer?",
    answer:
      "We provide IEEE-aligned (2023–2025) support for B.Tech, M.Tech, and Ph.D. projects in wind turbine aerodynamics, structural design, IoT monitoring, AI-optimized forecasting, hybrid renewable integration, CFD/FEA simulations, hardware prototyping, and IEEE/SCI/Scopus publication guidance."
  },
  {
    question:
      "What types of wind turbine projects are supported?",
    answer:
      "B.Tech projects focus on basic turbine modeling and prototypes. M.Tech projects include CFD-based blade optimization and AI forecasting. Ph.D. research covers hybrid wind-solar systems, predictive maintenance, multi-objective optimization, patents, and high-impact publications."
  },
  {
    question: "Which tools and technologies are used?",
    answer:
      "MATLAB/Simulink, ANSYS, SolidWorks, Arduino/Raspberry Pi, Python (TensorFlow/PyTorch), wind tunnel kits, DC generators, and digital twins."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects align with IEEE Transactions on Sustainable Energy, Wind Energy, and Industrial Electronics (2023–2025)."
  },
  {
    question: "What academic support is provided?",
    answer:
      "End-to-end guidance including simulations, prototyping, validation, IEEE documentation, and Scopus/SCI publication support."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Wind Turbine Design & Optimization – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Wind Turbine Design & Optimization Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering CFD/FEA blade optimization, AI forecasting, IoT monitoring, hybrid wind-solar systems, and predictive maintenance.";

const pageUrl =
  "/department/renewable-thermal-energy/wind-turbine-design";

const EEEWindTurbineDesignOptimizationProjectDevelopmentCenter = () => {
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
              <p><strong>Narpavi Research Institute</strong> offers the Wind Turbine Design & Optimization Project Development Center, empowering B.Tech, M.Tech, and Ph.D. students with IEEE-aligned (2023–2025) projects in aerodynamic blade design, structural optimization, IoT monitoring, and hybrid renewable systems.</p>
              <p>Students gain expertise in maximizing energy generation, improving efficiency, and integrating AI-driven forecasting with real-world prototypes, contributing to sustainable wind energy solutions.</p>
            </section>

            {/* Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Wind Turbine Technologies</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead><tr><th>Technology</th><th>Application</th><th>Advantages</th></tr></thead>
                  <tbody>
                    <tr><td>Horizontal/Vertical Axis Turbines</td><td>Wind Farms</td><td>Scalable, site-adaptable</td></tr>
                    <tr><td>CFD Blade Design</td><td>Renewable Energy</td><td>Optimized aerodynamics</td></tr>
                    <tr><td>Structural FEA</td><td>Turbine Design</td><td>Stress & fatigue prevention</td></tr>
                    <tr><td>IoT & Sensors</td><td>Smart Monitoring</td><td>Real-time predictive maintenance</td></tr>
                    <tr><td>AI-Based Forecasting</td><td>Energy Management</td><td>Performance optimization</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* B.Tech Cycle */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Wind Turbine Projects</h2>
              <ul>
                <li>Wind energy basics and turbine types</li>
                <li>MATLAB/Simulink performance modeling</li>
                <li>Small-scale prototype with DC generators</li>
                <li>Output & efficiency testing</li>
              </ul>
              <p>Focus: foundational mechanics and energy conversion skills.</p>
            </section>

            {/* M.Tech Cycle */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Wind Turbine Projects</h2>
              <ul>
                <li>Challenges in blade/power coefficient optimization</li>
                <li>AI/ML for wind speed prediction</li>
                <li>CFD/FEA analysis + fatigue testing</li>
                <li>IoT for smart control & monitoring</li>
              </ul>
              <p>Focus: advanced optimization for efficient, deployable turbines.</p>
            </section>

            {/* Ph.D Cycle */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D Wind Turbine Research</h2>
              <ul>
                <li>AI-optimized blades, hybrid renewable gaps</li>
                <li>CFD/FEA multi-objective modeling</li>
                <li>IoT-enabled predictive control prototypes</li>
                <li>IEEE/IEC validation, SCI publications</li>
              </ul>
              <p>Focus: novel contributions in sustainable wind energy design.</p>
            </section>

            {/* Case Study */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Case Study – Optimized Wind Turbines</h2>
              <p>IEEE studies (2023–2025) show AI-driven blade optimization with IoT monitoring increases efficiency by 25%, reduces downtime via predictive maintenance, and enables hybrid solar-wind integration for stable power. Smart turbines support dynamic yaw/pitch control and energy storage.</p>
            </section>

            {/* IEEE Titles */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-Based Wind Turbine Blade Optimization Using CFD</li>
                <li>IoT-Enabled Wind Turbine Monitoring and Predictive Maintenance</li>
                <li>Hybrid Wind-Solar Energy System with Smart Load Control</li>
                <li>Structural Analysis of Wind Turbine Towers Using FEA</li>
                <li>Machine Learning-Based Wind Speed Prediction for Turbine Optimization</li>
                <li>Multi-Objective Optimization of Horizontal-Axis Wind Turbines</li>
                <li>Dynamic Pitch Control System for Energy Efficiency Improvement</li>
                <li>Digital Twin Modeling of Wind Turbines for Smart Grids</li>
                <li>Energy Storage Integration with Optimized Wind Turbines</li>
                <li>Cybersecure IoT-Enabled Wind Energy Systems</li>
              </ul>
            </section>

            {/* Future Scope */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Future Scope & Research Opportunities</h2>
              <ul>
                <li>Hybrid wind-solar + storage systems for reliable energy.</li>
                <li>AI/ML for predictive turbine performance and adaptive control.</li>
                <li>Smart grid integration with IoT-enabled wind farms.</li>
                <li>Advanced materials for durable, efficient turbine designs.</li>
                <li>Global sustainability: reducing carbon through optimized renewables.</li>
              </ul>
            </section>

            {/* About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p><strong>Narpavi Research Institute</strong> guides B.Tech, M.Tech, and Ph.D. students in Wind Turbine Design & Optimization projects, from CFD/FEA simulations to AI-optimized prototypes. We ensure IEEE-standard (2023–2025) research, practical prototypes, and publication support for academic and industrial success in renewable energy.</p>
            </section>

            {/* FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((faq,i)=>(
                  <details key={i}>
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
              <li><a href="/department/renewable-thermal-energy">Renewable & Thermal Energy</a></li>
              <li><a href="/department/renewable-thermal-energy/solar-pv-thermal">Solar PV & Thermal Systems</a></li>
              <li><a href="/department/renewable-thermal-energy/wind-turbine-design">Wind Turbine Design</a></li>
              <li><a href="/department/renewable-thermal-energy/biomass-biofuel-energy">Biomass & Biofuel Energy</a></li>
              <li><a href="/department/renewable-thermal-energy/energy-storage-recovery">Energy Storage & Recovery</a></li>
              <li><a href="/department/renewable-thermal-energy/smart-grid-integration">Smart Grid Integration</a></li>
            </ul>

            {/* 🔑 KEYWORDS */}
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

export default EEEWindTurbineDesignOptimizationProjectDevelopmentCenter;
