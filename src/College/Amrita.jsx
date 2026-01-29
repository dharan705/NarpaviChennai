import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "What is the eligibility for PhD admission at Amrita University?",
    answer:
      "Candidates must hold a Master’s Degree with at least 55% marks or equivalent CGPA from a recognized university.",
  },
  {
    question: "Is an entrance exam required for PhD admission at Amrita University?",
    answer:
      "Yes, a PhD entrance exam is required. NET/JRF, CSIR-NET, SLET, GATE, or M.Phil. qualified candidates are exempted.",
  },
  {
    question: "What are the available modes of pursuing a PhD at Amrita University?",
    answer:
      "PhD programs are offered in Full-Time and Part-Time modes.",
  },
  {
    question: "Is work experience required for applying to a Part-Time PhD?",
    answer:
      "Yes, candidates applying for Part-Time PhD must be employed.",
  },
  {
    question: "What documents are required for the PhD application?",
    answer:
      "Applicants must submit UG/PG certificates, mark sheets, research proposal, ID proof, photographs, and NOC for part-time candidates.",
  },
  {
    question: "What is the PhD application timeline at Amrita University?",
    answer:
      "Admissions are conducted twice a year: January and July sessions.",
  },
  {
    question: "What is the fee structure for the PhD program?",
    answer:
      "The tuition fee is approximately ₹30,000 per annum with a registration fee of ₹1,000.",
  },
  {
    question: "Are scholarships or fellowships available for PhD scholars?",
    answer:
      "Yes. University scholarships, Visvesvaraya Ph.D. Scheme, and international scholarships are available for eligible candidates.",
  },
];

const universityData = {
  fullName: "PhD Admission Assistance in Amrita Vishwa Vidyapeetham Coimbatore | Guidances",
  shortName: "Amrita University",
  phdEntranceExam:
    "Entrance Exam Required (NET/JRF, CSIR-NET, SLET, GATE, M.Phil. exempted)",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks or equivalent CGPA",
  workExperience: "Mandatory for part-time PhD candidates",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Completed application form",
    "UG & PG certificates and mark sheets",
    "Research proposal",
    "Passport-size photographs",
    "Government-issued ID proof",
    "No Objection Certificate (NOC) for part-time candidates",
  ],
  applicationTimeline:
    "January Session (January) / July Session (June)",
  approxFee:
    "₹30,000 per annum (Tuition Fee) + ₹1,000 (Registration Fee)",
  scholarshipAvailability:
    "University Scholarships, Visvesvaraya Ph.D. Scheme, International Scholarships",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO + META + FAQ SCHEMA */}
      <SEO
        title="PhD Admission in Amrita University Coimbatore"
        description="Complete PhD admission guidance for Amrita Vishwa Vidyapeetham Coimbatore including eligibility, entrance exam, part-time options, fee structure, scholarships, and application process."
        url="/amrita"
        keywords={[
          "PhD Admission in Amrita University",
          "Amrita University PhD eligibility",
          "Amrita Vishwa Vidyapeetham PhD entrance exam",
          "PhD admission in Coimbatore",
          "Part time PhD Amrita University",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About Amrita University</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Amrita Vishwa Vidyapeetham was
                established in 2003.
              </li>
              <li>
                <b>PhD Programs:</b> Doctoral programs began in the mid-2000s.
              </li>
              <li>
                <b>Annual PhD Strength:</b> Around 1,000 scholars enroll and
                graduate annually.
              </li>
              <li>
                <b>Why Choose Amrita University:</b> NAAC A++ grade, global
                research collaborations, and multidisciplinary excellence.
              </li>
            </ul>
            <br />
             <h3>Key Highlights</h3>
            <ul>
              <li>PhD eligibility & entrance exam</li>
              <li>Full-time & part-time PhD modes</li>
              <li>Scholarships & fellowships</li>
              <li>Fee structure & application dates</li>
              <li>Required documents & NOC rules</li>
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
