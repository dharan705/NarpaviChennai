import "../MEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Smart Grid Integration for Renewable Energy Project Development Center in Chennai",
  "Smart Grid Renewable IEEE Projects 2023–2025",
  "IoT Based Smart Grid Projects",
  "AI Renewable Energy Scheduling",
  "Blockchain Smart Grid Projects",
  "Microgrid Renewable Integration",
  "Energy Storage Smart Grid Optimization",
  "Cybersecurity Smart Grids",
  "Digital Twin Smart Grid",
  "Narpavi Research Institute Smart Grid Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Smart Grid Integration for Renewable Energy Project Development Center offer?",
    answer:
      "We provide IEEE-aligned (2023–2025) support for B.Tech, M.Tech, and Ph.D. students in renewable-smart grid integration, IoT metering, AI-driven scheduling, blockchain-enabled peer-to-peer energy trading, energy storage integration, hardware prototyping, co-simulations, and IEEE/Scopus/SCI publication support."
  },
  {
    question:
      "What types of renewable smart grid projects are supported?",
    answer:
      "B.Tech projects include MATLAB/Simulink grid-connected renewable simulations and IoT metering. M.Tech projects focus on AI forecasting, hybrid scheduling, and dashboards. Ph.D research covers blockchain trading, cybersecure microgrids, multi-agent reinforcement learning, and digital twin validation."
  },
  {
    question: "Which tools and technologies are used?",
    answer:
      "MATLAB/Simulink, PSCAD, Python (TensorFlow, Scikit-learn), IoT dashboards, blockchain frameworks, Arduino/Raspberry Pi, and digital twin platforms."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects align with IEEE Transactions (2023–2025) on Smart Grid, Renewable Integration, Cybersecurity, AI scheduling, and microgrids."
  },
  {
    question: "What academic support is provided?",
    answer:
      "Complete mentoring including topic selection, simulations, IoT/blockchain deployment, testing, IEEE documentation, and global publication support."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Smart Grid Integration for Renewable Energy – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Smart Grid Integration for Renewable Energy Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering IoT smart metering, AI scheduling, blockchain energy trading, microgrids, and cybersecure renewable systems.";

const pageUrl =
  "/department/renewable-thermal-energy/smart-grid-integration";

const EEESmartGridRenewableIntegrationProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">

      {/* 🔍 SEO */}
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        url={pageUrl}
        faqs={faqs}
      />

      <Sidebar />

      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* ⬅ LEFT SIDEBAR */}
          <aside className="left-sidebar2">
            <Leftsidebar />
          </aside>

          {/* 📑 CENTER CONTENT */}
          <div className="EEEProjectDevelopmentCenter-center">
            {/* ✅ ONLY ONE H1 */}
            <h1>{pageTitle}</h1>
   {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> enables scholars to explore IEEE-aligned (2023–2025) research for Smart Grid Integration with renewable energy. Students focus on solar, wind, and biomass integration, IoT-based smart metering, AI scheduling, blockchain energy trading, and microgrid simulation + hardware prototyping.</p>
              <p>Our projects prepare students for real-world smart city-ready energy systems with academic depth and industrial relevance.</p>
            </section>

            {/* Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Smart Grid Integration Technologies</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead><tr><th>Technology</th><th>Application</th><th>Advantages</th></tr></thead>
                  <tbody>
                    <tr><td>IoT-Enabled Smart Meters</td><td>Utilities, Homes</td><td>Real-time data, two-way comms</td></tr>
                    <tr><td>AI-Based Load Forecasting</td><td>Smart Grids</td><td>Predictive balancing</td></tr>
                    <tr><td>Blockchain Energy Trade</td><td>Peer-to-Peer Markets</td><td>Transparency, decentralization</td></tr>
                    <tr><td>Energy Storage Integration</td><td>Grid/Off-grid</td><td>Reduced outages, stable supply</td></tr>
                    <tr><td>Digital Twin Models</td><td>Grid Planning</td><td>Simulation-driven predictive control</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* B.Tech Cycle */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Smart Grid Projects</h2>
              <ul>
                <li>Intro to renewables, grid basics, smart metering</li>
                <li>MATLAB/PSCAD/Python renewable-grid simulations</li>
                <li>Arduino/RPi IoT metering + inverter prototypes</li>
                <li>Efficiency validation vs traditional grids</li>
              </ul>
              <p>Focus: practical foundation in renewable integration and IoT monitoring.</p>
            </section>

            {/* M.Tech Cycle */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Smart Grid Projects</h2>
              <ul>
                <li>Challenges: instability, intermittency, peak management</li>
                <li>ML forecasting, renewable scheduling algorithms</li>
                <li>Hybrid solar-wind-battery management</li>
                <li>Co-simulation: MATLAB + Python + IoT dashboards</li>
                <li>IEEE/IEC validation</li>
              </ul>
              <p>Focus: advanced AI-enabled microgrid solutions for predictive energy management.</p>
            </section>

            {/* Ph.D Research */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D Smart Grid Projects</h2>
              <ul>
                <li>Blockchain-based smart contracts + decentralized energy trading</li>
                <li>Cybersecure IoT smart grid architectures</li>
                <li>Digital twin modeling of renewable-embedded grids</li>
                <li>Multi-agent RL for autonomous grid control</li>
                <li>Standards validation + industry collaboration</li>
              </ul>
              <p>Focus: next-gen resilient and cybersecure renewable-integration frameworks for global grids.</p>
            </section>

            {/* Case Study */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Case Study – Smart Microgrids</h2>
              <p>IEEE research (2023–2025) shows AI-driven smart microgrids integrating solar PV, wind, and storage improve stability by 25%, while blockchain-enabled peer trading reduces costs and demand-response programs cut peaks by ~30%.</p>
            </section>

            {/* IEEE Titles */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>IoT-Enabled Smart Grid with Renewable Scheduling</li>
                <li>AI-Based Load Forecasting for Smart Grid Stability</li>
                <li>Blockchain-Integrated Peer-to-Peer Energy Trading</li>
                <li>Digital Twin Modeling for Smart Grid Optimization</li>
                <li>Cybersecure Smart Grid with Renewable Integration</li>
                <li>Hybrid Microgrid with Solar-Wind-Battery Storage</li>
                <li>Reinforcement Learning for Demand-Side Management</li>
                <li>EV Charging Optimization in Smart Grids</li>
                <li>IoT-Based Smart Metering for Real-Time Monitoring</li>
                <li>Multi-Agent Systems for Decentralized Grid Control</li>
              </ul>
            </section>

            {/* Future Scope */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Future Scope – Smart Grid Integration</h2>
              <ul>
                <li>Smart Cities – future-ready renewable backbone</li>
                <li>AI/Blockchain – predictive secure optimization</li>
                <li>Microgrids & Nano-grids – rural/off-grid electrification</li>
                <li>EV Integration – V2G smart charging</li>
                <li>Cybersecurity – defending IoT-enabled grid</li>
              </ul>
            </section>

            {/* About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p><strong>Narpavi Research Institute</strong> guides students globally in Smart Grid Integration for Renewable Energy, across beginner prototypes to Ph.D. cybersecure IoT-blockchain projects. All are IEEE-aligned (2023–2025), ensuring impactful research, deployable prototypes, and high-value publications.</p>
            </section>

            {/* FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((f,idx)=>( 
                  <details key={idx}>
                    <summary>{f.question}</summary>
                    <p>{f.answer}</p>
                  </details>))}
              </div>

            </section>
          </div>

          {/* ➡ RIGHT SIDEBAR */}
          <aside className="right-sidebar1">

            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/department/renewable-thermal-energy">Renewable & Thermal Energy</a></li>
              <li><a href="/department/renewable-thermal-energy/solar-pv-thermal">Solar PV & Thermal Systems</a></li>
              <li><a href="/department/renewable-thermal-energy/wind-turbine-design">Wind Turbine Design</a></li>
              <li><a href="/department/renewable-thermal-energy/biomass-biofuel-energy">Biomass & Biofuel Energy</a></li>
              <li><a href="/department/renewable-thermal-energy/energy-storage-recovery">Energy Storage & Recovery</a></li>
              <li><a href="/department/renewable-thermal-energy/smart-grid-integration">Smart Grid Integration</a></li>
            </ul>

            {/* 🔑 KEYWORDS */}
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

export default EEESmartGridRenewableIntegrationProjectDevelopmentCenter;
