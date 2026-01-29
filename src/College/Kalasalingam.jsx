import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "Is a PhD entrance exam mandatory at Kalasalingam University?",
    answer:
      "Yes. The PhD entrance exam is mandatory unless specific exemptions are announced by the university.",
  },
  {
    question: "What qualifications are required to apply for a PhD at KARE?",
    answer:
      "Applicants must hold a Master’s Degree such as M.E, M.Tech, M.Sc, M.A, MBA, or MCA with at least 55% marks or CGPA 6.0/10.",
  },
  {
    question: "Is work experience required for PhD admission?",
    answer:
      "Work experience may be mandatory for candidates applying under the part-time PhD category.",
  },
  {
    question: "What is the duration of the PhD program at Kalasalingam University?",
    answer:
      "Full-time PhD: 3–6 years. Part-time PhD: 4–8 years.",
  },
  {
    question: "What documents are required for PhD admission?",
    answer:
      "Required documents include academic certificates, entrance exam scorecard, research proposal, CV, ID proof, photographs, and experience certificate for part-time applicants.",
  },
  {
    question: "When does the application process start?",
    answer:
      "For the June intake, applications usually open in March and close by May.",
  },
  {
    question: "What is the annual fee for the PhD program at KARE?",
    answer:
      "The approximate annual fee is ₹1,00,000 for both full-time and part-time PhD programs.",
  },
  {
    question: "Are scholarships available for PhD students at KARE?",
    answer:
      "Yes. Scholarships and fellowships are available for eligible PhD scholars.",
  },
];

const universityData = {
  fullName:
    "PhD Admission Assistance in Kalasalingam Academy of Research and Education Krishnankoil | Guidances",
  shortName: "KARE",
  phdEntranceExam: "Mandatory",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks or CGPA 6.0/10",
  workExperience:
    "Required for part-time PhD candidates",
  modeOfPhd:
    "Full-Time: 3–6 Years | Part-Time: 4–8 Years",
  documentsRequired: [
    "Completed online application form",
    "UG & PG degree certificates and mark sheets",
    "Entrance exam scorecard (if applicable)",
    "Research proposal / Statement of Purpose",
    "Curriculum Vitae (CV)",
    "Passport-size photographs",
    "Transfer Certificate (TC)",
    "Government-issued ID proof",
    "Community certificate (if applicable)",
    "Experience certificate (for part-time candidates)",
  ],
  applicationTimeline:
    "June Intake: Applications usually open in March and close by May",
  approxFee: "₹1,00,000 per annum",
  scholarshipAvailability:
    "University Fellowships, Government & Sponsored Scholarships",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO META + FAQ SCHEMA */}
      <SEO
        title="PhD Admission in Kalasalingam University | KARE PhD"
        description="PhD admission guidance for Kalasalingam Academy of Research and Education (KARE), Krishnankoil. Check eligibility, entrance exam, fee structure, scholarships, duration, and application timeline."
        url="/kalasalingam-academy"
        keywords={[
          "PhD Admission in Kalasalingam University",
          "KARE PhD admission",
          "Kalasalingam Academy PhD eligibility",
          "Part time PhD KARE",
          "KARE Krishnankoil PhD",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About Kalasalingam University</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Established in 1984, KARE is a reputed deemed-to-be university.
              </li>
              <li>
                <b>PhD Programs:</b> Introduced in 2009 to strengthen structured research development.
              </li>
              <li>
                <b>Research Strength:</b> Around 200 active PhD scholars across disciplines.
              </li>
              <li>
                <b>Why Choose KARE:</b> Strong research culture, expert faculty, and innovation-driven ecosystem.
              </li>
            </ul>
            <br />
             <h3>Key Highlights</h3>
            <ul>
              <li>Deemed-to-be University (UGC)</li>
              <li>Strong research & innovation ecosystem</li>
              <li>Full-time & part-time PhD options</li>
              <li>Support for publications & patents</li>
              <li>Dedicated PhD supervision</li>
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
                <span className="detail-label">Mode & Duration</span>
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
