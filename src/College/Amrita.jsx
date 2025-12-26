import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "What is the eligibility for PhD admission at Amrita University?",
    answer:
      "Candidates must hold a Master’s Degree with at least 55% marks or equivalent CGPA from a recognized university.",
  },
  {
    question: "Is an entrance exam required for PhD admission at Amrita University?",
    answer:
      "Yes, a PhD entrance exam is required. NET/JRF, CSIR-NET, SLET, GATE, or M.Phil. qualified candidates are exempted.",
  },
  {
    question: "What are the available modes of pursuing a PhD at Amrita University?",
    answer:
      "PhD programs are offered in Full-Time and Part-Time modes.",
  },
  {
    question: "Is work experience required for applying to a Part-Time PhD?",
    answer:
      "Yes, candidates applying for Part-Time PhD must be employed.",
  },
  {
    question: "What documents are required for the PhD application?",
    answer:
      "Applicants must submit UG/PG certificates, mark sheets, research proposal, ID proof, photographs, and NOC for part-time candidates.",
  },
  {
    question: "What is the PhD application timeline at Amrita University?",
    answer:
      "Admissions are conducted twice a year: January and July sessions.",
  },
  {
    question: "What is the fee structure for the PhD program?",
    answer:
      "The tuition fee is approximately ₹30,000 per annum with a registration fee of ₹1,000.",
  },
  {
    question: "Are scholarships or fellowships available for PhD scholars?",
    answer:
      "Yes. University scholarships, Visvesvaraya Ph.D. Scheme, and international scholarships are available for eligible candidates.",
  },
];

const universityData = {
  fullName: "PhD Admission in Amrita Vishwa Vidyapeetham Coimbatore",
  shortName: "Amrita University",
  phdEntranceExam:
    "Entrance Exam Required (NET/JRF, CSIR-NET, SLET, GATE, M.Phil. exempted)",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks or equivalent CGPA",
  workExperience: "Mandatory for part-time PhD candidates",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Completed application form",
    "UG & PG certificates and mark sheets",
    "Research proposal",
    "Passport-size photographs",
    "Government-issued ID proof",
    "No Objection Certificate (NOC) for part-time candidates",
  ],
  applicationTimeline:
    "January Session (January) / July Session (June)",
  approxFee:
    "₹30,000 per annum (Tuition Fee) + ₹1,000 (Registration Fee)",
  scholarshipAvailability:
    "University Scholarships, Visvesvaraya Ph.D. Scheme, International Scholarships",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO + META + FAQ SCHEMA */}
      <SEO
        title="PhD Admission in Amrita University Coimbatore"
        description="Complete PhD admission guidance for Amrita Vishwa Vidyapeetham Coimbatore including eligibility, entrance exam, part-time options, fee structure, scholarships, and application process."
        url="/amrita"
        keywords={[
          "PhD Admission in Amrita University",
          "Amrita University PhD eligibility",
          "Amrita Vishwa Vidyapeetham PhD entrance exam",
          "PhD admission in Coimbatore",
          "Part time PhD Amrita University",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About Amrita University</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Amrita Vishwa Vidyapeetham was
                established in 2003.
              </li>
              <li>
                <b>PhD Programs:</b> Doctoral programs began in the mid-2000s.
              </li>
              <li>
                <b>Annual PhD Strength:</b> Around 1,000 scholars enroll and
                graduate annually.
              </li>
              <li>
                <b>Why Choose Amrita University:</b> NAAC A++ grade, global
                research collaborations, and multidisciplinary excellence.
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
              <li>Full-time & part-time PhD modes</li>
              <li>Scholarships & fellowships</li>
              <li>Fee structure & application dates</li>
              <li>Required documents & NOC rules</li>
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
