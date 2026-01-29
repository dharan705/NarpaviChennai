import React from "react";
import "./ServiceCategories.scss";
import { useNavigate } from "react-router-dom";
import SEO from "../assets/SEO";
const services = [
  // Main Service
  {
    id: 1,
    title: "Our PhD Support Services in Chennai",
    icon: "src/images/phd_services.png",
    alt: "Our PhD Support Services",
    path: "/service",
  },


  // Paper Writing  
  // {
  //   id: 2,
  //   title: "Review Article Writing in Chennai",
  //   icon: "src/images/Review_Article_Writing.png",
  //   alt: "Review Article Writing",
  //   path: "/review-article-writing",
  // },
  // {
  //   id: 3,
  //   title: "SCI Journal Paper Writing in Chennai",
  //   icon: "src/images/SCIJournalPaperWriting.png",
  //   alt: "SCI Journal Paper Writing",
  //   path: "/sci-journal-paper-writing",
  // },
  // {
  //   id: 4,
  //   title: "Scopus Journal Paper Writing in Chennai",
  //   icon: "/images/write.png",
  //   alt: "Scopus Journal Paper Writing",
  //   path: "/scopus-journal-paper-writing",
  // },
  // {
  //   id: 5,
  //   title: "IEEE Conference Paper Writing in Chennai",
  //   icon: "src/images/IEEEConferencePaperWriting.png",
  //   alt: "IEEE Conference Paper Writing",
  //   path: "/ieee-conference-paper-writing",
  // },

  // Publication Services
  {
    id: 10,
    title: "Publication Services in Chennai",
    icon: "/images/pub.png",
    alt: "Publication Services",
    path: "/publication-services",
  },
  {
    id: 11,
    title: "Conference Paper Publication in Chennai",
    icon: "src/images/ConferencePaperPublication.png",
    alt: "Conference Paper Publication Services",
    path: "/publication-services/conference-paper-publication-services",
  },
  {
    id: 12,
    title: "SCI Journal Publication in Chennai",
    icon: "/images/pub.png",
    alt: "SCI Journal Publication Services",
    path: "/publication-services/SCIJournal",
  },
  {
    id: 13,
    title: "Scopus Journal Publication in Chennai",
    icon: "/images/pub.png",
    alt: "Scopus Journal Publication Services",
    path: "/publication-services/scopus-journal-publication-services",
  },
  {
    id: 14,
    title: "Review Article Publication in Chennai",
    icon: "src/images/ReviewArticlePublication.png",
    alt: "Review Article Publication Services",
    path: "/publication-services/review-article-publication",
  },
  {
    id: 15,
    title: "UGC Care Journal Publication in Chennai",
    icon: "src/images/UGCCareJournalPublication.png",
    alt: "UGC Care Journal Publication Services",
    path: "/publication-services/ugc-care-journal-publication-services",
  },
  {
    id: 16,
    title: "Book ISBN Publication Support in Chennai",
    icon: "src/images/BookISBNPublication.png",
    alt: "Book ISBN Publication Support",
    path: "/publication-services/book-isbn-publication-support",
  },
  
  // Research Proposal Services
  // {
  //   id: 6,
  //   title: "How to Write Research Proposal in Chennai",
  //   icon: "/images/research.png",
  //   alt: "How to Write Research Proposal",
  //   path: "/research-proposal-services/how-to-write-research-proposal",
  // },
  // {
  //   id: 7,
  //   title: "Trending Research Topics in Chennai",
  //   icon: "/images/research.png",
  //   alt: "Trending Research Topics",
  //   path: "/research-proposal-services/trending-research-topics",
  // },
  // {
  //   id: 8,
  //   title: "Research Proposal For Funding in Chennai",
  //   icon: "/images/research.png",
  //   alt: "Research Proposal For Funding",
  //   path: "/research-proposal-services/research-proposal-for-funding",
  // },
  // {
  //   id: 9,
  //   title: "Engineering Research Proposal Guide in Chennai",
  //   icon: "/images/research.png",
  //   alt: "Engineering Research Proposal Guide",
  //   path: "/research-proposal-services/engineering-research-proposal-guide",
  // },

  // Extra
  {
    id: 17,
    title: "Scopus Services in Chennai",
    icon: "src/images/ScopusServices.png",
    alt: "Scopus Paper Services",
    path: "/scopus-journal-paper-writing/scopus-services",
  },

  // Departments
  {
    id: 18,
    title: "Computer Science Engineering Project center in Chennai",
    icon: "src/images/cse/cse.png",
    alt: "Computer Science Engineering Department",
    path: "/department?dept=cse",
  },
  {
    id: 19,
    title: "Mechanical Engineering Project center in Chennai",
    icon: "src/images/mech/mech.png",
    alt: "Mechanical Engineering Department",
    path: "/department?dept=mech",
  },
  {
    id: 20,
    title: "Civil Engineering Project center in Chennai",
    icon: "src/images/civil/civil.png",
    alt: "Civil Engineering Department",
    path: "/department?dept=civil",
  },
  {
    id: 21,
    title: "Electronics & Communication Project center in Chennai",
    icon: "/src/images/ece/ece.png",
    alt: "Electronics and Communication Engineering",
    path: "/department?dept=ece",
  },
  {
    id: 22,
    title: "Electrical & Electronics Project center in Chennai",
    icon: "src/images/eee/eee.png",
    alt: "Electrical and Electronics Engineering",
    path: "/department?dept=eee",
  },
    // Chennai Based Project & PhD Services
  {
    id: 23,
    title: "IEEE Project center in Chennai",
    icon: "src/images/ieee.png",
    alt: "IEEE Project center in Chennai",
    path: "/service/ieee-project-center-in-chennai",
  },
  {
    id: 24,
    title: "Matlab Project center in Chennai",
    icon: "src/images/matlab.png",
    alt: "Best Matlab Project center in Chennai",
    path: "/service/matlab-project-center-in-chennai",
  },
  //   {
  //   id: 30,
  //   title: "PhD Thesis Writing Services in Chennai",
  //   icon: "src/images/thesis.png",
  //   alt: "PhD Thesis Writing Services in Chennai",
  //   path: "/service/phd-research-thesis-writing-services-help",
  // },
  {
    id: 25,
    title: "Best NS2 NS3 Project center in Chennai",
    icon: "/images/project.png",
    alt: "NS2 NS3 Project center in Chennai",
    path: "/service/ns2-ns3-project-center-in-chennai",
  },
  {
    id: 26,
    title: "PhD Project center in Chennai",
    icon: "src/images/phd_project.png",
    alt: "PhD Project center in Chennai",
    path: "/service/phd-project-center-in-chennai",
  },
  {
    id: 27,
    title: "M.E M.Tech Project center in Chennai",
    icon: "src/images/me.png",
    alt: "M.E M.Tech Project center in Chennai",
    path: "/service/me-mtech-project-center-in-chennai",
  },
  {
    id: 28,
    title: "B.E B.Tech Project center in Chennai",
    icon: "src/images/be.png",
    alt: "B.E B.Tech Project center in Chennai",
    path: "/service/be-btech-project-center-in-chennai",
  },

  {
    id: 31,
    title: "Research Paper Writing Service in Chennai",
    icon: "/images/write.png",
    alt: "Research Paper Writing Service in Chennai",
    path: "/service/research-paper-writing",
  },
  {
    id: 32,
    title: "Conference Paper Writing Services in Chennai",
    icon: "/images/write.png",
    alt: "Conference Paper Writing Services in Chennai",
    path: "/service/conference-paper",
  },
  {
    id: 33,
    title: "Research Paper Publication Support Services in Chennai",
    icon: "src/images/ResearchPaperPublicationSupport.png",
    alt: "Research Paper Publication Support Chennai",
    path: "/service/research-paper-publication-help-and-services",
  },
  {
    id: 34,
    title: "PhD Research Guidance in Chennai",
    icon: "src/images/ResearchGuidance.png",
    alt: "PhD Research Guidance in Chennai",
    path: "/service/phd-research-guidance-chennai",
  },
 
  { 
    id:36,
    title: "Embedded Systems Project",
    icon: "src/images/ece/EmbeddedSystems.png",
    alt: "Embedded Systems Projects in Chennai",
    path: "/department/embedded-systems"
   },
   { 
    id:37,
    title: "VLSI Design Project",
    icon: "src/images/ece/VLSIDesign.png",
    alt: "VLSI Design Projects in Chennai",
    path: "/department/vlsi-design"
   },
   { 
    id:38,
    title: "Android Project",
    icon: "src/images/cse/Mobile.png",
    alt: "Android Projects in Chennai",
    path: "/department/mobile-app"
   },
   { 
    id:39,
    title: "Power Systems Project",
    icon: "src/images/eee/EEE_PowerSystems.png",
    alt: "Power Systems Project in Chennai",
    path: "/department/power-systems" 
  },
   {
    id: 35,
    title: "PhD Thesis Writing in Chennai",
    icon: "src/images/thesis.png",
    alt: "PhD Thesis Writing in Chennai",
    path: "/service/phd-research-thesis-writing-services-help",
  },
   { 
    id:40,
    title: "Power Electronics Project",
    icon: "src/images/eee/EEE_PowerElectronics.png",
    alt: "Power Electronics Project in Chennai",
    path: "/department/power-electronics" 
  },
];

