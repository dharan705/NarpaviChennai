import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Nanoelectronics and Emerging Devices Project Development Center in Chennai",
  "IEEE Nanoelectronics Projects",
  "CNTFET FinFET Nanoelectronics Projects",
  "Spintronics Research Projects",
  "Graphene Transistor Projects",
  "Quantum Dot Nanoelectronics",
  "Nanowire Electronics Projects",
  "Beyond CMOS Nano Devices",
  "B.Tech M.Tech PhD Nanoelectronics Projects",
  "Narpavi Research Institute Nanoelectronics"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Nanoelectronics and Emerging Devices Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Nanoelectronics and Emerging Devices Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in nano-scale transistor design, quantum devices, spintronics, and graphene-based electronics."
  },
  {
    question:
      "What types of Nanoelectronics projects are supported?",
    answer:
      "We support FinFET, CNTFET, graphene transistors, nanowire devices, spintronic memory, and quantum-dot device research."
  },
  {
    question:
      "Which tools are used?",
    answer:
      "MATLAB, COMSOL, Cadence, Synopsys, and TCAD are used for nano-scale simulations and device modeling."
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
  "Nanoelectronics and Emerging Devices – Project Development Center in Chennai";

const pageUrl =
  "/department/vlsi-design/nanoelectronics-emerging-devices-project-development-center-in-chennai";

const pageDescription =
  "Nanoelectronics and Emerging Devices Project Development Center in Chennai offering IEEE-aligned CNTFET, FinFET, spintronics, graphene, quantum-dot, nanowire, and beyond-CMOS nanoelectronics projects for B.Tech, M.Tech, and Ph.D. students.";

const ECENanoelectronicsEmergingDevicesProjectDevelopmentCenter = () => {
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
                <strong>Narpavi Research Institute</strong> presents the Nanoelectronics and Emerging Devices – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop cutting-edge, IEEE-aligned (2023–2025) solutions in nano-scale transistor design, quantum devices, spintronics, and graphene-based electronics for applications in wearables, biomedical implants, IoT sensors, and AI accelerators.
              </p>
              <p>
                With expertise in MATLAB, COMSOL, Cadence, Synopsys, and TCAD, we deliver innovative solutions for nanoelectronics simulations, device prototyping, and fabrication, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Nanoelectronics and Emerging Devices Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational nanoelectronics projects like FinFET modeling or CNTFET simulations, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>Device modeling using MATLAB, COMSOL, or Cadence</li>
                <li>Simulation of nano-scale transistors like FinFETs or nanowires</li>
                <li>Performance analysis for power and efficiency</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical nanoelectronics integration, and academic-ready output.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Nanoelectronics and Emerging Devices Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced nano-scale transistor architectures and fabrication methodologies.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions (2023–2025)</li>
                <li>Simulation of graphene transistors or nanowire-based circuits</li>
                <li>Prototyping with TCAD, Synopsys, or Cadence tools</li>
                <li>Integration with biomedical or RF systems</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade nanoelectronics solutions.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Nanoelectronics and Emerging Devices Project Development</h2>
              <p>
                For doctoral scholars, our center supports cutting-edge nanoelectronics research for quantum and neuromorphic systems.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>Advanced simulation of quantum-dot or spintronic devices</li>
                <li>Experimental validation with nano-fabrication techniques</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Patent filing support for innovative nanoelectronic designs</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Nanoelectronics & Emerging Device Technologies vs. Applications</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Nanoelectronics & Emerging Device Technology</th>
                      <th>Academic Research Applications</th>
                      <th>Industry Applications</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>FinFETs and Gate-All-Around (GAA) Devices</td>
                      <td>Device simulation and fabrication studies</td>
                      <td>Advanced processors (Intel, TSMC, Samsung)</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Cadence, TCAD</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Carbon Nanotube Field-Effect Transistors</td>
                      <td>Nano-scale transistor design projects</td>
                      <td>Low-power IoT devices and edge computing</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, COMSOL</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Spintronic Devices</td>
                      <td>Quantum computing and storage research</td>
                      <td>High-density memory and neuromorphic chips</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Synopsys, TCAD</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Nanowire and 2D Material Devices</td>
                      <td>Material characterization and nanofabrication</td>
                      <td>Flexible electronics and biomedical sensors</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>COMSOL, Cadence</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Graphene-Based Electronics</td>
                      <td>B.Tech and M.Tech nano device prototyping</td>
                      <td>High-frequency RF devices and wearables</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, Synopsys</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Quantum Dot and Single Electron Transistors</td>
                      <td>Ph.D. research on quantum tunneling effects</td>
                      <td>Secure cryptographic hardware and sensors</td>
                      <td>Ph.D.</td>
                      <td>TCAD, COMSOL</td>
                      <td>Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Nanoelectronics and Emerging Devices Project Titles (2023–2025)</h2>
              <ul>
                <li>Design and Simulation of CNTFET-Based Low-Power Logic Circuits (2023)</li>
                <li>Graphene Nanoribbon Transistors for High-Frequency Applications (2023)</li>
                <li>Spintronic Memory Devices for Neuromorphic Computing (2024)</li>
                <li>Quantum-Dot Based Single-Electron Transistors for Secure Computing (2024)</li>
                <li>Gate-All-Around Nanosheet Devices for AI Accelerators (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global leader in supporting Nanoelectronics and Emerging Devices projects for B.Tech, M.Tech, and Ph.D. scholars.
              </p>
              <p>
                With expertise in IEEE 2023–2025 aligned domains, we provide project development in nano-scale simulations, advanced material integration, fabrication methodologies, and AI-driven nano device architectures, enabling scholars to make impactful contributions in the semiconductor and nanoelectronics industries.
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

export default ECENanoelectronicsEmergingDevicesProjectDevelopmentCenter;
