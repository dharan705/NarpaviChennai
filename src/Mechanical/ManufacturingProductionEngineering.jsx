import "./MEProjectDevelopmentCenter.scss";
import Subsidebar from ".././pages/Subsidebar";
import SEO from "../assets/SEO";
import Leftsidebar from "../assets/Leftsidebar";

/* ✅ KEYWORDS ARRAY OBJECT */
const keywords = [
  "Manufacturing Engineering IEEE Projects 2023–2025",
  "CNC Machining Optimization Projects",
  "Additive Manufacturing Student Projects",
  "Industry 4.0 Smart Factory Projects",
  "Robotics Automation IEEE Projects",
  "Digital Twin Manufacturing Research",
  "Sustainable Manufacturing PhD Projects",
  "Tool Design Optimization Projects",
  "Production Engineering B.Tech Projects",
  "Narpavi Research Institute Manufacturing",
];

const faqs = [
  {
    question:
      "What services does the Manufacturing & Production Engineering Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Manufacturing & Production Engineering Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on CNC machining, additive manufacturing, robotics, and Industry 4.0 solutions for aerospace, automotive, and healthcare applications.",
  },
  {
    question:
      "What types of Manufacturing & Production Engineering projects are supported?",
    answer:
      "We support B.Tech projects (CNC toolpath generation, 3D printing), M.Tech projects (hybrid manufacturing, IoT-enabled automation), and Ph.D. projects (AI-driven digital twins, sustainable manufacturing).",
  },
  {
    question:
      "Which tools and technologies are used in Manufacturing & Production Engineering projects?",
    answer:
      "Our stack includes SolidWorks, CATIA, Siemens NX, AutoCAD, MasterCAM, ANSYS, MATLAB, AI frameworks, PLC systems, and IoT platforms.",
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are based on IEEE Transactions (2023–2025) on Manufacturing and Industrial Engineering.",
  },
  {
    question: "What support is provided for academic submissions?",
    answer:
      "We offer end-to-end guidance including topic selection, CAD/CAM modeling, simulations, prototype fabrication, documentation, and journal publication support.",
  },
];

