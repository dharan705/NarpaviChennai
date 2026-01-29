import "./Departments.scss";
import { useNavigate } from "react-router-dom";
import DepartmentUI from "./DepartmentUI"
import {
  FaLaptopCode,
  FaCogs,
  FaMicrochip,
  FaBolt,
  FaDraftingCompass,
  FaUniversity,
} from "react-icons/fa";


const departments = [
  {
    deptId: "cse",
    icon: <FaLaptopCode />,
    title: "Computer Science & Engineering (CSE)",
    description:
      "Advanced research and project development support in AI, Machine Learning, Cloud Computing, Cybersecurity, and Data Science.",
    linkText: "Explore",
    link: "/department",
  },
  {
    deptId: "mech",
    icon: <FaCogs />,
    title: "Mechanical Engineering",
    description:
      "End-to-end guidance in design, thermal engineering, robotics, CAD/CAM, manufacturing systems, and energy optimization projects.",
    linkText: "Explore",
    link: "/department",
  },
  {
    deptId: "ece",
    icon: <FaMicrochip />,
    title: "Electronics & Communication Engineering (ECE)",
    description:
      "Cutting-edge solutions in VLSI, Embedded Systems, IoT, Wireless Communication, and Signal Processing for research scholars.",
    linkText: "Explore",
    link: "/department",
  },
  {
    deptId: "eee",
    icon: <FaBolt />,
    title: "Electrical & Electronics Engineering (EEE)",
    description:
      "Project and publication support in Power Systems, Renewable Energy, Smart Grids, Electric Vehicles, and AI-driven power forecasting.",
    linkText: "Explore",
    link: "/department",
  },
  {
    deptId: "civil",
    icon: <FaDraftingCompass />,
    title: "Civil Engineering",
    description:
      "Expert project support in Structural Engineering, Smart Cities, Construction Management, and Sustainable Design methodologies.",
    linkText: "Explore",
    link: "/department",
  },
  {
    deptId: "other",
    icon: <FaUniversity />,
    title: "Other Specialized Departments",
    description:
      "Customized support for interdisciplinary and upcoming domains. (Details will be updated soon).",
    linkText: "Explore",
    link: "/department",
  },
];

const Departments = () => {
  const navigate=useNavigate();
  return (
    <>
      {/* ===================== Departments Section ===================== */}
      <section className="departments-section">
        <div className="departments-container">
          <h2 className="departments-heading">🏫 Academic Departments</h2>
          <p className="departments-subtext">
            <strong>Comprehensive Research & Project Support</strong>
            <br />
            At <strong>Narpavi Research Institute</strong>, we assist students
            and researchers across multiple engineering and technology domains.
          </p>

          <button className="read-more-btn" onClick={()=>navigate("/department")}>View All Departments</button>

          <div className="departments-grid">
            {departments.map((dept, index) => (
              <div className="departments-card" key={index}>
                <div className="departments-icon">{dept.icon}</div>
                <h3>{dept.title}</h3>
                <p>{dept.description}</p>

                {/* ✅ ONLY CHANGE: query param */}
                <a
                  href={`/department?dept=${dept.deptId}`}
                  className="departments-cta"
                >
                  🔗 {dept.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== New Services Container & Button Only ===================== */}
      <section className="services-section1">
        <div className="services-container1">
          <h2 className="services-heading1">✨ Our Services</h2>
          <p className="services-text1">
           Our PhD Support Services are designed to guide research scholars through every stage of their doctoral journey with expert academic assistance and personalized mentoring. From PhD admission guidance, research proposal development, paper writing, journal publications, and conference submissions to thesis writing, synopsis preparation, viva support, and project implementation, we ensure quality, originality, and adherence to university and international research standards. Whether you are targeting Scopus, SCI, Web of Science, IEEE, Springer, Elsevier, or university-specific publications, our team provides end-to-end, ethical, and professional support to help you achieve research excellence and successful completion of your PhD journey.
          </p>

          <a href="/service" className="services-button1">
            View All Services
          </a>
        </div>
      </section>
       <DepartmentUI/>
    </>
  );
};

export default Departments;
