import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

const faqs = [
  {
    question:
      "What services does the 5G and 6G Wireless Communication Systems Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s 5G and 6G Wireless Communication Systems Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in 5G NR, 6G terahertz communication, massive MTC, URLLC, and AI-driven network optimization for autonomous vehicles, smart cities, and industrial automation.",
  },
  {
    question:
      "What types of 5G and 6G Wireless Communication Systems projects are supported?",
    answer:
      "We support B.Tech projects (5G NR IoT, terahertz channel modeling), M.Tech projects (mMTC, URLLC, AI-driven scheduling), and Ph.D. projects (6G edge intelligence, quantum-secure 6G) for applications in robotics, healthcare, and smart factories.",
  },
  {
    question:
      "Which technologies are used in 5G and 6G Wireless Communication Systems project development?",
    answer:
      "Our stack includes MATLAB, Python, NS-3, 5G NR toolkits, O-RAN frameworks, and AI platforms like TensorFlow for simulation, prototyping, and performance analysis.",
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are based on IEEE Transactions (2023–2025), covering areas like terahertz 6G, massive MIMO, and AI-native 6G networking, ensuring academic and industry relevance.",
  },
  {
    question: "What support is provided for academic submissions?",
    answer:
      "We offer end-to-end guidance, including topic selection, simulation, hardware prototyping, performance analysis, documentation, and IEEE/Scopus/SCI journal publication support.",
  },
];

/* ✅ KEYWORDS ARRAY (SEO + SIDEBAR ONLY) */
const keywords = [
  "5G and 6G Wireless Communication Systems",
  "IEEE Communication Projects 2023–2025",
  "Terahertz 6G Communication",
  "AI-Driven Wireless Systems",
  "URLLC 5G Applications",
  "Massive MIMO 5G",
  "6G IoT Projects",
  "Narpavi Research Institute",
];

const ECE5G6GWirelessCommunicationProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">

      {/* ✅ SEO TAG (FIXED ONLY HERE) */}
      <SEO
        title="5G and 6G Wireless Communication Systems – Project Development Center in Chennai"
        description="IEEE-aligned (2023–2025) 5G NR and 6G wireless communication projects on terahertz links, mMTC, URLLC, O-RAN, and AI-native 6G for smart cities, robotics, and Industry 5.0."
        keywords={keywords}
        url="/department/communication-systems/5g-6g-wireless-communication-system–project-development-center-in-chennai"
        faqs={faqs}
      />

      <Sidebar
        extraLinks={[
          { id: "ece", label: "ece", path: "/department?dept=ece" },
        ]}
      />

      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          {/* ✅ LEFT SIDEBAR (CLASSNAME FIX ONLY) */}
          <aside className="left-sidebar2">
            <Leftsidebar/>
          </aside>

          {/* 🔒 CENTER CONTENT — NOT CHANGED */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>
              5G and 6G Wireless Communication Systems – Project Development Center in Chennai
            </h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the 5G and 6G
                Wireless Communication Systems – Project Development Center, a
                specialized hub enabling B.Tech, M.Tech, and Ph.D. scholars to
                build IEEE-aligned (2023–2025) solutions in 5G NR, 6G terahertz
                communication, massive MTC, URLLC, and AI-driven network
                optimization for autonomous vehicles, smart cities, and
                industrial automation.
              </p>
              <p>
                Projects leverage MATLAB 5G toolboxes, ns-3 with 5G/O-RAN modules,
                and AI frameworks to prototype high-speed, ultra-reliable, and
                intelligent wireless systems with strong academic and industrial
                relevance.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>
                B.Tech 5G and 6G Wireless Communication Systems Project Development
              </h2>
              <p>
                B.Tech projects focus on foundational topics such as 5G NR-based
                IoT communication and introductory terahertz channel modeling
                aligned with recent IEEE literature.
              </p>
              <ul>
                <li>Problem definition and IEEE literature review</li>
                <li>Simulation using MATLAB / Python</li>
                <li>Low-latency IoT or robotics link design</li>
                <li>Throughput and latency analysis</li>
                <li>IEEE-format documentation</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>
                M.Tech 5G and 6G Wireless Communication Systems Project Development
              </h2>
              <p>
                M.Tech work addresses advanced system-level design and
                optimization for 5G and beyond.
              </p>
              <ul>
                <li>mMTC and URLLC implementation</li>
                <li>AI-driven scheduling and beamforming</li>
                <li>Massive MIMO optimization</li>
                <li>Support for Scopus / SCI publications</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>
                Ph.D. 5G and 6G Wireless Communication Systems Project Development
              </h2>
              <p>
                Ph.D. projects target frontier research in terahertz 6G and
                AI-native network architectures.
              </p>
              <ul>
                <li>6G terahertz system modeling</li>
                <li>AI-native and edge-intelligent networks</li>
                <li>O-RAN and experimental validation</li>
                <li>High-impact IEEE / SCI publications</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>
                Comparative Table – 5G/6G Technologies vs. Industry Applications
              </h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology</th>
                      <th>Industry Application</th>
                      <th>Key Benefit</th>
                      <th>Academic Level</th>
                      <th>Primary Tools</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>5G NR</td>
                      <td>Autonomous Vehicles</td>
                      <td>Low latency</td>
                      <td>B.Tech / M.Tech</td>
                      <td>MATLAB, ns-3</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>6G Terahertz</td>
                      <td>Future Wireless</td>
                      <td>Ultra-high data rate</td>
                      <td>M.Tech / Ph.D.</td>
                      <td>MATLAB, Python</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>URLLC</td>
                      <td>Robotics, Healthcare</td>
                      <td>Mission-critical reliability</td>
                      <td>M.Tech / Ph.D.</td>
                      <td>ns-3, O-RAN</td>
                      <td>High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>
                IEEE-Aligned 5G and 6G Wireless Communication Systems Project
                Titles (2023–2025)
              </h2>
              <ul>
                <li>Terahertz Channel Modeling for 6G Wireless Systems (2023)</li>
                <li>AI-Driven Beamforming for Massive MIMO (2023)</li>
                <li>URLLC Framework for Robotic Applications (2024)</li>
                <li>AI-Enabled Resource Allocation in 6G IoT (2024)</li>
                <li>Quantum-Secure 6G Wireless Communication (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a trusted partner for advanced
                wireless communication research, combining 5G/6G, AI-native
                networking, and next-generation security concepts.
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

          {/* ✅ RIGHT SIDEBAR (CLASSNAME FIX ONLY) */}
          <aside className="right-sidebar1">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/department/communication-systems">Communication Systems</a></li>
              <li><a href="/department/communication-systems/5g-6g-wireless-communication">5G & 6G Wireless Communication</a></li>
              <li><a href="/department/communication-systems/error-control-coding">Error Control Coding</a></li>
              <li><a href="/department/communication-systems/mimo-massive-mimo-antenna-techniques">MIMO & Massive MIMO Antenna Techniques</a></li>
              <li><a href="/department/communication-systems/optical-fiber-communication">Optical Fiber Communication</a></li>
              <li><a href="/department/communication-systems/software-defined-radio">Software Defined Radio</a></li>
              <li><a href="/department/communication-systems/cognitive-radio-networks">Cognitive Radio Networks</a></li>
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

export default ECE5G6GWirelessCommunicationProjectDevelopmentCenter;
