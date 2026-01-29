import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "PID and Advanced Controllers Project Development Center in Chennai",
  "PID Controller IEEE Projects 2023–2025",
  "Advanced Controllers Projects for B.Tech",
  "M.Tech Adaptive PID Controller Projects",
  "Ph.D Research in Advanced Controllers",
  "Model Predictive Control Projects",
  "Sliding Mode Controller IEEE Projects",
  "AI-based Intelligent Controllers",
  "Control Systems Projects using MATLAB",
  "Narpavi Research Institute PID Controllers"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the PID and Advanced Controllers Project Development Center offer?",
    answer:
      "We provide B.Tech, M.Tech, and Ph.D. students guidance on IEEE-aligned (2023–2025) projects related to PID controllers, adaptive controllers, MPC, sliding mode, and AI/ML-based controllers, including simulation, prototyping, and IEEE publication support."
  },
  {
    question:
      "What types of PID and Advanced Controller projects are supported?",
    answer:
      "B.Tech projects include PID tuning and microcontroller-based control. M.Tech projects focus on adaptive PID, MPC, and intelligent controllers. Ph.D. projects explore robust nonlinear and AI-based advanced control strategies with patents and IEEE publications."
  },
  {
    question: "Which tools and platforms are used?",
    answer:
      "MATLAB/Simulink, LabVIEW, Arduino/ARM/PIC microcontrollers, FPGA boards, Python with TensorFlow/PyTorch, and real-time HIL systems."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects align with IEEE Transactions (2023–2025) on modern control systems, adaptive and robust control, AI-based controllers, and industrial automation."
  },
  {
    question: "What academic support is provided?",
    answer:
      "Complete support from topic selection and simulation to hardware implementation, IEEE documentation, patents, and journal submissions."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "PID and Advanced Controllers – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) PID and Advanced Controllers Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering PID tuning, adaptive controllers, MPC, sliding mode control, and AI/ML-based intelligent controllers using MATLAB and real-time hardware.";

const pageUrl =
  "/department/control-systems-electrical/pid-advanced-controllers";

const EEEPidAdvancedControllersProjectDevelopmentCenter = () => {
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
              <p>
               <strong>Narpavi Research Institute</strong> leads the PID and Advanced Controllers Project Development Center – offering B.Tech, M.Tech, and Ph.D. students IEEE-aligned (2023–2025) projects in PID, adaptive controllers, MPC, sliding mode controllers, and intelligent AI/ML-based controllers.
              </p>
              <p>
               Our students gain skills in simulation, algorithm design, real-world hardware prototyping, and predictive intelligent control for broad applications in process industries, robotics, EVs, renewable integration, and cyber-physical systems.
              </p>
            </section>

            {/* Why Important */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of PID and Advanced Controllers</h2>
              <ul>
                <li>Ensures accurate control and stability in process industries.</li>
                <li>Improves energy efficiency and lowers operating costs.</li>
                <li>Integrates seamlessly with AI/ML-based intelligent controllers.</li>
                <li>Crucial for robotics, electric drives, smart manufacturing, and Industry 4.0.</li>
                <li>Aligned with IEEE research focus (2023–2025) on modern control systems.</li>
              </ul>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech PID & Advanced Controllers Projects</h2>
              <ul>
                <li>Basic PID tuning using MATLAB/Simulink</li>
                <li>Microcontroller-based PID prototypes</li>
                <li>Industrial case applications like HVAC/Process systems</li>
                <li>IEEE-guided simulations & reports</li>
              </ul>
              <p>Focus: fundamentals of PID and control system hardware practice.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech PID & Advanced Controllers Projects</h2>
              <ul>
                <li>Adaptive PID and fractional-order PID projects</li>
                <li>Implementation of MPC and predictive control strategies</li>
                <li>Hybrid AI-assisted controllers with optimization algorithms</li>
                <li>Case studies in smart grids, robotics, and EV drives</li>
              </ul>
              <p>Focus: advanced and hybrid controller simulations validated with prototypes and IEEE publication.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D PID & Advanced Controllers Projects</h2>
              <ul>
                <li>Robust nonlinear & intelligent controller design</li>
                <li>Deep learning integration for adaptive process control</li>
                <li>Cyber-physical applications in autonomous vehicles & Industry 4.0</li>
                <li>Patents, IEEE/SCI journal papers, and industrial-scale demo systems</li>
              </ul>
              <p>Focus: pioneering industry-defining controller architectures with AI/ML support and global publication impact.</p>
            </section>

            {/* Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Controllers vs. Industry</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Controller Type</th>
                      <th>Industry Application</th>
                      <th>Benefits Achieved</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PID Controllers</td>
                      <td>Process, HVAC, Power plants</td>
                      <td>Stable, cost-effective</td>
                    </tr>
                    <tr>
                      <td>Adaptive Controllers</td>
                      <td>Aerospace, Renewable energy</td>
                      <td>Self-tuning, robust vs. variations</td>
                    </tr>
                    <tr>
                      <td>Model Predictive Controllers</td>
                      <td>Automotive, Robotics, Chem Plants</td>
                      <td>Optimized performance, handles constraints</td>
                    </tr>
                    <tr>
                      <td>Sliding Mode Controllers</td>
                      <td>EVs, Robotics, Nonlinear Systems</td>
                      <td>Noise-resistant, robust</td>
                    </tr>
                    <tr>
                      <td>Intelligent AI/ML Controllers</td>
                      <td>Smart Grids, Industry 4.0</td>
                      <td>Predictive, adaptive, self-learning</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            {/* About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute is a global leader in Control Engineering projects. With our expertise, scholars worldwide receive IEEE-standard project guidance, simulation-to-prototype training, and publication mentorship in PID and Advanced Controllers.</p>
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

export default EEEPidAdvancedControllersProjectDevelopmentCenter;
