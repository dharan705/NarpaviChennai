import './Service.scss';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SEO from '../assets/SEO';
const serviceRoutes = {
  "PhD Admission Guidance Help & Services": "/service/phd-admission-guidance",
  "Research Proposal Writing Help & Services": "/service/research-proposal-writing",
  "Research Paper Writing Help / Services": "/service/research-paper-writing",
  "Review Paper Writing Services Help": "/service/review-paper-writing",
  "Conference Paper Writing Services Help": "/service/conference-paper",
  "Scopus Paper Writing Services Help": "/service/scopus-paper-publication-services",
  "SCI / Annexture Paper Writing Services Help": "/service/anna-university-annexture",
  "Research Paper Publication Help / Services": "/service/research-paper-publication-help-and-services",
  "IEEE Conference Paper Publication Services": "/service/ieee-conference-paper-publication-services",
  "Springer Conference Paper Publication Services": "/service/springer-conference-paper-publication-services",
  "Elsevier Conference Paper Publication Services": "/service/elsevier-conference-paper-publication-services",
  "International Conference Paper Publication Services": "/service/international-conference-paper-publication-services",
  
  "Web of Science Paper Publication Services": "/service/web-of-science-paper-publication-services",
  "Science Citation Indexed- SCI Paper Publication Services": "/service/science-citation-indexed-sci-paper-publication-services",
  "Anna University Annexture Paper Publication Services": "/service/anna-university-annexture",
  "VIT University Paper Publication Services": "/service/vit-university-paper-publication-services",
  "Research Paper Publication Services for PhD students from SRM University": "/service/research-paper-publication-services-for-phd-students-from-srm-university",
  "Research Paper Publication Services for PhD students from Sathyabama University": "/service/research-paper-sathyabama",
  "PhD Research Thesis Writing Services Help": "/service/phd-research-thesis-writing-services-help",
  "PhD Research Synopsis Writing Services Help": "/service/phd-research-synopsis-writing-services-help",
  "PhD Research Final Viva Preparation Help Services": "/service/phd-research-final-viva-preparation-help-services",
  "PhD Project Implementation Services Help": "/service/phd-project-implementation-services-help",
  "Matlab Project Centers in Chennai":"/service/matlab-project-center-in-chennai",
  "IEEE Project Centers in Chennai":"/service/ieee-project-center-in-chennai",
  "NS2 & NS3 Project Centers in Chennai":"/service/ns2-ns3-project-center-in-chennai",
  "PhD Project Centers in Chennai":"/service/phd-project-center-in-chennai",
  "M.E / M.Tech Project Centers in Chennai":"/service/me-mtech-project-center-in-chennai",
  "B.E / B.Tech Project Centers in Chennai":"/service/be-btech-project-center-in-chennai",
  "Engineering PhD Research Project Guidance Centers in Chennai":"/service/engineering-phd-research-guidance-chennai",
   "PhD Research Guidance in Chennai":"/service/phd-research-guidance-chennai",

};

const services = Object.keys(serviceRoutes);

const PhDServices = () => {
  return (
    <div className="phd-services">
      <SEO
  title="PhD Support Services in Chennai | Paper, Proposal, Thesis & Journal Help"
  description="Explore 25+ PhD support services including paper writing, proposal drafting, thesis help, journal publication, final viva preparation, and project implementation across Chennai."
  url="/service"
  keywords={[
    "PhD Support Services Chennai",
    "Research Paper Writing Help",
    "PhD Proposal Writing Services",
    "PhD Thesis Help",
    "PhD Viva Assistance",
    "Scopus and SCI Publication",
    "IEEE Conference Paper Support",
    "PhD Project Centers in Chennai",
    "Matlab and NS2 Project Center"
  ]}
/>

      <h1>Our PhD Support Services</h1>
      <div className="servicegrid">
        {services.map((service, index) => (
          <Link to={serviceRoutes[service]} className="card" key={index}>
            <div className="text">
              <h3>{service}</h3>
            </div>
            <FaArrowRight className="icon" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PhDServices;
