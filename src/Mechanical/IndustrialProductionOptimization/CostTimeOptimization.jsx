import "../MEProjectDevelopmentCenter.scss";
import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Cost & Time Optimization in Manufacturing Project Development Center in Chennai",
  "Cost Optimization Manufacturing IEEE Projects 2023–2025",
  "Time Reduction in Production Systems",
  "Lean Six Sigma Manufacturing Projects",
  "AI Scheduling Manufacturing Optimization",
  "IoT Production Monitoring Projects",
  "Digital Twin Manufacturing Optimization",
  "Blockchain Supply Chain Cost Optimization",
  "Industry 4.0 Manufacturing Projects",
  "Narpavi Research Institute Manufacturing Projects"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question: "What services does the Cost & Time Optimization in Manufacturing Project Development Center offer?",
    answer:
      "Narpavi Research Institute supports IEEE-aligned (2023–2025) projects on lean manufacturing, Six Sigma, AI scheduling, IoT monitoring, digital twins, and blockchain-based optimization."
  },
  {
    question: "What types of projects are supported?",
    answer:
      "B.Tech, M.Tech, and Ph.D. projects covering smart factories, logistics, and manufacturing optimization."
  },
  {
    question: "Which tools are used?",
    answer:
      "MATLAB, Simulink, ARENA, Python, Arduino, Raspberry Pi, cloud platforms, and blockchain frameworks."
  },
  {
    question: "Are projects IEEE aligned?",
    answer:
      "Yes, projects align with IEEE Transactions (2023–2025) on Manufacturing, Automation, and Industrial Informatics."
  },
  {
    question: "Is publication support provided?",
    answer:
      "Yes, support is provided for IEEE, Scopus, Elsevier journals and patents."
  }
];

/* =========================
   📌 PAGE CONSTANTS
========================= */
const pageTitle =
  "Cost & Time Optimization in Manufacturing – Project Development Center in Chennai";

const pageDescription =
  "IEEE-aligned (2023–2025) Cost & Time Optimization in Manufacturing Project Development Center in Chennai for B.Tech, M.Tech, and Ph.D. using AI scheduling, IoT monitoring, digital twins, lean Six Sigma, and blockchain.";

const pageUrl =
  "/department/industrial-production-optimization/cost-time-optimization";

