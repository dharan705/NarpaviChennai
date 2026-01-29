import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './College.scss';
import Subsidebar from './Subsidebar';
const College1 = [ 
  {
    title: 'Periyar University',
    description: 'Learn more',
    link: '/phd-admission-assistance-in-periyar-university',
  },
  {
    title: 'Dr. M.G.R. Educational And Research Institute, Maduravoyal',
    description: 'Explore now',
    link: '/phd-admission-assistance-in-mgr-institute',
  },
  {
    title: 'Vels Institute of Science, Technology & Advanced Studies (VISTAS)',
    description: 'Visit page',
    link: '/phd-admission-assistance-in-vels-vistas',
  },
  {
    title: 'Bharath Institute of Higher Education And Research (BIHER)',
    description: 'Discover',
    link: '/phd-admission-assistance-in-biher',
  },
  {
    title: 'Amrita Vishwa Vidyapeetham, Coimbatore',
    description: 'Check it out',
    link: '/phd-admission-assistance-in-amrita',
  },
  {
    title: 'Hindustan Institute of Technology & Science (HITS), Chennai',
    description: 'Details',
    link: '/phd-admission-assistance-in-hits',
  },
  {
    title: 'Alagappa University',
    description: 'See info',
    link: '/phd-admission-assistance-in-alagappa-university',
  },
  {
    title: 'Manonmaniam Sundaranar University',
    description: 'Navigate',
    link: '/phd-admission-assistance-in-manu',
  },
  {
    title: 'Vel Tech Rangarajan Dr.Sagunthala R&D Institute of Science and Technology',
    description: 'Go to page',
    link: '/phd-admission-assistance-in-vel-tech',
  },
  {
    title: 'Kalasalingam Academy of Research and Education, Krishnankoil',
    description: 'See info',
    link: '/phd-admission-assistance-in-kalasalingam-university',
  },
  {
    title: 'Karpagam Academy of Higher Education, Coimbatore',
    description: 'See info',
    link: '/phd-admission-assistance-in-karpagam-academy',
  },
  {
    title: 'Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya, Kanchipuram',
    description: 'See info',
    link: '/phd-admission-assistance-in-scsstm',
  },
  {
    title: 'St.Peter’s Institute of Higher Education and Research, Chennai',
    description: 'See info',
    link: '/phd-admission-assistance-in-st-peters-institute',
  },
  {
    title: 'Periyar Maniammai Institute of Science & Technology, Thanjavur',
    description: 'See info',
    link: '/phd-admission-assistance-in-periyar-maniammai-university',
  },
  {
    title: 'Vinayaka Missions Research Foundation, Salem',
    description: 'See info',
    link: '/phd-admission-assistance-in-vinayaka-mission',
  },
  {
    title: 'SNS College of Technology',
    description: 'See info',
    link: '/phd-admission-assistance-in-sns',
  },
  {
    title: 'Sri Ramakrishna Engineering College, Coimbatore',
    description: 'See info',
    link: '/phd-admission-assistance-in-sri-ramakrishna-engineering',
  },
  {
    title: 'PSG College Of Technology',
    description: 'See info',
    link: '/phd-admission-assistance-in-psg',
  },
  {
    title: 'Coimbatore Institute of Technology',
    description: 'See info',
    link: '/phd-admission-assistance-in-cit',
  },
  {
    title: 'Ponnaiyah Ramajayam Institute of Science & Technology',
    description: 'See info',
    link: '/phd-admission-assistance-in-prist-university',
  },
  {
    title: 'Karunya Institute of Technology and Sciences (Deemed University)',
    description: 'See info',
    link: '/phd-admission-assistance-in-karunya-university',
  },
];


const College = () => {
  useEffect(() => {
    document.title = "Top PhD Colleges in Tamil Nadu";
  }, []);

  return (
    <div className="main">
      <Subsidebar />
      <div className="college-wrapper">
        <div className="college-container">
          {College1.map((item, index) => (
            <div className="college-card" key={index}>
              <h3>{item.title}</h3>
              <Link to={item.link} className="college-learn-more-btn">
                {item.description} <span>➜</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default College;
      