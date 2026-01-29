import Subsidebar from ".././pages/Subsidebar";
import "./ECEProjectDevelopmentCenter.scss";
import { Link } from "react-router-dom";
import SEO from ".././assets/SEO";
import Leftsidebar from "../assets/Leftsidebar";

/* ✅ Keywords as ARRAY OBJECT (used in SEO + page) */
const keywords = [
  "Biomedical Electronics Project Development",
  "IEEE Biomedical Projects",
  "ECG Signal Processing Projects",
  "EEG BCI Development",
  "Wearable Health Monitoring",
  "Medical Imaging Projects",
  "IoT Healthcare Devices",
  "AI in Biomedical Engineering",
  "B.Tech Biomedical Projects",
  "M.Tech Biomedical Projects",
  "PhD Biomedical Research Projects"
];

const faqs = [
  {
    question: "What services does the Biomedical Electronics Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Biomedical Electronics Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) biomedical electronics projects, focusing on ECG/EEG processing, wearable sensors, medical imaging, and AI-driven diagnostics for industries like healthcare, telemedicine, and rehabilitation."
  },
  {
    question: "What types of biomedical electronics projects are supported?",
    answer:
      "We support B.Tech projects (basic ECG/EEG systems, wearable sensors), M.Tech projects (AI-based diagnostics, IoT integration), and Ph.D. projects (FPGA-based devices, advanced BCI) for applications in cardiology, neurology, and rural healthcare."
  },
  {
    question: "Which technologies are used in biomedical electronics project development?",
    answer:
      "Our stack includes MATLAB, LabVIEW, Proteus, Multisim, FPGA platforms, Python, and microcontrollers like Arduino, STM32, and PIC for scalable biomedical solutions."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are based on IEEE Transactions (2023–2025), covering areas like AI-powered diagnostics, IoT healthcare, and medical imaging, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer:
      "We offer end-to-end guidance, including topic selection, circuit design, algorithm development, validation, documentation, and IEEE/Scopus journal publication support."
  }
];

const ECEBiomedicalElectronicsProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">

      {/* ✅ SEO (FIXED as per rules) */}
      <SEO
        title="Biomedical Electronics – Project Development Center in Chennai"
        description="Biomedical Electronics project development for B.Tech, M.Tech & PhD students focusing on ECG, EEG, wearable health devices, medical imaging, AI diagnostics, IoT healthcare, and FPGA-based biomedical systems."
        url="/biomedical-electronics-project-development-center-chennai"
        keywords={keywords}
        faqs={faqs}
      />

      <Subsidebar
        extraLinks={[
          { id: "ece", label: "ece", path: "/department?dept=ece" }
        ]}
      />

      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          {/* ✅ LEFT SIDEBAR (classname fixed) */}
          <aside className="left-sidebar2">
           <Leftsidebar/>
            <h3>🔑 Keywords</h3>
            <ul>
              {keywords.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </aside>

          {/* ❌ CENTER CONTENT — NOT TOUCHED */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Biomedical Electronics – Project Development Center in Chennai</h1>
             <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Biomedical Electronics – Project Development Center, a global hub empowering B.Tech, M.Tech, and Ph.D. students to develop innovative, IEEE-aligned (2023–2025) biomedical electronics projects, focusing on diagnostic devices, therapeutic systems, and AI-enabled medical solutions.
              </p>
              <p>
                Through expert mentorship and advanced tools like MATLAB, LabVIEW, and FPGA platforms, we enable students to create scalable biomedical solutions for industries like healthcare, telemedicine, and rehabilitation, bridging academic excellence with real-world applications.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Technology vs. Industry Comparative Table – Biomedical Electronics</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology</th>
                      <th>Relevant Industry Applications</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ECG Signal Processing</td>
                      <td>Cardiology, Remote Health Monitoring</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, LabVIEW</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>EEG & Brain-Computer Interfaces (BCI)</td>
                      <td>Neurotechnology, Rehabilitation Devices</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>OpenBCI, MATLAB</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>Wearable Health Sensors</td>
                      <td>Sports Science, Preventive Healthcare</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Arduino, STM32</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Medical Imaging Enhancement</td>
                      <td>Radiology, Diagnostic Centers</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>ITK, 3D Slicer</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>Implantable Biomedical Devices</td>
                      <td>Surgery, Chronic Disease Management</td>
                      <td>Ph.D.</td>
                      <td>FPGA, Cadence</td>
                      <td>Expert</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Biomedical Electronics Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational biomedical electronics projects like ECG/EEG systems or wearable sensors, aligned with IEEE topics.
              </p>
              <ul>
                <li>Topic selection from IEEE 2023–2025 trends</li>
                <li>Development using Proteus, Multisim, or MATLAB</li>
                <li>Features like signal processing or sensor integration</li>
                <li>Hardware implementation with Arduino or STM32</li>
                <li>Documentation and IEEE-format presentation support</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Biomedical Electronics Project Development</h2>
              <p>
                For postgraduate students, we develop advanced biomedical electronics projects like AI-based diagnostics or IoT-integrated monitoring, aligned with IEEE research.
              </p>
              <ul>
                <li>IEEE topic selection with literature review</li>
                <li>Development with AI, ML, or embedded systems</li>
                <li>Integration with IoT or cloud platforms</li>
                <li>Thesis support with journal-ready documentation</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Biomedical Electronics Project Development</h2>
              <p>
                For doctoral scholars, our center focuses on pioneering biomedical electronics research in FPGA-based devices, advanced BCI, and AI-driven diagnostics.
              </p>
              <ul>
                <li>Problem formulation with IEEE gap analysis</li>
                <li>Advanced system design with FPGA or custom PCBs</li>
                <li>Clinical-level prototyping and validation</li>
                <li>Publication and patent filing assistance</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Biomedical Electronics Project Titles (2023–2025)</h2>
              <ul>
                <li>FPGA-Based Real-Time ECG Signal Processing</li>
                <li>AI-Enabled Portable Ultrasound Enhancement</li>
                <li>IoT-Integrated Wearable Health Monitoring</li>
                <li>Brain-Computer Interface for Rehabilitation</li>
                <li>Wireless Body Area Network for Emergency Care</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute is a global hub for IEEE-compliant biomedical electronics project development, combining academic rigor, clinical relevance, and industry exposure.
              </p>
            </section>

            {/* FAQ UI only — Schema handled by SEO */}
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

          {/* ✅ RIGHT SIDEBAR (classname fixed) */}
          <aside className="right-sidebar1">
            <ul>
              <li><a href="/department/biomedical-electronics">Biomedical Electronics</a></li>
              <li><a href="/department/biomedical-electronics/ai-biomedical-diagnostics">AI Biomedical Diagnostics</a></li>
              <li><a href="/department/biomedical-electronics/biomedical-signal-acquisition">Biomedical Signal Acquisition</a></li>
              <li><a href="/department/biomedical-electronics/brain-computer-interface">Brain Computer Interface</a></li>
              <li><a href="/department/biomedical-electronics/iot-enabled-healthcare-devices">IoT Enabled Healthcare Devices</a></li>
              <li><a href="/department/biomedical-electronics/implantable-medical-electronics">Implantable Medical Electronics</a></li>
              <li><a href="/department/biomedical-electronics/wearable-biomedical-devices">Wearable Biomedical Devices</a></li>
            </ul>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default ECEBiomedicalElectronicsProjectDevelopmentCenter;
