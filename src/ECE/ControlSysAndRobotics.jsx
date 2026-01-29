import Subsidebar from ".././pages/Subsidebar";
import "./ECEProjectDevelopmentCenter.scss";
import SEO from "../assets/SEO";
import Leftsidebar from "../assets/Leftsidebar";

/* ✅ Keywords as ARRAY OBJECT */
const keywords = [
  "Control Systems Project Development",
  "Robotics IEEE Projects",
  "Autonomous Robotics Projects",
  "PID Controller Projects",
  "Model Predictive Control Projects",
  "ROS Robotics Projects",
  "UAV Control IEEE Topics",
  "Industrial Automation Robotics",
  "AI in Control Systems",
  "PhD Robotics Research"
];

const faqs = [
  {
    question: "What services does the Control Systems & Robotics Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Control Systems & Robotics Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in control systems and robotics, focusing on intelligent automation, mechatronics, and AI-driven solutions for industries like manufacturing, logistics, and healthcare."
  },
  {
    question: "What types of control systems and robotics projects are supported?",
    answer:
      "We support B.Tech projects (PID controllers, robotic arms), M.Tech projects (MPC, AI-based path planning), and Ph.D. projects (swarm robotics, nonlinear control) for applications in industrial automation, autonomous vehicles, and medical robotics."
  },
  {
    question: "Which technologies are used in control systems and robotics project development?",
    answer:
      "Our stack includes MATLAB, Simulink, ROS, Python, Arduino, Raspberry Pi, FPGA, and Gazebo for advanced control and robotic solutions."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are based on IEEE Transactions (2023–2025), covering areas like adaptive control, swarm robotics, and AI-driven automation, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer:
      "We offer end-to-end guidance, including topic selection, algorithm design, simulation, hardware prototyping, validation, documentation, and IEEE/Scopus journal publication support."
  }
];

const ECEControlSystemsRoboticsProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">

      {/* ✅ SEO FIXED */}
      <SEO
        title="Control Systems & Robotics – Project Development Center in Chennai"
        description="Control Systems & Robotics project development for B.Tech, M.Tech & PhD students focusing on robotics, intelligent automation, PID, MPC, AI-driven control, ROS, FPGA, UAVs, and IEEE-aligned research projects."
        url="/control-systems-robotics-project-development-center-chennai"
        keywords={keywords}
        faqs={faqs}
      />

      <Subsidebar
        extraLinks={[
          { id: "ece", label: "ece", path: "/department?dept=ece" }
        ]}
      />

      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          {/* ✅ LEFT SIDEBAR (classname fixed) */}
          <aside className="left-sidebar2">
           <Leftsidebar/>
          
          </aside>

          {/* ❌ CENTER CONTENT — NOT MODIFIED */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Control Systems & Robotics – Project Development Center in Chennai</h1>
     <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Control Systems & Robotics – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. students to excel in intelligent automation, mechatronics, and robotic control solutions. Our projects are aligned with IEEE Transactions (2023–2025) to ensure cutting-edge innovation.
              </p>
              <p>
                Through expert mentorship and advanced tools like MATLAB, Simulink, ROS, and FPGA platforms, we deliver end-to-end project solutions for industries like manufacturing, logistics, and healthcare, bridging academic rigor with real-world applications.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Technology vs. Industry Comparative Table – Control Systems & Robotics</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology Domain</th>
                      <th>Industry Application</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PID & Fuzzy Logic Controllers</td>
                      <td>Industrial Process Automation</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, Simulink</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Model Predictive Control (MPC)</td>
                      <td>Energy & Power Grid Systems</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB, LabVIEW</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>ANN-Based Control</td>
                      <td>Autonomous Vehicles & Robotics</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>Computer Vision & Sensor Fusion</td>
                      <td>Manufacturing Automation</td>
                      <td>B.Tech/M.Tech</td>
                      <td>OpenCV, ROS</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>UAV Swarm Robotics</td>
                      <td>Surveillance & Disaster Response</td>
                      <td>Ph.D.</td>
                      <td>ROS, Gazebo</td>
                      <td>Expert</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Control Systems & Robotics Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational control systems and robotics projects like PID controllers or robotic arms, aligned with IEEE topics.
              </p>
              <ul>
                <li>IEEE 2023–2025 topic selection</li>
                <li>Simulation using MATLAB and Simulink</li>
                <li>Basic control algorithms and sensor integration</li>
                <li>Hardware using Arduino or Raspberry Pi</li>
                <li>IEEE-format reports and demos</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Control Systems & Robotics Project Development</h2>
              <p>
                For postgraduate students, we develop advanced control and robotics projects like MPC and AI-based navigation.
              </p>
              <ul>
                <li>Advanced IEEE literature review</li>
                <li>ROS, MPC, ANN implementations</li>
                <li>Autonomous navigation systems</li>
                <li>Smart factory integration</li>
                <li>Journal-ready thesis support</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Control Systems & Robotics Project Development</h2>
              <p>
                For doctoral scholars, our center focuses on cutting-edge research in swarm robotics, nonlinear control, and AI-driven automation.
              </p>
              <ul>
                <li>IEEE gap analysis (2023–2025)</li>
                <li>Advanced ROS / FPGA systems</li>
                <li>Real-world testbed validation</li>
                <li>Cloud & IoT integration</li>
                <li>IEEE / SCI publication & patents</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Control Systems & Robotics Project Titles (2023–2025)</h2>
              <ul>
                <li>Adaptive PID Controller for Autonomous Robots</li>
                <li>Deep Reinforcement Learning for Robotic Arms</li>
                <li>UAV Swarm Coordination Using MPC</li>
                <li>AI-Based Path Planning for Warehouse Robots</li>
                <li>ROS-Based Multi-Robot Collaboration</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global research and project development center delivering IEEE-standard Control Systems & Robotics projects with real-world impact and academic excellence.
              </p>
            </section>

            {/* FAQ UI only — schema handled by SEO */}
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
            </section>          </div>

          {/* ✅ RIGHT SIDEBAR (classname fixed) */}
          <aside className="right-sidebar1">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/department/control-systems-robotics">Control Systems & Robotics Project</a></li>
              <li><a href="/department/control-systems-robotics/adaptive-nonlinear-control-systems">Adaptive Nonlinear Control Systems</a></li>
              <li><a href="/department/control-systems-robotics/ai-powered-robotic-control-systems">AI-Powered Robotic Control Systems</a></li>
              <li><a href="/department/control-systems-robotics/autonomous-robot-navigation-path-planning">Autonomous Robot Navigation & Path Planning</a></li>
              <li><a href="/department/control-systems-robotics/swarm-robotics-multi-agent-systems">Swarm Robotics & Multi-Agent Systems</a></li>
              <li><a href="/department/control-systems-robotics/control-cyber-physical-systems">Control in Cyber-Physical Systems</a></li>
              <li><a href="/department/control-systems-robotics/robotic-vision-sensor-fusion">Robotic Vision & Sensor Fusion</a></li>
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

export default ECEControlSystemsRoboticsProjectDevelopmentCenter;
