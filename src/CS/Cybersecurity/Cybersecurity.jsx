import "./Cybersecurity.scss";
import Subsidebar from "../../pages/Subsidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";
import Csesidebar from "../../assets/Csesidebar";

const keywords = [
  "Cybersecurity – Project Development Center in Chennai",
  "IEEE Cybersecurity Projects 2023–2025",
  "AI in Cybersecurity Projects",
  "Blockchain Cybersecurity Projects",
  "B.Tech Cybersecurity Projects",
  "M.Tech Cybersecurity Projects",
  "Ph.D. Cybersecurity Research",
  "Quantum Cryptography Projects",
  "Zero Trust Security Architecture",
  "IoT Security Frameworks",
  "Intrusion Detection System Projects",
  "Privacy-Preserving AI Security"
];

const faqs = [
  {
    question: "What services does the Cybersecurity Project Development Center offer?",
    answer:
      "Narpavi Research Institute's Cybersecurity Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) cybersecurity projects, focusing on blockchain, AI-driven threat detection, quantum cryptography, and IoT security."
  },
  {
    question: "What types of cybersecurity projects are supported?",
    answer:
      "We support B.Tech projects (intrusion detection, malware analysis), M.Tech projects (blockchain-based security, AI monitoring), and Ph.D. projects (quantum-safe encryption, zero-knowledge proofs)."
  },
  {
    question: "Which technologies are used in cybersecurity project development?",
    answer:
      "Our stack includes Kali Linux, Wireshark, NS3, Ethereum, Hyperledger, TensorFlow, and quantum cryptography tools."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are based on IEEE Transactions (2023–2025), covering blockchain security, AI-driven defense, and quantum cryptography."
  },
  {
    question: "What support is provided for academic submissions?",
    answer:
      "We offer end-to-end guidance including topic selection, protocol design, simulation, testing, documentation, and IEEE/Scopus journal publication support."
  }
];

