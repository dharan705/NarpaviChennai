import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "Is there an entrance exam for PhD admission at Dr. MGR University?",
    answer:
      "Yes. Candidates must appear for the SIMATS Entrance Test. Applicants qualified in UGC-NET (including JRF), UGC-CSIR NET, SLET, GATE, or holding an M.Phil. degree are exempt.",
  },
  {
    question: "What is the minimum qualification required for PhD at Dr. MGR ERI?",
    answer:
      "A Master’s Degree such as M.E., M.Tech., M.Sc., M.A., M.C.A., or MBA with at least 55% marks or equivalent CGPA is required.",
  },
  {
    question: "Can I pursue a part-time PhD at Dr. MGR University?",
    answer:
      "Yes. Part-time PhD programs are available, and candidates must be employed and submit a No Objection Certificate (NOC).",
  },
  {
    question: "What is the mode of PhD programs at Dr. MGR University?",
    answer:
      "PhD programs are offered in both Full-Time and Part-Time modes.",
  },
  {
    question: "What documents are required for PhD admission at Dr. MGR ERI?",
    answer:
      "Required documents include UG & PG certificates, research proposal, passport-size photographs, ID proof, and NOC for part-time candidates.",
  },
  {
    question: "When does the PhD application process begin at Dr. MGR University?",
    answer:
      "Applications usually open in January and close by April every year.",
  },
  {
    question: "What is the fee structure for PhD programs at Dr. MGR ERI?",
    answer:
      "The tuition fee is approximately ₹75,000 per annum with an additional registration fee of ₹10,000.",
  },
  {
    question: "Are scholarships available for PhD students at Dr. MGR University?",
    answer:
      "Yes. Merit-based, need-based, and government scholarships are available for eligible PhD scholars.",
  },
  {
    question: "Why choose Dr. MGR University for a PhD?",
    answer:
      "Dr. MGR University is known for its interdisciplinary research, modern infrastructure, experienced faculty, and industry-oriented academic environment.",
  },
];

const universityData = {
  fullName: "PhD Admission in Chennai Dr. M.G.R. Educational and Research Institute",
  shortName: "Dr. MGR University",
  phdEntranceExam:
    "SIMATS Entrance Test (Exemptions: UGC-NET / CSIR-NET / SLET / GATE / M.Phil.)",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks or equivalent CGPA",
  workExperience:
    "Required for part-time PhD candidates",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Completed online application form",
    "UG & PG degree certificates and mark sheets",
    "Research proposal",
    "Passport-size photographs",
    "Government-issued ID proof",
    "No Objection Certificate (NOC) for part-time candidates",
  ],
  applicationTimeline: "January to April",
  approxFee:
    "₹75,000 per annum (Tuition Fee) + ₹10,000 (Registration Fee)",
  scholarshipAvailability:
    "Merit-Based / Need-Based / Government Scholarships",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO META + FAQ SCHEMA */}
      <SEO
        title="PhD Admission in Dr. MGR University Chennai | SIMATS PhD"
        description="Apply for PhD admission at Dr. M.G.R. Educational and Research Institute (SIMATS), Chennai. Check eligibility, entrance exam, fees, application dates, documents, and scholarships."
        url="/mgr-institute"
        keywords={[
          "PhD Admission in Dr MGR University",
          "SIMATS PhD admission",
          "Dr MGR ERI PhD eligibility",
          "Part time PhD Dr MGR University",
          "PhD in Chennai SIMATS",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About Dr. MGR University</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Established in 1988, Dr. M.G.R. Educational and Research Institute is a leading deemed university in Chennai.
              </li>
              <li>
                <b>PhD Programs:</b> Doctoral programs started in the early 2000s to strengthen interdisciplinary research.
              </li>
              <li>
                <b>Research Strength:</b> Around 1,000 PhD scholars enroll annually across multiple disciplines.
              </li>
              <li>
                <b>Why Choose Dr. MGR:</b> Modern infrastructure, strong industry linkage, and research-driven academic environment.
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
              <li>SIMATS Entrance Test for PhD</li>
              <li>Full-Time & Part-Time PhD options</li>
              <li>Industry-oriented research programs</li>
              <li>Affordable fee structure</li>
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
