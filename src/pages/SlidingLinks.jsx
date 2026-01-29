import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SlidingLinks.scss";
import SEO from "../assets/SEO";
/* =================================================
   ✨ ALL SLIDER LINKS (EDIT ONLY THIS ARRAY)
   ================================================= */
const SLIDER_LINKS = [
  // Paste your full long array here (same as before)
      { title: "Static Web Application Project Center in Chennai", link: "/department/static-web-application" },
      { title: "Dynamic Web Applications Project Center in Chennai", link: "/department/dynamic-web-applications" },
      { title: "Mobile App Development Project Center in Chennai", link: "/department/mobile-app" },
      { title: "Animations Project Center in Chennai", link: "/department/animations-project" },
      { title: "AI Project Center in Chennai", link: "/department/ai-project" },
      { title: "Data Science Project Center in Chennai", link: "/department/data-science" },
      { title: "Big Data Project Center in Chennai", link: "/department/big-data" },
      { title: "Blockchain Project Center in Chennai", link: "/department/blockchain" },
      { title: "DevOps Project Center in Chennai", link: "/department/devops" },
      { title: "Networking Project Center in Chennai", link: "/department/networking" },
      { title: "Image Processing Project Center in Chennai", link: "/department/image-processing" },
      { title: "NLP Project Center in Chennai", link: "/department/nlp" },
      { title: "Cloud Computing Project Center in Chennai", link: "/department/cloud-computing" },
      { title: "Cyber Security Project Center in Chennai", link: "/department/cybersecurity" },

      { title: "Biomedical Electronics Project Center in Chennai", link: "/department/biomedical-electronics" },
      { title: "Communication Systems Project Center in Chennai", link: "/department/communication-systems" },
      { title: "Control Systems & Robotics Project Center in Chennai", link: "/department/control-systems-robotics" },
      { title: "Cryptography & Security Project Center in Chennai", link: "/department/cryptography-security" },
      { title: "Embedded Systems Project Center in Chennai", link: "/department/embedded-systems" },
      { title: "IoT Project Center in Chennai", link: "/department/iot-projects" },
      { title: "Signal Processing Project Center in Chennai", link: "/department/signal-processing" },
      { title: "VLSI Design Project Center in Chennai", link: "/department/vlsi-design" },
      { title: "Wireless Sensor Networks Project Center in Chennai", link: "/department/wireless-sensor-networks" },
      { title: "Satellite Communication Project Center in Chennai", link: "/department/satellite-communication" },
      { title: "Antenna Design Project Center in Chennai", link: "/department/antenna-design" },
 
      { title: "Power Systems Project Center in Chennai", desc: "Electric power generation, transmission & distribution", link: "/department/power-systems" },
      { title: "Electrical Machines Project Center in Chennai", desc: "Motors, generators & electromechanical systems", link: "/department/electrical-machines" },
      { title: "Power Electronics Project Center in Chennai", desc: "Converters, inverters & energy controllers", link: "/department/power-electronics" },
      { title: "Renewable Energy Systems Project Center in Chennai", desc: "Solar, wind & sustainable energy projects", link: "/department/renewable-energy-systems" },
      { title: "Embedded Systems (EEE) Project Center in Chennai", desc: "Embedded controllers for electrical systems", link: "/department/embedded-systems-electrical" },
      { title: "High Voltage Engineering Project Center in Chennai", desc: "Insulation, HVDC & high-voltage testing", link: "/department/high-voltage-engineering" },
      { title: "Smart Grid & Microgrid Project Center in Chennai", desc: "Next-gen intelligent power grid technologies", link: "/department/smart-grid-microgrid" },
      { title: "Control Systems Project Center in Chennai", desc: "Automation & industrial electrical control", link: "/department/control-systems-electrical" },
      { title: "Industrial Automation Project Center in Chennai", desc: "PLC, SCADA & factory automation", link: "/department/industrial-automation" },
      { title: "Electric Vehicles Project Center in Chennai", desc: "EV powertrain, charging & battery systems", link: "/department/electric-vehicles" },
      { title: "AI in Electrical Engineering Project Center in Chennai", desc: "AI-powered control & energy optimization", link: "/department/ai-electrical-engineering" },
      { title: "IoT in Electrical Systems Project Center in Chennai", desc: "Smart power & IoT based electrical monitoring", link: "/department/iot-electrical-systems" },
      { title: "Energy Management Systems Project Center in Chennai", desc: "Smart energy monitoring & optimization", link: "/department/energy-management-systems" },
    
         { title: "Construction Project Management Project Center in Chennai", desc: "Planning & execution", link: "/department/construction-project-management" },
        { title: "Environmental Project Center in Chennai", desc: "Eco sustainability", link: "/department/environmental-engineering" },
        { title: "Geotechnical Engineering Project Center in Chennai", desc: "Soil & foundation", link: "/department/geotechnical-engineering" },
        { title: "Remote Sensing & GIS Project Center in Chennai", desc: "Smart mapping", link: "/department/remote-sensing-gis" },
        { title: "Structural Engineering Project Center in Chennai", desc: "Building safety", link: "/department/structural-engineering" },
        { title: "Transportation Engineering Project Center in Chennai", desc: "Traffic optimization", link: "/department/transportation-engineering" },

         { title: "Thermal Engineering Project Center in Chennai", desc: "Heat transfer, HVAC & thermal analysis", link: "/department/thermal-engineering" },
      { title: "Fluid Mechanics & Dynamics Project Center in Chennai", desc: "Fluid flow, CFD & aerodynamics", link: "/department/fluid-mechanics-dynamics" },
      { title: "Manufacturing & Production Project Center in Chennai", desc: "Industrial manufacturing & production systems", link: "/department/manufacturing-production" },
      { title: "Design Engineering (CAD) Project Center in Chennai", desc: "CAD modelling & product engineering", link: "/department/design-engineering-cad" },
      { title: "Robotics & Mechatronics Project Center in Chennai", desc: "Automation, robotics & motion systems", link: "/department/robotics-mechatronics" },
      { title: "Renewable Thermal Energy Project Center in Chennai", desc: "Green thermal & sustainable energy", link: "/department/renewable-thermal-energy" },
      { title: "Automotive & Vehicle Engineering Project Center in Chennai", desc: "Vehicle design, engines & EV technology", link: "/department/automotive-vehicle-engineering" },
      { title: "Mechatronics Control Systems Project Center in Chennai", desc: "Smart automation & control integration", link: "/department/mechatronics-control-systems" },
      { title: "Mechanical Properties & Materials Project Center in Chennai", desc: "Material strength & characterization", link: "/department/mechanical-properties-materials" },
      { title: "Industrial Production Optimization Project Center in Chennai ", desc: "Smart factories, lean & optimization", link: "/department/industrial-production-optimization" },
    
  /* ---------- PhD & Research ---------- */
  { title: "PhD Admission Guidance", link: "/service/phd-admission-guidance" },
    { title: "Research Proposal Writing", link: "/service/research-proposal-writing" },
    { title: "Research Paper Writing", link: "/service/research-paper-writing" },
    { title: "Review Paper Writing", link: "/service/review-paper-writing" },
    { title: "Anna University Annexure Support", link: "/service/anna-university-annexture" },
    { title: "Elsevier Conference Publication", link: "/service/elsevier-conference-paper-publication-services" },
    { title: "IEEE Conference Publication", link: "/service/ieee-conference-paper-publication-services" },
    { title: "International Conference Publication", link: "/service/international-conference-paper-publication-services" },
    { title: "PhD Project Implementation", link: "/service/phd-project-implementation-services-help" },
    { title: "PhD Final Viva Preparation", link: "/service/phd-research-final-viva-preparation-help-services" },
    { title: "PhD Synopsis Writing", link: "/service/phd-research-synopsis-writing-services-help" },
    { title: "PhD Thesis Writing", link: "/service/phd-research-thesis-writing-services-help" },
    { title: "Paper Publication (SRM)", link: "/service/research-paper-publication-services-for-phd-students-from-srm-university" },
    { title: "General Research Paper Publication", link: "/service/research-paper-publication-help-and-services" },
    { title: "Paper Publication - Sathyabama", link: "/service/research-paper-sathyabama" },
    { title: "SCI Indexed Paper Publication", link: "/service/science-citation-indexed-sci-paper-publication-services" },
    { title: "Springer Conference Publication", link: "/service/springer-conference-paper-publication-services" },
    { title: "VIT University Publication", link: "/service/vit-university-paper-publication-services" },
    { title: "Web of Science (WoS) Publication", link: "/service/web-of-science-paper-publication-services" },


  /* ---------- Publication & Writing ---------- */
  { title: "Conference Paper Publication", link: "/publication-services/conference-paper-publication-services" },
    { title: "SCI Journal Publication", link: "/publication-services/SCIJournal" },
    { title: "Scopus Journal Publication", link: "/publication-services/scopus-journal-publication-services" },
    { title: "Review Article Publication", link: "/publication-services/review-article-publication" },
    { title: "UGC Care Journal Publication", link: "/publication-services/ugc-care-journal-publication-services" },
    { title: "Book ISBN Publication Support", link: "/publication-services/book-isbn-publication-support" },

  /* =================================================
     🔥 CHENNAI-SPECIFIC PROJECT & PHD LINKS (NEW)
     ================================================= */

  { title: "IEEE Project Center in Chennai", path: "/ieee-project-centers-chennai" },
  { title: "Best Matlab Project Center in Chennai", path: "/matlab-project-centers-chennai" },
  { title: "Best NS2 NS3 Omnet++ Project Center in Chennai", path: "/ns2-ns3-omnet-project-centers-chennai" },
  { title: "PhD Project Center in Chennai", path: "/phd-project-centers-chennai" },
  { title: "M.E M.Tech Project Center in Chennai", path: "/me-mtech-project-centers-chennai" },
  { title: "B.E B.Tech Project Center in Chennai", path: "/be-btech-project-centers-chennai" },
  { title: "Engineering PhD Research Project Guidance Center in Chennai", path: "/engineering-phd-research-guidance-chennai" },
  { title: "PhD Thesis Writing Services in Chennai", path: "/phd-thesis-writing-chennai" },
  { title: "Research Paper Writing Service in Chennai", path: "/research-paper-writing-chennai" },
  { title: "Conference Paper Writing Services in Chennai", path: "/conference-paper-writing-chennai" },
  { title: "Research Paper Publication Support Services in Chennai", path: "/research-paper-publication-chennai" },
  { title: "PhD Research Guidance in Chennai", path: "/phd-research-guidance-chennai" },
  { title: "PhD Thesis Writing in Chennai", path: "/phd-thesis-writing-services-chennai" },
  { title: "Matlab Projects in Chennai", path: "/matlab-projects-chennai" },

];

