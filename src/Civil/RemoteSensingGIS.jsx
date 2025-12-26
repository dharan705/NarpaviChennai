import "./CEProjectDevelopmentCenter.scss";
import Sidebar from "../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "What services does the Remote Sensing & GIS Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Remote Sensing & GIS Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on spatial analysis, urban planning, disaster management, and smart infrastructure monitoring."
  },
  {
    question: "What types of Remote Sensing & GIS projects are supported?",
    answer:
      "We support B.Tech projects (basic mapping and land use analysis), M.Tech projects (AI-based spatial analytics and flood modeling), and Ph.D. projects (deep learning and IoT-integrated geospatial systems) for civil engineering applications."
  },
  {
    question: "Which tools and technologies are used in Remote Sensing & GIS projects?",
    answer:
      "Our stack includes QGIS, ArcGIS, Google Earth Engine, ERDAS Imagine, LiDAR, UAVs, Python scripting, AI frameworks (TensorFlow, Keras), and IoT for geospatial analysis."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are based on IEEE Transactions (2023–2025) on Remote Sensing and GIS, focusing on satellite imagery, AI-driven analytics, and cloud-based geospatial systems."
  },
  {
    question: "What support is provided for academic submissions?",
    answer:
      "We offer end-to-end guidance, including topic selection, data processing, model validation, documentation, and support for IEEE/Scopus/SCI journal publications and patents."
  }
];

const CERemoteSensingGISProjectDevelopmentCenter = () => {
  return (
    <div className="CEProjectDevelopmentCenter">

      {/* ✅ SEO (added – content untouched) */}
      <SEO
        title="Remote Sensing & GIS IEEE Projects (2023–2025)"
        description="Remote Sensing & GIS IEEE project development for B.Tech, M.Tech & PhD scholars focusing on spatial analysis, urban planning, disaster management, AI, IoT, UAVs, LiDAR, and smart infrastructure monitoring."
        url="/department/remote-sensing-gis"
        type="article"
        keywords={[
          "Remote Sensing Civil Engineering Projects",
          "GIS IEEE Projects",
          "UAV GIS Projects",
          "LiDAR Civil Engineering Projects",
          "AI in Remote Sensing",
          "IoT GIS Projects",
          "PhD Remote Sensing GIS Projects"
        ]}
        faqs={faqs}
      />

      <Sidebar />

      <div className="CEProjectDevelopmentCenter-main">
        <div className="CEProjectDevelopmentCenter-grid">

          {/* Left: Keywords */}
          <div className="CEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Remote Sensing Civil Engineering Projects</li>
              <li>GIS IEEE Projects 2023–2025</li>
              <li>UAV-based Surveying Civil Projects</li>
              <li>LiDAR Civil Project Ideas</li>
              <li>Cloud GIS Projects</li>
              <li>AI in Remote Sensing Projects</li>
              <li>IoT GIS Civil Engineering Projects</li>
              <li>Satellite Image Processing Projects</li>
              <li>Smart City GIS Projects</li>
              <li>Narpavi Research Institute Civil Projects</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="CEProjectDevelopmentCenter-center">
            <h1>Remote Sensing & GIS – Project Development Support</h1>

            {/* Internal links (added, original content preserved) */}
            <p className="seo-internal-links">
              Explore our
              <a href="/civil-engineering-project-development"> Civil Engineering Project Development</a>,
              <a href="/phd-project-development"> PhD Project Guidance</a>, and
              <a href="/journal-writing-services"> IEEE & SCI Journal Writing Services</a>
              for complete academic support.
            </p>

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

          {/* Right: Related Services */}
          <div className="CEProjectDevelopmentCenter-right">
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

          </div>

        </div>
      </div>
    </div>
  );
};

export default CERemoteSensingGISProjectDevelopmentCenter;
