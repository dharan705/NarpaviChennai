import "./CEProjectDevelopmentCenter.scss";
import Subsidebar from ".././pages/Subsidebar";
import SEO from "../assets/SEO";
import Leftsidebar from "../assets/Leftsidebar";

/* ✅ KEYWORDS ARRAY OBJECT */
const keywords = [
  "Remote Sensing & GIS IEEE Projects 2023–2025",
  "GIS Civil Engineering Projects",
  "UAV Based GIS Projects",
  "LiDAR Civil Engineering Projects",
  "AI in Remote Sensing",
  "IoT GIS Civil Engineering Projects",
  "Cloud GIS Projects",
  "Satellite Image Processing Projects",
  "Smart City GIS Projects",
  "Narpavi Research Institute Civil Projects",
];

const faqs = [
  {
    question: "What services does the Remote Sensing & GIS Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Remote Sensing & GIS Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on spatial analysis, urban planning, disaster management, and smart infrastructure monitoring.",
  },
  {
    question: "What types of Remote Sensing & GIS projects are supported?",
    answer:
      "We support B.Tech, M.Tech, and Ph.D. projects including mapping, flood modeling, AI-based spatial analytics, and IoT-integrated GIS systems.",
  },
  {
    question: "Which tools and technologies are used in Remote Sensing & GIS projects?",
    answer:
      "Tools include QGIS, ArcGIS, Google Earth Engine, ERDAS Imagine, UAVs, LiDAR, Python, and AI frameworks.",
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects align with IEEE Transactions (2023–2025) on Remote Sensing and GIS.",
  },
  {
    question: "What support is provided for academic submissions?",
    answer:
      "We provide complete support from topic selection to validation, documentation, and publication.",
  },
];

