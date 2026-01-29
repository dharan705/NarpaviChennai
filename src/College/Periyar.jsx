import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "Is there an entrance exam for PhD admission at Periyar University?",
    answer:
      "Yes. A mandatory Common Entrance Test (CET) conducted by Periyar University is required for PhD admission.",
  },
  {
    question: "What qualifications are required for PhD at Periyar University?",
    answer:
      "Applicants must hold a Master’s Degree such as M.E., M.Tech., M.Sc., M.A., MBA, or MCA with at least 55% marks or CGPA 6.0/10.",
  },
  {
    question: "Is work experience mandatory for PhD admission?",
    answer:
      "Work experience is required for Part-Time and Executive PhD programs. It is not mandatory for Full-Time PhD.",
  },
  {
    question: "What modes of PhD are available at Periyar University?",
    answer:
      "PhD programs are offered in Full-Time, Part-Time, Executive, and Distance modes.",
  },
  {
    question: "What documents are required for PhD admission at Periyar University?",
    answer:
      "Required documents include the online application form, joining report, research proposal, eligibility and migration certificates (if applicable), permission order, and fee payment receipt.",
  },
  {
    question: "What is the application timeline for PhD admission?",
    answer:
      "Online submission closes on June 27, 2025, and hard copy submission must be completed by June 30, 2025. The CET is conducted in January.",
  },
  {
    question: "What is the fee structure for the PhD program?",
    answer:
      "The fee is approximately ₹50,500 for General candidates, ₹35,600 for SC/ST candidates, and ₹34,200 for PH candidates (for 3 years).",
  },
  {
    question: "Are scholarships or fellowships available?",
    answer:
      "Yes. Periyar University provides fellowships and scholarships for eligible PhD scholars.",
  },
  {
    question: "Why choose Periyar University for a PhD?",
    answer:
      "Periyar University is known for its strong research culture, affordable fee structure, interdisciplinary research opportunities, and supportive academic environment in Salem.",
  },
];

const universityData = {
  fullName: "PhD Admission Assistance in Periyar University Salem | Guidances",
  shortName: "Periyar University",
  phdEntranceExam:
    "Mandatory Common Entrance Test (CET) conducted by Periyar University",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks or CGPA 6.0/10",
  workExperience:
    "Required for Part-Time and Executive PhD programs",
  modeOfPhd:
    "Full-Time / Part-Time / Executive / Distance",
  documentsRequired: [
    "Completed online application form",
    "Joining Report",
    "Research Proposal (within 500 words)",
    "Research Fellowship Documents (if applicable)",
    "Eligibility Certificate (if PG degree is from outside Periyar University)",
    "Recognition Certificate (if applicable)",
    "Migration Certificate (for candidates from other states)",
    "Permission Order from the University",
    "Online Fee Payment Receipt",
  ],
  applicationTimeline:
    "Online Deadline: June 27, 2025 | Hard Copy Submission: June 30, 2025 | CET: January 25, 2025",
  approxFee:
    "General: ₹50,500 | SC/ST: ₹35,600 | PH: ₹34,200 (for 3 years)",
  scholarshipAvailability:
    "Yes – Fellowships and Scholarships available",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO META + FAQ SCHEMA */}
      <SEO
        title="PhD Admission in Periyar University Salem | CET, Fees & Eligibility"
        description="Apply for PhD admission at Periyar University, Salem. Check eligibility, CET entrance exam, application dates, documents required, fee structure, and scholarships."
        url="/periyar-university"
        keywords={[
          "PhD Admission in Periyar University",
          "Periyar University PhD eligibility",
          "Periyar University CET PhD",
          "PhD in Salem University",
          "Periyar University PhD fees",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About Periyar University</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Periyar University was established in 1997.
              </li>
              <li>
                <b>PhD Programs:</b> Doctoral programs began soon after establishment to strengthen research initiatives.
              </li>
              <li>
                <b>Research Strength:</b> Around 1,200 PhD scholars enroll annually across disciplines.
              </li>
              <li>
                <b>Why Choose Periyar University:</b> Dedicated research centers, experienced faculty, and affordable PhD programs.
              </li>
            </ul>
            <br />
             <h3>Key Highlights</h3>
            <ul>
              <li>Multiple PhD modes: Full-Time, Part-Time, Executive & Distance</li>
              <li>Mandatory CET conducted by the University</li>
              <li>Affordable fee structure with category-wise concessions</li>
              <li>Strong focus on interdisciplinary research</li>
              <li>Located in Salem – a growing academic hub</li>
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
