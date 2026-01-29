import "../CEProjectDevelopmentCenter.scss";
import Subsidebar from "../../pages/Subsidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* ✅ KEYWORDS ARRAY OBJECT */
const keywords = [
  "Remote Sensing for Disaster Management IEEE Projects 2023–2025",
  "Satellite Disaster Monitoring Projects",
  "UAV GIS Disaster Risk Mapping",
  "Flood and Landslide Remote Sensing",
  "AI Remote Sensing Disaster Forecasting",
  "Cloud GIS Disaster Mitigation",
  "Civil Engineering Disaster Projects",
  "Remote Sensing PhD Projects",
  "GIS Disaster Management Research",
  "Narpavi Research Institute Civil Projects"
];

const faqs = [
  {
    question:
      "What services does the Remote Sensing for Disaster Management Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Remote Sensing for Disaster Management Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on satellite-based disaster monitoring, UAV applications, and AI-driven disaster prediction."
  },
  {
    question:
      "What types of Remote Sensing for Disaster Management projects are supported?",
    answer:
      "B.Tech projects on flood mapping and earthquake damage visualization, M.Tech projects on cyclone prediction and landslide zonation, and Ph.D. projects on AI-assisted flood forecasting and Cloud GIS-based earthquake risk assessment."
  },
  {
    question: "Which tools and technologies are used?",
    answer:
      "Google Earth Engine, QGIS, ArcGIS, MATLAB, SAR data, UAVs, and AI frameworks such as TensorFlow and Keras."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are based on IEEE Transactions (2023–2025) focusing on remote sensing, GIS, and AI for disaster management and resilience."
  },
  {
    question: "What academic support is provided?",
    answer:
      "Complete support including topic selection, remote sensing data analysis, GIS and AI integration, simulation-based modeling, documentation, and IEEE/Scopus/Elsevier/Springer publication assistance."
  }
];

