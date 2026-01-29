import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import SEO from "../../assets/SEO";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Secure Data Transmission in Wireless Sensor Networks Project Development Center in Chennai",
  "Secure WSN Data Transmission Projects",
  "Cryptography in Wireless Sensor Networks",
  "AES ECC RSA WSN Security",
  "Blockchain Enabled WSN Security",
  "AI Intrusion Detection in WSN",
  "IEEE WSN Security Projects 2023–2025",
  "NS2 NS3 OMNeT++ WSN Security",
  "Healthcare Military WSN Security",
  "Narpavi Research Institute WSN Security"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question: "Why is secure data transmission crucial in Wireless Sensor Networks?",
    answer:
      "WSNs are vulnerable to threats such as eavesdropping, data tampering, and denial-of-service. Secure protocols ensure confidentiality, integrity, authenticity, and availability."
  },
  {
    question: "Which cryptographic techniques are used in WSN security projects?",
    answer:
      "Techniques include AES, RSA, ECC, SHA-based authentication, blockchain integration, and AI-driven intrusion detection."
  },
  {
    question: "What simulation tools are used for secure WSN projects?",
    answer:
      "NS2, NS3, OMNeT++, MATLAB, and Python with cryptography libraries."
  },
  {
    question: "Which applications benefit from secure WSN transmission?",
    answer:
      "Healthcare, military surveillance, disaster monitoring, smart cities, and industrial automation."
  },
  {
    question: "What support does Narpavi Research Institute offer?",
    answer:
      "End-to-end project support including design, simulation, prototyping, documentation, and IEEE/Scopus/SCI publication guidance."
  }
];

/* =========================
   📌 TITLE (SAME EVERYWHERE)
========================= */
const pageTitle =
  "Secure Data Transmission in Wireless Sensor Networks – Project Development Center in Chennai";

const pageUrl =
  "/department/wireless-sensor-networks/secure-data-transmission-wsn-project-development-center-in-chennai";

const pageDescription =
  "Secure Data Transmission in Wireless Sensor Networks Project Development Center in Chennai offering IEEE-aligned (2023–2025) projects using AES, ECC, RSA, blockchain, AI intrusion detection with NS2, NS3, OMNeT++, and MATLAB.";

