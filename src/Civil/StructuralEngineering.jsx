import "./CEProjectDevelopmentCenter.scss";
import Subsidebar from ".././pages/Subsidebar";
import SEO from "../assets/SEO";
import Leftsidebar from "../assets/Leftsidebar";

/* ✅ KEYWORDS ARRAY OBJECT */
const keywords = [
  "Structural Engineering IEEE Projects 2023–2025",
  "Structural Health Monitoring Projects",
  "Earthquake Resistant Structures Projects",
  "IoT Structural Engineering Projects",
  "FEA Structural Analysis Projects",
  "Tall Building Structural Design",
  "Bridge Design Optimization Projects",
  "Structural Engineering B.Tech M.Tech Ph.D.",
  "Narpavi Research Institute Civil Projects",
];

const faqs = [
  {
    question: "What services does the Structural Engineering Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Structural Engineering Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on structural analysis, earthquake-resistant design, and IoT-based structural health monitoring.",
  },
  {
    question: "What types of Structural Engineering projects are supported?",
    answer:
      "We support B.Tech, M.Tech, and Ph.D. projects covering structural design, FEA, optimization, and smart monitoring systems.",
  },
  {
    question: "Which tools and technologies are used?",
    answer:
      "Tools include AutoCAD, STAAD Pro, ETABS, SAP2000, ANSYS, ABAQUS, IoT sensors, and AI frameworks.",
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects align with IEEE Transactions (2023–2025) on Civil and Structural Engineering.",
  },
  {
    question: "What academic support is provided?",
    answer:
      "Complete guidance from topic selection to simulation, validation, documentation, and publication.",
  },
];

