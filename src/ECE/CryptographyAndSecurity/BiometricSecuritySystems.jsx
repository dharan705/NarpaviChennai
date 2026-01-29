import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* ================= FAQs ================= */
const faqs = [
  {
    question: "What are biometric security systems?",
    answer:
      "Systems that use unique physical and behavioral traits like fingerprints, iris scans, facial recognition, and voice patterns to provide robust user authentication and security.",
  },
  {
    question: "What projects do B.Tech students undertake in biometric security?",
    answer:
      "Basic prototypes such as fingerprint door locks, face recognition with Raspberry Pi and OpenCV, voice authentication, and IoT-based attendance using biometric sensors.",
  },
  {
    question: "What advanced topics are covered in M.Tech biometric security projects?",
    answer:
      "Multimodal biometric authentication, AI-based spoof detection, secure healthcare biometric encryption, and cloud-integrated biometric security for IoT.",
  },
  {
    question: "What research directions are emphasized in Ph.D. biometric security projects?",
    answer:
      "Privacy-preserving cryptosystems, lightweight wearable authentication, AI-optimized multimodal frameworks, and post-quantum biometric encryption for 5G/6G.",
  },
  {
    question: "Which tools and platforms support biometric security research?",
    answer:
      "Tools include MATLAB, Python, Raspberry Pi, Arduino, TensorFlow, FPGA, OpenCV, Android SDK, and OQS libraries for post-quantum cryptography.",
  },
];

/* ================= KEYWORDS ARRAY ================= */
const keywords = [
  "Biometric Security Systems",
  "Fingerprint Recognition Projects",
  "AI Biometric Security",
  "Multimodal Biometrics",
  "Facial Recognition ECE Projects",
  "Voice Recognition Security",
  "Iris Recognition FPGA",
  "Biometric Cryptosystems",
  "Post-Quantum Biometric Security",
  "IoT Biometric Authentication",
  "Biometric IEEE Projects",
  "B.Tech Biometric Projects",
  "M.Tech Biometric Research",
  "Ph.D. Biometric Security",
  "Narpavi Research Institute Biometrics",
];

const BiometricSecuritySystemsProject = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">

      {/* ================= SEO ================= */}
      <SEO
        title="Biometric Security Systems – Project Development Center in Chennai"
        description="IEEE-aligned (2023–2025) biometric security projects on fingerprint, face, iris, and voice recognition, multimodal biometrics, AI spoof detection, and post-quantum biometric cryptosystems for IoT, 5G/6G, and critical applications."
        keywords={keywords}
        url="/department/cryptography-security/biometric-security-systems"
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
            <h1>Biometric Security Systems – Project Development Center in Chennai</h1>
                <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> offers research and project development support in biometric security systems aligned with IEEE standards (2023–2025), enabling advancements in AI-driven and post-quantum biometric technologies.
              </p>
              <p>
                Our expertise covers fingerprint, facial, iris, and voice recognition security considerations for healthcare, finance, defense, e-governance, and consumer electronics.
              </p>
            </section>

            {/* Comparative Technology-Industry Table */}
            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Biometric Modality</th>
                      <th>Research Focus</th>
                      <th>Industry Application</th>
                      <th>Tools/Platforms</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Fingerprint Recognition</td>
                      <td>Low-power, hardware optimization</td>
                      <td>Access control, consumer devices</td>
                      <td>MATLAB, Arduino</td>
                    </tr>
                    <tr>
                      <td>Facial Recognition</td>
                      <td>AI-based spoof resistance</td>
                      <td>Banking, surveillance</td>
                      <td>Python, OpenCV, TensorFlow</td>
                    </tr>
                    <tr>
                      <td>Iris Recognition</td>
                      <td>High-security authentication</td>
                      <td>Defense, border control</td>
                      <td>FPGA, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Voice Recognition</td>
                      <td>Noise-resistant models</td>
                      <td>Smart assistants, IoT devices</td>
                      <td>Android SDK, Deep Learning</td>
                    </tr>
                    <tr>
                      <td>Multimodal Biometrics</td>
                      <td>Fusion of multiple modalities</td>
                      <td>Healthcare, smart cities</td>
                      <td>Python, AI frameworks</td>
                    </tr>
                    <tr>
                      <td>Biometric Cryptosystems</td>
                      <td>Secure storage & PQC integration</td>
                      <td>Data protection, IoT security</td>
                      <td>FPGA, OQS Library</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Project Development Cycles */}
            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Projects in Biometric Security Systems</h2>
              <p>
                Basic biometric prototypes such as fingerprint door locks, face recognition on Raspberry Pi, voice authentication, and IoT biometric attendance systems using Python, Raspberry Pi, Arduino, and MATLAB.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Projects in Biometric Security Systems</h2>
              <p>
                Advanced research on multimodal authentication, AI spoof detection, cloud-integrated biometric security for IoT healthcare, and FPGA implementations using TensorFlow, MATLAB, FPGA boards, and Android SDK.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Research in Biometric Security Systems</h2>
              <p>
                Cutting-edge work in privacy-preserving biometric cryptosystems, lightweight authentication for wearables, AI-optimized frameworks, and post-quantum secure biometric encryption for future communication systems.
              </p>
            </section>

            {/* IEEE Project Titles */}
            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>IoT-Based Fingerprint Authentication for Secure Access Control (2023)</li>
                <li>AI-Enhanced Facial Recognition with Spoof Detection (2023)</li>
                <li>Multimodal Biometric Authentication System for IoT Devices (2024)</li>
                <li>FPGA-Based Lightweight Biometric Encryption for Wearable Devices (2024)</li>
                <li>Post-Quantum Biometric Cryptography for 5G/6G Communication (2025)</li>
                <li>AI-Driven Privacy-Preserving Biometric Security Framework (2025)</li>
              </ul>
            </section>

            {/* About Section */}
            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute offers expert mentorship and research support in biometric security systems, facilitating IEEE-compatible projects that span AI, multimodal authentication, and post-quantum security tailored to emerging industry needs.
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
          <aside className="right-sidebar1">
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

export default BiometricSecuritySystemsProject;
