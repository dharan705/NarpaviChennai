import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

const faqs = [
  {
    question:
      "What services does the Optical Fiber Communication Technologies Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Optical Fiber Communication Technologies Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in single-mode/multi-mode fibers, WDM, optical amplifiers, and photonic integrated circuits for telecom, 5G/6G, and data centers.",
  },
  {
    question:
      "What types of Optical Fiber Communication Technologies projects are supported?",
    answer:
      "We support B.Tech projects (optical signal transmission, WDM modeling), M.Tech projects (optical amplifiers, photonic switching), and Ph.D. projects (quantum optical communication, ML-assisted fiber modeling) for applications in internet backbone, smart cities, and cloud networks.",
  },
  {
    question:
      "Which technologies are used in Optical Fiber Communication Technologies project development?",
    answer:
      "Our stack includes MATLAB, OptiSystem, Lumerical, VPI Photonics, and Python for simulation, design, and analysis of optical fiber systems.",
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are based on IEEE Transactions (2023–2025), covering areas like WDM, photonic integrated circuits, and quantum-safe optical systems, ensuring academic and industry relevance.",
  },
  {
    question: "What support is provided for academic submissions?",
    answer:
      "We offer end-to-end guidance, including topic selection, simulation, hardware prototyping, performance analysis, documentation, and IEEE/Scopus/SCI journal publication support.",
  },
];

/* ✅ KEYWORDS ARRAY (SEO + SIDEBAR ONLY) */
const keywords = [
  "Optical Fiber Communication Technologies",
  "Wavelength Division Multiplexing Projects",
  "Photonic Integrated Circuits Research",
  "Optical Fiber Projects for B.Tech",
  "Optical Communication Systems IEEE 2023–2025",
  "Quantum Optical Communication",
  "Narpavi Research Institute",
];

const ECEOpticalFiberCommunicationProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">

      {/* ✅ SEO TAG (FIXED ONLY HERE) */}
      <SEO
        title="Optical Fiber Communication Technologies – Project Development Center in Chennai"
        description="IEEE-aligned (2023–2025) optical fiber communication projects on single-/multi-mode fibers, WDM, optical amplifiers, photonic integrated circuits, and quantum-safe optical systems using MATLAB, OptiSystem, Lumerical, and VPI Photonics."
        keywords={keywords}
        url="/department/communication-systems/optical-fiber-communication-technologies–project-development-center-in-chennai"
        faqs={faqs}
      />

      <Sidebar
        extraLinks={[
          { id: "ece", label: "ece", path: "/department?dept=ece" },
        ]}
      />

      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          {/* ✅ LEFT SIDEBAR */}
          <aside className="left-sidebar2">
           <Leftsidebar/>
          </aside>

          {/* 🔒 CENTER CONTENT — NOT CHANGED */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>
              Optical Fiber Communication Technologies – Project Development Center in Chennai
            </h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Optical
                Fiber Communication Technologies – Project Development Center, a
                specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to
                develop cutting-edge, IEEE-aligned (2023–2025) solutions in
                single-mode/multi-mode fibers, WDM, optical amplifiers, and
                photonic integrated circuits for telecom, 5G/6G, and data
                centers.
              </p>
              <p>
                With expertise in MATLAB, OptiSystem, Lumerical, and VPI
                Photonics, we deliver innovative solutions for ultra-high
                bandwidth, low-latency, and long-distance optical communication
                systems, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>
                B.Tech Optical Fiber Communication Technologies Project
                Development
              </h2>
              <p>
                For undergraduate students, our center focuses on foundational
                projects like optical signal transmission and WDM modeling,
                aligned with IEEE topics.
              </p>
              <ul>
                <li>IEEE-based literature review (2023–2025)</li>
                <li>MATLAB simulation of fiber loss and dispersion</li>
                <li>WDM channel capacity modeling</li>
                <li>Signal strength and latency analysis</li>
                <li>IEEE-format documentation</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>
                M.Tech Optical Fiber Communication Technologies Project
                Development
              </h2>
              <p>
                For postgraduate students, projects involve advanced optical
                amplifier design and photonic switching.
              </p>
              <ul>
                <li>EDFA / SOA design using OptiSystem</li>
                <li>Nonlinear fiber effect analysis</li>
                <li>Optical sensor prototyping</li>
                <li>Scopus / SCI publication support</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>
                Ph.D. Optical Fiber Communication Technologies Project
                Development
              </h2>
              <p>
                For doctoral scholars, our center supports cutting-edge research
                in quantum optical communication and photonic integrated
                circuits.
              </p>
              <ul>
                <li>Quantum-safe optical system simulation</li>
                <li>ML-assisted fiber channel modeling</li>
                <li>Experimental optical validation</li>
                <li>IEEE / SCI publication & patent support</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>
                Comparative Table – Optical Fiber Technologies vs. Industry
                Applications
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
                      <td>Single-Mode Fiber</td>
                      <td>Long-Haul Telecom</td>
                      <td>Low attenuation</td>
                      <td>B.Tech / M.Tech</td>
                      <td>MATLAB, OptiSystem</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>WDM</td>
                      <td>5G / 6G Backbone</td>
                      <td>High capacity</td>
                      <td>B.Tech / M.Tech / Ph.D.</td>
                      <td>OptiSystem, VPI</td>
                      <td>Medium–High</td>
                    </tr>
                    <tr>
                      <td>Photonic ICs</td>
                      <td>6G & Data Centers</td>
                      <td>Miniaturization</td>
                      <td>M.Tech / Ph.D.</td>
                      <td>Lumerical</td>
                      <td>Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>
                IEEE-Aligned Optical Fiber Communication Technologies Project
                Titles (2023–2025)
              </h2>
              <ul>
                <li>ML-Based Channel Equalization in Optical Fiber (2023)</li>
                <li>Nonlinear Compensation in Long-Haul Systems (2023)</li>
                <li>PIC-Based 5G Backhaul Systems (2024)</li>
                <li>Quantum-Safe Optical Communication for 6G (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute delivers specialized support in
                Optical Fiber Communication Technologies, from simulation to
                IEEE-standard publication guidance.
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

export default ECEOpticalFiberCommunicationProjectDevelopmentCenter;