const MECostTimeOptimizationManufacturingProjectDevelopmentCenter = () => {
  return (
    <div className="MEProjectDevelopmentCenter">

      {/* 🔍 SEO */}
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        url={pageUrl}
        faqs={faqs}
      />

      <Sidebar />

      <div className="MEProjectDevelopmentCenter-main">
        <div className="MEProjectDevelopmentCenter-grid">

          {/* ⬅ LEFT SIDEBAR */}
          <aside className="left-sidebar2">
            <Leftsidebar />
          </aside>

          {/* 📑 CENTER CONTENT */}
          <div className="MEProjectDevelopmentCenter-center">
            {/* ✅ SINGLE H1 ONLY */}
            <h1>{pageTitle}</h1>
           <section className="MEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Cost & Time Optimization in Manufacturing Project Development Center, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on lean manufacturing, Six Sigma, AI-based scheduling, IoT monitoring, digital twins, and blockchain for cost and time efficiency.
              </p>
              <p>
                Our projects leverage MATLAB, ARENA, Python, and IoT platforms to address challenges in automotive, aerospace, electronics, and pharmaceutical industries, ensuring high-impact research and industrial applicability.
              </p>
            </section>

            <section className="MEProjectDevelopmentCenter-principles">
              <h2>Core Concepts of Cost & Time Optimization</h2>
              <ul>
                <li><strong>Lean Manufacturing:</strong> Waste reduction in inventory, motion, and defects.</li>
                <li><strong>Six Sigma & Quality Control:</strong> Minimizing variation, ensuring precision.</li>
                <li><strong>Simulation & Digital Twins:</strong> Virtual workflow optimization.</li>
                <li><strong>Just-In-Time (JIT):</strong> Synchronized production to reduce storage costs.</li>
                <li><strong>Automation & Robotics:</strong> Shortening cycle times, lowering labor costs.</li>
                <li><strong>Process Mapping & Reengineering:</strong> Redesigning for efficiency.</li>
                <li><strong>AI-Based Scheduling:</strong> Intelligent workload balancing.</li>
                <li><strong>Supply Chain Optimization:</strong> Cutting logistics costs, improving flow.</li>
                <li><strong>Energy Optimization:</strong> Reducing energy wastage in production.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-subtopics">
              <h2>Extended Project Areas</h2>
              <ul>
                <li>AI for production scheduling & resource allocation</li>
                <li>Digital twin optimization of factory layouts</li>
                <li>IoT-based cycle-time tracking systems</li>
                <li>Blockchain for transparent cost control in supply chains</li>
                <li>Predictive analytics for machine downtime reduction</li>
                <li>Cloud-based project cost monitoring dashboards</li>
                <li>Robotic process automation in repetitive tasks</li>
                <li>Energy-efficient manufacturing line optimization</li>
                <li>Just-in-Time systems with AI-driven forecasting</li>
                <li>Multi-objective optimization (quality, cost, time)</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-btech">
              <h2>B.Tech Cost & Time Optimization Project Development</h2>
              <p>For undergraduate students, our center focuses on foundational optimization projects aligned with IEEE topics.</p>
              <ul>
                <li>Select topics on IoT monitoring, lean systems, or AI scheduling</li>
                <li>Analyze workflow bottlenecks and production delays</li>
                <li>Simulate models using MATLAB or ARENA</li>
                <li>Prototype IoT sensors for machine run-time tracking</li>
                <li>Compare conventional vs. optimized outcomes</li>
              </ul>
              <p>Example: IoT-based cycle-time monitoring for manufacturing lines.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Cost & Time Optimization Project Development</h2>
              <p>For postgraduate students, projects focus on advanced optimization challenges.</p>
              <ul>
                <li>Identify inefficiencies in production chains</li>
                <li>Develop genetic algorithms or reinforcement learning for scheduling</li>
                <li>Integrate IoT and cloud dashboards for tracking</li>
                <li>Simulate digital twin models for optimization scenarios</li>
                <li>Benchmark against IEEE case studies</li>
              </ul>
              <p>Example: AI-driven scheduling for automotive production.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Cost & Time Optimization Project Development</h2>
              <p>For doctoral scholars, our center supports cutting-edge optimization research.</p>
              <ul>
                <li>Identify gaps in multi-objective optimization or blockchain integration</li>
                <li>Develop AI, ML, and game theory-based frameworks</li>
                <li>Combine lean, Six Sigma, and AI scheduling</li>
                <li>Validate with industry partners</li>
                <li>Publish in IEEE Transactions or Scopus journals</li>
              </ul>
              <p>Example: Hybrid lean-AI framework for manufacturing efficiency.</p>
            </section>

            <section className="MEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Technology & Industry Applications</h2>
              <div className="MEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Approach / Technology</th>
                      <th>Industry Use Case</th>
                      <th>Tools & Techniques</th>
                      <th>Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Lean Manufacturing</td>
                      <td>Automotive & FMCG</td>
                      <td>5S, Kaizen, VSM</td>
                      <td>Reduced waste, improved workflow</td>
                    </tr>
                    <tr>
                      <td>Six Sigma (DMAIC)</td>
                      <td>Aerospace & Precision Engineering</td>
                      <td>Statistical Analysis</td>
                      <td>Defect reduction, process stability</td>
                    </tr>
                    <tr>
                      <td>AI-Based Scheduling</td>
                      <td>Electronics & Textile</td>
                      <td>ML, GA, Reinforcement AI</td>
                      <td>Reduced lead time, adaptive planning</td>
                    </tr>
                    <tr>
                      <td>Digital Twins</td>
                      <td>Pharma & Heavy Industry</td>
                      <td>MATLAB, Simulink, Arena</td>
                      <td>Virtual testing, faster decision-making</td>
                    </tr>
                    <tr>
                      <td>IoT Monitoring</td>
                      <td>Smart Factories</td>
                      <td>Arduino, Raspberry Pi</td>
                      <td>Real-time cycle time control</td>
                    </tr>
                    <tr>
                      <td>Blockchain in Supply Chains</td>
                      <td>Food & Logistics</td>
                      <td>Hyperledger, Ethereum</td>
                      <td>Cost transparency, reduced fraud</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="MEProjectDevelopmentCenter-casestudies">
              <h2>Case Studies – Cost & Time Optimization in Action</h2>
              <ul>
                <li><strong>Toyota:</strong> Lean manufacturing reduced cost and cycle time.</li>
                <li><strong>GE Aviation:</strong> Digital twins optimized engine manufacturing.</li>
                <li><strong>Foxconn:</strong> AI-driven scheduling reduced delays by 20%.</li>
                <li><strong>Tesla:</strong> IoT-based monitoring minimized production downtime.</li>
                <li><strong>Amazon Robotics:</strong> Automation reduced warehousing cycle time by 30%.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-Based Production Scheduling for Automotive Manufacturing (2023)</li>
                <li>Digital Twin Optimization for Smart Factories (2024)</li>
                <li>Blockchain-Enabled Supply Chain Cost Optimization (2024)</li>
                <li>Multi-Objective Optimization of Production Lines Using Genetic Algorithms (2025)</li>
                <li>IoT-Based Real-Time Monitoring of Manufacturing Cycle Times (2023)</li>
                <li>Energy-Aware Manufacturing Optimization Using Reinforcement Learning (2024)</li>
                <li>Just-In-Time Manufacturing Supported by AI Forecasting (2025)</li>
                <li>Hybrid Lean–AI Framework for Manufacturing Efficiency (2025)</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-futurescope">
              <h2>Future Scope & Research Opportunities</h2>
              <ul>
                <li><strong>AI + Blockchain Integration:</strong> Transparent cost control.</li>
                <li><strong>Cyber-Physical Systems:</strong> Real-time workflow adjustments.</li>
                <li><strong>Industry 5.0 Focus:</strong> Balancing efficiency with sustainability.</li>
                <li><strong>Cloud-Driven Platforms:</strong> Global supply chain optimization.</li>
                <li><strong>Multi-Objective AI:</strong> Sustainable cost-time trade-offs.</li>
              </ul>
            </section>

            <section className="MEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in Cost & Time Optimization in Manufacturing project development for B.Tech, M.Tech, and Ph.D. students. With expertise in AI, IoT, Lean-Six Sigma, and digital twins, we provide IEEE-aligned (2023–2025) project support and publication services in high-impact journals (IEEE, SCI, Scopus). Our projects empower students to contribute to automotive, aerospace, and electronics innovations.
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
              <li><a href="/department/industrial-production-optimization">Industrial Production Optimization</a></li>
              <li><a href="/department/industrial-production-optimization/lean-manufacturing">Lean Manufacturing</a></li>
              <li><a href="/department/industrial-production-optimization/supply-chain-process">Supply Chain Process Optimization</a></li>
              <li><a href="/department/industrial-production-optimization/industrial-safety-ergonomics">Industrial Safety & Ergonomics</a></li>
              <li><a href="/department/industrial-production-optimization/smart-factory-systems">Smart Factory Systems</a></li>
              <li><a href="/department/industrial-production-optimization/cost-time-optimization">Cost & Time Optimization</a></li>
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

export default MECostTimeOptimizationManufacturingProjectDevelopmentCenter;
