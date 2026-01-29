import "./CEProjectDevelopmentCenter.scss";
import Subsidebar from ".././pages/Subsidebar";
import SEO from "../assets/SEO";
import Leftsidebar from "../assets/Leftsidebar";

/* ✅ KEYWORDS ARRAY OBJECT */
const keywords = [
  "Transportation Engineering IEEE Projects 2023–2025",
  "Traffic Optimization IEEE Projects",
  "Intelligent Transportation Systems Projects",
  "Pavement Design Projects",
  "EV Infrastructure Projects",
  "AI in Transportation Engineering",
  "Smart Mobility Civil Engineering Projects",
  "Transportation Engineering B.Tech M.Tech Ph.D.",
  "Narpavi Research Institute Civil Projects"
];

const faqs = [
  {
    question: "What services does the Transportation Engineering Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Transportation Engineering Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on traffic optimization, pavement design, intelligent transportation systems, and smart mobility solutions."
  },
  {
    question: "What types of projects are supported?",
    answer:
      "B.Tech, M.Tech, and Ph.D. projects covering traffic engineering, pavement design, ITS, EV infrastructure, and AI-driven transportation systems."
  },
  {
    question: "Which tools are used?",
    answer:
      "VISSIM, AIMSUN, TransCAD, MX Roads, AutoCAD, IoT sensors, UAVs, and AI frameworks."
  },
  {
    question: "Are projects IEEE aligned?",
    answer:
      "Yes, projects are based on IEEE Transactions (2023–2025) on Intelligent Transportation Systems and Civil Engineering."
  },
  {
    question: "What academic support is provided?",
    answer:
      "Complete support from topic selection to simulation, validation, documentation, and publication."
  }
];

