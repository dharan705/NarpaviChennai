import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* ================= FAQs ================= */
const faqs = [
  {
    question: "What are CubeSats and Nanosatellites?",
    answer:
      "CubeSats and Nanosatellites are small, modular satellites enabling cost-effective and rapid space missions."
  },
  {
    question: "What do B.Tech projects in CubeSat and Nanosatellite Technologies focus on?",
    answer:
      "They focus on SDR-based communication modules, Earth imaging payloads, and CubeSat ground stations."
  },
  {
    question: "What advanced topics are covered in M.Tech projects?",
    answer:
      "Inter-CubeSat communication, IoT relay systems, AI-enabled payloads, and adaptive attitude control."
  },
  {
    question: "What are the research directions for Ph.D. scholars?",
    answer:
      "CubeSat constellations, swarm intelligence, AI payload optimization, and quantum communication."
  },
  {
    question: "What tools are used in CubeSat and Nanosatellite projects?",
    answer:
      "MATLAB, Python, GNURadio, STK, Simulink, HFSS, CST, TensorFlow, PyTorch, and Qiskit."
  }
];

/* ================= KEYWORDS ARRAY ================= */
const keywords = [
  "CubeSat and Nanosatellite Technologies",
  "CubeSat Design and Communication",
  "Nanosatellite IoT Applications",
  "Inter-Satellite Links",
  "AI in CubeSat Payloads",
  "Swarm Intelligence for Satellites",
  "Quantum Communication via CubeSats",
  "Satellite IoT Networks",
  "LEO Satellite Constellations",
  "IEEE CubeSat Projects",
  "Nanosatellite Research Projects",
  "NanoSatellites for Disaster Management"
];

const CubeSatNanosatelliteProject = () => {
  return (
    <div className="ECEProjectCenter">

      {/* ================= SEO ================= */}
      <SEO
        title="CubeSat and Nanosatellite Technologies – Project Development Center in Chennai"
        description="IEEE-aligned (2023–2025) CubeSat and nanosatellite projects on SDR-based links, IoT data relay, inter-satellite networking, AI-enabled payloads, swarm coordination, and quantum communication."
        keywords={keywords}
        url="/department/satellite-communication/cubesat-nanosatellite-technologies-project-development-center-in-chennai"
        faqs={faqs}
      />

      <Sidebar
        extraLinks={[
          { id: "ece", label: "ece", path: "/department?dept=ece" }
        ]}
      />

      <div className="ECEProjectCenter-main">
        <div className="ECEProjectCenter-grid">

          {/* ================= LEFT SIDEBAR ================= */}
          <aside className="left-sidebar2">
           <Leftsidebar/>
          </aside>

          {/* ================= CENTER CONTENT ================= */}
          <div className="ECEProjectCenter-center">
            <h1>
              CubeSat and Nanosatellite Technologies – Project Development Center in Chennai
            </h1>
               <section className="ECEProjectCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> leads academic and research guidance in CubeSat and Nanosatellite technologies, focusing on rapid development and deployment of modular satellites supporting IoT and next-gen 5G/6G connectivity.
              </p>
              <p>
                Projects encompass varied domains such as payload design, intersatellite communication, AI-powered onboard processing, and quantum communication experimentations aligned with IEEE standards (2023–2025).
              </p>
            </section>

            <section className="ECEProjectCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="ECEProjectCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology Area</th>
                      <th>Research Focus</th>
                      <th>Industry Application</th>
                      <th>Tools</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>CubeSat Design</td>
                      <td>Low-cost modular satellites</td>
                      <td>Education, research, commercial</td>
                      <td>STK, CAD</td>
                    </tr>
                    <tr>
                      <td>Nanosatellite IoT</td>
                      <td>IoT data relay via satellite</td>
                      <td>Agriculture, maritime, logistics</td>
                      <td>GNURadio, Python</td>
                    </tr>
                    <tr>
                      <td>Inter-Satellite Links</td>
                      <td>Networking between CubeSats</td>
                      <td>Mega-constellations</td>
                      <td>MATLAB, CST</td>
                    </tr>
                    <tr>
                      <td>Onboard AI</td>
                      <td>AI-driven payload data processing</td>
                      <td>Real-time Earth observation</td>
                      <td>TensorFlow, PyTorch</td>
                    </tr>
                    <tr>
                      <td>Swarm Intelligence</td>
                      <td>Coordination algorithms</td>
                      <td>Satellite swarms, defense</td>
                      <td>MATLAB, NS3</td>
                    </tr>
                    <tr>
                      <td>Quantum Experiments</td>
                      <td>Quantum communication research</td>
                      <td>Secure satellite comms</td>
                      <td>Qiskit, MATLAB</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            <section className="ECEProjectCenter-btech">
              <h2>B.Tech Project Cycle</h2>
              <p>
                Projects include SDR based communication modules, miniature Earth imaging, IoT nanosatellite sensors, and satellite ground station design using tools like MATLAB, Python, GNURadio, and STK.
              </p>
            </section>
            
            <section className="ECEProjectCenter-mtech">
              <h2>M.Tech Project Cycle</h2>
              <p>
                Focus on advanced communication protocols, AI-based payloads, adaptive control systems, and nanosatellite IoT data relay using Simulink, Ansys HFSS, CST, and MATLAB.
              </p>
            </section>
            
            <section className="ECEProjectCenter-phd">
              <h2>Ph.D. Research Cycle</h2>
              <p>
                Research domains include CubeSat constellations, swarm intelligence, AI payload optimization, and quantum satellite communication, targeting IEEE journals.
              </p>
            </section>

            <section className="ECEProjectCenter-projects">
              <h2>IEEE-Style Project Titles (2023-2025)</h2>
              <ul>
                <li>Design of CubeSat Ground Station with SDR Integration (2023)</li>
                <li>IoT Data Relay using Nanosatellite Constellations (2023)</li>
                <li>AI-Driven Payload Optimization for CubeSats (2024)</li>
                <li>Swarm Intelligence Algorithms for Satellite Coordination (2024)</li>
                <li>Quantum Communication Experiments via CubeSats (2025)</li>
                <li>Satellite IoT Networks for Global Coverage (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute offers world-class research mentorship and project guidance in CubeSat and Nano satellite technologies, enabling students and researchers worldwide to deliver innovative, IEEE-standard aligned projects and publications.
              </p>
            </section>

            <section className="ECEProjectCenter-faq">
              <h2>FAQs</h2>
              {faqs.map((faq, index) => (
                <details key={index}>
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

export default CubeSatNanosatelliteProject;