const CEStructuralEngineeringProjectDevelopmentCenter = () => {
  return (
    <div className="CEProjectDevelopmentCenter">

      {/* ✅ SEO FIXED */}
      <SEO
        title="Structural Engineering – Project Development Center in Chennai"
        description="Structural Engineering project development for B.Tech, M.Tech, and Ph.D. students focusing on structural analysis, earthquake-resistant design, IoT-based structural health monitoring, AI, and sustainable infrastructure."
        keywords={keywords}
        url="/department/structural-engineering"
        faqs={faqs}
      />

      <Subsidebar
        extraLinks={[
          { id: "civil", label: "civil", path: "/department?dept=civil" },
        ]}
      />

      <div className="CEProjectDevelopmentCenter-main">
        <div className="CEProjectDevelopmentCenter-grid">

          {/* ✅ LEFT SIDEBAR */}
          <aside className="left-sidebar2">
            <Leftsidebar/>
          </aside>

          {/* CENTER CONTENT */}
          <div className="CEProjectDevelopmentCenter-center">

            {/* ✅ H1 MATCHES SEO */}
            <h1>
              Structural Engineering – Project Development Center in Chennai
            </h1>
  <section className="CEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Structural Engineering Project Development Center, a global platform empowering B.Tech, M.Tech, and Ph.D. scholars to develop IEEE-aligned (2023–2025) projects on structural analysis, design, and health monitoring. Our projects focus on creating safe, durable, and sustainable structures like buildings, bridges, and dams.
              </p>
              <p>
                By integrating advanced software simulation, IoT monitoring, and AI analytics, we deliver innovative solutions for academic excellence and real-world infrastructure applications.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-btech">
              <h2>B.Tech Structural Engineering Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational structural design projects aligned with IEEE topics.</p>
              <ul>
                <li>Identify structural failure issues or design small-scale models</li>
                <li>Use AutoCAD, STAAD Pro, or SAP2000 for steel, RCC, or composite structures</li>
                <li>Implement physical or virtual models to test load-bearing capacity</li>
                <li>Conduct bending, compression, or shear tests on scaled models</li>
                <li>Generate IEEE-style project reports and demonstrations</li>
              </ul>
              <p>The style emphasizes practical learning in structural modeling and load analysis.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Structural Engineering Project Development</h2>
              <p>For postgraduate students, projects involve advanced modeling and structural health assessment.</p>
              <ul>
                <li>Address earthquake-resistant designs or tall building dynamics</li>
                <li>Utilize Finite Element Analysis (FEA) with ANSYS, ETABS, and ABAQUS</li>
                <li>Implement optimized structures with smart sensors for monitoring</li>
                <li>Test using experimental validation and modal analysis</li>
                <li>Publish in IEEE conferences with focus on vibration control and optimization</li>
              </ul>
              <p>The style focuses on advanced structural analysis and smart monitoring.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Structural Engineering Project Development</h2>
              <p>For doctoral scholars, our center supports pioneering research in sustainable structural systems.</p>
              <ul>
                <li>Explore challenges in seismic retrofitting, wind analysis, or bridge durability</li>
                <li>Design IoT-based monitoring and AI-driven predictive frameworks</li>
                <li>Implement real-time structural monitoring with smart sensors</li>
                <li>Validate using IEEE-standard datasets and full-scale experiments</li>
                <li>Contribute to IEEE, Scopus, and SCI journal publications</li>
              </ul>
              <p>The style emphasizes innovation, scalability, and publication-ready outcomes.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Technologies vs. Applications</h2>
              <div className="CEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Structural Technology / Tool</th>
                      <th>Application</th>
                      <th>Key Benefits</th>
                      <th>Challenges</th>
                      <th>Academic Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>STAAD Pro / ETABS / SAP2000</td>
                      <td>RCC and Steel Structures</td>
                      <td>Efficient structural analysis and design</td>
                      <td>Learning curve for complex software</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>Finite Element Analysis (FEA)</td>
                      <td>Tall Buildings, Bridges</td>
                      <td>Accurate stress-strain predictions</td>
                      <td>High computational requirements</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Smart Sensors & IoT Monitoring</td>
                      <td>Bridges, Dams, High-rise Buildings</td>
                      <td>Real-time structural health monitoring</td>
                      <td>Integration and data reliability issues</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Seismic Isolation & Dampers</td>
                      <td>Earthquake-resistant structures</td>
                      <td>Improved safety and vibration control</td>
                      <td>High installation and maintenance costs</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Advanced Materials (FRP, Composites)</td>
                      <td>Modern Buildings & Retrofits</td>
                      <td>Enhanced strength-to-weight ratio, durability</td>
                      <td>Material cost and standardization</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="CEProjectDevelopmentCenter-casestudy">
              <h2>Case Study – Seismic-resistant High-Rise Building</h2>
              <p>
                An M.Tech project designed a high-rise building with base isolation and dampers using ETABS and FEA simulations. The project reduced seismic response by 30% and validated the design through model testing, demonstrating IEEE-aligned research standards.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>Earthquake-resistant RCC Building Design with Base Isolation</li>
                <li>FEA-based Optimization of Steel-Concrete Composite Bridges</li>
                <li>Structural Health Monitoring of High-rise Buildings using IoT Sensors</li>
                <li>Advanced Material Integration for Seismic Retrofitting</li>
                <li>Wind Load Analysis of Tall Structures using CFD & FEA</li>
                <li>Smart Dampers for Vibration Control in Bridges and Towers</li>
                <li>Hybrid Structural Systems for Sustainable Infrastructure</li>
                <li>Real-time IoT Monitoring for Long-span Bridges</li>
                <li>Optimization of Pre-stressed Concrete Beams for Seismic Loads</li>
                <li>AI-assisted Predictive Maintenance in Structural Engineering</li>
              </ul>
            </section>

            <section className="CEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                At Narpavi Research Institute, we provide end-to-end project development support in Structural Engineering for B.Tech, M.Tech, and Ph.D. students. Our expertise covers software simulation, experimental modeling, smart monitoring, and publication guidance. We focus on IEEE-aligned projects (2023–2025) that enhance academic excellence, industrial relevance, and research publication opportunities.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-futurescope">
              <h2>Future Research Directions in Structural Engineering</h2>
              <ul>
                <li>AI & Machine Learning for Structural Health Monitoring</li>
                <li>Smart Materials and Adaptive Structures</li>
                <li>IoT-enabled Bridges and Tall Buildings</li>
                <li>Seismic Retrofit Techniques for Historic Structures</li>
                <li>Digital Twin Models for Real-time Structural Assessment</li>
              </ul>
            </section>

            {/* FAQ UI (schema handled by SEO component) */}
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
            <h3>🔗 Related Services</h3>
            <ul>
              <li>
                <a href="/department/structural-engineering">
                  Structural Engineering
                </a>
              </li>
              <li>
                <a href="/department/structural-engineering/earthquake-resistant-structures">
                  Earthquake Resistant Structures
                </a>
              </li>
              <li>
                <a href="/department/structural-engineering/steel-rcc-design-optimization">
                  Steel & RCC Design Optimization
                </a>
              </li>
              <li>
                <a href="/department/structural-engineering/tall-building-analysis">
                  Tall Building Analysis
                </a>
              </li>
              <li>
                <a href="/department/structural-engineering/bridge-design-monitoring">
                  Bridge Design & Monitoring
                </a>
              </li>
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

export default CEStructuralEngineeringProjectDevelopmentCenter;
