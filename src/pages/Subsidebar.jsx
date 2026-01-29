import { useNavigate } from "react-router-dom";
import { FiPhone, FiMail } from "react-icons/fi";
import "./Subsidebar.scss";

const Subsidebar = ({ extraLinks = [] }) => {
  const navigate = useNavigate();

  // Common Menu (always same)
  const baseNav = [
    { id: "0", label: "Home", path: "/" },
    { id: "1", label: "We refer Guide", path: "/refer-guide" },
    { id: "2", label: "PhD Topic Selection", path: "/phd-topic-selection" },
    { id: "3", label: "PhD Application", path: "/phd-application" },
    { id: "4", label: "Proposal", path: "/phd-proposal" },
    { id: "5", label: "University Selection", path: "/university-selection" },
  ];


  const menu = [
    baseNav[0],        // Home
    ...extraLinks,     // Dynamic links here
    ...baseNav.slice(1)
  ];

  return (
    <div className="main">

      {/* HEADER */}
      <header className="nri-header">
        <div className="nri-header-inner">

          {/* LEFT */}
          <div className="nri-header-left">
            <div className="nri-logo-container">
              <div className="nri-logo-box">N</div>
              <h1 className="nri-university-name">Narpavi Research Institute</h1>
            </div>
          </div>

          {/* CENTER */}
          <nav className="nri-header-center">
            <ul className="nri-contact-links">
              <li>
                <FiPhone className="nri-icon" />
                <a href="tel:+919876543210">+91 98844 81399</a>
              </li>
              <li>
                <FiPhone className="nri-icon" />
                <a href="tel:+919123456789">+91 96771 11760</a>
              </li>
              <li>
                <FiMail className="nri-icon" />
                <a href="mailto:narpavitech@gmail.com">
                  narpavitech@gmail.com
                </a>
              </li>
            </ul>
          </nav>

        </div>
      </header>

      {/* SIDEBAR */}
      <div className="sidebar">
        <div className="sidebar-nav">
          {menu.map((item) => (
            <div
              key={item.id}
              className="nav-text-item"
              onClick={() => navigate(item.path)}
              style={{ cursor: "pointer" }}
            >
              {item.label}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Subsidebar;
