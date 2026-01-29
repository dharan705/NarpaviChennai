import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* ================= FAQs ================= */
const faqs = [
  {
    question: "What are Deep Space Communication Systems?",
    answer:
      "Systems designed to enable communication over vast distances in planetary missions."
  },
  {
    question: "What topics are covered in B.Tech deep space communication projects?",
    answer:
      "Error-correcting codes, DSN simulation, antenna models, and low-SNR signal detection."
  },
  {
    question: "What advanced subjects do M.Tech projects focus on?",
    answer:
      "Ka-band models, optical laser communications, AI-based modulation classification."
  },
  {
    question: "What research areas are pursued in Ph.D. projects?",
    answer:
      "Machine learning optimization, quantum communication, DTN, and ultra-high gain antennas."
  },
  {
    question: "Which tools are frequently used?",
    answer:
      "MATLAB, Simulink, STK, GNU Radio, HFSS, NS3, TensorFlow, and Qiskit."
  }
];

/* ================= KEYWORDS ARRAY ================= */
const keywords = [
  "Deep Space Communication Systems",
  "Interplanetary Communication",
  "X-band and Ka-band Links",
  "Optical Laser Communication",
  "Error Correction Codes",
  "Delay-Tolerant Networking",
  "AI-Driven Space Communication",
  "Quantum Space Links",
  "NASA Artemis Communication",
  "ESA Mars Communications",
  "IEEE Deep Space Projects",
  "Nanosatellite Space Communications"
];

const DeepSpaceCommunicationProject = () => {
  return (
    <div className="ECEProjectDeveloperCenter">

      {/* ================= SEO ================= */}
      <SEO
        title="Deep Space Communication Systems – Project Development Center in Chennai"
        description="IEEE-aligned (2023–2025) deep space communication projects on Ka-band RF links, optical laser communication, LDPC/turbo coding, delay-tolerant networking, AI-based modulation recognition, and quantum communication."
        keywords={keywords}
        url="/department/satellite-communication/deep-space-communication-system-project-development-center-in-chennai"
        faqs={faqs}
      />

      <Sidebar
        extraLinks={[
          { id: "ece", label: "ece", path: "/department?dept=ece" }
        ]}
      />

      <div className="ECEProjectDeveloperCenter-main">
        <div className="ECEProjectDeveloperCenter-grid">

          {/* ================= LEFT SIDEBAR ================= */}
          <aside className="left-sidebar2">
           <Leftsidebar/>
          </aside>

          {/* ================= CENTER CONTENT ================= */}
          <div className="ECEProjectDeveloperCenter-center">
            <h1>
              Deep Space Communication Systems – Project Development Center in Chennai
            </h1>
              <section className="ECEProjectDeveloperCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> specializes in deep space communication technologies, focusing on overcoming challenges of long-distance space comms through advanced error correction, AI optimization, and quantum communication methods.
              </p>
              <p>
                We provide project mentorship aligned with IEEE standards (2023-2025) for B.Tech, M.Tech, and Ph.D. students in pioneering space communication research.
              </p>
            </section>
            <section className="ECEProjectDeveloperCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="ECEProjectDeveloperCenter-tableContainer">
                <table>
                  <thead>
                    <tr>
                      <th>Technology Area</th>
                      <th>Research Focus</th>
                      <th>Industry Applications</th>
                      <th>Tools & Platforms</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>RF Deep Space Links</td>
                      <td>X-band and Ka-band communication</td>
                      <td>Lunar and Mars missions</td>
                      <td>MATLAB, STK</td>
                    </tr>
                    <tr>
                      <td>Optical Laser Communication</td>
                      <td>High data rate communication</td>
                      <td>NASA Artemis, ESA Mars missions</td>
                      <td>Python, Ansys HFSS</td>
                    </tr>
                    <tr>
                      <td>Error Correction</td>
                      <td>Turbo and LDPC codes</td>
                      <td>Space telemetry</td>
                      <td>MATLAB, Simulink</td>
                    </tr>
                    <tr>
                      <td>Delay-Tolerant Networking</td>
                      <td>Store-carry-forward protocols</td>
                      <td>Interplanetary internet</td>
                      <td>NS3, Python</td>
                    </tr>
                    <tr>
                      <td>AI in Space Communication</td>
                      <td>Modulation and signal optimization</td>
                      <td>Realtime scientific missions</td>
                      <td>TensorFlow, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Quantum Space Links</td>
                      <td>Quantum communication techniques</td>
                      <td>Secure interplanetary communication</td>
                      <td>Qiskit, MATLAB</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDeveloperCenter-btech">
              <h2>B.Tech Project Cycle</h2>
              <p>
                Projects include error correction techniques, DSN simulation, antenna design, and signal detection in low SNR, using MATLAB, Simulink, and GNU Radio.
              </p>
            </section>
            <section className="ECEProjectDeveloperCenter-mtech">
              <h2>M.Tech Project Cycle</h2>
              <p>
                Advanced work on Ka-band communication, optical links, AI-based modulation, and adaptive coding using MATLAB, STK, Ansys HFSS, and NS3.
              </p>
            </section>
            <section className="ECEProjectDeveloperCenter-phd">
              <h2>Ph.D. Research Cycle</h2>
              <p>
                Focuses on machine learning-based optimization, quantum communication, DTNs, and ultra-high gain antenna arrays with publications in premier IEEE journals.
              </p>
            </section>

            <section className="ECEProjectDeveloperCenter-projectTitles">
              <h2>IEEE-Style Project Titles</h2>
              <ul>
                <li>Error Correction Techniques for Deep Space Telemetry</li>
                <li>Ka-band Communication for Mars Rover Missions</li>
                <li>AI-Based Modulation Recognition for Deep Space Links</li>
                <li>Delay-Tolerant Networking in Interplanetary Internet</li>
                <li>Optical Laser Communication for Lunar Missions</li>
                <li>Quantum Key Distribution in Space</li>
              </ul>
            </section>

            <section className="ECEProjectDeveloperCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute offers focused mentorship on deep space communication systems, supporting students with cutting-edge research in antenna design, space telemetry, AI optimization, and quantum communication.
              </p>
            </section>

            <section className="ECEProjectDeveloperCenter-faq">
              <h2>FAQs</h2>
              {faqs.map((faq, idx) => (
                <details key={idx}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </section>
         

          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <aside className="right-sidebar1">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/department/satellite-communication">Satellite & Space Communication</a></li>
              <li><a href="/department/satellite-communication/antenna-systems-space-applications">Antenna Systems for Space Applications</a></li>
              <li><a href="/department/satellite-communication/cubesat-nanosatellite">CubeSat & Nanosatellite Projects</a></li>
              <li><a href="/department/satellite-communication/deep-space-communication">Deep Space Communication</a></li>
              <li><a href="/department/satellite-communication/gnss-project">GNSS Projects</a></li>
              <li><a href="/department/satellite-communication/satellite-communication-5g-6g">Satellite Communication for 5G & 6G</a></li>
              <li><a href="/department/satellite-communication/satellite-iot-applications">Satellite IoT Applications</a></li>
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

export default DeepSpaceCommunicationProject;
