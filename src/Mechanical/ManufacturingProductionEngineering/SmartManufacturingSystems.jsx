import "../MEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Smart Manufacturing Systems Project Development Center in Chennai",
  "Industry 4.0 Project Development Chennai",
  "Smart Manufacturing IEEE Projects 2023–2025",
  "IoT Smart Factory Projects",
  "AI Manufacturing Optimization Projects",
  "Digital Twin Smart Manufacturing",
  "Predictive Maintenance Industry 4.0",
  "Cyber Physical Systems Manufacturing",
  "Cloud Integrated Smart Factories",
  "Narpavi Research Institute Industry 4.0"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Smart Manufacturing Systems Project Development Center offer?",
    answer:
      "Narpavi Research Institute supports IEEE-aligned (2023–2025) projects on IoT-enabled manufacturing, AI-driven production, digital twins, predictive maintenance, and Industry 4.0 smart factory automation."
  },
  {
    question: "Who can apply for these projects?",
    answer:
      "B.Tech, M.Tech, and Ph.D. students from Mechanical, Mechatronics, Electrical, and Manufacturing backgrounds."
  },
  {
    question: "Which tools are used?",
    answer:
      "MATLAB, Simulink, Python, ROS, PLC tools, Arduino, Raspberry Pi, AI frameworks, IoT platforms, and cloud systems."
  },
  {
    question: "Are projects IEEE aligned?",
    answer:
      "Yes, projects align with IEEE Transactions (2023–2025) on Industrial Informatics and Manufacturing."
  },
  {
    question: "Is publication support provided?",
    answer:
      "Yes, IEEE, Scopus, Elsevier, and IEC journal and patent support is provided."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Smart Manufacturing Systems (Industry 4.0) – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Smart Manufacturing Systems (Industry 4.0) Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering IoT, AI optimization, digital twins, predictive maintenance, and cyber-physical systems.";

const pageUrl =
  "/department/manufacturing-production/smart-manufacturing-systems";

const MESmartManufacturingSystemsProjectDevelopmentCenter = () => {
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
                <strong>Narpavi Research Institute</strong> presents the Smart Manufacturing Systems (Industry 4.0) Project Development Center, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on IoT-enabled manufacturing, AI-driven production, digital twins, and smart factory automation.
              </p>
              <p>
                Our projects leverage MATLAB, ROS, Python, IoT, AI, and cloud platforms to address challenges in automotive, aerospace, electronics, and FMCG industries, ensuring high-impact research and industrial relevance.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-importance">
              <h2>Importance of Smart Manufacturing Systems (Industry 4.0)</h2>
              <ul>
                <li><strong>Efficiency</strong>: Optimizes production through real-time data and automation.</li>
                <li><strong>Predictive Maintenance</strong>: Reduces downtime with AI-driven analytics.</li>
                <li><strong>Scalability</strong>: Enables multi-site, cloud-connected manufacturing.</li>
                <li><strong>Sustainability</strong>: Promotes energy-efficient and eco-friendly production.</li>
                <li><strong>Intelligence</strong>: Integrates AI and digital twins for autonomous operations.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-btech">
              <h2>B.Tech Smart Manufacturing Systems Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational Industry 4.0 projects aligned with IEEE topics.</p>
              <ul>
                <li>Learn IoT, sensors, and smart factory fundamentals</li>
                <li>Simulate production processes using MATLAB or Simulink</li>
                <li>Implement small-scale setups with Arduino/Raspberry Pi</li>
                <li>Develop IoT-based monitoring or predictive maintenance systems</li>
              </ul>
              <p>Example: IoT-based conveyor belt monitoring for production tracking.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Smart Manufacturing Systems Project Development</h2>
              <p>For postgraduate students, projects focus on advanced Industry 4.0 solutions.</p>
              <ul>
                <li>Model factory operations with digital twins</li>
                <li>Apply AI/ML for predictive maintenance and optimization</li>
                <li>Integrate IoT and cloud for real-time monitoring</li>
                <li>Optimize energy and material usage in production</li>
              </ul>
              <p>Example: AI-driven predictive maintenance for smart factory equipment.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Smart Manufacturing Systems Project Development</h2>
              <p>For doctoral scholars, our center supports cutting-edge Industry 4.0 research.</p>
              <ul>
                <li>Identify gaps in AI-driven production or cyber-physical security</li>
                <li>Develop digital twins for real-time factory optimization</li>
                <li>Implement advanced AI and cloud-based manufacturing systems</li>
                <li>Publish in IEEE, ISO, Elsevier, and IEC-aligned journals</li>
              </ul>
              <p>Example: Digital twin framework for autonomous smart factory operations.</p>
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
                      <td>IoT-Enabled Sensors</td>
                      <td>Smart Factories</td>
                      <td>Real-time monitoring & data collection</td>
                      <td>Data security risks</td>
                      <td>B.Tech</td>
                    </tr>
                    <tr>
                      <td>Digital Twin Systems</td>
                      <td>Automotive, Aerospace</td>
                      <td>Virtual process optimization</td>
                      <td>High computational cost</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>AI & ML Algorithms</td>
                      <td>Manufacturing Lines</td>
                      <td>Predictive maintenance & efficiency</td>
                      <td>Complex model training</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Cloud-Based Production Platforms</td>
                      <td>Electronics, FMCG</td>
                      <td>Remote monitoring & scalability</td>
                      <td>Connectivity issues</td>
                      <td>M.Tech</td>
                    </tr>
                    <tr>
                      <td>Robotic Automation & Cobots</td>
                      <td>Industry 4.0 Factories</td>
                      <td>High precision & human-robot collaboration</td>
                      <td>Integration complexity</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="MEProjectDevelopmentCenter-keyareas">
              <h2>Key Research & Project Areas</h2>
              <ul>
                <li><strong>Cyber-Physical Systems (CPS):</strong> Machinery-virtual system integration, real-time control, secure protocols.</li>
                <li><strong>Digital Twin & Simulation:</strong> Virtual factory replicas, predictive analytics, energy-efficient processes.</li>
                <li><strong>AI-Driven Manufacturing:</strong> Predictive maintenance, dynamic scheduling, quality inspection.</li>
                <li><strong>IoT & Cloud Integration:</strong> Real-time data acquisition, remote monitoring, scalable platforms.</li>
                <li><strong>Applications in Industry:</strong> Automotive (assembly lines), aerospace (maintenance), electronics (PCB assembly), FMCG (packaging).</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-casestudy">
              <h2>Case Study – Smart Factory Implementation in Automotive Industry</h2>
              <p>
                IEEE research (2023–2025) shows that AI and IoT-enabled smart factories increase production efficiency by up to 30% and reduce energy consumption in automotive plants. Digital twins and predictive analytics optimize machine usage, reduce downtime, and ensure high-quality output, while cobots enhance workforce safety.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>IoT-Integrated Smart Manufacturing System with Predictive Maintenance (2023)</li>
                <li>AI-Driven Production Scheduling in Industry 4.0 Factories (2023)</li>
                <li>Digital Twin Framework for Real-Time Factory Optimization (2024)</li>
                <li>Cloud-Based Smart Factory Monitoring and Control System (2024)</li>
                <li>Reinforcement Learning for Adaptive Manufacturing Processes (2024)</li>
                <li>Cybersecurity in IoT-Enabled Smart Factories (2025)</li>
                <li>Energy-Efficient Manufacturing Using AI-Based Optimization (2025)</li>
                <li>Collaborative Robots for Human-Centric Smart Factory Operations (2025)</li>
                <li>Hybrid IoT and Digital Twin System for Multi-Site Manufacturing (2025)</li>
                <li>Predictive Quality Inspection Using Machine Vision in Industry 4.0 (2025)</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-futurescope">
              <h2>Future Scope & Research Opportunities</h2>
              <ul>
                <li><strong>AI & Machine Learning:</strong> Fully autonomous production lines.</li>
                <li><strong>Cybersecurity:</strong> Securing IoT-enabled factories against cyber threats.</li>
                <li><strong>Digital Twins & Metaverse:</strong> Virtual factories for design and testing.</li>
                <li><strong>Sustainable Manufacturing:</strong> Eco-friendly, energy-optimized processes.</li>
                <li><strong>Global Industry 4.0 Adoption:</strong> Intelligent factories across multi-national supply chains.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in Smart Manufacturing Systems (Industry 4.0) project development for B.Tech, M.Tech, and Ph.D. students. With expertise in IoT, AI, robotics, cloud integration, and digital twins, we provide IEEE-aligned (2023–2025) project support and publication services in high-impact journals (IEEE, ISO, Elsevier). Our projects empower students to contribute to cutting-edge solutions in automotive, aerospace, electronics, and FMCG industries.
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

export default MESmartManufacturingSystemsProjectDevelopmentCenter;
