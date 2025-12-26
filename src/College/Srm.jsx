import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "What is the mode of PhD offered at SRM University?",
    answer:
      "SRM Institute of Science and Technology offers both Full-Time and Part-Time PhD programs.",
  },
  {
    question: "What entrance exams are accepted for PhD admission at SRM?",
    answer:
      "Candidates must clear a department-level entrance exam followed by an interview. Applicants qualified in UGC-NET, CSIR-NET, GATE, or equivalent exams are exempted from the written test.",
  },
  {
    question: "What qualification is required for PhD at SRM?",
    answer:
      "Applicants must hold a Master’s degree with at least 55% marks or equivalent grade. M.Phil. candidates with 55% coursework marks are also eligible.",
  },
  {
    question: "Is work experience required for part-time PhD at SRM?",
    answer:
      "Yes, candidates applying for part-time PhD must be employed and submit a No Objection Certificate from their employer.",
  },
  {
    question: "What is the application timeline for SRM PhD admissions?",
    answer:
      "Main intake happens in June (applications open March–April). A secondary intake occurs in January (applications open in October).",
  },
  {
    question: "What documents are required for PhD admission?",
    answer:
      "Applicants must submit academic certificates, entrance exam score or exemption proof, research proposal, ID proof, photographs, and NOC for part-time candidates.",
  },
  {
    question: "What is the fee structure for PhD at SRM?",
    answer:
      "The annual fee is ₹1,05,000 for Engineering & Technology programs and ₹70,000 for Humanities, Science, and Medical disciplines.",
  },
  {
    question: "Are scholarships available for SRM PhD scholars?",
    answer:
      "Yes, full-time scholars may receive a fellowship of ₹25,000 per month. External scholarships are also available.",
  },
  {
    question: "Why choose SRM University for PhD?",
    answer:
      "SRM is known for expert faculty, advanced laboratories, interdisciplinary research, and strong research funding support.",
  },
];

const universityData = {
  fullName:
    "PhD Admission in Chennai SRM Institute of Science and Technology",
  shortName: "SRM University",
  phdEntranceExam:
    "Department-level Entrance Examination & Interview (NET/GATE qualified candidates are exempted)",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks or equivalent grade / M.Phil. with 55% coursework",
  workExperience:
    "Employment and NOC required for Part-Time PhD candidates",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Completed Online Application Form",
    "UG & PG Academic Transcripts",
    "Entrance Exam Scorecard or Exemption Proof",
    "Research Proposal",
    "Government-issued ID Proof",
    "Passport-size Photographs",
    "No Objection Certificate (for Part-Time candidates)",
  ],
  applicationTimeline:
    "June Session (March–April) | January Session (October)",
  approxFee:
    "₹1,05,000 per annum (Engineering & Technology) | ₹70,000 per annum (Humanities, Science & Medical)",
  scholarshipAvailability:
    "₹25,000/month Fellowship (Full-Time) + External Scholarships",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO + Dynamic FAQ Schema */}
      <SEO
        title="PhD Admission in SRM University Chennai | Eligibility, Fees & Fellowship"
        description="Apply for PhD admission at SRM Institute of Science and Technology, Chennai. Check eligibility, entrance exam details, fees, scholarships, and application dates."
        url="/srm-phd-admission"
        keywords={[
          "PhD Admission in SRM University",
          "SRM PhD admission",
          "PhD admission in Chennai",
          "SRM PhD eligibility",
          "SRM PhD entrance exam",
          "Part time PhD in SRM",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About SRM Institute of Science and Technology</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Established in 1985.
              </li>
              <li>
                <b>PhD Programs:</b> Doctoral programs offered since the early
                2000s.
              </li>
              <li>
                <b>Annual Intake:</b> Over 1,200 PhD scholars enroll every year.
              </li>
              <li>
                <b>Why Choose SRM:</b> Expert faculty, modern research labs,
                interdisciplinary research ecosystem, and strong funding
                support.
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="university-details-container">
            <div className="phdimg" />

            {/* ✅ Single SEO H1 */}
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
              <li>Department-level entrance & interview process</li>
              <li>NET/GATE qualified candidates get exemption</li>
              <li>₹25,000/month fellowship for full-time scholars</li>
              <li>Strong interdisciplinary research ecosystem</li>
              <li>Ideal for both fresh scholars and working professionals</li>
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
