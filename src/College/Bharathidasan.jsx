import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question:
      "Is there an entrance exam for PhD admission at Bharathidasan University?",
    answer:
      "Yes. Bharathidasan University conducts a PhD entrance examination. Candidates qualified in NET, SET, or holding an M.Phil. degree may be exempted.",
  },
  {
    question:
      "What are the eligibility criteria for applying to the PhD program?",
    answer:
      "Applicants must have a Master’s degree with at least 55% marks or CGPA 6.0 on a 10-point scale.",
  },
  {
    question: "Is work experience mandatory for PhD admission?",
    answer:
      "Work experience is mandatory for part-time PhD applicants. It is not compulsory for full-time candidates.",
  },
  {
    question: "What modes of PhD are offered at Bharathidasan University?",
    answer:
      "Both Full-Time and Part-Time PhD programs are offered.",
  },
  {
    question: "When are PhD admissions conducted?",
    answer:
      "PhD admissions are usually conducted twice a year during February and August sessions.",
  },
  {
    question: "What is the approximate fee for the PhD program?",
    answer:
      "The annual tuition fee ranges from ₹20,000 to ₹30,000 depending on the department, excluding additional fees.",
  },
  {
    question: "Are scholarships available for PhD scholars?",
    answer:
      "Yes. Eligible candidates can apply for UGC and Government-funded scholarships.",
  },
  {
    question: "Can working professionals pursue a PhD here?",
    answer:
      "Yes. Working professionals can pursue a part-time PhD with a valid No Objection Certificate (NOC).",
  },
];

const universityData = {
  fullName: "PhD Admission in Bharathidasan University Trichy",
  shortName: "Bharathidasan University (BDU)",
  phdEntranceExam: "Entrance Exam Required (NET/SET/M.Phil. exempted)",
  qualificationRequired:
    "Master’s Degree with 55% marks or CGPA 6.0 on a 10-point scale",
  workExperience: "Mandatory for part-time PhD candidates",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "UG & PG degree certificates and mark sheets",
    "Entrance exam hall ticket and score card (if applicable)",
    "Research proposal / SOP",
    "Community certificate (if applicable)",
    "Experience certificate (for part-time candidates)",
    "No Objection Certificate (NOC)",
    "Migration & Transfer Certificate",
    "Passport-size photographs",
    "Government-issued ID proof",
  ],
  applicationTimeline:
    "February Session / August Session",
  approxFee:
    "₹20,000 – ₹30,000 per annum (excluding admission & examination fees)",
  scholarshipAvailability:
    "UGC Fellowships and Government Scholarships",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO META + FAQ SCHEMA */}
      <SEO
        title="PhD Admission in Bharathidasan University Trichy"
        description="Get complete PhD admission guidance for Bharathidasan University Trichy including eligibility, entrance exam, full-time and part-time options, fee structure, scholarships, and application dates."
        url="/bharathidasan-university"
        keywords={[
          "PhD Admission in Bharathidasan University",
          "Bharathidasan University PhD eligibility",
          "PhD admission in Trichy",
          "Part time PhD Bharathidasan University",
          "Bharathidasan University entrance exam",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About Bharathidasan University</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Bharathidasan University was established in 1982.
              </li>
              <li>
                <b>PhD Programs:</b> Introduced in the mid-1980s through the Centre for Research.
              </li>
              <li>
                <b>Research Strength:</b> Over 1,500 scholars enrolled annually.
              </li>
              <li>
                <b>Why Choose BDU:</b> Strong research ecosystem, experienced faculty, and wide academic network.
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
              <li>Twice-a-year PhD admissions</li>
              <li>Full-time & part-time PhD options</li>
              <li>Entrance exam with exemptions</li>
              <li>Affordable fee structure</li>
              <li>Strong research ecosystem</li>
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
