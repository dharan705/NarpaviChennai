import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Energy-Efficient Routing in WSN Project Development Center in Chennai",
  "Energy Efficient WSN Projects",
  "LEACH PEGASIS TEEN Routing Protocols",
  "AI-Based WSN Routing IEEE Projects",
  "Wireless Sensor Network Energy Optimization",
  "NS2 NS3 MATLAB WSN Projects",
  "Hybrid Routing Protocols in WSN",
  "Blockchain Secured WSN Routing",
  "Underwater Wireless Sensor Network Routing",
  "Narpavi Research Institute WSN Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What is the focus of the Energy-Efficient Routing in WSN Project Development Center?",
    answer:
      "The center focuses on IEEE-aligned (2023–2025) energy-aware and sustainable routing protocols for Wireless Sensor Networks."
  },
  {
    question:
      "What projects are supported at different academic levels?",
    answer:
      "B.Tech covers LEACH, PEGASIS, TEEN simulations; M.Tech focuses on hybrid and adaptive routing; Ph.D. includes AI-optimized, blockchain-secured, and underwater WSN routing."
  },
  {
    question:
      "Which tools are used for Energy-Efficient Routing projects?",
    answer:
      "NS2, NS3, MATLAB, OMNeT++, Python, TensorFlow/Keras, and blockchain frameworks."
  },
  {
    question:
      "How are projects aligned with IEEE standards?",
    answer:
      "Projects follow IEEE Transactions and Conferences (2023–2025) on energy-aware IoT and scalable WSN design."
  },
  {
    question:
      "What academic support is provided?",
    answer:
      "Complete support including topic selection, algorithm design, simulation, prototyping, documentation, and IEEE/Scopus/SCI publication."
  }
];

/* =========================
   📌 TITLE (SAME EVERYWHERE)
========================= */
const pageTitle =
  "Energy-Efficient Routing in WSN – Project Development Center in Chennai";

const pageUrl =
  "/department/wireless-sensor-networks/energy-eff-routing-wsn-project-development-center-in-chennai";

const pageDescription =
  "Energy-Efficient Routing in Wireless Sensor Networks Project Development Center in Chennai offering IEEE-aligned LEACH, PEGASIS, TEEN, AI-based and blockchain-secured WSN routing projects for B.Tech, M.Tech, and Ph.D. students (2023–2025).";

const ECEEnergyEfficientRoutingWSNProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      {/* =========================
          🔍 SEO TAG
      ========================= */}
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        url={pageUrl}
        faqs={faqs}
      />

      <Sidebar
        extraLinks={[
          { id: "ece", label: "ece", path: "/department?dept=ece" }
        ]}
      />

      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          {/* =========================
              ⬅ LEFT SIDEBAR
          ========================= */}
          <aside className="left-sidebar2">
           <Leftsidebar/>
          </aside>

          {/* =========================
              🧠 MAIN CONTENT
          ========================= */}
          <div className="ECEProjectDevelopmentCenter-center">
            {/* ✅ ONLY H1 CHANGED */}
            <h1>{pageTitle}</h1>
            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> introduces the <em>Excellence in Energy-Efficient Routing in WSN Project Development</em>, dedicated to sustainable communication protocols in Wireless Sensor Networks (WSN). Our projects align with IEEE standards (2023–2025) and support B.Tech, M.Tech, and Ph.D. scholars in developing energy-aware and scalable WSNs.
              </p>
              <p>
                WSNs consist of low-power sensor nodes used for environmental monitoring, healthcare, agriculture, disaster management, and smart cities. Energy-efficient routing protocols are vital to extend sensor lifetime and enhance network reliability and scalability.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Project Development Cycle</h2>
              <p>
                Projects focus on simulation of basic routing protocols using NS2/NS3, MATLAB, and Python frameworks.
              </p>
              <ul>
                <li>LEACH-based routing for environmental monitoring</li>
                <li>PEGASIS-based energy-efficient smart home IoT integration</li>
                <li>TEEN-based event detection for disaster monitoring</li>
                <li>Simulation studies in NS2/NS3 and MATLAB</li>
                <li>IEEE-format documentation for academic submissions</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Project Development Cycle</h2>
              <p>
                Research-driven WSN routing projects with hybrid, adaptive, and AI-based approaches.
              </p>
              <ul>
                <li>Hybrid LEACH-PEGASIS protocol design</li>
                <li>Cross-layer optimization methods</li>
                <li>Adaptive clustering for scalable WSNs</li>
                <li>Tools: OMNeT++, MATLAB, Python, TensorFlow/Keras</li>
                <li>Publication support for Scopus/SCI indexed journals</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Project Development Cycle</h2>
              <p>
                Advanced projects focusing on AI-enhanced and blockchain-secured energy-efficient routing.
              </p>
              <ul>
                <li>AI-optimized routing protocols for large-scale WSNs</li>
                <li>Blockchain-secured routing for IoT-enabled WSNs</li>
                <li>Energy-efficient protocols for underwater WSNs</li>
                <li>Multi-objective optimization frameworks</li>
                <li>Simulation, hardware prototyping, and IEEE/SCI publication support</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Routing Strategies in WSN</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Routing Approach</th>
                      <th>Energy Efficiency</th>
                      <th>Application Areas</th>
                      <th>Key Benefit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>LEACH (Cluster-Based Routing)</td>
                      <td>High</td>
                      <td>Environmental Monitoring, IoT</td>
                      <td>Reduces communication overhead</td>
                    </tr>
                    <tr>
                      <td>PEGASIS (Chain-Based Routing)</td>
                      <td>High</td>
                      <td>Smart Agriculture, Healthcare WSN</td>
                      <td>Prolongs network lifetime</td>
                    </tr>
                    <tr>
                      <td>TEEN (Threshold-Based Routing)</td>
                      <td>Medium</td>
                      <td>Disaster Monitoring, Event Detection</td>
                      <td>Quick data response in emergencies</td>
                    </tr>
                    <tr>
                      <td>Geographic Routing (GPSR)</td>
                      <td>Medium-High</td>
                      <td>Location-Aware IoT, Tracking Systems</td>
                      <td>Efficient packet delivery</td>
                    </tr>
                    <tr>
                      <td>AI-Optimized Routing Protocols</td>
                      <td>Very High</td>
                      <td>Industry 4.0, Smart Cities</td>
                      <td>Adaptive, scalable, energy-efficient</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>Energy-Aware Clustering Protocols for Wireless Sensor Networks (2023)</li>
                <li>Hybrid LEACH-PEGASIS Model for IoT-Enabled WSNs (2023)</li>
                <li>AI-Based Energy Optimization Framework in WSNs (2024)</li>
                <li>Cross-Layer Energy Efficient Routing for Smart City Applications (2024)</li>
                <li>Blockchain-Integrated Energy-Efficient WSNs (2024)</li>
                <li>Energy-Aware Underwater Wireless Sensor Network Protocols (2025)</li>
                <li>Federated Learning Models for Energy Optimization in WSNs (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                At Narpavi Research Institute, we specialize in energy-efficient routing in WSN project development, providing advanced solutions for scholars and industry professionals. Our expertise covers simulation, AI-enhanced routing, and secure IoT integration to deliver IEEE-standard project outcomes.
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

          {/* =========================
              ➡ RIGHT SIDEBAR
          ========================= */}
          <aside className="right-sidebar">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/department/wireless-sensor-networks">Wireless Sensor Networks</a></li>
              <li><a href="/department/wireless-sensor-networks/energy-eff-routing-wsn">Energy Efficient Routing in WSN</a></li>
              <li><a href="/department/wireless-sensor-networks/secure-data-transmission-wsn">Secure Data Transmission in WSN</a></li>
              <li><a href="/department/wireless-sensor-networks/iot-wsn">IoT Based Wireless Sensor Networks</a></li>
              <li><a href="/department/wireless-sensor-networks/environmental-disaster-monitoring">Environmental Disaster Monitoring using WSN</a></li>
              <li><a href="/department/wireless-sensor-networks/underwater-wireless-sensor-networks">Underwater Wireless Sensor Networks</a></li>
              <li><a href="/department/wireless-sensor-networks/ai-based-wsn-optimization">AI-Based WSN Optimization</a></li>
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

export default ECEEnergyEfficientRoutingWSNProjectDevelopmentCenter;
