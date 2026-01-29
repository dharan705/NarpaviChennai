import "../CEProjectDevelopmentCenter.scss";
import Subsidebar from "../../pages/Subsidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* ✅ KEYWORDS ARRAY OBJECT */
const keywords = [
  "Water Treatment & Recycling IEEE Projects 2023–2025",
  "Smart Water Treatment Systems",
  "IoT Water Quality Monitoring",
  "AI Based Water Treatment Optimization",
  "Membrane Filtration RO Projects",
  "Sustainable Wastewater Recycling",
  "Constructed Wetlands Treatment",
  "Rainwater Harvesting Recycling Systems",
  "Environmental Engineering B.Tech M.Tech Ph.D.",
  "Narpavi Research Institute Water Projects"
];

const faqs = [
  {
    question: "What services does the Water Treatment & Recycling Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Water Treatment & Recycling Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on water treatment, recycling, and smart monitoring systems."
  },
  {
    question: "What types of projects are supported?",
    answer:
      "B.Tech projects on basic treatment systems, M.Tech projects on advanced optimization, and Ph.D. projects on smart and sustainable recycling."
  },
  {
    question: "Which tools and technologies are used?",
    answer:
      "MATLAB, EPANET, WaterGEMS, IoT sensors, and AI frameworks such as TensorFlow and Keras."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects follow IEEE Transactions (2023–2025) focusing on smart water treatment, IoT monitoring, and sustainability."
  },
  {
    question: "What academic support is provided?",
    answer:
      "Complete support including topic selection, lab experiments, simulation, IoT integration, and IEEE/Scopus/SCI publication guidance."
  }
];

