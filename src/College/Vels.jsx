import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "What are the eligibility criteria for PhD admission at VISTAS?",
    answer:
      "Applicants must have a Master’s Degree with at least 55% marks or equivalent CGPA from a recognized university.",
  },
  {
    question: "Is an entrance exam mandatory for PhD admission at VISTAS?",
    answer:
      "Yes. The entrance exam is mandatory, but exemptions are given to candidates qualified in UGC-NET/JRF, CSIR-NET/JRF, SLET, GATE, or M.Phil.",
  },
  {
    question: "Does VISTAS offer part-time PhD programs?",
    answer:
      "Yes. VISTAS offers both Full-Time and Part-Time PhD programs. Employed candidates must submit an NOC from their employer.",
  },
  {
    question: "What documents are required for PhD admission?",
    answer:
      "Documents include application form, UG & PG certificates, research proposal, ID proof, photographs, and NOC for part-time candidates.",
  },
  {
    question: "When can I apply for PhD admission at VISTAS?",
    answer:
      "Admissions are conducted twice a year: January Session and July Session.",
  },
  {
    question: "What is the PhD fee structure at VISTAS?",
    answer:
      "The annual PhD fee ranges from ₹35,000 to ₹75,000 depending on the discipline.",
  },
  {
    question: "Are scholarships available for PhD students at VISTAS?",
    answer:
      "Yes. Merit-based, need-based, and government scholarships are available for eligible candidates.",
  },
  {
    question: "Why should I choose VISTAS for a PhD?",
    answer:
      "VISTAS offers modern research facilities, experienced faculty, and interdisciplinary doctoral programs.",
  },
];

const universityData = {
  fullName:
    "PhD Admission Assistance in Chennai Vels Institute of Science Technology & Advanced Studies | Guidances",
  shortName: "VISTAS",
  phdEntranceExam:
    "Mandatory (Exemptions: UGC-NET/JRF, CSIR-NET/JRF, SLET, GATE, M.Phil.)",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks or equivalent CGPA",
  workExperience:
    "Required for Part-Time PhD candidates",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Completed online application form",
    "UG & PG degree certificates and mark sheets",
    "Research proposal",
    "Passport-size photographs",
    "Government-issued ID proof",
    "No Objection Certificate (Part-Time candidates)",
  ],
  applicationTimeline:
    "January Session (January) | July Session (June)",
  approxFee: "₹35,000 – ₹75,000 per year",
  scholarshipAvailability:
    "Merit-Based / Need-Based / Government Scholarships",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO + Dynamic FAQ Schema */}
      <SEO
        title="PhD Admission in VISTAS Chennai | Eligibility, Fees & Entrance Exam"
        description="Apply for PhD admission at Vels Institute of Science, Technology & Advanced Studies (VISTAS), Chennai. Check eligibility, entrance exam, fees, scholarships, and documents."
        url="/vistas-phd-admission"
        keywords={[
          "PhD Admission in VISTAS",
          "Vels University PhD admission",
          "PhD admission in Chennai",
          "VISTAS PhD eligibility",
          "Part time PhD in Vels University",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About Vels Institute of Science, Technology & Advanced Studies</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Established in 1992.
              </li>
              <li>
                <b>PhD Programs:</b> Introduced in the early 2000s to promote
                advanced research.
              </li>
              <li>
                <b>Annual Intake:</b> Over 800 PhD scholars enroll every year.
              </li>
              <li>
                <b>Why Choose VISTAS:</b> Modern laboratories, skilled faculty,
                and strong interdisciplinary research culture.
              </li>
            </ul>
            <br />
             <h3>Key Highlights</h3>
            <ul>
              <li>UGC-recognized PhD programs</li>
              <li>Entrance exam with national-level exemptions</li>
              <li>Flexible part-time PhD for working professionals</li>
              <li>Modern research labs and infrastructure</li>
              <li>Strong academic and interdisciplinary focus</li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="university-details-container">
            <div className="phdimg" />

            {/* ✅ Single H1 */}
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
