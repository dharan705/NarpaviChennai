import "../MEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Additive Manufacturing / 3D Printing Project Development Center in Chennai",
  "Additive Manufacturing IEEE Projects 2023–2025",
  "3D Printing Project Development",
  "AI Additive Manufacturing Projects",
  "Topology Optimization 3D Printing",
  "Metal 3D Printing PhD Projects",
  "Biomedical 3D Printing Research",
  "IoT Enabled 3D Printing Systems",
  "Hybrid Manufacturing Systems",
  "Narpavi Research Institute 3D Printing Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Additive Manufacturing / 3D Printing Project Development Center offer?",
    answer:
      "Narpavi Research Institute supports IEEE-aligned (2023–2025) projects on design optimization, material development, AI-driven additive manufacturing, and IoT-integrated 3D printing."
  },
  {
    question: "Who can apply for these projects?",
    answer:
      "B.Tech, M.Tech, and Ph.D. students from Mechanical, Manufacturing, and Production Engineering streams."
  },
  {
    question: "Which tools and technologies are used?",
    answer:
      "SolidWorks, AutoCAD, Fusion 360, ANSYS, MATLAB, Python, AI frameworks, IoT platforms, and AM machines such as FDM, SLA, SLS, SLM, and EBM."
  },
  {
    question: "Are projects IEEE aligned?",
    answer:
      "Yes, projects align with IEEE Transactions (2023–2025) on Manufacturing and Industrial Engineering."
  },
  {
    question: "Is publication support provided?",
    answer:
      "Yes, IEEE, Scopus, Elsevier, ASTM journal and patent support is provided."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Additive Manufacturing / 3D Printing – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Additive Manufacturing / 3D Printing Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering AI-driven AM, topology optimization, metal 3D printing, IoT monitoring, and digital twins.";

const pageUrl =
  "/department/manufacturing-production/additive-manufacturing";

const MEAdditiveManufacturingProjectDevelopmentCenter = () => {
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
                <strong>Narpavi Research Institute</strong> presents the Additive Manufacturing / 3D Printing Project Development Center, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on design optimization, material development, AI-driven 3D printing, and IoT-integrated AM systems.
              </p>
              <p>
                Our projects leverage CAD/FEM, material science, AI, and IoT to address challenges in aerospace, biomedical, automotive, and defense industries, ensuring high-impact research and industrial relevance.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-importance">
              <h2>Importance of Additive Manufacturing / 3D Printing</h2>
              <ul>
                <li><strong>Complex Geometries</strong>: Enables intricate designs unachievable with traditional methods.</li>
                <li><strong>Rapid Prototyping</strong>: Accelerates product development cycles.</li>
                <li><strong>Material Efficiency</strong>: Reduces waste through layer-by-layer fabrication.</li>
                <li><strong>Customization</strong>: Supports tailored solutions for biomedical and aerospace applications.</li>
                <li><strong>Industry 4.0 Integration</strong>: Enhances smart manufacturing with AI and IoT.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-btech">
              <h2>B.Tech Additive Manufacturing Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational 3D printing projects aligned with IEEE topics.</p>
              <ul>
                <li>Learn FDM, SLA, and SLS 3D printing technologies</li>
                <li>Design parts using SolidWorks, AutoCAD, or Fusion 360</li>
                <li>Fabricate simple components with desktop 3D printers</li>
                <li>Test surface finish, accuracy, and mechanical strength</li>
              </ul>
              <p>Example: 3D printing of a polymer prototype for structural analysis.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Additive Manufacturing Project Development</h2>
              <p>For postgraduate students, projects focus on advanced AM processes and optimization.</p>
              <ul>
                <li>Analyze AM processes for metals, polymers, and composites</li>
                <li>Apply generative design and topology optimization</li>
                <li>Conduct material characterization and FEM simulations</li>
                <li>Integrate AM with CNC for hybrid manufacturing</li>
              </ul>
              <p>Example: Topology optimization of a 3D-printed aerospace bracket.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Additive Manufacturing Project Development</h2>
              <p>For doctoral scholars, our center supports cutting-edge AM research.</p>
              <ul>
                <li>Identify gaps in multi-material printing, defect prediction, or quality assurance</li>
                <li>Develop digital twins and AI-driven defect detection models</li>
                <li>Explore novel materials like bio-compatible polymers or lightweight alloys</li>
                <li>Publish in IEEE, ASTM, Elsevier, and ISO-aligned journals</li>
              </ul>
              <p>Example: Digital twin for real-time monitoring of metal 3D printing.</p>
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
                      <td>FDM (Fused Deposition Modeling)</td>
                      <td>Prototyping, Education</td>
                      <td>Low cost, quick prototyping</td>
                      <td>Limited material strength</td>
                      <td>B.Tech</td>
                    </tr>
                    <tr>
                      <td>SLA (Stereolithography)</td>
                      <td>Biomedical, Dental</td>
                      <td>High accuracy, fine surface finish</td>
                       <td>Fragile resin parts</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>SLS (Selective Laser Sintering)</td>
                      <td>Aerospace, Automotive</td>
                      <td>Complex geometries, high strength</td>
                      <td>High equipment cost</td>
                      <td>M.Tech</td>
                    </tr>
                    <tr>
                      <td>Metal AM (SLM, EBM)</td>
                      <td>Defense, Aerospace, Tooling</td>
                      <td>Lightweight, high-performance parts</td>
                      <td>Material and process complexity</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Hybrid AM + CNC</td>
                      <td>Manufacturing, R&D</td>
                      <td>Precision, reduced post-processing</td>
                      <td>Integration challenges</td>
                      <td>Ph.D.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="MEProjectDevelopmentCenter-keyareas">
              <h2>Key Research & Project Areas</h2>
              <ul>
                <li><strong>Design Optimization:</strong> Generative design, topology optimization, lattice structures for biomedical implants.</li>
                <li><strong>Material Development:</strong> Metal powders, bio-compatible polymers, composite materials.</li>
                <li><strong>Process Improvements:</strong> Multi-material printing, AI-driven defect detection, energy-efficient AM.</li>
                <li><strong>Applications in Industry:</strong> Aerospace (turbine blades), automotive (chassis components), biomedical (prosthetics, scaffolds), defense (spare parts).</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-casestudy">
              <h2>Case Study – Additive Manufacturing in Aerospace</h2>
              <p>
                In aerospace, 3D-printed titanium and composite parts reduce aircraft weight by up to 30%, leading to significant fuel savings. IEEE studies (2023–2025) highlight AM-enabled turbine components improving performance and lowering lifecycle costs. AI-driven defect detection ensures zero-defect manufacturing, critical for flight safety.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-Enabled Defect Detection in Additive Manufacturing Using Deep Learning (2023)</li>
                <li>Topology Optimization of Aerospace Structures Using 3D Printing (2023)</li>
                <li>IoT-Integrated 3D Printers for Real-Time Process Monitoring (2024)</li>
                <li>Digital Twin Framework for Metal Additive Manufacturing (2024)</li>
                <li>Multi-Material 3D Printing for Customized Biomedical Implants (2024)</li>
                <li>Thermal Stress Simulation in SLM (Selective Laser Melting) Processes (2025)</li>
                <li>Hybrid CNC–Additive Manufacturing for Precision Engineering (2025)</li>
                <li>Energy-Efficient AM Processes Using Reinforcement Learning Models (2025)</li>
                <li>Blockchain-Enabled Supply Chain for Additive Manufacturing Parts (2025)</li>
                <li>Cryogenic Cooling Techniques for Defect-Free Metal AM (2025)</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-futurescope">
              <h2>Future Scope & Research Opportunities</h2>
              <ul>
                <li><strong>Industry 4.0 Integration:</strong> Smart factories with IoT, cloud, and AM systems.</li>
                <li><strong>Sustainable AM:</strong> Recycling waste into printable materials.</li>
                <li><strong>Biomedical Breakthroughs:</strong> Bioprinting of tissues and organs.</li>
                <li><strong>Aerospace Innovations:</strong> On-demand in-space 3D printing for satellites.</li>
                <li><strong>Digital Twins & AI:</strong> Self-learning AM systems for autonomous production.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in Additive Manufacturing / 3D Printing project development for B.Tech, M.Tech, and Ph.D. students. With expertise in CAD/FEM, material science, AI, IoT, and advanced AM systems (FDM, SLA, SLS, SLM, EBM), we provide IEEE-aligned (2023–2025) project support and publication services in high-impact journals (IEEE, ASTM, Elsevier). Our projects empower students to contribute to cutting-edge solutions in aerospace, biomedical, automotive, and defense industries.
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
              <li><a href="/department/manufacturing-production">Manufacturing & Production Engineering</a></li>
              <li><a href="/department/manufacturing-production/cnc-machining-optimization">CNC Machining Optimization</a></li>
              <li><a href="/department/manufacturing-production/additive-manufacturing">Additive Manufacturing</a></li>
              <li><a href="/department/manufacturing-production/industrial-automation-robotics">Industrial Automation & Robotics</a></li>
              <li><a href="/department/manufacturing-production/smart-manufacturing-systems">Smart Manufacturing Systems</a></li>
              <li><a href="/department/manufacturing-production/tool-design-process">Tool Design & Process</a></li>
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

export default MEAdditiveManufacturingProjectDevelopmentCenter;
