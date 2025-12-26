import React from "react";
import "./ServiceCategories.scss";

const projectCategories = [
  {
    id: 1,
    title: "IEEE Project Centers in Chennai",
    alt: "IEEE Projects Chennai",
    image: "/images/ieee.png",
  },
  {
    id: 2,
    title: "Matlab Project Centers in Chennai",
    alt: "Matlab Projects Chennai",
    image: "/images/matlab.png",
  },
  {
    id: 3,
    title: "Embedded Systems Project Centers",
    alt: "Embedded Systems Projects Chennai",
    image: "/images/embedded.png",
  },
  {
    id: 4,
    title: "VLSI & Robotics Project Center",
    alt: "VLSI Robotics Projects Chennai",
    image: "/images/vlsi.png",
  },
  {
    id: 5,
    title: "NS2 / NS3 / OMNeT++ Projects",
    alt: "NS2 NS3 Omnet Projects Chennai",
    image: "/images/ns2.png",
  },
  {
    id: 6,
    title: "Android Project Centers",
    alt: "Android App Projects Chennai",
    image: "/images/android.png",
  },
];

const ProjectCategories = () => {
  return (
    <section className="unique-projects">
      <div className="projects-grid">
        {projectCategories.map((item) => (
          <article className="project-box" key={item.id}>
            <div className="icon-wrapper">
              <img src={item.image} alt={item.alt} />
            </div>

            <div className="content">
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectCategories;
