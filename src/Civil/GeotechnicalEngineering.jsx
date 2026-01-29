import "./CEProjectDevelopmentCenter.scss";
import Subsidebar from ".././pages/Subsidebar";
import SEO from "../assets/SEO";
import Leftsidebar from "../assets/Leftsidebar";

/* ✅ KEYWORDS ARRAY OBJECT */
const keywords = [
  "Geotechnical Engineering IEEE Projects 2023–2025",
  "Soil Mechanics IEEE Projects",
  "Slope Stability Analysis Projects",
  "Foundation Design Projects",
  "Ground Improvement Techniques",
  "AI in Geotechnical Engineering",
  "IoT Geotechnical Monitoring",
  "Geotechnical Engineering PhD Projects",
  "Landslide Prediction using AI",
  "Narpavi Research Institute Civil Projects",
];

const faqs = [
  {
    question: "What services does the Geotechnical Engineering Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Geotechnical Engineering Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on soil mechanics, foundation design, slope stability, and IoT-based geotechnical monitoring.",
  },
  {
    question: "What types of Geotechnical Engineering projects are supported?",
    answer:
      "We support B.Tech, M.Tech, and Ph.D. projects covering soil mechanics, slope stability, foundation design, AI, and IoT-based monitoring.",
  },
  {
    question: "Which tools and technologies are used in Geotechnical Engineering projects?",
    answer:
      "Tools include Plaxis 2D/3D, GeoStudio, FLAC3D, ANSYS, IoT sensors, and AI frameworks.",
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are aligned with IEEE Transactions (2023–2025) on Geotechnical Engineering and Civil Infrastructure.",
  },
  {
    question: "What support is provided for academic submissions?",
    answer:
      "We provide complete guidance from topic selection to modeling, validation, documentation, and publication.",
  },
];

