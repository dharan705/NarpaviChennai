import "./DevOps.scss";
import Subsidebar from "../../pages/Subsidebar";
import SEO from "../../assets/SEO";
import Leftsidebar from "../../assets/Leftsidebar";
import Csesidebar from "../../assets/Csesidebar";

const keywords = [
  "DevOps – Project Development Center in Chennai",
  "IEEE DevOps Projects 2023–2025",
  "CI/CD Pipeline Automation Projects",
  "Cloud-Native DevOps Solutions",
  "Microservices Architecture Projects",
  "DevSecOps Research Projects",
  "Kubernetes Projects for Students",
  "Infrastructure as Code Projects",
  "AI-Driven DevOps Solutions",
  "GitOps Automation Projects"
];

const faqs = [
  {
    question: "What services does the DevOps Project Development Center offer?",
    answer:
      "Narpavi Research Institute's DevOps Project Development Center supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) DevOps projects focusing on CI/CD, containerization, IaC, and DevSecOps."
  },
  {
    question: "What types of DevOps projects are supported?",
    answer:
      "We support CI/CD pipelines, containerized applications, microservices, DevSecOps platforms, and AI-driven DevOps automation projects."
  },
  {
    question: "Which technologies are used in DevOps project development?",
    answer:
      "Our stack includes Jenkins, GitLab CI, Docker, Kubernetes, Terraform, Ansible, Prometheus, ELK Stack, and AI-driven automation tools."
  },
  {
    question: "How are projects aligned with IEEE standards?",
    answer:
      "Projects are selected from IEEE Transactions (2023–2025) covering AI-driven DevOps, container security, and observability."
  },
  {
    question: "What academic support is provided?",
    answer:
      "We provide complete guidance including topic selection, implementation, validation, documentation, and IEEE/Scopus publication support."
  }
];

