import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "IoT Embedded Hardware Design Project Development Center in Chennai",
  "IoT Embedded Hardware IEEE Projects 2023–2025",
  "Sensor Integration IoT Projects",
  "B.Tech IoT Embedded Systems",
  "M.Tech AI Assisted IoT Hardware",
  "Ph.D Edge Computing IoT Projects",
  "ESP32 ARM PIC AVR IoT Projects",
  "Wireless Communication IoT Hardware",
  "Industrial IoT Prototyping",
  "Secure IoT Embedded Systems",
  "Narpavi Research Institute IoT Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the IoT-Embedded Hardware Design Project Development Center offer?",
    answer:
      "We support B.Tech, M.Tech, and Ph.D. projects in IEEE-aligned (2023–2025) areas such as IoT hardware design, embedded programming, sensor integration, wireless communication, AI-assisted analytics, and secure cloud integration."
  },
  {
    question: "What types of IoT-Embedded Hardware projects are supported?",
    answer:
      "We support B.Tech projects, M.Tech projects, and Ph.D. projects covering embedded IoT hardware, AI-enabled analytics, secure communication, and scalable architectures."
  },
  {
    question: "Which tools and technologies are used?",
    answer:
      "ARM, PIC, AVR, ESP32, Arduino IDE, Proteus, Embedded C/C++, MATLAB/Simulink, MQTT, AWS IoT, ThingSpeak, TensorFlow, and PyTorch."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects align with IEEE Transactions (2023–2025) on IoT hardware, embedded systems, wireless communication, and edge intelligence."
  },
  {
    question: "What academic support is provided?",
    answer:
      "Complete guidance including IEEE topic selection, firmware development, IoT prototyping, documentation, and IEEE/Scopus journal support."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "IoT Embedded Hardware Design – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) IoT Embedded Hardware Design Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering sensor integration, wireless communication, AI-assisted analytics, and secure IoT systems.";

const pageUrl =
  "/department/embedded-systems-electrical/iot-embedded-hardware-design";

const EEEIoTEmbeddedHardwareDesignProjectDevelopmentCenter = () => {
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
            {/* ✅ ONLY ONE H1 */}
            <h1>{pageTitle}</h1>
  {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the IoT-Embedded Hardware Design Project Development Center, 
                preparing scholars worldwide for IEEE-aligned (2023–2025) research in embedded IoT architectures, wireless sensor platforms, 
                communication protocols, and AI-driven device analytics.
              </p>
              <p>
                Our scholars design IoT-enabled prototypes, integrate sensors/actuators with microcontrollers, develop firmware, 
                simulate embedded designs, and implement cloud-based IoT platforms for real-time monitoring and automation applications.
              </p>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech IoT-Embedded Hardware Projects</h2>
              <ul>
                <li>Understand IoT embedded architectures & system design</li>
                <li>Study IEEE (2023–2025) IoT system innovations</li>
                <li>Firmware programming in C/C++, Python, MicroPython</li>
                <li>Prototyping with Arduino/ESP32, Proteus, Tinkercad</li>
                <li>IoT-enabled prototypes with cloud dashboards</li>
                <li>IEEE-style reports and technical presentations</li>
              </ul>
              <p>Focus: foundations in IoT firmware coding, hardware interfacing, and device-cloud integration.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech IoT-Embedded Hardware Projects</h2>
              <ul>
                <li>Survey IEEE Transactions (2023–2025) for IoT integration</li>
                <li>AI-assisted IoT analytics and anomaly detection</li>
                <li>Simulation for wireless protocols & secure comms</li>
                <li>Advanced prototyping with microcontroller + IoT platforms</li>
                <li>IoT cloud platforms for industrial & healthcare deployment</li>
                <li>Research contributions validated under IEEE standards</li>
              </ul>
              <p>Focus: advanced embedded programming, secure IoT deployment, AI-driven real-time analytics.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D IoT-Embedded Hardware Projects</h2>
              <ul>
                <li>Comprehensive IEEE review (2023–2025) in IoT hardware</li>
                <li>Advanced algorithms for predictive analytics on IoT edge devices</li>
                <li>Deep learning for industrial automation and hardware security</li>
                <li>IoT-enabled laboratory prototypes with wireless + cloud</li>
                <li>Experimental setup for predictive maintenance with real-time sensors</li>
                <li>Patents, IEEE journals, and standard contributions</li>
              </ul>
              <p>Focus: innovation & patents in edge computing, AI-based IoT systems, scalable & secure architectures.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – IoT-Embedded Hardware vs. Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Focus</th>
                      <th>Industry Application</th>
                      <th>R&D Focus (2023–2025)</th>
                      <th>Academic Level</th>
                      <th>Tools & Frameworks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>IoT-Embedded Sensor Integration</td>
                      <td>Smart Homes, Healthcare, Industry</td>
                      <td>Real-time data, accuracy optimization</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Arduino IDE, Proteus</td>
                    </tr>
                    <tr>
                      <td>Microcontroller IoT Hardware</td>
                      <td>Robotics & Automation</td>
                      <td>Low-power modular designs</td>
                      <td>B.Tech/M.Tech</td>
                      <td>ESP32, PIC, ARM Cortex</td>
                    </tr>
                    <tr>
                      <td>Wireless Communication Protocols</td>
                      <td>Smart Cities, Industry IoT</td>
                      <td>ZigBee, LoRa, 5G integration</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, NS-3</td>
                    </tr>
                    <tr>
                      <td>AI-Assisted Embedded Analytics</td>
                      <td>Manufacturing, Predictive Maintenance</td>
                      <td>Edge AI, anomaly detection</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow Lite, PyTorch</td>
                    </tr>
                    <tr>
                      <td>IoT PCB Prototyping</td>
                      <td>IoT Wearables/Smart Energy</td>
                      <td>Compact modular hardware</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Altium, KiCAD</td>
                    </tr>
                    <tr>
                      <td>Cloud-Based IoT Integration</td>
                      <td>Infrastructure & Remote Monitoring</td>
                      <td>Secure cloud data transfer</td>
                      <td>B.Tech/Ph.D.</td>
                      <td>AWS IoT, Azure, ThingSpeak</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is an internationally recognized hub for IoT-embedded systems research. 
                Through this Project Development Center, we help scholars gain IEEE-topic relevance, embedded hardware prototyping expertise,
                and IoT cloud integration techniques — preparing them for global research visibility and industrial collaborations.
              </p>
            </section>

            {/* ❓ FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((q, idx) => (
                  <details key={idx}>
                    <summary>{q.question}</summary>
                    <p>{q.answer}</p>
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

export default EEEIoTEmbeddedHardwareDesignProjectDevelopmentCenter;
