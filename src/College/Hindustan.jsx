import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "Is the entrance exam mandatory for a PhD at Hindustan University?",
    answer:
      "Yes. A PhD entrance exam is required unless the candidate has qualified in UGC-NET, CSIR-NET, or GATE.",
  },
  {
    question: "What qualifications are needed to apply for a PhD at HITS?",
    answer:
      "Applicants must have a Master’s Degree with at least 55% marks or equivalent CGPA from a recognized university.",
  },
  {
    question: "Can working professionals apply for a part-time PhD at HITS?",
    answer:
      "Yes. Working professionals can apply for part-time PhD programs with a valid No Objection Certificate (NOC).",
  },
  {
    question: "What documents are required for the PhD application at HITS?",
    answer:
      "Required documents include UG & PG certificates, research proposal, ID proof, photographs, and NOC for part-time candidates.",
  },
  {
    question: "What is the application timeline for the PhD program at HITS?",
    answer:
      "PhD applications are usually accepted during January and July sessions.",
  },
  {
    question: "How much is the PhD fee at Hindustan University?",
    answer:
      "The approximate tuition fee is ₹40,000 per annum.",
  },
  {
    question: "Are scholarships available for PhD students at HITS?",
    answer:
      "Yes. HITS offers research fellowships, merit-based scholarships, sports scholarships, and corporate-funded scholarships.",
  },
];

const universityData = {
  fullName:
    "PhD Admission in Hindustan Institute of Technology and Science Chennai",
  shortName: "Hindustan University (HITS)",
  phdEntranceExam:
    "Entrance Exam Required (NET / CSIR-NET / GATE candidates exempted)",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks or equivalent CGPA",
  workExperience: "Required for part-time PhD candidates",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Completed application form",
    "UG & PG degree certificates and mark sheets",
    "Research proposal",
    "Passport-size photographs",
    "Government-issued ID proof",
    "No Objection Certificate (for part-time candidates)",
  ],
  applicationTimeline:
    "January Session / July Session",
  approxFee: "₹40,000 per annum",
  scholarshipAvailability:
    "Research Fellowships, Merit-Based Scholarships, Sports & Corporate Scholarships",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO META + FAQ SCHEMA */}
      <SEO
        title="PhD Admission in Hindustan University Chennai"
        description="Complete PhD admission guidance for Hindustan Institute of Technology and Science (HITS) Chennai including eligibility, entrance exam, part-time options, fee structure, scholarships, and application timeline."
        url="/hits"
        keywords={[
          "PhD Admission in Hindustan University",
          "HITS Chennai PhD",
          "Hindustan University PhD eligibility",
          "Part time PhD HITS",
          "Hindustan Institute of Technology PhD",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About Hindustan University</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Established in 1985, Hindustan Institute of Technology & Science is a reputed private university.
              </li>
              <li>
                <b>PhD Programs:</b> Introduced in the early 2000s to promote advanced research.
              </li>
              <li>
                <b>Research Strength:</b> Nearly 700 PhD scholars across multiple disciplines.
              </li>
              <li>
                <b>Why Choose HITS:</b> Advanced laboratories, global collaborations, and strong research culture.
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
              <li>UGC-recognized deemed university</li>
              <li>Full-time & part-time PhD options</li>
              <li>Entrance exam with exemptions</li>
              <li>Merit & research-based scholarships</li>
              <li>Strong industry & international collaborations</li>
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
