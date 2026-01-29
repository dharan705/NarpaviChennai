import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Energy Efficient Motors Project Development Center in Chennai",
  "Energy Efficient Motors IEEE Projects 2023–2025",
  "High Efficiency Motor Design Projects",
  "Loss Minimization in Electric Motors",
  "B.Tech Energy Saving Motor Projects",
  "M.Tech Motor Optimization Research",
  "Ph.D Intelligent Motor Control Research",
  "IoT-Based Motor Energy Monitoring",
  "Power Factor Improvement in Motors",
  "Narpavi Research Institute Energy Efficient Motors"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Energy-Efficient Motors Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Energy-Efficient Motors Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on high-efficiency motor design, loss minimization, advanced control strategies, and IoT-enabled monitoring for industrial, automotive, and renewable energy applications."
  },
  {
    question: "What types of Energy-Efficient Motors projects are supported?",
    answer:
      "We support B.Tech projects (motor design and IoT-based monitoring), M.Tech projects (AI-based optimization and advanced control), and Ph.D. projects (multi-objective optimization and predictive control) for EVs, robotics, and renewable energy systems."
  },
  {
    question: "Which technologies are used in Energy-Efficient Motors project development?",
    answer:
      "MATLAB/Simulink, ANSYS Maxwell, LabVIEW, TensorFlow, PyTorch, IoT platforms (MQTT), FPGA/DSP controllers, and hardware-in-the-loop (HIL) testbeds."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are based on IEEE Transactions (2023–2025) covering high-efficiency motor design, loss minimization, AI-driven optimization, and advanced control strategies."
  },
  {
    question: "What support is provided for academic submissions?",
    answer:
      "End-to-end guidance including topic selection, simulation, hardware prototyping, documentation, and IEEE/Scopus/SCI journal publication support."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Energy Efficient Motors – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Energy Efficient Motors Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering high-efficiency motor design, loss minimization, AI-based optimization, advanced control strategies, and IoT-enabled energy monitoring.";

const pageUrl =
  "/department/electrical-machines/energy-efficient-motors";

const EEEEnergyEfficientMotorsProjectDevelopmentCenter = () => {
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
  <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Energy-Efficient Motors Project Development Center, a global platform empowering B.Tech, M.Tech, and Ph.D. scholars to advance high-efficiency motor design aligned with IEEE Transactions (2023–2025). Our projects focus on reducing losses, improving power factor, and integrating intelligent control for industrial, automotive, and renewable energy applications.
              </p>
              <p>
                By combining simulations, hardware prototyping, and IoT-enabled monitoring, we deliver sustainable, industry-ready solutions for academic excellence and practical applications.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Energy-Efficient Motors Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational projects in energy-efficient motor design, aligned with IEEE topics.
              </p>
              <ul>
                <li>Understanding motor efficiency parameters, loss mechanisms, and performance metrics</li>
                <li>Study of IEEE publications (2023–2025) for energy-efficient motor design</li>
                <li>MATLAB/Simulink and ANSYS Maxwell simulations for high-efficiency motor design</li>
                <li>Analysis of torque, speed, efficiency, and thermal performance</li>
                <li>Microcontroller or DSP-based prototypes with optimized windings and control strategies</li>
                <li>Generation of IEEE-style project reports</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical motor optimization, and academic-ready output.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Energy-Efficient Motors Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced optimization and real-time implementation.
              </p>
              <ul>
                <li>Detailed study of IEEE Transactions (2023–2025) on energy-efficient motor design and optimization</li>
                <li>Multi-objective optimization of motors for efficiency, torque, and energy savings</li>
                <li>AI/ML-based adaptive control and predictive optimization for industrial and renewable applications</li>
                <li>FPGA/DSP-based prototypes with real-time monitoring and performance optimization</li>
                <li>IoT-enabled data acquisition for predictive performance and maintenance</li>
                <li>IEEE-compliant report writing and paper submission</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade motor solutions.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Energy-Efficient Motors Project Development</h2>
              <p>
                For doctoral scholars, our center supports pioneering research in sustainable motor design.
              </p>
              <ul>
                <li>Comprehensive review of IEEE Transactions (2023–2025) in high-efficiency motor design and energy optimization</li>
                <li>AI, ML, and metaheuristic optimization of motors for efficiency and dynamic performance</li>
                <li>Development of intelligent control strategies for real-time efficiency maximization</li>
                <li>Lab-scale prototype testing with HIL setups for energy-efficient motors</li>
                <li>IoT-enabled monitoring for predictive optimization and energy performance analysis</li>
                <li>Publication in IEEE journals and filing patents</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Energy-Efficient Motors Technologies vs. Industry Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Research Focus</th>
                      <th>Industry Application</th>
                      <th>Research & Development Focus (2023–2025)</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>High-Efficiency Motor Design</td>
                      <td>Industrial motors, EVs, robotics</td>
                      <td>Multi-objective optimization for torque, losses, and efficiency</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, ANSYS Maxwell</td>
                    </tr>
                    <tr>
                      <td>Loss Minimization Techniques</td>
                      <td>Electric drives, generators</td>
                      <td>Copper, core, mechanical, and inverter loss reduction</td>
                      <td>B.Tech/M.Tech</td>
                      <td>ANSYS Maxwell, MATLAB/Simulink</td>
                    </tr>
                    <tr>
                      <td>Advanced Control Algorithms</td>
                      <td>Smart factories, renewable energy systems</td>
                      <td>AI-assisted adaptive control and predictive optimization</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Python, TensorFlow, PyTorch</td>
                    </tr>
                    <tr>
                      <td>IoT-Based Energy Monitoring</td>
                      <td>Industry 4.0 applications</td>
                      <td>Real-time monitoring and predictive maintenance</td>
                      <td>B.Tech/Ph.D.</td>
                      <td>MQTT, IoT platforms, Python</td>
                    </tr>
                    <tr>
                      <td>Power Factor Improvement Techniques</td>
                      <td>Industrial and commercial motors</td>
                      <td>Advanced reactive power compensation and control</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, LabVIEW</td>
                    </tr>
                    <tr>
                      <td>Renewable Energy Integration</td>
                      <td>Solar, wind, and hybrid power systems</td>
                      <td>Motor optimization for variable loads and energy efficiency</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>ANSYS Maxwell, MATLAB/Simulink</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a globally recognized hub for Electrical and Electronics Engineering project development. Through the Energy-Efficient Motors Project Development Center, we provide comprehensive support to B.Tech, M.Tech, and Ph.D. scholars worldwide.
              </p>
              <p>
                From IEEE topic selection and simulation to hardware prototyping and publication guidance, Narpavi Research Institute ensures students gain hands-on experience, advanced technical expertise, and international recognition in energy-efficient motor research.
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

          {/* ➡ RIGHT SIDEBAR */}
          <aside className="right-sidebar1">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/department/electrical-machines">Electrical Machines – Project Development Center</a></li>
              <li><a href="/department/electrical-machines/advanced-drives-controllers">Advanced Drives & Controllers</a></li>
              <li><a href="/department/electrical-machines/condition-monitoring-machines">Condition Monitoring of Machines</a></li>
              <li><a href="/department/electrical-machines/energy-efficient-motors">Energy Efficient Motors</a></li>
              <li><a href="/department/electrical-machines/fault-diagnosis-motor-generators">Fault Diagnosis of Motors & Generators</a></li>
              <li><a href="/department/electrical-machines/loss-minimization-techniques">Loss Minimization Techniques</a></li>
              <li><a href="/department/electrical-machines/special-electrical-machines">Special Electrical Machines</a></li>
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

export default EEEEnergyEfficientMotorsProjectDevelopmentCenter;
