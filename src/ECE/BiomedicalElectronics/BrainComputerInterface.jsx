import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import { Link } from "react-router-dom";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

const faqs = [
  {
    question: "What are Brain-Computer Interface (BCI) Systems in Biomedical Electronics?",
    answer:
      "BCI systems enable direct communication between the brain and external devices by acquiring neural signals, extracting features, applying machine learning, and performing real-time actuation in applications such as prosthetics and neurofeedback therapy.",
  },
  {
    question: "What is the focus of B.Tech projects in BCI systems?",
    answer:
      "B.Tech projects focus on fundamental brain signal acquisition using EEG sensors, preprocessing, simple ML classifiers, and hardware interfacing with low-cost EEG devices for applications like robotic arm control and neurofeedback.",
  },
  {
    question: "What advanced topics are covered in M.Tech BCI projects?",
    answer:
      "M.Tech projects involve deep learning, hybrid signal processing, assistive technologies, rehabilitation devices, and real-time embedded hardware implementation to optimize BCI system performance.",
  },
  {
    question: "What research areas are emphasized in Ph.D. BCI projects?",
    answer:
      "Ph.D. research explores novel architectures, adaptive ML algorithms, multimodal integration (EEG, fNIRS, MEG), scalability, signal variability, and secure data transmission with alignment to high-impact IEEE publications.",
  },
  {
    question: "Which tools and platforms are commonly used in BCI project development?",
    answer:
      "Tools include MATLAB, Python, OpenBCI for EEG processing; TensorFlow and PyTorch for ML; ARM Cortex and FPGA for embedded systems; LabVIEW and Simulink for multimodal BCIs; and IoT protocols with blockchain for secure communication.",
  },
];

/* ✅ KEYWORDS AS ARRAY OBJECT (FOR SEO + SIDEBAR) */
const keywords = [
  "Brain-Computer Interface Systems in Biomedical Electronics",
  "BCI projects for engineering students",
  "EEG-based BCI development",
  "AI in Brain-Computer Interfaces",
  "Neuro-rehabilitation BCI devices",
  "IEEE BCI projects 2023–2025",
  "Ph.D. research in Brain-Computer Interfaces",
  "Narpavi Research Institute BCI support",
  "Biomedical Electronics and BCI projects",
  "Brain-controlled robotic systems",
];

const BrainComputerInterfaceProject = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">

      {/* ✅ SEO TAG (FIXED ONLY HERE) */}
      <SEO
        title="Brain-Computer Interface Systems in Biomedical Electronics – Project Development Center in Chennai"
        description="IEEE-aligned (2023–2025) Brain-Computer Interface projects using EEG, deep learning, embedded systems, and multimodal BCIs for prosthetics, neurofeedback, and rehabilitation."
        keywords={keywords}
        url="/department/biomedical-electronics/brain-computer-interface–project-development-center-in-chennai"
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
            <h1>
              Brain-Computer Interface Systems in Biomedical Electronics – Project Development Center in Chennai
            </h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> provides comprehensive
                research and project development support for Brain-Computer
                Interface Systems in Biomedical Electronics, aligned with IEEE
                Transactions (2023–2025).
              </p>
              <p>
                The focus spans neural signal acquisition, feature extraction,
                machine learning interpretation, and real-time device actuation
                for prosthetics, neurofeedback, communication aids, and adaptive
                control systems.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology Area</th>
                      <th>Research Focus</th>
                      <th>Industry Applications</th>
                      <th>Tools/Platforms</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>EEG Signal Processing</td>
                      <td>Noise reduction, feature extraction</td>
                      <td>Neuro-rehabilitation, gaming</td>
                      <td>MATLAB, Python, OpenBCI</td>
                    </tr>
                    <tr>
                      <td>Machine Learning for BCI</td>
                      <td>Classification, deep learning</td>
                      <td>Prosthetic control</td>
                      <td>TensorFlow, PyTorch</td>
                    </tr>
                    <tr>
                      <td>Embedded BCI Systems</td>
                      <td>Low-power real-time systems</td>
                      <td>Wearable healthcare</td>
                      <td>ARM Cortex, FPGA</td>
                    </tr>
                    <tr>
                      <td>Multimodal BCIs</td>
                      <td>EEG + fNIRS + EMG</td>
                      <td>Clinical diagnostics</td>
                      <td>LabVIEW, Simulink</td>
                    </tr>
                    <tr>
                      <td>Secure BCI Communication</td>
                      <td>Encryption & privacy</td>
                      <td>Healthcare IoT</td>
                      <td>IoT, Blockchain</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Projects</h2>
              <p>
                EEG-based signal acquisition, preprocessing, feature extraction,
                and basic ML classifiers with low-cost hardware.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Projects</h2>
              <p>
                Deep learning, hybrid signal processing, and real-time embedded
                BCI systems.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Research</h2>
              <p>
                Adaptive ML architectures, multimodal BCIs, scalability, and
                high-impact IEEE publications.
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
          <aside className="right-sidebar1">
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

export default BrainComputerInterfaceProject;
