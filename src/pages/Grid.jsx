import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Grid.scss';
import anna from "../images/anna.png";
import a2 from "../images/annamalai.png";
import bu from "../images/bu.png";
import vit from "../images/vit.png";
import srm from "../images/srm.png";
import sathyabama from "../images/sathyabama.png";
import saveetha from "../images/saveetha.png";
import sastra from "../images/sastra.png";
import bharathidasan from "../images/bharathidasan.png";
import madurai_kamaraj from "../images/madurai_kamaraj.png";
import more from "../images/more_college.png";
import SEO from '../assets/SEO';
const newsItems = [
  { image: anna, link: '/phd-admission-assistance-in-anna-university', alt: 'PhD Admission Assistance in Anna University', name: 'PhD Admission Assistance in Anna University' },
  { image: a2, link: '/phd-admission-assistance-in-anna-malai-university', alt: 'PhD Admission Assistance in Annamalai University', name: 'PhD Admission Assistance in Annamalai University' },
  { image: bu, link: '/phd-admission-assistance-in-bharathiar-university', alt: 'PhD Admission Assistance in Bharathiar University', name: 'PhD Admission Assistance in Bharathiar University' },
  { image: vit, link: '/phd-admission-assistance-in-vit', alt: 'PhD Admission Assistance in VIT University', name: 'PhD Admission Assistance in VIT University' },
  { image: srm, link: '/phd-admission-assistance-in-srm', alt: 'PhD Admission Assistance in SRM University', name: 'PhD Admission Assistance in SRM University' },
  { image: sathyabama, link: '/phd-admission-assistance-in-sathyabama-university', alt: 'PhD Admission Assistance in Sathyabama University', name: 'PhD Admission Assistance in Sathyabama University' },
  { image: saveetha, link: '/phd-admission-assistance-in-saveetha-university', alt: 'PhD Admission Assistance in Saveetha University', name: 'PhD Admission Assistance in Saveetha University' },
  { image: sastra, link: '/phd-admission-assistance-in-sastra', alt: 'PhD Admission Assistance in SASTRA University', name: 'PhD Admission Assistance in SASTRA University' },
  { image: bharathidasan, link: '/phd-admission-assistance-in-bharathidasan-university', alt: 'PhD Admission Assistance in Bharathidasan University', name: 'PhD Admission Assistance in Bharathidasan University' },
  { image: madurai_kamaraj, link: '/phd-admission-assistance-in-madurai-kamaraj-university', alt: 'PhD Admission Assistance in Madurai Kamaraj University', name: 'PhD Admission Assistance in Madurai Kamaraj University' },
  { image: more, link: '/college', alt: 'More Colleges', name: 'More Colleges' },
];

const NewsCarousel = () => {
  const scrollRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const navigate = useNavigate();
  const combinedItems = [...newsItems, ...newsItems]; // Looping

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollSpeed = 2;
    const interval = setInterval(() => {
      if (!paused) {
        el.scrollLeft += scrollSpeed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
    }, 16);

    const handleWheel = (e) => {
      if (el.contains(e.target)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      clearInterval(interval);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [paused]);

  const handleNavigate = (path) => navigate(path);

  return (
    <div className="carousel-wrapper">
      <SEO
  title="PhD Admission Assistance in Top Universities in Chennai"
  description="Explore PhD admission support and research guidance for Anna University, VIT, SRM, Sathyabama, Bharathiar, Saveetha and 25+ universities across Chennai and Tamil Nadu."
  url="/college"
  keywords={[
    "PhD Admission Chennai",
    "Anna University PhD Admission",
    "SRM PhD Guidance",
    "VIT PhD Assistance",
    "Sathyabama PhD Admission",
    "Research Admission Chennai",
    "Doctoral Programs Tamil Nadu",
    "PhD University Admission Support"
  ]}
  faqs={[
    {
      question: "Do you help with PhD admission in multiple universities?",
      answer: "Yes, we provide complete PhD admission and research support for Anna University, VIT, SRM, Sathyabama, Bharathiar and 25+ other universities in Tamil Nadu."
    },
    {
      question: "Is support available for part-time or full-time PhD?",
      answer: "Absolutely. We guide students for both full-time and part-time PhD programs depending on university eligibility."
    },
    {
      question: "Do you assist with documentation and proposal writing?",
      answer: "Yes. We support topic selection, proposal drafting, document verification, and entrance preparation for PhD admissions."
    }
  ]}
/>

      <div className="carousel-header">
        <h1>PhD Admission Assistance in Chennai</h1>
        <p>“One-stop solution for your PhD dreams.”</p>
      </div>

      <div
        className="carousel-container"
        ref={scrollRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {combinedItems.map((item, index) => (
          <div
            className="carousel-card"
            key={index}
            onClick={() => handleNavigate(item.link)}
          >
            <img src={item.image} alt={item.name} className="carousel-image" />
            <div className="tooltip">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCarousel;
