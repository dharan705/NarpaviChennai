import "../ECEProjectDevelopmentCenter.scss";
import Subsidebar from "../../pages/Subsidebar";
import SEO from "../../assets/SEO";

/* ✅ KEYWORDS ARRAY OBJECT */
const keywords = [
  "Smart Antennas for 5G 6G",
  "Beamforming Antennas IEEE",
  "Adaptive Smart Antennas",
  "Massive MIMO 5G Projects",
  "AI Driven Antenna Optimization",
  "Hybrid Antenna Architectures",
  "HFSS CST Smart Antenna Design",
  "6G Reconfigurable Antennas",
  "Metasurface Smart Antennas",
  "Next Generation Wireless Antennas"
];

const faqs = [
  {
    question: "What are Smart Antennas for 5G/6G Applications?",
    answer:
      "Smart antennas use beamforming, MIMO, reconfigurability, and AI-based optimization to provide high-capacity and energy-efficient communication."
  },
  {
    question: "What is the focus of B.Tech projects?",
    answer:
      "B.Tech projects focus on antenna fundamentals, simulation, and beamforming array prototyping using HFSS, CST, and MATLAB."
  },
  {
    question: "What are the key aspects of M.Tech projects?",
    answer:
      "Adaptive beam management, AI integration, hybrid antenna designs, IoT integration, and real-time validation."
  },
  {
    question: "What research are Ph.D. students engaged in?",
    answer:
      "AI-driven smart antennas, metasurfaces, cognitive spectrum utilization, and novel antenna architectures."
  },
  {
    question: "Which tools are used?",
    answer:
      "HFSS, CST, MATLAB, and AI-based optimization frameworks."
  }
];

const SmartAntennas5G6GProject = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">

      {/* ✅ SEO FIXED */}
      <SEO
        title="Smart Antennas for 5G 6G – Project Development Center in Chennai"
        description="IEEE-aligned smart antenna project development for B.Tech, M.Tech, and Ph.D. students using HFSS, CST, and MATLAB covering beamforming, adaptive antennas, massive MIMO, AI-optimized hybrid architectures, and metasurface antennas for 5G and 6G."
        keywords={keywords}
        url="/smart-antennas-5g-6g-project-development"
        faqs={faqs}
      />

      <Subsidebar
        extraLinks={[
          { id: "ece", label: "ece", path: "/department?dept=ece" }
        ]}
      />

      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          {/* ✅ LEFT SIDEBAR */}
          <aside className="left-sidebar2">
            <h3>🔑 Keywords</h3>
            <ul>
              {keywords.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </aside>

          {/* 🔒 CENTER CONTENT (UNCHANGED) */}
          <div className="ECEProjectDevelopmentCenter-center">

            {/* ✅ H1 MATCHES SEO */}
            <h1>
              Smart Antennas for 5G 6G – Project Development Center in Chennai
            </h1>
              <section className="ECEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> nurtures innovation in smart antenna systems for 5G and 6G networks, providing research and development guidance aligned with IEEE trends (2023-2025).</p>
              <p>The center emphasizes hands-on prototyping, AI optimization, and comprehensive simulation methodologies for beamforming, massive MIMO, and adaptable antenna architectures.</p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Technology & Industry Applications</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
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
                      <td>Beamforming Antennas</td>
                      <td>Directional Transmission</td>
                      <td>5G Mobile Networks</td>
                      <td>Enhanced Coverage & Speed</td>
                    </tr>
                    <tr>
                      <td>Adaptive Smart Antennas</td>
                      <td>Real-time Reconfiguration</td>
                      <td>IoT, Vehicular Communication</td>
                      <td>Reliable Low Latency</td>
                    </tr>
                    <tr>
                      <td>Massive MIMO</td>
                      <td>Spatial Multiplexing</td>
                      <td>Urban and Rural 5G/6G Deployments</td>
                      <td>Higher Capacity</td>
                    </tr>
                    <tr>
                      <td>AI-Driven Antennas</td>
                      <td>Optimization</td>
                      <td>Industry 4.0, Cognitive Networks</td>
                      <td>Optimal Resource Utilization</td>
                    </tr>
                    <tr>
                      <td>Hybrid Architectures</td>
                      <td>Multi-standard Adaptability</td>
                      <td>Defense, Aerospace</td>
                      <td>Flexible Connectivity</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech-cycle">
              <h2>B.Tech Project Cycle</h2>
              <p>Students learn antenna fundamentals, simulation, and prototype design, focusing on beamforming and array patterns with HFSS, CST, and MATLAB.</p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech-cycle">
              <h2>M.Tech Project Cycle</h2>
              <p>Advanced multidisciplinary projects integrating AI, adaptive beamforming, hybrid antenna designs, and IoT connectivity with co-design and real-time testing focus.</p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd-cycle">
              <h2>Ph.D. Project Cycle</h2>
              <p>Research cutting-edge AI-based antenna optimization, metasurfaces, and cognitive spectrum sharing architectures with IEEE publication mentorship and collaborative opportunities.</p>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE Project Titles (2023-2025)</h2>
              <ul>
                <li>Compact Beamforming Antennas for Urban 5G Networks</li>
                <li>AI-Optimized Adaptive Antenna Arrays for Vehicle Communications</li>
                <li>Massive MIMO System Design for Enhanced Spectral Efficiency</li>
                <li>Reconfigurable Metasurface-based Antennas for 6G Applications</li>
                <li>Hybrid Antenna Architectures for Multi-band Communication Systems</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Dedicated to advancing smart antenna research for next-gen networks, Narpavi Research Institute equips students with expert guidance in simulation, prototyping, and IEEE-standard publications.</p>
            </section>

            <section className="kerala-alluniversityfaq-section">
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
          <aside className="right-sidebar">
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
          </aside>

        </div>
      </div>
    </div>
  );
};

export default SmartAntennas5G6GProject;
