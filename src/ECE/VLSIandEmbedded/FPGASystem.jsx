import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "FPGA-Based System Prototyping Project Development Center in Chennai",
  "IEEE FPGA System Prototyping Projects",
  "VHDL Verilog FPGA Design",
  "Zynq SoC FPGA Prototyping",
  "High Level Synthesis FPGA Projects",
  "Partial Reconfiguration FPGA",
  "FPGA Hardware Software Co-Design",
  "B.Tech M.Tech PhD FPGA Projects",
  "Narpavi Research Institute FPGA"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the FPGA-Based System Prototyping Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s FPGA-Based System Prototyping Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in FPGA-based digital design, hardware/software co-design, and real-time system prototyping."
  },
  {
    question:
      "What types of FPGA-Based System Prototyping projects are supported?",
    answer:
      "We support digital logic design, signal processing, hardware/software co-design, AI acceleration, partial reconfiguration, and cloud FPGA projects."
  },
  {
    question:
      "Which technologies are used?",
    answer:
      "VHDL, Verilog, SystemVerilog, Xilinx Vivado, Intel Quartus, Zynq SoCs, and HLS tools are used."
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
      "Yes, complete IEEE, Scopus, and SCI journal publication support is provided."
  }
];

/* =========================
   📌 TITLE (SAME EVERYWHERE)
========================= */
const pageTitle =
  "FPGA-Based System Prototyping – Project Development Center in Chennai";

const pageUrl =
  "/department/vlsi-design/fpga-system-prototyping-project-development-center-in-chennai";

const pageDescription =
  "FPGA-Based System Prototyping Project Development Center in Chennai offering IEEE-aligned VHDL, Verilog, Zynq SoC, HLS, partial reconfiguration, and real-time FPGA projects for B.Tech, M.Tech, and Ph.D. students.";

const ECEFPGASystemPrototypingProjectDevelopmentCenter = () => {
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
                <strong>Narpavi Research Institute</strong> presents the FPGA-Based System Prototyping – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop cutting-edge, IEEE-aligned (2023–2025) FPGA-based solutions for digital design, embedded systems, and real-time applications.
              </p>
              <p>
                With expertise in VHDL/Verilog, Xilinx Vivado, Intel Quartus, and high-level synthesis tools, we deliver innovative solutions for hardware/software co-design, rapid prototyping, and system validation, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech FPGA-Based System Prototyping Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational FPGA projects like digital logic or signal processing, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>Design using VHDL/Verilog or SystemVerilog</li>
                <li>Hardware prototypes on Spartan or Artix FPGA boards</li>
                <li>Performance analysis for functionality and efficiency</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical FPGA applications, and academic-ready output.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech FPGA-Based System Prototyping Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced FPGA prototyping with system-level integration.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions (2023–2025)</li>
                <li>Simulation of hardware/software co-design or AI-driven systems</li>
                <li>Hardware prototyping with Zynq SoCs or Intel Stratix FPGAs</li>
                <li>Integration with IoT or communication systems</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade FPGA solutions.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. FPGA-Based System Prototyping Project Development</h2>
              <p>
                For doctoral scholars, our center supports cutting-edge FPGA research with innovative architectures.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>Advanced simulation of partial reconfiguration or cloud FPGA</li>
                <li>Experimental validation with Xilinx UltraScale+ or Intel Agilex</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Patent filing support for innovative FPGA designs</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – FPGA Prototyping Technologies vs. Applications</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>FPGA-Based Prototyping Technology</th>
                      <th>Academic Research Applications</th>
                      <th>Industry Applications</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>HDL-Based Digital System Design</td>
                      <td>Logic design coursework projects</td>
                      <td>Processor/ASIC prototyping</td>
                      <td>B.Tech/M.Tech</td>
                      <td>VHDL/Verilog, Xilinx Vivado</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Hardware/Software Co-Design</td>
                      <td>Embedded project validation</td>
                      <td>IoT hardware accelerators</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Zynq SoCs, Intel Quartus</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Partial Reconfiguration in FPGA</td>
                      <td>Adaptive computing Ph.D. projects</td>
                      <td>Cloud FPGA in data centers</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Xilinx Vivado, SystemVerilog</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>High-Level Synthesis (HLS) Tools</td>
                      <td>Algorithm-to-hardware mapping</td>
                      <td>AI/ML hardware acceleration</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Vivado HLS, Intel HLS</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>FPGA-Based DSP Implementations</td>
                      <td>Signal processing curriculum projects</td>
                      <td>5G communication base stations</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, Xilinx Vivado</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>FPGA-SoC Integration</td>
                      <td>Robotics & control research</td>
                      <td>Automotive embedded platforms</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Zynq SoCs, Intel Stratix</td>
                      <td>Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned FPGA-Based System Prototyping Project Titles (2023–2025)</h2>
              <ul>
                <li>FPGA-Based Reconfigurable Architectures for 5G Signal Processing (2023)</li>
                <li>Hardware/Software Co-Design of IoT Protocols on FPGA SoCs (2024)</li>
                <li>High-Level Synthesis Driven FPGA Prototyping for AI Acceleration (2024)</li>
                <li>Partial Reconfiguration FPGA Architectures for Energy-Efficient Computing (2025)</li>
                <li>FPGA-Based Hardware Acceleration for Real-Time Biomedical Imaging (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute delivers end-to-end project development support in FPGA-Based System Prototyping for B.Tech, M.Tech, and Ph.D. scholars worldwide.
              </p>
              <p>
                By aligning with IEEE Transactions (2023–2025), the institute ensures software and hardware co-integration, real-time prototyping, and global publication support, making students industry and research ready.
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

export default ECEFPGASystemPrototypingProjectDevelopmentCenter;