const CEWaterTreatmentRecyclingProjectDevelopmentCenter = () => {
  return (
    <div className="CEProjectDevelopmentCenter">

      {/* ✅ SEO FIXED */}
      <SEO
        title="Water Treatment & Recycling – Project Development Center in Chennai"
        description="Water Treatment & Recycling project development for B.Tech, M.Tech, and Ph.D. students focusing on smart water treatment, IoT monitoring, AI optimization, membrane filtration, wastewater reuse, and sustainable recycling."
        keywords={keywords}
        url="/department/environmental-engineering/water-treatment-recycling"
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
              Water Treatment & Recycling – Project Development Center in Chennai
            </h1>
                 <section className="CEProjectDevelopmentCenter-intro">
                <p>
                  <strong>Narpavi Research Institute</strong> presents the Water Treatment & Recycling Project Development Center, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on sustainable water treatment and recycling systems.
                </p>
                <p>
                  By integrating laboratory experiments, simulation modeling, IoT monitoring, and AI-driven optimization, we empower students to create solutions for safe water supply and efficient wastewater reuse.
                </p>
              </section>

              <section className="CEProjectDevelopmentCenter-importance">
                <h2>Importance of Water Treatment & Recycling</h2>
                <ul>
                  <li><strong>Ensures Safe Drinking Water</strong>: Eliminates pathogens, heavy metals, and chemicals.</li>
                  <li><strong>Promotes Water Sustainability</strong>: Reduces dependency on freshwater through reuse.</li>
                  <li><strong>Industrial & Urban Application</strong>: Reuses treated wastewater for irrigation and industrial processes.</li>
                  <li><strong>Environmental Protection</strong>: Minimizes untreated wastewater discharge into ecosystems.</li>
                  <li><strong>Smart Integration</strong>: Enables real-time monitoring with IoT sensors.</li>
                </ul>
              </section>

              <section className="CEProjectDevelopmentCenter-btech">
                <h2>B.Tech Water Treatment & Recycling Project Development</h2>
                <p>For undergraduate students, our center focuses on foundational water treatment projects aligned with IEEE topics.</p>
                <ul>
                  <li>Study physical, chemical, and biological treatment methods</li>
                  <li>Conduct filtration, sedimentation, and disinfection experiments</li>
                  <li>Develop mini-projects (e.g., domestic water recycling, rainwater harvesting)</li>
                  <li>Prepare IEEE-format reports for conferences</li>
                </ul>
                <p>The style emphasizes practical skills and hands-on treatment system design.</p>
              </section>

              <section className="CEProjectDevelopmentCenter-mtech">
                <h2>M.Tech Water Treatment & Recycling Project Development</h2>
                <p>For postgraduate students, projects focus on advanced treatment and optimization.</p>
                <ul>
                  <li>Apply membrane filtration, reverse osmosis, and activated sludge</li>
                  <li>Model systems with MATLAB, EPANET, and WaterGEMS</li>
                  <li>Design pilot-scale plants for wastewater recycling</li>
                  <li>Optimize using AI and statistical methods</li>
                  <li>Publish in IEEE/Scopus-indexed journals</li>
                </ul>
                <p>The style focuses on industry-relevant, optimized solutions.</p>
              </section>

              <section className="CEProjectDevelopmentCenter-phd">
                <h2>Ph.D. Water Treatment & Recycling Project Development</h2>
                <p>For doctoral scholars, our center supports pioneering research in smart water systems.</p>
                <ul>
                  <li>Develop IoT and AI-integrated treatment systems</li>
                  <li>Explore novel recycling methods and zero-liquid discharge</li>
                  <li>Use ML for predictive modeling and maintenance</li>
                  <li>Publish in IEEE, Elsevier, and Scopus-indexed journals</li>
                </ul>
                <p>The style emphasizes innovation and global contributions.</p>
              </section>

              <section className="CEProjectDevelopmentCenter-table">
                <h2>Comparative Table – Technologies vs. Applications</h2>
                <div className="CEProjectDevelopmentCenter-table-container">
                  <table>
                    <thead>
                      <tr>
                        <th>Technology / Method</th>
                        <th>Industry Application</th>
                        <th>Benefits</th>
                        <th>Challenges</th>
                        <th>Academic Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Membrane Filtration & Reverse Osmosis</td>
                        <td>Municipal and Industrial Water Treatment</td>
                        <td>High contaminant removal, safe reuse</td>
                        <td>High energy and maintenance costs</td>
                        <td>M.Tech/Ph.D.</td>
                      </tr>
                      <tr>
                        <td>Activated Sludge Process</td>
                        <td>Municipal wastewater treatment</td>
                        <td>Biological removal, energy-efficient</td>
                        <td>Requires skilled operation</td>
                        <td>B.Tech/M.Tech</td>
                      </tr>
                      <tr>
                        <td>Constructed Wetlands</td>
                        <td>Rural and semi-urban areas</td>
                        <td>Eco-friendly, low maintenance</td>
                        <td>Large land requirement</td>
                        <td>B.Tech/M.Tech</td>
                      </tr>
                      <tr>
                        <td>IoT-Based Water Quality Sensors</td>
                        <td>Smart cities and industrial plants</td>
                        <td>Real-time monitoring, predictive control</td>
                        <td>Sensor calibration and integration</td>
                        <td>Ph.D.</td>
                      </tr>
                      <tr>
                        <td>Chemical Coagulation & Filtration</td>
                        <td>Industrial effluent treatment</td>
                        <td>Rapid contaminant removal, cost-effective</td>
                        <td>Chemical handling and disposal</td>
                        <td>B.Tech</td>
                      </tr>
                      <tr>
                        <td>Rainwater Harvesting & Recycling</td>
                        <td>Urban infrastructure</td>
                        <td>Reduces freshwater demand, sustainable</td>
                        <td>Seasonal variability</td>
                        <td>B.Tech/M.Tech</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="CEProjectDevelopmentCenter-projecttitles">
                <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
                <ul>
                  <li>IoT-Enabled Smart Water Recycling System for Urban Areas (2023)</li>
                  <li>AI-Based Water Quality Prediction and Treatment Optimization (2024)</li>
                  <li>Pilot-Scale Membrane Filtration System for Industrial Wastewater (2024)</li>
                  <li>Constructed Wetlands for Sustainable Domestic Wastewater Treatment (2025)</li>
                  <li>Smart Sensor Network for Real-Time Water Quality Monitoring (2025)</li>
                  <li>Comparative Study of Reverse Osmosis vs Activated Sludge Treatment for Industrial Effluent</li>
                  <li>Rainwater Harvesting and Recycling System with IoT Monitoring</li>
                  <li>Machine Learning Models for Predictive Maintenance of Water Treatment Plants</li>
                </ul>
              </section>

              <section className="CEProjectDevelopmentCenter-about">
                <h2>About Narpavi Research Institute</h2>
                <p>
                  Narpavi Research Institute provides end-to-end guidance in Environmental Engineering projects, especially in Water Treatment & Recycling. Our services for B.Tech, M.Tech, and Ph.D. students worldwide include IEEE-aligned project methodology and topic selection, laboratory and pilot-scale implementation support, software modeling and simulation tools (MATLAB, EPANET, WaterGEMS), and research paper writing and international publication guidance. Our approach ensures that students’ projects in water treatment and recycling are innovative, research-oriented, and publication-ready, providing both academic excellence and practical industry relevance.
                </p>
              </section>

              <section className="CEProjectDevelopmentCenter-futurescope">
                <h2>Future Research Directions in Water Treatment & Recycling</h2>
                <ul>
                  <li>IoT-enabled real-time water quality monitoring and control</li>
                  <li>AI-driven optimization for water treatment efficiency</li>
                  <li>Sustainable recycling methods with zero-liquid discharge</li>
                  <li>Resource recovery from wastewater for circular economy</li>
                  <li>Advanced membrane technologies for energy-efficient treatment</li>
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
          <aside className="right-sidebar">
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

export default CEWaterTreatmentRecyclingProjectDevelopmentCenter;