const ServiceCategories = () => {
  const navigate = useNavigate();

  return (
    <section className="dark-services">
      <SEO
  title="PhD, Journal & Project Services in Chennai | Narpavi Technologies"
  description="Explore 40+ expert research services including PhD guidance, proposal writing, thesis support, IEEE and Scopus publication, engineering project development and academic mentorship across Chennai."
  url="/"
  keywords={[
    "PhD Services Chennai",
    "Research Paper Writing",
    "Thesis Writing Help",
    "Scopus and SCI Publication",
    "IEEE Conference Publication",
    "Engineering Project Centers",
    "Matlab and NS2 Projects",
    "Academic Research Support"
  ]}
  faqs={[
    {
      question: "What services does Narpavi Technologies offer?",
      answer: "We provide 40+ research support services including PhD guidance, proposal writing, research paper drafting, thesis services, viva assistance, publication support, and engineering project development."
    },
    {
      question: "Is support available for all departments?",
      answer: "Yes. We assist Engineering, Management, Life Sciences, Computer Science and interdisciplinary researchers across all universities."
    },
    {
      question: "Do you provide project development support?",
      answer: "Absolutely. We offer IEEE projects, Matlab, NS2, Machine Learning, VLSI, Embedded Systems, and domain-specific project execution with coding and documentation."
    }
  ]}
/>

      <h1>Narpavi Technologies is recognized for its expertise in the following areas:</h1> 
      <div className="services-grid">
        {services.map((item) => (
          <article
  className="service-card"
  key={item.id}
  onClick={() => navigate(item.path)}
>
  {/* Tooltip */}
  <span className="card-tooltip">{item.alt}</span>

  <div className="icon-box">
    <img src={item.icon} alt={item.alt} />
  </div>

  <h3>{item.title}</h3>
</article>

        ))}
      </div>
    </section>
  );
};

export default ServiceCategories;