const SecureDataTransmissionWSNProject = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      {/* =========================
          🔍 SEO
      ========================= */}
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        url={pageUrl}
        faqs={faqs}
      />

      <Sidebar
        extraLinks={[
          { id: "ece", label: "ece", path: "/department?dept=ece" }
        ]}
      />

      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          {/* =========================
              ⬅ LEFT SIDEBAR
          ========================= */}
          <aside className="left-sidebar2">
            <h3>🔑 Keywords</h3>
            <ul>
              {keywords.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </aside>

          {/* =========================
              🧠 MAIN CONTENT
          ========================= */}
          <div className="ECEProjectDevelopmentCenter-center">
            {/* ✅ ONLY H1 UPDATED */}
            <h1>{pageTitle}</h1>
             <section className="ECEProjectDevelopmentCenter-intro">
                <p>
                  <strong>Narpavi Research Institute</strong> introduces the <em>Excellence in Secure Data Transmission in WSN Project Development</em> aimed at critical, secure communication solutions for Wireless Sensor Networks. Our projects follow IEEE standards (2023–2025) and offer B.Tech, M.Tech, and Ph.D. scholars a pathway toward innovative research and industrial applications.
                </p>
                <p>
                  WSNs are vital in healthcare, military, disaster management, and industrial automation. Due to their structure, WSNs face unique security threats like eavesdropping, tampering, and denial-of-service. Robust protocols are essential for maintaining data confidentiality, integrity, authenticity, and availability.
                </p>
              </section>
              {/* Comparative Table */}
              <section className="ECEProjectDevelopmentCenter-table">
                <h2>Comparative Table – Secure Data Transmission Techniques in WSN</h2>
                <div className="ECEProjectDevelopmentCenter-table-container">
                  <table>
                    <thead>
                      <tr>
                        <th>Security Mechanism</th>
                        <th>Strength</th>
                        <th>Application Areas</th>
                        <th>Key Feature</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Symmetric Key Encryption (AES, DES)</td>
                        <td>Low–Medium (Energy Costly)</td>
                        <td>Healthcare WSNs, IoT Applications</td>
                        <td>Lightweight encryption</td>
                      </tr>
                      <tr>
                        <td>Asymmetric Key Cryptography (RSA, ECC)</td>
                        <td>High Security, More Energy Demand</td>
                        <td>Military &amp; Secure IoT</td>
                        <td>Ensures strong data confidentiality</td>
                      </tr>
                      <tr>
                        <td>Hash-Based Authentication (SHA)</td>
                        <td>Medium–High</td>
                        <td>Environmental Monitoring</td>
                        <td>Fast integrity verification</td>
                      </tr>
                      <tr>
                        <td>Blockchain-Enabled WSN Security</td>
                        <td>Very High</td>
                        <td>Smart Cities, Industry 4.0 IoT</td>
                        <td>Tamper-proof decentralized data handling</td>
                      </tr>
                      <tr>
                        <td>AI-Driven Intrusion Detection</td>
                        <td>Very High</td>
                        <td>Cyber-Physical Systems, IIoT</td>
                        <td>Adaptive and scalable attack mitigation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              {/* B.Tech Cycle */}
              <section className="ECEProjectDevelopmentCenter-btech">
                <h2>B.Tech Project Development Cycle</h2>
                <p>
                  B.Tech projects focus on implementing basic security protocols such as AES-based encryption and hash authentication. Simulators include NS2, NS3, and MATLAB. Projects: AES-secured routing in healthcare WSNs; integrity verification in IoT-based monitoring.
                </p>
              </section>
              {/* M.Tech Cycle */}
              <section className="ECEProjectDevelopmentCenter-mtech">
                <h2>M.Tech Project Development Cycle</h2>
                <p>
                  Advanced implementations feature hybrid cryptography, intrusion detection, and trust-based routing. Tools: OMNeT++, MATLAB, Python. Applications: secure industrial IoT, military-grade WSNs, critical healthcare transmission.
                </p>
              </section>
              {/* Ph.D. Cycle */}
              <section className="ECEProjectDevelopmentCenter-phd">
                <h2>Ph.D. Project Development Cycle</h2>
                <p>
                  AI-enhanced secure protocols, blockchain-integrated trust models, federated intrusion detection, and quantum-resistant cryptography. Focus on IEEE-standard publications and next-gen IoT security solutions.
                </p>
              </section>
              {/* IEEE Project Titles */}
              <section className="ECEProjectDevelopmentCenter-project-titles">
                <h2>IEEE-Style Project Titles (2023–2025)</h2>
                <ul>
                  <li>Lightweight AES-Based Secure Routing Protocol for WSNs (2023)</li>
                  <li>Blockchain-Enabled Secure Data Transmission in IoT-WSNs (2023)</li>
                  <li>Trust-Based Routing with Intrusion Detection for WSNs (2024)</li>
                  <li>ECC-Based Lightweight Encryption for Energy-Constrained WSNs (2024)</li>
                  <li>AI-Powered Intrusion Detection Framework in WSNs (2024)</li>
                  <li>Secure Data Aggregation Using Blockchain in Smart City WSNs (2025)</li>
                  <li>Quantum-Resistant Secure Routing Protocols for Next-Gen WSNs (2025)</li>
                </ul>
              </section>
              {/* About Section */}
              <section className="ECEProjectDevelopmentCenter-about">
                <h2>About Narpavi Research Institute</h2>
                <p>
                  At Narpavi Research Institute, our Secure Data Transmission in WSN projects span protocol design, AI-driven intrusion detection, blockchain security, full-stack simulation, prototyping, and IEEE publication assistance.
                </p>
              </section>
              {/* FAQs */}
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

          <aside className="right-sidebar">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/department/wireless-sensor-networks">Wireless Sensor Networks</a></li>
              <li><a href="/department/wireless-sensor-networks/energy-eff-routing-wsn">Energy Efficient Routing in WSN</a></li>
              <li><a href="/department/wireless-sensor-networks/secure-data-transmission-wsn">Secure Data Transmission in WSN</a></li>
              <li><a href="/department/wireless-sensor-networks/iot-wsn">IoT Based Wireless Sensor Networks</a></li>
              <li><a href="/department/wireless-sensor-networks/environmental-disaster-monitoring">Environmental Disaster Monitoring using WSN</a></li>
              <li><a href="/department/wireless-sensor-networks/underwater-wireless-sensor-networks">Underwater Wireless Sensor Networks</a></li>
              <li><a href="/department/wireless-sensor-networks/ai-based-wsn-optimization">AI-Based WSN Optimization</a></li>
            </ul>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default SecureDataTransmissionWSNProject;
