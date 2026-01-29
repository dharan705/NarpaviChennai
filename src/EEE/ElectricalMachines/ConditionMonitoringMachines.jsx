import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Condition Monitoring of Machines Project Development Center in Chennai",
  "Condition Monitoring of Machines IEEE Projects 2023–2025",
  "Predictive Maintenance IEEE Projects",
  "Motor Fault Diagnosis Research",
  "B.Tech Machine Monitoring Projects",
  "M.Tech Vibration Analysis Research",
  "Ph.D RUL Prediction and Anomaly Detection",
  "Thermal and Vibration Monitoring Projects",
  "IoT-Based Machine Condition Monitoring",
  "Narpavi Research Institute Condition Monitoring"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Condition Monitoring of Machines Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Condition Monitoring of Machines Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on predictive maintenance, fault detection, vibration analysis, thermal monitoring, and IoT-based condition monitoring for electrical machines and industrial drives."
  },
  {
    question: "What types of Condition Monitoring projects are supported?",
    answer:
      "We support B.Tech projects (vibration and thermal monitoring, IoT-based diagnostics), M.Tech projects (AI/ML-based fault prediction, real-time monitoring), and Ph.D. projects (RUL prediction and anomaly detection) for motors, generators, and Industry 4.0 applications."
  },
  {
    question: "Which technologies are used in Condition Monitoring project development?",
    answer:
      "MATLAB/Simulink, LabVIEW, ANSYS Maxwell, TensorFlow, PyTorch, IoT platforms (MQTT), FPGA/ARM controllers, and hardware-in-the-loop (HIL) systems."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are based on IEEE Transactions (2023–2025) covering predictive maintenance, fault diagnostics, AI-based monitoring, and IoT integration."
  },
  {
    question: "What support is provided for academic submissions?",
    answer:
      "End-to-end support including topic selection, algorithm design, simulation, hardware prototyping, documentation, and IEEE/Scopus/SCI journal publication guidance."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Condition Monitoring of Machines – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Condition Monitoring of Machines Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering predictive maintenance, vibration analysis, thermal monitoring, current signature analysis, IoT-based diagnostics, and AI-driven fault detection.";

const pageUrl =
  "/department/electrical-machines/condition-monitoring-machines";

const EEEConditionMonitoringMachinesProjectDevelopmentCenter = () => {
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
                <strong>Narpavi Research Institute</strong> presents the Condition Monitoring of Machines Project Development Center, a global platform empowering B.Tech, M.Tech, and Ph.D. scholars to advance predictive maintenance and fault detection aligned with IEEE Transactions (2023–2025). Our projects focus on vibration analysis, thermal monitoring, current signature analysis, and IoT-based systems for motors, generators, and industrial drives.
              </p>
              <p>
                By combining software simulations, hardware prototyping, and AI/ML-based diagnostics, we deliver intelligent, industry-ready solutions for academic excellence and practical applications.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Condition Monitoring of Machines Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational projects in condition monitoring, aligned with IEEE topics.
              </p>
              <ul>
                <li>Understanding machine faults, vibration patterns, thermal profiles, and current signatures</li>
                <li>Study of IEEE papers (2023–2025) on condition monitoring techniques</li>
                <li>MATLAB/Simulink modeling of motor faults and vibration signals</li>
                <li>Thermal monitoring simulation using LabVIEW or equivalent platforms</li>
                <li>Sensor-based vibration and temperature monitoring on small-scale motors</li>
                <li>Generation of IEEE-style project reports</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical diagnostics, and academic-ready output.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Condition Monitoring of Machines Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced diagnostics and real-time monitoring.
              </p>
              <ul>
                <li>Detailed study of IEEE Transactions (2023–2025) on machine condition monitoring</li>
                <li>AI/ML-based modeling of vibration, thermal, and current signals for fault prediction</li>
                <li>Simulation of industrial-scale motor and generator systems</li>
                <li>IoT-based sensor network implementation for real-time monitoring</li>
                <li>FPGA/ARM-based controllers for adaptive maintenance scheduling</li>
                <li>IEEE-compliant report writing and paper submission</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade monitoring solutions.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Condition Monitoring of Machines Project Development</h2>
              <p>
                For doctoral scholars, our center supports pioneering research in predictive maintenance.
              </p>
              <ul>
                <li>Review of IEEE Transactions (2023–2025) on predictive maintenance and IoT integration</li>
                <li>AI, ML, and deep learning algorithms for predictive maintenance and fault detection</li>
                <li>Real-time IoT-based condition monitoring for motors and generators</li>
                <li>HIL testing and laboratory-scale implementation of monitoring systems</li>
                <li>Integration of sensor networks, cloud-based analytics, and predictive maintenance dashboards</li>
                <li>Publication in IEEE journals and filing patents</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Condition Monitoring Technologies vs. Industry Applications</h2>
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
                      <td>Vibration Analysis & Diagnostics</td>
                      <td>Motors, generators, industrial drives</td>
                      <td>AI-based predictive fault detection</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, LabVIEW</td>
                    </tr>
                    <tr>
                      <td>Thermal & Infrared Monitoring</td>
                      <td>Power plants and industrial machines</td>
                      <td>Real-time thermal monitoring and optimization</td>
                      <td>B.Tech/M.Tech</td>
                      <td>LabVIEW, ANSYS Maxwell</td>
                    </tr>
                    <tr>
                      <td>Current Signature Analysis</td>
                      <td>Electrical machines</td>
                      <td>Detection of rotor and stator faults</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB/Simulink, Python</td>
                    </tr>
                    <tr>
                      <td>IoT-Enabled Monitoring</td>
                      <td>Industry 4.0 smart factories</td>
                      <td>Real-time data acquisition & cloud analytics</td>
                      <td>B.Tech/Ph.D.</td>
                      <td>MQTT, IoT platforms, Python</td>
                    </tr>
                    <tr>
                      <td>Predictive Maintenance Algorithms</td>
                      <td>Critical industrial machinery</td>
                      <td>ML-based RUL prediction and anomaly detection</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch, Python</td>
                    </tr>
                    <tr>
                      <td>Condition-Based Control</td>
                      <td>Motor and generator operation</td>
                      <td>Adaptive maintenance scheduling</td>
                      <td>Ph.D.</td>
                      <td>FPGA, ARM, MATLAB</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a globally recognized hub for Electrical and Electronics Engineering project development. Through the Condition Monitoring of Machines Project Development Center, we provide comprehensive support to B.Tech, M.Tech, and Ph.D. students worldwide.
              </p>
              <p>
                From IEEE topic selection and algorithm development to hardware prototyping and publication, Narpavi Research Institute ensures students gain hands-on experience, advanced analytical skills, and global recognition in predictive maintenance and condition monitoring research.
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

export default EEEConditionMonitoringMachinesProjectDevelopmentCenter;
