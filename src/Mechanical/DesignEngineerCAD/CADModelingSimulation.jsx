import "../MEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "CAD Modeling & Simulation Project Development Center in Chennai",
  "CAD Modeling Simulation IEEE Projects 2023–2025",
  "IEEE CAD Project Topics",
  "Generative CAD Design Projects",
  "AI Driven CAD Modeling",
  "Cloud Based CAD Simulation",
  "VR AR CAD Applications",
  "Digital Twin CAD Projects",
  "Automotive CAD Simulation",
  "Aerospace CAD Optimization",
  "Narpavi Research Institute CAD Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question: "What services does the CAD Modeling & Simulation Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s CAD Modeling & Simulation Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on AI-driven CAD, generative design, cloud-based CAD, VR/AR integration, and digital twin-enabled design."
  },
  {
    question: "What types of CAD Modeling & Simulation projects are supported?",
    answer:
      "We support B.Tech, M.Tech, and Ph.D. projects covering 2D/3D CAD modeling, stress and motion simulation, generative design, digital twins, and VR/AR-based design systems."
  },
  {
    question: "Which tools and technologies are used?",
    answer:
      "SolidWorks, CATIA, Creo, Fusion 360, AutoCAD, ANSYS, MATLAB, Python, TensorFlow, Keras, and VR/AR platforms."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects align with IEEE Transactions (2023–2025) on Industrial Informatics and Manufacturing Systems."
  },
  {
    question: "What academic support is provided?",
    answer:
      "Complete guidance including topic selection, CAD modeling, simulation, AI/VR integration, documentation, and IEEE/Scopus/Elsevier publications."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "CAD Modeling & Simulation – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) CAD Modeling & Simulation Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering SolidWorks, CATIA, ANSYS, AI-driven CAD, generative design, digital twins, and VR/AR integration.";

const pageUrl =
  "/department/design-engineering-cad/cad-modeling-simulation";

const MECADModelingSimulationProjectDevelopmentCenter = () => {
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
            {/* ✅ ONLY ONE H1 */}
            <h1>{pageTitle}</h1>
  <section className="MEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the CAD Modeling & Simulation Project Development Center, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on AI-driven CAD, generative design, cloud-based CAD, VR/AR integration, and digital twin-enabled design cycles.
              </p>
              <p>
                Our projects leverage SolidWorks, CATIA, ANSYS, MATLAB, AI, and VR/AR tools to address challenges in automotive, aerospace, biomedical, and smart manufacturing, ensuring high-impact research and industrial relevance.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-importance">
              <h2>Importance of CAD Modeling & Simulation</h2>
              <ul>
                <li><strong>Design Efficiency</strong>: Enables precise 3D modeling and visualization.</li>
                <li><strong>Simulation Accuracy</strong>: Validates performance through stress, kinematic, and thermal simulations.</li>
                <li><strong>Optimization</strong>: Reduces material and weight with generative design.</li>
                <li><strong>Cost Reduction</strong>: Minimizes physical prototyping with virtual testing.</li>
                <li><strong>Industry 4.0 Integration</strong>: Supports digital twins, AI, and cloud-based workflows.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-btech">
              <h2>B.Tech CAD Modeling & Simulation Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational CAD and simulation projects aligned with IEEE topics.</p>
              <ul>
                <li>Learn CAD tools like SolidWorks, CATIA, Creo, or AutoCAD</li>
                <li>Model basic 2D/3D parts and assemblies</li>
                <li>Perform simple stress and kinematic simulations</li>
                <li>Create engineering drawings and visualizations</li>
              </ul>
              <p>Example: 3D modeling and stress simulation of an automotive gear.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-mtech">
              <h2>M.Tech CAD Modeling & Simulation Project Development</h2>
              <p>For postgraduate students, projects focus on advanced CAD modeling and simulation techniques.</p>
              <ul>
                <li>Develop parametric and freeform 3D models</li>
                <li>Simulate assemblies for motion and interference</li>
                <li>Integrate FEA for stress, thermal, and fatigue analysis</li>
                <li>Optimize designs using generative and topology tools</li>
              </ul>
              <p>Example: Generative design of a lightweight aerospace bracket.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-phd">
              <h2>Ph.D. CAD Modeling & Simulation Project Development</h2>
              <p>For doctoral scholars, our center supports cutting-edge CAD research.</p>
              <ul>
                <li>Identify gaps in AI-driven CAD or VR/AR integration</li>
                <li>Develop multi-physics simulations and digital twins</li>
                <li>Apply AI for automated geometry and predictive design</li>
                <li>Publish in IEEE, ASTM, Elsevier, and ISO-aligned journals</li>
              </ul>
              <p>Example: AI-driven digital twin for real-time CAD validation in smart manufacturing.</p>
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
                      <td>2D CAD Drafting</td>
                      <td>Construction, Civil Engineering</td>
                      <td>Quick layouts and schematics</td>
                      <td>Limited to 2D representations</td>
                      <td>B.Tech</td>
                    </tr>
                    <tr>
                      <td>3D Solid Modeling</td>
                      <td>Automotive, Aerospace</td>
                      <td>Accurate design visualization</td>
                      <td>Requires advanced skills</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>Assembly Simulation</td>
                      <td>Robotics, Machinery</td>
                      <td>Interference and motion analysis</td>
                      <td>Complex assemblies</td>
                      <td>M.Tech</td>
                    </tr>
                    <tr>
                      <td>Generative Design</td>
                      <td>Aerospace, Biomedical</td>
                      <td>Lightweight, optimized structures</td>
                      <td>Algorithm complexity</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Digital Twin CAD</td>
                      <td>Smart Manufacturing, Industry 4.0</td>
                      <td>Real-time product monitoring</td>
                      <td>Data integration challenges</td>
                      <td>Ph.D.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="MEProjectDevelopmentCenter-keyareas">
              <h2>Key Research & Project Areas</h2>
              <ul>
                <li><strong>CAD Modeling Focus:</strong> Parametric, surface, freeform modeling, and kinematic assemblies.</li>
                <li><strong>CAD Simulation Focus:</strong> Structural, kinematic, thermal, and fluid simulations.</li>
                <li><strong>Optimization Focus:</strong> Generative design, topology optimization, additive manufacturing compatibility.</li>
                <li><strong>Industry Applications:</strong> Automotive (engine parts), aerospace (wing components), biomedical (implants), manufacturing (tooling).</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-casestudy">
              <h2>Case Study – Generative Design in Aerospace</h2>
              <p>
                IEEE studies (2023–2025) show that Generative CAD combined with FEA simulation reduces aerospace component weight by 20–40% without compromising safety. This approach is applied in aircraft brackets, turbine housings, and satellite structures, driving sustainability and cost efficiency.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-Driven Generative Design for Aerospace Components in CAD (2023)</li>
                <li>Cloud-Based CAD Collaboration for Product Lifecycle Management (2023)</li>
                <li>CAD-Integrated Multi-Physics Simulation for Smart Manufacturing (2024)</li>
                <li>Digital Twin CAD Modeling for Industry 4.0 Applications (2024)</li>
                <li>VR/AR-Enhanced CAD Design Review Systems (2024)</li>
                <li>Generative Design and Additive Manufacturing Integration (2025)</li>
                <li>Assembly Simulation and Tolerance Optimization in CAD Systems (2025)</li>
                <li>AI-Powered CAD Automation for Product Development (2025)</li>
                <li>CAD-Based Optimization of Biomedical Implant Structures (2025)</li>
                <li>Kinematic Simulation of Robotic Mechanisms in CAD (2025)</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-futurescope">
              <h2>Future Scope & Research Opportunities</h2>
              <ul>
                <li><strong>AI-Enhanced CAD:</strong> Automated geometry and predictive modeling.</li>
                <li><strong>Cloud-Based Design Collaboration:</strong> Global team integration for multi-user design.</li>
                <li><strong>VR/AR in Product Design:</strong> Immersive visualization for design reviews.</li>
                <li><strong>Digital Twin-Enabled CAD:</strong> Real-time design validation and lifecycle monitoring.</li>
                <li><strong>Sustainable CAD Practices:</strong> Design for eco-friendly and recyclable materials.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in CAD Modeling & Simulation project development for B.Tech, M.Tech, and Ph.D. students. With expertise in SolidWorks, CATIA, ANSYS, AI, VR/AR, and digital twins, we provide IEEE-aligned (2023–2025) project support and publication services in high-impact journals (IEEE, ASTM, Elsevier). Our projects empower students to contribute to cutting-edge solutions in automotive, aerospace, biomedical, and smart manufacturing.
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
              <li><a href="/department/design-engineering-cad">Design Engineering & CAD</a></li>
              <li><a href="/department/design-engineering-cad/finite-element-analysis">Finite Element Analysis</a></li>
              <li><a href="/department/design-engineering-cad/cad-modeling-simulation">CAD Modeling & Simulation</a></li>
              <li><a href="/department/design-engineering-cad/mechanism-design">Mechanism Design</a></li>
              <li><a href="/department/design-engineering-cad/topology-optimization">Topology Optimization</a></li>
              <li><a href="/department/design-engineering-cad/product-lifecycle-management">Product Lifecycle Management</a></li>
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

export default MECADModelingSimulationProjectDevelopmentCenter;
