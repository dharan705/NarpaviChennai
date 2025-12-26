import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "Is VITREE mandatory for all PhD applicants?",
    answer:
      "Yes, the VIT Research Entrance Examination (VITREE) is generally required. Candidates with a 4-year Bachelor’s degree and at least 75% marks may be exempted.",
  },
  {
    question: "What academic qualifications are needed for PhD admission at VIT?",
    answer:
      "Applicants must hold a Master’s degree with at least 60% marks or equivalent CGPA. Direct PhD applicants must have a 4-year Bachelor’s degree with 75% marks.",
  },
  {
    question: "Is work experience required for part-time PhD at VIT?",
    answer:
      "Yes, part-time PhD applicants must be employed and submit a No Objection Certificate (NOC) from their employer.",
  },
  {
    question: "What are the available modes of PhD at VIT?",
    answer:
      "PhD at VIT is offered in Full-Time, Part-Time, and Direct PhD modes.",
  },
  {
    question: "What is the VIT PhD application timeline?",
    answer:
      "Admissions are conducted twice a year: January session (September–November) and July session (January–March).",
  },
  {
    question: "What documents are required for applying?",
    answer:
      "Applicants must submit the online application, academic transcripts, VITREE score or exemption proof, research proposal, ID proof, photographs, and NOC for part-time candidates.",
  },
  {
    question: "What is the annual fee for PhD programs at VIT?",
    answer:
      "The tuition fee is ₹43,000 per annum with an additional ₹10,000 thesis submission fee. Fees may vary by program.",
  },
  {
    question: "Does VIT provide scholarships or financial support?",
    answer:
      "Yes, full-time internal scholars receive a fellowship of ₹20,000 per month for three years. Government and merit-based scholarships are also available.",
  },
  {
    question: "Why choose VIT for a PhD program?",
    answer:
      "VIT offers world-class faculty, modern research facilities, interdisciplinary research opportunities, and strong academic support.",
  },
];

const universityData = {
  fullName: "PhD Admission in Vellore Institute of Technology",
  shortName: "VIT University",
  phdEntranceExam:
    "VIT Research Entrance Examination (VITREE) – Exemptions available for eligible candidates",
  qualificationRequired:
    "Master’s Degree with at least 60% marks or equivalent CGPA / Direct PhD with 4-year Bachelor’s Degree and 75% marks",
  workExperience:
    "Employment and NOC required for Part-Time PhD candidates",
  modeOfPhd: "Full-Time / Part-Time / Direct PhD",
  documentsRequired: [
    "Completed online application form",
    "UG & PG academic transcripts",
    "VITREE score or exemption proof",
    "Research proposal",
    "Passport-size photographs",
    "Government-issued ID proof",
    "No Objection Certificate (for part-time candidates)",
  ],
  applicationTimeline:
    "January Session: September – November | July Session: January – March",
  approxFee:
    "₹43,000 per annum + ₹10,000 thesis submission fee (subject to change)",
  scholarshipAvailability:
    "₹20,000/month fellowship for full-time scholars + Government & merit-based scholarships",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO + FAQ Schema */}
      <SEO
        title="PhD Admission in VIT University | Eligibility, VITREE, Fees & Scholarships"
        description="Apply for PhD admission at Vellore Institute of Technology (VIT). Check eligibility, VITREE entrance exam, fees, scholarships, documents, and application dates."
        url="/vit-phd-admission"
        keywords={[
          "PhD Admission in VIT",
          "VIT PhD eligibility",
          "VITREE entrance exam",
          "VIT PhD fees",
          "Part time PhD in VIT",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About VIT University</h3>
            <ul>
              <li>
                <b>Established:</b> 1984
              </li>
              <li>
                <b>PhD Programs:</b> Started in the early 2000s
              </li>
              <li>
                <b>Annual Intake:</b> Over 1,500 PhD scholars
              </li>
              <li>
                <b>Why Choose VIT:</b> Global faculty, cutting-edge labs,
                interdisciplinary research culture
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
              <li>VITREE-based PhD admission</li>
              <li>Direct PhD option available</li>
              <li>Strong interdisciplinary research culture</li>
              <li>Attractive monthly fellowship</li>
              <li>International research exposure</li>
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
