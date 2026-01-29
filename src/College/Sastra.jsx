import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "Is the PhD entrance exam mandatory at SASTRA University?",
    answer:
      "Yes, SASTRA University conducts its own PhD entrance exam (such as SRET). Candidates qualified in UGC-NET, CSIR-NET, or GATE may be exempted.",
  },
  {
    question: "What qualifications are required to apply for a PhD at SASTRA?",
    answer:
      "Applicants must hold a Master’s degree with at least 55% marks or CGPA 6.0/10.",
  },
  {
    question: "Does SASTRA offer part-time PhD programs?",
    answer:
      "Yes, SASTRA offers both Full-Time and Part-Time PhD programs. Professional experience may be required for part-time candidates.",
  },
  {
    question: "What is the application timeline for PhD at SASTRA?",
    answer:
      "Admissions are generally conducted twice a year. January session applications usually start in October, while July session applications open around March.",
  },
  {
    question: "What documents are required for PhD admission at SASTRA?",
    answer:
      "Required documents include UG & PG certificates, research proposal, entrance exam scorecard or exemption proof, ID proof, NOC (for employed candidates), and photographs.",
  },
  {
    question: "Is scholarship or financial aid available at SASTRA?",
    answer:
      "Yes, SASTRA University provides scholarships and fellowships to eligible PhD scholars.",
  },
  {
    question: "How many research scholars are enrolled at SASTRA?",
    answer:
      "More than 2,000 scholars are currently pursuing PhD programs at SASTRA University.",
  },
  {
    question: "Why choose SASTRA University for PhD studies?",
    answer:
      "SASTRA is known for academic excellence, experienced faculty, strong research output, and world-class infrastructure.",
  },
];

