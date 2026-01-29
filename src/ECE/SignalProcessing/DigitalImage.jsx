import Sidebar from "../../MainPublicationServices/PublicationServicesSidebar";
import "../ECEProjectDevelopmentCenter.scss";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* =========================
   🔑 KEYWORDS ARRAY OBJECT
========================= */
const keywords = [
  "Digital Image and Video Signal Processing Project Development Center in Chennai",
  "IEEE Image and Video Processing Projects",
  "CNN GAN Image Processing IEEE",
  "FPGA Image Video Processing Projects",
  "Video Stabilization IEEE Projects",
  "Wavelet Transform Image Coding",
  "Medical Imaging Video Processing",
  "B.Tech M.Tech PhD Image Video Projects",
  "Narpavi Research Institute Image Processing"
];

/* =========================
   ❓ FAQs
========================= */
const faqs = [
  {
    question:
      "What services does the Digital Image and Video Signal Processing Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Digital Image and Video Signal Processing Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in image enhancement, video processing, deep CNNs, GAN-based restoration, and FPGA/DSP implementations."
  },
  {
    question:
      "What types of Digital Image and Video Signal Processing projects are supported?",
    answer:
      "We support image enhancement, compression, video stabilization, deep learning-based image classification, and GAN-based restoration projects."
  },
  {
    question:
      "Which technologies are used?",
    answer:
      "MATLAB, Python (OpenCV), TensorFlow, FPGA (VHDL/Verilog), and DSP platforms are used."
  },
  {
    question:
      "Are projects IEEE aligned?",
    answer:
      "Yes, all projects are based on IEEE Transactions and Conferences (2023–2025)."
  },
  {
    question:
      "Is publication support available?",
    answer:
      "Yes, we provide complete IEEE, Scopus, and SCI journal publication support."
  }
];

/* =========================
   📌 TITLE (SAME EVERYWHERE)
========================= */
const pageTitle =
  "Digital Image and Video Signal Processing – Project Development Center in Chennai";

const pageUrl =
  "/department/signal-processing/digital-image-video-signal-processing-project-development-center-in-chennai";

const pageDescription =
  "Digital Image and Video Signal Processing Project Development Center in Chennai offering IEEE-aligned image enhancement, video stabilization, CNN, GAN, FPGA, and DSP-based projects for B.Tech, M.Tech, and Ph.D. students.";

