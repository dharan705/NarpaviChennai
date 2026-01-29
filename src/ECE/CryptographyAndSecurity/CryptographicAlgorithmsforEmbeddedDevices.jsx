import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* ================= FAQs ================= */
const faqs = [
  {
    question: "What are cryptographic algorithms for embedded devices?",
    answer:
      "These are algorithms designed to secure communication, ensure data confidentiality, and authenticate devices within constrained embedded platforms such as IoT and wearable devices.",
  },
  {
    question: "What topics are covered in B.Tech cryptographic algorithm projects?",
    answer:
      "Basic implementations like AES-based file encryption on Arduino, RSA key exchange on embedded boards, and DES algorithm simulation using tools like Arduino, Raspberry Pi, Keil, and Proteus.",
  },
  {
    question: "What advanced areas do M.Tech projects focus on?",
    answer:
      "Efficient and energy-optimized design of lightweight AES, ECC-based communications, PRESENT cipher optimization, and hybrid cryptographic protocols using Vivado, Quartus, Verilog/VHDL, and ARM Cortex boards.",
  },
  {
    question: "What research themes are emphasized in Ph.D. projects?",
    answer:
      "Cutting-edge research on post-quantum cryptography, AI-optimized algorithm selection, FPGA-based cryptographic acceleration, and blockchain-integrated embedded security solutions.",
  },
  {
    question: "Which tools and platforms support cryptographic projects for embedded devices?",
    answer:
      "Platforms include ARM Cortex, Arduino, Raspberry Pi, FPGA/ASIC boards, Vivado, Quartus, Keil, Proteus, and hardware description languages like Verilog and VHDL.",
  },
];

/* ================= KEYWORDS ARRAY ================= */
const keywords = [
  "Cryptographic Algorithms for Embedded Devices",
  "Lightweight Cryptography Projects",
  "FPGA Cryptography Projects",
  "AES RSA ECC Implementation",
  "Post-Quantum Cryptography for IoT",
  "Secure Embedded System Projects",
  "B.Tech Cryptography Projects",
  "M.Tech Embedded Security Projects",
  "Ph.D. Research in Cryptography",
  "Hardware Accelerated Cryptography",
  "Narpavi Research Institute Embedded Security",
];

const CryptographicAlgorithmsEmbeddedProject = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">

      {/* ================= SEO ================= */}
      <SEO
        title="Cryptographic Algorithms for Embedded Devices – Project Development Center in Chennai"
        description="IEEE-aligned (2023–2025) embedded cryptography projects on AES, RSA, ECC, lightweight ciphers, post-quantum cryptography, and FPGA/ARM-based hardware acceleration for IoT, wearables, and secure embedded systems."
        keywords={keywords}
        url="/department/cryptography-security/cryptographic-algorithms-embedded-project-development-center-in-chennai"
        faqs={faqs}
      />

      <Sidebar
        extraLinks={[
          { id: "ece", label: "ece", path: "/department?dept=ece" },
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
            <h1>Cryptographic Algorithms for Embedded Devices – Project Development Center in Chennai</h1>
               <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> offers comprehensive academic and research support in the design and implementation of cryptographic algorithms tailored for embedded devices, aligned with IEEE standards (2023–2025).
              </p>
              <p>
                Projects focus on lightweight symmetric and asymmetric algorithms, post-quantum cryptography, FPGA-based accelerators, and hybrid cryptosystems to address security and resource constraints in modern embedded systems.
              </p>
            </section>

            {/* Comparative Technology-Industry Table */}
            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Algorithm Type</th>
                      <th>Research Focus</th>
                      <th>Applications</th>
                      <th>Tools/Platforms</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Symmetric Algorithms</td>
                      <td>AES, DES, PRESENT, SPECK</td>
                      <td>IoT, embedded security</td>
                      <td>ARM Cortex, Arduino</td>
                    </tr>
                    <tr>
                      <td>Asymmetric Algorithms</td>
                      <td>RSA, ECC</td>
                      <td>Banking, digital signatures</td>
                      <td>FPGA, Raspberry Pi</td>
                    </tr>
                    <tr>
                      <td>Post-Quantum Algorithms</td>
                      <td>Lattice-based crypto</td>
                      <td>IoT & cloud security</td>
                      <td>FPGA, ASIC</td>
                    </tr>
                    <tr>
                      <td>Lightweight Crypto</td>
                      <td>Low-power algorithms</td>
                      <td>Wearables, sensors</td>
                      <td>Keil, Proteus</td>
                    </tr>
                    <tr>
                      <td>Hardware Acceleration</td>
                      <td>FPGA-based designs</td>
                      <td>Smart cards, embedded devices</td>
                      <td>Vivado, Quartus</td>
                    </tr>
                    <tr>
                      <td>Hybrid Cryptosystems</td>
                      <td>Combining AES + ECC</td>
                      <td>IoT gateways, secure routers</td>
                      <td>ARM TrustZone, FPGA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Project Development Cycles */}
            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Projects in Cryptographic Algorithms</h2>
              <p>
                Projects target basic algorithm implementations such as AES file encryption on Arduino, RSA key exchange for embedded IoT systems, and simple DES on microcontrollers using Arduino, Raspberry Pi, Keil, and Proteus.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Projects in Cryptographic Algorithms</h2>
              <p>
                Focus on FPGA implementations of lightweight AES, ECC for secure communications, PRESENT cipher optimization, and hybrid protocols optimized for energy constraints using Vivado, Quartus, and ARM Cortex boards.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Research in Cryptographic Algorithms</h2>
              <p>
                Research involves post-quantum cryptography for IoT, AI-driven cryptographic algorithm selection, FPGA cryptography acceleration, and blockchain-integrated embedded security solutions targeted for IEEE publications.
              </p>
            </section>

            {/* IEEE Project Titles */}
            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>FPGA Implementation of Lightweight AES for IoT Security (2023)</li>
                <li>Energy-Efficient ECC Algorithm for Embedded Communication Systems (2023)</li>
                <li>PRESENT Cipher Optimization for Wearable Healthcare Devices (2024)</li>
                <li>Hardware-Accelerated RSA for Smart Card Applications (2024)</li>
                <li>Post-Quantum Cryptographic Algorithm Implementation on FPGA (2025)</li>
                <li>Hybrid AES-ECC Cryptosystem for IoT Gateways (2025)</li>
              </ul>
            </section>

            {/* About Section */}
            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute offers expert guidance in embedded cryptographic algorithm design and implementation, ensuring projects meet IEEE standards and industry needs, providing students and researchers with both practical and advanced academic expertise.
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

          {/* ================= RIGHT SIDEBAR ================= */}
          <aside className="right-sidebar">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/department/cryptography-security">Cryptography & Security</a></li>
              <li><a href="/department/cryptography-security/biometric-security-systems">Biometric Security Systems</a></li>
              <li><a href="/department/cryptography-security/blockchain-secure-communication">Blockchain Secure Communication</a></li>
              <li><a href="/department/cryptography-security/cryptographic-algorithms-embedded">Cryptographic Algorithms Embedded</a></li>
              <li><a href="/department/cryptography-security/side-channel-attack-resistance">Side Channel Attack Resistance</a></li>
              <li><a href="/department/cryptography-security/hardware-security-trusted-computing">Hardware Security & Trusted Computing</a></li>
              <li><a href="/department/cryptography-security/post-quantum-cryptography">Post Quantum Cryptography</a></li>
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

export default CryptographicAlgorithmsEmbeddedProject;
