import "../EEEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "AI in Smart Grids Project Development Center in Chennai",
  "AI Smart Grids IEEE Projects 2023–2025",
  "Machine Learning Load Forecasting Smart Grids",
  "Reinforcement Learning Energy Management",
  "Deep Learning Smart Grid Control",
  "Hybrid AI for Smart Cities",
  "B.Tech AI Smart Grid Projects",
  "M.Tech AI Smart Grid Optimization",
  "Ph.D AI Smart Grid Research",
  "Smart Energy Management AI",
  "Narpavi Research Institute Smart Grid"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question: "What services does the AI in Smart Grids Project Development Center offer?",
    answer:
      "IEEE-aligned (2023–2025) project support for B.Tech, M.Tech, and Ph.D. students in AI-driven load forecasting, fault detection, renewable integration, reinforcement learning control, and IEEE/Scopus/SCI publications."
  },
  {
    question: "What kinds of AI projects in smart grids are supported?",
    answer:
      "B.Tech projects focus on ML/DL load prediction, M.Tech on hybrid AI-RL optimization, and Ph.D research on GANs, Transformers, cyber-secure and predictive smart grid models."
  },
  {
    question: "Which tools and platforms are used?",
    answer:
      "MATLAB/Simulink, Python (TensorFlow, PyTorch), Arduino, Raspberry Pi, SCADA, MQTT, OPC-UA, AWS, Azure, and RL environments."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "All projects align with IEEE Transactions on Smart Grids, Power Systems, and Industrial Electronics (2023–2025)."
  },
  {
    question: "What academic support is provided?",
    answer:
      "Complete support including dataset preparation, AI modeling, hardware integration, IEEE reporting, and publication guidance."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "AI in Smart Grids – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) AI in Smart Grids Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. covering load forecasting, fault detection, renewable integration, and reinforcement learning control.";

const pageUrl =
  "/department/ai-electrical-engineering/ai-smart-grids";

const EEEAiSmartGridsProjectDevelopmentCenter = () => {
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

            {/* ⛔ ALL YOUR EXISTING CONTENT BELOW REMAINS UNCHANGED */}
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

export default EEEAiSmartGridsProjectDevelopmentCenter;
