import "./Animation.scss";
import Subsidebar from "../../pages/Subsidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";
import Csesidebar from "../../assets/Csesidebar";

const keywords = [
  "Animations – Project Development Center in Chennai",
  "IEEE Animation Project Topics 2023–2025",
  "Unity Animation Projects for B.Tech M.Tech Ph.D.",
  "Blender 3D Animation Projects",
  "OpenGL Shader Projects",
  "AI-based Animation Generation",
  "Real-Time 3D Animation IEEE Projects",
  "AR/VR Animation Project Development",
  "Narpavi Research Institute Animation Services",
  "IEEE Academic Animation Development Center"
];

const faqs = [
  {
    question: "What services does the Animations Project Development Center offer?",
    answer:
      "Narpavi Research Institute's Animations Project Development Center supports B.Tech, M.Tech, and Ph.D. students in IEEE-aligned (2023–2025) animation projects including 2D/3D animation, AR/VR, and AI-driven animation systems."
  },
  {
    question: "What types of animation projects are supported?",
    answer:
      "We support 2D storytelling, educational animation, real-time simulation, AR/VR applications, and AI-powered animation systems."
  },
  {
    question: "Which technologies are used in animation project development?",
    answer:
      "Unity, Blender, Maya, Unreal Engine, OpenGL, Adobe After Effects, and AI frameworks like TensorFlow."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are selected from IEEE Transactions (2023–2025) ensuring academic and industry relevance."
  },
  {
    question: "What academic support is provided?",
    answer:
      "End-to-end guidance including topic selection, animation development, rendering, documentation, and IEEE/SCI publication support."
  }
];

