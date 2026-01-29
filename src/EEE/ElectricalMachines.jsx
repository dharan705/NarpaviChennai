import "./EEEProjectDevelopmentCenter.scss";
import Subsidebar from ".././pages/Subsidebar";
import SEO from "../assets/SEO";
import Leftsidebar from "../assets/Leftsidebar";

/* ✅ Keywords as ARRAY OBJECT */
const keywords = [
  "Electrical Machines IEEE Projects",
  "Electrical Machines Project Development",
  "B.Tech Electrical Machines Projects",
  "M.Tech Motor Drive Research",
  "Ph.D. Electrical Machines IEEE Thesis Support",
  "Energy Efficient Motor IEEE Projects",
  "Fault Tolerant Motor Drives Research",
  "Permanent Magnet Motor IEEE Projects",
  "AI in Electrical Machines",
  "Narpavi Research Institute Electrical Machines"
];

const faqs = [
  {
    question: "What services does the Electrical Machines Project Development Center offer?",
    answer:
      "Narpavi Research Institute's Electrical Machines Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in motor design, control strategies, and energy-efficient systems for applications in electric vehicles, smart manufacturing, and renewable energy."
  },
  {
    question: "What types of electrical machines projects are supported?",
    answer:
      "We support B.Tech projects (induction motor analysis, BLDC drives), M.Tech projects (PMSM design, advanced control), and Ph.D. projects (AI-driven motor control, fault-tolerant drives) for applications in EVs, aerospace, and industrial automation."
  },
  {
    question: "Which technologies are used in electrical machines project development?",
    answer:
      "Our stack includes MATLAB/Simulink, ANSYS Maxwell, Motor-CAD, and embedded platforms like Arduino and Raspberry Pi for advanced electrical machine simulations and prototyping."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are based on IEEE Transactions (2023–2025), covering areas like energy-efficient motors, fault-tolerant systems, and AI-driven control, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer:
      "We offer end-to-end guidance, including topic selection, simulation, hardware prototyping, validation, documentation, and IEEE/Scopus journal publication support."
  }
];

const EEEElectricalMachinesProjectDevelopmentCenter = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">

      {/* ✅ SEO FIXED */}
      <SEO
        title="Electrical Machines – Project Development Center in Chennai"
        description="Electrical Machines project development center in Chennai for B.Tech, M.Tech, and Ph.D. students focusing on induction motors, PMSM, BLDC drives, AI-based motor control using MATLAB/Simulink, ANSYS Maxwell, Motor-CAD (IEEE 2023–2025)."
        url="/electrical-machines-project-development-center-chennai"
        keywords={keywords}
        faqs={faqs}
      />

      <Subsidebar
        extraLinks={[
          { id: "eee", label: "eee", path: "/department?dept=eee" }
        ]}
      />

      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* ✅ LEFT SIDEBAR */}
          <aside className="left-sidebar2">
           <Leftsidebar/>
          </aside>

          {/* ❌ CENTER CONTENT — NOT MODIFIED */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Electrical Machines – Project Development Center in Chennai</h1>
               <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Electrical Machines – Project Development Center, a dedicated hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop cutting-edge, IEEE-aligned (2023–2025) projects in motor design, control strategies, and energy-efficient systems.
              </p>
              <p>
                With expertise in MATLAB/Simulink, ANSYS Maxwell, and embedded platforms, we deliver innovative solutions for electric vehicles, smart manufacturing, and renewable energy, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-btech">
              <h2>B.Tech Electrical Machines Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational electrical machines projects like DC motor analysis or BLDC drives, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem identification and literature review from IEEE-based topics (2023–2025)</li>
                <li>Simulation using MATLAB/Simulink, ANSYS Maxwell, or Motor-CAD</li>
                <li>Prototype models of DC motors or induction machines</li>
                <li>Performance analysis for loss minimization and control</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical machine systems, and academic-ready output.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Electrical Machines Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced machine design and control strategies.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions (2023–2025)</li>
                <li>Finite element analysis and advanced control algorithms (FOC, DTC)</li>
                <li>Hardware-in-the-loop testing with embedded platforms</li>
                <li>Integration with renewable systems or EVs</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade machine solutions.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Electrical Machines Project Development</h2>
              <p>
                For doctoral scholars, our center supports cutting-edge research in electrical machines with cross-domain integration.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>Advanced simulation and hybrid optimization techniques</li>
                <li>Experimental validation for high-speed or fault-tolerant systems</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Patent filing support for innovative motor designs</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Electrical Machines Technologies vs. Applications</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology Domain</th>
                      <th>Industry Application</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Induction & Synchronous Machines</td>
                      <td>Power Plants, Industrial Drives</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, ANSYS Maxwell</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Permanent Magnet Synchronous Motors</td>
                      <td>Electric Vehicles, Aerospace</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Motor-CAD, MATLAB</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Switched Reluctance Motors</td>
                      <td>Renewable Energy, High-performance Drives</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>ANSYS Maxwell, Simulink</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Brushless DC Machines</td>
                      <td>Consumer Appliances, Wind Energy</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB/Simulink, Motor-CAD</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>AI-Controlled Drives</td>
                      <td>Smart Factories, Robotics</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, MATLAB</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>Fault-Tolerant Machines</td>
                      <td>Railways, Aviation, Military</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>ANSYS Maxwell, Simulink</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>Energy-Efficient Motor Design</td>
                      <td>EV Industry, Industrial Automation</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Motor-CAD, MATLAB</td>
                      <td>Medium</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="EEEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Electrical Machines Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-Based Fault Diagnosis in Induction Machines for Smart Manufacturing (2023)</li>
                <li>Design and Optimization of Permanent Magnet Synchronous Motor for EV Applications (2024)</li>
                <li>Energy-Efficient Brushless DC Motor Drives with IoT Integration (2025)</li>
                <li>Direct Torque Control of Switched Reluctance Motors using Fuzzy Logic (2023)</li>
                <li>Finite Element Analysis of High-Speed Induction Motors for Aerospace Applications (2024)</li>
                <li>AI-Enhanced Predictive Maintenance of Electrical Machines in Industry 4.0 (2025)</li>
                <li>Sensorless Control of PMSM Drives using Deep Learning Algorithms (2024)</li>
                <li>Design and Testing of Fault-Tolerant Motor Drives for Railway Applications (2025)</li>
              </ul>
            </section>

            <section className="EEEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a globally recognized research support center that provides academic and industrial project development services across multiple EEE domains. With expertise in Electrical Machines, the institute offers simulation labs, hardware facilities, domain experts, and IEEE-aligned methodologies to support students and researchers.
              </p>
              <p>
                With access to IEEE Transactions (2023–2025), we ensure every project meets international research and industry relevance.
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

          {/* ✅ RIGHT SIDEBAR */}
          <aside className="right-sidebar1">
            <ul>
              <li><a href="/department/electrical-machines">Electrical Machines</a></li>
              <li><a href="/department/electrical-machines/electrical-machines">Advanced Drives & Controllers</a></li>
              <li><a href="/department/electrical-machines/condition-monitoring-machines">Condition Monitoring of Machines</a></li>
              <li><a href="/department/electrical-machines/energy-efficient-motors">Energy Efficient Motors</a></li>
              <li><a href="/department/electrical-machines/fault-diagnosis-motor-generators">Fault Diagnosis of Motors & Generators</a></li>
              <li><a href="/department/electrical-machines/loss-minimization-techniques">Loss Minimization Techniques</a></li>
              <li><a href="/department/electrical-machines/special-electrical-machines">Special Electrical Machines</a></li>
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

export default EEEElectricalMachinesProjectDevelopmentCenter;
