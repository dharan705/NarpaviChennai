import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "Is the PhD entrance exam mandatory at PRIST University?",
    answer:
      "Yes, appearing for the PhD entrance exam is mandatory for all applicants at PRIST University.",
  },
  {
    question: "What qualifications are required for PhD admission at PRIST?",
    answer:
      "Applicants must have a Master’s degree such as ME, M.Tech, M.Sc, M.A, MBA, or MCA with at least 55% marks or a CGPA of 6.0/10.",
  },
  {
    question: "Is work experience mandatory for PhD applicants at PRIST University?",
    answer:
      "Professional experience may be mandatory, especially for part-time PhD applicants.",
  },
  {
    question: "What modes of PhD study are available at PRIST University?",
    answer:
      "PRIST University offers both Full-Time and Part-Time PhD programs.",
  },
  {
    question: "What documents are required to apply for a PhD at PRIST University?",
    answer:
      "Applicants must submit an application form, ID proof, UG & PG certificates, research proposal, experience certificate (if applicable), NOC (for part-time), qualifying exam proof, and migration/transfer certificate.",
  },
  {
    question: "When is the PhD admission application period at PRIST?",
    answer:
      "Applications typically open in June and close in August, followed by entrance exams and interviews.",
  },
  {
    question: "Is financial support available for PhD students at PRIST University?",
    answer:
      "Yes, PRIST University provides scholarships and fellowships for eligible PhD scholars.",
  },
  {
    question: "What is the annual tuition fee for a PhD at PRIST University?",
    answer:
      "The approximate annual tuition fee is ₹90,000.",
  },
  {
    question: "Why choose PRIST University for PhD studies?",
    answer:
      "PRIST University offers a supportive research environment, experienced guides, interdisciplinary opportunities, and strong academic infrastructure.",
  },
];

const universityData = {
  fullName:
    "PhD Admission in Ponnaiyah Ramajayam Institute of Science & Technology",
  shortName: "PRIST University",
  phdEntranceExam: "Mandatory",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks or CGPA 6.0/10",
  workExperience:
    "May be mandatory for Part-Time PhD applicants",
  modeOfPhd:
    "Full-Time / Part-Time",
  documentsRequired: [
    "Completed Application Form",
    "Passport-sized Photographs",
    "Photo ID Proof (Aadhaar / Passport)",
    "UG & PG Degree Certificates and Mark Sheets",
    "Experience Certificate (Part-Time candidates)",
    "No Objection Certificate (NOC) from Employer",
    "Research Proposal / SOP",
    "UGC-NET / CSIR-NET / GATE Proof (if applicable)",
    "Migration / Transfer Certificate",
    "Application Fee Payment Proof",
  ],
  applicationTimeline:
    "Application Start: June | Application End: August | Entrance Exam & Interview: After application period",
  approxFee:
    "Approximately ₹90,000 per year",
  scholarshipAvailability:
    "Yes – Scholarships and Fellowships available",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO META + FAQ SCHEMA */}
      <SEO
        title="PhD Admission in PRIST University | Fees, Eligibility & Entrance Exam"
        description="Apply for PhD admission at Ponnaiyah Ramajayam Institute of Science & Technology (PRIST University). Check eligibility, entrance exam, application dates, documents, fees, and scholarships."
        url="/prist-university"
        keywords={[
          "PhD Admission in PRIST University",
          "PRIST PhD eligibility",
          "PRIST PhD entrance exam",
          "PRIST University PhD fees",
          "PhD admission in Thanjavur",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About Ponnaiyah Ramajayam Institute of Science & Technology (PRIST)</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Established in 1985 and became a Deemed-to-be University in 2008.
              </li>
              <li>
                <b>PhD Programs:</b> Research programs introduced after attaining Deemed University status.
              </li>
              <li>
                <b>Research Output:</b> Around 30–50 PhD scholars complete their degrees annually.
              </li>
              <li>
                <b>Why Choose PRIST:</b> Experienced research guides, modern infrastructure, and interdisciplinary research opportunities.
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
                <span className="detail-value">{universityData.shortName}</span>
              </div>

              <div className="detail-item">
                <span className="detail-label">PhD Entrance Exam</span>
                <span className="detail-value">{universityData.phdEntranceExam}</span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Qualification Required</span>
                <span className="detail-value">{universityData.qualificationRequired}</span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Work Experience</span>
                <span className="detail-value">{universityData.workExperience}</span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Mode of PhD</span>
                <span className="detail-value">{universityData.modeOfPhd}</span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Application Timeline</span>
                <span className="detail-value">{universityData.applicationTimeline}</span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Approx. Fee</span>
                <span className="detail-value">{universityData.approxFee}</span>
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
                <span className="detail-value">{universityData.scholarshipAvailability}</span>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="side-box right-box">
            <h3>Key Highlights</h3>
            <ul>
              <li>Deemed-to-be University with strong research focus</li>
              <li>Experienced PhD supervisors</li>
              <li>Encourages publications and interdisciplinary research</li>
              <li>Suitable for both fresh and working professionals</li>
              <li>Transparent admission and evaluation process</li>
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
