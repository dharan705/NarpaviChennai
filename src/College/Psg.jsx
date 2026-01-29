import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "Is the PhD entrance exam mandatory at PSG College of Technology?",
    answer:
      "Yes, the PhD entrance exam is mandatory. Candidates qualified in GATE, UGC-NET, JRF, or SET may be exempted.",
  },
  {
    question: "What qualifications are required to apply for a PhD at PSG?",
    answer:
      "Applicants must hold a Master’s degree with at least 55% marks or CGPA 6.0/10.",
  },
  {
    question: "Can I apply for a part-time PhD program at PSG while working?",
    answer:
      "Yes, PSG College of Technology offers part-time PhD programs. Work experience and an employer NOC are usually required.",
  },
  {
    question: "When does the PhD admission process begin at PSG?",
    answer:
      "The admission process typically starts in July, with entrance exams in September and interviews in October.",
  },
  {
    question: "What documents are needed for PhD admission at PSG?",
    answer:
      "Documents include UG & PG certificates, research proposal, ID proof, entrance exam proof (if exempted), photographs, and fee payment proof.",
  },
  {
    question: "Is financial assistance available for PSG PhD scholars?",
    answer:
      "Yes, PSG College of Technology provides fellowships and financial assistance based on eligibility.",
  },
  {
    question: "What research areas are available for PhD at PSG?",
    answer:
      "PSG offers PhD research in engineering, technology, management, applied sciences, and interdisciplinary domains.",
  },
  {
    question: "How many PhD students are admitted annually at PSG?",
    answer:
      "Approximately 80–100 PhD scholars are admitted every year.",
  },
];

const universityData = {
  fullName: "PhD Admission Assistance in PSG College of Technology Coimbatore | Guidances",
  shortName: "PSG",
  phdEntranceExam:
    "Mandatory (GATE / UGC-NET / JRF / SET qualified candidates may be exempted)",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks or CGPA 6.0/10",
  workExperience:
    "Professional experience may be mandatory for Part-Time PhD",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Completed Application Form",
    "UG & PG Degree Certificates and Mark Sheets",
    "10th and 12th Mark Sheets",
    "Research Proposal / Synopsis",
    "Experience Certificate (Part-Time)",
    "No Objection Certificate (NOC) from Employer",
    "Entrance Exam Qualification Proof (if exempted)",
    "Identity Proof (Aadhaar / Passport)",
    "Passport Size Photographs",
    "Application Fee Payment Proof",
  ],
  applicationTimeline:
    "Application Start: July | Application End: August | Entrance Exam: September | Interview: October",
  approxFee:
    "₹14,000 per year (Approx.) | Total for 3 years: ₹42,000",
  scholarshipAvailability: "Yes",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO META + FAQ SCHEMA */}
      <SEO
        title="PhD Admission in PSG College of Technology | Fees, Eligibility & Entrance Exam"
        description="Apply for PhD admission at PSG College of Technology, Coimbatore. Check eligibility, entrance exam, application dates, documents required, fees, and fellowship opportunities."
        url="/psg"
        keywords={[
          "PhD Admission in PSG College of Technology",
          "PSG PhD eligibility",
          "PSG PhD entrance exam",
          "PSG College of Technology PhD fees",
          "PhD admission in Coimbatore",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About PSG College of Technology</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Established in 1951 by PSG & Sons’ Charities Trust.
              </li>
              <li>
                <b>PhD Programs:</b> Research programs offered in collaboration with Anna University.
              </li>
              <li>
                <b>Research Strength:</b> 80–100 PhD scholars enrolled annually across disciplines.
              </li>
              <li>
                <b>Why Choose PSG:</b> Industry collaborations, strong research culture, and expert faculty.
              </li>
            </ul>
            <br />
             <h3>Key Highlights</h3>
            <ul>
              <li>GATE / NET / JRF candidates may get direct interview</li>
              <li>Strong industry and research collaborations</li>
              <li>Affordable PhD fee structure</li>
              <li>Excellent publication and patent support</li>
              <li>Ideal for full-time and working professionals</li>
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
