import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Optimal Control Systems Project Development Center in Chennai",
  "Optimal Control Systems IEEE Projects 2023–2025",
  "LQR Projects for B.Tech",
  "MPC Control Projects M.Tech",
  "Ph.D Research in Optimal Control",
  "Dynamic Programming Control Projects",
  "Pontryagin Minimum Principle Projects",
  "AI-based Optimal Control IEEE",
  "Renewable Energy Optimization Control",
  "Narpavi Research Institute Optimal Control"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Optimal Control Systems Project Development Center offer?",
    answer:
      "We provide B.Tech, M.Tech, and Ph.D. students end-to-end support for IEEE-aligned (2023–2025) projects in LQR, MPC, dynamic programming, Pontryagin’s principle, and AI-based optimal control, covering simulations, prototyping, algorithm design, and IEEE publication."
  },
  {
    question: "What types of projects are supported?",
    answer:
      "B.Tech projects include LQR-based designs and robotic optimization. M.Tech projects focus on MPC, EV energy optimization, and renewable integration. Ph.D. projects explore AI-integrated optimal control, nonlinear strategies, and patents in IEEE/Scopus/SCI publishing."
  },
  {
    question: "Which tools and platforms are used?",
    answer:
      "MATLAB/Simulink, PSCAD, Python (SciPy/CVX), ARM/Arduino microcontrollers, HIL systems, TensorFlow, and PyTorch."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects align with IEEE Transactions (2023–2025) on trajectory control, smart grids, robotics optimization, EV energy management, and AI-based optimal control."
  },
  {
    question: "What academic support is provided?",
    answer:
      "We provide topic mentoring, algorithm design, simulation, HIL testing, documentation, and international IEEE publication support."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Optimal Control Systems – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Optimal Control Systems Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering LQR, MPC, dynamic programming, Pontryagin’s principle, and AI-based optimal control using MATLAB, PSCAD, and Python.";

const pageUrl =
  "/department/control-systems-electrical/optimal-control-systems";

const EEEOptimalControlSystemsProjectDevelopmentCenter = () => {
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
              <p><strong>Narpavi Research Institute</strong> presents the Optimal Control Systems Project Development Center, offering global researchers IEEE-aligned (2023–2025) support in formulating optimization-based control strategies to minimize cost, maximize efficiency, and ensure stability across advanced industrial and academic systems.</p>
              <p>Our scholars focus on smart grids, aerospace trajectory optimization, robotics, EV drives, and Industry 4.0 systems bridging rigorous mathematical theory with real-world implementations.</p>
            </section>

            {/* Importance */}
            <section className="EEEProjectDevelopmentCenter-intro">
              <h2>Importance of Optimal Control Systems</h2>
              <ul>
                <li>Ensures maximum efficiency with minimal energy use.</li>
                <li>Guides aerospace trajectory optimization and robotics motion planning.</li>
                <li>Critical for renewable MPPT optimization and EV powertrain efficiency.</li>
                <li>Supports predictive algorithms for smart manufacturing and process control.</li>
                <li>Aligns with IEEE 2023–2025 emerging AI-driven control strategies.</li>
              </ul>
            </section>

            {/* B.Tech */}
            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Projects in Optimal Control Systems</h2>
              <ul>
                <li>MATLAB-based Linear Quadratic Regulator (LQR) simulations</li>
                <li>Robotic path optimization demonstrations</li>
                <li>Basic real-time optimal algorithms with microcontrollers</li>
                <li>IEEE-style documentation & presentations</li>
              </ul>
              <p>Focus: fundamentals of optimal control and MATLAB-based academic learning.</p>
            </section>

            {/* M.Tech */}
            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Projects in Optimal Control Systems</h2>
              <ul>
                <li>Model Predictive Control (MPC) development and validation</li>
                <li>Renewable energy optimal management (microgrids, MPPT)</li>
                <li>EV charging optimization & power scheduling</li>
                <li>Embedded hardware-in-loop testing for industrial process optimization</li>
              </ul>
              <p>Focus: advanced MPC, renewable & EV energy systems optimization, industry-ready experiments.</p>
            </section>

            {/* Ph.D */}
            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D Projects in Optimal Control Systems</h2>
              <ul>
                <li>Hybrid nonlinear AI-based optimal control strategies</li>
                <li>Dynamic programming & Pontryagin’s minimum principle research</li>
                <li>Novel algorithms for autonomous navigation and smart cities</li>
                <li>Publications in SCI/Scopus journals</li>
              </ul>
              <p>Focus: groundbreaking integration of AI/ML with optimal control theory for real-time scalable systems.</p>
            </section>

            {/* 📊 Comparative Table */}
            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Optimal Control Methods vs Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Industry Application</th>
                      <th>Key Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Linear Quadratic Regulator (LQR)</td>
                      <td>Aerospace, Robotics</td>
                      <td>Minimum energy cost, stable response</td>
                    </tr>
                    <tr>
                      <td>Model Predictive Control (MPC)</td>
                      <td>Process industries, Smart Grids</td>
                      <td>Predictive optimization, constraints handling</td>
                    </tr>
                    <tr>
                      <td>Dynamic Programming</td>
                      <td>Renewable integration, EV charging</td>
                      <td>Long-term multi-step optimization</td>
                    </tr>
                    <tr>
                      <td>Pontryagin’s Minimum Principle</td>
                      <td>Aerospace trajectories</td>
                      <td>Precise trajectory + resource efficiency</td>
                    </tr>
                    <tr>
                      <td>AI-Enhanced Optimal Control</td>
                      <td>Smart factories, Industry 4.0</td>
                      <td>Adaptive, intelligent predictive decisions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📘 About */}
            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute is globally renowned for IEEE-standard control systems R&D. Through our Optimal Control Systems Development Center, we provide scholars across B.Tech, M.Tech, and Ph.D. levels comprehensive support from simulation, prototyping, optimization, to IEEE publication, ensuring academic + industrial excellence.</p>
            </section>

            {/* ❓ FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((faq, idx) => (
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

export default EEEOptimalControlSystemsProjectDevelopmentCenter;
