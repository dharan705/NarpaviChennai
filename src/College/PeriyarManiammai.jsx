import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "Is the PhD entrance exam mandatory at PMIST?",
    answer:
      "Yes. Appearing for the PhD entrance exam is mandatory at Periyar Maniammai Institute of Science & Technology (PMIST).",
  },
  {
    question: "What is the minimum qualification required for PhD admission at PMIST?",
    answer:
      "Candidates must hold a Master’s Degree such as ME, M.Tech, M.Sc, M.A, MBA, or MCA with at least 55% marks or CGPA 6.0/10.",
  },
  {
    question: "Is work experience mandatory for part-time PhD at PMIST?",
    answer:
      "Yes. Professional work experience is mandatory for applicants applying for a part-time PhD program at PMIST.",
  },
  {
    question: "What modes of PhD are offered at PMIST?",
    answer:
      "PMIST offers both Full-Time and Part-Time PhD programs.",
  },
  {
    question: "What documents are required for PhD application at PMIST?",
    answer:
      "Documents include UG & PG certificates, mark sheets, ID proof, photographs, research proposal, experience certificate (for part-time), NOC (if employed), and qualifying exam certificates like UGC-NET or GATE if applicable.",
  },
  {
    question: "What is the application timeline for PhD admission at PMIST?",
    answer:
      "Applications usually start in April and close by June, followed by entrance exams and interviews.",
  },
  {
    question: "Are scholarships available for PhD scholars at PMIST?",
    answer:
      "Yes. PMIST provides scholarship and fellowship opportunities for eligible PhD scholars.",
  },
  {
    question: "What is the annual fee structure for PhD at PMIST?",
    answer:
      "The annual tuition fee ranges between ₹26,500 and ₹75,500, with an average of ₹64,718.",
  },
  {
    question: "Can working professionals apply for a PhD at PMIST?",
    answer:
      "Yes. Working professionals are encouraged to apply for a part-time PhD, subject to eligibility and submission of a No Objection Certificate.",
  },
];

const universityData = {
  fullName:
    "PhD Admission in Thanjavur Periyar Maniammai Institute of Science & Technology",
  shortName: "PMIST",
  phdEntranceExam: "Mandatory",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks or CGPA 6.0/10",
  workExperience:
    "Mandatory for Part-Time PhD applicants",
  modeOfPhd:
    "Full-Time / Part-Time",
  documentsRequired: [
    "Completed Application Form",
    "Photo ID Proof (Aadhaar / Passport / Voter ID / Driving License)",
    "Passport-sized Photographs",
    "UG Degree Certificate and Mark Sheets",
    "PG Degree Certificate and Mark Sheets",
    "Transfer / Migration Certificate",
    "Community Certificate (if applicable)",
    "Research Proposal / SOP",
    "Experience Certificate (Part-Time candidates)",
    "No Objection Certificate (NOC) from employer",
    "UGC-NET / CSIR-NET / GATE / SLET Certificate (if applicable)",
    "Fee Payment Receipt",
  ],
  applicationTimeline:
    "Application Start: April | Application End: June | Entrance Exam & Interview: After application period",
  approxFee:
    "₹26,500 – ₹75,500 per year (Average: ₹64,718)",
  scholarshipAvailability:
    "Yes – Scholarships and Fellowships available",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO META + FAQ SCHEMA */}
      <SEO
        title="PhD Admission in PMIST Thanjavur | Fees, Eligibility & Entrance Exam"
        description="Apply for PhD admission at Periyar Maniammai Institute of Science & Technology (PMIST), Thanjavur. Check eligibility, entrance exam, application dates, documents, fees, and scholarships."
        url="/periyar-maniammai-university"
        keywords={[
          "PhD Admission in PMIST",
          "PMIST PhD eligibility",
          "Periyar Maniammai PhD entrance exam",
          "PMIST PhD fees",
          "PhD in Thanjavur",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About Periyar Maniammai Institute of Science & Technology (PMIST)</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Established in 1988 with a strong social and academic mission.
              </li>
              <li>
                <b>PhD Programs:</b> Research programs introduced early to promote innovation in science, technology, and humanities.
              </li>
              <li>
                <b>Research Strength:</b> Around 60–100 PhD scholars admitted annually across multiple disciplines.
              </li>
              <li>
                <b>Why Choose PMIST:</b> Inclusive research culture, skilled faculty, and emphasis on sustainable development.
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
              <li>Strong focus on sustainable and social research</li>
              <li>Transparent PhD admission process</li>
              <li>Modern research facilities and digital resources</li>
              <li>Excellent option for working professionals</li>
              <li>Interdisciplinary PhD opportunities</li>
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
