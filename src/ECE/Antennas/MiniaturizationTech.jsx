import "../ECEProjectDevelopmentCenter.scss";
import Subsidebar from "../../pages/Subsidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* ✅ KEYWORDS ARRAY OBJECT */
const keywords = [
  "Antenna Miniaturization Techniques",
  "Fractal Antenna Design",
  "Metamaterial Antennas",
  "Dielectric Loading Antennas",
  "Slot Antenna Miniaturization",
  "Substrate Integrated Antennas SIW",
  "Compact Antennas for IoT",
  "Biomedical Miniaturized Antennas",
  "CubeSat Compact Antennas",
  "CST HFSS Antenna Simulation"
];

const faqs = [
  {
    question: "What are antenna miniaturization techniques?",
    answer:
      "Methods to reduce antenna size while maintaining performance, such as fractal geometries, metamaterials, dielectric loading, slotting, and substrate integrated techniques."
  },
  {
    question: "What do B.Tech projects focus on in antenna miniaturization?",
    answer:
      "Compact monopole, microstrip, and slot antenna designs using CST, HFSS, and MATLAB."
  },
  {
    question: "What advanced topics are covered in M.Tech antenna miniaturization projects?",
    answer:
      "Fractal and metamaterial antennas, multiband compact designs, and biomedical optimization."
  },
  {
    question: "What are the research areas in Ph.D. antenna miniaturization projects?",
    answer:
      "Metasurfaces, dielectric resonator miniaturization, ML optimization, and CubeSat antennas."
  },
  {
    question: "Which tools are used for antenna miniaturization projects?",
    answer:
      "CST, HFSS, MATLAB, CAD tools, and optimization frameworks."
  }
];

const AntennaMiniaturizationProject = () => {
  return (
    <div className="ECEProjectDevelopment">

      {/* ✅ SEO FIXED */}
      <SEO
        title="Antenna Miniaturization Techniques – Project Development Center in Chennai"
        description="IEEE-aligned antenna miniaturization project development for B.Tech, M.Tech, and Ph.D. students using CST, HFSS, MATLAB covering fractal antennas, metamaterials, dielectric loading, slot antennas, SIW and CubeSat designs."
        keywords={keywords}
        url="/antenna-miniaturization-project-development"
        faqs={faqs}
      />

      <Subsidebar
        extraLinks={[
          { id: "ece", label: "ece", path: "/department?dept=ece" }
        ]}
      />

      <div className="ECEProjectDevelopment-main">
        <div className="ECEProjectDevelopment-grid">

          {/* ✅ LEFT SIDEBAR */}
          <aside className="left-sidebar2">
           <Leftsidebar/>
          </aside>

          {/* 🔒 CENTER CONTENT (UNCHANGED) */}
          <div className="ECEProjectDevelopment-center">

            {/* ✅ H1 MATCHES SEO */}
            <h1>
              Antenna Miniaturization Techniques – Project Development Center in Chennai
            </h1>
                <section className="ECEProjectDevelopment-intro">
              <p>
                <strong>Narpavi Research Institute</strong> fosters innovation in antenna miniaturization, guiding students through compact, efficient design techniques vital for modern IoT, biomedical, and satellite communication systems.
              </p>
              <p>
                Our projects focus on the latest IEEE research trends (2023–2025) and provide hands-on training from simulation to prototype development.
              </p>
            </section>

            <section className="ECEProjectDevelopment-table">
              <h2>Comparative Technology – Industry Table</h2>
              <div className="ECEProjectDevelopment-tableContainer">
                <table>
                  <thead>
                    <tr>
                      <th>Technique</th>
                      <th>Core Concept</th>
                      <th>Industry Application</th>
                      <th>Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Fractal Geometry</td>
                      <td>Self-similar compact design</td>
                      <td>IoT, Wearables</td>
                      <td>Size reduction with multiband capability</td>
                    </tr>
                    <tr>
                      <td>Metamaterial Antennas</td>
                      <td>Engineered negative-index materials</td>
                      <td>5G/6G devices, CubeSats</td>
                      <td>High performance in compact form</td>
                    </tr>
                    <tr>
                      <td>Dielectric Loading</td>
                      <td>High permittivity materials</td>
                      <td>Biomedical implants, RFID</td>
                      <td>Miniaturization with trade-off in efficiency</td>
                    </tr>
                    <tr>
                      <td>Slot Antennas</td>
                      <td>Introducing slots in patch antennas</td>
                      <td>Smartphones, Wireless Systems</td>
                      <td>Size reduction and bandwidth enhancement</td>
                    </tr>
                    <tr>
                      <td>Substrate Integrated</td>
                      <td>Embedded antenna structures</td>
                      <td>Satellite communication, Aerospace</td>
                      <td>Lightweight and space-saving solutions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ECEProjectDevelopment-btechCycle">
              <h2>B.Tech Project Cycle</h2>
              <p>Design and simulation of compact antennas using CST, HFSS, and MATLAB with emphasis on dielectric selection and patch modifications for miniaturization.</p>
            </section>

            <section className="ECEProjectDevelopment-mtechCycle">
              <h2>M.Tech Project Cycle</h2>
              <p>Advanced antenna designs employing fractal geometries, metamaterials, and multiband optimization for biomedical and wearable applications.</p>
            </section>

            <section className="ECEProjectDevelopment-phdCycle">
              <h2>Ph.D. Project Cycle</h2>
              <p>Cutting-edge research on metasurface antennas, dielectric resonators, machine learning optimized designs, and CubeSat-ready antennas with IEEE journal support.</p>
            </section>

            <section className="ECEProjectDevelopment-projectTitles">
              <h2>IEEE Project Titles (2023-2025)</h2>
              <ul>
                <li>Fractal Geometry Antenna for IoT Applications</li>
                <li>Metamaterial Inspired Compact Antenna Design</li>
                <li>Dielectric Loading Techniques in Biomedical Antennas</li>
                <li>Slot Antenna Miniaturization for Smartphones</li>
                <li>Substrate Integrated Antennas for Aerospace Communication</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopment-about">
              <h2>About Narpavi Research Institute</h2>
              <p>Narpavi Research Institute provides specialized mentorship and research support in antenna miniaturization techniques, fostering innovations that meet industry standards and publication goals.</p>
            </section>

            <section className="ECEProjectDevelopment-faq">
              <h2>FAQs</h2>
              {faqs.map((faq, idx) => (
                <details key={idx}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </section>
          </div>

          {/* ✅ RIGHT SIDEBAR */}
          <aside className="right-sidebar1">
            <h3>Related Services</h3>
            <ul>
              <li><a href="/department/antenna-design">Antenna Design</a></li>
              <li><a href="/department/antenna-design/iot-wearable-antennas">IoT & Wearable Antennas</a></li>
              <li><a href="/department/antenna-design/mimo-antenna-systems">MIMO Antenna Systems</a></li>
              <li><a href="/department/antenna-design/antenna-miniaturization">Antenna Miniaturization Techniques</a></li>
              <li><a href="/department/antenna-design/reconfigurable-antenna-design">Reconfigurable Antenna Design</a></li>
              <li><a href="/department/antenna-design/satellite-space-antenna-technology">Satellite & Space Antenna Technology</a></li>
              <li><a href="/department/antenna-design/smart-antennas-5g-6g">Smart Antennas for 5G & 6G</a></li>
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

export default AntennaMiniaturizationProject;
