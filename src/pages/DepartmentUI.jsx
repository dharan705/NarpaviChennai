import React, { useState } from "react";
import "./DepartmentUI.scss";

/* ================= ICON IMPORTS ================= */
import {
  FaLaptopCode,
  FaMobileAlt,
  FaRobot,
  FaBrain,
  FaDatabase,
  FaCloud,
  FaLock,
  FaNetworkWired,
  FaMicrochip,
  FaBolt,
  FaDraftingCompass,
  FaSatelliteDish,
  FaCogs,
  FaIndustry,
  FaCar,
  FaLeaf,
  FaBook,
  FaFileAlt,
  FaGraduationCap,
  FaProjectDiagram,
  FaTools,
  FaGlobe,
  FaUniversity,
  FaMicroscope,
  FaSignal,
  FaMapMarkedAlt,
  FaRoad,
  FaSolarPanel,
} from "react-icons/fa";

/* ================= ICON MAP ================= */
const iconMap = {
  /* CSE */
  "Static Web Application Project": <FaLaptopCode />,
  "Dynamic Web Applications Project": <FaLaptopCode />,
  "Mobile App Development Project": <FaMobileAlt />,
  "Animations Project": <FaRobot />,
  "AI Projects": <FaBrain />,
  "Data Science Project": <FaDatabase />,
  "Big Data Project": <FaDatabase />,
  "Blockchain Project": <FaLock />,
  "DevOps Project": <FaCogs />,
  "Networking Project": <FaNetworkWired />,
  "Image Processing Project": <FaMicrochip />,
  "NLP Project": <FaBrain />,
  "Cloud Computing Project": <FaCloud />,
  "Cyber Security Project": <FaLock />,

  /* ECE */
  "Biomedical Electronics Project": <FaMicroscope />,
  "Communication Systems Project": <FaSignal />,
  "Control Systems & Robotics Project": <FaRobot />,
  "Cryptography & Security Project": <FaLock />,
  "Embedded Systems Project": <FaMicrochip />,
  "IoT Projects": <FaCloud />,
  "Signal Processing Project": <FaSignal />,
  "VLSI Design Project": <FaMicrochip />,
  "Wireless Sensor Networks Project": <FaNetworkWired />,
  "Satellite Communication Project": <FaSatelliteDish />,
  "Antenna Design Project": <FaSatelliteDish />,

  /* EEE */
  "Power Systems Project": <FaBolt />,
  "Electrical Machines Project": <FaCogs />,
  "Power Electronics Project": <FaBolt />,
  "Renewable Energy Systems Project": <FaLeaf />,
  "Embedded Systems (EEE) Project": <FaMicrochip />,
  "High Voltage Engineering Project": <FaBolt />,
  "Smart Grid & Microgrid Project": <FaProjectDiagram />,
  "Control Systems Project": <FaRobot />,
  "Industrial Automation Project": <FaIndustry />,
  "Electric Vehicles Project": <FaCar />,
  "AI in Electrical Engineering Project": <FaBrain />,
  "IoT in Electrical Systems Project": <FaCloud />,
  "Energy Management Systems Project": <FaSolarPanel />,

  /* CIVIL */
  "Construction Project Management Project": <FaTools />,
  "Environmental Engineering Project": <FaLeaf />,
  "Geotechnical Engineering Project": <FaDraftingCompass />,
  "Remote Sensing & GIS Project": <FaMapMarkedAlt />,
  "Structural Engineering Project": <FaIndustry />,
  "Transportation Engineering Project": <FaRoad />,

  /* MECH */
  "Thermal Engineering Project": <FaBolt />,
  "Fluid Mechanics & Dynamics Project": <FaProjectDiagram />,
  "Manufacturing & Production Project": <FaIndustry />,
  "Design Engineering (CAD) Project": <FaDraftingCompass />,
  "Robotics & Mechatronics Project": <FaRobot />,
  "Renewable Thermal Energy Project": <FaLeaf />,
  "Automotive & Vehicle Engineering Project": <FaCar />,
  "Mechatronics Control Systems Project": <FaCogs />,
  "Mechanical Properties & Materials Project": <FaIndustry />,
  "Industrial Production Optimization Project": <FaIndustry />,

  /* PhD & Research */
  "PhD Admission Guidance": <FaGraduationCap />,
  "Research Proposal Writing": <FaBook />,
  "Research Paper Writing": <FaFileAlt />,
  "Review Paper Writing": <FaFileAlt />,
  "Anna University Annexure Support": <FaUniversity />,
  "Elsevier Conference Publication": <FaGlobe />,
  "IEEE Conference Publication": <FaGlobe />,
  "International Conference Publication": <FaGlobe />,
  "PhD Project Implementation": <FaProjectDiagram />,
  "PhD Final Viva Preparation": <FaGraduationCap />,
  "PhD Synopsis Writing": <FaBook />,
  "PhD Thesis Writing": <FaBook />,
  "Paper Publication (SRM)": <FaUniversity />,
  "General Research Paper Publication": <FaFileAlt />,
  "Paper Publication - Sathyabama": <FaUniversity />,
  "SCI Indexed Paper Publication": <FaFileAlt />,
  "Springer Conference Publication": <FaGlobe />,
  "VIT University Publication": <FaUniversity />,
  "Web of Science (WoS) Publication": <FaGlobe />,

  /* Research Proposal */
  "How to Write a Research Proposal": <FaBook />,
  "Trending Research Topics": <FaBrain />,
  "Research Proposal for Funding": <FaFileAlt />,
  "Engineering Research Proposal Guide": <FaBook />,

  /* Paper Writing */
  "Scopus Journal Paper Writing": <FaFileAlt />,
  "IEEE Conference Paper Writing": <FaFileAlt />,
  "SCI Journal Paper Writing": <FaFileAlt />,
  "Review Article Writing": <FaBook />,

  /* Publication Services */
  "Conference Paper Publication": <FaGlobe />,
  "SCI Journal Publication": <FaFileAlt />,
  "Scopus Journal Publication": <FaFileAlt />,
  "Review Article Publication": <FaBook />,
  "UGC Care Journal Publication": <FaUniversity />,
  "Book ISBN Publication Support": <FaBook />,
};

