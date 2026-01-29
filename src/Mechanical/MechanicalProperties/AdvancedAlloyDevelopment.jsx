import "../MEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Advanced Alloy Development Project Development Center in Chennai",
  "IEEE Alloy Research 2023–2025",
  "High Entropy Alloy Projects",
  "Titanium Alloy Biomedical Projects",
  "Nickel Based Superalloy Research",
  "Additive Manufacturing Alloys",
  "AI Driven Alloy Optimization",
  "Thermo Calc Alloy Simulation",
  "PhD Alloy Research Projects",
  "Narpavi Research Institute Alloy Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Advanced Alloy Development Project Development Center offer?",
    answer:
      "Narpavi Research Institute supports IEEE-aligned (2023–2025) projects on advanced alloys including high entropy alloys, titanium alloys, nickel-based superalloys, and nanostructured alloys."
  },
  {
    question: "Who can apply for Advanced Alloy Development projects?",
    answer:
      "B.Tech, M.Tech, and Ph.D. students from Mechanical, Materials, and Metallurgy domains."
  },
  {
    question: "Which tools are used?",
    answer:
      "Thermo-Calc, JMatPro, MATLAB, Python, ANSYS, ABAQUS, and additive manufacturing platforms."
  },
  {
    question: "Are projects IEEE aligned?",
    answer:
      "Yes. Projects follow IEEE Transactions (2023–2025) and IEEE/ASTM/ISO standards."
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
  "Advanced Alloy Development – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Advanced Alloy Development Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. students focusing on high entropy alloys, titanium alloys, nickel superalloys, AI-driven alloy design, and additive manufacturing.";

const pageUrl =
  "/department/mechanical-properties-materials/advanced-alloy-development";

const MEAdvancedAlloyDevelopmentProjectDevelopmentCenter = () => {
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
                <strong>Narpavi Research Institute</strong> presents the Advanced Alloy Development Project Development Center, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on advanced alloys, including high entropy alloys, titanium alloys, nickel-based superalloys, and nanostructured alloys for aerospace, automotive, biomedical, and energy applications.
              </p>
              <p>
                Our projects leverage Thermo-Calc, JMatPro, MATLAB, and additive manufacturing to address challenges in alloy design, mechanical performance, and sustainability, ensuring high-impact research and industrial applicability.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-trends">
              <h2>Global Trends & Industry Context</h2>
              <ul>
                <li><strong>Aerospace & Defense:</strong> Superalloys for jet engines and lightweight titanium alloys for fuel efficiency.</li>
                <li><strong>Automotive & EV Industry:</strong> Aluminum–magnesium alloys for EV casings and high-strength steels for crashworthiness.</li>
                <li><strong>Biomedical Applications:</strong> Biocompatible titanium and Co-Cr alloys for implants and surgical tools.</li>
                <li><strong>Energy & Power Systems:</strong> Zirconium alloys for nuclear reactors and corrosion-resistant alloys for turbines.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-btech">
              <h2>B.Tech Advanced Alloy Development Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational alloy design projects aligned with IEEE topics.</p>
              <ul>
                <li>Review IEEE publications on lightweight alloys</li>
                <li>Simulate phase diagrams using Thermo-Calc or MATLAB</li>
                <li>Prepare simple alloys via casting or powder metallurgy</li>
                <li>Test tensile strength, hardness, or corrosion properties</li>
              </ul>
              <p>Example: Tensile testing of aluminum alloys with Thermo-Calc simulation.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Advanced Alloy Development Project Development</h2>
              <p>For postgraduate students, projects focus on advanced alloy design challenges.</p>
              <ul>
                <li>Address issues like high-temperature degradation or fatigue</li>
                <li>Simulate creep resistance and phase stability with JMatPro</li>
                <li>Develop 3D-printed titanium or aluminum alloys</li>
                <li>Validate with SEM, XRD, or EDS analysis</li>
              </ul>
              <p>Example: Additive manufacturing of titanium alloys for biomedical implants.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Advanced Alloy Development Project Development</h2>
              <p>For doctoral scholars, our center supports cutting-edge alloy research.</p>
              <ul>
                <li>Identify gaps in high entropy alloys or nanostructured alloys</li>
                <li>Use AI/ML for corrosion or fatigue prediction</li>
                <li>Fabricate alloys via powder metallurgy or laser sintering</li>
                <li>Publish in IEEE, SCI, or Scopus-indexed journals</li>
              </ul>
              <p>Example: Machine learning-based design of high entropy alloys for aerospace.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-table1">
              <h2>Comparative Table – Alloy Types</h2>
              <div className="MEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Alloy Type</th>
                      <th>Industry Application</th>
                      <th>Advantages</th>
                      <th>Limitations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Aluminum Alloys</td>
                      <td>Automotive, Aerospace</td>
                      <td>Lightweight, corrosion resistance</td>
                      <td>Lower strength at high temperatures</td>
                    </tr>
                    <tr>
                      <td>Titanium Alloys</td>
                      <td>Aerospace, Biomedical</td>
                      <td>High strength-to-weight ratio, biocompatibility</td>
                      <td>Expensive, difficult machining</td>
                    </tr>
                    <tr>
                      <td>Nickel-Based Superalloys</td>
                      <td>Jet Engines, Turbines</td>
                      <td>High-temperature strength, oxidation resistance</td>
                      <td>Costly, complex fabrication</td>
                    </tr>
                    <tr>
                      <td>High Entropy Alloys (HEAs)</td>
                      <td>Defense, Energy</td>
                      <td>Superior mechanical/thermal stability</td>
                      <td>Still under development</td>
                    </tr>
                    <tr>
                      <td>Stainless Steels & Advanced Steels</td>
                      <td>Infrastructure, Transport</td>
                      <td>Strength, durability</td>
                      <td>Susceptible to certain corrosive environments</td>
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
                      <td>Thermo-Calc</td>
                      <td>Phase diagram & thermodynamic prediction</td>
                      <td>Accurate alloy design</td>
                    </tr>
                    <tr>
                      <td>JMatPro</td>
                      <td>Property modeling</td>
                      <td>Predicts creep, fatigue, thermal properties</td>
                    </tr>
                    <tr>
                      <td>MATLAB/Python (ML models)</td>
                      <td>AI-driven alloy design</td>
                      <td>Predictive, scalable</td>
                    </tr>
                    <tr>
                      <td>ANSYS/ABAQUS</td>
                      <td>Mechanical simulations</td>
                      <td>Industry-grade FEA validation</td>
                    </tr>
                    <tr>
                      <td>Additive Manufacturing Systems</td>
                      <td>Alloy prototyping</td>
                      <td>Customized 3D printing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="MEProjectDevelopmentCenter-casestudies">
              <h2>Case Studies – Alloy Applications</h2>
              <ul>
                <li><strong>Aerospace:</strong> Nickel-based superalloys extend turbine blade life by 40%.</li>
                <li><strong>Automotive:</strong> Aluminum–magnesium alloys reduce EV weight by 20%.</li>
                <li><strong>Biomedical:</strong> Titanium alloys enhance implant lifespan.</li>
                <li><strong>Energy:</strong> HEAs resist extreme nuclear reactor environments.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>Machine Learning-Based Alloy Design for High-Temperature Applications (2023)</li>
                <li>Additive Manufacturing of Titanium Alloys for Biomedical Implants (2024)</li>
                <li>High Entropy Alloy Development for Aerospace Applications (2024)</li>
                <li>Nanostructured Alloys for Corrosion-Resistant Energy Systems (2025)</li>
                <li>Simulation-Based Optimization of Aluminum Alloys for EVs (2023)</li>
                <li>Digital Twin Modeling of Alloy Fatigue Performance (2025)</li>
                <li>Powder Metallurgy Techniques for Lightweight Alloy Development (2024)</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-futurescope">
              <h2>Future Scope & Research Opportunities</h2>
              <ul>
                <li><strong>High Entropy Alloys:</strong> Next-gen materials for aerospace and defense.</li>
                <li><strong>Green Alloy Production:</strong> Sustainable and recyclable metallurgy.</li>
                <li><strong>Additive Manufacturing:</strong> Tailored alloy microstructures.</li>
                <li><strong>AI-Enabled Alloy Design:</strong> Rapid discovery of optimal compositions.</li>
                <li><strong>Smart Alloys:</strong> Shape-memory and self-healing metals.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in Advanced Alloy Development project development for B.Tech, M.Tech, and Ph.D. students. With expertise in Thermo-Calc, JMatPro, MATLAB, and additive manufacturing, we provide IEEE-aligned (2023–2025) project support and publication services in high-impact journals (IEEE, SCI, Scopus). Our projects empower students to contribute to aerospace, automotive, biomedical, and energy innovations.
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

export default MEAdvancedAlloyDevelopmentProjectDevelopmentCenter;
