import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "Is the PhD entrance exam mandatory at MSU Tirunelveli?",
    answer:
      "Yes. MSU conducts a university-level PhD entrance exam. Candidates with JRF, NET, or SET along with a National Fellowship are exempted.",
  },
  {
    question: "What is the minimum qualification for PhD admission at MSU?",
    answer:
      "Applicants must hold a Master’s Degree such as M.E., M.Tech., M.Sc., M.A., M.C.A., MBA, etc., with at least 55% marks.",
  },
  {
    question: "Does MSU offer part-time PhD programs?",
    answer:
      "Yes. Part-time PhD programs are available, but candidates must be employed and submit a No Objection Certificate (NOC).",
  },
  {
    question: "What is the mode of PhD programs at MSU?",
    answer:
      "PhD programs at MSU are offered in both Full-Time and Part-Time modes.",
  },
  {
    question: "What documents are required for PhD admission at MSU?",
    answer:
      "Documents include UG & PG certificates, research proposal, photographs, ID proof, community certificate (if applicable), NOC for part-time candidates, and NET/SET/GATE proof if applicable.",
  },
  {
    question: "When can I apply for PhD at MSU?",
    answer:
      "MSU has two admission cycles every year: January and July sessions. Exact dates are announced on the official website.",
  },
  {
    question: "What is the fee structure for PhD at MSU?",
    answer:
      "The tuition fee is ₹10,000 per annum, along with an application fee of ₹500 for the entrance examination.",
  },
  {
    question: "Are scholarships available for PhD students at MSU?",
    answer:
      "Yes. MSU offers University Research Fellowship (URF) and government-funded scholarships such as UGC-JRF and CSIR-JRF.",
  },
  {
    question: "Why choose MSU Tirunelveli for a PhD?",
    answer:
      "MSU is known for its strong research culture, experienced faculty, affordable fee structure, and academic excellence in southern Tamil Nadu.",
  },
];

const universityData = {
  fullName: "PhD Admission in Manonmaniam Sundaranar University",
  shortName: "MSU Tirunelveli",
  phdEntranceExam:
    "University-conducted PhD Entrance Exam (Exemptions: JRF / NET / SET with Fellowship)",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks",
  workExperience:
    "Required for part-time PhD candidates",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Completed application form",
    "UG & PG degree certificates and mark sheets",
    "Research proposal",
    "Passport-size photographs",
    "Government-issued ID proof",
    "Community certificate (if applicable)",
    "Service Certificate & NOC (for part-time candidates)",
    "NET / SET / GATE proof (if applicable)",
  ],
  applicationTimeline:
    "January Session & July Session (dates announced on official website)",
  approxFee:
    "₹10,000 per year (Tuition Fee) + ₹500 (Entrance Exam Application Fee)",
  scholarshipAvailability:
    "University Research Fellowship (URF) / UGC-JRF / CSIR-JRF / State Government Scholarships",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO META + FAQ SCHEMA */}
      <SEO
        title="PhD Admission in Manonmaniam Sundaranar University | MSU Tirunelveli"
        description="PhD admission guidance for Manonmaniam Sundaranar University (MSU), Tirunelveli. Check eligibility, entrance exam, fees, application dates, documents, and scholarships."
        url="/manonmaniam-university"
        keywords={[
          "PhD Admission in Manonmaniam Sundaranar University",
          "MSU Tirunelveli PhD admission",
          "MSU PhD eligibility",
          "Part time PhD MSU",
          "PhD in Tirunelveli",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About Manonmaniam Sundaranar University</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Established in 1990, MSU serves as a major academic hub in southern Tamil Nadu.
              </li>
              <li>
                <b>PhD Programs:</b> Doctoral programs commenced in the early 1990s to promote research excellence.
              </li>
              <li>
                <b>Research Strength:</b> Around 500 PhD scholars enroll and graduate every year.
              </li>
              <li>
                <b>Why Choose MSU:</b> Strong research focus, experienced faculty, affordable fees, and supportive academic environment.
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
              <li>Affordable PhD fee structure</li>
              <li>University-level PhD entrance exam</li>
              <li>Full-Time & Part-Time PhD options</li>
              <li>Strong research and academic culture</li>
              <li>Scholarships and fellowships available</li>
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
