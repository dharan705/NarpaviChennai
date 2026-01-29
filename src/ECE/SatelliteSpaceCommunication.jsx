import Subsidebar from ".././pages/Subsidebar";
import "./ECEProjectDevelopmentCenter.scss";
import SEO from "../assets/SEO";
import Leftsidebar from "../assets/Leftsidebar";

/* ✅ Keywords as ARRAY OBJECT (single source) */
const keywords = [
  "Satellite Communication Projects",
  "Space Communication Project Development",
  "IEEE Satellite Projects 2025",
  "CubeSat Project Development",
  "LEO Satellite Communication",
  "Antenna Design IEEE Projects",
  "SDR Satellite Communication",
  "FPGA Satellite Systems",
  "Optical Satellite Communication",
  "Narpavi Research Institute Satellite Projects"
];

const faqs = [
  {
    question: "What services does the Satellite & Space Communication Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Satellite & Space Communication Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in satellite internet, inter-satellite communication, and RF systems for industries like aerospace, defense, and global broadband."
  },
  {
    question: "What types of satellite and space communication projects are supported?",
    answer:
      "We support B.Tech projects (CubeSat systems, antenna design), M.Tech projects (adaptive beamforming, SDR-based terminals), and Ph.D. projects (AI-based routing, optical satellite communication) for applications in deep-space missions, LEO constellations, and smart cities."
  },
  {
    question: "Which technologies are used in satellite and space communication project development?",
    answer:
      "Our stack includes MATLAB, HFSS, ADS, SDRs, FPGA, and AI frameworks like TensorFlow for advanced satellite communication solutions."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are based on IEEE Transactions (2023–2025), covering areas like satellite internet, optical communication, and AI-driven space systems, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer:
      "We offer end-to-end guidance, including topic selection, system design, simulation, hardware implementation, validation, documentation, and IEEE/Scopus journal publication support."
  }
];

const ECESatelliteSpaceCommunicationProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">

      {/* ✅ SEO FIXED */}
      <SEO
        title="Satellite & Space Communication – Project Development Center in Chennai"
        description="Satellite and space communication project development for B.Tech, M.Tech, and Ph.D. students focusing on CubeSat, LEO satellite internet, inter-satellite communication, RF systems, antenna design, and IEEE-aligned research (2023–2025)."
        url="/satellite-space-communication-project-development-center-chennai"
        keywords={keywords}
        faqs={faqs}
      />

      <Subsidebar
        extraLinks={[
          { id: "ece", label: "ece", path: "/department?dept=ece" }
        ]}
      />

      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          {/* ✅ LEFT SIDEBAR (ONLY CHANGE) */}
          <aside className="left-sidebar2">
            <Leftsidebar/>
          </aside>

          {/* ❌ CENTER CONTENT — NOT MODIFIED */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Satellite & Space Communication – Project Development Center in Chennai</h1>
   <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Satellite & Space Communication – Project Development Center, an advanced initiative empowering B.Tech, M.Tech, and Ph.D. scholars to develop cutting-edge, IEEE-aligned (2023–2025) projects in satellite internet, inter-satellite communication, and deep-space systems.
              </p>
              <p>
                With expertise in antenna design, RF systems, and orbital mechanics, and tools like MATLAB, HFSS, and SDRs, we deliver innovative solutions for aerospace, defense, and global connectivity, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Satellite & Space Communication Technologies vs. Industry Applications</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology</th>
                      <th>Industry / Application</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Satellite Internet (LEO/MEO/GEO)</td>
                      <td>Global Broadband (e.g., Starlink, OneWeb)</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, STK</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Inter-Satellite Communication</td>
                      <td>Deep-Space Missions, Satellite Constellations</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>HFSS, ADS</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>Antenna Array Design</td>
                      <td>Ground Stations, Mobile Satellite Terminals</td>
                      <td>B.Tech/M.Tech</td>
                      <td>HFSS, CST</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>RF & Microwave Systems</td>
                      <td>Space Telemetry, Remote Sensing Satellites</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>ADS, MATLAB</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>Optical Satellite Communication</td>
                      <td>High-Speed Interplanetary Data Transfer</td>
                      <td>Ph.D.</td>
                      <td>OptiSystem, MATLAB</td>
                      <td>Expert</td>
                    </tr>
                    <tr>
                      <td>Space-Based Radar Imaging</td>
                      <td>Defense, Earth Observation, Disaster Monitoring</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB, SARscape</td>
                      <td>Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Satellite & Space Communication Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational satellite and space communication projects like CubeSat systems or antenna design, aligned with IEEE topics.
              </p>
              <ul>
                <li>Selection of IEEE-based topics (2023–2025)</li>
                <li>Simulation and design using MATLAB, HFSS, and ADS</li>
                <li>Prototype development with SDRs and microcontrollers</li>
                <li>Testing and verification for propagation delay and Doppler shift</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical satellite systems, and academic-ready output.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Satellite & Space Communication Project Development</h2>
              <p>
                For postgraduate students, projects emphasize advanced space communication technologies with industry integration.
              </p>
              <ul>
                <li>Identifying research gaps from IEEE and industry white papers</li>
                <li>Advanced algorithm and system development (e.g., error correction coding)</li>
                <li>Hardware implementation using SDRs, FPGA, and RF front-end systems</li>
                <li>Integration with satellite constellation models</li>
                <li>Publication support in Scopus/SCI journals with documentation</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade satellite communication solutions.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Satellite & Space Communication Project Development</h2>
              <p>
                For doctoral scholars, our center provides complete research and publication support for innovative satellite communication models.
              </p>
              <ul>
                <li>Problem definition and literature survey from IEEE Transactions (2023–2025)</li>
                <li>Development of novel models like AI-based routing or nanosatellite systems</li>
                <li>Simulation and experimental verification on high-performance platforms</li>
                <li>Manuscript preparation for IEEE and SCI-indexed journals</li>
                <li>Patent filing support for innovative solutions</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Satellite & Space Communication Project Titles (2023–2025)</h2>
              <ul>
                <li>Design and Implementation of Low-Cost CubeSat Communication Systems</li>
                <li>AI-Driven Routing Algorithms for Inter-Satellite Communication Networks</li>
                <li>FPGA-Based Real-Time Signal Processing for Satellite Ground Stations</li>
                <li>Adaptive Beamforming in LEO Satellite Constellations</li>
                <li>IoT Integration with Satellite Networks for Global Monitoring</li>
                <li>Error Correction Coding for Deep-Space Communication Channels</li>
                <li>Optical Satellite Communication for High-Speed Data Transfer</li>
                <li>SDR-Based Mobile Satellite Communication Terminals</li>
                <li>AI-Based Atmospheric Attenuation Prediction in Ka-Band Links</li>
                <li>Smart Antenna Array Design for Next-Generation Satellite Systems</li>
                <li>Multi-Orbit Satellite Internet Architecture for Global Broadband</li>
                <li>Hybrid RF-Optical Systems for Interplanetary Data Exchange</li>
                <li>Machine Learning-Based Space Weather Forecasting for Satellite Communication</li>
                <li>Real-Time Remote Sensing Using SAR (Synthetic Aperture Radar) Satellites</li>
                <li>6G-Enabled Space Communication Architectures for Smart Cities</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is an India-based global research and project development center. We specialize in assisting students and researchers in engineering, communication, and aerospace domains, offering IEEE-standard project support with hands-on implementation.
              </p>
              <p>
                Backed by domain experts, advanced simulation tools, and IEEE Transactions (2023–2025), we ensure every project is innovative, industry-ready, and globally competitive.
              </p>
            </section>

            {/* FAQ UI (schema injected via SEO component) */}
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
            </section>          </div>

          {/* ✅ RIGHT SIDEBAR (ONLY CHANGE) */}
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

export default ECESatelliteSpaceCommunicationProjectDevelopmentCenter;
