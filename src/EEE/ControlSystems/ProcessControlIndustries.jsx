import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Process Control in Industries Project Development Center in Chennai",
  "Process Control IEEE Projects 2023–2025",
  "Industrial Automation Control Projects",
  "PID Control Industrial Projects",
  "Model Predictive Control Industry Projects",
  "Adaptive Process Control Systems",
  "IIoT and SCADA Process Control",
  "Industry 4.0 Process Automation Projects",
  "Ph.D Research in Process Control",
  "Narpavi Research Institute Process Control"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Process Control in Industries Project Development Center offer?",
    answer:
      "We provide B.Tech, M.Tech, and Ph.D. scholars IEEE-aligned (2023–2025) support in simulations, prototyping, and publications on PID, MPC, adaptive, fuzzy, and AI/ML process control methods, including SCADA and IIoT integration."
  },
  {
    question: "What types of process control projects are supported?",
    answer:
      "B.Tech projects include PID and fuzzy controllers. M.Tech projects focus on MPC, adaptive control, and IoT-SCADA integration. Ph.D. projects explore AI-driven process control, digital twins, and Industry 4.0 automation."
  },
  {
    question: "Which tools and platforms are used?",
    answer:
      "MATLAB/Simulink, LabVIEW, PLC/SCADA systems, Arduino, Raspberry Pi, Python, IIoT protocols, and AI/ML frameworks."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects align with IEEE Transactions (2023–2025) on industrial automation, adaptive control, AI-based predictive systems, and secure IIoT frameworks."
  },
  {
    question: "What academic support is provided?",
    answer:
      "Complete support including topic selection, simulation, controller design, hardware prototyping, IIoT integration, and IEEE/SCI publication assistance."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Process Control in Industries – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Process Control in Industries Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering PID, MPC, adaptive control, SCADA, IIoT, digital twins, and AI-driven industrial automation.";

const pageUrl =
  "/department/control-systems-electrical/process-control-industries";

const EEEProcessControlIndustriesProjectDevelopmentCenter = () => {
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

            {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p><strong>Narpavi Research Institute</strong> presents the Process Control in Industries Project Development Center, supporting B.Tech, M.Tech, and Ph.D. researchers in IEEE-aligned (2023–2025) projects. The focus lies in optimal automation, safety, adaptive control, and AI-driven IIoT smart automation.</p>
              <p>Process control forms the foundation of modern industry — spanning chemical plants, oil & gas, pharmaceuticals, power systems, and smart manufacturing.</p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of Process Control in Industries</h2>
              <ul>
                <li>Ensures safety and reliability in critical industrial operations.</li>
                <li>Improves production efficiency, reduces costs, and optimizes energy.</li>
                <li>Seamlessly integrates with Industrial IoT (IIoT) and Industry 4.0 frameworks.</li>
                <li>Enables real-time monitoring and predictive maintenance strategies.</li>
                <li>Highlighted IEEE research (2023–2025) in AI/ML industrial process control.</li>
              </ul>
            </section>

            {/* B.Tech Cycle */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Process Control Projects</h2>
              <ul>
                <li>MATLAB simulations for PID-based process setups</li>
                <li>PLC/Arduino-based prototypes for temperature/pressure control</li>
                <li>Fuzzy controllers for small-scale industry case studies</li>
                <li>Reports prepared in IEEE format</li>
              </ul>
              <p>Focus: fundamental PID & fuzzy control in hands-on industrial setups.</p>
            </section>

            {/* M.Tech Cycle */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Process Control Projects</h2>
              <ul>
                <li>Model Predictive Control (MPC) with MATLAB + Simulink prototyping</li>
                <li>Adaptive controllers for dynamic industrial applications</li>
                <li>IoT-based process monitoring dashboards integrated with SCADA</li>
                <li>Prototyping projects with OPC-UA, Modbus communication</li>
              </ul>
              <p>Focus: advanced MPC/Adaptive AI-powered process optimization integrated into Industry 4.0.</p>
            </section>

            {/* Ph.D Cycle */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Process Control Projects</h2>
              <ul>
                <li>AI/ML-driven process control frameworks for predictive optimization</li>
                <li>Digital twin-based research for power & chemical plant simulations</li>
                <li>Cyber-secure automation integration for Industry 4.0 factories</li>
                <li>SCI/IEEE-indexed publications and patents</li>
              </ul>
              <p>Focus: innovative contributions for resilient, intelligent, and autonomous process industries.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Process Control Techniques & Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technique</th>
                      <th>Industry Application</th>
                      <th>Key Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PID Control</td>
                      <td>Chemical Plants, Refineries</td>
                      <td>Simple, effective, widely used</td>
                    </tr>
                    <tr>
                      <td>Model Predictive Control (MPC)</td>
                      <td>Power & Pharma Plants</td>
                      <td>Predictive optimization, constraint handling</td>
                    </tr>
                    <tr>
                      <td>Adaptive Control</td>
                      <td>Automotive, Aerospace</td>
                      <td>Self-tunes to variations</td>
                    </tr>
                    <tr>
                      <td>Fuzzy Logic Control</td>
                      <td>Food, Robotics</td>
                      <td>Handles uncertainty, human-like reasoning</td>
                    </tr>
                    <tr>
                      <td>AI/ML-based Control</td>
                      <td>Smart Factories, Industry 4.0</td>
                      <td>Predictive, adaptive, intelligent automation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute offers complete IEEE-compliant support for process control system projects. We empower scholars to implement, validate, optimize, and publish impactful process automation solutions – bridging academia and industrial needs globally.</p>
            </section>

            {/* FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((faq,idx)=>(
                  <details key={idx}>
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
              <li><a href="/department/control-systems-electrical">Control Systems – Project Development Center</a></li>
              <li><a href="/department/control-systems-electrical/adaptive-robust-control">Adaptive & Robust Control Systems</a></li>
              <li><a href="/department/control-systems-electrical/intelligent-control-ai-ml">Intelligent Control (AI/ML)</a></li>
              <li><a href="/department/control-systems-electrical/nonlinear-control-systems">Nonlinear Control Systems</a></li>
              <li><a href="/department/control-systems-electrical/optimal-control-systems">Optimal Control Systems</a></li>
              <li><a href="/department/control-systems-electrical/pid-advanced-controllers">PID & Advanced Controllers</a></li>
              <li><a href="/department/control-systems-electrical/process-control-industries">Process Control in Industries</a></li>
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

export default EEEProcessControlIndustriesProjectDevelopmentCenter;
