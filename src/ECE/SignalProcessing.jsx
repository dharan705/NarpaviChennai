import Subsidebar from ".././pages/Subsidebar";
import "./ECEProjectDevelopmentCenter.scss";
import SEO from "../assets/SEO";
import Leftsidebar from "../assets/Leftsidebar";

/* ✅ Keywords as ARRAY OBJECT (single source of truth) */
const keywords = [
  "Signal Processing Project Development",
  "IEEE Signal Processing Projects",
  "DSP Project Development",
  "Image Processing IEEE 2025",
  "MATLAB DSP Projects",
  "FPGA Signal Processing",
  "AI in Signal Processing",
  "B.Tech DSP Projects",
  "M.Tech Signal Processing",
  "PhD Signal Processing Research"
];

const faqs = [
  {
    question: "What services does the Signal Processing Project Development Center offer?",
    answer:
      "Narpavi Research Institute’s Signal Processing Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects in digital signal processing, image processing, audio processing, and biomedical signal analysis for industries like telecommunications, healthcare, and surveillance."
  },
  {
    question: "What types of signal processing projects are supported?",
    answer:
      "We support B.Tech projects (noise cancellation, image enhancement), M.Tech projects (adaptive filtering, AI-based signal classification), and Ph.D. projects (biomedical signal analysis, 5G beamforming) for applications in medical imaging, IoT, and 5G networks."
  },
  {
    question: "Which technologies are used in signal processing project development?",
    answer:
      "Our stack includes MATLAB, Python, GNU Radio, FPGA, DSP kits, and AI frameworks like TensorFlow for advanced signal processing solutions."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are based on IEEE Transactions (2023–2025), covering areas like DSP, image processing, and AI-driven signal analysis, ensuring academic and industry relevance."
  },
  {
    question: "What support is provided for academic submissions?",
    answer:
      "We offer end-to-end guidance, including topic selection, algorithm design, simulation, hardware implementation, validation, documentation, and IEEE/Scopus journal publication support."
  }
];

const ECESignalProcessingProjectDevelopmentCenter = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">

      {/* ✅ SEO FIXED */}
      <SEO
        title="Signal Processing – Project Development Center in Chennai"
        description="Signal Processing project development for B.Tech, M.Tech, and Ph.D. students focusing on DSP, image processing, audio processing, biomedical signals, AI-based signal analysis, and IEEE-aligned research (2023–2025)."
        url="/signal-processing-project-development-center-chennai"
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

          {/* ✅ LEFT SIDEBAR (ONLY CHANGE) */}
          <aside className="left-sidebar2">
           <Leftsidebar/>
          </aside>

          {/* ❌ CENTER CONTENT — NOT MODIFIED */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Signal Processing – Project Development Center in Chennai</h1>
  <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Signal Processing – Project Development Center</strong> is a
                specialized initiative by Narpavi Research Institute, delivering
                world-class IEEE-aligned (2023–2025) project development services
                for B.Tech, M.Tech, and Ph.D. scholars.
              </p>
              <p>
                Our expertise spans digital signal processing, image & video
                processing, speech and audio analytics, biomedical signal analysis,
                and AI-driven signal intelligence with real-time implementation.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Signal Processing Technologies vs Industry Applications</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology</th>
                      <th>Application</th>
                      <th>Level</th>
                      <th>Tools</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Digital Signal Processing</td>
                      <td>Audio, Video, Telecom</td>
                      <td>B.Tech/M.Tech</td>
                      <td>MATLAB, Python</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Image & Video Processing</td>
                      <td>Surveillance, Medical Imaging</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>OpenCV, MATLAB</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Real-Time DSP</td>
                      <td>Embedded & IoT Systems</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>FPGA, DSP Kits</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>AI-Based Signal Processing</td>
                      <td>Diagnostics, Prediction</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>TensorFlow, PyTorch</td>
                      <td>Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopmentCenter-btech">
              <h2>B.Tech Signal Processing Projects</h2>
              <ul>
                <li>Noise cancellation & image enhancement</li>
                <li>MATLAB & Python simulations</li>
                <li>DSP kit / FPGA implementation</li>
                <li>IEEE-format documentation</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-mtech">
              <h2>M.Tech Signal Processing Projects</h2>
              <ul>
                <li>Adaptive & wavelet-based algorithms</li>
                <li>AI-assisted signal classification</li>
                <li>Real-time FPGA / GPU processing</li>
                <li>Scopus / SCI publication support</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-phd">
              <h2>Ph.D. Signal Processing Research</h2>
              <ul>
                <li>Research gap identification (IEEE 2023–2025)</li>
                <li>Novel DSP & AI methodologies</li>
                <li>Experimental validation & patents</li>
                <li>IEEE / SCI journal writing</li>
              </ul>
            </section>

            {/* FAQ UI (Schema injected via SEO component) */}
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

          {/* ✅ RIGHT SIDEBAR (ONLY CHANGE) */}
          <aside className="right-sidebar">
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

export default ECESignalProcessingProjectDevelopmentCenter;
