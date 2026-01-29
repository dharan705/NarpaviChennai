import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Artificial Intelligence in EEE Project Development Center in Chennai",
  "AI in Electrical Engineering IEEE Projects",
  "AI Power Systems Smart Grids",
  "Deep Learning Fault Diagnosis EEE",
  "AI Renewable Energy Forecasting",
  "B.Tech AI EEE Projects",
  "M.Tech AI Smart Grid Automation",
  "Ph.D Federated Learning EEE",
  "Predictive Maintenance AI EEE",
  "AI Industrial Automation EEE",
  "IEEE AI Publications",
  "Narpavi Research Institute AI EEE"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question: "What services does the Artificial Intelligence in EEE Project Development Center offer?",
    answer:
      "Narpavi Research Institute supports B.Tech, M.Tech, and Ph.D. students in IEEE-aligned (2023–2025) AI-powered EEE projects including smart grids, power systems, renewable forecasting, and automation."
  },
  {
    question: "What types of AI in EEE projects are supported?",
    answer:
      "B.Tech projects include AI-based load prediction, M.Tech focuses on deep learning for fault diagnosis and smart grids, while Ph.D. research covers federated learning and AI cybersecurity."
  },
  {
    question: "Which technologies are used in AI in EEE projects?",
    answer:
      "TensorFlow, PyTorch, MATLAB/Simulink, Arduino, ESP32, FPGA, and IoT platforms."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects follow IEEE Transactions (2023–2025) in smart grids, renewable energy, and predictive maintenance."
  },
  {
    question: "What academic support is provided?",
    answer:
      "End-to-end guidance including topic selection, simulation, hardware prototyping, documentation, and IEEE/Scopus publication support."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Artificial Intelligence in EEE – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Artificial Intelligence in EEE Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering AI power systems, smart grids, renewable forecasting, and fault diagnosis.";

const pageUrl = "/department/ai-electrical-engineering";

const EEEArtificialIntelligenceProjectDevelopmentCenter = () => {
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
           <Leftsidebar/>
          </aside>

          {/* 📑 CENTER CONTENT */}
          <div className="EEEProjectDevelopmentCenter-center">
            {/* ✅ H1 ONLY */}
            <h1>{pageTitle}</h1>
 <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Artificial Intelligence in EEE – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop cutting-edge, IEEE-aligned (2023–2025) AI-powered solutions for power systems, smart grids, renewable energy, and industrial automation.
              </p>
              <p>
                With expertise in TensorFlow, PyTorch, MATLAB/Simulink, and IoT platforms, we deliver innovative solutions for load forecasting, predictive maintenance, and AI-driven control, ensuring academic rigor and industrial applicability.
              </p>
            </section>

          

            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – AI Technologies vs. Applications in EEE</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>AI Technology in EEE</th>
                      <th>Industry Application</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Machine Learning for Power Systems</td>
                      <td>Load Forecasting, Energy Optimization</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Python, MATLAB/Simulink</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Deep Learning in Fault Diagnosis</td>
                      <td>Predictive Maintenance, Fault Classification</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Reinforcement Learning in Control Systems</td>
                      <td>Adaptive Control, Smart Automation</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Python, MATLAB</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>AI in Renewable Energy</td>
                      <td>Solar & Wind Forecasting</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, Python</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>AI in Smart Grids</td>
                      <td>Demand Response, Energy Theft Detection</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, MATLAB</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Natural Language Processing (NLP) in EEE</td>
                      <td>Human-Machine Interfaces</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>NLTK, Python</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>AI-Enabled Industrial Automation</td>
                      <td>Robotic Process Automation</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>ROS, TensorFlow</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>AI in Electric Vehicles (EV)</td>
                      <td>BMS Optimization, Autonomous Driving</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, MATLAB/Simulink</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>IoT + AI in EEE</td>
                      <td>Smart Energy Management</td>
                      <td>B.Tech/M.Tech</td>
                      <td>AWS IoT, Arduino</td>
                      <td>Medium</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="EEEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned AI in EEE Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-Based Load Forecasting for Smart Grids (2023)</li>
                <li>Deep Learning Models for Fault Diagnosis in Electrical Machines (2024)</li>
                <li>Reinforcement Learning Control for Renewable Energy Integration (2025)</li>
                <li>AI-Enabled Smart Energy Management in Microgrids (2023)</li>
                <li>Predictive Maintenance of Motors using AI and IoT (2024)</li>
                <li>AI-Powered Cybersecurity Solutions for Smart Grids (2025)</li>
                <li>Hybrid AI Models for Renewable Energy Forecasting (2023)</li>
                <li>AI-Driven Autonomous Electric Vehicle Energy Optimization (2024)</li>
              </ul>
            </section>

            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute provides AI-driven EEE project development support for B.Tech, M.Tech, and Ph.D. scholars. The AI in EEE – Project Development Center offers expertise in machine learning, deep learning, IoT integration, control systems, renewable energy forecasting, and smart grid optimization.
              </p>
              <p>
                The institute ensures that every project is aligned with IEEE standards, making them publication-ready for IEEE Transactions and conferences.
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
              <li><a href="/department/ai-electrical-engineering">Artificial Intelligence in Electrical Engineering</a></li>
              <li><a href="/department/ai-electrical-engineering/power-load-forecasting">AI-Based Power Load Forecasting</a></li>
              <li><a href="/department/ai-electrical-engineering/machine-learning-fault-detection">Machine Learning for Fault Detection</a></li>
              <li><a href="/department/ai-electrical-engineering/deep-learning-renewables">Deep Learning in Renewable Energy</a></li>
              <li><a href="/department/ai-electrical-engineering/ai-smart-grids">AI in Smart Grids</a></li>
              <li><a href="/department/ai-electrical-engineering/neural-networks-motor">Neural Networks for Motor Control</a></li>
              <li><a href="/department/ai-electrical-engineering/ai-energy-optimization">AI-Based Energy Optimization</a></li>
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

export default EEEArtificialIntelligenceProjectDevelopmentCenter;
