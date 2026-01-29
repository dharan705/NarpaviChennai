import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "What entrance exam is required for PhD admission at Bharathiar University?",
    answer:
      "Applicants must clear a Written Test and Oral Interview. Candidates qualified in UGC-NET, CSIR-NET, GATE, SLET, or holding an M.Phil. degree are exempted from the written test.",
  },
  {
    question: "What is the minimum qualification for applying to the PhD program?",
    answer:
      "A Master’s Degree with at least 55% marks or a CGPA of 5.5 on a 10-point scale is required.",
  },
  {
    question: "Can working professionals apply for a PhD?",
    answer:
      "Yes. For part-time PhD admission, candidates must be employed and submit an NOC from their employer.",
  },
  {
    question: "What is the mode of PhD offered?",
    answer:
      "Bharathiar University offers Full-Time and Part-Time PhD programs. Conversion between modes is allowed after 18 months.",
  },
  {
    question: "When can I apply for the PhD program?",
    answer:
      "PhD admissions are conducted twice a year during May and November/December sessions.",
  },
  {
    question: "What is the fee structure for the PhD program?",
    answer:
      "Full-Time: ₹4,950 per year; Part-Time: ₹2,475 per year, plus ₹1,000 application fee.",
  },
  {
    question: "Are scholarships available for PhD scholars?",
    answer:
      "Yes. Eligible candidates can apply for UGC and Government scholarships such as Post Matric and Indira Gandhi Single Girl Child Scholarship.",
  },
];

const universityData = {
  fullName: "PhD Admission Assistance in Bharathiar University Coimbatore | Guidances",
  shortName: "Bharathiar University",
  phdEntranceExam:
    "Written Test and Oral Interview (NET/GATE/M.Phil. candidates exempted from written test)",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks or CGPA 5.5",
  workExperience: "Required for part-time PhD candidates",
  modeOfPhd:
    "Full-Time / Part-Time (Conversion allowed after 18 months)",
  documentsRequired: [
    "Online application form",
    "UG & PG certificates and mark sheets",
    "Community certificate (if applicable)",
    "Experience certificate (for part-time candidates)",
    "NOC from employer",
    "Entrance exam scorecard or exemption proof",
    "Research proposal",
    "Passport-size photographs",
  ],
  applicationTimeline:
    "May Session / November–December Session",
  approxFee:
    "Full-Time: ₹4,950/year, Part-Time: ₹2,475/year + ₹1,000 application fee",
  scholarshipAvailability:
    "UGC & Government Scholarships (Post Matric, Indira Gandhi Single Girl Child, Merit-based)",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO META + FAQ SCHEMA */}
      <SEO
        title="PhD Admission in Bharathiar University Coimbatore"
        description="Complete PhD admission guidance for Bharathiar University Coimbatore including eligibility, entrance exam, part-time options, fee structure, scholarships, and application dates."
        url="/bharathiar-university"
        keywords={[
          "PhD Admission in Bharathiar University",
          "Bharathiar University PhD eligibility",
          "Bharathiar University entrance exam",
          "PhD admission in Coimbatore",
          "Part time PhD Bharathiar University",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About Bharathiar University</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Established in 1982 by the Government of Tamil Nadu.
              </li>
              <li>
                <b>PhD Programs:</b> Offered through the Centre for Research with strong academic focus.
              </li>
              <li>
                <b>Research Strength:</b> Thousands of scholars across main and affiliated colleges.
              </li>
              <li>
                <b>Why Choose Bharathiar University:</b> Excellent faculty, wide research scope, and strong academic reputation.
              </li>
            </ul>
            <br />
             <h3>Key Highlights</h3>
            <ul>
              <li>PhD eligibility & entrance exam</li>
              <li>Full-time & part-time modes</li>
              <li>Fee structure & scholarships</li>
              <li>Application dates & documents</li>
              <li>Research opportunities in Coimbatore</li>
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
