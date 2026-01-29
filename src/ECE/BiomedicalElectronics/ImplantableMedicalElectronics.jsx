import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import { Link } from "react-router-dom";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

const faqs = [
  {
    question: "What are the key applications of implantable medical electronics?",
    answer:
      "Applications include cardiac support devices like pacemakers, neurological stimulators, hearing restoration implants, drug delivery systems, continuous glucose monitoring, and prosthetic control.",
  },
  {
    question: "What types of parameters do implantable devices monitor or control?",
    answer:
      "They monitor and control heart rhythm, neural activity, audio signals, drug dosage and release timing, glucose levels, and bio-signals for prosthetic control.",
  },
  {
    question: "What tools and platforms are used in implantable medical electronics projects?",
    answer:
      "B.Tech uses Arduino, Raspberry Pi, MATLAB, Proteus for prototypes and simulations; M.Tech utilizes MATLAB Simulink, Cadence VLSI, LabVIEW, and COMSOL Multiphysics for circuit design and biocompatible modeling.",
  },
  {
    question: "What areas do Ph.D. projects explore in implantable medical electronics?",
    answer:
      "Advanced research includes biocompatible power sources, AI-driven pacemaker control, nanotech-enabled drug delivery, implantable brain-computer interfaces, and secure blockchain data transmission.",
  },
  {
    question: "How does Narpavi Research Institute support implantable medical electronics research?",
    answer:
      "The institute provides comprehensive development support from circuit design and biocompatibility modeling to AI integration and guidance for IEEE-standard publications.",
  },
];

/* ✅ KEYWORDS ARRAY (USED ONLY FOR SEO + SIDEBAR) */
const keywords = [
  "Implantable Medical Electronics Projects",
  "Pacemaker IEEE Projects",
  "Cochlear Implant Research",
  "Deep Brain Stimulator Projects",
  "IoT Implantable Devices",
  "AI in Implantable Biomedical Systems",
  "Secure Implantable IoT Electronics",
  "Biocompatible Implant Research",
  "Narpavi Research Institute",
];

const ImplantableMedicalElectronicsProject = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">

      {/* ✅ SEO TAG (FIXED ONLY HERE) */}
      <SEO
        title="Implantable Medical Electronics – Project Development Center in Chennai"
        description="IEEE-aligned (2023–2025) implantable medical electronics projects on pacemakers, cochlear implants, neural stimulators, smart drug delivery, and AI-powered implants with secure IoT integration."
        keywords={keywords}
        url="/department/biomedical-electronics/implantable-medical-electronics–project-development-center-in-chennai"
        faqs={faqs}
      />

      <Sidebar
        extraLinks={[
          { id: "ece", label: "ece", path: "/department?dept=ece" },
        ]}
      />

      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          {/* ✅ LEFT SIDEBAR (CLASSNAME FIX ONLY) */}
          <aside className="left-sidebar2">
           <Leftsidebar/>
          </aside>

          {/* 🔒 CENTER CONTENT — NOT CHANGED */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Implantable Medical Electronics – Project Development Center in Chennai</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> fosters innovation
                aligned with IEEE standards (2023–2025) in miniaturized,
                biocompatible implantable devices for continuous health
                monitoring, disease management, and therapeutic interventions.
              </p>
              <p>
                Projects span pacemakers, cochlear implants, neural stimulators,
                implantable drug delivery systems, glucose sensors, and smart
                prosthetics tailored for long-term clinical use.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>
                Comparative Table – Applications of Implantable Medical
                Electronics
              </h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Application</th>
                      <th>Device Example</th>
                      <th>Parameters Monitored/Controlled</th>
                      <th>Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cardiac Support</td>
                      <td>Pacemakers, Defibrillators</td>
                      <td>Heart rhythm, electrical activity</td>
                      <td>Prevents sudden cardiac death</td>
                    </tr>
                    <tr>
                      <td>Neurological Disorders</td>
                      <td>Deep Brain Stimulators (DBS)</td>
                      <td>Neural activity modulation</td>
                      <td>Treats Parkinson’s, epilepsy</td>
                    </tr>
                    <tr>
                      <td>Hearing Restoration</td>
                      <td>Cochlear Implants</td>
                      <td>Audio signal processing</td>
                      <td>Restores hearing ability</td>
                    </tr>
                    <tr>
                      <td>Drug Delivery Systems</td>
                      <td>Programmable Drug Pumps</td>
                      <td>Dosage and release timing</td>
                      <td>Precise medication delivery</td>
                    </tr>
                    <tr>
                      <td>Diabetes Management</td>
                      <td>Implantable Glucose Sensors</td>
                      <td>Continuous glucose monitoring</td>
                      <td>Personalized diabetes care</td>
                    </tr>
                    <tr>
                      <td>Prosthetic Control</td>
                      <td>Implantable Nerve Interfaces</td>
                      <td>Bio-signal decoding</td>
                      <td>Enables bionic limb control</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Project Development Cycle</h2>
              <p>
                B.Tech work centers on external prototypes and implant-inspired
                simulations using Arduino, Raspberry Pi, MATLAB, and Proteus.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Project Development Cycle</h2>
              <p>
                M.Tech projects address miniaturized circuit design,
                biocompatibility modeling, and communication frameworks with
                MATLAB Simulink, Cadence VLSI, LabVIEW, and COMSOL.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Project Development Cycle</h2>
              <p>
                Ph.D. research explores biocompatible energy sources, AI-guided
                implant control, nanotechnology-enabled drug delivery, and
                blockchain-secured data flows.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>Low-Power Pacemaker Simulation with IoT Data Monitoring (2023)</li>
                <li>Wireless Implantable Drug Delivery System with Adaptive Control (2023)</li>
                <li>Deep Brain Stimulator with ML-Based Neural Modulation (2024)</li>
                <li>Implantable Glucose Sensor with Secure IoT Transmission (2024)</li>
                <li>AI-Driven Cochlear Implant with Real-Time Speech Enhancement (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute offers end-to-end guidance in
                implantable medical electronics, from circuit and packaging
                design to AI integration and IEEE-oriented publication support.
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

          {/* ✅ RIGHT SIDEBAR (CLASSNAME FIX ONLY) */}
          <aside className="right-sidebar">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/department/biomedical-electronics">Biomedical Electronics</a></li>
              <li><a href="/department/biomedical-electronics/ai-biomedical-diagnostics">AI Biomedical Diagnostics</a></li>
              <li><a href="/department/biomedical-electronics/biomedical-signal-acquisition">Biomedical Signal Acquisition</a></li>
              <li><a href="/department/biomedical-electronics/brain-computer-interface">Brain Computer Interface</a></li>
              <li><a href="/department/biomedical-electronics/iot-enabled-healthcare-devices">IoT Enabled Healthcare Devices</a></li>
              <li><a href="/department/biomedical-electronics/implantable-medical-electronics">Implantable Medical Electronics</a></li>
              <li><a href="/department/biomedical-electronics/wearable-biomedical-devices">Wearable Biomedical Devices</a></li>
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

export default ImplantableMedicalElectronicsProject;
