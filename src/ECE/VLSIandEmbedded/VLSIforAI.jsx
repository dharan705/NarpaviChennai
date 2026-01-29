import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "VLSI for Artificial Intelligence Applications Project Development Center in Chennai",
  "IEEE VLSI AI Projects",
  "AI Hardware Accelerators VLSI",
  "Neuromorphic VLSI Projects",
  "FPGA AI Inference Engines",
  "ASIC AI Accelerator Projects",
  "Low Power AI VLSI Architectures",
  "3D VLSI AI Workloads",
  "Edge AI Hardware Accelerators",
  "Narpavi Research Institute VLSI AI"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the VLSI for Artificial Intelligence Applications Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s VLSI for Artificial Intelligence Applications Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in AI accelerators, neuromorphic VLSI, and low-power AI hardware."
  },
  {
    question:
      "What types of VLSI for AI projects are supported?",
    answer:
      "FPGA-based AI inference, ASIC AI accelerators, neuromorphic circuits, and 3D VLSI architectures."
  },
  {
    question:
      "Which tools are used?",
    answer:
      "VHDL/Verilog, Cadence, Synopsys, Xilinx Vivado, and FPGA/ASIC platforms."
  },
  {
    question:
      "Are projects IEEE aligned?",
    answer:
      "Yes, all projects are based on IEEE Transactions (2023–2025)."
  },
  {
    question:
      "Is journal publication support available?",
    answer:
      "Yes, IEEE, Scopus, and SCI publication support is provided."
  }
];

/* =========================
   📌 TITLE (SAME EVERYWHERE)
========================= */
const pageTitle =
  "VLSI for Artificial Intelligence Applications – Project Development Center in Chennai";

const pageUrl =
  "/department/vlsi-design/vlsi-ai-project-development-center-in-chennai";

const pageDescription =
  "VLSI for Artificial Intelligence Applications Project Development Center in Chennai offering IEEE-aligned AI accelerator, neuromorphic VLSI, FPGA inference, ASIC design, low-power AI hardware, and 3D VLSI projects for B.Tech, M.Tech, and Ph.D. students.";

const ECEVLSIAIProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      {/* =========================
          🔍 SEO TAG
      ========================= */}
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        url={pageUrl}
        faqs={faqs}
      />

      <Sidebar
        extraLinks={[
          { id: "ece", label: "ece", path: "/department?dept=ece" }
        ]}
      />

      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          {/* =========================
              ⬅ LEFT SIDEBAR
          ========================= */}
          <aside className="left-sidebar2">
           <Leftsidebar/>
          </aside>

          {/* =========================
              🧠 MAIN CONTENT
          ========================= */}
          <div className="ECEProjectDevelopmentCenter-center">
            {/* ✅ ONLY H1 UPDATED */}
            <h1>{pageTitle}</h1>
              <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the VLSI for Artificial Intelligence Applications – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop cutting-edge, IEEE-aligned (2023–2025) VLSI solutions for AI-driven applications in edge computing, robotics, healthcare, and autonomous vehicles.
              </p>
              <p>
                With expertise in Cadence, Synopsys, Xilinx Vivado, and FPGA/ASIC platforms, we deliver innovative solutions for AI accelerators, neuromorphic computing, and low-power AI hardware, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech VLSI for AI Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational VLSI projects for AI, such as FPGA-based AI inference or CNN implementation, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>Design using VHDL/Verilog for neural network acceleration</li>
                <li>Hardware prototypes on FPGA platforms for AI inference</li>
                <li>Performance analysis for throughput and power efficiency</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical AI-VLSI integration, and academic-ready output.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech VLSI for AI Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced AI accelerators and neuromorphic circuits.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions (2023–2025)</li>
                <li>Simulation of low-power CNN or reinforcement learning accelerators</li>
                <li>Hardware prototyping with Cadence, Synopsys, or Xilinx Vivado</li>
                <li>Integration with real-time speech/image recognition systems</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade AI-VLSI solutions.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. VLSI for AI Project Development</h2>
              <p>
                For doctoral scholars, our center supports cutting-edge VLSI research for AI applications.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>Advanced simulation of neuromorphic or 3D VLSI architectures</li>
                <li>Experimental validation with chip tape-out methodologies</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Patent filing support for innovative AI-VLSI designs</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – VLSI for AI Technologies vs. Applications</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>VLSI for AI Technology</th>
                      <th>Academic Research Applications</th>
                      <th>Industry Applications</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AI Accelerators (ASIC & FPGA)</td>
                      <td>Neural network processors for projects</td>
                      <td>Edge AI devices and data centers</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Xilinx Vivado, Synopsys</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Neuromorphic VLSI Design</td>
                      <td>Research in brain-inspired computing</td>
                      <td>AI hardware for robotics & IoT</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Cadence, Synopsys</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Low-Power VLSI for AI</td>
                      <td>Student projects in mobile AI systems</td>
                      <td>Wearable AI and smart healthcare chips</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Xilinx Vivado, Cadence</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Hardware for Deep Learning (CNN/RNN)</td>
                      <td>Algorithm-to-hardware mapping</td>
                      <td>AI engines in autonomous cars & drones</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Synopsys, TensorFlow</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>FPGA-Based AI Inference Engines</td>
                      <td>B.Tech FPGA prototyping projects</td>
                      <td>Industrial AI prototyping & deployment</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Xilinx Vivado, Intel Quartus</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>3D VLSI for AI Workloads</td>
                      <td>Ph.D. research on high-density systems</td>
                      <td>AI cloud processors and GPUs</td>
                      <td>Ph.D.</td>
                      <td>Cadence, Synopsys</td>
                      <td>Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned VLSI for AI Project Titles (2023–2025)</h2>
              <ul>
                <li>FPGA-Based CNN Accelerator for Real-Time Image Recognition (2023)</li>
                <li>Low-Power VLSI Architectures for Deep Learning Inference in Edge AI Devices (2023)</li>
                <li>Neuromorphic VLSI for Brain-Inspired AI Applications (2024)</li>
                <li>ASIC-Based AI Accelerator for Autonomous Vehicle Navigation (2024)</li>
                <li>3D VLSI Architectures for High-Performance AI Workloads (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute provides comprehensive support for VLSI for Artificial Intelligence Applications project development across B.Tech, M.Tech, and Ph.D. levels.
              </p>
              <p>
                With a focus on IEEE topics from 2023–2025, our team ensures scholars gain exposure to AI accelerator design, neuromorphic architectures, and edge-AI chip implementation, bridging academic research and industry applications.
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

          {/* =========================
              ➡ RIGHT SIDEBAR
          ========================= */}
          <aside className="right-sidebar">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/department/vlsi-design">VLSI Design & Embedded Systems</a></li>
              <li><a href="/department/vlsi-design/low-power-vlsi">Low Power VLSI Design</a></li>
              <li><a href="/department/vlsi-design/fpga-system-prototyping">FPGA-Based System Prototyping</a></li>
              <li><a href="/department/vlsi-design/embedded-vlsi-signal-processing">Embedded VLSI Signal Processing</a></li>
              <li><a href="/department/vlsi-design/hardware-software-co-design">Hardware–Software Co-Design</a></li>
              <li><a href="/department/vlsi-design/nanoelectronics-emerging-devices">Nanoelectronics & Emerging Devices</a></li>
              <li><a href="/department/vlsi-design/vlsi-ai">VLSI for AI Applications</a></li>
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

export default ECEVLSIAIProjectDevelopmentCenter;
