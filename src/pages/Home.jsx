import "./Home.scss";
// import Logo from "./Logo";
import PhDresearch from "./PhDresearch";
import Grid from "./Grid";
//import Fact from "./Factandstats"
// import FacilitiesSection from "./FacilitiesSection"
// import ContactSection from "./ContactSection"
import ResearchProposalServices from "./Researchproposalservices";
import LeadingResearchServices from "./LeadingResearchServices"
import PublicationServices from "./PublicationServices";
import Departments from "./Departments";
import Flip from "../Flip"
import ServiceCategories from "./ServiceCategories";
import SlidingLinks from "./SlidingLinks";
 
const Home =() => {
return(
    <div className="home"> 
        {/* <Logo/> */}
        <PhDresearch/>
        <Grid/>   
        <ResearchProposalServices/>
        <LeadingResearchServices/>
        <PublicationServices/> 
        <SlidingLinks/>       
        <Departments/>
        {/* <FacilitiesSection/> */}
        <ServiceCategories/>
        <Flip />
        {/* <ContactSection/> */}
    </div>
    );
};
export default Home;