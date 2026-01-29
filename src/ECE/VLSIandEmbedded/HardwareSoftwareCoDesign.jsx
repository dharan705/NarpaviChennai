import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Hardware Software Co-Design Project Development Center in Chennai",
  "IEEE Hardware Software Co-Design Projects",
  "FPGA SoC Hardware Software Co-Design",
  "RTOS Embedded Co-Design Projects",
  "AI Enabled Hardware Software Co-Design",
  "Low Power Hardware Software Co-Design",
  "B.Tech M.Tech PhD Co-Design Projects",
  "Narpavi Research Institute Co-Design"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Hardware-Software Co-Design Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Hardware-Software Co-Design Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in FPGA-based embedded systems, SoC architectures, and AI-enabled co-design."
  },
  {
    question:
      "What types of Hardware-Software Co-Design projects are supported?",
    answer:
      "We support FPGA prototyping, IoT SoC design, RTOS-based systems, AI-enabled co-design, and low-power embedded architectures."
  },
  {
    question:
      "Which technologies are used?",
    answer:
      "VHDL/Verilog, Xilinx Vivado, Cadence, Synopsys, MATLAB/Simulink, and ARM-based platforms are used."
  },
  {
    question:
      "Are projects IEEE aligned?",
    answer:
      "Yes, all projects are derived from IEEE Transactions (2023–2025)."
  },
  {
    question:
      "Is publication support available?",
    answer:
      "Yes, IEEE, Scopus, and SCI journal publication support is provided."
  }
];

/* =========================
   📌 TITLE (SAME EVERYWHERE)
========================= */
const pageTitle =
  "Hardware–Software Co-Design – Project Development Center in Chennai";

const pageUrl =
  "/department/vlsi-design/hardware-software-co-design-project-development-center-in-chennai";

const pageDescription =
  "Hardware–Software Co-Design Project Development Center in Chennai offering IEEE-aligned FPGA, SoC, RTOS, AI-enabled co-design, and low-power embedded projects for B.Tech, M.Tech, and Ph.D. students.";

const ECEHardwareSoftwareCoDesignProjectDevelopmentCenter = () => {
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
                <strong>Narpavi Research Institute</strong> presents the Hardware-Software Co-Design – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop cutting-edge, IEEE-aligned (2023–2025) solutions for embedded systems, SoC architectures, and AI-enabled hardware acceleration in IoT, robotics, automotive, aerospace, and healthcare applications.
              </p>
              <p>
                With expertise in Xilinx Vivado, Cadence, Synopsys, and ARM-based platforms, we deliver innovative solutions for hardware-software partitioning, co-simulation, and real-time prototyping, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Hardware-Software Co-Design Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational co-design projects like FPGA-based embedded systems or IoT SoC design, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>Design using VHDL/Verilog and C programming for co-simulation</li>
                <li>Hardware prototypes on Xilinx FPGA platforms</li>
                <li>Performance analysis for real-time functionality</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical co-design integration, and academic-ready output.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Hardware-Software Co-Design Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced hardware-software partitioning and RTOS-based architectures.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions (2023–2025)</li>
                <li>Co-simulation of low-power AI devices or robotics systems</li>
                <li>Hardware prototyping with Xilinx Vivado, Cadence, or Synopsys</li>
                <li>Integration with RTOS or AI-enabled SoCs</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade co-design solutions.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Hardware-Software Co-Design Project Development</h2>
              <p>
                For doctoral scholars, our center supports cutting-edge co-design research for next-generation systems.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>Advanced simulation of AI-enabled or 3D SoC architectures</li>
                <li>Experimental validation with heterogeneous computing platforms</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Patent filing support for innovative co-design methodologies</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Hardware-Software Co-Design Technologies vs. Applications</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Hardware-Software Co-Design Technology</th>
                      <th>Academic Research Applications</th>
                      <th>Industry Applications</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>FPGA-Based Hardware-Software Systems</td>
                      <td>Student projects for real-time systems</td>
                      <td>AI accelerators, autonomous navigation</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Xilinx Vivado, VHDL/Verilog</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>SoC Design for Embedded AI</td>
                      <td>Research on processor-IP integration</td>
                      <td>Smartphones, edge AI, and robotics</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Cadence, Synopsys</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Low-Power Co-Design Architectures</td>
                      <td>Power-aware academic simulations</td>
                      <td>Wearables and healthcare electronics</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Xilinx Vivado, MATLAB</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Co-Design for Real-Time Operating Systems</td>
                      <td>RTOS-based embedded research</td>
                      <td>Automotive control systems, avionics</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>ARM platforms, Synopsys</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Hardware-Software Co-Simulation</td>
                      <td>B.Tech prototyping with HDL & C coding</td>
                      <td>Chip-level verification and validation</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, Cadence</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>AI-Enabled Co-Design Frameworks</td>
                      <td>Ph.D. research on AI-accelerated SoC</td>
                      <td>Industry AI frameworks and cloud systems</td>
                      <td>Ph.D.</td>
                      <td>Xilinx Vivado, TensorFlow</td>
                      <td>Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Hardware-Software Co-Design Project Titles (2023–2025)</h2>
              <ul>
                <li>FPGA-Based Hardware-Software Co-Design for Real-Time Image Processing (2023)</li>
                <li>Low-Power Co-Design Architectures for Embedded AI in IoT Devices (2023)</li>
                <li>Hardware-Software Partitioning for AI-Accelerated SoC Platforms (2024)</li>
                <li>Co-Design of RTOS-Enabled Embedded Systems for Automotive Safety (2024)</li>
                <li>AI-Driven Hardware-Software Co-Design Frameworks for Edge Computing (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute provides complete project development assistance in Hardware-Software Co-Design across B.Tech, M.Tech, and Ph.D. levels.
              </p>
              <p>
                Specializing in IEEE 2023–2025 aligned topics, our team ensures scholars gain expertise in SoC design, FPGA-based prototyping, RTOS co-integration, and AI-enabled embedded co-design, empowering students worldwide to become pioneers in Hardware-Software Co-Design technologies.
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
          <aside className="right-sidebar1">
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

export default ECEHardwareSoftwareCoDesignProjectDevelopmentCenter;
