import "../ECEProjectDevelopmentCenter.scss";
import Subsidebar from "../../pages/Subsidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* ✅ KEYWORDS ARRAY OBJECT */
const keywords = [
  "Reconfigurable Antenna Design",
  "Frequency Reconfigurable Antennas",
  "Polarization Reconfigurable Antennas",
  "Beam Steering Antennas",
  "AI Controlled Antennas",
  "Metasurface Antenna Research",
  "HFSS CST Reconfigurable Antenna",
  "Smart Antennas for 5G 6G",
  "Compact Multiband Antennas",
  "IEEE Antenna Research Projects"
];

const faqs = [
  {
    question: "What are reconfigurable antennas?",
    answer:
      "Reconfigurable antennas can dynamically change frequency, polarization, or radiation pattern for adaptable wireless communication."
  },
  {
    question: "What do B.Tech projects focus on in reconfigurable antenna design?",
    answer:
      "Basic frequency and polarization reconfigurable antenna design using HFSS, CST, MATLAB, PIN diodes, and varactors."
  },
  {
    question: "What advanced topics are covered in M.Tech reconfigurable antenna projects?",
    answer:
      "AI-driven reconfiguration control, compact multiband designs, and real-time hardware-software integration."
  },
  {
    question: "What are the research areas for Ph.D. projects?",
    answer:
      "Metasurface antennas, AI-based adaptive control, spectrum-aware systems, and space-grade reconfigurable antennas."
  },
  {
    question: "Which tools are commonly used?",
    answer:
      "HFSS, CST, MATLAB, and AI-based optimization frameworks."
  }
];

const ReconfigurableAntennaDesignProject = () => {
  return (
    <div className="ECEProjectDevelopment">

      {/* ✅ SEO FIXED */}
      <SEO
        title="Reconfigurable Antenna Design – Project Development Center in Chennai"
        description="IEEE-aligned reconfigurable antenna design project development for B.Tech, M.Tech, and Ph.D. students using HFSS, CST, MATLAB covering frequency reconfiguration, polarization agility, beam steering, AI-controlled and metasurface antennas."
        keywords={keywords}
        url="/reconfigurable-antenna-design-project-development"
        faqs={faqs}
      />

      <Subsidebar
        extraLinks={[
          { id: "ece", label: "ece", path: "/department?dept=ece" }
        ]}
      />

      <div className="ECEProjectDevelopment-main">
        <div className="ECEProjectDevelopment-grid">

          {/* ✅ LEFT SIDEBAR */}
          <aside className="left-sidebar2">
           <Leftsidebar/>
          </aside>

          {/* 🔒 CENTER CONTENT (UNCHANGED) */}
          <div className="ECEProjectDevelopment-center">

            {/* ✅ H1 MATCHES SEO */}
            <h1>
              Reconfigurable Antenna Design – Project Development Center in Chennai
            </h1>
              <section className="ECEProjectDevelopment-intro">
              <p>
                <strong>Narpavi Institute</strong> leads innovation in reconfigurable antenna design, empowering students in B.Tech, M.Tech, and Ph.D. programs with IEEE-aligned project guidance and hands-on prototyping.
              </p>
              <p>
                We focus on antenna agility through frequency, polarization, beam steering, and AI integration to meet the dynamic demands of 5G, 6G, IoT, and aerospace communications.
              </p>
            </section>
            <section className="ECEProjectDevelopment-table">
              <h2>Comparative Technology & Industry Table</h2>
              <div className="ECEProjectDevelopment-tableContainer">
                <table>
                  <thead>
                    <tr>
                      <th>Technology</th>
                      <th>Core Feature</th>
                      <th>Industry Applications</th>
                      <th>Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Frequency Reconfigurable Antennas</td>
                      <td>Switchable frequency bands</td>
                      <td>IoT, 5G/6G Devices</td>
                      <td>Improved spectral efficiency</td>
                    </tr>
                    <tr>
                      <td>Polarization Reconfigurable Antennas</td>
                      <td>Dynamic polarization modes</td>
                      <td>Satellite, UAV, Defense</td>
                      <td>Enhanced signal reliability</td>
                    </tr>
                    <tr>
                      <td>Beam Steering Antennas</td>
                      <td>Directional adaptability</td>
                      <td>Smart cities, Vehicular Networks</td>
                      <td>Higher coverage and connectivity</td>
                    </tr>
                    <tr>
                      <td>AI-Controlled Antennas</td>
                      <td>Intelligent pattern optimization</td>
                      <td>Industry 4.0, Cognitive Radio</td>
                      <td>Optimal resource utilization</td>
                    </tr>
                    <tr>
                      <td>Compact Multi-Band Antennas</td>
                      <td>Miniaturized multiband design</td>
                      <td>Wearable, Biomedical IoT</td>
                      <td>Power-efficient and space-saving</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section className="ECEProjectDevelopment-btechCycle">
              <h2>B.Tech Project Cycle</h2>
              <p>
                Foundational training in antenna design, simulation, and prototype development focusing on frequency and polarization agility using HFSS, CST, and MATLAB.
              </p>
            </section>
            <section className="ECEProjectDevelopment-mtechCycle">
              <h2>M.Tech Project Cycle</h2>
              <p>
                Emphasis on AI-driven control, compact multi-band design, hybrid architectures, and balanced hardware-software implementation with real-world testing.
              </p>
            </section>
            <section className="ECEProjectDevelopment-phdCycle">
              <h2>Ph.D. Project Cycle</h2>
              <p>
                Advanced research in metasurface antennas, AI-enhanced adaptability, spectrum awareness, and space-grade deployable antennas with global collaboration and IEEE submission guidance.
              </p>
            </section>
            <section className="ECEProjectDevelopment-projects">
              <h2>IEEE Project Titles (2023-2025)</h2>
              <ul>
                <li>Frequency Reconfigurable Antenna for IoT Applications</li>
                <li>Polarization Reconfigurable Circularly Polarized Antenna</li>
                <li>AI-Based Beam Steering for Vehicular Networks</li>
                <li>Compact Multi-Band Antenna for Wearables</li>
                <li>Metasurface Antenna with Dynamic Frequency Agility</li>
              </ul>
            </section>
            <section className="ECEProjectDevelopment-about">
              <h2>About Narpavi Institute</h2>
              <p>
                Narpavi Institute provides expert mentorship for reconfigurable antenna design projects, equipping students with the skills to innovate and excel in the rapidly evolving field of wireless communications.
              </p>
            </section>
            <section className="ECEProjectDevelopment-faqs">
              <h2>FAQs</h2>
              {faqs.map((faq, idx) => (
                <details key={idx}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </section>
          </div>

          {/* ✅ RIGHT SIDEBAR */}
          <aside className="right-sidebar1">
            <h3>Related Services</h3>
            <ul>
              <li><a href="/department/antenna-design">Antenna Design</a></li>
              <li><a href="/department/antenna-design/iot-wearable-antennas">IoT & Wearable Antennas</a></li>
              <li><a href="/department/antenna-design/mimo-antenna-systems">MIMO Antenna Systems</a></li>
              <li><a href="/department/antenna-design/antenna-miniaturization">Antenna Miniaturization Techniques</a></li>
              <li><a href="/department/antenna-design/reconfigurable-antenna-design">Reconfigurable Antenna Design</a></li>
              <li><a href="/department/antenna-design/satellite-space-antenna-technology">Satellite & Space Antenna Technology</a></li>
              <li><a href="/department/antenna-design/smart-antennas-5g-6g">Smart Antennas for 5G & 6G</a></li>
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

export default ReconfigurableAntennaDesignProject;
