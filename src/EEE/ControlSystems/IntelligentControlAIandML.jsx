import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Intelligent Control using AI ML Project Development Center in Chennai",
  "Intelligent Control IEEE Projects 2023–2025",
  "AI ML Control Systems Projects",
  "B.Tech Fuzzy Logic Control Projects",
  "M.Tech Deep Reinforcement Learning Control",
  "Ph.D AI Based Nonlinear Control Systems",
  "Neural Network Control IEEE Projects",
  "Reinforcement Learning Control Robotics",
  "Smart Grid Intelligent Control Systems",
  "Narpavi Research Institute Control Systems"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Intelligent Control using AI/ML Project Development Center offer?",
    answer:
      "We support B.Tech, M.Tech, and Ph.D. scholars in IEEE-aligned (2023–2025) projects focusing on intelligent controllers using AI/ML, neural networks, fuzzy logic, reinforcement learning, and deep learning."
  },
  {
    question:
      "What types of intelligent control projects are supported?",
    answer:
      "We support B.Tech projects in fuzzy logic and ML-based control, M.Tech projects in deep reinforcement learning and hybrid AI controllers, and Ph.D. research in AI-integrated nonlinear and cyber-physical control systems."
  },
  {
    question:
      "Which tools and technologies are used?",
    answer:
      "MATLAB/Simulink, Python (TensorFlow, PyTorch), ROS, FPGA and microcontrollers, IoT platforms, fuzzy logic toolboxes, and reinforcement learning frameworks."
  },
  {
    question:
      "How are projects aligned with IEEE standards?",
    answer:
      "Projects follow IEEE Transactions (2023–2025) on intelligent control, reinforcement learning, autonomous systems, smart grids, and cyber-physical control."
  },
  {
    question:
      "What academic support is provided?",
    answer:
      "We provide complete IEEE project support including simulations, embedded prototyping, AI model development, documentation, and journal or conference publication guidance."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Intelligent Control using AI/ML – Project Development Center in Chennai";

const pageDescription =
  "Intelligent Control using AI/ML Project Development Center in Chennai offering IEEE-aligned (2023–2025) projects for B.Tech, M.Tech, and Ph.D. using neural networks, fuzzy logic, reinforcement learning, and deep learning control systems.";

const pageUrl =
  "/department/control-systems-electrical/intelligent-control-ai-ml";

const EEEIntelligentControlAiMlProjectDevelopmentCenter = () => {
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
              <p><strong>Narpavi Research Institute</strong> presents the Intelligent Control using AI/ML – Project Development Center, enabling B.Tech, M.Tech, and Ph.D. scholars worldwide to explore IEEE-aligned (2023–2025) innovations in adaptive, self-learning, and next-generation control systems.</p>
              <p>We train researchers to integrate AI/ML with robotics, EVs, smart grids, renewable systems, and Industry 4.0 enabling predictive, adaptive, and intelligent automation solutions.</p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of Intelligent Control using AI/ML</h2>
              <ul>
                <li>Enhances adaptive decision-making in uncertain environments.</li>
                <li>Improves robotic, aerospace, and industrial automation performance.</li>
                <li>Applicable in EVs, smart grids, and renewable optimization.</li>
                <li>IEEE focus (2023–2025) on deep reinforcement learning in control systems.</li>
                <li>Essential for autonomous navigation, IoT-based cyber-physical systems.</li>
              </ul>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech AI/ML Control Projects</h2>
              <ul>
                <li>MATLAB/Python simulations of AI controllers</li>
                <li>Fuzzy logic in process control prototypes</li>
                <li>Basic ML-based robotic path planning</li>
                <li>IEEE-format academic projects</li>
              </ul>
              <p>Focus: fundamentals of AI/ML integration in classical control systems.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech AI/ML Control Projects</h2>
              <ul>
                <li>Deep reinforcement learning for autonomous robotics</li>
                <li>Hybrid AI-ML controllers for smart energy systems</li>
                <li>IoT integration with real-time AI-control firmware</li>
                <li>Experimental validation with FPGA/microcontrollers</li>
              </ul>
              <p>Focus: advanced ML frameworks combined with embedded implementations, validated with IEEE experiments.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D AI/ML Control Projects</h2>
              <ul>
                <li>Explainable AI (XAI) for control in safety-critical systems</li>
                <li>AI/ML-based nonlinear intelligent control with Lyapunov stability proofs</li>
                <li>Cyber-physical systems adaptive intelligent controllers</li>
                <li>IEEE/SCI publications and patents</li>
              </ul>
              <p>Focus: pioneering AI/ML integrated control strategies, self-learning embedded controllers, and resilient automation frameworks.</p>
            </section>

            {/* 📊 Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – AI/ML Control vs Applications</h2>
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
                      <td>Neural Network Controllers</td>
                      <td>Robotics, Drone Navigation</td>
                      <td>Learns nonlinear patterns & adapts</td>
                    </tr>
                    <tr>
                      <td>Fuzzy Logic Controllers</td>
                      <td>Automotive, Process Control</td>
                      <td>Handles uncertainty & imprecision</td>
                    </tr>
                    <tr>
                      <td>Reinforcement Learning</td>
                      <td>Autonomous Vehicles, Industry</td>
                      <td>Optimal policies from interactions</td>
                    </tr>
                    <tr>
                      <td>Deep Learning</td>
                      <td>Smart Grids, Predictive Systems</td>
                      <td>Analyzes high-dimensional patterns</td>
                    </tr>
                    <tr>
                      <td>Hybrid AI-ML Controllers</td>
                      <td>Industry 4.0, Robotics</td>
                      <td>Robustness by combining AI techniques</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute specializes globally in Intelligent Control using AI/ML, offering simulation, AI algorithm design, hardware integration, IoT/cloud-enabled deployments, and IEEE publication support. Scholars gain both academic depth and industrial relevance in future-ready intelligent systems.</p>
            </section>

            {/* FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((q, idx)=>(
                  <details key={idx}>
                    <summary>{q.question}</summary>
                    <p>{q.answer}</p>
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

export default EEEIntelligentControlAiMlProjectDevelopmentCenter;