const universityData = {
  fullName: "PhD Admission Assistance in SASTRA University Thanjavur | Guidances",
  shortName: "SASTRA",
  phdEntranceExam:
    "Mandatory (SRET / University Test). UGC-NET, CSIR-NET, or GATE qualified candidates may be exempted.",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks or CGPA 6.0/10",
  workExperience:
    "Professional experience may be mandatory for Part-Time PhD",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Completed PhD Application Form",
    "UG & PG Degree Certificates and Mark Sheets",
    "Transfer & Conduct Certificates",
    "Research Proposal / Synopsis",
    "Entrance Exam Scorecard or Exemption Proof",
    "Experience Certificate (Part-Time)",
    "No Objection Certificate (NOC) from Employer",
    "Community Certificate (if applicable)",
    "Date of Birth Proof",
    "Government-issued ID Proof",
    "Passport Size Photographs",
  ],
  applicationTimeline:
    "January Session: Applications start in October | July Session: Applications start in March",
  approxFee: "Approx. ₹3,05,000 per year",
  scholarshipAvailability: "Yes",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO META + FAQ SCHEMA */}
      <SEO
        title="PhD Admission in SASTRA University | Eligibility, Fees & Entrance Exam"
        description="Apply for PhD admission at SASTRA Deemed University, Thanjavur. Check eligibility, entrance exam, application dates, documents required, fees, and scholarship details."
        url="/sastra-university"
        keywords={[
          "PhD Admission in SASTRA University",
          "SASTRA PhD eligibility",
          "SASTRA PhD entrance exam",
          "SASTRA University PhD fees",
          "PhD admission in Thanjavur",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About SASTRA University</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Founded in 1984 as Shanmugha Engineering College.
              </li>
              <li>
                <b>PhD Programs:</b> Research programs launched in the early 2000s.
              </li>
              <li>
                <b>Research Strength:</b> Over 2,000 active PhD scholars.
              </li>
              <li>
                <b>Why Choose SASTRA:</b> Strong research culture, global recognition, and industry linkage.
              </li>
            </ul>
            <br />
            <h3>Key Highlights</h3>
            <ul>
              <li>Biannual PhD admissions</li>
              <li>SRET / NET / GATE accepted</li>
              <li>Strong research proposal evaluation</li>
              <li>Transparent admission process</li>
              <li>Globally recognized research output</li>
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
        <ul class="university-links">
  <li><a href="/phd-admission-assistance-in-anna-university">PhD Admission Assistance in Anna University</a></li>
  <li><a href="/phd-admission-assistance-in-anna-malai-university">PhD Admission Assistance in Annamalai University</a></li>
  <li><a href="/phd-admission-assistance-in-bharathiar-university">PhD Admission Assistance in Bharathiar University</a></li>
  <li><a href="/phd-admission-assistance-in-vit">PhD Admission Assistance in VIT University</a></li>
  <li><a href="/phd-admission-assistance-in-mgr-institute">PhD Admission Assistance in MGR Institute</a></li>
  <li><a href="/phd-admission-assistance-in-sathyabama-university">PhD Admission Assistance in Sathyabama University</a></li>
  <li><a href="/phd-admission-assistance-in-saveetha-university">PhD Admission Assistance in Saveetha University</a></li>
  <li><a href="/phd-admission-assistance-in-srm">PhD Admission Assistance in SRM University</a></li>
  <li><a href="/phd-admission-assistance-in-vels-vistas">PhD Admission Assistance in VELS University (VISTAS)</a></li>
  <li><a href="/phd-admission-assistance-in-biher">PhD Admission Assistance in BIHER</a></li>
  <li><a href="/phd-admission-assistance-in-amrita">PhD Admission Assistance in Amrita University</a></li>
  <li><a href="/phd-admission-assistance-in-hits">PhD Admission Assistance in HITS</a></li>
  <li><a href="/phd-admission-assistance-in-alagappa-university">PhD Admission Assistance in Alagappa University</a></li>
  <li><a href="/phd-admission-assistance-in-manu">PhD Admission Assistance in Manonmaniam Sundaranar University</a></li>
  <li><a href="/phd-admission-assistance-in-periyar-university">PhD Admission Assistance in Periyar University</a></li>
  <li><a href="/phd-admission-assistance-in-madurai-kamaraj-university">PhD Admission Assistance in Madurai Kamaraj University</a></li>
  <li><a href="/phd-admission-assistance-in-bharathidasan-university">PhD Admission Assistance in Bharathidasan University</a></li>
  <li><a href="/phd-admission-assistance-in-sastra">PhD Admission Assistance in SASTRA University</a></li>
  <li><a href="/phd-admission-assistance-in-sri-ramakrishna-engineering">PhD Admission Assistance in Sri Ramakrishna Engineering College</a></li>
  <li><a href="/phd-admission-assistance-in-sns">PhD Admission Assistance in SNS College</a></li>
  <li><a href="/phd-admission-assistance-in-cit">PhD Admission Assistance in CIT</a></li>
  <li><a href="/phd-admission-assistance-in-psg">PhD Admission Assistance in PSG College of Technology</a></li>
  <li><a href="/phd-admission-assistance-in-vinayaka-mission">PhD Admission Assistance in Vinayaka Missions University</a></li>
  <li><a href="/phd-admission-assistance-in-prist-university">PhD Admission Assistance in PRIST University</a></li>
  <li><a href="/phd-admission-assistance-in-periyar-maniammai-university">PhD Admission Assistance in Periyar Maniammai University</a></li>
  <li><a href="/phd-admission-assistance-in-st-peters-institute">PhD Admission Assistance in St Peter’s Institute</a></li>
  <li><a href="/phd-admission-assistance-in-scsstm">PhD Admission Assistance in Sri Chandrasekharendra Saraswathi University</a></li>
  <li><a href="/phd-admission-assistance-in-karpagam-academy">PhD Admission Assistance in Karpagam Academy</a></li>
  <li><a href="/phd-admission-assistance-in-karunya-university">PhD Admission Assistance in Karunya University</a></li>
  <li><a href="/phd-admission-assistance-in-vel-tech">PhD Admission Assistance in Vel Tech</a></li>
  <li><a href="/phd-admission-assistance-in-kalasalingam-university">PhD Admission Assistance in Kalasalingam Academy</a></li>
</ul>
          </div>
        </div>
      </div>

      {/* FAQ UI (Schema already handled by SEO.jsx) */}
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
