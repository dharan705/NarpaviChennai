import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Low Power VLSI Architectures Project Development Center in Chennai",
  "IEEE Low Power VLSI Projects",
  "MTCMOS Power Gating VLSI",
  "FinFET Low Power VLSI Design",
  "Clock Gating Voltage Scaling VLSI",
  "Adiabatic Logic VLSI Projects",
  "AI Based Power Optimization VLSI",
  "B.Tech M.Tech PhD Low Power VLSI",
  "Narpavi Research Institute Low Power VLSI"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Low Power VLSI Architectures Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Low Power VLSI Architectures Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in energy-efficient VLSI design, including MTCMOS, power gating, and AI-based power optimization."
  },
  {
    question:
      "What types of Low Power VLSI projects are supported?",
    answer:
      "We support clock gating, voltage scaling, FinFET-based SoCs, AI-driven power optimization, and beyond-CMOS architectures."
  },
  {
    question:
      "Which technologies are used?",
    answer:
      "VHDL/Verilog, Cadence Virtuoso, Synopsys, Mentor Graphics, Xilinx ISE, and FPGA platforms are used."
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
  "Low Power VLSI Architectures – Project Development Center in Chennai";

const pageUrl =
  "/department/vlsi-design/low-power-vlsi-project-development-center-in-chennai";

const pageDescription =
  "Low Power VLSI Architectures Project Development Center in Chennai offering IEEE-aligned MTCMOS, power gating, clock gating, FinFET, AI-based power optimization, and energy-efficient VLSI projects for B.Tech, M.Tech, and Ph.D. students.";

const ECELowPowerVLSIProjectDevelopmentCenter = () => {
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
                <strong>Narpavi Research Institute</strong> presents the Low Power VLSI Architectures – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop cutting-edge, IEEE-aligned (2023–2025) low-power VLSI solutions for IoT, wearable electronics, and mobile computing.
              </p>
              <p>
                With expertise in VHDL/Verilog, Cadence, Synopsys, and FPGA platforms, we deliver innovative solutions for power leakage minimization, switching activity optimization, and transistor-level efficiency, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Low Power VLSI Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational low-power VLSI projects like clock gating or voltage scaling, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>Design using VHDL/Verilog and Xilinx ISE or Cadence Virtuoso</li>
                <li>Hardware prototypes on Spartan boards or ARM-based controllers</li>
                <li>Performance analysis for power efficiency</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical VLSI applications, and academic-ready output.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Low Power VLSI Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced system-level power optimization and hybrid modeling.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions (2023–2025)</li>
                <li>Simulation of SoCs or AI-assisted low-power logic</li>
                <li>Hardware prototyping with Cadence, Synopsys, or Mentor Graphics</li>
                <li>Integration with IoT or biomedical circuits</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade VLSI solutions.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Low Power VLSI Project Development</h2>
              <p>
                For doctoral scholars, our center supports cutting-edge VLSI research with innovative device-level optimization.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>Advanced simulation of beyond-CMOS or quantum-aware architectures</li>
                <li>Experimental validation with high-performance EDA tools</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Patent filing support for innovative VLSI designs</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Low Power VLSI Techniques vs. Applications</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Low Power VLSI Technique</th>
                      <th>Academic Research Applications</th>
                      <th>Industry Applications</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Multi-Threshold CMOS (MTCMOS)</td>
                      <td>Leakage power reduction models</td>
                      <td>Mobile SoC design</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Cadence Virtuoso, Synopsys</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Power Gating Techniques</td>
                      <td>Simulation-based research</td>
                      <td>Wearable health devices</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Xilinx ISE, VHDL</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Clock Gating & Dynamic Voltage Scaling</td>
                      <td>HDL-based coursework projects</td>
                      <td>Energy-efficient processors</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Verilog, Mentor Graphics</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Adiabatic Logic Circuits</td>
                      <td>Ph.D.-level transistor modeling</td>
                      <td>Green computing systems</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Cadence, Synopsys</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>FinFET & Beyond-CMOS Devices</td>
                      <td>Device-level exploration</td>
                      <td>Semiconductor fabrication</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Synopsys, TCAD</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>AI-Based Power Optimization</td>
                      <td>ML-integrated design projects</td>
                      <td>Smart IoT & Edge processors</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, Cadence</td>
                      <td>Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Low Power VLSI Project Titles (2023–2025)</h2>
              <ul>
                <li>Energy-Efficient Multi-Threshold CMOS VLSI Architectures for Mobile Devices (2023)</li>
                <li>AI-Assisted Clock Gating for IoT Embedded VLSI Chips (2024)</li>
                <li>Adiabatic Low-Power VLSI Circuits for Wearable Health Monitoring Systems (2024)</li>
                <li>FinFET-Based Ultra-Low Power VLSI Design for Biomedical Applications (2025)</li>
                <li>Quantum-Aware Low Power VLSI Architectures for Next-Gen Edge Devices (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in engineering research support, providing B.Tech, M.Tech, and Ph.D. students with end-to-end project development in software and hardware domains.
              </p>
              <p>
                With a strong focus on IEEE-standard research alignment (2023–2025), the institute enables students to master Low Power VLSI Architectures with practical implementation and world-class mentoring.
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

export default ECELowPowerVLSIProjectDevelopmentCenter;
