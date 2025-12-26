import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "Is the PhD entrance exam mandatory at SREC?",
    answer:
      "Yes, a PhD entrance exam is mandatory. Exams such as TANCET and GATE are commonly accepted under Anna University guidelines.",
  },
  {
    question: "What are the qualifications required to apply for a PhD at SREC?",
    answer:
      "Candidates must have a Master’s Degree with at least 55% marks or CGPA 6.0/10.",
  },
  {
    question: "Can I pursue a PhD part-time while working?",
    answer:
      "Yes, SREC offers part-time PhD programs. Professional experience and an employer-issued NOC are required.",
  },
  {
    question: "When should I apply for PhD admission at SREC?",
    answer:
      "Admissions are conducted in January and July sessions as per Anna University guidelines.",
  },
  {
    question: "What documents are required for PhD admission?",
    answer:
      "Documents include UG & PG certificates, entrance exam scorecard, research proposal, experience certificate, NOC, caste certificate, ID proof, and photographs.",
  },
  {
    question: "Does SREC offer scholarships or fellowships?",
    answer:
      "Yes, scholarships and financial assistance are available as per Anna University norms.",
  },
  {
    question: "What is the fee structure for PhD at SREC?",
    answer:
      "The total first-year fee is approximately ₹47,500.",
  },
  {
    question: "Why choose SREC for PhD studies?",
    answer:
      "SREC offers a strong research ecosystem, experienced faculty, modern labs, and a dedicated PhD research cell.",
  },
];

const universityData = {
  fullName:
    "PhD Admission in Sri Ramakrishna Engineering College, Coimbatore",
  shortName: "SREC",
  phdEntranceExam: "Mandatory (TANCET / GATE)",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks or CGPA 6.0/10",
  workExperience:
    "Professional experience required for Part-Time PhD candidates",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Completed PhD Application Form",
    "PG Degree Certificate and Mark Sheets",
    "UG Degree Certificate and Mark Sheets",
    "Entrance Exam Scorecard (TANCET / GATE, if applicable)",
    "Research Proposal / Statement of Purpose",
    "Work Experience Certificate (for Part-Time)",
    "No Objection Certificate (NOC) from Employer",
    "Transfer / Migration Certificate",
    "Community / Caste Certificate (if applicable)",
    "Date of Birth Proof",
    "Government ID Proof",
    "Passport Size Photographs",
  ],
  applicationTimeline:
    "January Session (Jan) and July Session (Mar–Apr)",
  approxFee: "Total First-Year Fee: Approximately ₹47,500",
  scholarshipAvailability: "Yes",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO + FAQ Schema */}
      <SEO
        title="PhD Admission in SREC Coimbatore | Eligibility, Fees & Entrance Exam"
        description="Apply for PhD admission at Sri Ramakrishna Engineering College (SREC), Coimbatore. Check eligibility, entrance exams, fees, documents, and scholarships."
        url="/srec"
        keywords={[
          "PhD Admission in SREC",
          "SREC PhD admission",
          "PhD admission in Coimbatore",
          "SREC PhD eligibility",
          "SREC entrance exam",
          "Part time PhD in SREC",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>
              About Sri Ramakrishna Engineering College (SREC), Coimbatore
            </h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Established in 1994 by the SNR Sons
                Charitable Trust.
              </li>
              <li>
                <b>PhD Programs:</b> Doctoral programs offered under Anna
                University since the early 2000s.
              </li>
              <li>
                <b>Annual Intake:</b> Around 30–50 scholars complete their PhD
                every year.
              </li>
              <li>
                <b>Why Choose SREC:</b> Research-focused environment, expert
                faculty, modern laboratories, and a dedicated PhD research cell.
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
              <li>Anna University–affiliated PhD programs</li>
              <li>Accepted exams: TANCET, GATE</li>
              <li>Dedicated PhD research cell</li>
              <li>Modern labs and academic infrastructure</li>
              <li>Support for both full-time and part-time scholars</li>
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
