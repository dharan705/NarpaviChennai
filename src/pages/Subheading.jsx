import './Subheading.scss';
import Subsidebar from './Subsidebar';

const faqs = [
  {
    question: "What is the eligibility for PhD admission at Anna University?",
    answer: "You must have a Master's Degree in a relevant discipline with at least 55% marks or 5.5 CGPA. GATE/NET/SLET/M.Phil. qualifiers may be exempted from the entrance test."
  },
  {
    question: "Is part-time PhD available at Anna University?",
    answer: "Yes, Anna University offers part-time PhD programs for working professionals in academia, industry, and government sectors."
  },
  {
    question: "What is the selection process for PhD at Anna University?",
    answer: "Selection is based on entrance exam, interview, academic record, and research proposal. Exempted candidates may be called directly for interview."
  },
  {
    question: "Does Anna University provide fellowship or stipend for PhD scholars?",
    answer: "Yes. Schemes like Anna University Research Fellowship (AURF), UGC JRF/SRF, DST-INSPIRE, and other sponsored fellowships are available."
  },
  {
    question: "How often does Anna University open PhD admissions?",
    answer: "PhD admissions are usually conducted twice a year: January and July sessions. Notifications are published on the university website."
  },
  {
    question: "Can I change my research supervisor after joining?",
    answer: "In special cases, a supervisor can be changed with prior approval from the university and a valid justification."
  },
  {
    question: "What is the minimum duration of the PhD program at Anna University?",
    answer: "The minimum duration is 3 years for full-time and 4 years for part-time candidates."
  }
];

const universityData = {
  fullName: 'PhD Admission Assistance in Anna University Chennai | Guidances',
  shortName: 'Anna University Chennai',
  phdEntranceExam:
    'Written Test and Interview (Exemptions: UGC-NET, CSIR-NET, SLET, GATE / M.Phil.)',
  qualificationRequired:
    'Master’s Degree (e.g. M.E., M.Tech., M.Sc., M.A., M.Com., etc.) with at least 55% marks or 5.5 CGPA on 10-point scale',
  workExperience: 'Part-time PhD typically requires relevant work experience.',
  modeOfPhd: 'Full time / Part time',
  documentsRequired: [
    'Filled online application form',
    'UG and PG degree certificates with mark sheets',
    'Community certificate (for reservation category)',
    'Experience certificate (for part-time candidates)',
    'GATE/NET/SLET/M.Phil. certificate (if applicable)',
    'NOC from employer (for employed applicants)',
    'Research proposal or area of interest',
    'Aadhaar card/ID proof',
    'Passport-size photographs',
  ],
  applicationTimeline: 'January Session (Oct–Nov) / July Session (Mar–Apr)',
  approxFee: '₹20,000 – ₹30,000 per semester + ₹900 application fee',
  scholarshipAvailability:
    'University Research Fellowship, UGC (JRF/SRF), DST-INSPIRE, CSIR, AICTE/Industry-funded fellowships',
  SearchKeywordsforPhDAdmission: [
    'Anna University PhD admission eligibility entrance exam',
    'Anna University PhD qualification and documents required',
    'Anna University PhD part time full time mode',
    'Anna University PhD fee structure and scholarships',
    'Anna University PhD application dates and process',
    'Anna University PhD work experience requirement',
    'Anna University research fellowship for PhD',
    'Anna University PhD NOC and employer requirements',
    'Anna University PhD admission portal cfr.annauniv.edu',
    'Anna University PhD syllabus entrance test pattern',
    'PhD admission in Anna University',
    'Anna University PhD 2025',
    'Anna University Chennai PhD admission',
    'PhD programs in Anna University',
    'Research admission in Anna University',
  ],
};

const Subheading = () => {
  
  return (
    <div className="main">
      <SEO
  title="PhD Admission Assistance in Anna University in Chennai"
  description="Complete PhD admission guidance for Anna University including eligibility, entrance exams, part-time options, document checklist, fee details, scholarships and supervisor selection support."
  url="/phd-admission-assistance-in-anna-university"
  keywords={[
    "Anna University PhD admission Chennai",
    "PhD admission eligibility Anna University",
    "Anna University part-time PhD",
    "Anna University PhD entrance exam",
    "Anna University PhD supervisor change",
    "PhD application dates Anna University",
    "Anna University PhD documentation requirements"
  ]}
  faqs={faqs}
/>

      <Subsidebar /> 

      <div className="university-details-wrapper">
        <div className="content-layout">

          {/* Left Sidebar */}
          <div className="side-box left-box">
            <h3>About Anna University</h3>
            <ul>
              <li><b>Year of Establishment:</b> Established in 1978, Anna University is a premier hub for engineering and technology.</li>
              <li><b>Year of PhD Admission Establishment:</b><br />PhD programs began decades ago via the Centre for Research, driving academic excellence.</li>
              <li><b>Annual PhD Enrolment and Exit Details:</b><br />2,200+ scholars in main campuses and 13,000+ in affiliates reflect strong PhD output.</li>
              <li><b>Why this University is a Premier Choice for PhD Studies:</b><br /> PhD Admission in Chennai Anna University offers expert faculty, vast research scope, and top-tier facilities—making it a preferred research destination.</li>
            </ul>
            <br />
             <ul>
              {universityData.SearchKeywordsforPhDAdmission.map((keyword, idx) => (
                <li key={idx}>{keyword}</li>
              ))}
            </ul>
          </div>

          {/* Center Content */}
          <div className="university-details-container">
            <div className="phdimg" />
            <h1 className="university-title">{universityData.fullName}</h1>
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
                <span className="detail-label">Scholarship/Fellowship</span>
                <span className="detail-value">{universityData.scholarshipAvailability}</span>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="side-box right-box">
              {/* <h3>Search Keywords for PhD Admission</h3> */}
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

   <section className="alluniversityfaq-section">
        <h2>FAQs on Topic Selection</h2>
        <div className="faq-items">
          {faqs.map((faq, index) => (
            <details key={index}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>

      </section>  
      <Script/>
    </div>
  );
};


export default Subheading ;