const CybersecurityProjectDevelopmentCenter = () => {
  return (
    <div className="MobileAppDevelopmentCenter">
      {/* ✅ SEO FIXED */}
      <SEO
        title="Cybersecurity – Project Development Center in Chennai"
        description="Cybersecurity – Project Development Center in Chennai offering IEEE 2023–2025 cybersecurity projects in AI threat detection, blockchain security, quantum cryptography, and IoT security for B.Tech, M.Tech, and Ph.D. students."
        keywords={keywords}
        url="/department/cybersecurity-project-development-center-in-chennai"
        faqs={faqs}
      />

      <Subsidebar
        extraLinks={[
          { id: "cse", label: "CSE", path: "/department?dept=cse" }
        ]}
      />

      <div className="MobileAppDevelopmentCenter-main">
        <div className="MobileAppDevelopmentCenter-grid">

          {/* ✅ LEFT SIDEBAR */}
          <div className="left-sidebar2">
            <Leftsidebar/>
            <h3>🔑 Keywords</h3>
            <ul>
              {keywords.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* 🔒 CENTER CONTENT (UNCHANGED) */}
          <div className="MobileAppDevelopmentCenter-center">
            <h1>Cybersecurity – Project Development Center in Chennai</h1>
            <section className="MobileAppDevelopmentCenter-intro">
              <p>
                At Cybersecurity – Project Development Center, we specialize in delivering advanced academic project development services tailored to meet the ever-growing demands of digital security. The field of Cybersecurity – Project Development Center has become a global necessity, protecting individuals, enterprises, and governments from sophisticated cyber threats. Our expertise ensures that students from B.Tech, M.Tech, and Ph.D. levels gain industry-standard knowledge, hands-on skills, and IEEE-aligned research experience.
              </p>
              <p>
                We at Narpavi Research Institute are committed to guiding students through end-to-end project execution, covering both software and hardware domains. All topics for the Cybersecurity – Project Development Center are meticulously chosen from IEEE Transactions spanning 2023 to 2025, ensuring alignment with the latest global trends and emerging threat landscapes.
              </p>
            </section>

            <section className="MobileAppDevelopmentCenter-btech">
              <h2>B.Tech Cybersecurity Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational cybersecurity projects like intrusion detection or malware analysis, aligned with IEEE topics.
              </p>
              <ul>
                <li>Topic selection from IEEE 2023–2025 trends</li>
                <li>Development using Kali Linux, Wireshark, or basic cryptographic tools</li>
                <li>Features like network defense or penetration testing</li>
                <li>Attack simulation and functional validation</li>
                <li>Documentation and IEEE-format presentation support</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, secure design, and academic-ready output.
              </p>
            </section>

            <section className="MobileAppDevelopmentCenter-mtech">
              <h2>M.Tech Cybersecurity Project Development</h2>
              <p>
                For postgraduate students, we develop advanced cybersecurity projects like blockchain-based identity management or AI-assisted monitoring, aligned with IEEE research.
              </p>
              <ul>
                <li>IEEE topic selection with literature review</li>
                <li>Development with NS3, TensorFlow, or Hyperledger</li>
                <li>Features like secure IoT or algorithmic optimization</li>
                <li>Simulation and performance benchmarking</li>
                <li>Thesis support with journal-ready documentation</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade security solutions.
              </p>
            </section>

            <section className="MobileAppDevelopmentCenter-phd">
              <h2>Ph.D. Cybersecurity Project Development</h2>
              <p>
                For doctoral scholars, our center focuses on pioneering cybersecurity research in quantum-safe encryption, zero-knowledge proofs, and federated learning.
              </p>
              <ul>
                <li>Problem formulation with IEEE 2023–2025 gap analysis</li>
                <li>Advanced protocol design with quantum or blockchain integration</li>
                <li>Simulation with custom datasets or platforms</li>
                <li>Validation with experimental and theoretical analysis</li>
                <li>Publication assistance for IEEE/Scopus journals</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="MobileAppDevelopmentCenter-table">
              <h2>Technology vs. Industry Comparative Table</h2>
              <div className="MobileAppDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Cybersecurity Technology</th>
                      <th>Industry Application</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Blockchain-based Authentication</td><td>Financial Services, Banking</td><td>B.Tech/M.Tech</td><td>Ethereum, Hyperledger</td><td>High</td></tr>
                    <tr><td>AI-driven Threat Detection</td><td>Defense, Critical Infrastructure</td><td>M.Tech/Ph.D.</td><td>TensorFlow, PyTorch</td><td>Very High</td></tr>
                    <tr><td>Secure Cloud Computing</td><td>Healthcare, Education</td><td>B.Tech/M.Tech</td><td>AWS Shield, Azure Sentinel</td><td>High</td></tr>
                    <tr><td>IoT Security Frameworks</td><td>Smart Cities, Manufacturing</td><td>M.Tech/Ph.D.</td><td>NS3, Contiki</td><td>Very High</td></tr>
                    <tr><td>Quantum Cryptography</td><td>Government, Military</td><td>Ph.D.</td><td>Qiskit, Cirq</td><td>Expert</td></tr>
                    <tr><td>Network Intrusion Detection Systems</td><td>Telecom, Data Centers</td><td>B.Tech/M.Tech</td><td>Wireshark, Snort</td><td>High</td></tr>
                    <tr><td>Privacy-Preserving Machine Learning</td><td>E-commerce, Social Media</td><td>M.Tech/Ph.D.</td><td>Federated Learning, TFF</td><td>Very High</td></tr>
                    <tr><td>Zero Trust Architecture</td><td>Enterprise IT, Remote Work</td><td>Ph.D.</td><td>Okta, Zscaler</td><td>Expert</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="MobileAppDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Cybersecurity Project Titles (2023–2025)</h2>
              <ul>
                <li>Blockchain-Integrated Multi-Factor Authentication for Cloud Services – 2023</li>
                <li>AI-Powered Zero-Day Threat Detection for IoT Networks – 2023</li>
                <li>Quantum-Resistant Encryption Algorithms for Financial Transactions – 2024</li>
                <li>Privacy-Preserving Federated Learning in Healthcare Data Sharing – 2024</li>
                <li>Blockchain-Based Supply Chain Security for Pharmaceuticals – 2024</li>
                <li>Hybrid Intrusion Detection System Using Deep Reinforcement Learning – 2025</li>
                <li>Secure and Scalable Edge Computing Framework for Smart Cities – 2025</li>
                <li>Multi-Agent Cyber Defense Strategies for Critical Infrastructure – 2023</li>
                <li>Adaptive Access Control Systems Using Blockchain Technology – 2024</li>
                <li>AI-Augmented Threat Intelligence for Cyber-Physical Systems – 2025</li>
                <li>End-to-End Encrypted Messaging Using Lattice-Based Cryptography – 2025</li>
                <li>Distributed Ledger-Based Secure Voting Systems – 2023</li>
                <li>Dynamic Honeypot Systems for Enterprise Network Protection – 2024</li>
                <li>Real-Time Malware Detection Using Graph Neural Networks – 2025</li>
                <li>Blockchain-Powered Digital Identity Verification in E-Governance – 2024</li>
              </ul>
            </section>

            <section className="MobileAppDevelopmentCenter-excellence">
              <h2>Excellence in Cybersecurity Project Development</h2>
              <p>
                Narpavi Technology stands as a global benchmark for advanced, research-driven, and industry-aligned project development support. At Narpavi Research Institute, we empower engineering students from B.Tech, M.Tech, and Ph.D. streams worldwide, providing end-to-end guidance for both software and hardware-based cybersecurity innovations.
              </p>
              <p>
                Our project topics are meticulously curated from IEEE Transactions (2023–2025), ensuring alignment with the most recent and impactful technological advancements in cybersecurity. Whether it's securing IoT devices, designing next-generation encryption frameworks, or implementing AI-driven intrusion detection systems, our expertise helps students create IEEE-standard, publication-ready projects that stand out in both academia and industry.
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
          <div className="right-sidebar1">
           <Csesidebar/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CybersecurityProjectDevelopmentCenter;
