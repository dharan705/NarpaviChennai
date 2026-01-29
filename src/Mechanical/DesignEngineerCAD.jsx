import "./MEProjectDevelopmentCenter.scss";
import Subsidebar from ".././pages/Subsidebar";
import SEO from "../assets/SEO";
import Leftsidebar from "../assets/Leftsidebar";

/* ✅ KEYWORDS ARRAY OBJECT */
const keywords = [
  "Design Engineering Project Development Center Chennai",
  "CAD CAM Project Development Center Chennai",
  "CAD CAM IEEE Projects 2023–2025",
  "FEA Project Development",
  "Topology Optimization Student Projects",
  "Mechanism Design IEEE Research",
  "PLM Project Ideas",
  "AI-Assisted CAD Modeling",
  "Multi-Physics Simulation Projects",
  "CAD CAM Integration Student Projects",
  "Smart Manufacturing Design Projects",
  "Narpavi Research Institute CAD CAM Projects"
];

const faqs = [
  {
    question: "What services does the Design Engineering / CAD & CAM Project Development Center offer?",
    answer:
      "Narpavi Research Institute's Design Engineering / CAD & CAM Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on FEA, topology optimization, mechanism design, AI-driven CAD, and PLM."
  },
  {
    question: "What types of CAD & CAM projects are supported?",
    answer:
      "We support B.Tech projects (basic CAD modeling, FEA), M.Tech projects (topology optimization, CAM integration), and Ph.D. projects (AI-driven design, digital twins)."
  },
  {
    question: "Which tools and technologies are used in CAD & CAM projects?",
    answer:
      "Our stack includes SolidWorks, AutoCAD, CATIA, ANSYS, Abaqus, MATLAB, Python, AI frameworks, PLM platforms, and CAM tools."
  },
  {
    question: "How are CAD & CAM projects aligned with IEEE standards?",
    answer:
      "Projects are based on IEEE Transactions (2023–2025) on Industrial Informatics and Manufacturing."
  },
  {
    question: "What support is provided for academic submissions?",
    answer:
      "We provide end-to-end guidance including CAD/FEA modeling, AI integration, CAM simulations, documentation, and IEEE/Scopus journal support."
  }
];

