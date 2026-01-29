import "./CEProjectDevelopmentCenter.scss";
import Subsidebar from ".././pages/Subsidebar";
import SEO from "../assets/SEO";
import Leftsidebar from "../assets/Leftsidebar";

/* ✅ KEYWORDS ARRAY OBJECT */
const keywords = [
  "Environmental Engineering IEEE Projects 2023–2025",
  "Water Treatment IEEE Projects",
  "Pollution Monitoring Projects",
  "Waste to Energy IEEE Projects",
  "IoT Environmental Engineering",
  "AI Climate Change Projects",
  "Sustainable Development Civil Projects",
  "Green Infrastructure Research",
  "Environmental Engineering PhD Projects",
  "Narpavi Research Institute Civil Projects",
];

const faqs = [
  {
    question: "What services does the Environmental Engineering Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Environmental Engineering Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on water treatment, pollution monitoring, waste-to-energy systems, and sustainable urban development.",
  },
  {
    question: "What types of Environmental Engineering projects are supported?",
    answer:
      "We support B.Tech, M.Tech, and Ph.D. projects covering water treatment, waste management, AI-driven climate resilience, and green infrastructure.",
  },
  {
    question: "Which tools and technologies are used in Environmental Engineering projects?",
    answer:
      "Our stack includes MATLAB, EPANET, ArcGIS, SWMM, IoT sensors, AI frameworks, and bioreactors.",
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are based on IEEE Transactions (2023–2025) on Environmental Engineering and Sustainability.",
  },
  {
    question: "What support is provided for academic submissions?",
    answer:
      "We provide end-to-end guidance including simulation, validation, documentation, and publication support.",
  },
];