/* Settings */
const ITEMS_PER_SLIDE = 25;
const INTERVAL = 5000; // 5 seconds

export default function SlidingLinks() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = Math.ceil(SLIDER_LINKS.length / ITEMS_PER_SLIDE);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, INTERVAL);

    return () => clearInterval(timer);
  }, [totalSlides]);

  const startIndex = currentSlide * ITEMS_PER_SLIDE;
  const visibleLinks = SLIDER_LINKS.slice(startIndex, startIndex + ITEMS_PER_SLIDE);

  return (
    <section className="sliding-links-fullscreen">
      <SEO
  title="Engineering Project Centers & PhD Research Services in Chennai"
  description="Explore 100+ project development and PhD support services across AI, IoT, Data Science, NS2, Matlab, Cloud, Civil, Mechanical, Electrical and research domains in Chennai."
  url="/all-project-centers-and-services"
  keywords={[
    "Project Center Chennai",
    "Engineering Projects Chennai",
    "PhD Research Support Chennai",
    "IEEE Project Center",
    "Matlab Project Center",
    "NS2 NS3 Project Support",
    "VLSI Project Center",
    "IoT and AI Projects",
    "Civil Mechanical EEE ECE Projects"
  ]}
  faqs={[
    {
      question: "What types of project centers do you support?",
      answer: "We support over 100 specializations including AI, IoT, NS2, Data Science, VLSI, Cloud Computing, Android, Power Systems, and interdisciplinary engineering domains."
    },
    {
      question: "Do you offer PhD research and writing services?",
      answer: "Yes, we provide complete PhD support including proposal drafting, thesis writing, synopsis support, paper publication, and final viva prep."
    },
    {
      question: "Are these services available for all engineering departments?",
      answer: "Absolutely. We cover CSE, IT, ECE, EEE, Mechanical, Civil, Biomedical, Mechatronics, IoT, Robotics, and customized interdisciplinary domains."
    }
  ]}
/>

      <div className="slider-container">
        <h1 className="section-title">
          Explore Our Project Center & Research Services in Chennai
        </h1>

        <div className="links-grid" key={currentSlide}>
          {visibleLinks.map((item, index) => (
            <div
              key={startIndex + index}
              className="link-card"
              onClick={() => navigate(item.link || item.path)}
            >
              <h3>{item.title}</h3>
              {item.desc && <p>{item.desc}</p>}
            </div>
          ))}
        </div>

        {/* Slide Indicators at bottom */}
        <div className="slide-indicators">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}