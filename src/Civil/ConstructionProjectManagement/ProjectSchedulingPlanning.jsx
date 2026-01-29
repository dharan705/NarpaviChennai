import "../CEProjectDevelopmentCenter.scss";
import Subsidebar from "../../pages/Subsidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* ✅ KEYWORDS ARRAY OBJECT */
const keywords = [
  "Project Scheduling & Planning Construction IEEE 2023–2025",
  "AI Project Scheduling",
  "IoT Construction Planning",
  "BIM Integrated Scheduling",
  "CPM PERT Construction Projects",
  "Primavera P6 MS Project Scheduling",
  "Predictive Delay Analysis Civil Engineering",
  "Smart Infrastructure Scheduling",
  "B.Tech M.Tech Ph.D. Project Scheduling",
  "Narpavi Research Institute Project Planning"
];

const faqs = [
  {
    question: "What services does the Project Scheduling & Planning Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Project Scheduling & Planning Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on AI-based scheduling, IoT monitoring, and BIM-integrated planning."
  },
  {
    question: "What types of Project Scheduling & Planning projects are supported?",
    answer:
      "We support B.Tech projects (Gantt charts, CPM, PERT), M.Tech projects (AI and BIM-based scheduling), and Ph.D. projects (predictive algorithms, IoT-integrated systems)."
  },
  {
    question: "Which tools and technologies are used?",
    answer:
      "Primavera P6, MS Project, MATLAB, Revit, IoT sensors, and AI frameworks such as TensorFlow and Keras."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects follow IEEE Transactions (2023–2025) on Civil Engineering, focusing on smart scheduling, IoT monitoring, and AI-driven planning."
  },
  {
    question: "What academic support is provided?",
    answer:
      "Complete support including topic selection, simulations, AI & IoT integration, documentation, and IEEE/Scopus/SCI publication guidance."
  }
];

