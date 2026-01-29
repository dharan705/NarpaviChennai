import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

const faqs = [
  {
    question:
      "What services does the Error Control Coding in Modern Communication Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Error Control Coding in Modern Communication Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in LDPC, Polar, Turbo, Fountain, and quantum error correction codes for 5G/6G, satellite, IoT, and quantum communication systems.",
  },
  {
    question: "What types of Error Control Coding projects are supported?",
    answer:
      "We support B.Tech projects (CRC, Hamming, Reed-Solomon codes), M.Tech projects (LDPC, Polar, Turbo codes), and Ph.D. projects (deep learning-assisted decoding, quantum error correction) for telecom, IoT, satellite, and quantum applications.",
  },
  {
    question:
      "Which technologies are used in Error Control Coding project development?",
    answer:
      "Our stack includes MATLAB, Python, VHDL/Verilog, TensorFlow for AI-driven decoding, and quantum simulation tools for coding, simulation, and FPGA implementation.",
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are based on IEEE Transactions and Conferences (2023–2025), covering areas like LDPC, Polar codes, and quantum error correction, ensuring academic and industry relevance.",
  },
  {
    question: "What support is provided for academic submissions?",
    answer:
      "We offer end-to-end guidance, including topic selection, simulation, FPGA prototyping, performance analysis, documentation, and IEEE/Scopus/SCI journal publication support.",
  },
];

/* ✅ KEYWORDS ARRAY (SEO + SIDEBAR ONLY) */
const keywords = [
  "Error Control Coding in Modern Communication",
  "LDPC and Polar Code Projects",
  "Turbo Coding in Satellite Communication",
  "Quantum Error Correction Research",
  "Communication Coding Projects for B.Tech M.Tech Ph.D.",
  "5G/6G Error Coding Techniques",
  "Narpavi Research Institute",
];

const ECEErrorControlCodingProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">

      {/* ✅ SEO TAG (FIXED ONLY HERE) */}
      <SEO
        title="Error Control Coding in Modern Communication – Project Development Center in Chennai"
        description="IEEE-aligned (2023–2025) projects on LDPC, Polar, Turbo, Fountain, and quantum error correction codes for 5G/6G, satellite, IoT, and quantum communication, with MATLAB, Python, FPGA, and AI-assisted decoding."
        keywords={keywords}
        url="/department/communication-systems/error-control-coding-in-modern-communication–project-development-center-in-chennai"
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
              Error Control Coding in Modern Communication – Project Development Center in Chennai
            </h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Error
                Control Coding in Modern Communication – Project Development
                Center, enabling B.Tech, M.Tech, and Ph.D. scholars to design
                IEEE-aligned (2023–2025) projects on LDPC, Polar, Turbo, Fountain,
                and quantum error correction codes for 5G/6G, satellite, IoT,
                and quantum communication systems.
              </p>
              <p>
                Projects use MATLAB, Python, VHDL/Verilog, AI frameworks, and
                quantum simulation tools to improve reliability, coding gain,
                and latency in modern digital links across terrestrial,
                satellite, and emerging quantum networks.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Error Control Coding Project Development</h2>
              <p>
                B.Tech projects emphasize foundational block and cyclic codes
                such as CRC, Hamming, and Reed–Solomon, mapped to classical
                communication standards.
              </p>
              <ul>
                <li>IEEE literature review (2023–2025)</li>
                <li>CRC, Hamming, Reed–Solomon simulation in MATLAB</li>
                <li>BER analysis over noisy channels</li>
                <li>Comparison of coding schemes</li>
                <li>IEEE-format documentation</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Error Control Coding Project Development</h2>
              <p>
                M.Tech work targets advanced channel codes such as LDPC, Polar,
                and Turbo, which underpin 5G and emerging 6G standards.
              </p>
              <ul>
                <li>LDPC & Polar simulation (MATLAB / Python)</li>
                <li>FPGA implementation using VHDL / Verilog</li>
                <li>Application to IoT and 5G NR scenarios</li>
                <li>Scopus / SCI publication support</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Error Control Coding Project Development</h2>
              <p>
                Ph.D. projects explore deep learning-aided decoding, hybrid code
                designs, and quantum error correction for beyond-5G and quantum
                networks.
              </p>
              <ul>
                <li>AI-assisted LDPC / Polar decoding</li>
                <li>Quantum error correction modeling</li>
                <li>FPGA-based decoder validation</li>
                <li>IEEE / SCI publications & patents</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>
                Comparative Table – Error Control Coding Technologies vs. Industry
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
                      <td>LDPC Codes</td>
                      <td>5G / 6G Wireless</td>
                      <td>High coding gain</td>
                      <td>M.Tech / Ph.D.</td>
                      <td>MATLAB, Python</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Polar Codes</td>
                      <td>5G Control Channels</td>
                      <td>Near-capacity performance</td>
                      <td>M.Tech / Ph.D.</td>
                      <td>MATLAB, Python</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Quantum Error Correction</td>
                      <td>Quantum Networks</td>
                      <td>Noise resilience</td>
                      <td>Ph.D.</td>
                      <td>Quantum simulators</td>
                      <td>Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>
                IEEE-Aligned Error Control Coding Project Titles (2023–2025)
              </h2>
              <ul>
                <li>Deep Learning-Assisted LDPC Decoding for 6G (2023)</li>
                <li>Efficient Polar Codes for Ultra-Reliable IoT (2023)</li>
                <li>Hybrid Turbo–LDPC Coding for Satellites (2024)</li>
                <li>Reinforcement Learning Optimized Coding (2025)</li>
                <li>Quantum Error Correction for 6G Networks (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute specializes in modern error control
                coding projects, combining LDPC, Polar, Turbo, and quantum codes
                with AI-enabled decoding to match 5G/6G and quantum communication
                trends.
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
              <li>
                <a href="/department/communication-systems">
                  Communication Systems
                </a>
              </li>
              <li>
                <a href="/department/communication-systems/5g-6g-wireless-communication">
                  5G & 6G Wireless Communication
                </a>
              </li>
              <li>
                <a href="/department/communication-systems/error-control-coding">
                  Error Control Coding
                </a>
              </li>
              <li>
                <a href="/department/communication-systems/mimo-massive-mimo-antenna-techniques">
                  MIMO & Massive MIMO Antenna Techniques
                </a>
              </li>
              <li>
                <a href="/department/communication-systems/optical-fiber-communication">
                  Optical Fiber Communication
                </a>
              </li>
              <li>
                <a href="/department/communication-systems/software-defined-radio">
                  Software Defined Radio
                </a>
              </li>
              <li>
                <a href="/department/communication-systems/cognitive-radio-networks">
                  Cognitive Radio Networks
                </a>
              </li>
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

export default ECEErrorControlCodingProjectDevelopmentCenter;
