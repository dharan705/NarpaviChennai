import "../CEProjectDevelopmentCenter.scss";
import Subsidebar from "../../pages/Subsidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* ✅ KEYWORDS ARRAY OBJECT */
const keywords = [
  "GIS Based Urban Planning IEEE Projects 2023–2025",
  "Smart City GIS Projects",
  "Remote Sensing Urban Planning",
  "AI GIS City Planning Projects",
  "Cloud GIS Smart Infrastructure",
  "IoT Integrated GIS Projects",
  "Urban Heat Island GIS Mapping",
  "B.Tech M.Tech PhD GIS Projects",
  "GIS Urban Development Projects",
  "Narpavi Research Institute Civil Projects"
];

const faqs = [
  {
    question:
      "What services does the GIS-Based Urban Planning Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s GIS-Based Urban Planning Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on GIS, remote sensing, AI, and IoT for smart city planning and sustainable urban development."
  },
  {
    question: "What types of GIS-Based Urban Planning projects are supported?",
    answer:
      "B.Tech projects on land-use mapping and road network analysis, M.Tech projects on 3D city models and IoT-AI integration, and Ph.D. projects on AI-driven geospatial models and Cloud GIS for smart cities."
  },
  {
    question: "Which tools and technologies are used?",
    answer:
      "ArcGIS, QGIS, Google Earth Engine, MATLAB, IoT sensors, and AI frameworks such as TensorFlow and Keras."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are based on IEEE Transactions (2023–2025) focusing on GIS-based smart city planning, remote sensing, and AI-driven urban modeling."
  },
  {
    question: "What academic support is provided?",
    answer:
      "Complete support including topic selection, GIS and AI integration, dataset analysis, simulation-based modeling, and IEEE/Scopus/Elsevier/Springer publication assistance."
  }
];