/* ================= COMPONENT ================= */
export default function DepartmentUI() {
  /* ================= DATA ================= */
  const departments = [
    {
      id: "cse",
      name: "Computer Science Engineering",
      domains: [
        { title: "Static Web Application Project", desc: "HTML, CSS, JS based static websites", link: "/department/static-web-application" },
        { title: "Dynamic Web Applications Project", desc: "Full-stack & database driven web applications", link: "/department/dynamic-web-applications" },
        { title: "Mobile App Development Project", desc: "Android, iOS & cross platform development", link: "/department/mobile-app-development-project-development-center-in-chennai" },
        { title: "Animations Project", desc: "UI interactions, motion graphics & frontend animations", link: "/department/animations-project" },
        { title: "AI Projects", desc: "Artificial Intelligence based projects", link: "/department/ai-project" },
        { title: "Data Science Project", desc: "Analytics, visualization & prediction", link: "/department/data-science" },
        { title: "Big Data Project", desc: "Large-scale data platforms", link: "/department/big-data" },
        { title: "Blockchain Project", desc: "Secure decentralized applications", link: "/department/blockchain" },
        { title: "DevOps Project", desc: "Automation & CI/CD pipeline", link: "/department/devops" },
        { title: "Networking Project", desc: "Network protocols & security", link: "/department/networking" },
        { title: "Image Processing Project", desc: "Computer vision & enhancement", link: "/department/image-processing" },
        { title: "NLP Project", desc: "Chatbots & language AI", link: "/department/nlp" },
        { title: "Cloud Computing Project", desc: "Distributed & scalable systems", link: "/department/cloud-computing" },
        { title: "Cyber Security Project", desc: "Ethical hacking & protection", link: "/department/cybersecurity" },
      ],
    },
    {
      id: "ece",
      name: "Electronics & Communication Engineering",
      domains: [
        { title: "Biomedical Electronics Project", desc: "Electronics for health monitoring", link: "/department/biomedical-electronics" },
        { title: "Communication Systems Project", desc: "Wireless & modern communication", link: "/department/communication-systems" },
        { title: "Control Systems & Robotics Project", desc: "Automation & robotics", link: "/department/control-systems-robotics" },
        { title: "Cryptography & Security Project", desc: "Secure communication & hardware", link: "/department/cryptography-security" },
        { title: "Embedded Systems Project", desc: "Microcontrollers & processors", link: "/department/embedded-systems" },
        { title: "IoT Projects", desc: "Smart & connected devices", link: "/department/iot-projects" },
        { title: "Signal Processing Project", desc: "Speech & image signal processing", link: "/department/signal-processing" },
        { title: "VLSI Design Project", desc: "Chip design & FPGA", link: "/department/vlsi-design" },
        { title: "Wireless Sensor Networks Project", desc: "Distributed communication", link: "/department/wireless-sensor-networks" },
        { title: "Satellite Communication Project", desc: "Space communication", link: "/department/satellite-communication" },
        { title: "Antenna Design Project", desc: "Advanced RF design", link: "/department/antenna-design" },
      ]
    },
  {
    id: "eee",
    name: "Electrical & Electronics Engineering",
    domains: [
      { title: "Power Systems Project", desc: "Electric power generation, transmission & distribution", link: "/department/power-systems" },
      { title: "Electrical Machines Project", desc: "Motors, generators & electromechanical systems", link: "/department/electrical-machines" },
      { title: "Power Electronics Project", desc: "Converters, inverters & energy controllers", link: "/department/power-electronics" },
      { title: "Renewable Energy Systems Project", desc: "Solar, wind & sustainable energy projects", link: "/department/renewable-energy-systems" },
      { title: "Embedded Systems (EEE) Project", desc: "Embedded controllers for electrical systems", link: "/department/embedded-systems-electrical" },
      { title: "High Voltage Engineering Project", desc: "Insulation, HVDC & high-voltage testing", link: "/department/high-voltage-engineering" },
      { title: "Smart Grid & Microgrid Project", desc: "Next-gen intelligent power grid technologies", link: "/department/smart-grid-microgrid" },
      { title: "Control Systems Project", desc: "Automation & industrial electrical control", link: "/department/control-systems-electrical" },
      { title: "Industrial Automation Project", desc: "PLC, SCADA & factory automation", link: "/department/industrial-automation" },
      { title: "Electric Vehicles Project", desc: "EV powertrain, charging & battery systems", link: "/department/electric-vehicles" },
      { title: "AI in Electrical Engineering Project", desc: "AI-powered control & energy optimization", link: "/department/ai-electrical-engineering" },
      { title: "IoT in Electrical Systems Project", desc: "Smart power & IoT based electrical monitoring", link: "/department/iot-electrical-systems" },
      { title: "Energy Management Systems Project", desc: "Smart energy monitoring & optimization", link: "/department/energy-management-systems" },
    ]
  },
    {
      id: "civil",
      name: "Civil Engineering",
      domains: [
        { title: "Construction Project Management Project", desc: "Planning & execution", link: "/department/construction-project-management" },
        { title: "Environmental Engineering Project", desc: "Eco sustainability", link: "/department/environmental-engineering" },
        { title: "Geotechnical Engineering Project", desc: "Soil & foundation", link: "/department/geotechnical-engineering" },
        { title: "Remote Sensing & GIS Project", desc: "Smart mapping", link: "/department/remote-sensing-gis" },
        { title: "Structural Engineering Project", desc: "Building safety", link: "/department/structural-engineering" },
        { title: "Transportation Engineering Project", desc: "Traffic optimization", link: "/department/transportation-engineering" },
      ]
    },
   {
    id: "mech",
    name: "Mechanical Engineering",
    domains: [
      { title: "Thermal Engineering Project", desc: "Heat transfer, HVAC & thermal analysis", link: "/department/thermal-engineering" },
      { title: "Fluid Mechanics & Dynamics Project", desc: "Fluid flow, CFD & aerodynamics", link: "/department/fluid-mechanics-dynamics" },
      { title: "Manufacturing & Production Project", desc: "Industrial manufacturing & production systems", link: "/department/manufacturing-production" },
      { title: "Design Engineering (CAD) Project", desc: "CAD modelling & product engineering", link: "/department/design-engineering-cad" },
      { title: "Robotics & Mechatronics Project", desc: "Automation, robotics & motion systems", link: "/department/robotics-mechatronics" },
      { title: "Renewable Thermal Energy Project", desc: "Green thermal & sustainable energy", link: "/department/renewable-thermal-energy" },
      { title: "Automotive & Vehicle Engineering Project", desc: "Vehicle design, engines & EV technology", link: "/department/automotive-vehicle-engineering" },
      { title: "Mechatronics Control Systems Project", desc: "Smart automation & control integration", link: "/department/mechatronics-control-systems" },
      { title: "Mechanical Properties & Materials Project", desc: "Material strength & characterization", link: "/department/mechanical-properties-materials" },
      { title: "Industrial Production Optimization Project  ", desc: "Smart factories, lean & optimization", link: "/department/industrial-production-optimization" },
    ]
  }
  ];

  
  /* ---------- PHD SEPARATE ---------- */
  const phdDept = {
  id: "phd",
  name: "PhD & Research Services",
  domains: [
    { title: "PhD Admission Guidance", desc: "Complete assistance for PhD admission process and university selection", link: "/service/phd-admission-guidance" },

    { title: "Research Proposal Writing", desc: "Professional proposal drafting with research novelty & objectives", link: "/service/research-proposal-writing" },

    { title: "Research Paper Writing", desc: "End-to-end research paper writing support for journals & conferences", link: "/service/research-paper-writing" },

    { title: "Review Paper Writing", desc: "High-quality literature review and technical writing services", link: "/service/review-paper-writing" },

    { title: "Anna University Annexure Support", desc: "Guidance for Anna University Annexure & approved journal publications", link: "/service/anna-university-annexture" },

    { title: "Elsevier Conference Publication", desc: "Support for Elsevier indexed conference paper publication", link: "/service/elsevier-conference-paper-publication-services" },

    { title: "IEEE Conference Publication", desc: "IEEE conference paper writing & publication assistance", link: "/service/ieee-conference-paper-publication-services" },

    { title: "International Conference Publication", desc: "Paper preparation & submission for global conferences", link: "/service/international-conference-paper-publication-services" },

    { title: "PhD Project Implementation", desc: "Complete coding, simulation, and project execution support", link: "/service/phd-project-implementation-services-help" },

    { title: "PhD Final Viva Preparation", desc: "Mock viva sessions, presentation preparation & training", link: "/service/phd-research-final-viva-preparation-help-services" },

    { title: "PhD Synopsis Writing", desc: "Professional synopsis writing as per university standards", link: "/service/phd-research-synopsis-writing-services-help" },

    { title: "PhD Thesis Writing", desc: "Complete thesis writing support with plagiarism control", link: "/service/phd-research-thesis-writing-services-help" },

    { title: "Paper Publication (SRM)", desc: "Specialized publication support for SRM University scholars", link: "/service/research-paper-publication-services-for-phd-students-from-srm-university" },

    { title: "General Research Paper Publication", desc: "Publication guidance for SCI / Scopus / UGC journals", link: "/service/research-paper-publication-help-and-services" },

    { title: "Paper Publication - Sathyabama", desc: "Dedicated paper publication services for Sathyabama University", link: "/service/research-paper-sathyabama" },

    { title: "SCI Indexed Paper Publication", desc: "Support for publishing in Science Citation Indexed (SCI) journals", link: "/service/science-citation-indexed-sci-paper-publication-services" },

    { title: "Springer Conference Publication", desc: "Springer indexed conference paper support & submission", link: "/service/springer-conference-paper-publication-services" },

    { title: "VIT University Publication", desc: "Paper publication guidance for VIT scholars", link: "/service/vit-university-paper-publication-services" },

    { title: "Web of Science (WoS) Publication", desc: "Publication assistance in Web of Science indexed journals", link: "/service/web-of-science-paper-publication-services" },
  ]
};

const researchproposal={
      id:"research",
      name:"Research Proposal Service",
      domains:[ 
     {
    title: "How to Write a Research Proposal",desc: "Step-by-step guide to structure, format, and prepare a strong research proposal.",link: "/research-proposal-services/how-to-write-research-proposal",
  },
  {
    title: "Trending Research Topics",desc: "Latest and high-impact research topics across various engineering domains.",link: "/research-proposal-services/trending-research-topics",
  },
  {
    title: "Research Proposal for Funding",desc: "Guidelines to prepare winning research proposals for grants and funding agencies.",link: "/research-proposal-services/research-proposal-for-funding",
  },
  {
    title: "Engineering Research Proposal Guide",desc: "Detailed proposal preparation roadmap specifically for engineering researchers.",link: "/research-proposal-services/engineering-research-proposal-guide",
  },
]
};

// const paperWritingServices = {
//   id:"writing",
//   name:"Paper Writing Services",
//   domains:[
//   {
//     title: "Scopus Journal Paper Writing", desc: "Professional research paper writing support for Scopus indexed journals with high acceptance standards.", link: "/scopus-journal-paper-writing",
//   },
//   {
//     title: "IEEE Conference Paper Writing", desc: "End-to-end IEEE conference paper drafting, formatting, and submission assistance.", link: "/ieee-conference-paper-writing",
//   },
//   {
//     title: "SCI Journal Paper Writing", desc: "High-quality technical paper writing for SCI indexed journals with plagiarism control and review support.", link: "/sci-journal-paper-writing",
//   },
//   {
//     title: "Review Article Writing", desc: "Comprehensive literature review and technical review article writing service for reputed journals.",link: "/review-article-writing",
//   },
// ]
// };

const publicationServices = {
  id: "publication",
  name: "Publication Services",
  domains: [
    {
      title: "Conference Paper Publication",
      desc: "Support for national and international conference paper publication with proper formatting and guidance.",
      link: "/publication-services/conference-paper-publication-services",
    },
    {
      title: "SCI Journal Publication",
      desc: "End-to-end assistance for publishing papers in high-impact SCI indexed journals.",
      link: "/publication-services/SCIJournal",
    },
    {
      title: "Scopus Journal Publication",
      desc: "Professional support for Scopus indexed journal submission, formatting, and publication.",
      link: "/publication-services/scopus-journal-publication-services",
    },
    {
      title: "Review Article Publication",
      desc: "Guidance for publishing review articles in reputed journals with strong research contributions.",
      link: "/publication-services/review-article-publication",
    },
    {
      title: "UGC Care Journal Publication",
      desc: "Publication assistance for UGC CARE approved journals ensuring academic standards.",
      link: "/publication-services/ugc-care-journal-publication-services",
    },
    {
      title: "Book ISBN Publication Support",
      desc: "End-to-end support for academic book publishing with ISBN registration and documentation.",
      link: "/publication-services/book-isbn-publication-support",
    },
  ],
};

  const [selectedDept, setSelectedDept] = useState(departments[0]);
  const [showMenu, setShowMenu] = useState(false);

  /* ================= UI ================= */
  return (
    <div className="dept-container">
      <div className="dept-inner">

        {/* SIDEBAR */}
        <aside className="dept-sidebar">
          <h3>Categories</h3>

          <button className="dropdown-btn" onClick={() => setShowMenu(!showMenu)}>
            Departments <span>▼</span>
          </button>

          {showMenu && (
            <ul className="dept-list">
              {departments.map((dept) => (
                <li
                  key={dept.id}
                  className={`dept-item ${selectedDept.id === dept.id ? "active" : ""}`}
                  onClick={() => {
                    setSelectedDept(dept);
                    setShowMenu(false);
                  }}
                >
                  {dept.name}
                </li>
              ))}
            </ul>
          )}
          <button
          className={`phd-btn ${selectedDept.id === "phd" ? "active" : ""}`}
          onClick={() => {
            setSelectedDept(phdDept);
            setShowMenu(false);
          }}
        >
          🎓 PhD & Research Services
        </button>
         <button
          className={`phd-btn ${selectedDept.id === "research" ? "active" : ""}`}
          onClick={() => {
            setSelectedDept(researchproposal);
            setShowMenu(false);
          }}
        >
          Research proposal
        </button>
         {/* <button
          className={`phd-btn ${selectedDept.id === "writing" ? "active" : ""}`}
          onClick={() => {
            setSelectedDept(paperWritingServices);
            setShowMenu(false);
          }}
        >
          Paper Writing Services
        </button> */}

         <button
          className={`phd-btn ${selectedDept.id === "publication" ? "active" : ""}`}
          onClick={() => {
            setSelectedDept(publicationServices);
            setShowMenu(false);
          }}
        >
          Publication Services
        </button>
        </aside>

        {/* CONTENT */}
        <main className="dept-content">
          <h2>
            {selectedDept.name}
            <span className="domain-count">({selectedDept.domains.length})</span>
          </h2>

          <div className="domain-grid">
            {selectedDept.domains.map((domain, index) => (
              <div className="domain-card" key={index}>
                <div className="card-icon">
                  {iconMap[domain.title] || <FaBook />}
                </div>

                <h3>{domain.title}</h3>
                <p className="description">{domain.desc}</p>

                <a href={domain.link} className="know-more">
                  Know More
                </a>
              </div>
            ))}
          </div>
        </main>

      </div>
    </div>
  );
}