const AnimationsProjectDevelopmentCenter = () => {
  return (
    <div className="MobileAppDevelopmentCenter">

      {/* ✅ SEO FIXED */}
      <SEO
        title="Animations – Project Development Center in Chennai"
        description="Animations – Project Development Center in Chennai offering IEEE 2023–2025 animation projects in Unity, Blender, AR/VR, OpenGL, and AI-based animation for B.Tech, M.Tech, and Ph.D. students."
        keywords={keywords}
        url="/department/animations-project-development-center-in-chennai"
        faqs={faqs}
      />

      <Subsidebar
        extraLinks={[
          { id: "cse", label: "CSE", path: "/department?dept=cse" }
        ]}
      />

      <div className="MobileAppDevelopmentCenter-main">
        <div className="MobileAppDevelopmentCenter-grid">

          {/* ✅ LEFT SIDEBAR */}
          <div className="left-sidebar2">
            <Leftsidebar/>
            <h3>🔑 Keywords</h3>
            <ul>
              {keywords.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* 🔒 CENTER CONTENT (UNCHANGED) */}
          <div className="MobileAppDevelopmentCenter-center">
            <h1>Animations – Project Development Center in Chennai</h1>
 <section className="MobileAppDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> - Project Development Center at Narpavi Research Institute provides an elite platform for students and scholars to explore, develop, and showcase high-quality animation-based academic projects aligned with recent innovations published in IEEE Transactions (2023–2025). Our center offers technical and creative guidance in developing 2D/3D animations, motion graphics, interactive animations, AR/VR simulations, and AI-powered animation systems.
              </p>
              <p>
                With the rising integration of animation across education, entertainment, healthcare, defense, marketing, and simulations, the Animations – Project Development Center bridges the gap between technical innovation and visual storytelling. Every project we deliver is benchmarked to IEEE quality, ensuring global academic relevance and industry scalability.
              </p>
              <p>
                We empower B.Tech, M.Tech, and Ph.D. candidates with cutting-edge tools like Unity, Blender, Maya, Unreal Engine, Adobe After Effects, and OpenGL—providing complete project development, simulation, and IEEE-format documentation support.
              </p>
            </section>

            <section className="MobileAppDevelopmentCenter-btech">
              <h2>B.Tech Animation Project Development</h2>
              <p>
                For undergraduate students, our center focuses on visual simulations, 2D/3D animations, or educational explainer videos aligned with IEEE topics.
              </p>
              <ul>
                <li>Topic selection from IEEE 2023–2025 trends</li>
                <li>Development using Blender, Adobe Animate, or OpenGL</li>
                <li>Features like 2D storytelling or interactive modules</li>
                <li>Storyboard creation and audio syncing</li>
                <li>Documentation and presentation support</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, creative design, and academic-ready output.
              </p>
            </section>

            <section className="MobileAppDevelopmentCenter-mtech">
              <h2>M.Tech Animation Project Development</h2>
              <p>
                For postgraduate students, we develop advanced animation projects like real-time simulations, AR animations, or game-based learning modules, aligned with IEEE research.
              </p>
              <ul>
                <li>IEEE topic selection with literature review</li>
                <li>Development with Unity 3D, Unreal Engine, or OpenGL</li>
                <li>Features like cloth simulation or inverse kinematics</li>
                <li>GPU-based rendering and testing</li>
                <li>Thesis support with journal-ready documentation</li>
              </ul>
              <p>
                The style focuses on scalable, real-time, and professional-grade animations.
              </p>
            </section>

            <section className="MobileAppDevelopmentCenter-phd">
              <h2>Ph.D. Animation Project Development</h2>
              <p>
                For doctoral scholars, our center focuses on pioneering animation research in AI-driven avatars, biomechanical modeling, and XR simulations.
              </p>
              <ul>
                <li>Problem formulation with IEEE 2023–2025 gap analysis</li>
                <li>Advanced AI or physics-based animation design</li>
                <li>Integration with AR/VR or deep learning models</li>
                <li>Validation with real-world or simulated datasets</li>
                <li>Publication assistance for IEEE/SCI journals</li>
              </ul>
              <p>
                The style emphasizes innovation, research-driven design, and publication-ready outcomes.
              </p>
            </section>

            <section className="MobileAppDevelopmentCenter-table">
              <h2>Technology vs. Industry Comparative Table</h2>
              <div className="MobileAppDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Animation Technology</th>
                      <th>Core Use Case in Industry</th>
                      <th>Academic Level</th>
                      <th>Primary Tools</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Adobe Animate / After Effects</td><td>2D Animation, Motion Graphics</td><td>B.Tech</td><td>Adobe CC Suite</td><td>Medium</td></tr>
                    <tr><td>Blender + Python</td><td>3D Modeling & Basic Game Animation</td><td>B.Tech & M.Tech</td><td>Blender, Python scripting</td><td>High</td></tr>
                    <tr><td>Unity 3D + C#</td><td>Interactive Animation, AR/VR Apps</td><td>M.Tech & Ph.D.</td><td>Unity, Visual Studio, XR Toolkit</td><td>Very High</td></tr>
                    <tr><td>Unreal Engine 5</td><td>Photorealistic Real-Time Simulations</td><td>M.Tech & Ph.D.</td><td>Unreal, Blueprints, Metahuman Creator</td><td>Expert</td></tr>
                    <tr><td>OpenGL + GLSL Shaders</td><td>Custom Graphics & GPU Rendering</td><td>M.Tech & Ph.D.</td><td>OpenGL, Visual C++, GLSL</td><td>Expert</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="MobileAppDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Animation Project Titles (2023–2025)</h2>
              <ul>
                <li>Real-Time Virtual Reality Animation for Interactive Learning Environments – 2023</li>
                <li>Deep Learning-Based Facial Animation Generator for Emotion Recognition – 2024</li>
                <li>Augmented Reality Animation for Industrial Training Simulation – 2025</li>
                <li>OpenGL-Based 3D Cloth and Fluid Simulation for Physics Education – 2023</li>
                <li>AI-Driven Lip-Sync Animation Using Audio2Face Model – 2024</li>
                <li>Digital Twin Animation for Smart City Visualization Using Unity – 2025</li>
                <li>Gamified Animation of Traffic Control Systems for Urban Simulation – 2023</li>
                <li>Gesture-Based Avatar Animation for Virtual Teaching Assistants – 2024</li>
                <li>Unreal Engine-Based Multi-User Animation Interaction for Remote Collaboration – 2025</li>
                <li>Motion-Captured Character Animation for Psychological Studies – 2023</li>
              </ul>
            </section>

            <section className="MobileAppDevelopmentCenter-excellence">
              <h2>Excellence in Animations Project Development</h2>
              <p>
                Narpavi Research Institute's Animations – Project Development Center integrates cutting-edge IEEE research with hands-on animation development, fostering scalable and innovative visual solutions.
              </p>
              <p>
                Our global mentorship ensures students excel in creating impactful animations for academia and industry, from educational modules to advanced AR/VR simulations.
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
            </section>          </div>

          {/* ✅ RIGHT SIDEBAR */}
          <div className="right-sidebar1">
              <Csesidebar/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AnimationsProjectDevelopmentCenter;
