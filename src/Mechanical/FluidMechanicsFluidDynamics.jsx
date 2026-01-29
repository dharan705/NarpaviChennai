import "./MEProjectDevelopmentCenter.scss";
import Subsidebar from ".././pages/Subsidebar";
import SEO from "../assets/SEO";
import Leftsidebar from "../assets/Leftsidebar";

/* ✅ KEYWORDS ARRAY OBJECT */
const keywords = [
  "Fluid Mechanics Project Development Center Chennai",
  "Fluid Dynamics Project Development Center Chennai",
  "CFD Project Development Chennai",
  "Fluid Dynamics IEEE Projects 2023–2025",
  "Turbomachinery Design Projects",
  "Aerodynamics Student Projects",
  "Microfluidics IEEE Projects",
  "Energy Efficient Fluid Systems",
  "Experimental Fluid Mechanics Projects",
  "Narpavi Research Institute Fluid Mechanics Projects"
];

const faqs = [
  {
    question: "What services does the Fluid Mechanics / Fluid Dynamics Project Development Center offer?",
    answer:
      "Narpavi Research Institute's Fluid Mechanics / Fluid Dynamics Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on CFD, turbomachinery, microfluidics, and fluid flow optimization."
  },
  {
    question: "What types of Fluid Mechanics / Fluid Dynamics projects are supported?",
    answer:
      "We support B.Tech projects, M.Tech projects, and Ph.D. projects covering CFD, multiphase flows, turbomachinery, aerodynamics, and biofluid applications."
  },
  {
    question: "Which tools are used in Fluid Mechanics projects?",
    answer:
      "Tools include ANSYS Fluent, COMSOL, MATLAB, OpenFOAM, CFD software, AI frameworks, and experimental fluid dynamics setups."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are aligned with IEEE Transactions (2023–2025) focusing on CFD, turbulence modeling, and advanced fluid dynamics."
  },
  {
    question: "What academic support is provided?",
    answer:
      "End-to-end guidance including CFD simulations, experimental validation, documentation, and IEEE/Scopus publication support."
  }
];

