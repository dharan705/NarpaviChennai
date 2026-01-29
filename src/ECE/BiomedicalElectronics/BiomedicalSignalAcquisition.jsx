import "../ECEProjectDevelopmentCenter.scss";
import Subsidebar from "../../pages/Subsidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* ✅ KEYWORDS ARRAY OBJECT */
const keywords = [
  "Biomedical Signal Acquisition Projects",
  "Biomedical Signal Processing IEEE Projects",
  "ECG EEG EMG Signal Processing",
  "AI in Biomedical Signal Processing",
  "IoT Biomedical Signal Acquisition",
  "Real Time Healthcare Monitoring Projects",
  "Blockchain in Biomedical Data",
  "Wearable Biomedical Signal Devices",
  "IEEE Biomedical Electronics Projects",
  "Biomedical Signal Processing Project Development Chennai"
];

const faqs = [
  {
    question: "What are the typical biomedical signals acquired?",
    answer:
      "Signals include ECG, EEG, EMG, PPG, GSR, SpO₂, and blood pressure using electrodes or optical sensors."
  },
  {
    question: "Which signal processing techniques are applied?",
    answer:
      "Filtering, FFT, wavelet transforms, feature extraction, machine learning, and AI-based predictive modeling."
  },
  {
    question: "What platforms are used?",
    answer:
      "Arduino, Raspberry Pi, MATLAB, Proteus, LabVIEW for B.Tech and MATLAB Simulink, Python, TensorFlow, COMSOL for advanced work."
  },
  {
    question: "What are Ph.D. research areas?",
    answer:
      "AI-driven signal processing, blockchain-secured data, multimodal fusion, and edge computing for real-time monitoring."
  },
  {
    question: "How does Narpavi Research Institute support projects?",
    answer:
      "Through hardware integration, signal preprocessing, AI modeling, and IEEE-standard publication guidance."
  }
];

const BiomedicalSignalAcquisitionProject = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">

      {/* ✅ SEO FIXED */}
      <SEO
        title="Biomedical Signal Acquisition and Processing – Project Development Center in Chennai"
        description="IEEE-aligned biomedical signal acquisition and processing project development for B.Tech, M.Tech, and Ph.D. students using ECG, EEG, EMG, PPG, AI, IoT, blockchain, and edge computing for healthcare monitoring."
        keywords={keywords}
        url="/department/biomedical-electronics/biomedical-signal-acquisition-and-processing–project-development-center-in-chennai"
        faqs={faqs}
      />

      <Subsidebar
        extraLinks={[
          { id: "ece", label: "ece", path: "/department?dept=ece" }
        ]}
      />

      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          {/* ✅ LEFT SIDEBAR */}
          <aside className="left-sidebar2">
           <Leftsidebar/>
          </aside>

          {/* 🔒 CENTER CONTENT */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>
              Biomedical Signal Acquisition and Processing – Project Development Center in Chennai
            </h1>
                <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> supports IEEE-aligned (2023–2025) projects in biomedical signal acquisition and processing, focusing on capturing ECG, EEG, EMG, PPG, GSR, SpO₂, and blood pressure signals for advanced healthcare monitoring and diagnostics.[web:40][web:45]
              </p>
              <p>
                Emphasis is placed on robust acquisition hardware, noise reduction, real-time processing, and AI-driven analytics to enhance the reliability of wearable and IoT-based healthcare technologies.[web:44][web:47]
              </p>
            </section>

            {/* Comparative Table */}
            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Biomedical Signal Acquisition & Processing</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Signal Type</th>
                      <th>Acquisition Method</th>
                      <th>Processing Technique</th>
                      <th>Application</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ECG (Electrocardiogram)</td>
                      <td>Electrodes on chest/limbs</td>
                      <td>Filtering, R-peak detection, HRV</td>
                      <td>Heart disease detection, arrhythmia</td>
                    </tr>
                    <tr>
                      <td>EEG (Electroencephalogram)</td>
                      <td>Scalp electrodes</td>
                      <td>FFT, wavelet transform, ML models</td>
                      <td>Brain activity, epilepsy monitoring</td>
                    </tr>
                    <tr>
                      <td>EMG (Electromyogram)</td>
                      <td>Surface/intramuscular electrodes</td>
                      <td>Signal rectification, envelope detection</td>
                      <td>Muscle activity, prosthetic control</td>
                    </tr>
                    <tr>
                      <td>PPG (Photoplethysmogram)</td>
                      <td>Optical sensors (IR, LED)</td>
                      <td>Filtering, peak detection, HR analysis</td>
                      <td>Wearable pulse oximeters, fitness</td>
                    </tr>
                    <tr>
                      <td>GSR (Galvanic Skin Response)</td>
                      <td>Electrodes on fingers</td>
                      <td>Normalization, feature extraction</td>
                      <td>Stress analysis, emotion recognition</td>
                    </tr>
                    <tr>
                      <td>SpO₂ & BP Signals</td>
                      <td>Optical & pressure sensors</td>
                      <td>AI-driven predictive modeling</td>
                      <td>Oxygen monitoring, hypertension care</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* B.Tech Cycle */}
            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Project Development Cycle</h2>
              <p>
                Projects focus on basic acquisition and processing such as ECG noise removal, EEG stress detection, wearable PPG heart-rate monitoring, and EMG muscle activity tracking using Arduino, Raspberry Pi, MATLAB, Proteus, and LabVIEW.[web:40][web:51]
              </p>
            </section>

            {/* M.Tech Cycle */}
            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Project Development Cycle</h2>
              <p>
                Advanced AI-integrated signal processing includes seizure prediction, ECG classification, prosthetic control, and multisensor cardiovascular monitoring with MATLAB Simulink, TensorFlow, Python, and COMSOL.[web:45][web:52]
              </p>
            </section>

            {/* Ph.D. Cycle */}
            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Project Development Cycle</h2>
              <p>
                Research explores AI-driven processing pipelines, blockchain-secured biomedical data, multimodal fusion, edge computing for real-time monitoring, and sophisticated denoising algorithms aimed at top IEEE and Elsevier journals.[web:43][web:49][web:55]
              </p>
            </section>

            {/* IEEE Project Titles */}
            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>ECG Signal Noise Cancellation using Adaptive Filters (2023)</li>
                <li>IoT-Enabled PPG Monitoring System for Remote Healthcare (2023)</li>
                <li>Deep Learning-Based EEG Epileptic Seizure Prediction (2024)</li>
                <li>EMG-Based Prosthetic Arm with Cloud Integration (2024)</li>
                <li>Secure Blockchain-Enabled ECG Data Transmission (2024)</li>
                <li>AI-Driven Stress Detection using Multimodal Biomedical Signals (2025)</li>
                <li>Edge Computing-Based Real-Time EEG Processing for Brain Monitoring (2025)</li>
                <li>Multisensor Fusion for Cardiovascular and Neurological Disease Diagnosis (2025)</li>
              </ul>
            </section>

            {/* About Section */}
            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute delivers end-to-end guidance in biomedical signal acquisition and processing, from hardware design to AI modeling and publication, helping students build wearable, IoT, and edge-computing healthcare systems aligned with current research.[web:44][web:47][web:53]
              </p>
            </section>

            {/* FAQs */}
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

export default BiomedicalSignalAcquisitionProject;
