import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Embedded Systems for Robotics Project Development Center in Chennai",
  "Embedded Robotics IEEE Projects 2023–2025",
  "Robotics Embedded Systems Projects",
  "B.Tech Embedded Robotics Projects",
  "M.Tech AI Robotics Control",
  "Ph.D Autonomous Robotics Research",
  "Sensor Fusion Robotics Embedded",
  "IoT Robotics Embedded Systems",
  "FPGA Robotics Control Projects",
  "Real-Time Embedded Robotics",
  "Narpavi Research Institute Robotics Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Embedded Systems for Robotics Project Development Center offer?",
    answer:
      "We support B.Tech, M.Tech, and Ph.D. students working on IEEE-aligned (2023–2025) projects such as microcontroller/FPGA-based robotics, AI-assisted robotic planning, sensor fusion, real-time embedded control, and IoT-enabled robotics integration."
  },
  {
    question: "What types of robotics projects are supported?",
    answer:
      "B.Tech projects include robotic prototypes with microcontrollers and sensors. M.Tech projects focus on AI-assisted path planning and sensor fusion. Ph.D. projects cover deep-learning robotics, autonomous decision-making, patents, and IEEE publications."
  },
  {
    question: "Which tools and platforms are used?",
    answer:
      "Arduino, ESP32, ARM Cortex, FPGA boards, MATLAB/Simulink, Proteus, ROS, IoT platforms, TensorFlow, and PyTorch."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects reference IEEE Transactions (2023–2025) for robotics embedded systems, real-time control, AI-assisted decision-making, and autonomous systems."
  },
  {
    question: "What academic support is provided?",
    answer:
      "We assist with IEEE topic selection, embedded coding, AI/IoT integration, prototyping, real-time robotics control, IEEE-style reports, and journal publication guidance."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Embedded Systems for Robotics – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Embedded Systems for Robotics Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering AI-assisted robotic control, sensor fusion, real-time embedded systems, FPGA, ROS, IoT, and autonomous robotics.";

const pageUrl =
  "/department/embedded-systems-electrical/embedded-robotics";

const EEEEmbeddedRoboticsProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">

      {/* 🔍 SEO */}
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        url={pageUrl}
        faqs={faqs}
      />

      <Sidebar />

      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* ⬅ LEFT SIDEBAR */}
          <aside className="left-sidebar2">
            <Leftsidebar />
          </aside>

          {/* 📑 CENTER CONTENT */}
          <div className="EEEProjectDevelopmentCenter-center">
            {/* ✅ SINGLE H1 */}
            <h1>{pageTitle}</h1>
  {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> introduces the Embedded Systems for Robotics Project Development Center, 
                offering scholars IEEE-aligned (2023–2025) practical training and research opportunities in robotics automation, 
                sensor fusion, FPGA-based motion control, AI-assisted embedded systems, and autonomous robotics.
              </p>
              <p>
                Students design robotic prototypes, implement real-time controllers, integrate IoT, and develop AI-based motion planning for drones, humanoids, industrial & service robots.
              </p>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Robotics Embedded Projects</h2>
              <ul>
                <li>Microcontroller programming for robotic systems</li>
                <li>IEEE (2023–2025) robotics embedded research</li>
                <li>Simulation in MATLAB/Simulink & Proteus</li>
                <li>Prototypes with sensors, actuators, controllers</li>
                <li>Testing for motion control accuracy & obstacle avoidance</li>
                <li>Reports in IEEE format & technical evaluation</li>
              </ul>
              <p>Focus: fundamental embedded robotics development & hardware control basics.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Robotics Embedded Projects</h2>
              <ul>
                <li>Literature review of IEEE Transactions robotics studies (2023–2025)</li>
                <li>AI-assisted path planning and predictive control</li>
                <li>Multi-sensor fusion algorithms for adaptive robotics</li>
                <li>Embedded system integration with robots/drones</li>
                <li>Test performance in real-time tasks with AI-based monitoring</li>
                <li>Publish IEEE-conformant robotics reports</li>
              </ul>
              <p>Focus: advanced robotics automation, AI + embedded system design, experimental validations.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D Robotics Embedded Projects</h2>
              <ul>
                <li>Comprehensive IEEE review (2023–2025) robotics research gaps</li>
                <li>AI/Deep learning models for robotic motion & environmental adaptability</li>
                <li>IoT-embedded controllers for real-time robotics</li>
                <li>Experimental robotics prototypes with sensor fusion, adaptive motion control</li>
                <li>Patents + IEEE journal publications</li>
              </ul>
              <p>Focus: next-gen robotics research → intelligent, autonomous, and adaptive robotic systems.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Robotics Embedded Systems vs. Industry</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Focus</th>
                      <th>Industry Application</th>
                      <th>Research & Development Focus (2023–2025)</th>
                      <th>Academic Level</th>
                      <th>Tools & Frameworks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Microcontroller Control</td>
                      <td>Industrial & Mobile Robots</td>
                      <td>Low-power real-time motion</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Arduino IDE, C/C++</td>
                    </tr>
                    <tr>
                      <td>FPGA Robotics Systems</td>
                      <td>Drones, Automation</td>
                      <td>High-speed deterministic control</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>VHDL, Verilog, Xilinx</td>
                    </tr>
                    <tr>
                      <td>Sensor Integration</td>
                      <td>Autonomous Systems</td>
                      <td>Multi-sensor data fusion</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink</td>
                    </tr>
                    <tr>
                      <td>AI-Assisted Motion Planning</td>
                      <td>Autonomous Vehicles, Humanoids</td>
                      <td>Path optimization, adaptive behavior</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch + ROS</td>
                    </tr>
                    <tr>
                      <td>IoT Robotics Systems</td>
                      <td>Smart Factories, Industry IoT</td>
                      <td>IoT monitoring + cloud robotics</td>
                      <td>B.Tech/Ph.D.</td>
                      <td>MQTT, IoT platforms</td>
                    </tr>
                    <tr>
                      <td>Embedded Vision & Control</td>
                      <td>Inspection Robots, Navigation</td>
                      <td>Image processing + object detection</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>OpenCV, Embedded Python</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute is a globally recognized hub for IEEE-driven robotics research. This center provides end-to-end support in AI, embedded hardware, real-time robotics, IoT integration, and IEEE publication guidance for scholars worldwide.</p>
              <p>Our scholars achieve academic excellence and industrial relevance, implementing adaptive robotic controllers, robotic IoT integration, and autonomous embedded systems.</p>
            </section>

            {/* ❓ FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((item, i) => (
                  <details key={i}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>

            </section>
          </div>

          {/* ➡ RIGHT SIDEBAR */}
          <aside className="right-sidebar1">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/department/embedded-systems-electrical">Embedded Systems – Project Development Center</a></li>
              <li><a href="/department/embedded-systems-electrical/arm-pic-avr-microcontroller">ARM, PIC & AVR Microcontroller Systems</a></li>
              <li><a href="/department/embedded-systems-electrical/automotive-embedded-systems">Automotive Embedded Systems</a></li>
              <li><a href="/department/embedded-systems-electrical/embedded-robotics">Embedded Robotics</a></li>
              <li><a href="/department/embedded-systems-electrical/fpga-control-applications">FPGA Control Applications</a></li>
              <li><a href="/department/embedded-systems-electrical/iot-embedded-hardware-design">IoT Embedded Hardware Design</a></li>
              <li><a href="/department/embedded-systems-electrical/rtos">RTOS Project Development Center</a></li>
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

export default EEEEmbeddedRoboticsProjectDevelopmentCenter;
