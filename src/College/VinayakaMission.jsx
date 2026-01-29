import "../pages/Subheading.scss";
import Subsidebar from "../pages/Subsidebar";
import SEO from "../assets/SEO";

const faqs = [
  {
    question:
      "Is the PhD entrance exam compulsory at Vinayaka Mission’s Research Foundation?",
    answer:
      "Yes, the entrance exam is mandatory unless you are exempted through qualifying national-level exams like UGC-NET, CSIR-NET, GATE, or SLET.",
  },
  {
    question: "What is the minimum academic qualification required?",
    answer:
      "Applicants must have a Master’s degree with at least 55% marks or CGPA 6.0 on a 10-point scale.",
  },
  {
    question: "Can working professionals apply for part-time PhD?",
    answer:
      "Yes, working professionals can apply for part-time PhD by submitting relevant experience proof and an employer-issued NOC.",
  },
  {
    question: "When can I apply for the PhD program at VMRF?",
    answer:
      "VMRF conducts PhD admissions twice a year during April and October sessions.",
  },
  {
    question: "What documents are required for PhD admission?",
    answer:
      "Documents include UG & PG certificates, ID proof, photographs, research proposal, experience certificate (for part-time), and qualifying exam proof if applicable.",
  },
  {
    question: "What is the PhD fee structure at VMRF?",
    answer:
      "Annual fees are ₹50,000 for full-time, ₹75,000 for external part-time, and ₹25,000 for internal part-time candidates.",
  },
  {
    question: "Is financial assistance or fellowship available?",
    answer:
      "Yes, eligible full-time scholars may receive fellowships ranging from ₹25,000 to ₹30,000 per month.",
  },
  {
    question: "Why choose VMRF for PhD studies?",
    answer:
      "VMRF offers NAAC A-grade infrastructure, experienced guides, interdisciplinary research, and excellent laboratory facilities.",
  },
];

const universityData = {
  fullName:
    "PhD Admission Assistance in Salem Vinayaka Mission’s Research Foundation | Guidances",
  shortName: "VMRF",
  phdEntranceExam:
    "Mandatory (NET / GATE / SLET exemptions applicable)",
  qualificationRequired:
    "Master’s Degree with minimum 55% marks or CGPA 6.0/10",
  workExperience:
    "Required for Part-Time PhD candidates",
  modeOfPhd: "Full-Time / Part-Time",
  documentsRequired: [
    "Filled PhD Application Form",
    "Government-issued Photo ID Proof",
    "Passport-size Photographs",
    "UG & PG Degree Certificates and Mark Sheets",
    "M.Phil. Certificate (if applicable)",
    "Experience Certificate (Part-Time candidates)",
    "No Objection Certificate (NOC)",
    "Qualifying Exam Proof (NET/GATE/SLET, if exempted)",
    "Research Proposal / SOP",
    "Migration or Transfer Certificate",
    "Application fee payment receipt",
  ],
  applicationTimeline: `April Session:
Application Start: Feb / March
Exam & Interview: April
Joining: May

October Session:
Application Start: Aug / Sept
Exam & Interview: October
Joining: November`,
  approxFee: `Annual Fees:
Full-Time: ₹50,000
Part-Time (External): ₹75,000
Part-Time (Internal): ₹25,000`,
  scholarshipAvailability: "Yes",
};

const Subheading = () => {
  return (
    <div className="main">
      {/* ✅ SEO + FAQ Schema */}
      <SEO
        title="PhD Admission in Vinayaka Mission’s Research Foundation | Eligibility, Fees & Entrance Exam"
        description="Apply for PhD admission at Vinayaka Mission’s Research Foundation (VMRF), Salem. Check eligibility, entrance exam, fees, scholarships, documents, and application dates."
        url="/vmrf-phd-admission"
        keywords={[
          "PhD Admission in VMRF",
          "Vinayaka Mission PhD admission",
          "PhD admission in Salem",
          "VMRF PhD eligibility",
          "Part time PhD in VMRF",
        ]}
        faqs={faqs}
      />

      <Subsidebar />

      <div className="university-details-wrapper">
        <div className="content-layout">
          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About Vinayaka Mission’s Research Foundation</h3>
            <ul>
              <li>
                <b>Establishment:</b> Founded in 1982 and granted Deemed
                University status in 2001.
              </li>
              <li>
                <b>PhD Programs:</b> Offered across medicine, engineering,
                pharmacy, arts, science, and management.
              </li>
              <li>
                <b>Annual Intake:</b> Around 70–120 PhD scholars annually.
              </li>
              <li>
                <b>Why Choose VMRF:</b> NAAC A-grade accreditation, research
                fellowships, and multidisciplinary faculty support.
              </li>
            </ul>
            <br />
             <h3>Key Highlights</h3>
            <ul>
              <li>UGC-recognized doctoral programs</li>
              <li>Research fellowships for full-time scholars</li>
              <li>Strong multidisciplinary research ecosystem</li>
              <li>Flexible options for working professionals</li>
              <li>Well-equipped research laboratories</li>
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
                <span
                  className="detail-value"
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  {universityData.applicationTimeline}
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Approx. Fee</span>
                <span
                  className="detail-value"
                  style={{ whiteSpace: "pre-wrap" }}
                >
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
