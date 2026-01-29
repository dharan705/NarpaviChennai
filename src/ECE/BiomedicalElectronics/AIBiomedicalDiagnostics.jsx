import "../ECEProjectDevelopmentCenter.scss";
import Subsidebar from "../../pages/Subsidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* ✅ KEYWORDS ARRAY OBJECT */
const keywords = [
  "AI in Biomedical Diagnostics",
  "Artificial Intelligence in Healthcare Projects",
  "Deep Learning in Medical Imaging",
  "IEEE AI Biomedical Projects 2023–2025",
  "Machine Learning for Disease Prediction",
  "PhD Research in Biomedical AI",
  "Explainable AI in Healthcare",
  "AI Based Wearable Diagnostic Devices",
  "Personalized Medicine Using AI",
  "Healthcare AI Project Development Chennai"
];

const faqs = [
  {
    question: "What is the role of AI in biomedical diagnostics?",
    answer:
      "AI enables faster and accurate disease detection by analyzing medical images, biosignals, and patient data to assist clinical decision-making."
  },
  {
    question: "What topics do B.Tech projects cover?",
    answer:
      "Tumor detection, ECG/EEG anomaly classification, and disease prediction using machine learning with MATLAB and Python."
  },
  {
    question: "What are the M.Tech research areas?",
    answer:
      "Deep learning for cancer detection, MRI/CT image segmentation, and multimodal biomedical data fusion."
  },
  {
    question: "What are the Ph.D. research directions?",
    answer:
      "Explainable AI, federated learning, multi-omics analysis, and AI-driven predictive diagnostics."
  },
  {
    question: "Which tools are used?",
    answer:
      "TensorFlow, PyTorch, MATLAB, Python, R, Arduino, Raspberry Pi, LIME, and SHAP."
  }
];

const AIBiomedicalDiagnosticsProject = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">

      {/* ✅ SEO FIXED */}
      <SEO
        title="AI in Biomedical Diagnostics – Project Development Center in Chennai"
        description="IEEE-aligned AI biomedical diagnostics project development for B.Tech, M.Tech, and Ph.D. students using deep learning, signal processing, explainable AI, federated learning, and wearable healthcare systems."
        keywords={keywords}
        url="/department/biomedical-electronics/ai-biomedical-diagnostics–project-development-center-in-chennai"
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

          {/* 🔒 CENTER CONTENT (UNCHANGED STRUCTURE) */}
          <div className="ECEProjectDevelopmentCenter-center">

            {/* ✅ H1 MATCHES SEO */}
            <h1>
              AI in Biomedical Diagnostics – Project Development Center in Chennai
            </h1>   
             <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> leads in AI-powered biomedical diagnostics research and project development aligned with IEEE standards (2023–2025), providing end-to-end support for B.Tech, M.Tech, and Ph.D. students.[web:4][web:24]
              </p>
              <p>
                Projects integrate machine learning, deep learning, and signal processing across medical imaging, pathology, genomics, and wearable healthcare, enabling real-time disease prediction and high-accuracy diagnostic image interpretation.[web:11][web:24]
              </p>
            </section>

            {/* Comparative Technology-Industry Table */}
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
                      <td>Medical Image AI</td>
                      <td>Deep learning for MRI/CT/X-ray analysis</td>
                      <td>Radiology, cancer diagnostics</td>
                      <td>TensorFlow, PyTorch</td>
                    </tr>
                    <tr>
                      <td>Signal-Based AI</td>
                      <td>ECG, EEG, EMG anomaly detection</td>
                      <td>Cardiology, neurology</td>
                      <td>MATLAB, Python</td>
                    </tr>
                    <tr>
                      <td>Genomic AI</td>
                      <td>Multi-omics integration, AI-driven gene prediction</td>
                      <td>Precision medicine</td>
                      <td>R, Scikit-learn</td>
                    </tr>
                    <tr>
                      <td>AI in Wearables</td>
                      <td>Real-time health monitoring & anomaly detection</td>
                      <td>IoT-enabled healthcare devices</td>
                      <td>Arduino, Raspberry Pi</td>
                    </tr>
                    <tr>
                      <td>Explainable AI in Diagnostics</td>
                      <td>Transparent and ethical AI models</td>
                      <td>Clinical decision support</td>
                      <td>LIME, SHAP, XAI tools</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Project Development Cycles */}
            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Projects in AI Biomedical Diagnostics</h2>
              <p>
                Focus on fundamental AI applications such as tumor detection, ECG/EEG anomaly classification, and diabetes prediction using machine learning with MATLAB and Python.[web:4][web:11]
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Projects in AI Biomedical Diagnostics</h2>
              <p>
                Emphasize advanced algorithm design, deep learning-based cancer detection, MRI/CT image segmentation, and multimodal biomedical data fusion with careful model validation and clinical relevance.[web:11][web:17]
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Research in AI Biomedical Diagnostics</h2>
              <p>
                Explore novel architectures, explainable AI, federated learning, multi-omics analysis, and predictive diagnostics integrated with IoT-enabled healthcare and aligned with emerging IEEE and healthcare AI guidelines.[web:25][web:30][web:31]
              </p>
            </section>

            {/* IEEE Project Titles */}
            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Style Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-Enabled Tumor Detection from MRI Scans Using Deep Learning (2023)</li>
                <li>Machine Learning-Based ECG Anomaly Classification for Cardiac Diagnostics (2023)</li>
                <li>Explainable AI Framework for Clinical Decision Support Systems (2024)</li>
                <li>IoT-Integrated AI Diagnostics for Real-Time Patient Monitoring (2024)</li>
                <li>Federated Learning for Privacy-Preserved Biomedical Diagnostics (2025)</li>
                <li>Multimodal AI-Driven Diagnostic System for Personalized Medicine (2025)</li>
              </ul>
            </section>

            {/* About Section */}
            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                Narpavi Research Institute provides structured support for AI biomedical diagnostics projects targeting leading IEEE, Scopus, and SCI venues, aligning topics with current research trends in deep learning, explainable AI, and privacy-preserving medical AI.[web:24][web:33]
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

export default AIBiomedicalDiagnosticsProject;
