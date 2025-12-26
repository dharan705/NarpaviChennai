import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "Is a PhD entrance exam mandatory at CIT?",
    answer:
      "Yes. Coimbatore Institute of Technology (CIT) follows Anna University norms and requires candidates to appear for a PhD entrance exam.",
  },
  {
    question: "What qualifications are required to apply for a PhD at CIT?",
    answer:
      "Candidates must have a Master’s Degree with at least 55% marks or CGPA 6.0 on a 10-point scale.",
  },
  {
    question: "Can working professionals apply for a PhD at CIT?",
    answer:
      "Yes. Working professionals can apply for part-time PhD programs with relevant experience and a No Objection Certificate (NOC).",
  },
  {
    question: "What is the mode of PhD offered at CIT?",
    answer:
      "CIT offers both Full-Time and Part-Time PhD programs.",
  },
  {
    question: "When does CIT open PhD applications?",
    answer:
      "PhD admissions usually open twice a year, following Anna University schedules for January and July sessions.",
  },
  {
    question: "What is the approximate fee for a PhD at CIT?",
    answer:
      "The approximate annual fee is ₹28,170, totaling about ₹84,510 for a standard 3-year PhD program.",
  },
  {
    question: "Are scholarships available for PhD scholars at CIT?",
    answer:
      "Yes. Eligible scholars can apply for government-funded and research agency fellowships.",
  },
  {
    question: "Why is CIT a preferred choice for PhD studies?",
    answer:
      "CIT is an Anna University–approved research center with strong faculty, industry collaborations, and a research-driven academic culture.",
  },
];

const universityData = {
  fullName: "PhD Admission in Coimbatore Institute of Technology, Coimbatore",
  shortName: "CIT Coimbatore",
  phdEntranceExam: "Entrance Exam as per Anna University norms",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks or CGPA 6.0",
  workExperience:
    "Required for part-time PhD candidates",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "UG & PG degree certificates and mark sheets",
    "10th & 12th certificates (DOB proof)",
    "Entrance exam scorecard (if applicable)",
    "Research proposal / synopsis",
    "No Objection Certificate (for part-time candidates)",
    "Experience certificate (if applicable)",
    "Transfer / Migration Certificate",
    "Passport-size photographs",
    "Government-issued ID proof",
  ],
  applicationTimeline:
    "January Session (Oct–Nov) / July Session (Mar–Apr) as per Anna University schedule",
  approxFee:
    "₹28,170 per year (approx.) – ₹84,510 for 3 years",
  scholarshipAvailability:
    "Government & Research Agency Fellowships",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO META + FAQ SCHEMA */}
      <SEO
        title="PhD Admission in Coimbatore Institute of Technology"
        description="Complete PhD admission guidance for Coimbatore Institute of Technology (CIT) including eligibility, entrance exam, part-time options, fee structure, documents required, and scholarships."
        url="/coimbatore-institute"
        keywords={[
          "PhD Admission in CIT Coimbatore",
          "Coimbatore Institute of Technology PhD",
          "CIT PhD eligibility",
          "Part time PhD CIT",
          "Anna University PhD CIT",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About Coimbatore Institute of Technology (CIT)</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Established in 1956 as a government-aided autonomous institution.
              </li>
              <li>
                <b>PhD Programs:</b> Introduced under Anna University in the early 2000s.
              </li>
              <li>
                <b>Research Strength:</b> Around 40–60 PhD scholars admitted annually.
              </li>
              <li>
                <b>Why Choose CIT:</b> Strong academic foundation, experienced faculty, and active industry collaborations.
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
              <li>Anna University–approved research center</li>
              <li>Affordable PhD fee structure</li>
              <li>Industry-linked research projects</li>
              <li>Government & agency fellowships</li>
              <li>Strong academic and research culture</li>
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
