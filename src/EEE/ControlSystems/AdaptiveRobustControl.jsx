import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Adaptive & Robust Control Project Development Center in Chennai",
  "Adaptive Robust Control IEEE Projects 2023–2025",
  "B.Tech Adaptive PID MRAC Projects",
  "M.Tech H Infinity Sliding Mode Control",
  "Ph.D AI ML Adaptive Control Systems",
  "Fuzzy Adaptive Control Projects",
  "Nonlinear Robust Control IEEE",
  "Aerospace EV Smart Grid Control Systems",
  "Adaptive Robust Control MATLAB Simulink",
  "Narpavi Research Institute Control Systems"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Adaptive & Robust Control Project Development Center offer?",
    answer:
      "We provide project support for B.Tech, M.Tech, and Ph.D. students in IEEE-aligned (2023–2025) adaptive control, H∞ robust control, sliding mode, fuzzy adaptive systems, and AI-based predictive controllers."
  },
  {
    question:
      "What types of Adaptive & Robust Control projects are supported?",
    answer:
      "We support B.Tech adaptive PID and MRAC projects, M.Tech H∞ and sliding mode control projects, and Ph.D. research in hybrid adaptive-robust and AI-based nonlinear control systems."
  },
  {
    question:
      "Which tools and platforms are used?",
    answer:
      "MATLAB/Simulink, LabVIEW, microcontrollers, FPGA, Python with TensorFlow/PyTorch, and Hardware-in-the-loop (HIL) platforms."
  },
  {
    question:
      "How are projects aligned with IEEE standards?",
    answer:
      "Projects are aligned with IEEE Transactions (2023–2025) on adaptive systems, robust control, predictive optimization, and nonlinear intelligent control."
  },
  {
    question:
      "What academic support is provided?",
    answer:
      "We provide end-to-end support including simulation, hardware implementation, validation, IEEE documentation, and journal publication guidance."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Adaptive & Robust Control – Project Development Center in Chennai";

const pageDescription =
  "Adaptive & Robust Control Project Development Center in Chennai offering IEEE-aligned (2023–2025) projects for B.Tech, M.Tech, and Ph.D. using adaptive PID, H∞ control, sliding mode, fuzzy adaptive, and AI-based control systems.";

const pageUrl =
  "/department/control-systems-electrical/adaptive-robust-control";

const EEEAdaptiveRobustControlProjectDevelopmentCenter = () => {
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
            <h1>{pageTitle}</h1>
   {/* Intro */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> drives innovation in Adaptive & Robust Control – Project Development Center, 
                enabling students and researchers to implement IEEE-aligned (2023–2025) solutions in adaptive self-tuning controllers, 
                robust H∞ systems, sliding mode, fuzzy adaptive, and hybrid AI-based frameworks for real-time applications.
              </p>
              <p>
                Students learn simulation (MATLAB/Simulink), hardware prototyping with microcontrollers/FPGA, and AI-assisted predictive algorithms for aerospace, EVs, smart grids, robotics, and biomedical systems.
              </p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of Adaptive & Robust Control</h2>
              <ul>
                <li>Ensures stability in uncertain and nonlinear environments.</li>
                <li>Widely used in aerospace and defense systems.</li>
                <li>Vital for renewable integration (wind/solar) and smart grids.</li>
                <li>Improves reliability in industrial automation and process control.</li>
                <li>IEEE (2023–2025) emphasizes AI-driven adaptive controllers.</li>
              </ul>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Projects in Adaptive & Robust Control</h2>
              <ul>
                <li>PID with adaptive tuning in MATLAB/Simulink</li>
                <li>Model Reference Adaptive Control (MRAC)</li>
                <li>Introduction to simple robust controllers</li>
                <li>Microcontroller-based adaptive PID prototypes</li>
              </ul>
              <p>Focus: Foundations of adaptive-robust control and IEEE-guided simulations.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Projects in Adaptive & Robust Control</h2>
              <ul>
                <li>H∞ robust controller design for uncertain plants</li>
                <li>Sliding mode adaptive systems for nonlinear robotics</li>
                <li>Fuzzy adaptive controllers with AI optimization</li>
                <li>Hardware-in-the-loop adaptive control validation</li>
              </ul>
              <p>Focus: advanced real-time industrial-level adaptive-robust algorithms with AI integration.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D Projects in Adaptive & Robust Control</h2>
              <ul>
                <li>Hybrid adaptive-robust nonlinear methods</li>
                <li>AI/ML-based predictive robust control frameworks</li>
                <li>Autonomous vehicles and resilient renewable integration research</li>
                <li>Patents & IEEE/SCI journal publishing</li>
              </ul>
              <p>Focus: groundbreaking theoretical and applied contributions to adaptive and robust control aligned with IEEE standards.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Adaptive & Robust Control vs. Industry</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Control Type</th>
                      <th>Industry Application</th>
                      <th>Key Advantages</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Adaptive Control</td>
                      <td>Aerospace, EVs, Renewables</td>
                      <td>Real-time self-tuning, adaptation</td>
                    </tr>
                    <tr>
                      <td>Robust H∞ Control</td>
                      <td>Smart Grids, Robotics</td>
                      <td>Stability under uncertainties</td>
                    </tr>
                    <tr>
                      <td>Sliding Mode Control</td>
                      <td>Autonomous Vehicles</td>
                      <td>High resilience to disturbances</td>
                    </tr>
                    <tr>
                      <td>Adaptive Neural/Fuzzy</td>
                      <td>Biomedical, Industry 4.0</td>
                      <td>Intelligent, self-learning</td>
                    </tr>
                    <tr>
                      <td>Robust Predictive Control</td>
                      <td>Process, Chemical Plants</td>
                      <td>Predictive robustness under variations</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute empowers global scholars in Adaptive & Robust Control through simulation, real-time prototyping, AI-driven optimization, and IEEE-standard publications. 
                Our mentorship bridges academic excellence with industrial deployment of robust, adaptive, and intelligent controllers.
              </p>
            </section>

            {/* FAQuestions */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((f, idx)=>(
                  <details key={idx}>
                    <summary>{f.question}</summary>
                    <p>{f.answer}</p>
                  </details>
                ))}
              </div>
        
            </section>
          </div>

          {/* ➡ RIGHT SIDEBAR */}
          <aside className="right-sidebar1">
         
            {/* 🔗 Related Services */}
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
  {/* 🔑 Keywords */}
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

export default EEEAdaptiveRobustControlProjectDevelopmentCenter;