const CEProjectSchedulingPlanningProjectDevelopmentCenter = () => {
  return (
    <div className="CEProjectDevelopmentCenter">

      {/* ✅ SEO FIXED */}
      <SEO
        title="Project Scheduling & Planning – Project Development Center in Chennai"
        description="Project Scheduling & Planning project development for B.Tech, M.Tech, and Ph.D. students using Primavera P6, MS Project, AI, IoT, BIM, CPM, and PERT techniques."
        keywords={keywords}
        url="/department/construction-project-management/project-scheduling-planning"
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
              Project Scheduling & Planning – Project Development Center in Chennai
            </h1>
               <section className="CEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Project Scheduling & Planning Project Development Center, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on efficient scheduling, resource allocation, and project management.
              </p>
              <p>
                By integrating AI, IoT, BIM, and advanced optimization algorithms, we empower students to create innovative scheduling solutions for construction and infrastructure projects.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-importance">
              <h2>Importance of Project Scheduling & Planning</h2>
              <ul>
                <li><strong>Efficient Time Management</strong>: Accurate timeline forecasting avoids delays.</li>
                <li><strong>Resource Optimization</strong>: Effective utilization of labor, materials, and equipment.</li>
                <li><strong>Cost Control</strong>: Aligns schedules with financial planning to prevent overruns.</li>
                <li><strong>Risk Reduction</strong>: Identifies potential delays with contingency strategies.</li>
                <li><strong>Smart Construction</strong>: AI and IoT enhance scheduling accuracy and adaptability.</li>
              </ul>
            </section>

            <section className="CEProjectDevelopmentCenter-btech">
              <h2>B.Tech Project Scheduling & Planning Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational scheduling projects aligned with IEEE topics.</p>
              <ul>
                <li>Learn Gantt charts, CPM, and PERT techniques</li>
                <li>Use MS Project or Primavera for scheduling exercises</li>
                <li>Develop mini-projects (e.g., Gantt charts for residential buildings, manual vs software scheduling)</li>
                <li>Prepare IEEE-format reports for conferences</li>
              </ul>
              <p>The style emphasizes practical scheduling and time management skills.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Project Scheduling & Planning Project Development</h2>
              <p>For postgraduate students, projects focus on advanced scheduling techniques.</p>
              <ul>
                <li>Integrate AI algorithms and BIM for scheduling</li>
                <li>Use Primavera P6, Revit, MATLAB for schedule optimization</li>
                <li>Implement pilot-scale scheduling systems</li>
                <li>Optimize multi-objective schedules</li>
                <li>Publish in IEEE/Scopus-indexed journals</li>
              </ul>
              <p>The style focuses on technology-driven scheduling solutions.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Project Scheduling & Planning Project Development</h2>
              <p>For doctoral scholars, our center supports pioneering research in smart scheduling systems.</p>
              <ul>
                <li>Develop AI, IoT, and BIM-integrated scheduling frameworks</li>
                <li>Use neural networks, genetic algorithms, or fuzzy logic for delay prediction</li>
                <li>Apply to large-scale infrastructure and smart city projects</li>
                <li>Publish in IEEE, Elsevier, Springer, and Scopus-indexed journals</li>
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
                      <th>Industry/Application</th>
                      <th>Benefits</th>
                      <th>Challenges</th>
                      <th>Academic Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Gantt Charts & CPM</td>
                      <td>Small construction projects</td>
                      <td>Easy visualization, simple tracking</td>
                      <td>Limited for complex projects</td>
                      <td>B.Tech</td>
                    </tr>
                    <tr>
                      <td>PERT</td>
                      <td>Medium projects</td>
                      <td>Probability-based scheduling, risk forecasting</td>
                      <td>Requires accurate data</td>
                      <td>B.Tech/M.Tech</td>
                    </tr>
                    <tr>
                      <td>Primavera & MS Project</td>
                      <td>Industrial & commercial projects</td>
                      <td>Efficient resource allocation, timeline control</td>
                      <td>Learning curve for software</td>
                      <td>M.Tech</td>
                    </tr>
                    <tr>
                      <td>BIM-Integrated Scheduling</td>
                      <td>Smart buildings, large infrastructure</td>
                      <td>Real-time planning, 3D visualization</td>
                      <td>High software and training costs</td>
                      <td>M.Tech/Ph.D.</td>
                    </tr>
                    <tr>
                      <td>AI & Machine Learning Models</td>
                      <td>Mega projects</td>
                      <td>Predictive delay analysis, adaptive scheduling</td>
                      <td>Requires AI expertise</td>
                      <td>Ph.D.</td>
                    </tr>
                    <tr>
                      <td>IoT-Enabled Monitoring</td>
                      <td>Urban infrastructure</td>
                      <td>Real-time updates, early delay warnings</td>
                      <td>Sensor integration complexity</td>
                      <td>Ph.D.</td>
                    </tr>
                    <tr>
                      <td>Genetic Algorithms / Fuzzy Logic</td>
                      <td>Smart city development</td>
                      <td>Multi-objective scheduling, optimization</td>
                      <td>Complex algorithm development</td>
                      <td>Ph.D.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="CEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-Enhanced Smart Scheduling System for Construction Projects (2023)</li>
                <li>IoT-Based Real-Time Project Progress Monitoring & Planning (2023)</li>
                <li>BIM-Integrated Project Scheduling for Smart Infrastructure (2024)</li>
                <li>Predictive Delay Analysis Using Machine Learning in Construction (2024)</li>
                <li>Genetic Algorithm-Based Optimization of Project Timelines (2024)</li>
                <li>Resource Allocation and Scheduling Optimization Using AI (2025)</li>
                <li>Hybrid CPM-PERT Models for Improved Construction Planning (2025)</li>
                <li>Simulation-Based Risk-Aware Scheduling Framework for Civil Projects (2025)</li>
              </ul>
            </section>

            <section className="CEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                At Narpavi Research Institute, we specialize in Project Scheduling & Planning support for B.Tech, M.Tech, and Ph.D. students globally, offering guidance on IEEE-aligned project design and implementation, expertise in AI, IoT, and BIM-based scheduling tools, pilot studies with real-world project case simulations, and research paper support and international publication assistance. Through smart scheduling models, predictive analysis, and sustainable project management, we ensure students’ research projects are globally competitive and industry-relevant.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-futurescope">
              <h2>Future Research Directions in Project Scheduling & Planning</h2>
              <ul>
                <li>AI-driven smart scheduling systems</li>
                <li>IoT-enabled real-time project progress tracking</li>
                <li>BIM-integrated planning for smart infrastructure</li>
                <li>Advanced optimization algorithms for multi-objective scheduling</li>
                <li>Sustainable scheduling for eco-friendly construction</li>
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
                <a href="/department/construction-project-management">
                  Construction Project Management
                </a>
              </li>
              <li>
                <a href="/department/construction-project-management/smart-construction-techniques">
                  Smart Construction Techniques
                </a>
              </li>
              <li>
                <a href="/department/construction-project-management/cost-optimization-in-projects">
                  Cost Optimization in Projects
                </a>
              </li>
              <li>
                <a href="/department/construction-project-management/project-scheduling-planning">
                  Project Scheduling & Planning
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

export default CEProjectSchedulingPlanningProjectDevelopmentCenter;
