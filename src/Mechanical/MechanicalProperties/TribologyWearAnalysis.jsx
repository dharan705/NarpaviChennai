import "../MEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Tribology & Wear Analysis Project Development Center in Chennai",
  "IEEE Tribology Projects 2023–2025",
  "Nano Lubricant Tribology Research",
  "Surface Coating Wear Analysis",
  "AI Driven Wear Prediction",
  "Tribology Simulation Projects",
  "B.Tech Tribology Projects",
  "M.Tech Wear Resistant Projects",
  "PhD Tribology Research",
  "Narpavi Research Institute Tribology Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Tribology & Wear Analysis Project Development Center offer?",
    answer:
      "Narpavi Research Institute supports IEEE-aligned (2023–2025) projects on friction, lubrication, and wear, including nano-lubricants, surface texturing, advanced coatings, and AI-driven wear prediction."
  },
  {
    question: "Who can apply for tribology-based projects?",
    answer:
      "B.Tech, M.Tech, and Ph.D. students from Mechanical, Materials, and related disciplines."
  },
  {
    question: "Which tools are used in tribology projects?",
    answer:
      "ANSYS, ABAQUS, Tribo-X, COMSOL, MATLAB, Python, pin-on-disc testers, SEM, AFM, and XRD."
  },
  {
    question: "Are projects aligned with IEEE standards?",
    answer:
      "Yes. All projects follow IEEE Transactions (2023–2025) and IEEE/ASTM standards."
  },
  {
    question: "Is journal and patent support provided?",
    answer:
      "Yes. Support is available for IEEE, Scopus, Elsevier journals and patents."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Tribology & Wear Analysis – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Tribology & Wear Analysis Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. students focusing on friction, lubrication, nano-lubricants, surface coatings, and AI-driven wear prediction.";

const pageUrl =
  "/department/mechanical-properties-materials/tribology-wear-analysis";

const METribologyWearAnalysisProjectDevelopmentCenter = () => {
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
                <strong>Narpavi Research Institute</strong> presents the Tribology & Wear Analysis Project Development Center, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on friction, lubrication, and wear, focusing on nano-lubricants, surface texturing, advanced coatings, and AI-driven wear prediction.
              </p>
              <p>
                Our projects leverage ANSYS, Tribo-X, MATLAB, and experimental setups to address challenges in automotive, aerospace, biomedical, and energy systems, ensuring high-impact research and industrial applicability.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-trends">
              <h2>Global Industrial Context</h2>
              <ul>
                <li><strong>Automotive & EV Industry:</strong> Nano-lubricants reduce engine wear, improving EV drivetrain life.</li>
                <li><strong>Aerospace Systems:</strong> Advanced coatings enhance turbine durability at extreme conditions.</li>
                <li><strong>Renewable Energy:</strong> Surface texturing extends wind turbine gear life by 30%.</li>
                <li><strong>Biomedical Applications:</strong> DLC coatings improve implant wear resistance.</li>
                <li><strong>Manufacturing & Heavy Machinery:</strong> Lubrication systems reduce downtime.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-btech">
              <h2>B.Tech Tribology & Wear Analysis Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational tribology projects aligned with IEEE topics.</p>
              <ul>
                <li>Review IEEE papers on friction reduction in automotive systems</li>
                <li>Simulate friction and wear using MATLAB or ANSYS</li>
                <li>Conduct pin-on-disc or four-ball tester experiments</li>
                <li>Compare results with baseline lubricants or coatings</li>
              </ul>
              <p>Example: Pin-on-disc testing of nano-lubricants for automotive bearings.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Tribology & Wear Analysis Project Development</h2>
              <p>For postgraduate students, projects focus on advanced tribological challenges.</p>
              <ul>
                <li>Address gear wear in EVs or implant degradation</li>
                <li>Select coatings, nano-lubricants, or surface treatments</li>
                <li>Simulate wear with ANSYS or Tribo-X</li>
                <li>Validate with SEM, AFM, or XRD analysis</li>
              </ul>
              <p>Example: Surface texturing for wear reduction in biomedical implants.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Tribology & Wear Analysis Project Development</h2>
              <p>For doctoral scholars, our center supports cutting-edge tribology research.</p>
              <ul>
                <li>Identify gaps in nano-lubricants or AI-driven wear prediction</li>
                <li>Perform multi-scale simulations with molecular dynamics</li>
                <li>Develop graphene-based lubricants or smart coatings</li>
                <li>Publish in IEEE, SCI, or Scopus-indexed journals</li>
              </ul>
              <p>Example: AI-based wear prediction for 3D-printed aerospace alloys.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-table1">
              <h2>Comparative Table – Tribology Solutions</h2>
              <div className="MEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology</th>
                      <th>Industry Application</th>
                      <th>Advantages</th>
                      <th>Limitations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Nano-Lubricants</td>
                      <td>Automotive, Aerospace</td>
                      <td>Reduced friction, eco-friendly</td>
                      <td>High cost</td>
                    </tr>
                    <tr>
                      <td>Surface Texturing</td>
                      <td>Bearings, Engines</td>
                      <td>Improved lubrication, reduced wear</td>
                      <td>Complex fabrication</td>
                    </tr>
                    <tr>
                      <td>Coatings (DLC, TiN, Graphene)</td>
                      <td>Biomedical, Aerospace</td>
                      <td>High wear resistance, biocompatible</td>
                      <td>Deposition challenges</td>
                    </tr>
                    <tr>
                      <td>AI-Based Wear Prediction</td>
                      <td>Manufacturing, Energy</td>
                      <td>Accurate failure forecasting</td>
                      <td>Requires large datasets</td>
                    </tr>
                    <tr>
                      <td>Bio-Lubricants</td>
                      <td>Green Energy, Marine</td>
                      <td>Renewable, low toxicity</td>
                      <td>Limited thermal stability</td>
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
                      <td>Contact mechanics, wear simulation</td>
                      <td>Industry-standard FEA</td>
                    </tr>
                    <tr>
                      <td>Tribo-X/COMSOL</td>
                      <td>Tribology-specific simulation</td>
                      <td>High accuracy</td>
                    </tr>
                    <tr>
                      <td>MATLAB/Python</td>
                      <td>AI models for wear prediction</td>
                      <td>Data-driven solutions</td>
                    </tr>
                    <tr>
                      <td>Pin-on-Disc Tester</td>
                      <td>Wear testing</td>
                      <td>Standard experimental validation</td>
                    </tr>
                    <tr>
                      <td>SEM/AFM/XRD</td>
                      <td>Surface characterization</td>
                      <td>Nano- to micro-level insights</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="MEProjectDevelopmentCenter-casestudies">
              <h2>Case Studies – Tribology in Action</h2>
              <ul>
                <li><strong>EV Bearings:</strong> Nano-lubricants reduced friction losses by 18%.</li>
                <li><strong>Biomedical Implants:</strong> DLC coatings extended implant life by 5x.</li>
                <li><strong>Wind Turbines:</strong> Surface texturing improved gear life by 30%.</li>
                <li><strong>Aerospace Engines:</strong> Graphene-based coatings resisted oxidation up to 900°C.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-Based Wear Prediction in Automotive Engine Components (2023)</li>
                <li>Nano-Lubricant Development for Wind Turbine Bearings (2024)</li>
                <li>Tribological Analysis of 3D-Printed Aerospace Alloys (2025)</li>
                <li>Surface Texturing of Biomedical Implants for Wear Reduction (2024)</li>
                <li>Graphene-Based Coatings for High-Temperature Tribological Systems (2025)</li>
                <li>Machine Learning-Assisted Fault Detection in Tribological Systems (2023)</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-futurescope">
              <h2>Future Scope & Research Opportunities</h2>
              <ul>
                <li><strong>Green Tribology:</strong> Sustainable, eco-friendly lubrication systems.</li>
                <li><strong>AI-Driven Predictive Maintenance:</strong> Digital twins for wear forecasting.</li>
                <li><strong>Smart Coatings:</strong> Self-lubricating and self-healing surfaces.</li>
                <li><strong>Tribology in 3D Printing:</strong> Surface optimization for next-gen materials.</li>
                <li><strong>Nano-Tribology:</strong> Atomic-level friction understanding for nanodevices.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in Tribology & Wear Analysis project development for B.Tech, M.Tech, and Ph.D. students. With expertise in ANSYS, Tribo-X, MATLAB, and experimental testing, we provide IEEE-aligned (2023–2025) project support and publication services in high-impact journals (IEEE, SCI, Scopus). Our projects empower students to contribute to automotive, aerospace, biomedical, and energy innovations.
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

export default METribologyWearAnalysisProjectDevelopmentCenter;
