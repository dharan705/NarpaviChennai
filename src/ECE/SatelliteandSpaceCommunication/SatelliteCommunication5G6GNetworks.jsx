import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* ================= FAQs ================= */
const faqs = [
  {
    question: "What is the significance of Satellite Communication in 5G/6G networks?",
    answer:
      "It enables global connectivity with ultra-low latency and high-speed data transfer by integrating satellites into 5G/6G infrastructures."
  },
  {
    question: "What B.Tech projects focus on satellite communication for 5G/6G?",
    answer:
      "LEO satellite communication, satellite backhaul simulation, smart antenna beam-switching, and satellite-assisted IoT."
  },
  {
    question: "What advanced research do M.Tech projects undertake?",
    answer:
      "Satellite–terrestrial integration, AI beamforming, handover optimization, and mmWave satellite channel modeling."
  },
  {
    question: "What are the Ph.D. research themes in satellite 5G/6G?",
    answer:
      "NTN architectures, LEO mega-constellations, terahertz satellite systems, and quantum-secure satellite networks."
  },
  {
    question: "Which tools are used for satellite 5G/6G research?",
    answer:
      "MATLAB, NS3, Python, GNURadio, CST, Ansys HFSS, OPNET, TensorFlow, and Qiskit."
  }
];

/* ================= KEYWORDS ARRAY ================= */
const keywords = [
  "Satellite Communication for 5G Networks",
  "Satellite Communication for 6G Networks",
  "Non-Terrestrial Networks Research",
  "LEO Satellite Communication Projects",
  "Beamforming in Satellite 5G",
  "AI in Satellite Communication",
  "Terahertz Satellite Links",
  "Quantum-Secure 6G Communication",
  "Satellite IoT Integration",
  "Satellite 5G/6G Project Ideas",
  "IEEE Satellite Communication Projects",
  "Narpavi Research Institute Space Communication"
];

const SatelliteCommunication5G6GProject = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">

      {/* ================= SEO ================= */}
      <SEO
        title="Satellite Communication for 5G & 6G – Project Development Center in Chennai"
        description="IEEE-aligned (2023–2025) satellite communication for 5G/6G projects on NTN architectures, LEO constellations, AI-driven beamforming, mmWave/THz links, and quantum-secure communication."
        keywords={keywords}
        url="/department/satellite-communication/satellite-communication-5g-6g-project-development-center-in-chennai"
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

          {/* ================= CENTER CONTENT ================= */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>
              Satellite Communication for 5G & 6G – Project Development Center in Chennai
            </h1>
               <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> specializes in advanced satellite communication research for next-generation 5G/6G networks, focusing on NTN architectures, LEO constellations, beamforming, and quantum-secure communication.
              </p>
              <p>
                We support B.Tech, M.Tech, and Ph.D. scholars with hands-on training and research assistance for hardware implementation, simulations, and IEEE-standard publications in this dynamic field.
              </p>
            </section>

            {/* Comparative Technology-Industry Table */}
            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology Area</th>
                      <th>Research Focus</th>
                      <th>Industry Applications</th>
                      <th>Tools/Platforms</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Satellite-5G Integration</td>
                      <td>Backhaul, coverage extension</td>
                      <td>Rural broadband, disaster recovery</td>
                      <td>NS3, MATLAB</td>
                    </tr>
                    <tr>
                      <td>LEO Constellations</td>
                      <td>Low-latency global internet</td>
                      <td>Starlink, OneWeb, Amazon Kuiper</td>
                      <td>Python, GNURadio</td>
                    </tr>
                    <tr>
                      <td>AI-Driven Beamforming</td>
                      <td>Adaptive satellite antennas</td>
                      <td>5G/6G network operators</td>
                      <td>TensorFlow, CST</td>
                    </tr>
                    <tr>
                      <td>mmWave/THz Links</td>
                      <td>High-speed satellite data transfer</td>
                      <td>Future 6G services</td>
                      <td>MATLAB, HFSS</td>
                    </tr>
                    <tr>
                      <td>NTN in 6G</td>
                      <td>Hybrid terrestrial-satellite</td>
                      <td>Smart cities, IoT ecosystems</td>
                      <td>NS3, OPNET</td>
                    </tr>
                    <tr>
                      <td>QKD Over Satellites</td>
                      <td>Quantum-secure communication</td>
                      <td>Defense, finance, healthcare</td>
                      <td>MATLAB, Qiskit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Project Development Cycles */}
            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Projects in Satellite 5G/6G</h2>
              <p>
                Fundamentals of LEO satellite communication for 5G, satellite backhaul simulation, beam-switching antennas, and network slicing demonstrations using MATLAB, NS3, Python, and GNURadio.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Projects in Satellite 5G/6G</h2>
              <p>
                Advanced satellite-terrestrial integration, QoS-aware resource allocation, AI/ML beamforming and handover optimization, and channel modeling for mmWave satellite links using MATLAB, CST, Ansys HFSS, NS3, and OPNET.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Research in Satellite 5G/6G</h2>
              <p>
                Research on NTN architectures beyond 5G, LEO mega-constellation communications, terahertz-band satellite systems, and quantum key distribution over satellite-based 6G networks aligned with IEEE publication standards.
              </p>
            </section>

            {/* IEEE Project Titles */}
            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>Simulation of LEO Satellite Backhaul for Rural 5G Networks (2023)</li>
                <li>AI-Based Beamforming Optimization for Satellite–5G Communication (2023)</li>
                <li>Resource Allocation Models for Non-Terrestrial 5G Networks (2024)</li>
                <li>Terahertz Band Satellite Links for 6G Systems (2024)</li>
                <li>Quantum Key Distribution over Satellite-Enabled 6G Networks (2025)</li>
                <li>Satellite-Assisted IoT Connectivity Using Non-Terrestrial Networks (2025)</li>
              </ul>
            </section>

            {/* About Section */}
            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute offers expert guidance in satellite communication for 5G/6G networks, focusing on latest architectures, AI-driven optimizations, and quantum-secure technologies, supporting students to produce IEEE-standard research and publications.
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

export default SatelliteCommunication5G6GProject;
