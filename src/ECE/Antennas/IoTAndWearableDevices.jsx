import "../ECEProjectDevelopmentCenter.scss";
import Subsidebar from "../../pages/Subsidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";

/* ✅ KEYWORDS ARRAY OBJECT */
const keywords = [
  "Antennas for IoT Wearable Devices",
  "Textile Fabric Antennas",
  "Implantable Antennas IEEE",
  "Reconfigurable Wearable Antennas",
  "CST HFSS ADS Antenna Design",
  "WBAN Optimized Antennas",
  "RFID Tag Antennas IoT",
  "Flexible Antenna Design",
  "Biocompatible Antenna Materials",
  "IoT Antenna Miniaturization"
];

const faqs = [
  {
    question: "What are antennas for IoT and wearable devices?",
    answer:
      "These are compact, flexible, and energy-efficient antennas designed for smartwatches, fitness trackers, biomedical implants, RFID tags, and smart home applications."
  },
  {
    question: "What topics do B.Tech projects cover in this domain?",
    answer:
      "Basic designs of low-profile patch antennas, monopole antennas for IoT nodes, and textile antennas for wearables using CST, HFSS, and ADS."
  },
  {
    question: "What advanced areas are explored in M.Tech projects?",
    answer:
      "Flexible and reconfigurable antennas, multi-band designs, and machine learning-based optimization for wearable and biomedical applications."
  },
  {
    question: "What are the research focuses in Ph.D. projects?",
    answer:
      "Biocompatible substrates, energy harvesting antennas, WBAN-optimized designs, and AI-driven antenna performance optimization."
  },
  {
    question: "Which tools are used for antenna design?",
    answer:
      "CST, HFSS, ADS, and machine learning frameworks for optimization."
  }
];

const AntennasIoTWearableDevicesProject = () => {
  return (
    <div className="ECEProjectDevelopment">

      {/* ✅ SEO FIXED */}
      <SEO
        title="Antennas for IoT and Wearable Devices – Project Development Center in Chennai"
        description="IEEE-aligned Antennas for IoT and Wearable Devices project development for B.Tech, M.Tech, and Ph.D. students using CST, HFSS, ADS for textile, implantable, reconfigurable, RFID, and WBAN antenna design."
        keywords={keywords}
        url="/antennas-iot-wearable-devices-project-development"
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

          {/* CENTER CONTENT */}
          <div className="ECEProjectDevelopment-center">

            {/* ✅ H1 MATCHES SEO */}
            <h1>
              Antennas for IoT and Wearable Devices – Project Development Center in Chennai
            </h1>
              <section className="ECEProjectDevelopment-intro">
              <p>
                <strong>Narpavi Institute</strong> provides end-to-end support in designing compact, flexible, and high-performance antennas for IoT and wearable applications aligned with IEEE standards (2023 – 2025).
              </p>
              <p>
                Our focus lies in miniaturization, energy efficiency, multi-band operation, and integration of biocompatible materials for real-world wearable and biomedical devices.
              </p>
            </section>
            <section className="ECEProjectDevelopment-table">
              <h2>Comparative Technology & Industry Table</h2>
              <div className="ECEProjectDevelopment-tableContainer">
                <table>
                  <thead>
                    <tr>
                      <th>Antenna Type</th>
                      <th>Core Feature</th>
                      <th>Industry Applications</th>
                      <th>Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Textile/Fabric Antennas</td>
                      <td>Flexible, washable</td>
                      <td>Smart Clothing, Fitness Devices</td>
                      <td>Lightweight, user-friendly communication</td>
                    </tr>
                    <tr>
                      <td>Implantable Antennas</td>
                      <td>Biocompatible materials</td>
                      <td>Biomedical Implants</td>
                      <td>Safe data transfer inside the body</td>
                    </tr>
                    <tr>
                      <td>Reconfigurable Wearable Antennas</td>
                      <td>Dynamic frequency and pattern adjustment</td>
                      <td>Smartwatches, AR/VR</td>
                      <td>Adaptive connectivity for varying environments</td>
                    </tr>
                    <tr>
                      <td>RFID/Tag Antennas</td>
                      <td>Miniaturized and low cost</td>
                      <td>Smart homes, Logistics</td>
                      <td>Reliable short-range communication</td>
                    </tr>
                    <tr>
                      <td>WBAN Optimized Antennas</td>
                      <td>Body-centric design</td>
                      <td>Healthcare, Sports Analytics</td>
                      <td>Efficient communication within personal networks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section className="ECEProjectDevelopment-btechCycle">
              <h2>B.Tech Cycle</h2>
              <p>
                Students learn antenna design concepts and prototype low-profile patch, monopole, and textile antennas using CST, HFSS, and ADS.
              </p>
            </section>
            <section className="ECEProjectDevelopment-mtechCycle">
              <h2>M.Tech Cycle</h2>
              <p>
                Advanced antenna designs including flexible, reconfigurable, and multi-band models with a focus on wearable and biomedical applications, using ML for optimization and practical prototyping.
              </p>
            </section>
            <section className="ECEProjectDevelopment-phdCycle">
              <h2>Ph.D. Cycle</h2>
              <p>
                Research advances on biocompatible antennas, energy harvesting, WBAN communication, and AI-driven optimization techniques, supported by state-of-the-art facilities for prototyping and validation.
              </p>
            </section>
            <section className="ECEProjectDevelopment-projects">
              <h2>IEEE Project Titles (2023 - 2025)</h2>
              <ul>
                <li>Flexible Textile Antennas for Smart Clothing</li>
                <li>Biocompatible Implantable Antenna Design</li>
                <li>Reconfigurable Antennas for Wearable Devices</li>
                <li>RFID Tag Antennas for Smart Logistics</li>
                <li>WBAN Optimized Antennas for Healthcare Monitoring</li>
              </ul>
            </section>
            <section className="ECEProjectDevelopment-about">
              <h2>About Narpavi Institute</h2>
              <p>
                Narpavi Institute offers premier support for IoT and wearable antenna design, fostering innovation and real-world applications aligned with IEEE standards and industry needs.
              </p>
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

export default AntennasIoTWearableDevicesProject;
