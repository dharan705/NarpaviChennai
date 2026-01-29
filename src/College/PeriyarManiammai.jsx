import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "Is the PhD entrance exam mandatory at PMIST?",
    answer:
      "Yes. Appearing for the PhD entrance exam is mandatory at Periyar Maniammai Institute of Science & Technology (PMIST).",
  },
  {
    question: "What is the minimum qualification required for PhD admission at PMIST?",
    answer:
      "Candidates must hold a Master’s Degree such as ME, M.Tech, M.Sc, M.A, MBA, or MCA with at least 55% marks or CGPA 6.0/10.",
  },
  {
    question: "Is work experience mandatory for part-time PhD at PMIST?",
    answer:
      "Yes. Professional work experience is mandatory for applicants applying for a part-time PhD program at PMIST.",
  },
  {
    question: "What modes of PhD are offered at PMIST?",
    answer:
      "PMIST offers both Full-Time and Part-Time PhD programs.",
  },
  {
    question: "What documents are required for PhD application at PMIST?",
    answer:
      "Documents include UG & PG certificates, mark sheets, ID proof, photographs, research proposal, experience certificate (for part-time), NOC (if employed), and qualifying exam certificates like UGC-NET or GATE if applicable.",
  },
  {
    question: "What is the application timeline for PhD admission at PMIST?",
    answer:
      "Applications usually start in April and close by June, followed by entrance exams and interviews.",
  },
  {
    question: "Are scholarships available for PhD scholars at PMIST?",
    answer:
      "Yes. PMIST provides scholarship and fellowship opportunities for eligible PhD scholars.",
  },
  {
    question: "What is the annual fee structure for PhD at PMIST?",
    answer:
      "The annual tuition fee ranges between ₹26,500 and ₹75,500, with an average of ₹64,718.",
  },
  {
    question: "Can working professionals apply for a PhD at PMIST?",
    answer:
      "Yes. Working professionals are encouraged to apply for a part-time PhD, subject to eligibility and submission of a No Objection Certificate.",
  },
];

const universityData = {
  fullName:
    "PhD Admission Assistance in Thanjavur Periyar Maniammai Institute of Science & Technology | Guidances",
  shortName: "PMIST",
  phdEntranceExam: "Mandatory",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks or CGPA 6.0/10",
  workExperience:
    "Mandatory for Part-Time PhD applicants",
  modeOfPhd:
    "Full-Time / Part-Time",
  documentsRequired: [
    "Completed Application Form",
    "Photo ID Proof (Aadhaar / Passport / Voter ID / Driving License)",
    "Passport-sized Photographs",
    "UG Degree Certificate and Mark Sheets",
    "PG Degree Certificate and Mark Sheets",
    "Transfer / Migration Certificate",
    "Community Certificate (if applicable)",
    "Research Proposal / SOP",
    "Experience Certificate (Part-Time candidates)",
    "No Objection Certificate (NOC) from employer",
    "UGC-NET / CSIR-NET / GATE / SLET Certificate (if applicable)",
    "Fee Payment Receipt",
  ],
  applicationTimeline:
    "Application Start: April | Application End: June | Entrance Exam & Interview: After application period",
  approxFee:
    "₹26,500 – ₹75,500 per year (Average: ₹64,718)",
  scholarshipAvailability:
    "Yes – Scholarships and Fellowships available",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO META + FAQ SCHEMA */}
      <SEO
        title="PhD Admission in PMIST Thanjavur | Fees, Eligibility & Entrance Exam"
        description="Apply for PhD admission at Periyar Maniammai Institute of Science & Technology (PMIST), Thanjavur. Check eligibility, entrance exam, application dates, documents, fees, and scholarships."
        url="/periyar-maniammai-university"
        keywords={[
          "PhD Admission in PMIST",
          "PMIST PhD eligibility",
          "Periyar Maniammai PhD entrance exam",
          "PMIST PhD fees",
          "PhD in Thanjavur",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About Periyar Maniammai Institute of Science & Technology (PMIST)</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Established in 1988 with a strong social and academic mission.
              </li>
              <li>
                <b>PhD Programs:</b> Research programs introduced early to promote innovation in science, technology, and humanities.
              </li>
              <li>
                <b>Research Strength:</b> Around 60–100 PhD scholars admitted annually across multiple disciplines.
              </li>
              <li>
                <b>Why Choose PMIST:</b> Inclusive research culture, skilled faculty, and emphasis on sustainable development.
              </li>
            </ul>
            <br />
             <h3>Key Highlights</h3>
            <ul>
              <li>Strong focus on sustainable and social research</li>
              <li>Transparent PhD admission process</li>
              <li>Modern research facilities and digital resources</li>
              <li>Excellent option for working professionals</li>
              <li>Interdisciplinary PhD opportunities</li>
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
