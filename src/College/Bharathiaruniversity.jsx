import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "What entrance exam is required for PhD admission at Bharathiar University?",
    answer:
      "Applicants must clear a Written Test and Oral Interview. Candidates qualified in UGC-NET, CSIR-NET, GATE, SLET, or holding an M.Phil. degree are exempted from the written test.",
  },
  {
    question: "What is the minimum qualification for applying to the PhD program?",
    answer:
      "A Master’s Degree with at least 55% marks or a CGPA of 5.5 on a 10-point scale is required.",
  },
  {
    question: "Can working professionals apply for a PhD?",
    answer:
      "Yes. For part-time PhD admission, candidates must be employed and submit an NOC from their employer.",
  },
  {
    question: "What is the mode of PhD offered?",
    answer:
      "Bharathiar University offers Full-Time and Part-Time PhD programs. Conversion between modes is allowed after 18 months.",
  },
  {
    question: "When can I apply for the PhD program?",
    answer:
      "PhD admissions are conducted twice a year during May and November/December sessions.",
  },
  {
    question: "What is the fee structure for the PhD program?",
    answer:
      "Full-Time: ₹4,950 per year; Part-Time: ₹2,475 per year, plus ₹1,000 application fee.",
  },
  {
    question: "Are scholarships available for PhD scholars?",
    answer:
      "Yes. Eligible candidates can apply for UGC and Government scholarships such as Post Matric and Indira Gandhi Single Girl Child Scholarship.",
  },
];

const universityData = {
  fullName: "PhD Admission in Bharathiar University Coimbatore",
  shortName: "Bharathiar University",
  phdEntranceExam:
    "Written Test and Oral Interview (NET/GATE/M.Phil. candidates exempted from written test)",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks or CGPA 5.5",
  workExperience: "Required for part-time PhD candidates",
  modeOfPhd:
    "Full-Time / Part-Time (Conversion allowed after 18 months)",
  documentsRequired: [
    "Online application form",
    "UG & PG certificates and mark sheets",
    "Community certificate (if applicable)",
    "Experience certificate (for part-time candidates)",
    "NOC from employer",
    "Entrance exam scorecard or exemption proof",
    "Research proposal",
    "Passport-size photographs",
  ],
  applicationTimeline:
    "May Session / November–December Session",
  approxFee:
    "Full-Time: ₹4,950/year, Part-Time: ₹2,475/year + ₹1,000 application fee",
  scholarshipAvailability:
    "UGC & Government Scholarships (Post Matric, Indira Gandhi Single Girl Child, Merit-based)",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO META + FAQ SCHEMA */}
      <SEO
        title="PhD Admission in Bharathiar University Coimbatore"
        description="Complete PhD admission guidance for Bharathiar University Coimbatore including eligibility, entrance exam, part-time options, fee structure, scholarships, and application dates."
        url="/bharathiar-university"
        keywords={[
          "PhD Admission in Bharathiar University",
          "Bharathiar University PhD eligibility",
          "Bharathiar University entrance exam",
          "PhD admission in Coimbatore",
          "Part time PhD Bharathiar University",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About Bharathiar University</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Established in 1982 by the Government of Tamil Nadu.
              </li>
              <li>
                <b>PhD Programs:</b> Offered through the Centre for Research with strong academic focus.
              </li>
              <li>
                <b>Research Strength:</b> Thousands of scholars across main and affiliated colleges.
              </li>
              <li>
                <b>Why Choose Bharathiar University:</b> Excellent faculty, wide research scope, and strong academic reputation.
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="university-details-container">
            <div className="phdimg" />
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
                <span className="detail-value">
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
              <li>PhD eligibility & entrance exam</li>
              <li>Full-time & part-time modes</li>
              <li>Fee structure & scholarships</li>
              <li>Application dates & documents</li>
              <li>Research opportunities in Coimbatore</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
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