const CEGISBasedUrbanPlanningProjectDevelopmentCenter = () => {
  return (
    <div className="CEProjectDevelopmentCenter">

      {/* ✅ SEO FIXED */}
      <SEO
        title="GIS-Based Urban Planning – Project Development Center in Chennai"
        description="GIS-Based Urban Planning project development for B.Tech, M.Tech, and Ph.D. students using ArcGIS, QGIS, remote sensing, AI, IoT, and Cloud GIS for smart city planning, land-use analysis, and sustainable urban development."
        keywords={keywords}
        url="/department/remote-sensing-gis/gis-based-urban-planning"
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
              GIS-Based Urban Planning – Project Development Center in Chennai
            </h1>
               <section className="CEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the GIS-Based Urban Planning Project Development Center, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on smart city planning, environmental conservation, and optimized urban resource utilization.
              </p>
              <p>
                By integrating GIS, remote sensing, AI, and IoT, we empower students to create innovative urban planning solutions for sustainable and resilient cities.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-importance">
              <h2>Importance of GIS-Based Urban Planning</h2>
              <ul>
                <li><strong>Land-Use Management</strong>: Accurate mapping of residential, industrial, and commercial zones.</li>
                <li><strong>Smart Cities</strong>: Data-driven planning for transport, utilities, and infrastructure.</li>
                <li><strong>Environmental Protection</strong>: Monitoring urban heat islands, air quality, and green cover.</li>
                <li><strong>Disaster-Resilient Cities</strong>: GIS-based zoning maps for flood and earthquake preparedness.</li>
                <li><strong>Resource Optimization</strong>: Efficient allocation of water, energy, and land resources.</li>
              </ul>
            </section>

            <section className="CEProjectDevelopmentCenter-btech">
              <h2>B.Tech GIS-Based Urban Planning Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational GIS projects aligned with IEEE topics.</p>
              <ul>
                <li>Learn ArcGIS, QGIS, and Google Earth Engine basics</li>
                <li>Develop mini-projects (e.g., land-use classification, road network mapping, urban green space analysis)</li>
                <li>Perform spatial data visualization and analysis</li>
                <li>Prepare IEEE-format reports for conferences</li>
              </ul>
              <p>The style emphasizes practical GIS skills for urban planning.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-mtech">
              <h2>M.Tech GIS-Based Urban Planning Project Development</h2>
              <p>For postgraduate students, projects focus on advanced GIS applications.</p>
              <ul>
                <li>Develop 3D city models and geodatabases</li>
                <li>Integrate IoT and AI for smart transportation and environmental monitoring</li>
                <li>Implement mini-projects (e.g., traffic flow optimization, urban heat island mapping)</li>
                <li>Publish in IEEE/Scopus-indexed journals</li>
              </ul>
              <p>The style focuses on data-driven urban planning solutions.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-phd">
              <h2>Ph.D. GIS-Based Urban Planning Project Development</h2>
              <p>For doctoral scholars, our center supports pioneering research in GIS-based urban planning.</p>
              <ul>
                <li>Develop AI-driven geospatial prediction models</li>
                <li>Apply Cloud GIS for large-scale metropolitan planning</li>
                <li>Conduct deep learning-based urban sustainability analysis</li>
                <li>Publish in IEEE, Scopus, Elsevier, and Springer journals</li>
              </ul>
              <p>The style emphasizes innovation and global contributions to smart cities.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Technologies vs. Applications</h2>
              <div className="CEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology</th>
                      <th>Application in Urban Planning</th>
                      <th>Benefits</th>
                      <th>Challenges</th>
                      <th>Academic Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>GIS Mapping</td>
                      <td>Land-use planning</td>
                      <td>Efficient zoning, resource management</td>
                      <td>Data accuracy dependency</td>
                      <td>B.Tech</td>
                    </tr>
                    <tr>
                      <td>Remote Sensing</td>
                      <td>Environmental monitoring</td>
                      <td>Green cover & air quality assessment</td>
                      <td>High-resolution data costs</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>GPS & GIS</td>
                      <td>Transport planning</td>
                      <td>Optimized routing, reduced congestion</td>
                      <td>Requires real-time data integration</td>
                      <td>M.Tech</td>
                    </tr>
                    <tr>
                      <td>AI + GIS</td>
                      <td>Predictive urban growth</td>
                      <td>Smart city design, sustainability</td>
                      <td>Complex AI model development</td>
                      <td>Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Cloud GIS</td>
                      <td>Large-scale urban projects</td>
                      <td>Scalable, real-time planning</td>
                      <td>High computational requirements</td>
                      <td>Ph.D.</td>
                    </tr>
                    <tr>
                      <td>IoT + GIS</td>
                      <td>Smart infrastructure</td>
                      <td>Real-time utility, traffic monitoring</td>
                      <td>Sensor integration complexity</td>
                      <td>Ph.D.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="CEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>GIS-Based Land Use and Land Cover Analysis for Smart Cities (2023)</li>
                <li>AI-Assisted GIS Framework for Sustainable Urban Planning (2023)</li>
                <li>GIS and IoT Integration for Smart Transport Network Optimization (2024)</li>
                <li>Urban Heat Island Mapping Using Remote Sensing and GIS (2024)</li>
                <li>Cloud GIS Platform for Metropolitan-Level Urban Management (2024)</li>
                <li>Predictive Urban Growth Modeling Using GIS and Machine Learning (2025)</li>
                <li>GIS-Based Smart Zoning for Disaster-Resilient Cities (2025)</li>
                <li>Multi-Layer GIS Framework for Climate-Resilient Urban Planning (2025)</li>
              </ul>
            </section>

            <section className="CEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                At Narpavi Research Institute, we assist students and researchers in GIS-Based Urban Planning projects by providing training in GIS, remote sensing, and AI tools, customized project development for B.Tech, M.Tech, and Ph.D. levels, support for IEEE, Scopus, Elsevier, and Springer publications, and real-time datasets and simulation-based city planning models. Our commitment is to ensure students gain both academic and practical exposure in GIS technologies.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-futurescope">
              <h2>Future Research Directions in GIS-Based Urban Planning</h2>
              <ul>
                <li>AI-driven geospatial modeling for urban growth</li>
                <li>IoT-integrated real-time urban monitoring</li>
                <li>Cloud GIS for scalable smart city planning</li>
                <li>Remote sensing for environmental resilience</li>
                <li>Smart city frameworks for sustainable urban development</li>
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

export default CEGISBasedUrbanPlanningProjectDevelopmentCenter;
