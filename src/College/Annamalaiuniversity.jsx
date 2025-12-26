import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "Is the PhD entrance exam mandatory at Annamalai University?",
    answer:
      "Yes, it is mandatory unless you are exempted by qualifying in exams like UGC-JRF, NET, SLET, SET, GATE, CSIR, ICHR, ICPR, ICSSR, or if you hold an M.Phil. degree.",
  },
  {
    question: "What is the minimum qualification required to apply for a PhD?",
    answer:
      "A Master’s Degree with at least 55% marks or a CGPA of 5.5 on a 10-point scale is required.",
  },
  {
    question: "Is work experience required for a PhD at Annamalai University?",
    answer:
      "Yes, work experience is required for part-time PhD candidates.",
  },
  {
    question: "What are the available modes of PhD at Annamalai University?",
    answer:
      "PhD is offered in Full-Time and Part-Time (Internal and External) modes.",
  },
  {
    question: "What is the application timeline for PhD admission?",
    answer:
      "Admissions are conducted twice a year: December/January and June/July sessions.",
  },
  {
    question: "What is the approximate fee structure for PhD?",
    answer:
      "The tuition fee ranges from ₹30,000 to ₹50,000 per annum plus an application fee of ₹1,000.",
  },
  {
    question: "What scholarships or fellowships are available?",
    answer:
      "Scholarships include Post-Matric Scholarship, Research Incentive, DST-PURSE Fellowship, and other government scholarships.",
  },
  {
    question: "What documents are required for the application?",
    answer:
      "Applicants must submit degree certificates, mark sheets, community/experience certificates (if applicable), NOC, entrance score proof, research proposal, and photographs.",
  },
  {
    question: "Can I apply for a PhD without clearing the entrance exam?",
    answer:
      "Yes, candidates with national-level qualifications like UGC-JRF, NET, or M.Phil. are exempted from the entrance exam.",
  },
];

const universityData = {
  fullName: "PhD Admission in Annamalai University Chidambaram",
  shortName: "AU Chidambaram",
  phdEntranceExam:
    "Mandatory (NET/JRF, SET, GATE, CSIR, M.Phil. exempted)",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks or CGPA 5.5",
  workExperience: "Required for part-time PhD candidates",
  modeOfPhd: "Full-Time / Part-Time (Internal / External)",
  documentsRequired: [
    "Completed application form",
    "UG & PG certificates and mark sheets",
    "Community certificate (if applicable)",
    "Experience certificate (for part-time candidates)",
    "NOC from employer",
    "Entrance exam scorecard or exemption proof",
    "Research proposal",
    "Passport-size photographs",
  ],
  applicationTimeline:
    "December/January (Nov–Dec) or June/July (May–June)",
  approxFee:
    "₹30,000–₹50,000 per annum + ₹1,000 application fee",
  scholarshipAvailability:
    "Post-Matric Scholarship, DST-PURSE Fellowship, Research Incentives, Government Scholarships",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO + META + FAQ SCHEMA */}
      <SEO
        title="PhD Admission in Annamalai University Chidambaram"
        description="Complete PhD admission guidance for Annamalai University Chidambaram including eligibility, entrance exam, fees, part-time options, scholarships, and application process."
        url="/annamalai-university"
        keywords={[
          "PhD Admission in Annamalai University",
          "Annamalai University PhD eligibility",
          "Annamalai University PhD entrance exam",
          "PhD admission in Chidambaram",
          "Part time PhD Annamalai University",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About Annamalai University</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Founded in 1929 by Rajah Sir S. R. M.
                Annamalai Chettiar.
              </li>
              <li>
                <b>PhD Programs:</b> Offered through the Centre for Research for
                decades.
              </li>
              <li>
                <b>Research Strength:</b> Over 2,200 scholars on campus and
                13,000+ in affiliated institutions.
              </li>
              <li>
                <b>Why Choose Annamalai University:</b> Strong academic legacy,
                experienced faculty, and wide research scope.
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
              <li>Full-time & part-time modes</li>
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