const CERemoteSensingDisasterManagementProjectDevelopmentCenter = () => {
  return (
    <div className="CEProjectDevelopmentCenter">

      {/* ✅ SEO FIXED */}
      <SEO
        title="Remote Sensing for Disaster Management – Project Development Center in Chennai"
        description="Remote Sensing for Disaster Management project development for B.Tech, M.Tech, and Ph.D. students using Google Earth Engine, SAR, UAVs, AI, and Cloud GIS for flood mapping, earthquake assessment, cyclone prediction, and landslide monitoring."
        keywords={keywords}
        url="/department/remote-sensing-gis/remote-sensing-for-disaster"
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
              Remote Sensing for Disaster Management – Project Development Center in Chennai
            </h1>

   <section className="CEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Remote Sensing for Disaster Management Project Development Center, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on disaster prediction, monitoring, and mitigation using satellite imagery, UAVs, GIS, and AI.
              </p>
              <p>
                Our projects focus on earthquake damage assessment, flood mapping, forest fire detection, drought monitoring, landslide prediction, and cyclone risk analysis for resilient disaster management.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-importance">
              <h2>Importance of Remote Sensing for Disaster Management</h2>
              <ul>
                <li><strong>Early Warning Systems</strong>: Real-time monitoring of floods, cyclones, and earthquakes.</li>
                <li><strong>Damage Assessment</strong>: Post-disaster imagery for rapid recovery planning.</li>
                <li><strong>Environmental Monitoring</strong>: Detection of droughts, soil erosion, and deforestation.</li>
                <li><strong>Resource Allocation</strong>: Optimizes rescue and relief operations.</li>
                <li><strong>Sustainability</strong>: Ensures long-term disaster risk reduction strategies.</li>
              </ul>
            </section>

            <section className="CEProjectDevelopmentCenter-btech">
              <h2>B.Tech Remote Sensing for Disaster Management Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational remote sensing projects aligned with IEEE topics.</p>
              <ul>
                <li>Learn Google Earth Engine, QGIS, and ArcGIS basics</li>
                <li>Develop mini-projects (e.g., flood-prone zone mapping, earthquake damage visualization, forest fire detection)</li>
                <li>Perform GIS-based disaster data analysis</li>
                <li>Prepare IEEE-format reports for conferences</li>
              </ul>
              <p>The style emphasizes practical remote sensing and GIS skills.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Remote Sensing for Disaster Management Project Development</h2>
              <p>For postgraduate students, projects focus on advanced remote sensing applications.</p>
              <ul>
                <li>Use UAVs, multispectral, and hyperspectral analysis</li>
                <li>Integrate AI and IoT for predictive disaster modeling</li>
                <li>Implement mini-projects (e.g., cyclone path prediction, landslide hazard zonation, drought monitoring)</li>
                <li>Publish in IEEE/Scopus-indexed journals</li>
              </ul>
              <p>The style focuses on predictive and advanced disaster assessment frameworks.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Remote Sensing for Disaster Management Project Development</h2>
              <p>For doctoral scholars, our center supports pioneering research in next-gen remote sensing models.</p>
              <ul>
                <li>Develop AI-driven, cloud-based, real-time disaster systems</li>
                <li>Handle big data with Cloud GIS for multi-temporal analysis</li>
                <li>Conduct projects (e.g., real-time flood forecasting, earthquake risk assessment, automated damage detection)</li>
                <li>Publish in IEEE, Scopus, Elsevier, and Springer journals</li>
              </ul>
              <p>The style emphasizes innovation and global contributions to disaster resilience.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Technologies vs. Applications</h2>
              <div className="CEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology</th>
                      <th>Disaster Application</th>
                      <th>Benefits</th>
                      <th>Challenges</th>
                      <th>Academic Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Optical Remote Sensing</td>
                      <td>Earthquake & cyclone damage mapping</td>
                      <td>Clear visual assessment</td>
                      <td>Limited by cloud cover</td>
                      <td>B.Tech</td>
                    </tr>
                    <tr>
                      <td>SAR (Synthetic Aperture Radar)</td>
                      <td>Flood & landslide monitoring</td>
                      <td>Works in all-weather conditions</td>
                      <td>Complex data processing</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>UAV/Drones</td>
                      <td>Local disaster mapping</td>
                      <td>High-resolution real-time data</td>
                      <td>Limited coverage area</td>
                      <td>M.Tech</td>
                    </tr>
                    <tr>
                      <td>GIS + Remote Sensing</td>
                      <td>Multi-hazard risk mapping</td>
                      <td>Integrated spatial decision-making</td>
                      <td>Data integration complexity</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>AI + Satellite Data</td>
                      <td>Predictive disaster modeling</td>
                      <td>Faster, accurate forecasting</td>
                      <td>Requires AI expertise</td>
                      <td>Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Cloud GIS</td>
                      <td>Real-time large-scale monitoring</td>
                      <td>Scalable for multiple regions</td>
                      <td>High computational costs</td>
                      <td>Ph.D.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="CEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>Satellite-Based Flood Risk Zonation Using Remote Sensing and GIS (2023)</li>
                <li>UAV and SAR Integration for Real-Time Landslide Monitoring (2023)</li>
                <li>AI-Assisted Cyclone Prediction Using Multi-Spectral Satellite Data (2024)</li>
                <li>Remote Sensing Framework for Forest Fire Detection and Control (2024)</li>
                <li>Cloud GIS-Based Earthquake Risk Assessment for Urban Areas (2024)</li>
                <li>Real-Time Drought Monitoring Using Satellite Remote Sensing and AI (2025)</li>
                <li>Deep Learning for Automated Post-Disaster Damage Detection (2025)</li>
                <li>Global Disaster Resilience Framework Using Remote Sensing and Cloud Platforms (2025)</li>
              </ul>
            </section>

            <section className="CEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                At Narpavi Research Institute, we provide specialized project assistance for Remote Sensing for Disaster Management, offering hands-on training in remote sensing software and data processing, customized IEEE, Scopus, Springer, and Elsevier-aligned project development, mini-projects and case studies for real-world disaster scenarios, and end-to-end guidance from project ideation to thesis writing and journal publication. Our goal is to prepare students with the knowledge, tools, and innovation skills required for the future of disaster management research and implementation.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-futurescope">
              <h2>Future Research Directions in Remote Sensing for Disaster Management</h2>
              <ul>
                <li>AI-driven disaster prediction models</li>
                <li>Cloud GIS for real-time disaster monitoring</li>
                <li>UAV-based rapid response systems</li>
                <li>SAR-based all-weather disaster mapping</li>
                <li>Multi-hazard resilience frameworks</li>
              </ul>
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

export default CERemoteSensingDisasterManagementProjectDevelopmentCenter;
