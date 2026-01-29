import "../MEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Waste Heat Recovery Systems Project Development Center in Chennai",
  "Waste Heat Recovery IEEE Projects 2023–2025",
  "ORC Waste Heat Recovery Projects",
  "Industrial Energy Efficiency Projects",
  "Automotive WHRS Projects",
  "Thermoelectric Waste Heat Recovery",
  "Regenerative Burners Projects",
  "CFD Waste Heat Recovery Analysis",
  "AI Driven WHRS Optimization",
  "Narpavi Research Institute Energy Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Waste Heat Recovery Systems Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Waste Heat Recovery Systems Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on heat exchangers, ORC, regenerative burners, thermoelectric generators, and absorption refrigeration."
  },
  {
    question:
      "What types of Waste Heat Recovery Systems projects are supported?",
    answer:
      "We support B.Tech projects on heat exchanger design and IC engine exhaust recovery, M.Tech projects on CFD-based ORC analysis and nanofluid optimization, and Ph.D. projects on AI-driven and hybrid WHRS systems."
  },
  {
    question:
      "Which tools and technologies are used in Waste Heat Recovery Systems projects?",
    answer:
      "ANSYS, MATLAB, COMSOL Multiphysics, CFD software, AI frameworks, and experimental setups are used for WHRS analysis and optimization."
  },
  {
    question:
      "How are projects aligned with IEEE standards?",
    answer:
      "Projects are aligned with IEEE Transactions (2023–2025) on Mechanical Engineering and Renewable Energy."
  },
  {
    question:
      "What support is provided for academic submissions?",
    answer:
      "We provide topic selection, CFD and experimental analysis, AI integration, prototype development, documentation, and journal publication support."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Waste Heat Recovery Systems – Project Development Center in Chennai";

const pageDescription =
  "Waste Heat Recovery Systems Project Development Center in Chennai offering IEEE-aligned (2023–2025) projects for B.Tech, M.Tech, and Ph.D. using ORC, TEG, CFD analysis, AI optimization, and industrial energy recovery techniques.";

const pageUrl =
  "/department/thermal-engineering/waste-heat-recovery";

const MEWasteHeatRecoverySystemsProjectDevelopmentCenter = () => {
  return (
    <div className="MEProjectDevelopmentCenter">

      {/* 🔍 SEO */}
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        url={pageUrl}
        faqs={faqs}
      />

      <Sidebar />

      <div className="MEProjectDevelopmentCenter-main">
        <div className="MEProjectDevelopmentCenter-grid">

          {/* ⬅ LEFT SIDEBAR */}
          <aside className="left-sidebar2">
            <Leftsidebar />
          </aside>

          {/* 📑 CENTER CONTENT */}
          <div className="MEProjectDevelopmentCenter-center">
            {/* ✅ SINGLE H1 */}
            <h1>{pageTitle}</h1>
            <section className="MEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Waste Heat Recovery Systems Project Development Center, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on capturing and reusing waste heat for energy efficiency and sustainability.
              </p>
              <p>
                Our projects focus on heat exchangers, Organic Rankine Cycle (ORC), regenerative burners, thermoelectric generators (TEGs), and absorption refrigeration, leveraging AI, nanofluids, and phase-change materials for industrial, automotive, and power generation applications.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-importance">
              <h2>Importance of Waste Heat Recovery Systems</h2>
              <ul>
                <li><strong>Energy Efficiency</strong>: Recovers lost heat to reduce fuel consumption.</li>
                <li><strong>Sustainability</strong>: Lowers greenhouse gas emissions and supports carbon neutrality.</li>
                <li><strong>Industrial Applications</strong>: Enhances efficiency in cement, steel, and power plants.</li>
                <li><strong>Cost Savings</strong>: Reduces operational costs through energy recovery.</li>
                <li><strong>Interdisciplinary Innovation</strong>: Integrates thermal engineering, AI, and renewable energy.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-btech">
              <h2>B.Tech Waste Heat Recovery Systems Project Development</h2>
              <p>For undergraduate students, our center focuses on practical WHRS projects aligned with IEEE topics.</p>
              <ul>
                <li>Identify waste heat sources (e.g., boilers, IC engines, industrial exhausts)</li>
                <li>Design heat exchangers or regenerative systems using CAD</li>
                <li>Fabricate small-scale heat recovery prototypes</li>
                <li>Test thermal efficiency and fuel savings</li>
              </ul>
              <p>Example: Low-cost heat exchanger for IC engine exhaust recovery.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Waste Heat Recovery Systems Project Development</h2>
              <p>For postgraduate students, projects focus on optimization and hybrid WHRS technologies.</p>
              <ul>
                <li>Simulate WHRS using ANSYS/Fluent, MATLAB, or COMSOL</li>
                <li>Integrate WHRS with HVAC, ORC, or solar thermal systems</li>
                <li>Develop lab-scale models (e.g., regenerative burners, ORC test rigs)</li>
                <li>Apply optimization algorithms (PSO, GA, ANN)</li>
              </ul>
              <p>Example: CFD analysis of nanofluid-based WHRS for enhanced recovery.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Waste Heat Recovery Systems Project Development</h2>
              <p>For doctoral scholars, our center supports pioneering research in advanced WHRS.</p>
              <ul>
                <li>Identify gaps (e.g., low-grade heat to hydrogen, AI-driven WHRS)</li>
                <li>Design hybrid systems (TEG, ORC, PCM)</li>
                <li>Test pilot-scale systems in industrial setups</li>
                <li>Publish in IEEE, Elsevier, Springer journals</li>
              </ul>
              <p>Example: AI-driven WHRS optimization for smart factories.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Technologies vs. Applications</h2>
              <div className="MEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>WHRS Technology</th>
                      <th>Industry Application</th>
                      <th>Advantages</th>
                      <th>Challenges</th>
                      <th>Academic Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Heat Exchangers</td>
                      <td>Boilers, furnaces, cement plants</td>
                      <td>Simple, effective</td>
                      <td>Limited for low-grade heat</td>
                      <td>B.Tech</td>
                    </tr>
                    <tr>
                      <td>Organic Rankine Cycle (ORC)</td>
                      <td>Power generation from low-grade heat</td>
                      <td>Converts waste heat into electricity</td>
                      <td>High cost of working fluids</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>Regenerative Burners</td>
                      <td>Steel, glass, ceramic industries</td>
                      <td>High efficiency, reduces fuel use</td>
                      <td>Large capital investment</td>
                      <td>M.Tech</td>
                    </tr>
                    <tr>
                      <td>Thermoelectric Generators (TEG)</td>
                      <td>Automotive exhaust, small-scale units</td>
                      <td>Direct electricity conversion</td>
                      <td>Low efficiency, costly materials</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Absorption Refrigeration</td>
                      <td>HVAC, chemical plants</td>
                      <td>Utilizes waste heat for cooling</td>
                      <td>Complex design, high maintenance</td>
                      <td>Ph.D.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="MEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>Performance Optimization of Nanofluid-Based Heat Exchangers in WHRS (2023)</li>
                <li>ORC-Integrated Waste Heat Recovery for Hybrid Power Plants (2024)</li>
                <li>AI-Driven Optimization of Industrial Waste Heat Recovery Systems (2024)</li>
                <li>Hybrid WHRS Using Thermoelectric Generators and Phase Change Materials (2025)</li>
                <li>Waste Heat Recovery for Hydrogen Production in Smart Energy Grids (2025)</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in project development and publication support for B.Tech, M.Tech, and Ph.D. students. With expertise in Thermal Engineering, Heat Transfer, and Energy Optimization, we provide IEEE-aligned project development, simulation guidance, prototype design, and research publication services. Our Waste Heat Recovery Systems projects ensure students gain expertise in cutting-edge technologies, contributing to sustainable engineering solutions.
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
              <li><a href="/department/thermal-engineering">Thermal Engineering</a></li>
              <li><a href="/department/thermal-engineering/heat-exchanger-design">Heat Exchanger Design</a></li>
              <li><a href="/department/thermal-engineering/solar-thermal-systems">Solar Thermal Systems</a></li>
              <li><a href="/department/thermal-engineering/waste-heat-recovery">Waste Heat Recovery</a></li>
              <li><a href="/department/thermal-engineering/hvac-system-analysis">HVAC System Analysis</a></li>
              <li><a href="/department/thermal-engineering/energy-efficiency-in-thermal">Energy Efficiency in Thermal Systems</a></li>
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

export default MEWasteHeatRecoverySystemsProjectDevelopmentCenter;
