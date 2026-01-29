import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question: "Is the PhD entrance exam mandatory at Sathyabama University?",
    answer:
      "Yes, applicants must appear for a Written Entrance Examination followed by an Oral Presentation (Interview).",
  },
  {
    question: "What qualifications are required to apply for a PhD at Sathyabama University?",
    answer:
      "Candidates must possess a Master’s Degree with at least 55% marks or equivalent CGPA.",
  },
  {
    question: "Is work experience required for PhD at Sathyabama University?",
    answer:
      "Yes, work experience is mandatory for candidates applying to the part-time PhD program.",
  },
  {
    question: "Does Sathyabama University offer both Full-Time and Part-Time PhD programs?",
    answer:
      "Yes, PhD programs are offered in both Full-Time and Part-Time modes.",
  },
  {
    question: "What is the application timeline for PhD admissions?",
    answer:
      "Admissions are conducted twice a year: January session (applications in September) and July session (applications in February).",
  },
  {
    question: "What documents are required for PhD admission?",
    answer:
      "Documents include UG & PG certificates, research proposal, ID proof, photographs, and NOC for part-time candidates.",
  },
  {
    question: "What is the PhD fee structure at Sathyabama University?",
    answer:
      "Fees include ₹30,000 per semester (Full-Time), ₹25,000 per semester (Part-Time), plus additional doctoral committee and examination fees.",
  },
  {
    question: "Are scholarships available for PhD students?",
    answer:
      "Yes, Sathyabama offers Research Fellowships and other scholarship schemes.",
  },
  {
    question: "How many PhD scholars enroll annually at Sathyabama University?",
    answer:
      "Over 1,000 PhD scholars enroll every year across various disciplines.",
  },
  {
    question: "Why choose Sathyabama University for PhD studies?",
    answer:
      "Sathyabama is known for experienced faculty, modern research facilities, and diverse interdisciplinary research opportunities.",
  },
];

const universityData = {
  fullName: "PhD Admission Assistance in Sathyabama University Chennai | Guidances",
  shortName: "Sathyabama University",
  phdEntranceExam:
    "Written Entrance Examination and Oral Presentation (Interview)",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks or equivalent CGPA",
  workExperience:
    "Mandatory for Part-Time PhD candidates",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Completed Online Application Form",
    "UG & PG Degree Certificates and Mark Sheets",
    "Research Proposal",
    "Passport-size Photographs",
    "Government-issued ID Proof",
    "No Objection Certificate (Part-Time Candidates)",
  ],
  applicationTimeline:
    "January Session: Applications in September | July Session: Applications in February",
  approxFee:
    "₹30,000 per semester (Full-Time) / ₹25,000 per semester (Part-Time) + Additional Doctoral Committee & Exam Fees",
  scholarshipAvailability:
    "Sathyabama Research Fellowships and Other Scholarships",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO META + FAQ SCHEMA */}
      <SEO
        title="PhD Admission in Sathyabama University | Eligibility, Fees & Entrance Exam"
        description="Apply for PhD admission at Sathyabama Institute of Science and Technology, Chennai. Check eligibility, entrance exam, application dates, fee structure, documents required, and scholarships."
        url="/sathyabama-university"
        keywords={[
          "PhD Admission in Sathyabama University",
          "Sathyabama PhD eligibility",
          "Sathyabama PhD entrance exam",
          "Sathyabama PhD fees",
          "PhD admission in Chennai",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About Sathyabama University</h3>
            <ul>
              <li>
                <b>Year of Establishment:</b> Established in 1987.
              </li>
              <li>
                <b>PhD Programs:</b> Started in the early 2000s.
              </li>
              <li>
                <b>Annual Research Strength:</b> Over 1,000 PhD scholars enrolled each year.
              </li>
              <li>
                <b>Why Choose Sathyabama:</b> Strong faculty, advanced labs, and diverse research disciplines.
              </li>
            </ul>
             <h3>Key Highlights</h3>
            <ul>
              <li>Written test + interview-based selection</li>
              <li>Flexible full-time and part-time PhD options</li>
              <li>Strong fellowship and funding support</li>
              <li>High annual research enrollment</li>
              <li>Located in Chennai – major academic hub</li>
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

      {/* FAQ UI (Schema handled by SEO.jsx) */}
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