const MEManufacturingProductionEngineeringProjectDevelopmentCenter = () => {
  return (
    <div className="MEProjectDevelopmentCenter">
      {/* ✅ SEO FIXED */}
      <SEO
        title="Manufacturing & Production Engineering – Project Development Center in Chennai"
        description="Manufacturing & Production Engineering project development for B.Tech, M.Tech, and Ph.D. students focusing on CNC machining, additive manufacturing, robotics, Industry 4.0, AI-driven digital twins, and smart factory systems."
        keywords={keywords}
        url="/department/manufacturing-production"
        faqs={faqs}
      />

      <Subsidebar
        extraLinks={[
          { id: "mech", label: "mech", path: "/department?dept=mech" },
        ]}
      />

      <div className="MEProjectDevelopmentCenter-main">
        <div className="MEProjectDevelopmentCenter-grid">
          
          {/* ✅ LEFT SIDEBAR */}
          <aside className="left-sidebar2">
           <Leftsidebar/>

            </aside>

          {/* CENTER CONTENT */}
          <div className="MEProjectDevelopmentCenter-center">
            {/* ✅ H1 FIXED */}
            <h1>
              Manufacturing & Production Engineering – Project Development Center in Chennai
            </h1>
                 <section className="MEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Manufacturing & Production Engineering Project Development Center, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on CNC machining, additive manufacturing, robotics, and smart Industry 4.0 solutions.
              </p>
              <p>
                Our projects leverage CAD/CAM, FEA, CFD, AI, and IoT to address challenges in aerospace, automotive, healthcare, and smart factories, ensuring high-impact research and industrial relevance.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-importance">
              <h2>Importance of Manufacturing & Production Engineering</h2>
              <ul>
                <li><strong>Process Efficiency</strong>: Optimizes production workflows for cost and time savings.</li>
                <li><strong>Precision Engineering</strong>: Enhances accuracy in aerospace and automotive components.</li>
                <li><strong>Sustainability</strong>: Promotes eco-friendly manufacturing practices.</li>
                <li><strong>Automation</strong>: Drives Industry 4.0 with robotics and smart systems.</li>
                <li><strong>Innovation</strong>: Enables advanced materials and digital twin technologies.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-btech">
              <h2>B.Tech Manufacturing & Production Engineering Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational manufacturing projects aligned with IEEE topics.</p>
              <ul>
                <li>Learn machining, robotics, and production workflows</li>
                <li>Design using SolidWorks, CATIA, or AutoCAD</li>
                <li>Generate CNC toolpaths and 3D-printed prototypes</li>
                <li>Compare traditional vs. optimized manufacturing techniques</li>
              </ul>
              <p>Example: CNC toolpath optimization for milling efficiency.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Manufacturing & Production Engineering Project Development</h2>
              <p>For postgraduate students, projects focus on advanced manufacturing and automation.</p>
              <ul>
                <li>Simulate tool wear and machining dynamics using FEA/CFD</li>
                <li>Develop hybrid manufacturing with CNC and 3D printing</li>
                <li>Integrate IoT and PLC for real-time production monitoring</li>
                <li>Optimize energy efficiency and material utilization</li>
              </ul>
              <p>Example: IoT-enabled robotic assembly line optimization.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Manufacturing & Production Engineering Project Development</h2>
              <p>For doctoral scholars, our center supports cutting-edge manufacturing research.</p>
              <ul>
                <li>Explore digital twins, AI-driven production, and Industry 4.0</li>
                <li>Model advanced processes with FEA and CFD</li>
                <li>Develop cloud-based smart factory solutions</li>
                <li>Publish in IEEE, ASME, Elsevier, and Springer journals</li>
              </ul>
              <p>Example: Digital twin for real-time CNC machining optimization.</p>
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
                      <td>CNC Machining Optimization</td>
                      <td>Aerospace, automotive</td>
                      <td>High precision, reduced lead time</td>
                      <td>Tool wear and vibration</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>Additive Manufacturing</td>
                      <td>Healthcare, prototyping</td>
                      <td>Lightweight, customization</td>
                      <td>Material limitations</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>Industrial Robotics</td>
                      <td>Manufacturing, logistics</td>
                      <td>Efficiency, consistency</td>
                      <td>High initial cost</td>
                      <td>M.Tech</td>
                    </tr>
                    <tr>
                      <td>Smart Manufacturing (Industry 4.0)</td>
                      <td>Factories, supply chains</td>
                      <td>Real-time monitoring, automation</td>
                      <td>Data security concerns</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Tool & Process Optimization</td>
                      <td>Heavy machinery, die casting</td>
                      <td>Durability, cost savings</td>
                      <td>Complex optimization models</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="MEProjectDevelopmentCenter-keyareas">
              <h2>Key Research & Project Areas</h2>
              <ul>
                <li><strong>CNC Machining Optimization:</strong> Multi-axis toolpaths, tool wear modeling, energy-efficient machining, vibration control.</li>
                <li><strong>Additive Manufacturing:</strong> Topology optimization, metal 3D printing, functionally graded materials, hybrid processes.</li>
                <li><strong>Industrial Automation & Robotics:</strong> Robotic assembly, AI-enabled welding, PLC/IoT integration, AGVs.</li>
                <li><strong>Smart Manufacturing (Industry 4.0):</strong> Digital twins, predictive maintenance, cloud-integrated manufacturing, AI quality control.</li>
                <li><strong>Tool Design & Process Optimization:</strong> Advanced die/mold design, thermal/stress analysis, extended tool life, multi-objective optimization.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-Based CNC Toolpath Optimization for Sustainable Machining (2023)</li>
                <li>Digital Twin–Integrated Smart Factory for Real-Time Process Control (2023)</li>
                <li>Additive Manufacturing of Biomedical Implants with Topology Optimization (2024)</li>
                <li>IoT-Enabled Predictive Maintenance in Industrial Robotics (2024)</li>
                <li>FEM Simulation of Tool–Workpiece Interaction in High-Speed Machining (2024)</li>
                <li>Autonomous Robotic Welding System with Machine Vision (2025)</li>
                <li>Cloud-Based Industry 4.0 Architecture for Small-Scale Manufacturing Units (2025)</li>
                <li>Multi-Material 3D Printing of Aerospace Components (2025)</li>
                <li>Machine Learning for Tool Wear Prediction in CNC Machining (2025)</li>
                <li>Energy-Efficient Hybrid Manufacturing Processes (2025)</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-futurescope">
              <h2>Future Scope & Research Opportunities</h2>
              <ul>
                <li><strong>AI & Machine Learning</strong>: Self-optimizing manufacturing systems.</li>
                <li><strong>Sustainable Manufacturing</strong>: Eco-friendly production processes.</li>
                <li><strong>Digital Twin Factories</strong>: Virtual control of physical systems.</li>
                <li><strong>Advanced Materials</strong>: 3D printing with composites and bio-compatible alloys.</li>
                <li><strong>Industry 4.0 Transition</strong>: Fully automated, data-driven smart factories.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in Manufacturing & Production Engineering project development for B.Tech, M.Tech, and Ph.D. students. With expertise in CNC optimization, additive manufacturing, robotics, and Industry 4.0 systems, we provide IEEE-aligned (2023–2025) project support and publication services in high-impact journals (IEEE, ASME, Elsevier, Springer). Our projects empower students to contribute to cutting-edge solutions in aerospace, automotive, healthcare, and smart factories.
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
            <h3>🔗 Related Services</h3>
            <ul>
              <li>
                <a href="/department/manufacturing-production">
                  Manufacturing & Production Engineering
                </a>
              </li>
              <li>
                <a href="/department/manufacturing-production/cnc-machining-optimization">
                  CNC Machining Optimization
                </a>
              </li>
              <li>
                <a href="/department/manufacturing-production/additive-manufacturing">
                  Additive Manufacturing
                </a>
              </li>
              <li>
                <a href="/department/manufacturing-production/industrial-automation-robotics">
                  Industrial Automation & Robotics
                </a>
              </li>
              <li>
                <a href="/department/manufacturing-production/smart-manufacturing-systems">
                  Smart Manufacturing Systems
                </a>
              </li>
              <li>
                <a href="/department/manufacturing-production/tool-design-process">
                  Tool Design & Process
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

export default MEManufacturingProductionEngineeringProjectDevelopmentCenter;
