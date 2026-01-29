import "../MEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Composite Materials Analysis Project Development Center in Chennai",
  "IEEE Composite Materials Projects 2023–2025",
  "Polymer Matrix Composite Projects",
  "Nanocomposite Simulation Projects",
  "Hybrid Composite Optimization",
  "Smart Composite IEEE Projects",
  "FEA in Composites",
  "AI Driven Composite Analysis",
  "PhD Composite Research",
  "Narpavi Research Institute Composite Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Composite Materials Analysis Project Development Center offer?",
    answer:
      "Narpavi Research Institute supports IEEE-aligned (2023–2025) projects on polymer matrix composites, nanocomposites, hybrid composites, and smart materials."
  },
  {
    question: "Who can apply for Composite Materials Analysis projects?",
    answer:
      "B.Tech, M.Tech, and Ph.D. students from Mechanical, Materials, and Civil Engineering backgrounds."
  },
  {
    question: "Which tools are used?",
    answer:
      "ANSYS, ABAQUS, SolidWorks, CATIA, MATLAB, Python, AI libraries, and additive manufacturing."
  },
  {
    question: "Are projects IEEE aligned?",
    answer:
      "Yes. Projects align with IEEE Transactions (2023–2025) and IEEE/ASTM/ISO standards."
  },
  {
    question: "Is journal and patent support provided?",
    answer:
      "Yes. IEEE, SCI, Scopus, Elsevier journal and patent assistance is provided."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Composite Materials Analysis – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Composite Materials Analysis Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. students focusing on polymer matrix composites, nanocomposites, hybrid composites, smart materials, and AI-driven analysis.";

const pageUrl =
  "/department/mechanical-properties-materials/composite-materials-analysis";

const MECompositeMaterialsAnalysisProjectDevelopmentCenter = () => {
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
                <strong>Narpavi Research Institute</strong> presents the Composite Materials Analysis Project Development Center, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on polymer matrix composites, nanocomposites, hybrid composites, and smart materials for applications in aerospace, automotive, renewable energy, and biomedical engineering.
              </p>
              <p>
                Our projects leverage ANSYS, ABAQUS, MATLAB, and additive manufacturing to address challenges in lightweight design, fatigue analysis, and smart material integration, ensuring high-impact research and industrial applicability.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-trends">
              <h2>Global Trends & Industry Context</h2>
              <ul>
                <li><strong>Aerospace & Defense:</strong> Composites reduce airframe weight by 30–40%, enhancing fuel efficiency.</li>
                <li><strong>Automotive & Transportation:</strong> Lightweight composites improve EV range and crash resistance.</li>
                <li><strong>Renewable Energy & Infrastructure:</strong> Composites in wind turbine blades and FRP for seismic retrofitting.</li>
                <li><strong>Biomedical Engineering:</strong> Biocompatible composites for prosthetics and implants.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-btech">
              <h2>B.Tech Composite Materials Analysis Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational composite material projects aligned with IEEE topics.</p>
              <ul>
                <li>Review IEEE publications on polymer and hybrid composites</li>
                <li>Model composite structures using ANSYS or SolidWorks</li>
                <li>Conduct tensile or flexural strength tests</li>
                <li>Compare simulation and experimental results</li>
              </ul>
              <p>Example: Tensile testing of fiber-reinforced polymer beams with ANSYS simulation.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Composite Materials Analysis Project Development</h2>
              <p>For postgraduate students, projects focus on advanced composite challenges.</p>
              <ul>
                <li>Address issues like delamination or thermal degradation</li>
                <li>Perform multi-scale modeling with ANSYS or ABAQUS</li>
                <li>Explore nanofillers like graphene or CNTs in composites</li>
                <li>Validate against benchmark datasets or lab results</li>
              </ul>
              <p>Example: Multi-scale simulation of graphene-reinforced composites.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Composite Materials Analysis Project Development</h2>
              <p>For doctoral scholars, our center supports cutting-edge composite research.</p>
              <ul>
                <li>Identify gaps in smart composites or AI-driven defect detection</li>
                <li>Develop digital twins for damage progression analysis</li>
                <li>Fabricate hybrid composites with nanomaterials</li>
                <li>Publish in IEEE, SCI, or Scopus-indexed journals</li>
              </ul>
              <p>Example: AI-driven defect detection in polymer matrix composites.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-table1">
              <h2>Comparative Table – Composite Types</h2>
              <div className="MEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Composite Type</th>
                      <th>Industry Application</th>
                      <th>Advantages</th>
                      <th>Limitations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Polymer Matrix Composites (PMC)</td>
                      <td>Aerospace, Automobiles</td>
                      <td>Lightweight, easy processing</td>
                      <td>Lower temperature resistance</td>
                    </tr>
                    <tr>
                      <td>Metal Matrix Composites (MMC)</td>
                      <td>Defense, Spacecraft</td>
                      <td>High strength, thermal resistance</td>
                      <td>Expensive, machining difficulty</td>
                    </tr>
                    <tr>
                      <td>Ceramic Matrix Composites (CMC)</td>
                      <td>Jet Engines, Turbines</td>
                      <td>High-temperature stability</td>
                      <td>Brittle, costly</td>
                    </tr>
                    <tr>
                      <td>Nanocomposites</td>
                      <td>Biomedical, Electronics</td>
                      <td>High multifunctionality</td>
                      <td>Synthesis challenges</td>
                    </tr>
                    <tr>
                      <td>Hybrid Composites</td>
                      <td>Marine, Renewable Energy</td>
                      <td>Balance of properties</td>
                      <td>Complex manufacturing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="MEProjectDevelopmentCenter-table2">
              <h2>Comparative Table – Tools & Platforms</h2>
              <div className="MEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Tool/Platform</th>
                      <th>Application</th>
                      <th>Benefit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ANSYS/ABAQUS</td>
                      <td>Structural analysis</td>
                      <td>Accurate FEA modeling</td>
                    </tr>
                    <tr>
                      <td>MATLAB</td>
                      <td>Algorithm development</td>
                      <td>Multi-scale simulation</td>
                    </tr>
                    <tr>
                      <td>SolidWorks/CATIA</td>
                      <td>CAD modeling</td>
                      <td>Industrial-grade design</td>
                    </tr>
                    <tr>
                      <td>Python + AI Libraries</td>
                      <td>Defect detection</td>
                      <td>Smart predictive analysis</td>
                    </tr>
                    <tr>
                      <td>3D Printing</td>
                      <td>Composite prototyping</td>
                      <td>Rapid manufacturing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="MEProjectDevelopmentCenter-casestudies">
              <h2>Case Studies – Composite Applications</h2>
              <ul>
                <li><strong>Aerospace:</strong> Boeing 787 Dreamliner uses 50% composites, reducing fuel consumption by 20%.</li>
                <li><strong>Automotive:</strong> BMW i-series employs CFRP for lightweight design.</li>
                <li><strong>Renewable Energy:</strong> 80m+ wind turbine blades use glass fiber composites.</li>
                <li><strong>Civil Infrastructure:</strong> FRP retrofitting extends bridge life by 30–40 years.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>Finite Element Analysis of Hybrid Composites under Dynamic Loads (2023)</li>
                <li>AI-Driven Defect Detection in Polymer Matrix Composites (2024)</li>
                <li>Multi-Scale Modeling of Graphene-Reinforced Nanocomposites (2024)</li>
                <li>Smart Self-Healing Composites for Aerospace Structures (2025)</li>
                <li>Digital Twin-Based Fatigue Analysis of Fiber-Reinforced Polymers (2025)</li>
                <li>Comparative Study of FRP Retrofitting Techniques for Bridges (2023)</li>
                <li>Nanocomposite Coatings for Wear-Resistant Mechanical Components (2024)</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-futurescope">
              <h2>Future Scope & Research Opportunities</h2>
              <ul>
                <li><strong>Lightweight Mobility:</strong> Composites for EVs, drones, and aircraft.</li>
                <li><strong>Smart Composites:</strong> Self-sensing and self-repairing functions.</li>
                <li><strong>AI & Digital Twins:</strong> Predictive failure analysis.</li>
                <li><strong>Sustainability:</strong> Green composites using biodegradable materials.</li>
                <li><strong>Space Applications:</strong> Radiation-resistant composites for spacecraft.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in Composite Materials Analysis project development for B.Tech, M.Tech, and Ph.D. students. With expertise in ANSYS, ABAQUS, MATLAB, and additive manufacturing, we provide IEEE-aligned (2023–2025) project support and publication services in high-impact journals (IEEE, SCI, Scopus). Our projects empower students to contribute to aerospace, automotive, and sustainable engineering innovations.
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
              <li><a href="/department/mechanical-properties-materials">Mechanical Properties & Materials</a></li>
              <li><a href="/department/mechanical-properties-materials/composite-materials-analysis">Composite Materials Analysis</a></li>
              <li><a href="/department/mechanical-properties-materials/advanced-alloy-development">Advanced Alloy Development</a></li>
              <li><a href="/department/mechanical-properties-materials/tribology-wear-analysis">Tribology & Wear Analysis</a></li>
              <li><a href="/department/mechanical-properties-materials/nanomaterials-mechanical">Nanomaterials – Mechanical Properties</a></li>
              <li><a href="/department/mechanical-properties-materials/fatigue-fracture-analysis">Fatigue & Fracture Analysis</a></li>
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

export default MECompositeMaterialsAnalysisProjectDevelopmentCenter;
