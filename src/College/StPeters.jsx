import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "What are the eligibility criteria for PhD admission at St. Peter's Institute?",
    answer:
      "Candidates must have a Master’s degree with at least 55% marks or CGPA 6.0/10 from a recognized university.",
  },
  {
    question: "Is work experience required for applying to the PhD program?",
    answer:
      "Professional experience is usually required for part-time PhD applicants, and an experience certificate is mandatory.",
  },
  {
    question: "What is the mode and duration of the PhD program?",
    answer:
      "St. Peter’s Institute offers Full-Time PhD (minimum 3 years) and Part-Time PhD (minimum 4 years).",
  },
  {
    question: "When can I apply for the PhD program?",
    answer:
      "Admissions are conducted twice a year: January Session (January–April) and July Session (July–October).",
  },
  {
    question: "Is there an entrance exam for PhD admission?",
    answer:
      "Yes, an entrance examination is mandatory unless exempted under specific eligibility conditions.",
  },
  {
    question: "What documents are required for PhD admission?",
    answer:
      "Applicants must submit academic certificates, ID proof, photographs, research proposal, experience certificate and NOC for part-time candidates, and fee payment proof.",
  },
  {
    question: "What is the fee structure for PhD at St. Peter’s Institute?",
    answer:
      "The annual fee ranges from ₹54,000 to ₹60,000, with a per-semester fee of approximately ₹27,000 to ₹30,000.",
  },
  {
    question: "Are scholarships or fellowships available?",
    answer:
      "Yes, scholarships and financial assistance are available based on eligibility and institutional norms.",
  },
  {
    question: "Why choose St. Peter’s Institute for PhD studies?",
    answer:
      "The institute offers strong research infrastructure, experienced faculty, and flexible options for working professionals.",
  },
];

const universityData = {
  fullName:
    "PhD Admission Assistance in Chennai St. Peter’s University | Guidances",
  shortName: "St. Peter's University",
  phdEntranceExam: "Mandatory",
  qualificationRequired:
    "Master’s Degree with 55% marks or CGPA 6.0/10",
  workExperience:
    "Professional experience required for Part-Time PhD candidates",
  modeOfPhd: "Full-Time: 3 Years / Part-Time: 4 Years",
  documentsRequired: [
    "Completed Application Form",
    "UG & PG Degree Certificates and Mark Sheets",
    "Research Proposal / SOP",
    "Experience Certificate (Part-Time)",
    "No Objection Certificate (NOC)",
    "Government-issued ID Proof",
    "Passport-size Photographs",
    "Entrance Exam Scorecard (if applicable)",
    "Community / Caste Certificate (if applicable)",
    "Application Fee Payment Proof",
  ],
  applicationTimeline:
    "January Session (Jan–Apr) | July Session (Jul–Oct)",
  approxFee:
    "₹54,000 – ₹60,000 per year | ₹27,000 – ₹30,000 per semester",
  scholarshipAvailability: "Yes",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO + Dynamic FAQ Schema */}
      <SEO
        title="PhD Admission in St. Peter’s University Chennai | Eligibility, Fees & Research"
        description="Apply for PhD admission at St. Peter’s Institute of Higher Education and Research, Chennai. Check eligibility, entrance exam, fees, documents, and scholarship details."
        url="/st-peters-university-phd-admission"
        keywords={[
          "PhD Admission in St Peter's University",
          "St Peter's University PhD admission",
          "PhD admission in Chennai",
          "Part time PhD in St Peter's University",
          "St Peter's PhD eligibility",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About St. Peter’s Institute of Higher Education and Research</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Established in 2008.
              </li>
              <li>
                <b>PhD Programs:</b> Introduced shortly after establishment to
                promote academic and industry research.
              </li>
              <li>
                <b>Annual Intake:</b> Around 80–120 PhD scholars annually.
              </li>
              <li>
                <b>Why Choose St. Peter’s:</b> Dedicated research centers,
                experienced faculty, and flexible options for working
                professionals.
              </li>
            </ul>
            <br />
             <h3>Key Highlights</h3>
            <ul>
              <li>Two admission cycles every year</li>
              <li>Strong applied and interdisciplinary research focus</li>
              <li>Flexible part-time PhD for working professionals</li>
              <li>Urban Chennai campus with good research facilities</li>
              <li>Structured and transparent admission process</li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="university-details-container">
            <div className="phdimg" />

            {/* ✅ Single H1 for SEO */}
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
