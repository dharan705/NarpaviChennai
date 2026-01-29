import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import SEO from "../../assets/SEO";
import { BiLeftArrow } from "react-icons/bi";
import Leftsidebar from "../../assets/Leftsidebar";

/* ================= FAQs ================= */
const faqs = [
  {
    question: "What are Antenna Systems for Space Applications?",
    answer:
      "These are specialized antennas designed for satellite communication, GNSS, CubeSats, and deep-space missions."
  },
  {
    question: "What do B.Tech projects in antenna systems cover?",
    answer:
      "Projects focus on microstrip patch antennas, CubeSat antennas, and GNSS antennas using HFSS, CST, and MATLAB."
  },
  {
    question: "What advanced research is pursued in M.Tech antenna projects?",
    answer:
      "Research includes phased arrays, reconfigurable antennas, and dielectric resonator antennas."
  },
  {
    question: "What topics are focused on in Ph.D. antenna research?",
    answer:
      "AI-optimized antennas, metamaterial antennas, deployable nanosatellite antennas, and IEEE journal research."
  },
  {
    question: "Which tools are used for antenna design?",
    answer:
      "HFSS, CST Microwave Studio, FEKO, MATLAB, CAD tools, and AI frameworks."
  }
];

/* ================= KEYWORDS ARRAY ================= */
const keywords = [
  "Satellite Antenna Projects",
  "CubeSat Antenna Design",
  "Phased Array Antenna Research",
  "AI in Antenna Systems",
  "GNSS Antenna Projects",
  "Metamaterial Antenna Design",
  "Reconfigurable Antennas for Space",
  "IEEE Antenna Research Papers",
  "Space Communication Antenna Projects",
  "Narpavi Research Institute Antenna Guidance"
];

const AntennaSystemsSpaceApplicationsProject = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">

      {/* ================= SEO ================= */}
      <SEO
        title="Antenna Systems for Space Applications – Project Development Center in Chennai"
        description="IEEE-aligned (2023–2025) antenna systems for space applications projects on microstrip patch and phased array antennas, GNSS and CubeSat antennas, metamaterial and dielectric resonator designs, and AI-optimized space antennas using HFSS, CST, FEKO, and MATLAB."
        keywords={keywords}
        url="/department/satellite-communication/antenna-systems-space-applications-project-development-center-in-chennai"
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
              Antenna Systems for Space Applications – Project Development Center in Chennai
            </h1>
                <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> specializes in antenna system design and research for space applications, supporting projects aligned with IEEE standards (2023–2025) across satellite communication, GNSS, and CubeSat domains.
              </p>
              <p>
                Our expertise includes miniaturized, high-gain, reconfigurable, and AI-driven antennas suited for modern aerospace and telecommunication needs.
              </p>
            </section>
            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Antenna Type</th>
                      <th>Research Focus</th>
                      <th>Industry Applications</th>
                      <th>Tools/Platforms</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Microstrip Patch</td>
                      <td>Low-profile satellite antennas</td>
                      <td>CubeSats, GNSS</td>
                      <td>HFSS, CST</td>
                    </tr>
                    <tr>
                      <td>Phased Array</td>
                      <td>Beam steering and adaptive coverage</td>
                      <td>5G/6G satellites, space missions</td>
                      <td>HFSS, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Dielectric Resonator</td>
                      <td>High efficiency</td>
                      <td>Deep-space communication</td>
                      <td>FEKO, CST</td>
                    </tr>
                    <tr>
                      <td>Metamaterial Antennas</td>
                      <td>Miniaturization and high gain</td>
                      <td>CubeSats, IoT satellites</td>
                      <td>CST, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Reconfigurable Antennas</td>
                      <td>Frequency agility</td>
                      <td>Defense, space telecom</td>
                      <td>HFSS, AI frameworks</td>
                    </tr>
                    <tr>
                      <td>Deployable Antennas</td>
                      <td>Lightweight and compact</td>
                      <td>Nanosatellites</td>
                      <td>CAD tools, CST</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Project Development Cycle</h2>
              <p>
                Design and simulation of microstrip patch antennas for satellite links, compact CubeSat antenna design, and circularly polarized GNSS antennas using HFSS, CST, and MATLAB.
              </p>
            </section>
            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Project Development Cycle</h2>
              <p>
                Advanced antenna designs including phased array antennas, reconfigurable antennas for 5G satellite communication, high-gain inter-satellite links, and dielectric resonator antennas using HFSS, CST, FEKO, and MATLAB.
              </p>
            </section>
            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Project Development Cycle</h2>
              <p>
                Research on AI-optimized antenna design for deep-space, metamaterial-based miniaturized antennas, adaptive phased arrays, and deployable nanosatellite antennas with publication goals in IEEE journals.
              </p>
            </section>
            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>Compact Microstrip Antenna for CubeSat GNSS Applications (2023)</li>
                <li>High-Gain Phased Array Antenna for Inter-Satellite Links (2023)</li>
                <li>Reconfigurable Antenna Design for 5G/6G Satellite Networks (2024)</li>
                <li>AI-Driven Antenna Optimization for Deep-Space Communication (2024)</li>
                <li>Metamaterial Antenna for Miniaturized Satellite Systems (2025)</li>
                <li>Deployable Lightweight Antenna for Nanosatellite Missions (2025)</li>
              </ul>
            </section>
            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute provides expert mentorship and project guidance in antenna systems, focusing on design, simulation, and innovative solutions aligned with global aerospace research and IEEE standards.
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

export default AntennaSystemsSpaceApplicationsProject;