const CETransportationEngineeringProjectDevelopmentCenter = () => {
  return (
    <div className="CEProjectDevelopmentCenter">

      {/* ✅ SEO FIXED */}
      <SEO
        title="Transportation Engineering – Project Development Center in Chennai"
        description="Transportation Engineering project development for B.Tech, M.Tech, and Ph.D. students focusing on traffic optimization, intelligent transportation systems, pavement design, EV infrastructure, AI-driven traffic prediction, and smart mobility solutions."
        keywords={keywords}
        url="/department/transportation-engineering"
        faqs={faqs}
      />

      <Subsidebar
        extraLinks={[
          { id: "civil", label: "civil", path: "/department?dept=civil" }
        ]}
      />

      <div className="CEProjectDevelopmentCenter-main">
        <div className="CEProjectDevelopmentCenter-grid">

          {/* ✅ LEFT SIDEBAR */}
          <aside className="left-sidebar2">
            <Leftsidebar/>
           
          </aside>

          {/* CENTER CONTENT */}
          <div className="CEProjectDevelopmentCenter-center">

            {/* ✅ H1 MATCHES SEO */}
            <h1>
              Transportation Engineering – Project Development Center in Chennai
            </h1>
                    <section className="CEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Transportation Engineering Project Development Center, a global platform empowering B.Tech, M.Tech, and Ph.D. scholars to develop IEEE-aligned (2023–2025) projects on traffic systems, pavement design, and smart mobility. Our projects focus on creating efficient, safe, and sustainable transportation infrastructure for highways, railways, and urban transit.
              </p>
              <p>
                By integrating traffic simulation, IoT sensors, AI analytics, and sustainable materials, we deliver innovative solutions for academic excellence and real-world transportation challenges.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-btech">
              <h2>B.Tech Transportation Engineering Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational transportation projects aligned with IEEE topics.</p>
              <ul>
                <li>Identify issues like traffic congestion or pavement distress</li>
                <li>Use AutoCAD, STAAD Roads, or MS Excel for geometric designs</li>
                <li>Conduct lab work on bitumen tests and pavement mix design</li>
                <li>Test road material properties and traffic flow analysis</li>
                <li>Generate IEEE-style project reports and demonstrations</li>
              </ul>
              <p>The style emphasizes practical learning in traffic engineering and pavement behavior.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Transportation Engineering Project Development</h2>
              <p>For postgraduate students, projects involve intelligent transportation and advanced pavement technologies.</p>
              <ul>
                <li>Address urban issues like signal synchronization or EV infrastructure</li>
                <li>Use VISSIM, TransCAD, MX Roads, or AIMSUN for simulations</li>
                <li>Model urban traffic flow and sustainable pavements</li>
                <li>Test road performance and traffic flow calibration</li>
                <li>Publish in IEEE conferences with focus on smart mobility</li>
              </ul>
              <p>The style focuses on sustainable and smart city-ready solutions.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Transportation Engineering Project Development</h2>
              <p>For doctoral scholars, our center supports pioneering research in smart and sustainable transportation.</p>
              <ul>
                <li>Explore challenges in autonomous vehicles or traffic prediction</li>
                <li>Design IoT-based monitoring and AI-driven traffic models</li>
                <li>Implement large-scale urban transport and digital twin models</li>
                <li>Validate using real-time data from sensors, UAVs, and GPS</li>
                <li>Contribute to IEEE, Scopus, and SCI journal publications</li>
              </ul>
              <p>The style emphasizes innovation, scalability, and publication-ready outcomes.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Technologies vs. Applications</h2>
              <div className="CEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Transportation Technology / Tool</th>
                      <th>Application</th>
                      <th>Key Benefits</th>
                      <th>Challenges</th>
                      <th>Academic Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>VISSIM / AIMSUN Simulation</td>
                      <td>Urban traffic & signal optimization</td>
                      <td>Accurate modeling of real-time traffic flow</td>
                      <td>Complex simulation setup and calibration</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>TransCAD / MX Roads</td>
                      <td>Road design & transportation planning</td>
                      <td>Efficient and scalable urban planning</td>
                      <td>High software learning curve</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>Intelligent Transport Systems (ITS)</td>
                      <td>Smart traffic lights, tolling, connected cars</td>
                      <td>Enhanced safety and reduced congestion</td>
                      <td>Integration and interoperability issues</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>IoT & GPS-enabled Sensors</td>
                      <td>Smart mobility, vehicle tracking</td>
                      <td>Real-time monitoring and adaptive routing</td>
                      <td>Sensor reliability and data privacy</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Sustainable Pavement Materials</td>
                      <td>Road construction & recycling</td>
                      <td>Longer life, eco-friendly, cost-effective</td>
                      <td>Material standardization and cost</td>
                      <td>B.Tech/M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>AI & Machine Learning Models</td>
                      <td>Traffic prediction & autonomous driving</td>
                      <td>Data-driven, adaptive, and intelligent systems</td>
                      <td>Data quality and computational complexity</td>
                      <td>Ph.D.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="CEProjectDevelopmentCenter-casestudy">
              <h2>Case Study – AI-based Traffic Flow Optimization</h2>
              <p>
                An M.Tech project developed at Narpavi Research Institute used VISSIM and AI-based reinforcement learning algorithms to optimize signalized intersections in a congested city. The results showed a 30% reduction in average waiting time and a 20% increase in throughput, proving the efficiency of IEEE-aligned smart mobility solutions.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-based Traffic Signal Synchronization for Smart Cities</li>
                <li>IoT-enabled Intelligent Transportation Systems for Accident Reduction</li>
                <li>EV Charging Infrastructure Planning using GIS and Optimization Models</li>
                <li>Sustainable Pavement Design using Waste Materials and Nanotechnology</li>
                <li>UAV and Drone-assisted Traffic Monitoring in Urban Areas</li>
                <li>Big Data Analytics for Real-time Highway Traffic Prediction</li>
                <li>Development of Digital Twin Models for Smart Transport Networks</li>
                <li>Pavement Performance Modeling using Mechanistic-Empirical Design</li>
                <li>Green Airport Planning and Optimization for Carbon Neutrality</li>
                <li>Smart Parking Systems using IoT and Cloud-based Platforms</li>
              </ul>
            </section>

            <section className="CEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                At Narpavi Research Institute, we specialize in Transportation Engineering project development for B.Tech, M.Tech, and Ph.D. students worldwide. Our expertise covers traffic simulation, sustainable pavement design, AI-driven transport planning, IoT-enabled monitoring, and advanced research publications. We ensure that all projects are IEEE-aligned (2023–2025) with academic depth and practical implementation.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-futurescope">
              <h2>Future Research Directions in Transportation Engineering</h2>
              <ul>
                <li>AI-driven autonomous vehicle networks</li>
                <li>Blockchain for secure transport transactions</li>
                <li>Digital twin applications for smart roads</li>
                <li>EV infrastructure integration in highways</li>
                <li>Green and sustainable aviation planning</li>
              </ul>
            </section>

            {/* FAQ UI (Schema via SEO component) */}
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

          {/* ✅ RIGHT SIDEBAR */}
          <aside className="right-sidebar1">
            <h3>🔗 Related Services</h3>
            <ul>
              <li>
                <a href="/department/transportation-engineering">
                  Transportation Engineering
                </a>
              </li>
              <li>
                <a href="/department/transportation-engineering/smart-traffic-management">
                  Smart Traffic Management
                </a>
              </li>
              <li>
                <a href="/department/transportation-engineering/pavement-analysis-design">
                  Pavement Analysis & Design
                </a>
              </li>
              <li>
                <a href="/department/transportation-engineering/highway-safety-optimization">
                  Highway Safety Optimization
                </a>
              </li>
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

export default CETransportationEngineeringProjectDevelopmentCenter;
