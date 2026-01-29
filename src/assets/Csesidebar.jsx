import React from "react";
import { Link } from "react-router-dom";
const cse = [
  { name: "Static Web Application", path: "/department/static-web-application" },
  { name: "Dynamic Web Applications", path: "/department/dynamic-web-applications" },
  { name: "Mobile App Development", path: "/department/mobile-app" },
  { name: "Animations Project", path: "/department/animations-project" },
  { name: "AI Project", path: "/department/ai-project" },
  { name: "Data Science", path: "/department/data-science" },
  { name: "Big Data", path: "/department/big-data" },
  { name: "Blockchain", path: "/department/blockchain" },
  { name: "DevOps", path: "/department/devops" },
  { name: "Networking", path: "/department/networking" },
  { name: "Image Processing", path: "/department/image-processing" },
  { name: "Natural Language Processing (NLP)", path: "/department/nlp" },
  { name: "Cloud Computing", path: "/department/cloud-computing" },
  { name: "Cybersecurity", path: "/department/cybersecurity" },
];
const Csesidebar = () =>{
    return(
        <ul>
      {cse.map((dept, index) => (
        <li key={index}>
          <a href={dept.path}>{dept.name}</a>
        </li>
      ))}
    </ul>
    );
};
export default Csesidebar;