const CEEnvironmentalEngineeringProjectDevelopmentCenter = () => {
  return (
    <div className="CEProjectDevelopmentCenter">

      {/* ✅ SEO FIXED */}
      <SEO
        title="Environmental Engineering – Project Development Center in Chennai"
        description="Environmental Engineering project development for B.Tech, M.Tech, and Ph.D. students focusing on water treatment, pollution control, waste-to-energy, AI, IoT, and sustainable urban development."
        keywords={keywords}
        url="/department/environmental-engineering"
        faqs={faqs}
      />

      <Subsidebar
        extraLinks={[
          { id: "civil", label: "civil", path: "/department?dept=civil" },
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
              Environmental Engineering – Project Development Center in Chennai
            </h1>
                <section className="CEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Environmental Engineering Project Development Center, a global platform empowering B.Tech, M.Tech, and Ph.D. scholars to develop IEEE-aligned (2023–2025) projects on pollution control, water treatment, waste management, and sustainable urban development.
              </p>
              <p>
                By integrating IoT sensors, AI analytics, blockchain, and renewable technologies, we deliver innovative solutions for academic excellence and real-world environmental challenges.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-btech">
              <h2>B.Tech Environmental Engineering Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational environmental projects aligned with IEEE topics.</p>
              <ul>
                <li>Identify issues like water pollution or plastic waste management</li>
                <li>Design simple filter models or biogas digesters</li>
                <li>Conduct lab experiments on water quality or soil analysis</li>
                <li>Test chemical and biological properties of treated samples</li>
                <li>Generate IEEE-style project reports and demonstrations</li>
              </ul>
              <p>The style emphasizes practical learning in environmental sustainability.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Environmental Engineering Project Development</h2>
              <p>For postgraduate students, projects involve smart monitoring and advanced treatment technologies.</p>
              <ul>
                <li>Address urban wastewater treatment or industrial pollution</li>
                <li>Use MATLAB, EPANET, ArcGIS, and IoT sensor systems</li>
                <li>Implement pilot-scale treatment units or sensor networks</li>
                <li>Test air, water, and soil quality with AI-based predictions</li>
                <li>Publish in IEEE conferences with focus on sustainable solutions</li>
              </ul>
              <p>The style focuses on scalable, smart environmental systems.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Environmental Engineering Project Development</h2>
              <p>For doctoral scholars, our center supports pioneering research in sustainable environmental systems.</p>
              <ul>
                <li>Explore challenges in climate adaptation or zero-emission systems</li>
                <li>Design AI, IoT, and blockchain-based environmental frameworks</li>
                <li>Implement advanced modeling and real-world pilot projects</li>
                <li>Validate using big data and long-term impact assessments</li>
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
                      <th>Environmental Technology / Tool</th>
                      <th>Application</th>
                      <th>Key Benefits</th>
                      <th>Challenges</th>
                      <th>Academic Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>IoT-based Sensors</td>
                      <td>Air & water quality monitoring</td>
                      <td>Real-time data, adaptive control</td>
                      <td>Sensor calibration and data privacy</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>EPANET & SWMM</td>
                      <td>Water distribution & wastewater management</td>
                      <td>Optimized design and operation</td>
                      <td>Complex model setup and calibration</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>GIS & Remote Sensing</td>
                      <td>Pollution mapping & urban planning</td>
                      <td>Accurate spatial analysis</td>
                      <td>Data resolution and processing needs</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Bioreactors & Anaerobic Digesters</td>
                      <td>Waste-to-energy and sewage treatment</td>
                      <td>Renewable energy, eco-friendly solution</td>
                      <td>High setup costs and maintenance</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>AI & Machine Learning Models</td>
                      <td>Pollution prediction & climate modeling</td>
                      <td>Data-driven forecasting</td>
                      <td>Computational complexity</td>
                      <td>Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Membrane & Nano-filtration Tech</td>
                      <td>Advanced water treatment</td>
                      <td>High efficiency</td>
                      <td>Membrane fouling</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Green Infrastructure Systems</td>
                      <td>Urban sustainability & flood management</td>
                      <td>Climate resilience</td>
                      <td>Integration challenges</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="CEProjectDevelopmentCenter-casestudy">
              <h2>Case Study – IoT-enabled Smart Water Monitoring</h2>
              <p>
                A M.Tech project developed at Narpavi Research Institute used IoT-based water quality sensors integrated with cloud computing and AI models to monitor pH, turbidity, dissolved oxygen, and heavy metal concentrations in real-time. The system reduced contamination detection time by 60%.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>IoT-enabled Real-time Water Quality Monitoring System</li>
                <li>AI-driven Prediction of Air Pollution and Health Impacts</li>
                <li>Waste-to-Energy Conversion Using Smart Bioreactor Systems</li>
                <li>GIS-based Flood Risk Mapping for Climate Resilient Cities</li>
                <li>Nano-filtration Techniques for Advanced Wastewater Treatment</li>
                <li>Blockchain-based Waste Management Tracking Systems</li>
                <li>Smart Biodegradable Materials for Plastic Waste Reduction</li>
                <li>AI and Big Data Analytics for Climate Change Adaptation</li>
                <li>Solar-powered Membrane Desalination Units</li>
                <li>Green Infrastructure Design for Sustainable Urban Development</li>
              </ul>
            </section>

            <section className="CEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                At Narpavi Research Institute, we provide world-class Environmental Engineering project support for B.Tech, M.Tech, and Ph.D. students across the globe. Our expertise spans water and wastewater treatment, renewable waste management, pollution monitoring, AI-based environmental modeling, and sustainable city planning. We ensure all projects are aligned with IEEE transactions (2023–2025).
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-futurescope">
              <h2>Future Research Directions in Environmental Engineering</h2>
              <ul>
                <li>AI-driven climate resilience modeling</li>
                <li>Blockchain in circular waste economy</li>
                <li>Smart bioreactors for waste-to-energy</li>
                <li>Digital twin models for urban sustainability</li>
                <li>Green hydrogen from wastewater treatment plants</li>
              </ul>
            </section>

            {/* FAQ UI (schema handled by SEO component) */}
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
                <a href="/department/environmental-engineering">
                  Environmental Engineering
                </a>
              </li>
              <li>
                <a href="/department/environmental-engineering/water-treatment-recycling">
                  Water Treatment & Recycling
                </a>
              </li>
              <li>
                <a href="/department/environmental-engineering/air-pollution-modeling">
                  Air Pollution Modeling
                </a>
              </li>
              <li>
                <a href="/department/environmental-engineering/waste-management-system">
                  Waste Management System
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

export default CEEnvironmentalEngineeringProjectDevelopmentCenter;