const MEDesignEngineeringCADCAMProjectDevelopmentCenter = () => {
  return (
    <div className="MEProjectDevelopmentCenter">

      {/* ✅ SEO FIXED */}
      <SEO
        title="Design Engineering / CAD & CAM – Project Development Center in Chennai"
        description="Design Engineering / CAD & CAM Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. students focusing on FEA, topology optimization, AI-driven CAD, CAM integration, PLM, and smart manufacturing (2023–2025)."
        url="/design-engineering-cad-cam-project-development-center-chennai"
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
            <h1>Design Engineering / CAD & CAM – Project Development Center in Chennai</h1>
                   <section className="MEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Design Engineering / CAD & CAM Project Development Center, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on FEA, topology optimization, mechanism design, AI-driven CAD, and PLM.
              </p>
              <p>
                Our projects leverage SolidWorks, CATIA, ANSYS, MATLAB, AI, and PLM platforms to address challenges in automotive, aerospace, and smart manufacturing, ensuring high-impact research and industrial relevance.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-importance">
              <h2>Importance of Design Engineering / CAD & CAM</h2>
              <ul>
                <li><strong>Efficient Design</strong>: Streamlines product development with precise 3D modeling.</li>
                <li><strong>Simulation Accuracy</strong>: Ensures component reliability through FEA and multi-physics analysis.</li>
                <li><strong>Optimization</strong>: Reduces material usage and weight with topology optimization.</li>
                <li><strong>Integration</strong>: Connects design with manufacturing via CAM and PLM.</li>
                <li><strong>Smart Manufacturing</strong>: Enhances Industry 4.0 with AI and digital twins.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-btech">
              <h2>B.Tech CAD & CAM Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational CAD/CAM projects aligned with IEEE topics.</p>
              <ul>
                <li>Learn CAD modeling with SolidWorks, AutoCAD, or CATIA</li>
                <li>Perform basic FEA for stress and deformation analysis</li>
                <li>Simulate simple kinematic mechanisms</li>
                <li>Validate designs against theoretical calculations</li>
              </ul>
              <p>Example: CAD modeling and FEA of a mechanical bracket.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-mtech">
              <h2>M.Tech CAD & CAM Project Development</h2>
              <p>For postgraduate students, projects focus on advanced CAD/CAM techniques and optimization.</p>
              <ul>
                <li>Conduct non-linear and thermal FEA simulations</li>
                <li>Apply topology optimization for lightweight designs</li>
                <li>Design multi-DOF mechanisms and simulate kinematics</li>
                <li>Integrate CAM for toolpath generation and CNC simulation</li>
              </ul>
              <p>Example: Topology optimization of an aerospace component using FEA.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-phd">
              <h2>Ph.D. CAD & CAM Project Development</h2>
              <p>For doctoral scholars, our center supports cutting-edge CAD/CAM research.</p>
              <ul>
                <li>Identify gaps in AI-driven design or multi-physics simulation</li>
                <li>Develop digital twins for real-time design validation</li>
                <li>Apply AI/ML for failure prediction and material selection</li>
                <li>Publish in IEEE, ASTM, Elsevier, and ISO-aligned journals</li>
              </ul>
              <p>Example: AI-driven digital twin for real-time CAD/CAM optimization.</p>
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
                      <td>FEA Software (ANSYS, Abaqus)</td>
                      <td>Automotive, Aerospace</td>
                      <td>Accurate structural analysis</td>
                      <td>High computational cost</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>CAD Modeling (SolidWorks, CATIA)</td>
                      <td>Mechanical & Manufacturing</td>
                      <td>Efficient 3D design & assembly</td>
                      <td>Learning curve</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>Topology Optimization Tools</td>
                      <td>Aerospace, Automotive</td>
                      <td>Lightweight, high-strength components</td>
                      <td>Complex algorithms</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>CAM Integration</td>
                      <td>CNC & Additive Manufacturing</td>
                      <td>Optimized machining efficiency</td>
                      <td>Integration complexity</td>
                      <td>M.Tech</td>
                    </tr>
                    <tr>
                      <td>PLM Platforms</td>
                      <td>Multi-Disciplinary Manufacturing</td>
                      <td>Collaboration, lifecycle tracking</td>
                      <td>Data management overhead</td>
                      <td>Ph.D.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="MEProjectDevelopmentCenter-keyareas">
              <h2>Key Research & Project Areas</h2>
              <ul>
                <li><strong>Finite Element Analysis (FEA):</strong> Structural, fatigue, and multi-physics simulations.</li>
                <li><strong>CAD Modeling & Simulation:</strong> Parametric modeling, assembly simulation, virtual prototyping.</li>
                <li><strong>Mechanism Design & Kinematics:</strong> Multi-DOF mechanisms, motion analysis, load optimization.</li>
                <li><strong>Topology Optimization:</strong> AI-assisted lightweight design, additive manufacturing compatibility.</li>
                <li><strong>Product Lifecycle Management (PLM):</strong> Collaborative design, version control, digital twin integration.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-casestudy">
              <h2>Case Study – Topology Optimization in Aerospace Components</h2>
              <p>
                IEEE research (2023–2025) shows that topology-optimized aerospace components reduce structural weight by 20–35% while maintaining strength. FEA and digital twin simulations enable lightweight, high-performance parts suitable for additive and conventional manufacturing.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-Assisted FEA for Predictive Structural Component Design (2023)</li>
                <li>Topology Optimization of Aerospace and Automotive Components (2023)</li>
                <li>CAD-CAM Integration for Precision Manufacturing of Complex Parts (2024)</li>
                <li>Mechanism Design and Multi-DOF Kinematics Simulation (2024)</li>
                <li>Digital Twin Implementation for Product Lifecycle Management (2024)</li>
                <li>AI-Based Failure Prediction in Mechanical Components Using FEA (2025)</li>
                <li>CAM-Driven Optimization of Toolpath for High-Speed Machining (2025)</li>
                <li>Topology Optimization for Additive Manufacturing Applications (2025)</li>
                <li>Multi-Physics Simulation for Thermal and Structural Component Analysis (2025)</li>
                <li>Smart PLM Framework for Collaborative CAD/CAM Projects (2025)</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-futurescope">
              <h2>Future Scope & Research Opportunities</h2>
              <ul>
                <li><strong>AI-Driven Design Automation:</strong> Autonomous CAD modeling and simulation.</li>
                <li><strong>Digital Twins & Smart Manufacturing:</strong> Real-time validation of design and process efficiency.</li>
                <li><strong>Topology Optimization:</strong> Lightweight, high-strength components for additive manufacturing.</li>
                <li><strong>PLM Integration with IoT:</strong> Seamless data management and lifecycle tracking.</li>
                <li><strong>Multi-Physics FEA:</strong> Advanced simulations combining structural, thermal, and fluid interactions.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in Design Engineering / CAD & CAM project development for B.Tech, M.Tech, and Ph.D. students. With expertise in FEA, topology optimization, mechanism design, AI-driven CAD, and PLM, we provide IEEE-aligned (2023–2025) project support and publication services in high-impact journals (IEEE, ASTM, Elsevier). Our projects empower students to contribute to cutting-edge solutions in automotive, aerospace, and smart manufacturing.
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

export default MEDesignEngineeringCADCAMProjectDevelopmentCenter;