const ECEDigitalImageVideoSignalProcessingProjectDevelopmentCenter = () => {
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
            {/* ✅ ONLY H1 TEXT UPDATED */}
            <h1>{pageTitle}</h1>
            
            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Digital Image and Video Signal Processing – Project Development Center, a specialized hub empowering B.Tech, M.Tech, and Ph.D. scholars to develop cutting-edge, IEEE-aligned (2023–2025) solutions in wavelet transform-based coding, deep CNNs, video motion estimation, FPGA/DSP implementations, and GAN-based image restoration for medical imaging, surveillance, autonomous vehicles, and augmented reality.
              </p>
              <p>
                With expertise in MATLAB, Python (OpenCV), VHDL/Verilog, and deep learning frameworks, we deliver innovative solutions for advanced image and video processing, ensuring academic rigor and industrial applicability.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Digital Image and Video Signal Processing Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational projects like image enhancement and compression, aligned with IEEE topics.
              </p>
              <ul>
                <li>Problem definition and literature review from IEEE-based topics (2023–2025)</li>
                <li>Image enhancement and filtering using MATLAB or Python (OpenCV)</li>
                <li>Compression techniques for multimedia applications</li>
                <li>Basic FPGA implementation for image processing</li>
                <li>Documentation in IEEE format for academic submission</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, practical image processing, and academic-ready output.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Digital Image and Video Signal Processing Project Development</h2>
              <p>
                For postgraduate students, projects involve advanced domains like video stabilization and deep learning-based classification.
              </p>
              <ul>
                <li>Project selection from IEEE Transactions and Conferences (2023–2025)</li>
                <li>Video stabilization using MATLAB or Python</li>
                <li>Deep learning-based image classification with TensorFlow</li>
                <li>FPGA/DSP hardware acceleration for real-time processing</li>
                <li>Publication support for Scopus/SCI indexed papers</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade processing solutions.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Digital Image and Video Signal Processing Project Development</h2>
              <p>
                For doctoral scholars, our center supports cutting-edge research in deep neural networks and GAN-based restoration.
              </p>
              <ul>
                <li>Research gap identification from IEEE Transactions (2023–2025)</li>
                <li>Deep neural networks for video analysis using TensorFlow</li>
                <li>GAN-based image restoration for augmented reality</li>
                <li>Compressive video sensing for high-resolution reconstruction</li>
                <li>Publication support for IEEE/SCI journals</li>
                <li>Patent filing support for innovative processing methodologies</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table – Digital Image and Video Signal Processing Technologies vs. Industry Applications</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology</th>
                      <th>Industry Application</th>
                      <th>Key Benefit</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Wavelet Transform-Based Coding</td>
                      <td>Multimedia Compression (JPEG2000, MPEG)</td>
                      <td>Efficient compression with high quality</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, Python</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Deep CNNs for Image Processing</td>
                      <td>Medical Imaging, Security</td>
                      <td>High-accuracy object/feature recognition</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, Python (OpenCV)</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Video Motion Estimation</td>
                      <td>Autonomous Vehicles, Robotics</td>
                      <td>Real-time movement detection and tracking</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>MATLAB, Python</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>FPGA/DSP Implementations</td>
                      <td>Hardware-Accelerated Processing</td>
                      <td>Low-latency, real-time video processing</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>VHDL/Verilog, DSP platforms</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>GAN-based Image Restoration</td>
                      <td>Augmented Reality, Forensics</td>
                      <td>High-quality image/video reconstruction</td>
                      <td>Ph.D.</td>
                      <td>TensorFlow, PyTorch</td>
                      <td>Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Digital Image and Video Signal Processing Project Titles (2023–2025)</h2>
              <ul>
                <li>GAN-Based Video Super-Resolution for Surveillance Applications (2023)</li>
                <li>FPGA-Accelerated Image Denoising Using Wavelet Thresholding (2023)</li>
                <li>CNN-Driven Automated Tumor Detection in Medical Imaging (2024)</li>
                <li>Real-Time Video Stabilization for UAV Systems (2024)</li>
                <li>Deep Reinforcement Learning in Video Object Tracking (2025)</li>
                <li>Compressive Sensing Techniques for High-Resolution Video Reconstruction (2025)</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-about">
              <h2>About Narpavi Research Institute</h2>
              <p>
                At Narpavi Research Institute, we are committed to advancing Digital Image and Video Signal Processing by offering end-to-end support in software simulation and hardware implementation.
              </p>
              <p>
                Our mentoring ensures that B.Tech, M.Tech, and Ph.D. students achieve IEEE-standard innovations that bridge academia and industry.
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
          <aside className="right-sidebar1">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/department/signal-processing">Signal Processing Project Development Center</a></li>
              <li><a href="/department/signal-processing/adaptive-filtering-applications">Adaptive Filtering Applications</a></li>
              <li><a href="/department/signal-processing/ai-driven-signal-enhancement">AI-Driven Signal Enhancement Techniques</a></li>
              <li><a href="/department/signal-processing/biomedical-signal-processing">Biomedical Signal Processing</a></li>
              <li><a href="/department/signal-processing/compressive-sensing-signal-processing">Compressive Sensing Signal Processing</a></li>
              <li><a href="/department/signal-processing/digital-image-video-signal-processing">Digital Image & Video Signal Processing</a></li>
              <li><a href="/department/signal-processing/speech-audio-signal-processing">Speech & Audio Signal Processing</a></li>
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

export default ECEDigitalImageVideoSignalProcessingProjectDevelopmentCenter;
