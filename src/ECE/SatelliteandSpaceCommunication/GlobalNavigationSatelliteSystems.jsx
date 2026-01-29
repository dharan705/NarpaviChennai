import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* ================= FAQs ================= */
const faqs = [
  {
    question: "What are Global Navigation Satellite Systems (GNSS)?",
    answer:
      "GNSS are satellite-based systems providing global positioning, navigation, and timing services."
  },
  {
    question: "What do B.Tech projects in GNSS focus on?",
    answer:
      "GNSS receiver design, drone navigation, logistics tracking, and weather data collection."
  },
  {
    question: "What advanced studies are covered in M.Tech GNSS projects?",
    answer:
      "Multi-constellation integration, anti-spoofing algorithms, and GNSS–IoT integration."
  },
  {
    question: "What areas do Ph.D. GNSS research projects emphasize?",
    answer:
      "AI-enabled error correction, GNSS with 5G/6G, high-precision timing, and resilient GNSS."
  },
  {
    question: "Which tools are commonly used in GNSS projects?",
    answer:
      "MATLAB, Python, NS3, GNSS-SDR, MQTT, LoRaWAN, TensorFlow, and GPS modules."
  }
];

/* ================= KEYWORDS ARRAY ================= */
const keywords = [
  "GNSS",
  "GPS",
  "GLONASS",
  "Galileo",
  "BeiDou",
  "NavIC",
  "GNSS Security",
  "GNSS IoT",
  "GNSS 5G/6G",
  "Navigation Systems",
  "AI-based GNSS",
  "IEEE GNSS Research",
  "Narpavi Research Institute GNSS"
];

const GnssProjectCenter = () => {
  return (
    <div className="ECEProjectCenter">

      {/* ================= SEO ================= */}
      <SEO
        title="GNSS (Global Navigation Satellite Systems) – Project Development Center in Chennai"
        description="IEEE-aligned (2023–2025) GNSS projects on GPS, NavIC, multi-constellation fusion, anti-spoofing, GNSS–IoT integration, and AI-enhanced positioning."
        keywords={keywords}
        url="/department/satellite-communication/gnss-project-development-center-in-chennai"
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
              GNSS (Global Navigation Satellite Systems) – Project Development Center in Chennai
            </h1>
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

export default GnssProjectCenter;
