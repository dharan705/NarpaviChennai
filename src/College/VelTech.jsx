import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "What are the eligibility criteria for PhD admission at Vel Tech?",
    answer:
      "Candidates must possess a Master’s Degree with at least 55% marks or CGPA 6.0/10 from a recognized institution.",
  },
  {
    question: "Is the entrance exam mandatory for PhD admission at Vel Tech?",
    answer:
      "Yes. The PhD entrance exam is mandatory, but candidates with NET, GATE, or SET qualifications may be exempted.",
  },
  {
    question: "Does Vel Tech offer both full-time and part-time PhD programs?",
    answer:
      "Yes. Vel Tech offers both Full-Time and Part-Time PhD programs across disciplines.",
  },
  {
    question: "Is work experience required for PhD admission?",
    answer:
      "Work experience may be mandatory for part-time PhD candidates, along with an employer-issued NOC.",
  },
  {
    question: "What is the application timeline for PhD admission at Vel Tech?",
    answer:
      "Applications open from March 26, 2025, and close on May 10, 2025. Entrance exam and interviews are conducted in May and June.",
  },
  {
    question: "What documents are required for PhD admission?",
    answer:
      "Required documents include application form, UG & PG certificates, research proposal, ID proof, entrance scorecard (if any), experience certificate, NOC, and migration certificate.",
  },
  {
    question: "What is the PhD fee structure at Vel Tech?",
    answer:
      "The total PhD program fee ranges from approximately ₹1.08 lakhs to ₹1.44 lakhs.",
  },
  {
    question: "Are scholarships or fellowships available?",
    answer:
      "Yes. Scholarships and fellowships are available for eligible PhD scholars.",
  },
  {
    question: "Why choose Vel Tech for PhD studies?",
    answer:
      "Vel Tech is known for its strong industry collaborations, modern research infrastructure, experienced guides, and structured doctoral programs.",
  },
];

const universityData = {
  fullName:
    "PhD Admission in Chennai Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology",
  shortName: "Vel Tech",
  phdEntranceExam: "Mandatory (NET / GATE / SET exemptions applicable)",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks or CGPA 6.0/10",
  workExperience:
    "Required for Part-Time PhD candidates",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Completed PhD application form",
    "Passport-size photograph",
    "Proof of Date of Birth",
    "Government-issued ID proof",
    "UG & PG degree certificates and mark sheets",
    "Research proposal / SOP",
    "Entrance exam scorecard (if applicable)",
    "Work experience certificate (Part-Time)",
    "No Objection Certificate (Part-Time)",
    "Migration certificate (if applicable)",
    "Publication list (if any)",
  ],
  applicationTimeline: `Application Start: March 26, 2025
Application End: May 10, 2025
Entrance Exam (Online): May 24, 2025
Interview (Online): June 14, 2025
Admission & Joining: July 1, 2025`,
  approxFee:
    "₹1.08 lakhs – ₹1.44 lakhs (entire PhD program)",
  scholarshipAvailability: "Yes",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO + FAQ Schema */}
      <SEO
        title="PhD Admission in Vel Tech University Chennai | Eligibility, Fees & Entrance Exam"
        description="Apply for PhD admission at Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Chennai. Check eligibility, entrance exam, fees, documents, and scholarships."
        url="/vel-tech-phd-admission"
        keywords={[
          "PhD Admission in Vel Tech",
          "Vel Tech PhD admission",
          "PhD admission in Chennai",
          "Vel Tech PhD eligibility",
          "Part time PhD in Vel Tech",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About Vel Tech University</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Established in 1997, Vel Tech is a
                leading institution focused on science, engineering, and
                technology.
              </li>
              <li>
                <b>PhD Programs:</b> Introduced in the early 2000s to strengthen
                advanced research.
              </li>
              <li>
                <b>Annual Intake:</b> Around 350 PhD scholars enroll every year.
              </li>
              <li>
                <b>Why Choose Vel Tech:</b> Strong industry tie-ups, advanced
                laboratories, and experienced research guides.
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="university-details-container">
            <div className="phdimg" />

            {/* ✅ Single H1 */}
            <h1 className="university-title">
              {universityData.fullName}
            </h1>

            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Popularly Known As</span>
                <span className="detail-value">
                  {universityData.shortName}
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">PhD Entrance Exam</span>
                <span className="detail-value">
                  {universityData.phdEntranceExam}
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Qualification Required</span>
                <span className="detail-value">
                  {universityData.qualificationRequired}
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Work Experience</span>
                <span className="detail-value">
                  {universityData.workExperience}
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Mode of PhD</span>
                <span className="detail-value">
                  {universityData.modeOfPhd}
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Application Timeline</span>
                <span
                  className="detail-value"
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  {universityData.applicationTimeline}
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Approx. Fee</span>
                <span className="detail-value">
                  {universityData.approxFee}
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Documents Required</span>
                <ul className="detail-list">
                  {universityData.documentsRequired.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
              </div>

              <div className="detail-item">
                <span className="detail-label">Scholarship / Fellowship</span>
                <span className="detail-value">
                  {universityData.scholarshipAvailability}
                </span>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="side-box right-box">
            <h3>Key Highlights</h3>
            <ul>
              <li>Structured PhD admission process</li>
              <li>NET / GATE exemption supported</li>
              <li>Industry-driven research environment</li>
              <li>Strong innovation and startup culture</li>
              <li>Excellent support for full-time & part-time scholars</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ UI */}
      <section className="alluniversityfaq-section">
        <h2>FAQs on PhD Admission</h2>
        <div className="faq-items">
          {faqs.map((faq, index) => (
            <details key={index}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Subheading;
