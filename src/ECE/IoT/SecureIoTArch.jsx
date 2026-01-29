import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* ================= FAQs ================= */
const faqs = [
  {
    question: "What services does the Secure IoT Architectures Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Secure IoT Architectures Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) secure IoT solutions."
  },
  {
    question: "What types of Secure IoT Architectures projects are supported?",
    answer:
      "We support B.Tech, M.Tech, and Ph.D. projects covering encrypted networks, blockchain IoT, AI-based IDS, and quantum-resistant cryptography."
  },
  {
    question: "Which technologies are used in Secure IoT Architectures project development?",
    answer:
      "Technologies include TLS/SSL, ECC, AES, blockchain, AI intrusion detection, AWS IoT, Azure IoT, Arduino, and ESP32."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects follow IEEE Transactions and Conferences (2023–2025)."
  },
  {
    question: "What support is provided for academic submissions?",
    answer:
      "End-to-end guidance including IEEE/Scopus/SCI publication support."
  }
];

/* ================= KEYWORDS ARRAY ================= */
const keywords = [
  "Secure IoT Projects",
  "IoT Security 2023–2025",
  "Blockchain IoT",
  "Lightweight Cryptography IoT",
  "AI Intrusion Detection IoT",
  "Edge Security IoT",
  "Quantum-Resistant IoT",
  "Narpavi Research Institute IoT Security",
  "IEEE IoT Security Projects",
  "Industrial IoT Security Solutions",
  "Smart City IoT Security",
  "Secure Healthcare IoT",
  "IoT Authentication & Encryption"
];

const ECESecureIoTArchitecturesProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">

      {/* ================= SEO ================= */}
      <SEO
        title="Secure IoT Architectures – Project Development Center in Chennai"
        description="IEEE-aligned (2023–2025) Secure IoT Architectures projects covering blockchain IoT, lightweight cryptography, AI-driven intrusion detection, secure firmware updates, and cloud–edge security."
        keywords={keywords}
        url="/department/iot-projects/secure-iot-architectures-project-development-center-in-chennai"
        faqs={faqs}
      />

      <Sidebar
        extraLinks={[
          { id: "ece", label: "ece", path: "/department?dept=ece" }
        ]}
      />

      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          {/* ================= LEFT SIDEBAR ================= */}
          <aside className="left-sidebar2">
          <Leftsidebar/>
          </aside>

          {/* ================= CENTER CONTENT (UNCHANGED) ================= */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Secure IoT Architectures - Project Development Center in Chennai</h1>
               <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Secure IoT Architectures – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop robust, cyber-secure IoT solutions aligned with IEEE Transactions (2023–2025). Our projects integrate encryption, authentication, blockchain, and secure cloud-edge frameworks for applications in smart grids, healthcare, and smart cities.
              </p>
              <p>
                With expertise in TLS/SSL, blockchain, lightweight cryptography, and AI-driven security, we deliver high-performance, secure IoT systems, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Secure IoT Architectures Project Development</h2>
              <p>
                For undergraduate students, our center focuses on basic secure IoT solutions, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>Encrypted sensor networks using lightweight cryptography</li>
                <li>Authentication mechanisms for IoT devices</li>
                <li>Secure data transmission and local storage protection</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical IoT security deployment, and academic-ready output.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Secure IoT Architectures Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced IoT security solutions with blockchain and edge computing.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions and Conferences (2023–2025)</li>
                <li>Blockchain-enabled IoT for secure data management</li>
                <li>Secure edge computing for real-time applications</li>
                <li>Anomaly detection for industrial IoT security</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade IoT security solutions.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Secure IoT Architectures Project Development</h2>
              <p>
                For doctoral scholars, our center supports research-intensive projects in cutting-edge IoT security architectures.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>AI-driven intrusion detection systems</li>
                <li>Quantum-resistant cryptography for IoT</li>
                <li>Distributed secure systems with multi-layer architectures</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Novel algorithm design for IoT security</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Secure IoT Architectures Technologies vs. Industry Applications</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology</th>
                      <th>Industry Application</th>
                      <th>Key Benefit</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>TLS/SSL & HTTPS Protocols</td>
                      <td>IoT Device Communication</td>
                      <td>Ensures encrypted and secure data exchange</td>
                      <td>B.Tech/M.Tech</td>
                      <td>OpenSSL, HTTPS libraries</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Blockchain-Based IoT Security</td>
                      <td>Smart Cities, Supply Chain Monitoring</td>
                      <td>Immutable and tamper-proof transaction records</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Ethereum, Hyperledger</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Lightweight Cryptography (ECC, AES)</td>
                      <td>Wearables, Healthcare IoT</td>
                      <td>Fast and energy-efficient encryption</td>
                      <td>B.Tech/M.Tech</td>
                      <td>TinyECC, AES libraries</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Identity and Access Management (IAM)</td>
                      <td>Industrial IoT, Smart Homes</td>
                      <td>Secure user/device authentication</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>AWS IAM, OAuth</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Secure Firmware Update Mechanisms</td>
                      <td>IoT Devices & Gateways</td>
                      <td>Protection against malicious code injection</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>OTA frameworks, Secure Boot</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Intrusion Detection Systems (IDS)</td>
                      <td>Critical IoT Infrastructure</td>
                      <td>Early detection and mitigation of security breaches</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Snort, AI-based IDS</td>
                      <td>High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Secure IoT Architectures Project Titles (2023–2025)</h2>
              <ul>
                <li>Blockchain-Enabled IoT Security Framework for Smart Grids (2023)</li>
                <li>Lightweight Cryptography for Energy-Constrained IoT Devices (2023)</li>
                <li>AI-Powered Intrusion Detection in Industrial IoT Systems (2024)</li>
                <li>Quantum-Resistant Secure Protocols for IoT Networks (2024)</li>
                <li>Edge-Integrated IoT Security Architecture for Healthcare Systems (2025)</li>
                <li>Multi-Layered Authentication and Access Control in IoT (2025)</li>
                <li>Secure Firmware Update and Device Management for IoT Ecosystems (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute, an Indian-based global center, supports Secure IoT Architecture projects for B.Tech, M.Tech, and Ph.D. students.
              </p>
              <p>
                The institute provides hardware-software integration, blockchain and cryptography expertise, cloud-edge security solutions, and IEEE-standard documentation. Projects ensure academic excellence, practical deployment, and industrial relevance.
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

          {/* ================= RIGHT SIDEBAR ================= */}
          <aside className="right-sidebar1">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/department/iot-projects">IoT</a></li>
              <li><a href="/department/iot-projects/edge-fog-computing-in-iot">Edge & Fog Computing in IoT</a></li>
              <li><a href="/department/iot-projects/industrial-iot-industry-4">Industrial IoT & Industry 4.0</a></li>
              <li><a href="/department/iot-projects/iot-precision-agriculture">IoT for Precision Agriculture</a></li>
              <li><a href="/department/iot-projects/iot-healthcare-monitoring">IoT Healthcare Monitoring</a></li>
              <li><a href="/department/iot-projects/secure-iot-architectures">Secure IoT Architectures</a></li>
              <li><a href="/department/iot-projects/iot-smart-home">IoT-Based Smart Home</a></li>
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

export default ECESecureIoTArchitecturesProjectDevelopmentCenter;
