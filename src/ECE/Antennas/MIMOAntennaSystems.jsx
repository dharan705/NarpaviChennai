import "../ECEProjectDevelopmentCenter.scss";
import Subsidebar from "../../pages/Subsidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* ✅ KEYWORDS ARRAY OBJECT */
const keywords = [
  "MIMO Antenna Systems",
  "Massive MIMO IEEE Projects",
  "Beamforming Antennas 5G",
  "Hybrid Beamforming MIMO",
  "Reconfigurable Intelligent Surfaces RIS",
  "mmWave MIMO 6G",
  "Terahertz Band Antennas",
  "AI Optimized Antennas",
  "Wireless 5G 6G Networks",
  "CST HFSS MIMO Design"
];

const faqs = [
  {
    question: "What are MIMO Antenna Systems?",
    answer:
      "MIMO antenna systems use multiple antennas at both transmitter and receiver to improve capacity, coverage, and interference resilience in wireless networks."
  },
  {
    question: "What do B.Tech projects focus on in MIMO antenna systems?",
    answer:
      "Designing 2x2 and 4x4 MIMO arrays, basic channel modeling, and simulation with CST and HFSS."
  },
  {
    question: "What advanced topics are covered in M.Tech MIMO antenna projects?",
    answer:
      "Beamforming algorithms, mutual coupling reduction, frequency reconfigurable designs, smartphone and vehicular MIMO, and mmWave optimization."
  },
  {
    question: "What research do Ph.D. students undertake in MIMO antenna systems?",
    answer:
      "Massive MIMO, RIS, hybrid beamforming, AI-driven adaptive antennas, and next-generation wireless standards."
  },
  {
    question: "Which tools are used in MIMO antenna research?",
    answer:
      "CST, HFSS, MATLAB, simulation platforms, and AI frameworks for antenna optimization."
  }
];

const MimoAntennaSystemsProject = () => {
  return (
    <div className="ECEProjectDevelopment">

      {/* ✅ SEO FIXED */}
      <SEO
        title="MIMO Antenna Systems – Project Development Center in Chennai"
        description="IEEE-aligned MIMO Antenna Systems project development for B.Tech, M.Tech, and Ph.D. students using CST, HFSS, MATLAB for 2x2, 4x4, massive MIMO, beamforming, RIS, mmWave and AI-optimized antenna design."
        keywords={keywords}
        url="/mimo-antenna-systems-project-development"
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

          {/* CENTER CONTENT */}
          <div className="ECEProjectDevelopment-center">

            {/* ✅ H1 MATCHES SEO */}
            <h1>
              MIMO Antenna Systems – Project Development Center in Chennai
            </h1>
                <section className="ECEProjectDevelopment-intro">
              <p>
                <strong>Narpavi Institute</strong> empowers innovative research in MIMO antenna systems for high-capacity, interference-resilient wireless networks including 5G, 6G, and IoT applications aligned with IEEE standards (2023-2025).
              </p>
              <p>
                Our center supports academic and industrial excellence through simulation, hardware prototyping, and AI-enabled optimization of MIMO architectures.
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
                      <th>Industry Application</th>
                      <th>Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2x2 / 4x4 MIMO</td>
                      <td>Basic multiplexing and diversity</td>
                      <td>Smartphones, Wi-Fi Routers</td>
                      <td>Improved connectivity and throughput</td>
                    </tr>
                    <tr>
                      <td>Massive MIMO (64+ elements)</td>
                      <td>High spectral efficiency</td>
                      <td>5G/6G Base Stations</td>
                      <td>Ultra-high capacity and reduced interference</td>
                    </tr>
                    <tr>
                      <td>Beamforming MIMO</td>
                      <td>Directional signal steering</td>
                      <td>Smart Cities, Vehicular Networks</td>
                      <td>Strong coverage and reliability</td>
                    </tr>
                    <tr>
                      <td>AI-Driven MIMO</td>
                      <td>Intelligent antenna optimization</td>
                      <td>Industry 4.0, Cognitive Networks</td>
                      <td>Optimal resource utilization</td>
                    </tr>
                    <tr>
                      <td>RIS-assisted MIMO</td>
                      <td>Reconfigurable metasurface control</td>
                      <td>Defense, Aerospace</td>
                      <td>Flexible connectivity and cost savings</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopment-btechCycle">
              <h2>B.Tech Project Cycle</h2>
              <p>
                Focus on fundamental MIMO array design, channel modeling, and prototyping of 2x2 and 4x4 systems using CST and HFSS.
              </p>
            </section>

            <section className="ECEProjectDevelopment-mtechCycle">
              <h2>M.Tech Project Cycle</h2>
              <p>
                Engage in advanced beamforming, mutual coupling reduction, and frequency-reconfigurable MIMO designs targeting smartphone and vehicular applications.
              </p>
            </section>

            <section className="ECEProjectDevelopment-phdCycle">
              <h2>Ph.D. Project Cycle</h2>
              <p>
                Research massive MIMO, hybrid beamforming, RIS technology, and AI-based adaptive antenna systems with IEEE publication guidance.
              </p>
            </section>

            <section className="ECEProjectDevelopment-projectTitles">
              <h2>IEEE Project Titles (2023-2025)</h2>
              <ul>
                <li>Advanced Beamforming for 5G Massive MIMO Systems</li>
                <li>Compact MIMO Antenna Arrays for IoT Devices</li>
                <li>RIS-Based Reconfigurable MIMO Architectures</li>
                <li>AI-Optimized Adaptive Antenna Systems</li>
                <li>Millimeter-Wave MIMO Design for 6G Networks</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopment-about">
              <h2>About Narpavi Institute</h2>
              <p>
                Narpavi Institute offers expert mentorship and research support in MIMO antenna systems, enabling students and researchers to excel in next-generation wireless technologies and produce IEEE-compliant publications.
              </p>
            </section>

            <section className="ECEProjectDevelopment-faq">
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

export default MimoAntennaSystemsProject;
