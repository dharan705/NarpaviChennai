import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "Is the entrance exam mandatory for PhD admission at Karpagam Academy?",
    answer:
      "Yes. Appearing for the PhD entrance exam is mandatory unless the candidate is exempted as per UGC norms.",
  },
  {
    question: "What is the minimum qualification required to apply for a PhD?",
    answer:
      "Applicants must hold a Master’s degree with at least 55% marks or CGPA 6.0 on a 10-point scale.",
  },
  {
    question: "Can working professionals apply for part-time PhD at Karpagam?",
    answer:
      "Yes. Part-time PhD is available, and professional work experience is usually mandatory.",
  },
  {
    question: "What documents are required during the application process?",
    answer:
      "Documents include UG & PG certificates, entrance exam scorecard, research proposal, ID proof, Transfer Certificate, and caste certificate if applicable.",
  },
  {
    question: "When does the PhD admission process begin?",
    answer:
      "Admissions generally begin in December for the January session and in June for the July session.",
  },
  {
    question: "Is financial assistance or fellowship available?",
    answer:
      "Yes. Eligible candidates may avail fellowships or financial assistance as per university norms.",
  },
  {
    question: "Does Karpagam support interdisciplinary research?",
    answer:
      "Yes. The university encourages interdisciplinary research and collaborates with industries and institutions.",
  },
];

const universityData = {
  fullName:
    "PhD Admission Assistance in Karpagam Academy of Higher Education Coimbatore | Guidances",
  shortName: "Karpagam Academy",
  phdEntranceExam: "Mandatory",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks or CGPA 6.0/10",
  workExperience:
    "Required for part-time PhD candidates",
  modeOfPhd:
    "Full-Time: Minimum 3 Years | Part-Time: 4–6 Years",
  documentsRequired: [
    "Completed application form",
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
    "January Session: December–January | July Session: June–July",
  approxFee: "Approximately ₹1,00,000 per annum",
  scholarshipAvailability:
    "University Fellowships & Financial Assistance Available",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO META + FAQ SCHEMA */}
      <SEO
        title="PhD Admission in Karpagam Academy | Karpagam PhD"
        description="PhD admission guidance for Karpagam Academy of Higher Education, Coimbatore. Check eligibility, entrance exam, fee structure, application timeline, documents required, and scholarships."
        url="/karpagam-academy"
        keywords={[
          "PhD Admission in Karpagam Academy",
          "Karpagam Academy PhD admission",
          "Karpagam University PhD eligibility",
          "Part time PhD Karpagam",
          "PhD in Coimbatore Karpagam",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About Karpagam Academy of Higher Education</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Established in 2008, Karpagam Academy is a reputed institution for higher education and research.
              </li>
              <li>
                <b>PhD Programs:</b> Doctoral programs were introduced soon after establishment to promote advanced research.
              </li>
              <li>
                <b>Research Strength:</b> Multiple departments actively guide PhD scholars every year.
              </li>
              <li>
                <b>Why Choose Karpagam:</b> Supportive faculty, interdisciplinary research culture, and modern academic infrastructure.
              </li>
            </ul>
             <h3>Key Highlights</h3>
            <ul>
              <li>Located in Coimbatore – Tamil Nadu’s education hub</li>
              <li>Strong interdisciplinary research focus</li>
              <li>Industry-academia collaborations</li>
              <li>Modern infrastructure and labs</li>
              <li>Supportive PhD supervision system</li>
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
