import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "ARM PIC AVR Microcontroller Project Development Center in Chennai",
  "ARM Microcontroller IEEE Projects 2023–2025",
  "PIC AVR Embedded Systems Projects",
  "Embedded Systems Project Development Chennai",
  "B.Tech Microcontroller Projects",
  "M.Tech IoT Embedded Systems",
  "Ph.D AI Embedded Control Systems",
  "Real Time Embedded Systems Research",
  "Automotive Embedded Systems Projects",
  "Robotics Embedded Systems IEEE",
  "Narpavi Research Institute Embedded Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the ARM/PIC/AVR Microcontroller Projects Development Center offer?",
    answer:
      "We support B.Tech, M.Tech, and Ph.D. students in IEEE-aligned (2023–2025) projects focusing on ARM, PIC, and AVR microcontrollers for embedded system design, peripheral interfacing, IoT integration, AI-assisted control, and automation."
  },
  {
    question: "What types of microcontroller projects are supported?",
    answer:
      "B.Tech projects include microcontroller prototypes and IoT integration. M.Tech projects focus on AI-enabled embedded control and energy-efficient systems. Ph.D projects cover deep learning-based embedded applications, robotics, automotive systems, patents, and publications."
  },
  {
    question: "Which tools and technologies are used?",
    answer:
      "Keil, Arduino IDE, Embedded C/C++, Proteus, MATLAB/Simulink, IoT platforms (MQTT, Zigbee), FPGA/DSP controllers, and AI frameworks such as TensorFlow and PyTorch."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects follow IEEE Transactions (2023–2025) in low-power microcontroller designs, IoT-enabled embedded systems, automotive control, and robotics applications."
  },
  {
    question: "What academic support is provided?",
    answer:
      "Complete guidance including topic selection, code development, hardware prototyping, IoT connectivity, experimental validation, IEEE-format documentation, and Scopus/SCI/IEEE journal publishing support."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "ARM PIC AVR Microcontroller Projects – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) ARM PIC AVR Microcontroller Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering embedded systems, IoT integration, real-time control, robotics, automotive applications, and AI-assisted embedded solutions.";

const pageUrl =
  "/department/embedded-systems-electrical/arm-pic-avr-microcontroller";

const EEEArmPicAvrMicrocontrollerProjectDevelopmentCenter = () => {
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
            {/* ✅ SINGLE H1 ONLY */}
            <h1>{pageTitle}</h1>
 {/* Introduction */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> presents this Project Development Center for ARM, PIC, and AVR microcontrollers. It empowers B.Tech, M.Tech, and Ph.D. scholars to explore IEEE-aligned (2023–2025) research fields in embedded systems, peripheral interfacing, real-time control, IoT integration, and robotics automation.</p>
              <p>Students gain expertise in simulation, coding in Embedded C/C++, laboratory validation, IoT-sensor integration, and AI-based adaptive control for industrial and commercial applications.</p>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech ARM/PIC/AVR Projects</h2>
              <ul>
                <li>Study of microcontroller architecture and IoT peripherals</li>
                <li>IEEE topics (2023–2025) on embedded designs</li>
                <li>Coding with Keil/Arduino IDE, Proteus simulation</li>
                <li>Sensor/actuator interfacing and basic RTOS scheduling</li>
                <li>IoT-based prototypes with data acquisition</li>
                <li>Finalize IEEE-style technical reports</li>
              </ul>
              <p>Focus: foundation-level microcontroller programming with IoT embedding.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech ARM/PIC/AVR Projects</h2>
              <ul>
                <li>IEEE Transactions survey on embedded control (2023–2025)</li>
                <li>Design of AI/ML-driven adaptive control algorithms</li>
                <li>Simulation for energy optimization & real-time reliability</li>
                <li>IoT-monitored microcontroller prototypes (ARM/PIC/AVR)</li>
                <li>Smart device integration and industrial control validation</li>
                <li>IEEE-compliant research reports</li>
              </ul>
              <p>Focus: optimization, intelligent control, embedded AI, and IoT-enabled monitoring.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. ARM/PIC/AVR Projects</h2>
              <ul>
                <li>Comprehensive IEEE review of embedded IoT and RTOS</li>
                <li>AI/ML deep learning-based embedded applications</li>
                <li>IoT + real-time monitoring of microcontroller grids</li>
                <li>Testing in lab with FPGA/DSP and hardware drivers</li>
                <li>Patent-oriented innovations & IEEE publications</li>
              </ul>
              <p>Focus: next-gen embedded intelligence, automotive safety, robotics, and energy-efficient systems.</p>
            </section>

            {/* Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Microcontroller Technologies vs. Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Research Focus</th>
                      <th>Industry Application</th>
                      <th>R&D Focus (2023–2025)</th>
                      <th>Academic Level</th>
                      <th>Tools & Frameworks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ARM Microcontroller Projects</td>
                      <td>Industrial automation, Smart Devices</td>
                      <td>High-performance, low-power control</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Keil, MATLAB/Simulink</td>
                    </tr>
                    <tr>
                      <td>PIC/AVR Projects</td>
                      <td>Robotics, Consumer Electronics</td>
                      <td>Peripheral interfacing, cost efficiency</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Arduino IDE, Proteus</td>
                    </tr>
                    <tr>
                      <td>FPGA-Based Integration</td>
                      <td>Industrial automation</td>
                      <td>Parallel operations, HW acceleration</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>FPGA, VHDL/Verilog</td>
                    </tr>
                    <tr>
                      <td>IoT Embedded Systems</td>
                      <td>Smart Homes, Healthcare</td>
                      <td>Wireless comms & remote monitoring</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MQTT, IoT Platforms</td>
                    </tr>
                    <tr>
                      <td>Real-Time OS</td>
                      <td>Automotive Systems</td>
                      <td>Deterministic performance, scheduling</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>FreeRTOS, Embedded Linux</td>
                    </tr>
                    <tr>
                      <td>Automotive Embedded Systems</td>
                      <td>EVs, Safety Systems</td>
                      <td>CAN bus communication & adaptive control</td>
                      <td>Ph.D.</td>
                      <td>Simulink, MATLAB</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in embedded system R&D. 
                Through our ARM/PIC/AVR Microcontroller Projects Center, scholars get IEEE-standard guidance, 
                IoT+AI integration training, hardware prototyping, and research publication opportunities.
              </p>
              <p>
                Students gain practical expertise in real-time embedded system design 
                and achieve international recognition in microcontroller-based research.
              </p>
            </section>

            {/* FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((f, i) => (
                  <details key={i}>
                    <summary>{f.question}</summary>
                    <p>{f.answer}</p>
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
              <li><a href="/department/embedded-systems-electrical/arm-pic-avr-microcontroller">ARM PIC AVR Microcontroller Projects</a></li>
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

export default EEEArmPicAvrMicrocontrollerProjectDevelopmentCenter;
