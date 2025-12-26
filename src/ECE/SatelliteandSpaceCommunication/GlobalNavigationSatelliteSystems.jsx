import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import SEO from "../../assets/SEO"
const faqs = [
  {
    question: "What are Global Navigation Satellite Systems (GNSS)?",
    answer: "GNSS are satellite-based systems providing global positioning, navigation, and timing services with constellations like GPS, GLONASS, Galileo, BeiDou, and NavIC."
  },
  {
    question: "What do B.Tech projects in GNSS focus on?",
    answer: "Fundamental projects include GNSS receiver design, navigation systems for drones, tracking for logistics, and weather data collection using Arduino, MATLAB, and GPS modules."
  },
  {
    question: "What advanced studies are covered in M.Tech GNSS projects?",
    answer: "Advanced topics include multi-constellation integration, anti-spoofing algorithms, smart transportation systems, and GNSS-IoT integration using MATLAB, Python, NS3, and GNSS-SDR."
  },
  {
    question: "What areas do Ph.D. GNSS research projects emphasize?",
    answer: "Research focuses on AI-enabled error correction, GNSS integration with 5G/6G for low latency, high-precision timing, and resilient GNSS communication."
  },
  {
    question: "Which tools and platforms are commonly used in GNSS projects?",
    answer: "Tools include MATLAB, Python, NS3, GNSS-SDR, MQTT, LoRaWAN, TensorFlow, and GPS modules."
  }
];

const GnssProjectCenter = () => {
  return (
    <div className="ECEProjectCenter">
       <SEO
        title="GNSS IEEE Projects | GPS, NavIC, Multi-Constellation, IoT & 5G/6G | B.Tech M.Tech Ph.D."
        description="IEEE-aligned (2023–2025) GNSS projects on GPS/GLONASS/Galileo/BeiDou/NavIC receivers, multi-constellation fusion, anti-spoofing, GNSS–IoT integration, and AI-enhanced positioning with MATLAB, Python, NS3, GNSS-SDR, MQTT, LoRaWAN, and TensorFlow."
        keywords="GNSS, GPS, GLONASS, Galileo, BeiDou, NavIC, GNSS Security, GNSS IoT, GNSS 5G/6G, Navigation Systems, AI-based GNSS, IEEE GNSS Research, Narpavi Research Institute GNSS"
        url="/department/satellite-communication/gnss-project"
        faqs={faqs}
      />
      <Sidebar />
      <div className="ECEProjectCenter-main">
        <div className="ECEProjectCenter-grid">
          <div className="ECEProjectCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>GNSS</li>
              <li>GPS</li>
              <li>GLONASS</li>
              <li>Galileo</li>
              <li>BeiDou</li>
              <li>NavIC</li>
              <li>GNSS Security</li>
              <li>GNSS IoT</li>
              <li>GNSS 5G/6G</li>
              <li>Navigation Systems</li>
              <li>AI-based GNSS</li>
              <li>IEEE GNSS Research</li>
              <li>Narpavi Research Institute GNSS</li>
            </ul>
          </div>
          <div className="ECEProjectCenter-center">
            <h1>GNSS (Global Navigation Satellite Systems) – Project Development Center</h1>
            <section className="ECEProjectCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> specializes in GNSS-related project guidance and research, covering GPS, GLONASS, Galileo, BeiDou, and NavIC technologies, with a focus on integration with IoT and 5G/6G networks.
              </p>
              <p>
                The center supports B.Tech, M.Tech, and Ph.D. students in developing advancements in GNSS receivers, anti-spoofing, multi-constellation fusion, and AI-enhanced signal processing.
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
                      <th>Industry Applications</th>
                      <th>Tools/Platforms</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>GPS/GLONASS</td>
                      <td>Positioning & Timing</td>
                      <td>Automotive, logistics</td>
                      <td>GPS modules, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Galileo/BeiDou</td>
                      <td>Multi-constellation integration</td>
                      <td>Aviation, space</td>
                      <td>GNSS-SDR, NS3</td>
                    </tr>
                    <tr>
                      <td>NavIC (India)</td>
                      <td>Regional navigation</td>
                      <td>Agriculture, marine</td>
                      <td>Python, MATLAB</td>
                    </tr>
                    <tr>
                      <td>GNSS Security</td>
                      <td>Anti-spoofing & encryption</td>
                      <td>Military, critical infra</td>
                      <td>MATLAB, SDR</td>
                    </tr>
                    <tr>
                      <td>GNSS + IoT</td>
                      <td>IoT-enabled positioning</td>
                      <td>Smart cities, asset tracking</td>
                      <td>MQTT, LoRaWAN</td>
                    </tr>
                    <tr>
                      <td>GNSS + 5G/6G</td>
                      <td>High-precision timing</td>
                      <td>Telecom, autonomous driving</td>
                      <td>MATLAB, TensorFlow</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectCenter-btech">
              <h2>B.Tech Project Cycle</h2>
              <p>
                Basic GNSS receiver design, drone navigation, tracking, and weather data collection projects using Arduino, MATLAB, and GPS modules.
              </p>
            </section>

            <section className="ECEProjectCenter-mtech">
              <h2>M.Tech Project Cycle</h2>
              <p>
                Multi-constellation integration, anti-spoofing algorithms, smart transportation projects with MATLAB, Python, NS3, and GNSS-SDR.
              </p>
            </section>

            <section className="ECEProjectCenter-phd">
              <h2>Ph.D. Research Cycle</h2>
              <p>
                AI-enabled correction, integration with 5G/6G, high-precision timing, and resilient GNSS signal processing research with publications in top IEEE journals.
              </p>
            </section>

            <section className="ECEProjectCenter-projectTitles">
              <h2>IEEE-style Project Titles (2023-2025)</h2>
              <ul>
                <li>GNSS-Integrated IoT System for Smart Cities</li>
                <li>Multi-Constellation GNSS for Precision Agriculture</li>
                <li>Anti-Spoofing Algorithms for Secure GNSS Applications</li>
                <li>GNSS Integration with 5G Networks for Autonomous Vehicles</li>
                <li>AI-Based GNSS Signal Processing for High Accuracy Navigation</li>
                <li>NavIC Applications for Maritime and Rural Connectivity</li>
              </ul>
            </section>

            <section className="ECEProjectCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute provides expert guidance in GNSS technologies, offering mentorship and research support aligned with current industry and IEEE standards to help students excel in GNSS-related projects and publications.
              </p>
            </section>

            <section className="ECEProjectCenter-faq">
              <h2>FAQs</h2>
              {faqs.map((faq, idx) => (
                <details key={idx}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </section>
          </div>

          <div className="ECEProjectCenter-right">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default GnssProjectCenter;