const CEGeotechnicalEngineeringProjectDevelopmentCenter = () => {
  return (
    <div className="CEProjectDevelopmentCenter">

      {/* ✅ SEO FIXED */}
      <SEO
        title="Geotechnical Engineering – Project Development Center in Chennai"
        description="Geotechnical Engineering project development for B.Tech, M.Tech, and Ph.D. students focusing on soil mechanics, foundation design, slope stability, AI, IoT monitoring, and resilient infrastructure."
        keywords={keywords}
        url="/department/geotechnical-engineering"
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
              Geotechnical Engineering – Project Development Center in Chennai
            </h1>
              
            <section className="CEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Geotechnical Engineering Project Development Center, a global platform empowering B.Tech, M.Tech, and Ph.D. scholars to develop IEEE-aligned (2023–2025) projects on soil mechanics, foundation design, and geotechnical monitoring. Our projects focus on creating stable and resilient foundations for infrastructure like tunnels, embankments, and dams.
              </p>
              <p>
                By integrating numerical modeling, IoT sensors, and AI analytics, we deliver innovative solutions for academic excellence and real-world geotechnical applications.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-btech">
              <h2>B.Tech Geotechnical Engineering Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational geotechnical projects aligned with IEEE topics.</p>
              <ul>
                <li>Identify issues like bearing capacity or soil compaction</li>
                <li>Use Plaxis 2D, GeoStudio, or manual methods for stability analysis</li>
                <li>Conduct small-scale lab experiments on shear strength or permeability</li>
                <li>Test load-bearing capacity of soil and foundation models</li>
                <li>Generate IEEE-style project reports and demonstrations</li>
              </ul>
              <p>The style emphasizes practical learning in soil behavior and structural-soil interaction.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Geotechnical Engineering Project Development</h2>
              <p>For postgraduate students, projects involve advanced geotechnical simulations and innovative systems.</p>
              <ul>
                <li>Address slope failure or deep foundation settlements</li>
                <li>Use Finite Element Method (FEM) with Plaxis 3D, FLAC3D, or ANSYS</li>
                <li>Model pile foundations, tunnels, or reinforced soil systems</li>
                <li>Test soil-structure interaction through lab and numerical validation</li>
                <li>Publish in IEEE conferences with focus on ground improvement</li>
              </ul>
              <p>The style focuses on advanced modeling and resilient infrastructure solutions.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Geotechnical Engineering Project Development</h2>
              <p>For doctoral scholars, our center supports pioneering research in innovative geotechnical systems.</p>
              <ul>
                <li>Explore challenges in seismic liquefaction or landslide prediction</li>
                <li>Design IoT-based monitoring and AI-driven predictive frameworks</li>
                <li>Implement digital twin models for soil-structure systems</li>
                <li>Validate using field tests with piezometers and accelerometers</li>
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
                      <th>Geotechnical Technology / Tool</th>
                      <th>Application</th>
                      <th>Key Benefits</th>
                      <th>Challenges</th>
                      <th>Academic Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Plaxis 2D/3D & GeoStudio</td>
                      <td>Slope stability, foundation design</td>
                      <td>Accurate soil-structure interaction modeling</td>
                      <td>Complex software learning curve</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>FLAC3D / ANSYS</td>
                      <td>Deep excavation, tunnels, dams</td>
                      <td>Advanced geotechnical FEM analysis</td>
                      <td>High computational requirements</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>IoT-enabled Soil Sensors</td>
                      <td>Landslide and slope monitoring</td>
                      <td>Real-time monitoring and predictive alerts</td>
                      <td>Sensor reliability and connectivity issues</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Ground Improvement (Geosynthetics)</td>
                      <td>Soft soil & embankments</td>
                      <td>Enhanced strength, reduced settlements</td>
                      <td>Material cost and installation complexity</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>AI & Machine Learning Models</td>
                      <td>Soil liquefaction, settlement</td>
                      <td>Predictive analysis and disaster resilience</td>
                      <td>Data quality and model complexity</td>
                      <td>Ph.D.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="CEProjectDevelopmentCenter-casestudy">
              <h2>Case Study – Slope Stability using Geosynthetics</h2>
              <p>
                An M.Tech project focused on improving slope stability using reinforced geosynthetics. Simulations in Plaxis 2D showed a 40% increase in factor of safety compared to conventional slopes. The project demonstrated real-world applicability and IEEE-aligned research outcomes.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>Seismic Response Analysis of Pile Foundations using FEM</li>
                <li>Soil Liquefaction Prediction using AI and Machine Learning Models</li>
                <li>IoT-enabled Landslide Monitoring and Early Warning Systems</li>
                <li>Geosynthetics Reinforcement for Embankments and Retaining Walls</li>
                <li>FEM-based Analysis of Deep Excavations in Urban Areas</li>
                <li>Ground Improvement Techniques for Offshore Foundations</li>
                <li>Real-time Settlement Monitoring of Tunnels using Smart Sensors</li>
                <li>Slope Stability Enhancement using Reinforced Soil Walls</li>
                <li>Digital Twin Framework for Soil-Structure Interaction</li>
                <li>Earthquake-induced Ground Failure Modeling using Plaxis 3D</li>
              </ul>
            </section>

            <section className="CEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                At Narpavi Research Institute, we specialize in Geotechnical Engineering project development for B.Tech, M.Tech, and Ph.D. students worldwide. Our expertise includes numerical modeling, experimental validation, IoT monitoring, and publication guidance. We ensure IEEE-aligned projects (2023–2025) that combine academic depth and industrial relevance.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-futurescope">
              <h2>Future Research Directions in Geotechnical Engineering</h2>
              <ul>
                <li>IoT-based real-time soil monitoring</li>
                <li>AI-driven landslide prediction and mitigation</li>
                <li>Offshore geotechnics for renewable energy projects</li>
                <li>Earthquake geotechnical engineering and liquefaction control</li>
                <li>Digital twin-based geotechnical design and monitoring</li>
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
                <a href="/department/geotechnical-engineering">
                  Geotechnical Engineering
                </a>
              </li>
              <li>
                <a href="/department/geotechnical-engineering/soil-stabilization-techniques">
                  Soil Stabilization Techniques
                </a>
              </li>
              <li>
                <a href="/department/geotechnical-engineering/foundation-design">
                  Foundation Design
                </a>
              </li>
              <li>
                <a href="/department/geotechnical-engineering/slope-stability-analysis">
                  Slope Stability Analysis
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

export default CEGeotechnicalEngineeringProjectDevelopmentCenter;
