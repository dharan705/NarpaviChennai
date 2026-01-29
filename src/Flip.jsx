import React, { useEffect, useState } from "react";
import "./Flip.scss";

const data = [
  {
    name: "Narpavi Research Institute",
    desc:
      "Narpavi Research Institute offers end-to-end research support services including PhD guidance, journal publication assistance, proposal writing, plagiarism reduction, and academic mentoring. The institute is committed to ethical research practices and high-quality scholarly output.",
    url: "https://narpavitech.in",
  },
  {
    name: "Ranmars Corp",
    desc:
      "Ranmars Corp provides enterprise-grade IT solutions, custom software development, and digital transformation services. The company focuses on scalable architectures, performance optimization, and delivering reliable technology solutions for modern businesses.",
    url: "https://ranmars.com",
  },
  {
    name: "Narpavi Tech Mumbai",
    desc:
      "Narpavi Tech Mumbai delivers advanced software solutions, academic research support, and industry-focused innovation. The organization bridges theoretical research and real-world applications through structured development and expert guidance.",
    url: "https://narpavitechmumbai.in",
  },
  {
    name: "iBridge",
    desc:
      "iBridge specializes in digital product development, business technology consulting, and scalable software solutions. The company helps organizations transform ideas into reliable digital platforms with modern UI and robust backend systems.",
    url: "https://ibridge.in",
  },
];

const Flip = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % data.length);
        setAnimate(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
   
  <div className="services-container">
    <h1>Our Services</h1>
    <div
      className={`profile-card slide ${animate ? "in" : "out"}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      
      <div className="info">
        <span>{data[index].name}</span>
        <p>{data[index].desc}</p>
      </div>

      <a href={data[index].url} target="_blank" rel="noopener noreferrer">
        Visit Website
      </a>
    </div>

    <div className="slider-dots">
      {data.map((_, i) => (
        <span
          key={i}
          className={`dot ${index === i ? "active" : ""}`}
          onClick={() => setIndex(i)}
        />
      ))}
    </div>
  </div>
  );
};

export default Flip;