const MEFluidMechanicsFluidDynamicsProjectDevelopmentCenter = () => {
  return (
    <div className="MEProjectDevelopmentCenter">

      {/* ✅ SEO FIXED */}
      <SEO
        title="Fluid Mechanics / Fluid Dynamics – Project Development Center in Chennai"
        description="Fluid Mechanics / Fluid Dynamics Project Development Center in Chennai offering IEEE-aligned (2023–2025) CFD, turbomachinery, aerodynamics, microfluidics, and experimental fluid mechanics projects for B.Tech, M.Tech, and Ph.D. students."
        url="/fluid-mechanics-fluid-dynamics-project-development-center-chennai"
        keywords={keywords}
        faqs={faqs}
      />

      <Subsidebar
        extraLinks={[
          { id: "mech", label: "mech", path: "/department?dept=mech" }
        ]}
      />

      <div className="MEProjectDevelopmentCenter-main">
        <div className="MEProjectDevelopmentCenter-grid">

          {/* ✅ LEFT SIDEBAR */}
          <aside className="left-sidebar2">
          <Leftsidebar/>
          </aside>

          {/* ❌ MAIN CONTENT (UNCHANGED) */}
          <div className="MEProjectDevelopmentCenter-center">
            <h1>Fluid Mechanics / Fluid Dynamics – Project Development Center in Chennai</h1>
                <section className="MEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Fluid Mechanics / Fluid Dynamics Project Development Center, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on fluid flow optimization, CFD, turbomachinery, and microfluidics.
              </p>
              <p>
                Our projects address applications in aerospace, automotive, energy, biomedical, and environmental systems, leveraging advanced CFD tools, experimental fluid dynamics, and AI-driven optimization for innovative solutions.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-importance">
              <h2>Importance of Fluid Mechanics / Fluid Dynamics</h2>
              <ul>
                <li><strong>Aerospace & Automotive</strong>: Optimizes aerodynamics for fuel efficiency and performance.</li>
                <li><strong>Energy Systems</strong>: Enhances turbine and pump efficiency for power generation.</li>
                <li><strong>Biomedical Applications</strong>: Supports microfluidics for diagnostics and drug delivery.</li>
                <li><strong>Environmental Solutions</strong>: Improves water distribution and pollution control systems.</li>
                <li><strong>Smart Technology</strong>: Integrates AI for predictive fluid flow modeling.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-btech">
              <h2>B.Tech Fluid Mechanics / Fluid Dynamics Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational fluid mechanics projects aligned with IEEE topics.</p>
              <ul>
                <li>Learn fundamentals of laminar/turbulent flow and Bernoulli's principle</li>
                <li>Simulate fluid flow using ANSYS Fluent, COMSOL, or MATLAB</li>
                <li>Conduct experiments with wind tunnels, pipe flow, or pump rigs</li>
                <li>Validate results against theoretical predictions</li>
              </ul>
              <p>Example: Pipe flow analysis for friction factor optimization using CFD and experimental setups.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Fluid Mechanics / Fluid Dynamics Project Development</h2>
              <p>For postgraduate students, projects focus on advanced CFD and optimization techniques.</p>
              <ul>
                <li>Formulate industrial problems (e.g., turbine blades, aerospace wings)</li>
                <li>Apply turbulence models (k-ε, LES, RANS) and multiphase flow simulations</li>
                <li>Integrate fluid-thermal and biofluid modeling</li>
                <li>Validate with experimental fluid dynamics (EFD)</li>
              </ul>
              <p>Example: CFD optimization of centrifugal pump performance using machine learning.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Fluid Mechanics / Fluid Dynamics Project Development</h2>
              <p>For doctoral scholars, our center supports cutting-edge research in fluid dynamics.</p>
              <ul>
                <li>Identify gaps in bio-inspired aerodynamics, microfluidics, or AI-driven CFD</li>
                <li>Develop deep learning-based flow prediction models</li>
                <li>Build prototypes (e.g., turbulence reduction systems, lab-on-chip devices)</li>
                <li>Publish in IEEE, ASME, Elsevier, and Springer journals</li>
              </ul>
              <p>Example: AI-accelerated CFD for biofluid dynamics in cardiovascular systems.</p>
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
                      <td>Computational Fluid Dynamics (CFD)</td>
                      <td>Aerospace, Automotive, Civil Eng.</td>
                      <td>Accurate flow prediction, design optimization</td>
                      <td>High computational complexity</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>Turbomachinery Design Tools</td>
                      <td>Energy, Power Plants</td>
                      <td>Higher efficiency, reduced losses</td>
                      <td>Complex blade geometry design</td>
                      <td>M.Tech</td>
                    </tr>
                    <tr>
                      <td>Wind Tunnel Testing</td>
                      <td>Aerospace, Automotive</td>
                      <td>Experimental validation of aerodynamics</td>
                      <td>High setup and maintenance costs</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>Microfluidics & Lab-on-Chip</td>
                      <td>Biomedical Engineering</td>
                      <td>Miniaturized diagnostics, drug delivery</td>
                      <td>Fabrication complexity, scalability</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Pump & Valve Optimization</td>
                      <td>Water Supply, Oil & Gas</td>
                      <td>Energy savings, reliability</td>
                      <td>Material wear and cavitation</td>
                      <td>B.Tech</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="MEProjectDevelopmentCenter-casestudy">
              <h2>Case Study – CFD in Aerospace Applications</h2>
              <p>
                In aerospace, CFD optimizes aircraft wing designs by reducing drag and improving lift-to-drag ratios. IEEE research (2023–2025) highlights AI-accelerated CFD models that cut simulation time by 60% while maintaining accuracy. Turbulence modeling (e.g., LES, RANS) has improved jet engine fuel efficiency by up to 15%, validated through wind tunnel experiments.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>CFD-Based Analysis of Supersonic Jet Flows Using Turbulence Models (2023)</li>
                <li>AI-Accelerated Computational Fluid Dynamics for Aerospace Applications (2023)</li>
                <li>Experimental and CFD Validation of Wind Turbine Blade Aerodynamics (2024)</li>
                <li>Optimization of Centrifugal Pump Performance Using CFD and Machine Learning (2024)</li>
                <li>Microfluidic Channel Design for Lab-on-Chip Biomedical Applications (2024)</li>
                <li>Multiphase Flow Simulation for Oil & Gas Pipeline Systems (2025)</li>
                <li>CFD-Assisted Design of Energy-Efficient HVAC Duct Systems (2025)</li>
                <li>Wind Tunnel and CFD Analysis of Automotive Aerodynamics (2025)</li>
                <li>Biofluid Dynamics Modeling for Cardiovascular Flow Analysis (2025)</li>
                <li>Hybrid Experimental-CFD Approach for Heat Exchanger Optimization (2025)</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-futurescope">
              <h2>Future Scope & Research Opportunities</h2>
              <ul>
                <li><strong>Aerospace & Automotive</strong>: AI-driven CFD for aerodynamic optimization.</li>
                <li><strong>Biomedical</strong>: Microfluidics for advanced diagnostics and drug delivery.</li>
                <li><strong>Renewable Energy</strong>: Optimized wind and hydro-turbine designs.</li>
                <li><strong>Smart Cities</strong>: Fluid dynamics for water distribution and pollution control.</li>
                <li><strong>AI Integration</strong>: Machine learning for faster CFD and predictive control.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in project development and publication support for B.Tech, M.Tech, and Ph.D. students. With expertise in Fluid Mechanics, Fluid Dynamics, and CFD, we provide IEEE-aligned project development, simulation guidance, experimental validation, and publication services in high-impact journals (IEEE, ASME, Elsevier, Springer). Our Fluid Mechanics / Fluid Dynamics projects empower students to contribute to cutting-edge solutions in aerospace, automotive, energy, biomedical, and environmental systems.
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

export default MEFluidMechanicsFluidDynamicsProjectDevelopmentCenter;
