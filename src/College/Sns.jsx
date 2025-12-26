import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "Is there an entrance exam for PhD admission at SNS College of Technology?",
    answer:
      "Yes, a PhD entrance exam is mandatory. The exam is typically conducted by Anna University, followed by an interview.",
  },
  {
    question: "What are the minimum eligibility criteria for a PhD at SNS Tech?",
    answer:
      "Applicants must have a Master’s degree with at least 55% marks or a CGPA of 6.0/10.",
  },
  {
    question: "Is work experience necessary for applying to a PhD program?",
    answer:
      "Work experience is generally required for part-time PhD applicants along with a No Objection Certificate from the employer.",
  },
  {
    question: "Does SNS College of Technology offer full-time and part-time PhD modes?",
    answer:
      "Yes, SNS College of Technology offers both Full-Time and Part-Time PhD programs.",
  },
  {
    question: "What documents are required for PhD admission at SNS Tech?",
    answer:
      "Documents include UG & PG certificates, photo ID proof, experience certificate and NOC (for part-time), entrance exam scorecard, and a research proposal.",
  },
  {
    question: "When can I apply for the PhD program?",
    answer:
      "There are two admission cycles: January session (applications open in October) and July session (applications open in April).",
  },
  {
    question: "Is there any financial support or scholarship available?",
    answer:
      "Yes, scholarships and fellowships are available as per university norms and funded research projects.",
  },
  {
    question: "Why should I choose SNS College of Technology for my PhD?",
    answer:
      "SNS Tech offers NAAC A++ accreditation, autonomous status, experienced research mentors, modern laboratories, and active funded research projects.",
  },
];

const universityData = {
  fullName: "PhD Admission in SNS College of Technology, Coimbatore",
  shortName: "SNS Tech",
  phdEntranceExam: "Yes (Conducted via Anna University)",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks or CGPA 6.0/10",
  workExperience:
    "Professional experience may be mandatory for Part-Time PhD candidates",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Completed PhD Application Form",
    "PG Degree Certificate and Mark Sheets",
    "UG Degree Certificate and Mark Sheets",
    "Proof of Date of Birth",
    "Community / Category Certificate (if applicable)",
    "No Objection Certificate (for Part-Time candidates)",
    "Experience Certificate (for Part-Time candidates)",
    "Research Proposal / Synopsis",
    "Entrance Exam Scorecard (if applicable)",
    "Photo ID Proof",
    "Passport Size Photographs",
    "Transfer / Migration Certificate (if applicable)",
  ],
  applicationTimeline:
    "January Session: Applications from October | July Session: Applications from April",
  approxFee:
    "Approximately ₹1,50,000 for the entire duration of the PhD program",
  scholarshipAvailability: "Yes",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO + FAQ Schema */}
      <SEO
        title="PhD Admission in SNS College of Technology | Eligibility, Fees & Entrance Exam"
        description="Apply for PhD admission at SNS College of Technology, Coimbatore. Check eligibility, entrance exam details, fees, application timeline, documents required, and scholarships."
        url="/sns"
        keywords={[
          "PhD Admission in SNS College of Technology",
          "SNS Tech PhD admission",
          "SNS College PhD eligibility",
          "SNS Tech PhD entrance exam",
          "PhD admission in Coimbatore",
          "Anna University affiliated PhD colleges",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About SNS College of Technology (SNSCT)</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Founded in 2002 by the SNS Charitable Trust, SNSCT is an autonomous institution with strong technical credentials.
              </li>
              <li>
                <b>PhD Programs:</b> Research programs were launched after autonomy across major engineering and management disciplines.
              </li>
              <li>
                <b>Annual Research Intake:</b> Around 70–100 PhD scholars are admitted annually.
              </li>
              <li>
                <b>Why Choose SNSCT:</b> NAAC A++ accreditation, autonomous status, industry-linked research, modern labs, and funded projects including MeitY grants.
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
              <li>Anna University affiliated PhD research programs</li>
              <li>NAAC A++ accredited autonomous institution</li>
              <li>Industry-academia collaborative research</li>
              <li>Well-equipped laboratories and research centers</li>
              <li>Facilities for full-time and part-time scholars</li>
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
