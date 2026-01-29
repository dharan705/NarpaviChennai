import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "Is a PhD entrance exam mandatory at Madurai Kamaraj University?",
    answer:
      "Yes. MKU conducts a dedicated entrance exam (MKU CET) for PhD admissions, unless candidates are exempted under specific eligibility criteria.",
  },
  {
    question: "What is the eligibility criteria for applying to a PhD at MKU?",
    answer:
      "Applicants must hold a Master’s Degree (M.E., M.Tech., M.Sc., M.A., MBA, MCA, etc.) with at least 55% marks or CGPA 6.0/10.",
  },
  {
    question: "Does MKU offer part-time PhD programs?",
    answer:
      "Yes. MKU offers both full-time and part-time PhD programs. Professional work experience is generally required for part-time candidates.",
  },
  {
    question: "What documents are required for PhD admission at MKU?",
    answer:
      "Required documents include degree certificates, mark sheets, research proposal, NOC for part-time candidates, ID proof, and fee payment proof.",
  },
  {
    question: "How often does MKU conduct PhD admissions?",
    answer:
      "MKU conducts two PhD admission cycles every year, usually during January–February and July–August.",
  },
  {
    question: "What is the approximate fee structure for PhD at MKU?",
    answer:
      "Science and Professional disciplines cost around ₹1,13,650, while Arts and Humanities disciplines cost approximately ₹25,000 per year.",
  },
  {
    question: "Are scholarships or fellowships available?",
    answer:
      "Yes. MKU provides scholarships and fellowships to eligible PhD scholars.",
  },
  {
    question: "Why choose MKU for PhD studies?",
    answer:
      "MKU is known for its strong research ecosystem, experienced faculty, multidisciplinary departments, and academic excellence since 1966.",
  },
  {
    question: "Is a research proposal mandatory?",
    answer:
      "Yes. A brief research proposal or synopsis is mandatory during the application process.",
  },
];

const universityData = {
  fullName: "PhD Admission Assistance in Madurai Kamaraj University | Guidances",
  shortName: "MKU",
  phdEntranceExam: "MKU CET (Mandatory)",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks or CGPA 6.0/10",
  workExperience:
    "Required for part-time PhD candidates",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Completed application form",
    "UG & PG degree certificates and mark sheets",
    "Community certificate (if applicable)",
    "No Objection Certificate (for part-time candidates)",
    "Research proposal / synopsis",
    "NET / SET / GATE certificate (if exempted)",
    "Transfer / Migration certificate (if applicable)",
    "ID proof",
    "Proof of fee payment",
    "Experience certificate (for part-time candidates)",
  ],
  applicationTimeline:
    "January–February Session & July–August Session (twice every year)",
  approxFee:
    "Science & Professional: ₹1,13,650 | Arts & Humanities: ~₹25,000 per year",
  scholarshipAvailability: "Yes",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO META + FAQ SCHEMA */}
      <SEO
        title="PhD Admission in Madurai Kamaraj University | MKU PhD"
        description="PhD admission guidance for Madurai Kamaraj University. Check eligibility, entrance exam (MKU CET), fees, application dates, documents required, and scholarships."
        url="/madurai-kamaraj-university"
        keywords={[
          "PhD Admission in Madurai Kamaraj University",
          "MKU PhD admission",
          "Madurai Kamaraj University PhD eligibility",
          "Part time PhD MKU",
          "PhD in Madurai",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About Madurai Kamaraj University</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Established in 1966, MKU is one of Tamil Nadu’s premier state universities.
              </li>
              <li>
                <b>PhD Programs:</b> Doctoral programs began in the 1970s, promoting advanced research.
              </li>
              <li>
                <b>Research Strength:</b> Over 1,800 PhD scholars enroll annually across disciplines.
              </li>
              <li>
                <b>Why Choose MKU:</b> Renowned faculty, diverse research departments, and a strong academic legacy.
              </li>
            </ul>
            <h3>Key Highlights</h3>
            <ul>
              <li>Two PhD admission cycles every year</li>
              <li>Dedicated MKU CET entrance exam</li>
              <li>Strong research and academic heritage</li>
              <li>Full-Time & Part-Time PhD options</li>
              <li>Scholarships and financial support available</li>
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
