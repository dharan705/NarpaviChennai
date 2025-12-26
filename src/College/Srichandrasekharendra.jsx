import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "Is an entrance exam mandatory for PhD admission at SCSVMV?",
    answer:
      "Yes, candidates must appear for a PhD entrance exam conducted by the university or recognized bodies.",
  },
  {
    question: "What qualifications are needed for applying to the PhD program?",
    answer:
      "Applicants must hold a Master’s degree with at least 55% marks or CGPA 6.0/10.",
  },
  {
    question: "Does SCSVMV offer both full-time and part-time PhD modes?",
    answer:
      "Yes, SCSVMV offers Full-Time (3 years) and Part-Time (4–6 years) PhD programs.",
  },
  {
    question: "What documents are needed for the PhD application?",
    answer:
      "Documents include academic transcripts, research proposal, CV, ID proof, photographs, entrance exam scorecard, and NOC/experience certificate for part-time applicants.",
  },
  {
    question: "Are scholarships or fellowships available?",
    answer:
      "Yes, SCSVMV provides scholarships and fellowships based on merit and university norms.",
  },
];

const universityData = {
  fullName:
    "PhD Admission in Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya, Kanchipuram",
  shortName: "SCSVMV",
  phdEntranceExam: "Mandatory",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks or CGPA 6.0/10",
  workExperience:
    "Professional experience may be mandatory for Part-Time PhD candidates",
  modeOfPhd: "Full-Time (3 Years) / Part-Time (4–6 Years)",
  documentsRequired: [
    "Completed PhD Application Form",
    "PG Degree Certificate and Mark Sheets",
    "UG Degree Certificate and Mark Sheets",
    "Research Proposal / Statement of Purpose",
    "Curriculum Vitae (CV)",
    "Entrance Exam Scorecard (if applicable)",
    "No Objection Certificate (for Part-Time candidates)",
    "Experience Certificate (for Part-Time candidates)",
    "Transfer / Migration Certificate",
    "Character Certificate",
    "Community / Caste Certificate (if applicable)",
    "Photo ID Proof",
    "Passport Size Photographs",
  ],
  applicationTimeline:
    "January Session (Dec–Jan) and July Session (Jun–Jul)",
  approxFee:
    "First Year Approx. Fee: ₹59,000 (Admission, Course, DC, Library & Lab fees)",
  scholarshipAvailability: "Yes",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO + FAQ Schema */}
      <SEO
        title="PhD Admission in SCSVMV Kanchipuram | Eligibility, Fees & Entrance Exam"
        description="Apply for PhD admission at Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya (SCSVMV), Kanchipuram. Check eligibility, entrance exam, fees, documents, and scholarships."
        url="/scsvmv"
        keywords={[
          "PhD Admission in SCSVMV",
          "SCSVMV PhD admission",
          "PhD admission in Kanchipuram",
          "SCSVMV PhD eligibility",
          "SCSVMV entrance exam",
          "Part time PhD in SCSVMV",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>
              About Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya (SCSVMV)
            </h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Established in 1993, SCSVMV blends
                traditional values with modern academic excellence.
              </li>
              <li>
                <b>PhD Programs:</b> Doctoral programs were introduced early to
                strengthen research across disciplines.
              </li>
              <li>
                <b>Annual Intake:</b> Around 60–90 PhD scholars are admitted each
                year.
              </li>
              <li>
                <b>Why Choose SCSVMV:</b> Experienced research guides, peaceful
                campus environment, and strong doctoral committee support.
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="university-details-container">
            <div className="phdimg" />

            {/* ✅ SINGLE H1 */}
            <h1 className="university-title">
              {universityData.fullName}
            </h1>

            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Popularly Known As</span>
                <span className="detail-value">{universityData.shortName}</span>
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
              <li>Two PhD admission cycles every year</li>
              <li>Traditional values blended with modern research</li>
              <li>Experienced doctoral committee & guides</li>
              <li>Ideal for working professionals</li>
              <li>Located in historic Kanchipuram</li>
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