const CERemoteSensingGISProjectDevelopmentCenter = () => {
  return (
    <div className="CEProjectDevelopmentCenter">

      {/* ✅ SEO FIXED */}
      <SEO
        title="Remote Sensing & GIS – Project Development Center in Chennai"
        description="Remote Sensing & GIS project development for B.Tech, M.Tech, and Ph.D. students focusing on spatial analysis, urban planning, disaster management, AI, IoT, UAVs, LiDAR, and smart infrastructure monitoring."
        keywords={keywords}
        url="/department/remote-sensing-gis"
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
              Remote Sensing & GIS – Project Development Center in Chennai
            </h1>
                 <section className="CEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Remote Sensing & GIS Project Development Center, a global platform empowering B.Tech, M.Tech, and Ph.D. scholars to develop IEEE-aligned (2023–2025) projects on spatial analysis, urban planning, disaster management, and smart infrastructure monitoring.
              </p>
              <p>
                By integrating satellite imagery, UAV-based surveying, AI, IoT, and cloud GIS, we deliver innovative solutions for academic excellence and real-world civil engineering challenges.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-btech">
              <h2>B.Tech Remote Sensing & GIS Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational RS and GIS projects aligned with IEEE topics.</p>
              <ul>
                <li>Identify issues like urban mapping or land use monitoring</li>
                <li>Use QGIS, ArcGIS, or Google Earth Engine for design</li>
                <li>Develop maps, geodatabases, and simple analysis models</li>
                <li>Test accuracy against ground truth data</li>
                <li>Generate IEEE-style project reports and visualizations</li>
              </ul>
              <p>The style emphasizes practical learning in spatial data applications.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Remote Sensing & GIS Project Development</h2>
              <p>For postgraduate students, projects involve advanced spatial analysis and AI integration.</p>
              <ul>
                <li>Address flood modeling or smart city planning challenges</li>
                <li>Use ArcGIS Pro, ERDAS Imagine, LiDAR, and Python scripting</li>
                <li>Implement AI-based image classification and GIS traffic optimization</li>
                <li>Test using multi-temporal satellite data and accuracy indices</li>
                <li>Publish in IEEE conferences with focus on geospatial solutions</li>
              </ul>
              <p>The style focuses on high-precision, scalable GIS systems.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Remote Sensing & GIS Project Development</h2>
              <p>For doctoral scholars, our center supports pioneering research in geospatial technologies.</p>
              <ul>
                <li>Explore climate change modeling or disaster resilience</li>
                <li>Design AI, IoT, cloud GIS, and blockchain-based frameworks</li>
                <li>Implement predictive analytics and multi-sensor data fusion</li>
                <li>Validate using benchmark datasets and scenario simulations</li>
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
                      <th>Technology / Tool</th>
                      <th>Application in Civil Engineering</th>
                      <th>Key Benefits</th>
                      <th>Challenges</th>
                      <th>Academic Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>QGIS / ArcGIS</td>
                      <td>Spatial data analysis & mapping</td>
                      <td>Accurate visualization & decision support</td>
                      <td>Learning curve for advanced features</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>Google Earth Engine</td>
                      <td>Cloud-based satellite data processing</td>
                      <td>Access to large-scale imagery datasets</td>
                      <td>Requires internet and scripting skills</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>LiDAR</td>
                      <td>Terrain and elevation modeling</td>
                      <td>High-resolution topographic mapping</td>
                      <td>High cost and data processing needs</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>UAV / Drones</td>
                      <td>Site surveying & monitoring</td>
                      <td>Cost-effective and flexible data collection</td>
                      <td>Regulatory constraints and battery life</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>ERDAS Imagine</td>
                      <td>Satellite image processing</td>
                      <td>Advanced remote sensing analytics</td>
                      <td>Complex software and licensing costs</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>AI & ML Algorithms</td>
                      <td>Image classification & pattern recognition</td>
                      <td>Automated, accurate analysis</td>
                      <td>Data quality and model training</td>
                      <td>Ph.D.</td>
                    </tr>
                    <tr>
                      <td>IoT with GIS</td>
                      <td>Smart city planning & infrastructure tracking</td>
                      <td>Real-time geospatial monitoring</td>
                      <td>Integration and connectivity issues</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Blockchain with GIS</td>
                      <td>Secure geospatial data sharing</td>
                      <td>Transparency and trust in spatial data</td>
                      <td>Scalability and adoption barriers</td>
                      <td>Ph.D.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="CEProjectDevelopmentCenter-casestudy">
              <h2>Case Study – Drone-based Road Infrastructure Monitoring</h2>
              <p>
                At Narpavi Research Institute, an M.Tech project was developed using UAV-based remote sensing and GIS analysis to monitor road surface conditions. Using AI classification models, cracks and deformations were detected with 92% accuracy, reducing manual inspection costs by 40%.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-driven Land Use and Land Cover Classification using Remote Sensing</li>
                <li>UAV and GIS-based Road Condition Monitoring for Smart Transportation</li>
                <li>Cloud-based GIS for Real-time Flood Prediction and Management</li>
                <li>Deep Learning Models for Remote Sensing Image Analysis</li>
                <li>LiDAR and GIS Integration for 3D Urban Mapping</li>
                <li>IoT-enabled Smart City Monitoring using GIS Systems</li>
                <li>Remote Sensing-based Groundwater Potential Mapping</li>
                <li>Blockchain-enabled Secure Geospatial Data Management</li>
                <li>GIS-based Traffic Flow Optimization in Urban Areas</li>
                <li>Multi-Sensor Fusion for Climate Change Impact Analysis</li>
              </ul>
            </section>

            <section className="CEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                At Narpavi Research Institute, we provide comprehensive project development support in Remote Sensing & GIS for B.Tech, M.Tech, and Ph.D. students worldwide. Our expertise spans satellite image processing, UAV-based surveying, AI-driven geospatial analytics, climate modeling, and smart infrastructure monitoring. We ensure that every project is IEEE-aligned, industry-relevant, and research-oriented.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-futurescope">
              <h2>Future Research Directions in Remote Sensing & GIS</h2>
              <ul>
                <li>Digital twin cities using GIS and RS</li>
                <li>Deep learning for hyperspectral image analysis</li>
                <li>Integration of IoT with cloud-based GIS platforms</li>
                <li>Blockchain for secure geospatial transactions</li>
                <li>AI-powered disaster prediction and resilience systems</li>
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
                <a href="/department/remote-sensing-gis">
                  Remote Sensing & GIS
                </a>
              </li>
              <li>
                <a href="/department/remote-sensing-gis/gis-based-urban-planning">
                  GIS-Based Urban Planning
                </a>
              </li>
              <li>
                <a href="/department/remote-sensing-gis/remote-sensing-for-disaster">
                  Remote Sensing for Disaster Management
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

export default CERemoteSensingGISProjectDevelopmentCenter;