const DevOpsProjectDevelopmentCenter = () => {
  return (
    <div className="MobileAppDevelopmentCenter">

      {/* ✅ SEO FIXED */}
      <SEO
        title="DevOps – Project Development Center in Chennai"
        description="DevOps – Project Development Center in Chennai offering IEEE 2023–2025 projects in CI/CD automation, Kubernetes, Terraform, DevSecOps, microservices, and AI-driven DevOps for B.Tech, M.Tech, and Ph.D. students."
        keywords={keywords}
        url="/department/devops-project-development-center-in-chennai"
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
            <h1>DevOps – Project Development Center in Chennai</h1>
 <section className="MobileAppDevelopmentCenter-intro">
              <p>
                At Narpavi Research Institute, we take pride in delivering DevOps – Project Development Center solutions that empower engineering students and researchers across B.Tech, M.Tech, and Ph.D. levels worldwide. Our expertise covers both software and hardware-based DevOps projects, leveraging the most advanced methodologies from IEEE Transactions (2023–2025). By seamlessly integrating development and operations, we ensure faster delivery cycles, improved collaboration, and industry-ready solutions.
              </p>
              <p>
                The DevOps – Project Development Center focuses on real-time automation, continuous integration/continuous deployment (CI/CD), infrastructure-as-code, and container orchestration. Our projects are designed to meet global industrial needs, ensuring students' work remains relevant, scalable, and impactful.
              </p>
              <p>The DevOps – Project Development Center adopts modern cloud-native technologies, aligning with global industry benchmarks in software engineering, AI-driven operations, and microservice architecture. Every project follows a meticulously planned cycle tailored for B.Tech, M.Tech, and Ph.D. candidates, ensuring the perfect balance between academic depth and industrial application.</p>
            </section>

            <section className="MobileAppDevelopmentCenter-btech">
              <h2>B.Tech DevOps Project Development</h2>
              <p>
                For undergraduate students, our center focuses on foundational DevOps projects like CI/CD pipelines or containerized applications, aligned with IEEE topics.
              </p>
              <ul>
                <li>Topic selection from IEEE 2023–2025 trends</li>
                <li>Development using Jenkins, Docker, or GitLab CI</li>
                <li>Features like automated testing or version control</li>
                <li>Deployment on cloud platforms like AWS or Azure</li>
                <li>Documentation and IEEE-format presentation support</li>
              </ul>
              <p>
                The style emphasizes hands-on learning, automation, and academic-ready output.
              </p>
            </section>

            <section className="MobileAppDevelopmentCenter-mtech">
              <h2>M.Tech DevOps Project Development</h2>
              <p>
                For postgraduate students, we develop advanced DevOps projects like microservices or DevSecOps pipelines, aligned with IEEE research.
              </p>
              <ul>
                <li>IEEE topic selection with literature review</li>
                <li>Development with Kubernetes, Terraform, or Ansible</li>
                <li>Features like security automation or high availability</li>
                <li>Benchmarking and hybrid cloud deployment</li>
                <li>Thesis support with journal-ready documentation</li>
              </ul>
              <p>
                The style focuses on research-driven, scalable, and industry-grade DevOps solutions.
              </p>
            </section>

            <section className="MobileAppDevelopmentCenter-phd">
              <h2>Ph.D. DevOps Project Development</h2>
              <p>
                For doctoral scholars, our center focuses on pioneering DevOps research in AI-driven automation, GitOps, and quantum-integrated workflows.
              </p>
              <ul>
                <li>Problem formulation with IEEE 2023–2025 gap analysis</li>
                <li>Advanced framework design with AI or blockchain integration</li>
                <li>Prototyping in multi-cloud or containerized environments</li>
                <li>Validation with latency, uptime, and scalability metrics</li>
                <li>Publication assistance for IEEE/Scopus journals</li>
              </ul>
              <p>
                The style emphasizes innovation, research rigor, and publication-ready outcomes.
              </p>
            </section>

            <section className="MobileAppDevelopmentCenter-table">
              <h2>Technology vs. Industry Comparative Table – DevOps Applications</h2>
              <div className="MobileAppDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology in DevOps</th>
                      <th>Industry Applications</th>
                      <th>Academic Level</th>
                      <th>Primary Tools & Frameworks</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Continuous Integration / Continuous Deployment (CI/CD)</td>
                      <td>Software Development, E-commerce Platforms</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Jenkins, GitLab CI</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Infrastructure as Code (IaC)</td>
                      <td>Cloud Services, FinTech Infrastructure</td>
                      <td>B.Tech/M.Tech</td>
                      <td>Terraform, Ansible</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Containerization</td>
                      <td>AI & ML Operations, Enterprise Applications</td>
                      <td>M.Tech</td>
                      <td>Docker, Kubernetes</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Microservices Architecture</td>
                      <td>Banking, Retail, Healthcare IT Systems</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Spring Boot, Istio</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>DevSecOps</td>
                      <td>Cybersecurity, Compliance-driven Industries</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Snyk, OWASP ZAP</td>
                      <td>Very High</td>
                    </tr>
                    <tr>
                      <td>Site Reliability Engineering (SRE)</td>
                      <td>Telecom, Cloud Service Providers</td>
                      <td>Ph.D.</td>
                      <td>Google SRE Tools, Prometheus</td>
                      <td>Expert</td>
                    </tr>
                    <tr>
                      <td>Monitoring & Logging</td>
                      <td>Manufacturing, Real-time Analytics</td>
                      <td>M.Tech/Ph.D.</td>
                      <td>Prometheus, ELK Stack</td>
                      <td>Expert</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="MobileAppDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned DevOps Project Titles (2023–2025)</h2>
              <ul>
                <li>AI-Driven Continuous Integration Pipeline for Predictive Deployment Failures – 2023</li>
                <li>Kubernetes-Based DevOps Framework for Multi-Cloud Environments – 2023</li>
                <li>Serverless DevOps Deployment Automation with Event-Driven Architecture – 2023</li>
                <li>Blockchain-Powered Audit Trails for DevOps Security – 2024</li>
                <li>Self-Healing Microservices Using AI in DevOps – 2024</li>
                <li>Intelligent Test Automation Using NLP in CI/CD Pipelines – 2024</li>
                <li>Edge Computing DevOps Framework for Low-Latency AI Applications – 2024</li>
                <li>Container Security Optimization with AI-Based Vulnerability Detection – 2024</li>
                <li>GitOps-Driven Infrastructure as Code (IaC) Automation – 2025</li>
                <li>Machine Learning-Enhanced Release Orchestration for DevOps – 2025</li>
                <li>Observability-First DevOps Architecture for Real-Time System Insights – 2025</li>
                <li>Multi-Agent AI Systems for Continuous Delivery Optimization – 2025</li>
                <li>Quantum Computing-Integrated DevOps Workflow for High-Performance Computing – 2025</li>
                <li>Energy-Efficient DevOps Pipelines for Sustainable Cloud Operations – 2025</li>
                <li>Cross-Platform Mobile Application DevOps Framework with Automated Security Testing – 2025</li>
              </ul>
            </section>

            <section className="MobileAppDevelopmentCenter-excellence">
              <h2>Excellence in DevOps Project Development</h2>
              <p>
                Narpavi Technology is a mark of innovation, precision, and industry relevance. At Narpavi Research Institute, we empower engineering students across B.Tech, M.Tech, and Ph.D. levels globally with cutting-edge DevOps project solutions, blending software and hardware capabilities for real-world readiness. Our projects are meticulously aligned with the latest IEEE Transactions (2023–2025), ensuring academic distinction and industrial impact.
              </p>
              <p>
                By integrating automation, containerization, orchestration, and AI-driven workflows, we provide solutions that resonate with today's fast-paced software delivery demands. Whether it's developing an intelligent CI/CD pipeline, implementing GitOps infrastructure, or integrating AI into testing and monitoring, our project development cycles are optimized for excellence and future scalability.
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

export default DevOpsProjectDevelopmentCenter;
