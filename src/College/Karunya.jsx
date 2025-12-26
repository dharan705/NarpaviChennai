import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "Is the PhD entrance exam mandatory at Karunya Institute?",
    answer:
      "Yes. Appearing for the PhD entrance exam is mandatory unless exempted under specific university norms.",
  },
  {
    question: "What is the eligibility for applying to a PhD at Karunya?",
    answer:
      "Applicants must hold a Master’s Degree (ME, M.Tech, M.Sc, M.A, MBA, MCA, etc.) with at least 55% marks or CGPA 6.0/10.",
  },
  {
    question: "Does Karunya offer both full-time and part-time PhD programs?",
    answer:
      "Yes. Karunya offers both full-time and part-time PhD programs. Full-time takes a minimum of 3 years, while part-time takes a minimum of 4 years.",
  },
  {
    question: "Is work experience required for part-time PhD?",
    answer:
      "Yes. Professional work experience may be mandatory for part-time PhD applicants.",
  },
  {
    question: "What documents are required for PhD application?",
    answer:
      "Required documents include academic certificates, entrance scorecard, research proposal, CV, ID proof, photographs, and experience certificate for part-time candidates.",
  },
  {
    question: "When does the PhD application process start?",
    answer:
      "For the July intake, applications generally start from April. Dates are announced on the official admissions portal.",
  },
  {
    question: "What is the approximate tuition fee?",
    answer:
      "The application fee is ₹1,000 (non-refundable) and the tuition fee is approximately ₹1,50,000 per year.",
  },
  {
    question: "Is scholarship or fellowship available?",
    answer:
      "Yes. Karunya provides scholarships and fellowships to eligible PhD scholars.",
  },
  {
    question: "Does Karunya support interdisciplinary research?",
    answer:
      "Yes. Karunya actively promotes interdisciplinary and socially impactful research.",
  },
];

const universityData = {
  fullName:
    "PhD Admission in Karunya Institute of Technology and Sciences (Deemed University)",
  shortName: "Karunya University",
  phdEntranceExam: "Mandatory",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks or CGPA 6.0/10",
  workExperience:
    "Required for part-time PhD candidates",
  modeOfPhd:
    "Full-Time: 3–6 Years | Part-Time: 4–8 Years",
  documentsRequired: [
    "Completed application form",
    "UG & PG degree certificates and mark sheets",
    "Entrance exam scorecard (if applicable)",
    "Research proposal / Statement of Purpose",
    "Curriculum Vitae (CV)",
    "Passport-size photographs",
    "Transfer Certificate (TC)",
    "Government-issued ID proof",
    "Community certificate (if applicable)",
    "Experience certificate (for part-time candidates)",
  ],
  applicationTimeline:
    "July Intake: April onwards | January Intake: Dates announced by university",
  approxFee:
    "Application Fee: ₹1,000 | Tuition Fee: Approx. ₹1,50,000 per annum",
  scholarshipAvailability:
    "University Scholarships & Fellowships Available",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO META + FAQ SCHEMA */}
      <SEO
        title="PhD Admission in Karunya University | Karunya PhD"
        description="PhD admission guidance for Karunya Institute of Technology and Sciences. Check eligibility, entrance exam, fees, application dates, documents required, and scholarships."
        url="/karunya"
        keywords={[
          "PhD Admission in Karunya University",
          "Karunya PhD admission",
          "Karunya University PhD eligibility",
          "Part time PhD Karunya",
          "PhD in Coimbatore Karunya",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About Karunya Institute of Technology and Sciences</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Established in 1986, Karunya is a Christian minority institution focused on academic excellence and societal impact.
              </li>
              <li>
                <b>PhD Programs:</b> Doctoral research programs were introduced in the early 2000s after attaining Deemed University status.
              </li>
              <li>
                <b>Research Strength:</b> 70–100 PhD scholars are admitted annually across engineering, science, and humanities disciplines.
              </li>
              <li>
                <b>Why Choose Karunya:</b> Strong mentorship, advanced laboratories, ethical research culture, and interdisciplinary focus.
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
                <span className="detail-label">Mode & Duration</span>
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
              <li>Scenic hill-campus near Coimbatore</li>
              <li>Ethical & value-based research culture</li>
              <li>Advanced labs and research centers</li>
              <li>Strong international exposure</li>
              <li>Encourages interdisciplinary innovation</li>
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
