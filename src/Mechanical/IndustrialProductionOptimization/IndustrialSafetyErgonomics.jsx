import "../MEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Industrial Safety & Ergonomics Project Development Center in Chennai",
  "Industrial Safety IEEE Projects 2023–2025",
  "Ergonomics Based Design Projects",
  "IoT Workplace Safety Systems",
  "Wearable Safety Monitoring Projects",
  "AI Accident Prediction Systems",
  "Exoskeleton Design Student Projects",
  "Digital Twin Safety Simulation",
  "Industry 4.0 Safety Automation",
  "Narpavi Research Institute Safety Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question: "What services does the Industrial Safety & Ergonomics Project Development Center offer?",
    answer:
      "Narpavi Research Institute supports IEEE-aligned (2023–2025) projects on IoT-enabled safety systems, AI-driven risk assessment, ergonomic design, wearables, and digital twins."
  },
  {
    question: "What types of projects are supported?",
    answer:
      "B.Tech, M.Tech, and Ph.D. projects covering smart factories, construction, and heavy industries."
  },
  {
    question: "Which tools are used?",
    answer:
      "MATLAB, CATIA, Python, Arduino, Raspberry Pi, IoT sensors, AR/VR platforms, and digital twins."
  },
  {
    question: "Are projects IEEE aligned?",
    answer:
      "Yes, projects align with IEEE Transactions (2023–2025) and ISO/OSHA safety standards."
  },
  {
    question: "Is publication support provided?",
    answer:
      "Yes, IEEE, Scopus, Elsevier journal and patent support is provided."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Industrial Safety & Ergonomics – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Industrial Safety & Ergonomics Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. using IoT safety systems, AI risk assessment, ergonomic CAD, wearables, and digital twins.";

const pageUrl =
  "/department/industrial-production-optimization/industrial-safety-ergonomics";

const MEIndustrialSafetyErgonomicsProjectDevelopmentCenter = () => {
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
                <strong>Narpavi Research Institute</strong> presents the Industrial Safety & Ergonomics Project Development Center, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on IoT-enabled safety systems, AI-driven risk assessment, ergonomic design, wearable technologies, and digital twins.
              </p>
              <p>
                Our projects leverage MATLAB, CATIA, Python, IoT platforms, and AR/VR systems to address safety and ergonomics challenges in manufacturing, automotive, construction, and aerospace industries, ensuring high-impact research and industrial applicability.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-principles">
              <h2>Core Principles of Industrial Safety & Ergonomics</h2>
              <ul>
                <li><strong>Workplace Safety Monitoring:</strong> IoT sensors for real-time hazard tracking.</li>
                <li><strong>Ergonomic Design:</strong> Optimizing tools and workflows to reduce fatigue.</li>
                <li><strong>Automation & Robotics Safety:</strong> Collaborative robot safety protocols.</li>
                <li><strong>Wearable Technology:</strong> Smart helmets, exoskeletons, health monitors.</li>
                <li><strong>Risk Assessment Models:</strong> AI-based hazard detection and prevention.</li>
                <li><strong>Industrial Hygiene:</strong> Monitoring air quality, noise, and chemicals.</li>
                <li><strong>Human–Machine Interaction:</strong> Intuitive, safe interfaces.</li>
                <li><strong>Regulatory Compliance:</strong> Adhering to ISO 45001, OSHA, and IEC standards.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-subtopics">
              <h2>Extended Subtopics for Student Projects</h2>
              <ul>
                <li>IoT-enabled workplace safety systems</li>
                <li>Wearable health monitoring devices for workers</li>
                <li>Exoskeleton design for musculoskeletal strain reduction</li>
                <li>AI-powered accident prediction and risk analysis</li>
                <li>Ergonomic workstation design using CAD/CAE</li>
                <li>Digital twin for safety hazard simulation</li>
                <li>Smart helmets with AR/VR safety guidance</li>
                <li>Robotics and cobot safety integration</li>
                <li>Human-factor engineering in automated lines</li>
                <li>Green ergonomics for sustainable workplaces</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-btech">
              <h2>B.Tech Industrial Safety & Ergonomics Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational safety and ergonomics projects aligned with IEEE topics.</p>
              <ul>
                <li>Select topics on ergonomic design or IoT safety devices</li>
                <li>Study ergonomics principles and safety regulations</li>
                <li>Simulate risk models using MATLAB or CATIA</li>
                <li>Prototype IoT sensors on Arduino/Raspberry Pi</li>
                <li>Compare ergonomic vs. conventional setups</li>
              </ul>
              <p>Example: IoT-based gas detection system for workplace safety.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Industrial Safety & Ergonomics Project Development</h2>
              <p>For postgraduate students, projects focus on advanced safety and ergonomics challenges.</p>
              <ul>
                <li>Identify specific industrial safety issues</li>
                <li>Develop AI/ML models for risk prediction</li>
                <li>Prototype smart PPE with IoT integration</li>
                <li>Validate with IEEE/ISO standards</li>
              </ul>
              <p>Example: AI-powered accident prediction for construction sites.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Industrial Safety & Ergonomics Project Development</h2>
              <p>For doctoral scholars, our center supports cutting-edge safety research.</p>
              <ul>
                <li>Identify gaps in AI-driven or cybersecure safety systems</li>
                <li>Develop digital twins or bio-inspired safety models</li>
                <li>Test prototypes with industrial partners</li>
                <li>Publish in IEEE, SCI, or Scopus-indexed journals</li>
              </ul>
              <p>Example: Digital twin for hazard simulation in smart factories.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Technology & Industry Applications</h2>
              <div className="MEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Approach</th>
                      <th>Industry Application</th>
                      <th>Example Use Case</th>
                      <th>Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>IoT Sensors & Wearables</td>
                      <td>Manufacturing, Mining</td>
                      <td>Smart helmets, gas sensors</td>
                      <td>Real-time worker safety</td>
                    </tr>
                    <tr>
                      <td>AI Risk Prediction Models</td>
                      <td>Oil & Gas, Construction</td>
                      <td>Hazard detection in drilling</td>
                      <td>Accident prevention</td>
                    </tr>
                    <tr>
                      <td>Exoskeletons</td>
                      <td>Automotive, Aerospace</td>
                      <td>Worker support in lifting tasks</td>
                      <td>Reduced fatigue, injury prevention</td>
                    </tr>
                    <tr>
                      <td>Ergonomic CAD Design</td>
                      <td>Industrial Equipment</td>
                      <td>Ergonomic tools & seating</td>
                      <td>Better posture, reduced strain</td>
                    </tr>
                    <tr>
                      <td>Digital Twin Simulation</td>
                      <td>Smart Factories</td>
                      <td>Virtual safety drill simulation</td>
                      <td>Predictive hazard management</td>
                    </tr>
                    <tr>
                      <td>AR/VR Training</td>
                      <td>Heavy Industries, Aviation</td>
                      <td>Virtual safety training</td>
                      <td>Immersive, cost-effective learning</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="MEProjectDevelopmentCenter-casestudies">
              <h2>Case Studies – Safety & Ergonomics in Action</h2>
              <ul>
                <li><strong>Toyota:</strong> Ergonomic design + exoskeletons in vehicle assembly.</li>
                <li><strong>Shell:</strong> AI-driven safety monitoring for oil & gas rigs.</li>
                <li><strong>Bosch:</strong> IoT safety sensors in Industry 4.0 factories.</li>
                <li><strong>Airbus:</strong> AR/VR training for aircraft assembly safety.</li>
                <li><strong>TATA Steel:</strong> IoT-based safety helmets in hazardous zones.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>IoT-Based Real-Time Industrial Worker Safety Monitoring System (2023)</li>
                <li>AI-Powered Predictive Accident Detection in Smart Factories (2024)</li>
                <li>Exoskeleton Design for Reducing Musculoskeletal Disorders (2025)</li>
                <li>Digital Twin Models for Hazard Simulation in Industry 4.0 (2024)</li>
                <li>AR/VR-Based Industrial Safety Training Platform (2023)</li>
                <li>Blockchain-Secured Safety Compliance Record System (2025)</li>
                <li>Ergonomic Design of Assembly Workstations Using CAD/CAE (2024)</li>
                <li>Smart Helmet with IoT Sensors & AR Guidance for Construction Sites (2023)</li>
                <li>Machine Learning Models for Industrial Risk Forecasting (2025)</li>
                <li>Collaborative Robot Safety Framework with AI Monitoring (2024)</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-futurescope">
              <h2>Future Scope & Research Opportunities</h2>
              <ul>
                <li><strong>Cybersecure IoT Safety Systems:</strong> Next-gen smart factories.</li>
                <li><strong>AI-Driven Ergonomics:</strong> Real-time posture correction.</li>
                <li><strong>Green Ergonomics:</strong> Sustainable, eco-friendly workplaces.</li>
                <li><strong>Digital Twin Safety Drills:</strong> Predictive hazard management.</li>
                <li><strong>Exoskeletons & Wearables:</strong> Mainstream industrial adoption.</li>
                <li><strong>Collaborative Robotics Safety:</strong> Advanced HMI design.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in Industrial Safety & Ergonomics project development for B.Tech, M.Tech, and Ph.D. students. With expertise in MATLAB, CATIA, Python, IoT, and AR/VR systems, we provide IEEE-aligned (2023–2025) project support and publication services in high-impact journals (IEEE, SCI, Scopus). Our projects empower students to contribute to safer and more efficient workplaces in manufacturing, automotive, and construction industries.
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
              <li><a href="/department/industrial-production-optimization">Industrial Production Optimization</a></li>
              <li><a href="/department/industrial-production-optimization/lean-manufacturing">Lean Manufacturing</a></li>
              <li><a href="/department/industrial-production-optimization/supply-chain-process">Supply Chain Process Optimization</a></li>
              <li><a href="/department/industrial-production-optimization/industrial-safety-ergonomics">Industrial Safety & Ergonomics</a></li>
              <li><a href="/department/industrial-production-optimization/smart-factory-systems">Smart Factory Systems</a></li>
              <li><a href="/department/industrial-production-optimization/cost-time-optimization">Cost & Time Optimization</a></li>
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

export default MEIndustrialSafetyErgonomicsProjectDevelopmentCenter;
