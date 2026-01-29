import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "What is the eligibility for PhD admission at Alagappa University?",
    answer:
      "Candidates must hold a Master’s Degree with at least 55% marks. Reserved categories may have relaxations as per norms.",
  },
  {
    question: "Is there an entrance exam for PhD at Alagappa University?",
    answer:
      "Yes, the university conducts the Pre-Registration Qualifying Entrance Examination. NET/SET/GATE qualified candidates are exempted.",
  },
  {
    question: "What are the modes of pursuing a PhD at Alagappa University?",
    answer:
      "PhD can be pursued in Full-Time, Part-Time, or Independent Research Scholar mode.",
  },
  {
    question: "What documents are required for the PhD application?",
    answer:
      "Applicants need UG & PG certificates, mark sheets, research proposal, ID proof, passport photos, and NOC if applicable.",
  },
  {
    question: "What is the application timeline for PhD at Alagappa University?",
    answer:
      "Admissions are conducted twice a year: January and July sessions.",
  },
  {
    question: "Are scholarships available for PhD scholars?",
    answer:
      "Yes, URF, UGC/CSIR fellowships, and government scholarships are available for eligible candidates.",
  },
  {
    question: "Is work experience mandatory for part-time PhD?",
    answer:
      "Yes, part-time candidates must be employed and submit a Service Certificate and NOC.",
  },
  {
    question: "How much is the PhD fee at Alagappa University?",
    answer:
      "The approximate fee is ₹10,000 per year plus ₹500 entrance exam application fee.",
  },
];

const universityData = {
  fullName: "PhD Admission Assistance in Alagappa University Karaikudi | Guidance",
  shortName: "AU Karaikudi",
  phdEntranceExam:
    "Pre-Registration Qualifying Entrance Examination (NET/SET/GATE exempted)",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks",
  workExperience: "Required for part-time PhD candidates",
  modeOfPhd: "Full-Time / Part-Time / Independent Research Scholar",
  documentsRequired: [
    "Application form",
    "UG & PG certificates and mark sheets",
    "Research proposal",
    "Passport-size photographs",
    "ID proof",
    "Community certificate (if applicable)",
    "Service Certificate & NOC (for part-time)",
    "NET/SET/GATE proof (if applicable)",
  ],
  applicationTimeline:
    "January Session (Feb–Mar) / July Session (dates vary)",
  approxFee:
    "₹10,000 per annum + ₹500 entrance exam fee",
  scholarshipAvailability:
    "University Research Fellowship (URF), UGC/CSIR, Government scholarships",
};

const Subheading = () => {
  return (
    <div className="main">
      <SEO
        title="PhD Admission in Alagappa University Karaikudi"
        description="Complete PhD admission guidance for Alagappa University Karaikudi including eligibility, entrance exam, fees, part-time options, scholarships, and application process."
        url="/alagappa-university"
        keywords={[
          "PhD Admission in Alagappa University",
          "Alagappa University PhD eligibility",
          "Alagappa University PhD entrance exam",
          "PhD admission in Karaikudi",
          "Part time PhD Alagappa University",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About Alagappa University</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Established in 1985, Alagappa
                University is known for academic excellence.
              </li>
              <li>
                <b>PhD Programs:</b> Research programs began in the late 1980s.
              </li>
              <li>
                <b>Annual PhD Strength:</b> Around 600 scholars enroll and
                graduate each year.
              </li>
              <li>
                <b>Why Choose Alagappa University:</b> Strong research culture,
                experienced faculty, and diverse disciplines.
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
                  {universityData.documentsRequired.map((doc, i) => (
                    <li key={i}>{doc}</li>
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
