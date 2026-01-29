import "../MEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Turbomachinery Design & Analysis Project Development Center in Chennai",
  "Turbomachinery Design IEEE Projects 2023–2025",
  "Gas Turbine Analysis Projects",
  "Compressor CFD Simulation Projects",
  "Wind Turbine Blade Optimization",
  "Hydraulic Turbine Cavitation Analysis",
  "AI Turbomachinery Optimization",
  "CFD FEA Turbine Blade Analysis",
  "Pump Impeller Design Projects",
  "Narpavi Research Institute Turbomachinery Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question: "What services does the Turbomachinery Design & Analysis Project Development Center offer?",
    answer:
      "Narpavi Research Institute supports IEEE-aligned (2023–2025) turbomachinery projects using CAD, CFD, FEA, and AI-driven optimization."
  },
  {
    question: "What types of turbomachinery projects are supported?",
    answer:
      "Projects include compressors, turbines, pumps, fans, cavitation analysis, and AI-driven diagnostics."
  },
  {
    question: "Which tools are used?",
    answer:
      "ANSYS Fluent, OpenFOAM, SolidWorks, CATIA, MATLAB, AI frameworks, and HPC platforms."
  },
  {
    question: "Are projects IEEE aligned?",
    answer:
      "Yes, projects align with IEEE Transactions (2023–2025) on Mechanical Engineering and Fluid Dynamics."
  },
  {
    question: "Do you support publications?",
    answer:
      "Yes, IEEE, Scopus, Elsevier, Springer journals and patents are supported."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Turbomachinery Design & Analysis – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Turbomachinery Design & Analysis Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. using CAD, CFD, FEA, AI-driven optimization, and HPC simulations.";

const pageUrl =
  "/department/fluid-mechanics-dynamics/turbomachinery-design";

const METurbomachineryDesignAnalysisProjectDevelopmentCenter = () => {
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
                <strong>Narpavi Research Institute</strong> presents the Turbomachinery Design & Analysis Project Development Center, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on compressors, turbines, pumps, and fans for energy, aerospace, and automotive applications.
              </p>
              <p>
                Our projects leverage CAD, CFD, FEA, and AI-driven optimization to enhance turbomachinery efficiency, reliability, and sustainability, ensuring impactful research outcomes.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-importance">
              <h2>Importance of Turbomachinery Design & Analysis</h2>
              <ul>
                <li><strong>Energy Efficiency</strong>: Optimizes power generation in turbines and pumps.</li>
                <li><strong>Aerospace Propulsion</strong>: Enhances jet engine performance and fuel savings.</li>
                <li><strong>Renewable Energy</strong>: Improves wind and hydraulic turbine designs.</li>
                <li><strong>Automotive Performance</strong>: Boosts turbocharger efficiency and reliability.</li>
                <li><strong>AI & HPC Integration</strong>: Enables real-time diagnostics and large-scale simulations.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-btech">
              <h2>B.Tech Turbomachinery Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational turbomachinery projects aligned with IEEE topics.</p>
              <ul>
                <li>Learn turbomachinery basics (compressors, turbines, pumps)</li>
                <li>Perform thermodynamic cycle analysis (Brayton, Rankine)</li>
                <li>Create 3D models using SolidWorks or CATIA</li>
                <li>Conduct simple CFD simulations with ANSYS Fluent or OpenFOAM</li>
                <li>Validate results with lab-based experiments</li>
              </ul>
              <p>Example: CFD analysis of centrifugal pump impeller for performance evaluation.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Turbomachinery Project Development</h2>
              <p>For postgraduate students, projects focus on advanced design and multiphysics simulations.</p>
              <ul>
                <li>Model blade aerodynamics and thermodynamic performance</li>
                <li>Simulate 3D flow using CFD (k-ε, LES, RANS models)</li>
                <li>Perform FEA for stress, vibration, and fatigue analysis</li>
                <li>Optimize designs with genetic algorithms or AI</li>
                <li>Analyze turbine blade cooling systems</li>
              </ul>
              <p>Example: CFD-based optimization of gas turbine blade cooling efficiency.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Turbomachinery Project Development</h2>
              <p>For doctoral scholars, our center supports innovative research in turbomachinery.</p>
              <ul>
                <li>Identify gaps in blade design, flow instabilities, or cavitation</li>
                <li>Develop high-fidelity CFD and FSI models</li>
                <li>Run large-scale simulations on HPC platforms</li>
                <li>Integrate AI for real-time performance predictions</li>
                <li>Publish in IEEE, ASME, Elsevier, and Springer journals</li>
              </ul>
              <p>Example: AI-driven CFD for real-time diagnostics in gas turbines.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Technologies vs. Applications</h2>
              <div className="MEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology</th>
                      <th>Industry Application</th>
                      <th>Advantages</th>
                      <th>Challenges</th>
                      <th>Academic Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Axial Compressors & Turbines</td>
                      <td>Aerospace Engines</td>
                      <td>High efficiency at large flow rates</td>
                      <td>Complex blade design</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Radial (Centrifugal) Compressors</td>
                      <td>Automotive Turbochargers</td>
                      <td>Compact, robust design</td>
                      <td>Lower efficiency at high flows</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>Hydraulic Turbines</td>
                      <td>Hydropower Plants</td>
                      <td>Renewable energy, large-scale generation</td>
                      <td>Cavitation and erosion</td>
                      <td>M.Tech</td>
                    </tr>
                    <tr>
                      <td>Wind Turbines</td>
                      <td>Renewable Energy</td>
                      <td>Clean, sustainable power</td>
                      <td>Variable wind conditions</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>Gas Turbines</td>
                      <td>Power Plants, Aviation</td>
                      <td>High power-to-weight ratio</td>
                      <td>High maintenance costs</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Pump Design Optimization</td>
                      <td>Oil & Gas, Water Systems</td>
                      <td>Improved efficiency, reduced cavitation</td>
                      <td>Material wear issues</td>
                      <td>B.Tech</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="MEProjectDevelopmentCenter-casestudy">
              <h2>Case Study – Turbomachinery in Aerospace Applications</h2>
              <p>
                In aerospace, turbomachinery enhances jet engine performance through efficient compressors and turbines. IEEE research (2023–2025) demonstrates AI-optimized CFD reducing compressor stall by 30% and improving turbine cooling efficiency by 20%, validated through experimental test rigs, leading to fuel savings and reduced emissions.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>CFD Analysis of Axial Flow Compressors for Efficiency Improvement (2023)</li>
                <li>Blade Cooling Optimization in Gas Turbine Engines using CFD & FEA (2023)</li>
                <li>Structural and Vibration Analysis of Centrifugal Pump Impellers (2024)</li>
                <li>Multi-Objective Optimization of Wind Turbine Blade Aerodynamics (2024)</li>
                <li>Cavitation Prediction and Mitigation in Hydraulic Turbines (2024)</li>
                <li>Turbomachinery Blade Design using Genetic Algorithms (2024)</li>
                <li>Fluid–Structure Interaction in Rotating Turbomachinery Blades (2025)</li>
                <li>High-Performance Computing for Large-Scale Turbomachinery Simulations (2025)</li>
                <li>AI-Augmented CFD for Real-Time Turbomachinery Diagnostics (2025)</li>
                <li>Digital Twin Development for Gas Turbine Performance Monitoring (2025)</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-futurescope">
              <h2>Future Scope & Research Opportunities</h2>
              <ul>
                <li><strong>Digital Twins</strong>: Real-time monitoring and fault prediction in turbomachinery.</li>
                <li><strong>Sustainable Turbomachinery</strong>: Low-emission gas turbines, renewable wind/hydro systems.</li>
                <li><strong>Additive Manufacturing</strong>: 3D-printed turbine blades with advanced cooling channels.</li>
                <li><strong>AI & Machine Learning</strong>: Intelligent design optimization and predictive maintenance.</li>
                <li><strong>Hybrid Energy Systems</strong>: Integration with solar, fuel cells, and hydrogen power.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in Turbomachinery Design & Analysis project development for B.Tech, M.Tech, and Ph.D. students. With expertise in CAD, CFD, FEA, and AI-driven optimization, we provide IEEE-aligned (2023–2025) project support, experimental validation, and publication services in high-impact journals (IEEE, ASME, Elsevier, Springer). Our projects empower students to contribute to cutting-edge solutions in aerospace, energy, and automotive systems.
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
              <li><a href="/department/fluid-mechanics-dynamics">Fluid Mechanics & Dynamics</a></li>
              <li><a href="/department/fluid-mechanics-dynamics/computational-fluid-dynamics">Computational Fluid Dynamics</a></li>
              <li><a href="/department/fluid-mechanics-dynamics/turbomachinery-design">Turbomachinery Design</a></li>
              <li><a href="/department/fluid-mechanics-dynamics/aerodynamics-wind-tunnel">Aerodynamics & Wind Tunnel</a></li>
              <li><a href="/department/fluid-mechanics-dynamics/pump-valve-optimization">Pump & Valve Optimization</a></li>
              <li><a href="/department/fluid-mechanics-dynamics/microfluidics-lab">Microfluidics Lab</a></li>
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

export default METurbomachineryDesignAnalysisProjectDevelopmentCenter;
