import { Routes, Route } from 'react-router-dom'
import React from "react";
//import ScrollToTop from './assets/ScrollToTop'
// import Fact from "./pages/Researchproposalservices"
import "./index.css"
import Home from './pages/Home'
import Subheading from "./pages/Subheading"
import College from "./pages/College" 
import Annamalaiuniversity from "./College/Annamalaiuniversity"
import Bharathiaruniversity from "./College/Bharathiaruniversity"
import Vituniversity from "./College/Vituniversity"
import Srm from "./College/Srm"
import Mgr from "./College/Mgr"
import Sathyabama from "./College/Sathyabama"
import Saveetha from "./College/Saveetha"
import Vels from "./College/Vels"
import Bharath from "./College/Bharath"
import Amrita from "./College/Amrita"
import Hindustan  from "./College/Hindustan"
import Alagappa  from "./College/Alagappa"
import Manonmaniam  from "./College/Manonmaniam"
import Periyar  from "./College/Periyar"
import MaduraiKamaraj  from "./College/MaduraiKamaraj"
import Bharathidasan  from "./College/Bharathidasan"
import Sastra  from "./College/Sastra"
import SriRamakrishna  from "./College/SriRamakrishna"
import Sns  from "./College/Sns"
import Cit  from "./College/Cit"
import Psg  from "./College/Psg"
import VinayakaMission  from "./College/VinayakaMission"
import PonnaiyahRamajayam  from "./College/PonnaiyahRamajayam"
import PeriyarManiammai from "./College/PeriyarManiammai"
import StPeters from "./College/StPeters"
import Srichandrasekharendra from "./College/Srichandrasekharendra";
import Karpagam from "./College/Karpagam";
import Karunya from "./College/Karunya";
import VelTech from "./College/VelTech";
import Kalasalingam from "./College/Kalasalingam";
//subsiderbar
import ReferGuide from './sidebar/ReferGuide'
import TopicSelection from './sidebar/TopicSelection'
import PhDApplication from './sidebar/PhDApplication'
import Proposal from './sidebar/Proposal'
import UniversitySelection from './sidebar/UniversitySelection'
import Service from './pages/Service'
/*service*/
import PhDAdmissionGuidance from './services/PhDAdmissionGuidance';
import Researchproposalwriting from './services/Researchproposalwriting';
import Researchpaperwriting from './services/Researchpaperwriting';
import Reviewpaperwriting from './services/Reviewpaperwriting';
import Annauniversityannexture from './services/Annauniversityannexture'
import ElsevierConference from './services/Elsevierconferencepaper'
import IEEEconferencepaper from './services/IEEEconferencepaper'
import Internationalconferencepaper from './services/Internationalconferencepaper'
import Phdprojectimplementation from './services/Phdprojectimplementation'
import Phdresearchfinalviva from './services/Phdresearchfinalviva'
import Phdresearchsynopsis from './services/Phdresearchsynopsis'
import Phdresearchthesis from './services/Phdresearchthesis'
import Researchpaperforsrm from './services/Researchpaperforsrm'
import Researchpaperpublication from './services/Researchpaperpublication'
import Researchpapersathyabama from './services/Researchpapersathyabama'
import Sciencecitationindexed from './services/Sciencecitationindexed'
import Springerconferencepaper from './services/Springerconferencepaper'
import VITuniversitypaper from './services/VITuniversitypaper'
import Webofsciencepaper from './services/Webofsciencepaper'
//Researchproposalservices
import EngineeringResearchProposalGuide from './Researchproposalservices/EngineeringResearchProposalGuide'
import TrendingResearchTopics from './Researchproposalservices/TrendingResearchTopics' 
import ResearchFundingGuide from './Researchproposalservices/ResearchFundingGuide'
import ProposalStepGuide from "./Researchproposalservices/ProposalStepGuide"
//leading research sevices
import ReviewArticleWriting from './LeadingResearchServices/ReviewArticleWriting'
import SCIPaperWriting from './LeadingResearchServices/SCIPaperWriting'
import ScopusPaperWriting from './LeadingResearchServices/ScopusPaperWriting'
import IEEEPaperWriting from './LeadingResearchServices/IEEEPaperWriting'

import EngineeringLiteratureGuide from './LeadingResearchServices/SubReviewAriticleWriting/EngineeringLiteratureGuide'
import MedicalReviewWriting from './LeadingResearchServices/SubReviewAriticleWriting/MedicalReviewWriting'
import LiteratureReviewGuide from "./LeadingResearchServices/SubReviewAriticleWriting/LiteratureReviewGuide"

// main publication services
import MainPublicationServices from './MainPublicationServices/MainPublicationServices'
      //ConferencePublication
      import ConferencePublication from './MainPublicationServices/ConferencePublication'
      import IEEEConference from './MainPublicationServices/ConferencePublication/IEEEConference'
      import SpringerConference from './MainPublicationServices/ConferencePublication/SpringerConference'
      import ElsevierConference1 from './MainPublicationServices/ConferencePublication/ElsevierConference'
      import NationalConference from './MainPublicationServices/ConferencePublication/NationalConference'
      import FastTrackConference from "./MainPublicationServices/ConferencePublication/FastTrackConference"
      import IEEEConferenceReview from "./MainPublicationServices/ConferencePublication/IEEEConferenceReview"
    
      //SCI Journal Publication Services
      import SCIJournal from './MainPublicationServices/SCIJournal'
      import SCIJournalSupport from './MainPublicationServices/SCIJournalPublication/SCIJournalSupport'
      import SCIJournalTargeting from './MainPublicationServices/SCIJournalPublication/SCIJournalTargeting'
      import SCIPublishingTimelines from './MainPublicationServices/SCIJournalPublication/SCIPublishingTimelines'
      import EthicalSCIPublication from './MainPublicationServices/SCIJournalPublication/EthicalSCIPublication'
      import OpenAccessVsSubscription from './MainPublicationServices/SCIJournalPublication/OpenAccessVsSubscription'
      import PostPublicationVisibility from './MainPublicationServices/SCIJournalPublication/PostPublicationVisibility'
      //ScopusJournalPublicationServices
      import ScopusJournalPublication from './MainPublicationServices/ScopusJournalPublicationServices'
      import Q1ScopusJournal from './MainPublicationServices/ScopusJournalPublicationServices/ScopusJournalQ1'
      import Q2Scopus from './MainPublicationServices/ScopusJournalPublicationServices/Q2Scopus'
      //Review Article Publication
      import ReviewArticlePublication from './MainPublicationServices/ReviewArticlePublication'
      import SystematicReviewArticlePublication from './MainPublicationServices/ReviewArticlePublication/SystematicReviewArticle'
      import NarrativeReviewArticlePublication from './MainPublicationServices/ReviewArticlePublication/NarrativeReviewArticle'
      import MetaAnalysisReviewPaperPublication from './MainPublicationServices/ReviewArticlePublication/MetaAnalysisReview'
      import ScopusIndexedReviewArticlePublication from './MainPublicationServices/ReviewArticlePublication/ScopusIndexedReview'
      import ReviewArticleJournalSelectionAssistance from './MainPublicationServices/ReviewArticlePublication/ReviewArticleJournal'
      import SCIJournalReviewArticlePublication from './MainPublicationServices/ReviewArticlePublication/SCIJournalReviewArticle'
      //UGCCareJournalPublicationServices
      import UGCCareJournalPublicationServices from './MainPublicationServices/UGCCareJournalPublicationServices'
      import UGCCareIndexedJournalPublicationServices from './MainPublicationServices/UGCCareJournalPublication/UGCCareIndexedJournal'
      import UGCCareArtsAndHumanitiesJournalPublicationServices from './MainPublicationServices/UGCCareJournalPublication/UGCCareArtsAndHumanitiesJournal'
      import UGCCareFastTrackJournalPublicationServices from './MainPublicationServices/UGCCareJournalPublication/UGCCareFastTrackJournal'
      import UGCCareOpenAccessJournalPublicationServices from './MainPublicationServices/UGCCareJournalPublication/UGCCareOpenAccessJournal'
      import UGCCarePeerReviewedJournalPublicationServices from './MainPublicationServices/UGCCareJournalPublication/UGCCarePeerReviewedJournal'
      import UGCCareScienceAndTechnologyJournalPublicationServices from './MainPublicationServices/UGCCareJournalPublication/UGCCareScienceAndTechnologyJournal'
      //BookISBNPublicationSupport
      import BookISBNPublicationSupport from './MainPublicationServices/BookISBNPublicationSupport'
      import AcademicBookISBNPublicationSupport from './MainPublicationServices/BookISBNPublicationSupport/AcademicBookISBNPublication'
      import EditedVolumeISBNPublicationSupport from "./MainPublicationServices/BookISBNPublicationSupport/EditedVolumeISBNPublication"
      import ISBNBarcodeAndMetadataPublicationSupport from './MainPublicationServices/BookISBNPublicationSupport/ISBNBarcodeAndMetadataPublication'
      import PrintAndEBookISBNPublicationSupport from './MainPublicationServices/BookISBNPublicationSupport/PrintAndEBookISBNPublication'
      import SelfPublishedBookISBNPublicationSupport from './MainPublicationServices/BookISBNPublicationSupport/SelfPublishedBookISBNPublication'


//SubScopusJournalPaperWriting
import ScopusPaperServices from './LeadingResearchServices/SubScopusJournalPaperWriting/ScopusPaperServices'
import EngineeringTopicsForScopus from './LeadingResearchServices/SubScopusJournalPaperWriting/EngineeringTopicsForScopus'
import WriteFreeScopusArticle from './LeadingResearchServices/SubScopusJournalPaperWriting/WriteFreeScopusArticle'
import ScopusJournalVsConference from './LeadingResearchServices/SubScopusJournalPaperWriting/ScopusJournalVsConference'
import ScopusPaperBenefits from './LeadingResearchServices/SubScopusJournalPaperWriting/ScopusPaperBenefits'
import ScopusPaperDrafting from './LeadingResearchServices/SubScopusJournalPaperWriting/ScopusPaperDrafting'

//ScipaperWriting
import SCIWritingGuide from './LeadingResearchServices/SubSCIPaperWriting/SCIWritingGuide'
import TrendingEngineeringTopicsForScopus from './LeadingResearchServices/SubSCIPaperWriting/TrendingEngineeringTopicsForScopus'
import NoveltyInEngineering from './LeadingResearchServices/SubSCIPaperWriting/NoveltyInEngineering'
import SCIvsScopus from './LeadingResearchServices/SubSCIPaperWriting/SCIvsScopu'
import SCIBenefits from './LeadingResearchServices/SubSCIPaperWriting/SCIBenefit'
import SCIJournalSelection from './LeadingResearchServices/SubSCIPaperWriting/SCIJournalSelection'

//kerala 
import UniversityOfKerala from './kerala/UniversityOfKerala'
import AmritaAmritapuri from './kerala/AmritaAmritapuri'
import AmritaKochi from './kerala/AmritaKochi'
import KtuThiruvananthapuram from './kerala/KtuThiruvananthapuram'
import ChinmayaVishwaVidypeeth from './kerala/ChinmayaVishwaVidypeeth'
import CusatKochi from './kerala/CusatKochi'
import IitPalakkad from './kerala/IitPalakkad'
import KannurUniversity from './kerala/KannurUniversity'
import MahatmaGandhiUniversity from './kerala/MahatmaGandhiUniversity'
import NitCalicut from './kerala/NitCalicut'
import UnivCalicut from './kerala/UnivCalicut'
import CentralUniversityKerala from './kerala/CentralUniversityKerala'
import DigitalUniversityKerala from './kerala/DigitalUniversityKerala'
import CvvErnakulam from './kerala/CvvErnakulam'
//telangana
import UniversityOfHyderabad from './Telangana/UniversityOfHyderabad'
import IIITHyderabad from './Telangana/IIITHyderabad'
import IITHyderabad from "./Telangana/IITHyderabad"
import KakatiyaUniversity from './Telangana/KakatiyaUniversity'
import JNTHyderabad from './Telangana/JNTHyderabad'
import NITWarangal from './Telangana/NITWarangal'
import IFHEHyderabad from './Telangana/IFHEHyderabad'
import MGUNalgonda from './Telangana/MGUNalgonda'
import SatavahanaUniversity from './Telangana/SatavahanaUniversity'
import PalamuruUniversity from './Telangana/PalamuruUniversity'
import TelanganaUniversity from './Telangana/TelanganaUniversity'
import AnuragUniversity from './Telangana/AnuragUniversity'
import BRAOU from './Telangana/BRAOU'
import ChaitanyaUniversity from './Telangana/ChaitanyaUniversity'
import OsmaniaUniversity from './Telangana/OsmaniaUniversity'
import RGUKTBasar from './Telangana/RGUKTBasar'
import BITSHyderabad from './Telangana/BITSHyderabad'
import MallaReddyUniversity from './Telangana/MallaReddyUniversity'
import SRUniversity from './Telangana/SRUniversity'
import AuroraHERAHyderabad from './Telangana/AuroraHERAHyderabad'
import TelanganaMahilaViswavidyalayam from './Telangana/TelanganaMahilaViswavidyalayam'
import WoxsenUniversity from './Telangana/WoxsenUniversity'
import MahindraUniversity from "./Telangana/MahindraUniversity"
//andhra
import AdikaviNannaya from './Andhra/AdikaviNannaya'
import GITAMVisakhapatnam from './Andhra/GITAMVisakhapatnam'
import IIITSriCity from "./Andhra/IIITSriCity"
import IITTirupati from "./Andhra/IITTirupati"
import JNTUKakinada from './Andhra/JNTUKakinada'
import JNTUAAnantapur from './Andhra/JNTUAAnantapur'
import KLEFPhDAdmission from './Andhra/KLEFUniversity'
import KrishnaUniversity from './Andhra/KrishnaUniversity'
import RGUKTNuzvid from './Andhra/RGUKTNuzvid'
import SriKrishnadevarayaUniversity from './Andhra/SriKrishnadevarayaUniversity'
import SRMUniversityGuntur from './Andhra/SRMUniversityGuntur'
import CentralUniversityAP from './Andhra/CentralUniversityAP'
import CentralTribalUniversityAP from './Andhra/CentralTribalUniversityAP'
import NITAndhraPradesh from './Andhra/NITAndhraPradesh'
import SSSIHLDoctoral from './Andhra/SSSIHLDoctoral'
import SiddharthaPhD from './Andhra/SiddharthaPhD'
import VignanUniversityPhD from './Andhra/VignanUniversity'
import MohanBabuUniversityPhD from './Andhra/MohanBabuUniversity'
import BestInnovationUniversityPhD from './Andhra/BestInnovationUniversity'
import SaveethaAmaravatiUniversityPhD from './Andhra/SaveethaAmaravatiUniversity'
//cs
import StaticWebApplication from './CS/WebApp/StaticWebAppDev'
import DynamicWebApplications from './CS/WebApp/DynamicWebAppDev'
import MobileApp from './CS/WebApp/MobileAppDev'
import AnimationsProject from './CS/WebApp/Animation'
import AIProject from './CS/Ai/Ai'
import DataScience from './CS/Data/DataScience'
import BigData from './CS/BigData/BigData'
import Blockchain from './CS/Blockchain/BlockChain'
import Cybersecurity from './CS/Cybersecurity/Cybersecurity'
import DevOps from './CS/DevOps/DevOps'
import Networking from './CS/Networking/Networking'
import ImageProcessing from './CS/Processing/Ipp'
import NLP from './CS/Processing/Nlp'
import CloudComputing from './CS/Cloud/Cloud'

 //ECE
import BiomedicalElectronicsProjectDevelopmentCenter from './ECE/BiomedicalElectronics'
       //sub
       import AIBiomedicalDiagnosticsProject from './ECE/BiomedicalElectronics/AIBiomedicalDiagnostics'
       import BiomedicalSignalAcquisitionProject from './ECE/BiomedicalElectronics/BiomedicalSignalAcquisition'
       import BrainComputerInterfaceProject from './ECE/BiomedicalElectronics/BrainComputerInterface'
       import IoTEnabledHealthcareDevicesProject from './ECE/BiomedicalElectronics/IoTenabledHealthcare'
       import ImplantableMedicalElectronicsProject from './ECE/BiomedicalElectronics/implantableMedicalElectronics'
       import WearableBiomedicalDevicesProject from './ECE/BiomedicalElectronics/WearableBiomedicalDevices'

import CommunicationSystemsProjectDevelopmentCenter from './ECE/CommunicationSystem'
        //sub
        import ECE5G6GWirelessCommunication from './ECE/Communication/5Gand6GWireless'
        import ECEErrorControlCoding from './ECE/Communication/ErrorControlCoding'
        import ECEMIMOMassiveMIMOAntennaTechniques from './ECE/Communication/MIMOAndMassiveMIMOAntenna'
        import ECEOpticalFiberCommunication from './ECE/Communication/OpticalFiberCommunication'
        import ECESoftwareDefinedRadio from './ECE/Communication/SoftwareDefinedRadio'
        import ECECognitiveRadioNetworks from './ECE/Communication/CognitiveRadioNetworks'

import ControlSystemsAndRoboticsProjectDevelopmentCenter from './ECE/ControlSysAndRobotics'
        //sub
        import ECEControlCyberPhysicalSystems from './ECE/ControlSystemsAndRobotics/ControlinCyberPhysical'
        import ECERoboticVisionSensorFusion from './ECE/ControlSystemsAndRobotics/RoboticVisionSensor'
        import ECEAdaptiveNonlinearControlSystems from './ECE/ControlSystemsAndRobotics/AdaptiveandNonlinearControl'  
        import ECEAIPoweredRoboticControlSystems from './ECE/ControlSystemsAndRobotics/AIPoweredRoboticControl'
        import ECEAutonomousRobotNavigationPathPlanning from './ECE/ControlSystemsAndRobotics/AutonomousRobotNavigation'
        import ECESwarmRoboticsMultiAgentSystems from './ECE/ControlSystemsAndRobotics/SwarmRoboticsandMulti-Agent'

import CryptographyAndSecurityProjectDevelopmentCenter from './ECE/CryptographyAndSecurity'
        //sub
        import BiometricSecuritySystems from './ECE/CryptographyAndSecurity/BiometricSecuritySystems'  
        import BlockchainSecureCommunication from './ECE/CryptographyAndSecurity/BlockchainSecureCommunication'
        import CryptographicAlgorithmsEmbedded from './ECE/CryptographyAndSecurity/CryptographicAlgorithmsforEmbeddedDevices'
        import SideChannelAttackResistance from './ECE/CryptographyAndSecurity/SideChannelAttackResistance'
        import HardwareSecurityTrustedComputing from './ECE/CryptographyAndSecurity/HardwareSecurityandTrustedComputing'
        import PostQuantumCryptography from './ECE/CryptographyAndSecurity/PostQuantumCryptographyinElectronics'

import EmbeddedSystemsProjectDevelopmentCenter from './ECE/Embedded'
        //sub
        import ECEARMRISCVSystem from './ECE/Embedded/ARMAndRISCVBasedSys'
        import ECEEmbeddedSystemSecurityCryptography from './ECE/Embedded/EmbeddedSysSecurityandCrypto'
        import ECEEnergyEfficientEmbedded from './ECE/Embedded/EnergyEfficientEmbedded'
        import ECEIoTEnabledEmbeddedDevices from './ECE/Embedded/IoTEnabledEmbedded'
        import ECEMachineLearningEmbeddedPlatforms from './ECE/Embedded/MachineLearninginEmbedded'
        import ECERTOSinEmbeddedApplications from './ECE/Embedded/RTOSinEmbedded'

import IoTProjectDevelopmentCenter from './ECE/IoT'
        //sub
        import ECEEdgeFogComputingIoT from './ECE/IoT/EdgeandFogComputing'
        import ECEIndustrialIoTIndustry4 from './ECE/IoT/IndustrialIoT(IIoT)forIndustry4'
        import ECEIoTPrecisionAgriculture from './ECE/IoT/IoTbasedPrecisionAgriculture'
        import ECEIoTHealthcareMonitoring from './ECE/IoT/IoTinHealthcareMonitoring'
        import ECESecureIoTArchitectures from './ECE/IoT/SecureIoTArch'
        import ECEIoTbasedSmartHome from "./ECE/IoT/IoTbasedSmartHome" 

import SignalProcessingProjectDevelopmentCenter from './ECE/SignalProcessing'
        //sub
        import ECEAdaptiveFilteringApplications from './ECE/SignalProcessing/AdaptiveFilteringApp'  
        import ECEAIDrivenSignalEnhancement from './ECE/SignalProcessing/AIdrivenSignal'
        import ECEBiomedicalSignalProcessing from './ECE/SignalProcessing/BiomedicalSignal'
        import ECECompressiveSensingSignalProcessing from './ECE/SignalProcessing/CompressiveSensingSignal'
        import ECEDigitalImageVideoSignalProcessing from './ECE/SignalProcessing/DigitalImage'
        import ECESpeechAudioSignalProcessing from './ECE/SignalProcessing/SpeechAudioSignal'

import VLSIDesignAndEmbeddedSystemsProjectDevelopmentCenter from './ECE/VLSIandEmbedded'
      //sub
      import ECELowPowerVLSI from './ECE/VLSIandEmbedded/LowPowerVLSI'
      import ECEFPGASystemPrototyping from './ECE/VLSIandEmbedded/FPGASystem'
      import ECEEmbeddedVLSISignalProcessing from './ECE/VLSIandEmbedded/EmbeddedVLSISignalProcessing'
      import ECEHardwareSoftwareCoDesign from './ECE/VLSIandEmbedded/HardwareSoftwareCoDesign'
      import ECENanoelectronicsEmergingDevices from './ECE/VLSIandEmbedded/NanoelectronicsAndEmergingDevices'
      import ECEVLSIAI from './ECE/VLSIandEmbedded/VLSIforAI'

import WirelessSensorNetworksProjectDevelopmentCenter from './ECE/WirelessSensorNetworks'
      //sub
        import ECEEnergyEfficientRoutingWSN from './ECE/WirelessSensorNetworks/EnergyEfficientRouting'
        import ECESecureDataTransmissionWSN from './ECE/WirelessSensorNetworks/SecureDataTransmission'
        import ECEIoTWSN from './ECE/WirelessSensorNetworks/IoTIntegration'
        import ECEWSNEnvironmentalDisasterMonitoring from './ECE/WirelessSensorNetworks/EnvironmentalAndDisasterMonitoring'
        import ECEUnderwaterWirelessSensorNetworks from './ECE/WirelessSensorNetworks/UnderwaterWSN'
        import ECEAiBasedWSNOptimizationProject from './ECE/WirelessSensorNetworks/AIbasedWSNOptimization'

import SatelliteSpaceCommunicationProjectDevelopmentCenter from './ECE/SatelliteSpaceCommunication'
        //sub
        import AntennaSystemsSpaceApplications from './ECE/SatelliteandSpaceCommunication/AntennaSystemSpaceApp'
        import CubeSatNanosatellite from './ECE/SatelliteandSpaceCommunication/CubeSatNanosatellite'
        import DeepSpaceCommunication from './ECE/SatelliteandSpaceCommunication/DeepSpaceCommunication'
        import GnssProject from './ECE/SatelliteandSpaceCommunication/GlobalNavigationSatelliteSystems'
        import SatelliteCommunication5G6G from './ECE/SatelliteandSpaceCommunication/SatelliteCommunication5G6GNetworks'
        import SatelliteIoTApplications from './ECE/SatelliteandSpaceCommunication/SatelliteIoTApp' 

import AntennasProjectDevelopmentCenter from "./ECE/Antennas"
      //sub
      import AntennasIoTWearableDevices from './ECE/Antennas/IoTAndWearableDevices'
      import MimoAntennaSystemsProject from './ECE/Antennas/MIMOAntennaSystems'
      import AntennaMiniaturizationProject from './ECE/Antennas/MiniaturizationTech'
      import ReconfigurableAntennaDesignProject from './ECE/Antennas/ReconfigurableAntenna'
      import SatelliteSpaceAntennaTechProject from './ECE/Antennas/SatelliteAndSpaceAntenna'
      import SmartAntennas5G6G from './ECE/Antennas/SmartAntennas5G6G'

//EEE
import EEEPowerSystemsProjectDevelopmentCenter from './EEE/PowerSystem'
        //sub
        import EEELoadFlowAnalysis from './EEE/PowerSystem/LoadFlowAnalysis'

import EEEElectricalMachinesProjectDevelopmentCenter from './EEE/ElectricalMachines'
        //sub

import EEEPowerElectronicsProjectDevelopmentCenter from './EEE/PowerElectronics'
import EEERenewableEnergySystemsProjectDevelopmentCenter from './EEE/RenewableEnergySystems'
        //sub
        import EEESolarPhotovoltaicSystems from './EEE/RenewableEnergySystems/SolarPhotovoltaicSystems'
        import EEEWindEnergyConversionSystems from './EEE/RenewableEnergySystems/WindEnergyConversion'

import EEEEmbeddedSystemsProjectDevelopmentCenter from './EEE/EmbeddedSystems'

import EEEHighVoltageEngineeringProjectDevelopmentCenter from './EEE/HighVoltageEngineering'
import EEESmartGridMicrogridProjectDevelopmentCenter from './EEE/SmartAndMicrogrid'
import EEEControlSystemsProjectDevelopmentCenter from './EEE/ControlSystems'
import EEEIndustrialAutomationProjectDevelopmentCenter from './EEE/IndustrialAutomation/IndustrialAutomation'
import EEEElectricVehiclesProjectDevelopmentCenter from './EEE/ElectricVehicles/ElectricVehicles'
import EEEArtificialIntelligenceProjectDevelopmentCenter from './EEE/AIEEE/AIEEE'
        //sub
        import EEEAiPowerLoadForecasting from './EEE/AIEEE/PowerLoadForecasting'
        import EEEMachineLearningforfault from './EEE/AIEEE/MachineLearningforFault' 
        import EEEDeepLearninginRenewable from './EEE/AIEEE/DeepLearninginRenewable'
        import EEEAIinsmartGrids from './EEE/AIEEE/AIinSmartGrids'
        import EEENeuralNetworksforMotor from './EEE/AIEEE/NeuralNetworksforMotor' 
        import EEEAIbasedEnergyOptimization from './EEE/AIEEE/AI-basedEnergyOptimization'

import EEEIoTProjectDevelopmentCenter from './EEE/IoTEEE/IoTEEE'
        //sub
        import EEEIoTforSmartGrids from './EEE/IoTEEE/IoTforSmartGrids'
        import EEEIoTRenewableEnergy from './EEE/IoTEEE/IoTinRenewableEnergy'
        import EEEIoTPredictiveMaintenance from './EEE/IoTEEE/IoTforPredictiveMaintenance'
        import EEESmartHomeAutomation from './EEE/IoTEEE/SmartHomeAutomation'
        import EEEIoTEnabledSmartMeters from './EEE/IoTEEE/IoTenabledSmartMeters'
        import EEEIoTBasedHealthMonitoring from './EEE/IoTEEE/IoTbasedHealthMonitoring'

import EEEEnergyManagementSystemsProjectDevelopmentCenter from './EEE/EnergyManagementSystems'
        //sub 
        import EEESmartBuildingEnergy from './EEE/EnergyManagementSystems/SmartBuildingEnergy'
        import EEEDemandSideManagement from './EEE/EnergyManagementSystems/DemandSideManagement' 
        import EEEEnergyEfficiencyinIndustries from './EEE/EnergyManagementSystems/EnergyEfficiencyinIndustries'
        import EEERenewableEnergyScheduling from './EEE/EnergyManagementSystems/RenewableEnergyScheduling'
        import EEEHomeEnergyManagement from './EEE/EnergyManagementSystems/HomeEnergyManagement'
        import EEEDataAnalyticsforEnergySavings from './EEE/EnergyManagementSystems/DataAnalyticsforEnergySavings'

import ConstructionProjectManagement from './Civil/ConstructionProjectManagement'
        //sub
        import SmartConstructionTechniques from './Civil/ConstructionProjectManagement/SmartConstructionTechniques'
        import CostOptimizationinProjects from './Civil/ConstructionProjectManagement/CostOptimizationinProjects'
        import ProjectSchedulingPlanning from './Civil/ConstructionProjectManagement/ProjectSchedulingPlanning'

import EnvironmentalEngineering from './Civil/EnvironmentalEngineering'
        //sub
        import WaterTreatmentRecycling from './Civil/EnvironmentalEngineering/WaterTreatmentRecycling'
        import AirPollutionModeling from './Civil/EnvironmentalEngineering/AirPollutionModeling'
        import WasteManagementSystem from './Civil/EnvironmentalEngineering/WasteManagementSystems'

import GeotechnicalEngineering from './Civil/GeotechnicalEngineering'
        //sub
        import SoilStabilizationTechniques from './Civil/GeotechnicalEngineering/SoilStabilizationTechniques'
        import FoundationDesign from './Civil/GeotechnicalEngineering/FoundationDesign'
        import SlopeStabilityAnalysis from './Civil/GeotechnicalEngineering/SlopeStabilityAnalysis'


import RemoteSensingGIS from './Civil/RemoteSensingGIS'
        //sub
        import GISbasedUrbanPlanning from './Civil/RemoteSensingGIS/GISbasedUrbanPlanning'
        import RemoteSensingforDisaster from './Civil/RemoteSensingGIS/RemoteSensingforDisaster'

import StructuralEngineering from './Civil/StructuralEngineering'    
        //sub 
        import EarthquakeResistantStructures from './Civil/StructuralEngineering/EarthquakeResistantStructures'
        import SteelRCCDesignOptimization from './Civil/StructuralEngineering/SteelRCCDesignOptimization'
        import TallBuildingAnalysis from './Civil/StructuralEngineering/TallBuildingAnalysis'
        import BridgeDesignMonitoring from './Civil/StructuralEngineering/BridgeDesignMonitoring'

import TransportationEngineering from './Civil/TransportationEngineering'
        //sub
        import SmartTrafficManagement from './Civil/TransportationEngineering/SmartTrafficManagement'
        import PavementAnalysisDesign from './Civil/TransportationEngineering/PavementAnalysisDesign'
        import HighwaySafetyOptimization from './Civil/TransportationEngineering/HighwaySafetyOptimization'

import METhermalEngineeringHeat from './Mechanical/ThermalEngineeringHeatTransfer'
        //sub
        import HeatExchangerDesign  from './Mechanical/ThermalEngineeringHeatTransfer/HeatExchangerDesign'
        import SolarThermalSystems from './Mechanical/ThermalEngineeringHeatTransfer/SolarThermalSystems'
        import WasteHeatRecovery from './Mechanical/ThermalEngineeringHeatTransfer/WasteHeatRecovery'
        import HVACSystemAnalysis from './Mechanical/ThermalEngineeringHeatTransfer/HVACSystemAnalysis'
        import EnergyEfficiencyinThermal from './Mechanical/ThermalEngineeringHeatTransfer/EnergyEfficiencyinThermal'

import FluidMechanicsFluidDynamics from './Mechanical/FluidMechanicsFluidDynamics'
        //sub 
        import ComputationalFluidDynamics from './Mechanical/FluidMechanicsFluidDynamics/ComputationalFluidDynamics'
        import TurbomachineryDesign from './Mechanical/FluidMechanicsFluidDynamics/TurbomachineryDesign'
        import AerodynamicsWindTunnel from './Mechanical/FluidMechanicsFluidDynamics/AerodynamicsWindTunnel'
        import PumpValveOptimization from './Mechanical/FluidMechanicsFluidDynamics/PumpValveOptimization'
        import MicrofluidicsLab from './Mechanical/FluidMechanicsFluidDynamics/MicrofluidicsLab'

import ManufacturingProductionEngineering from './Mechanical/ManufacturingProductionEngineering'
        //sub 
        import CNCMachiningOptimization from './Mechanical/ManufacturingProductionEngineering/CNCMachiningOptimization'
        import AdditiveManufacturing from './Mechanical/ManufacturingProductionEngineering/AdditiveManufacturing'
        import IndustriaAutomationRobotics from './Mechanical/ManufacturingProductionEngineering/IndustriaAutomationRobotics'
        import SmartManufacturingSystems from './Mechanical/ManufacturingProductionEngineering/SmartManufacturingSystems'
        import ToolDesignProcess from './Mechanical/ManufacturingProductionEngineering/ToolDesignProcess'

import DesignEngineerCAD from './Mechanical/DesignEngineerCAD'
        //sub
        import FiniteElementAnalysis from './Mechanical/DesignEngineerCAD/FiniteElementAnalysis'
        import CADModelingSimulation from './Mechanical/DesignEngineerCAD/CADModelingSimulation'
        import MechanismDesign from './Mechanical/DesignEngineerCAD/MechanismDesign'
        import TopologyOptimization from './Mechanical/DesignEngineerCAD/TopologyOptimization'
        import ProductLifecycleManagement from './Mechanical/DesignEngineerCAD/ProductLifecycleManagement'

import RoboticsMechatronics from './Mechanical/RoboticsMechatronics'
        import IndustrialRoboticsSystems from './Mechanical/RoboticsMechatronics/IndustrialRoboticsSystems'
        import IoTbasedMechatronics from './Mechanical/RoboticsMechatronics/IoTbasedMechatronics'
        import AutonomousVehiclesDrones from './Mechanical/RoboticsMechatronics/AutonomousVehiclesDrones'
        import RoboticManipulatorControl from './Mechanical/RoboticsMechatronics/RoboticManipulatorControl'
        import EmbeddedControlSystems from './Mechanical/RoboticsMechatronics/EmbeddedControlSystems'
 
import RenewableEnergyThermal from './Mechanical/RenewableEnergyThermal'
        //sub
        import SolarPVThermal from './Mechanical/RenewableEnergyThermal/SolarPVThermal'
        import WindTurbineDesign from './Mechanical/RenewableEnergyThermal/WindTurbineDesign'
        import BiomassBiofuelEnergy from './Mechanical/RenewableEnergyThermal/BiomassBiofuelEnergy'
        import EnergyStorageRecovery from './Mechanical/RenewableEnergyThermal/EnergyStorageRecovery'
        import SmartGridIntegration from './Mechanical/RenewableEnergyThermal/SmartGridIntegration'

import AutomotiveVehicleEngineering from './Mechanical/AutomotiveVehicleEngineering'
        //sub
        import ElectricVehicleDesign from './Mechanical/AutomotiveVehicleEngineering/ElectricVehicleDesign'
        import HybridVehiclePowertrains from './Mechanical/AutomotiveVehicleEngineering/HybridVehiclePowertrains'
        import VehicleDynamicsStability from './Mechanical/AutomotiveVehicleEngineering/VehicleDynamicsStability'
        import EnginePerformanceOptimization from './Mechanical/AutomotiveVehicleEngineering/EnginePerformanceOptimization'
        import EmissionControlFuelEfficiency from './Mechanical/AutomotiveVehicleEngineering/EmissionControlFuelEfficiency'

import MechatronicsControlSystems from './Mechanical/MechatronicsControlSystems'
        //sub
        import PIDAdvancedControl from './Mechanical/MechatronicsControlSystems/PIDAdvancedControl'
        import AutomationManufacturing from './Mechanical/MechatronicsControlSystems/AutomationManufacturing'
        import PLCSystems from './Mechanical/MechatronicsControlSystems/PLCSystems'
        import SensorIntegration from './Mechanical/MechatronicsControlSystems/SensorIntegration'
        import SmartActuatorSystems from './Mechanical/MechatronicsControlSystems/SmartActuatorSystems'

import MechanicalProperties from './Mechanical/MechanicalProperties'
        //sub
        import CompositeMaterialsAnalysis from './Mechanical/MechanicalProperties/CompositeMaterialsAnalysis'
        import AdvancedAlloyDevelopment from './Mechanical/MechanicalProperties/AdvancedAlloyDevelopment'
        import TribologyWearAnalysis from './Mechanical/MechanicalProperties/TribologyWearAnalysis'
        import NanomaterialsMechanical from './Mechanical/MechanicalProperties/NanomaterialsMechanical'
        import FatigueFractureAnalysis from './Mechanical/MechanicalProperties/FatigueFractureAnalysis'

import IndustrialProductionOptimization from './Mechanical/IndustrialProductionOptimization'
        import LeanManufacturing from './Mechanical/IndustrialProductionOptimization/LeanManufacturing'
        import SupplyChainProcess from './Mechanical/IndustrialProductionOptimization/SupplyChainProcess'
        import IndustrialSafetyErgonomics from './Mechanical/IndustrialProductionOptimization/IndustrialSafetyErgonomics'
        import SmartFactorySystems from './Mechanical/IndustrialProductionOptimization/SmartFactorySystems'
        import CostTimeOptimization from './Mechanical/IndustrialProductionOptimization/CostTimeOptimization'

// import Header from './Header'
import Design from './pages/Design';
import Footer from './Footer';
import Departments from './pages/DepartmentList';
import SCIReviewGuide from './LeadingResearchServices/SubReviewAriticleWriting/SCIReviewGuide';
import ScopusReviewGuide from './LeadingResearchServices/SubReviewAriticleWriting/ScopusReviewGuide';
import SystematicReviewGuide from './LeadingResearchServices/SubReviewAriticleWriting/SystematicReviewGuide';
import EEEDistributedGenerationIntegrationProjectDevelopmentCenter from './EEE/PowerSystem/DistributedGenerationIntegration';
import EEEFACTSPowerSystemsProjectDevelopmentCenter from './EEE/PowerSystem/FactsDevicesPowerSystems';
import EEEPowerSystemProtectionRelaysProjectDevelopmentCenter from './EEE/PowerSystem/PowerSystemProtectionRelays';
import EEEPowerSystemStabilityControlProjectDevelopmentCenter from './EEE/PowerSystem/PowerSystemStabilityControl';
import EEEAdvancedDrivesControllersProjectDevelopmentCenter from './EEE/ElectricalMachines/AdvancedDrivesControllers';
import EEEConditionMonitoringMachinesProjectDevelopmentCenter from './EEE/ElectricalMachines/ConditionMonitoringMachines';
import EEEEnergyEfficientMotorsProjectDevelopmentCenter from './EEE/ElectricalMachines/EnergyEfficientMotors';
import EEEFaultDiagnosisMotorsGeneratorsProjectDevelopmentCenter from './EEE/ElectricalMachines/FaultDiagnosisMotors';
import EEELossMinimizationTechniquesProjectDevelopmentCenter from './EEE/ElectricalMachines/LossMinimizationTechniques';
import EEESpecialElectricalMachinesProjectDevelopmentCenter from './EEE/ElectricalMachines/SpecialElectricalMachines';
import EEEDcDcConvertersApplicationsProjectDevelopmentCenter from './EEE/PowerElectronics/DCConvertersApp';
import EEEMultilevelInvertersProjectDevelopmentCenter from './EEE/PowerElectronics/MultilevelInverters';
import EEEPowerElectronicControllersRenewableEnergyProjectDevelopmentCenter from './EEE/PowerElectronics/PowerElectronicControllers';
import EEEPowerFactorCorrectionCircuitsProjectDevelopmentCenter from './EEE/PowerElectronics/PowerFactorCorrection';
import EEESolidStateDrivesProjectDevelopmentCenter from './EEE/PowerElectronics/SolidStateDrives';
import EEEWirelessPowerTransferCircuitsProjectDevelopmentCenter from './EEE/PowerElectronics/WirelessPowerTransfer';
import EEEBiomassFuelCellTechnologiesProjectDevelopmentCenter from './EEE/RenewableEnergySystems/BiomassFuelCell';
import EEEEnergyStorageRenewableIntegrationProjectDevelopmentCenter from './EEE/RenewableEnergySystems/EnergyStorageRenewable';
import EEEHybridRenewableEnergySystemsProjectDevelopmentCenter from './EEE/RenewableEnergySystems/HybridRenewableEnergy';
import EEEGridIntegrationOfRenewablesProjectDevelopmentCenter from './EEE/RenewableEnergySystems/GridIntegrationRenewables';
import EEEArmPicAvrMicrocontrollerProjectDevelopmentCenter from './EEE/EmbeddedSystems/ARM_PIC_AVRMicrocontroller';
import EEEAutomotiveEmbeddedSystemsProjectDevelopmentCenter from './EEE/EmbeddedSystems/AutomotiveEmbeddedSystems';
import EEEEmbeddedRoboticsProjectDevelopmentCenter from './EEE/EmbeddedSystems/EmbeddedSystemsRobotics';
import EEEFpgaControlApplicationsProjectDevelopmentCenter from './EEE/EmbeddedSystems/FPGABasedControl';
import EEEIoTEmbeddedHardwareDesignProjectDevelopmentCenter from './EEE/EmbeddedSystems/IoTEmbedded';
import EEERtosProjectDevelopmentCenter from './EEE/EmbeddedSystems/RealTimeOperatingSystems';
import EEEGISProjectDevelopmentCenter from './EEE/HighVoltageEngineering/GasInsulatedSubstations';
import EEEHighVoltageTestingEquipmentProjectDevelopmentCenter from './EEE/HighVoltageEngineering/HighVoltageTestingEquipment';
import EEEHVDCTransmissionSystemsProjectDevelopmentCenter from './EEE/HighVoltageEngineering/HVDCTransmissionSystems';
import EEEInsulationMaterialsTechniquesProjectDevelopmentCenter from './EEE/HighVoltageEngineering/InsulationMaterialsTechniques';
import EEEOvervoltageSurgeProtectionProjectDevelopmentCenter from './EEE/HighVoltageEngineering/OvervoltageSurgeProtection';
import EEEPartialDischargeAnalysisProjectDevelopmentCenter from './EEE/HighVoltageEngineering/PartialDischargeAnalysis';
import EEECybersecuritySmartGridsProjectDevelopmentCenter from './EEE/SmartAndMicrogrid/CybersecuritySmartGrids';
import EEEEVChargingMicrogridsProjectDevelopmentCenter from './EEE/SmartAndMicrogrid/Electric VehicleChargingMicrogrids';
import EEEIntegrationDistributedGenerationProjectDevelopmentCenter from './EEE/SmartAndMicrogrid/IntegrationDistributedGeneration';
import EEEMicrogridEnergyManagementProjectDevelopmentCenter from './EEE/SmartAndMicrogrid/MicrogridEnergyManagement';
import EEERealtimeMonitoringSCADAProjectDevelopmentCenter from './EEE/SmartAndMicrogrid/RealTimeMonitoringSCADA';
import EEESmartMeteringDemandResponseProjectDevelopmentCenter from './EEE/SmartAndMicrogrid/SmartMeteringDemand';
import EEEAdaptiveRobustControlProjectDevelopmentCenter from './EEE/ControlSystems/AdaptiveRobustControl';
import EEEIntelligentControlAiMlProjectDevelopmentCenter from './EEE/ControlSystems/IntelligentControlAIandML';
import EEENonlinearControlSystemsProjectDevelopmentCenter from './EEE/ControlSystems/NonlinearControlSystems';
import EEEOptimalControlSystemsProjectDevelopmentCenter from './EEE/ControlSystems/OptimalControlSystems';
import EEEPidAdvancedControllersProjectDevelopmentCenter from './EEE/ControlSystems/PIDandAdvancedControllers';
import EEEProcessControlIndustriesProjectDevelopmentCenter from './EEE/ControlSystems/ProcessControlIndustries';
import EEEDcsProjectDevelopmentCenter from './EEE/IndustrialAutomation/DistributedControlSystems';
import EEEHmiProjectDevelopmentCenter from './EEE/IndustrialAutomation/HumanMachineInterface';
import EEEIndustrialIiotApplicationsProjectDevelopmentCenter from './EEE/IndustrialAutomation/IndustrialIoTApplications';
import EEEPlcScadaSystemsProjectDevelopmentCenter from './EEE/IndustrialAutomation/PLCAndSCADASystems';
import EEEPredictiveMaintenanceProjectDevelopmentCenter from './EEE/IndustrialAutomation/PredictiveMaintenanceSystems';
import EEERpaProjectDevelopmentCenter from './EEE/IndustrialAutomation/RoboticProcessAutomation';
import EEEBmsProjectDevelopmentCenter from './EEE/ElectricVehicles/BatteryManagementSystems';
import EEEEvChargingInfrastructureProjectDevelopmentCenter from './EEE/ElectricVehicles/EVChargingInfrastructure';
import EeeEvMotorDriveSystemsProjectDevelopmentCenter from './EEE/ElectricVehicles/EVMotorDriveSystems';
import EeeHevProjectDevelopmentCenter from './EEE/ElectricVehicles/HybridElectricVehicles';
import EEEPowerElectronicsEvsProjectDevelopmentCenter from './EEE/ElectricVehicles/PowerElectronicsforEVs';
import EEERegenerativeBrakingSystemsProjectDevelopmentCenter from './EEE/ElectricVehicles/RegenerativeBrakingSystems';

import Design2 from "./Design2"

import ServicesCategories from "./pages/ServiceCategories"

function MainPage() {
  return(
   <>
    {/* <Header/> */}
      <Routes>
     
        <Route path="/" element={<Home />} /> 
        <Route path="/d" element={<Design />} /> 
        {/* <Route path="/fact" element={<Fact />} />  */}
        <Route path="/college" element={<College />} />
        <Route path="/service" element={<Service />} />
        <Route path="/phd-admission-in-anna-university-chennai" element={<Subheading />} />
        <Route path="/annamalai-university" element={<Annamalaiuniversity />} />
        <Route path="/bharathiar-university" element={<Bharathiaruniversity />} />
        <Route path="/vit-university" element={<Vituniversity />} />
        <Route path="/mgr-institute" element={<Mgr />} />
        <Route path="/sathyabama-university" element={<Sathyabama />} />
        <Route path="/saveetha-university" element={<Saveetha />} />
        <Route path="/srm-university" element={<Srm />} />
        <Route path="/vistas" element={<Vels />} />
        <Route path="/biher" element={<Bharath />} />
        <Route path="/amrita" element={<Amrita />} />
        <Route path="/hits" element={<Hindustan  />} />
        <Route path="/alagappa-university" element={<Alagappa  />} />
        <Route path="/manonmaniam-university" element={<Manonmaniam />} />
        <Route path="/periyar-university" element={<Periyar />} />
        <Route path="/madurai-kamaraj-university" element={<MaduraiKamaraj />} />
        <Route path="/bharathidasan-university" element={<Bharathidasan />} />
        <Route path="/sastra-university" element={<Sastra />} />
        <Route path="/sri-ramakrishna-engineering" element={<SriRamakrishna />} />
        <Route path="/sns" element={<Sns />} />
        <Route path="/coimbatore-institute" element={<Cit />} />
        <Route path="/psg" element={<Psg />} />
        <Route path="/vinayaka-missions" element={<VinayakaMission />} />
        <Route path="/prist-university" element={<PonnaiyahRamajayam />} />
        <Route path="/periyar-maniammai-university" element={<PeriyarManiammai />} />
        <Route path="/st-peter’s-institute" element={<StPeters />} />
        <Route path="/sri-chandrasekharendra-saraswathi" element={<Srichandrasekharendra />} />
        <Route path="/karpagam-academy" element={<Karpagam />} />
        <Route path="/karunya" element={<Karunya />} />
        <Route path="/vel-tech-rangarajan" element={<VelTech />} />
        <Route path="/kalasalingam-academy" element={<Kalasalingam />} />
        {/* subsiderbar */}
        <Route path="/refer-guide" element={<ReferGuide />} />
        <Route path="/phd-topic-selection" element={<TopicSelection />} />
        <Route path="/phd-application" element={<PhDApplication />} />
        <Route path="/phd-proposal" element={<Proposal />} />
        <Route path="/university-selection" element={<UniversitySelection />} />

         {/* services */}
        <Route path="/service/phd-admission-guidance" element={<PhDAdmissionGuidance />} />
        <Route path="/service/research-proposal-writing" element={<Researchproposalwriting />} />
        <Route path="/service/research-paper-writing" element={<Researchpaperwriting />} />
        <Route path="/service/review-paper-writing" element={<Reviewpaperwriting />} />
        <Route path="/service/anna-university-annexture" element={<Annauniversityannexture />} />
        <Route path="/service/elsevier-conference-paper-publication-services" element={<ElsevierConference />} />
        <Route path="/service/ieee-conference-paper-publication-services" element={<IEEEconferencepaper />} />
        <Route path="/service/international-conference-paper-publication-services" element={<Internationalconferencepaper />} />
        <Route path="/service/phd-project-implementation-services-help" element={<Phdprojectimplementation />} />
        <Route path="/service/phd-research-final-viva-preparation-help-services" element={<Phdresearchfinalviva />} />
        <Route path="/service/phd-research-synopsis-writing-services-help" element={<Phdresearchsynopsis />} />
        <Route path="/service/phd-research-thesis-writing-services-help" element={<Phdresearchthesis />} />
        <Route path="/service/research-paper-publication-services-for-phd-students-from-srm-university" element={<Researchpaperforsrm />} />
        <Route path="/service/research-paper-publication-help-and-services" element={<Researchpaperpublication />} />
        <Route path="/service/research-paper-sathyabama" element={<Researchpapersathyabama />} />
        <Route path="/service/science-citation-indexed-sci-paper-publication-services" element={<Sciencecitationindexed />} />
        <Route path="/service/springer-conference-paper-publication-services" element={<Springerconferencepaper />} />
        <Route path="/service/vit-university-paper-publication-services" element={<VITuniversitypaper />} />
        <Route path="/service/web-of-science-paper-publication-services" element={<Webofsciencepaper />} />

        <Route path="/research-proposal-services/how-to-write-research-proposal" element={<EngineeringResearchProposalGuide />} />
        <Route path="/research-proposal-services/trending-research-topics" element={<TrendingResearchTopics />} />
        <Route path="/research-proposal-services/research-proposal-for-funding" element={<ResearchFundingGuide />} />
        <Route path="/research-proposal-services/engineering-research-proposal-guide" element={<ProposalStepGuide />} />
        {/* Leading research Services */} 
        <Route path="/review-article-writing" element={<ReviewArticleWriting />} />
                <Route path="/review-ariticle-writing/engineering-literature-guide" element={<EngineeringLiteratureGuide />} />
                <Route path="/review-ariticle-writing/medical-review-writing" element={<MedicalReviewWriting />} />
                <Route path="/review-ariticle-writing/literature-review-guide" element={<LiteratureReviewGuide />} />
                <Route path="/review-ariticle-writing/sci-review-guide" element={<SCIReviewGuide />} />
                <Route path="/review-ariticle-writing/scopus-review-guide" element={<ScopusReviewGuide />} />
                <Route path="/review-ariticle-writing/systematic-review-guide" element={<SystematicReviewGuide />} />
   
        <Route path="/sci-journal-paper-writing" element={<SCIPaperWriting />} />
                 <Route path="sci-journal-paper-writing/sci-writing-guide" element={<SCIWritingGuide />} />
                 <Route path="sci-journal-paper-writing/trending-engineering-topics-for-scopus" element={<TrendingEngineeringTopicsForScopus />} />
                 <Route path="sci-journal-paper-writing/novelty-in-engineering" element={<NoveltyInEngineering />} />
                 <Route path="sci-journal-paper-writing/sci-vs-scopus" element={<SCIvsScopus />} />
                 <Route path="sci-journal-paper-writing/sci-benefits" element={<SCIBenefits />} />
                 <Route path="sci-journal-paper-writing/sci-journal-selection" element={<SCIJournalSelection />} />
        <Route path="/scopus-journal-paper-writing" element={<ScopusPaperWriting />} />
        <Route path="/ieee-conference-paper-writing" element={<IEEEPaperWriting />} />

    
        {/* main publication service */}
        <Route path="/publication-services" element={<MainPublicationServices />} />
              {/* conference-paper-publication-services */}
              <Route path="/publication-services/conference-paper-publication-services" element={<ConferencePublication />} />
              <Route path="/publication-services/conference-paper-publication-services/ieee-conference-paper-publication" element={<IEEEConference />} />
              <Route path="/publication-services/conference-paper-publication-services/elsevier-conference-paper-support" element={<ElsevierConference1 />} />
              <Route path="/publication-services/conference-paper-publication-services/national-conference-paper-support" element={<NationalConference />} />
              <Route path="/publication-services/conference-paper-publication-services/springer-conference-paper-assistance" element={<SpringerConference />} />
              <Route path="/publication-services/conference-paper-publication-services/fast-track-conference-paper-services" element={<FastTrackConference />} />
              <Route path="/publication-services/conference-paper-publication-services/ieee-review-article-support" element={<IEEEConferenceReview />} />
              
              {/* SCI Journal Publication Services */}
             <Route path="/publication-services/SCIJournal" element={<SCIJournal />} />
             <Route path="/publication-services/sci-journal-publication/SCIJournalSupport" element={<SCIJournalSupport />} />
             <Route path="/publication-services/sci-journal-publication/SCIJournalTargeting" element={<SCIJournalTargeting />} />
             <Route path="/publication-services/sci-journal-publication/SCIPublishingTimelines" element={<SCIPublishingTimelines />} />
             <Route path="/publication-services/sci-journal-publication/EthicalSCIPublication" element={<EthicalSCIPublication />} />
             <Route path="/publication-services/sci-journal-publication/OpenAccessVsSubscription" element={<OpenAccessVsSubscription />} />
             <Route path="/publication-services/sci-journal-publication/PostPublicationVisibility" element={<PostPublicationVisibility />} />

             {/* Scopus Publication Services */}
              <Route path="/publication-services/scopus-journal-publication-services" element={<ScopusJournalPublication />} />
              <Route path="/publication-services/scopus-journal-publication-services/Q1ScopusJournal" element={<Q1ScopusJournal />} />
              <Route path="/publication-services/scopus-journal-publication-services/Q2Scopus" element={<Q2Scopus />} />

              {/* Review Article Publication */}
              <Route path="/publication-services/review-article-publication" element={<ReviewArticlePublication />} />
              <Route path="/publication-services/review-article-publication/systematic-review-article-publication" element={<SystematicReviewArticlePublication />} />
              <Route path="/publication-services/review-article-publication/narrative-review-article-publication" element={<NarrativeReviewArticlePublication />} />
              <Route path="/publication-services/review-article-publication/meta-analysis-review-paper-publication" element={<MetaAnalysisReviewPaperPublication />} />
              <Route path="/publication-services/review-article-publication/scopus-indexed-review-article-publication" element={<ScopusIndexedReviewArticlePublication />} />
              <Route path="/publication-services/review-article-publication/review-article-journal-selection-assistance" element={<ReviewArticleJournalSelectionAssistance />} />
              <Route path="/publication-services/review-article-publication/sci-journal-review-article-publication" element={<SCIJournalReviewArticlePublication />} />
              
              {/* UGCCareJournalPublicationServices */}
              <Route path="/publication-services/ugc-care-journal-publication-services" element={<UGCCareJournalPublicationServices />} />
              <Route path="/publication-services/ugc-care-journal-publication-services/ugc-care-indexed-journal-publication-services" element={<UGCCareIndexedJournalPublicationServices />} />
              <Route path="/publication-services/ugc-care-journal-publication-services/ugc-care-arts-and-humanities-journal-publication-services" element={<UGCCareArtsAndHumanitiesJournalPublicationServices />} />
              <Route path="/publication-services/ugc-care-journal-publication-services/ugc-care-fast-track-journal-publication-services" element={<UGCCareFastTrackJournalPublicationServices />} />
              <Route path="/publication-services/ugc-care-journal-publication-services/ugc-care-open-access-journal-publication-services" element={<UGCCareOpenAccessJournalPublicationServices />} />
              <Route path="/publication-services/ugc-care-journal-publication-services/ugc-care-peer-reviewed-journal-publication-services" element={<UGCCarePeerReviewedJournalPublicationServices />} />
              <Route path="/publication-services/ugc-care-journal-publication-services/ugc-care-science-and-technology-journal-publication-services" element={<UGCCareScienceAndTechnologyJournalPublicationServices />} />

              {/* BookISBNPublicationSupport */}
              <Route path="/publication-services/book-isbn-publication-support" element={<BookISBNPublicationSupport />} />
              <Route path="/publication-services/book-isbn-publication-support/academic-book-isbn-publication-support" element={<AcademicBookISBNPublicationSupport />} />
              <Route path="/publication-services/book-isbn-publication-support/edited-volume-isbn-publication-support" element={<EditedVolumeISBNPublicationSupport />} />
              <Route path="/publication-services/book-isbn-publication-support/isbn-barcode-and-meta-data-publication-support" element={<ISBNBarcodeAndMetadataPublicationSupport />} />
              <Route path="/publication-services/book-isbn-publication-support/print-and-ebook-isbn-publication-support" element={<PrintAndEBookISBNPublicationSupport />} />
              <Route path="/publication-services/book-isbn-publication-support/self-published-book-isbn-publication-support" element={<SelfPublishedBookISBNPublicationSupport />} />

       {/* SubScopusJournalPaperWriting */}
       <Route path="scopus-journal-paper-writing/scopus-services" element={<ScopusPaperServices />} />
       <Route path="scopus-journal-paper-writing/engineering-topics-for-scopus" element={<EngineeringTopicsForScopus />} />
       <Route path="scopus-journal-paper-writing/write-free-scopus-article" element={<WriteFreeScopusArticle />} />
       <Route path="scopus-journal-paper-writing/scopus-journal-vs-conference" element={<ScopusJournalVsConference />} />
       <Route path="scopus-journal-paper-writing/scopus-paper-benefits" element={<ScopusPaperBenefits />} />
       <Route path="scopus-journal-paper-writing/scopus-paper-drafting" element={<ScopusPaperDrafting />} />
       
      {/* kerala university */}
       <Route path="kerala/phd-admission-in-university-of-kerala" element={<UniversityOfKerala />} />
       <Route path="kerala/phd-admission-amrita-vishwa-vidyapeetham-amritapuri-campus" element={<AmritaAmritapuri />} />
       <Route path="kerala/phd-admission-in-amrita-vishwa-vidyapeetham-kochi-campus" element={<AmritaKochi />} />
       <Route path="kerala/phd-admission-at-apj-abdul-kalam-technological-university" element={<KtuThiruvananthapuram />} />
       <Route path="kerala/phd-admission-at-chinmaya-vishwa-vidyapeeth" element={<ChinmayaVishwaVidypeeth />} />
       <Route path="kerala/phd-admission-at-cochin-university-of-science-and-technology" element={<CusatKochi />} />
       <Route path="kerala/phd-admission-at-indian-institute-of-technology" element={<IitPalakkad />} />
       <Route path="kerala/phd-admission-at-kannur-university" element={<KannurUniversity />} />
       <Route path="kerala/phd-admission-at-mahatma-gandhi-university" element={<MahatmaGandhiUniversity />} />
       <Route path="kerala/phd-admission-at-national-institute-of-technology" element={<NitCalicut />} />
       <Route path="kerala/phd-admission-at-university-of-calicut" element={<UnivCalicut />} />
       <Route path="kerala/phd-admission-at-central-university-of-kerala" element={<CentralUniversityKerala />} />
       <Route path="kerala/phd-admission-at-digital-university-kerala" element={<DigitalUniversityKerala />} />
       <Route path="kerala/phd-admission-at-chinmaya-vishwa-vidyapeet" element={<CvvErnakulam />} />
      {/* telangana */}
        <Route path="telangana/phd-admission-in-university-of-hyderabad" element={<UniversityOfHyderabad />} />
        <Route path="telangana/phd-admission-in-iiit-hyderabad" element={<IIITHyderabad />} />
        <Route path="telangana/phd-admission-in-iit-hyderabad" element={<IITHyderabad />} />
        <Route path="telangana/phd-admission-in-kakatiya-university" element={<KakatiyaUniversity />} />
        <Route path="telangana/phd-admission-in-jntu-hyderabad" element={<JNTHyderabad />} />
        <Route path="telangana/phd-admission-in-nit-warangal" element={<NITWarangal />} />
        <Route path="telangana/phd-admission-in-ifhe-hyderabad" element={<IFHEHyderabad />} />
        <Route path="telangana/phd-admission-in-mgu-nalgonda" element={<MGUNalgonda />} />
        <Route path="telangana/phd-admission-in-satavahana-university" element={<SatavahanaUniversity />} />
        <Route path="telangana/phd-admission-in-palamuru-university" element={<PalamuruUniversity />} />
        <Route path="telangana/phd-admission-in-telangana-university" element={<TelanganaUniversity />} />
        <Route path="telangana/phd-admission-in-anurag-university" element={<AnuragUniversity />} />
        <Route path="telangana/phd-admission-in-dr-b-r-ambedkar-open-university" element={<BRAOU />} />
        <Route path="telangana/phd-admission-in-chaitanya-university" element={<ChaitanyaUniversity />} />
        <Route path="telangana/phd-admission-in-osmania-university" element={<OsmaniaUniversity />} />
        <Route path="telangana/phd-admission-in-rajiv-gandhi-university-of-knowledge-technologies" element={<RGUKTBasar />} />
        <Route path="telangana/phd-admission-in-birla-institute-of-technology-and-science" element={<BITSHyderabad />} />
        <Route path="telangana/phd-admission-in-malla-reddy-university" element={<MallaReddyUniversity />} />
        <Route path="telangana/phd-admission-in-sr-university" element={<SRUniversity />} />
        <Route path="telangana/phd-admission-in-aurora-higher-education-and-research-academy" element={<AuroraHERAHyderabad />} />
        <Route path="telangana/phd-admission-in-telangana-mahila-viswavidyalayam" element={<TelanganaMahilaViswavidyalayam />} />
        <Route path="telangana/phd-admission-in-woxsen-university" element={<WoxsenUniversity />} />
        <Route path="telangana/phd-admission-in-mahindra-university" element={<MahindraUniversity />} />
        {/* Andhra */}
        <Route path="andhra/phd-admission-in-adikavi-nannaya-university" element={<AdikaviNannaya />} />
        <Route path="andhra/phd-admission-in-gitam-visakhapatnam-campus" element={<GITAMVisakhapatnam />} />
        <Route path="andhra/phd-admission-in-iiit-sri-city" element={<IIITSriCity />} />
        <Route path="andhra/phd-admission-in-iit-tirupati" element={<IITTirupati />} />
        <Route path="andhra/phd-admission-in-jawaharlal-nehru-technological-university-jntu-kakinada" element={<JNTUKakinada />} />
        <Route path="andhra/phd-admission-in-jawaharlal-nehru-technological-university-jntua-anantapur" element={<JNTUAAnantapur />} />
        <Route path="andhra/phd-admission-in-koneru-lakshmaiah-education-foundation-university" element={<KLEFPhDAdmission />} />
        <Route path="andhra/phd-admission-in-krishna-university" element={<KrishnaUniversity />} />
        <Route path="andhra/phd-admission-in-rgukt-nuzvid" element={<RGUKTNuzvid />} />
        <Route path="andhra/phd-admission-in-sri-krishnadevaraya-university" element={<SriKrishnadevarayaUniversity />} />
        <Route path="andhra/phd-admission-in-srm-university" element={<SRMUniversityGuntur />} />
        <Route path="andhra/phd-admission-in-central-university" element={<CentralUniversityAP />} />
        <Route path="andhra/phd-admission-in-central-tribal-university" element={<CentralTribalUniversityAP />} />
        <Route path="andhra/phd-admission-in-national-institute-of-technology" element={<NITAndhraPradesh />} />
        <Route path="andhra/phd-admission-at-sri-sathya-sai-institute-of-higher-learning" element={<SSSIHLDoctoral />} />
        <Route path="andhra/phd-admission-at-vignan's-foundation-for-science-technology-and-research" element={<VignanUniversityPhD />} />
        <Route path="andhra/phd-admission-at-siddhartha-academy-of-higher-education" element={<SiddharthaPhD />} />
        <Route path="andhra/phd-admission-at-mohan-babu-university" element={<MohanBabuUniversityPhD />} />
        <Route path="andhra/phd-admission-at-best-innovation-university" element={<BestInnovationUniversityPhD />} />
        <Route path="andhra/phd-admission-at-saveetha-amaravati-university" element={<SaveethaAmaravatiUniversityPhD />} />

        {/* depts */}
        {/* cs */}
<Route path="department/static-web-application" element={<StaticWebApplication />} />
<Route path="department/dynamic-web-applications" element={<DynamicWebApplications />} />
<Route path="department/mobile-app" element={<MobileApp />} />
<Route path="department/animations-project" element={<AnimationsProject />} />
<Route path="department/ai-project" element={<AIProject />} />
<Route path="department/data-science" element={<DataScience />} />
<Route path="department/big-data" element={<BigData />} />
<Route path="department/blockchain" element={<Blockchain />} /> 
<Route path="department/devops" element={<DevOps />} />
<Route path="department/networking" element={<Networking />} />
<Route path="department/image-processing" element={<ImageProcessing />} />
<Route path="department/nlp" element={<NLP />} />
<Route path="department/cloud-computing" element={<CloudComputing />} />
<Route path="department/cybersecurity" element={<Cybersecurity />} />
          
    {/* ECE */}
<Route path="department/biomedical-electronics" element={<BiomedicalElectronicsProjectDevelopmentCenter />} />
                <Route path="/department/biomedical-electronics/ai-biomedical-diagnostics" element={<AIBiomedicalDiagnosticsProject />} />
                <Route path="/department/biomedical-electronics/biomedical-signal-acquisition" element={<BiomedicalSignalAcquisitionProject />} />
                <Route path="/department/biomedical-electronics/brain-computer-interface" element={<BrainComputerInterfaceProject />} />
                <Route path="/department/biomedical-electronics/iot-enabled-healthcare-devices" element={<IoTEnabledHealthcareDevicesProject />} />
                <Route path="/department/biomedical-electronics/implantable-medical-electronics" element={<ImplantableMedicalElectronicsProject />} />  
                <Route path="/department/biomedical-electronics/wearable-biomedical-devices" element={<WearableBiomedicalDevicesProject />} />

<Route path="/department/communication-systems" element={<CommunicationSystemsProjectDevelopmentCenter />} />

                <Route path="/department/communication-systems/5g-6g-wireless-communication" element={<ECE5G6GWirelessCommunication />} />
                <Route path="/department/communication-systems/error-control-coding" element={<ECEErrorControlCoding />}/>
                <Route path="/department/communication-systems/mimo-massive-mimo-antenna-techniques" element={<ECEMIMOMassiveMIMOAntennaTechniques />} />
                <Route path="/department/communication-systems/optical-fiber-communication" element={<ECEOpticalFiberCommunication />} />
                <Route path="/department/communication-systems/software-defined-radio" element={<ECESoftwareDefinedRadio />} />
                <Route path="/department/communication-systems/cognitive-radio-networks" element={<ECECognitiveRadioNetworks />}/>

<Route path="department/control-systems-robotics" element={<ControlSystemsAndRoboticsProjectDevelopmentCenter />} />
               <Route path="/department/control-systems-robotics/adaptive-nonlinear-control-systems" element={<ECEAdaptiveNonlinearControlSystems />} />
               <Route path="/department/control-systems-robotics/ai-powered-robotic-control-systems" element={<ECEAIPoweredRoboticControlSystems />} />
               <Route path="/department/control-systems-robotics/autonomous-robot-navigation-path-planning" element={<ECEAutonomousRobotNavigationPathPlanning />} />
               <Route path="/department/control-systems-robotics/swarm-robotics-multi-agent-systems" element={<ECESwarmRoboticsMultiAgentSystems />} />
               <Route path="/department/control-systems-robotics/control-cyber-physical-systems" element={<ECEControlCyberPhysicalSystems />} />
               <Route path="/department/control-systems-robotics/robotic-vision-sensor-fusion" element={<ECERoboticVisionSensorFusion />} />

<Route path="department/cryptography-security" element={<CryptographyAndSecurityProjectDevelopmentCenter />} />
                <Route path="/department/cryptography-security/biometric-security-systems" element={<BiometricSecuritySystems />} />
                <Route path="/department/cryptography-security/blockchain-secure-communication" element={<BlockchainSecureCommunication />} />
                <Route path="/department/cryptography-security/cryptographic-algorithms-embedded" element={<CryptographicAlgorithmsEmbedded />} />
                <Route path="/department/cryptography-security/side-channel-attack-resistance" element={<SideChannelAttackResistance />} />
                <Route path="/department/cryptography-security/hardware-security-trusted-computing" element={<HardwareSecurityTrustedComputing />} />
                <Route path="/department/cryptography-security/post-quantum-cryptography" element={<PostQuantumCryptography />} />

<Route path="department/embedded-systems" element={<EmbeddedSystemsProjectDevelopmentCenter />} />
                <Route path="/department/embedded-systems/arm-risc-v-system" element={<ECEARMRISCVSystem />} />
                <Route path="/department/embedded-systems/embedded-system-security-cryptography" element={<ECEEmbeddedSystemSecurityCryptography />} />
                <Route path="/department/embedded-systems/energy-efficient-embedded" element={<ECEEnergyEfficientEmbedded />} />
                <Route path="/department/embedded-systems/iot-enabled-embedded-devices" element={<ECEIoTEnabledEmbeddedDevices />} />
                <Route path="/department/embedded-systems/machine-learning-embedded-platforms" element={<ECEMachineLearningEmbeddedPlatforms />} />
                <Route path="/department/embedded-systems/rtos-in-embedded-applications" element={<ECERTOSinEmbeddedApplications />} />

<Route path="department/iot-projects" element={<IoTProjectDevelopmentCenter />} />
                <Route path="/department/iot-projects/edge-fog-computing-iot" element={<ECEEdgeFogComputingIoT />} />
                <Route path="/department/iot-projects/industrial-iot-industry-4" element={<ECEIndustrialIoTIndustry4 />} />
                <Route path="/department/iot-projects/iot-precision-agriculture" element={<ECEIoTPrecisionAgriculture />} />
                <Route path="/department/iot-projects/iot-healthcare-monitoring" element={<ECEIoTHealthcareMonitoring />} />
                <Route path="/department/iot-projects/secure-iot-architectures" element={<ECESecureIoTArchitectures />} />
                <Route path="department/iot-projects/iot-based-smart-home" element={<ECEIoTbasedSmartHome />} />

<Route path="department/signal-processing" element={<SignalProcessingProjectDevelopmentCenter />} />
                 <Route path="/department/signal-processing/adaptive-filtering-applications" element={<ECEAdaptiveFilteringApplications />} />
                 <Route path="/department/signal-processing/ai-driven-signal-enhancement" element={<ECEAIDrivenSignalEnhancement />} />
                 <Route path="/department/signal-processing/biomedical-signal-processing" element={<ECEBiomedicalSignalProcessing />} />
                 <Route path="/department/signal-processing/compressive-sensing-signal-processing" element={<ECECompressiveSensingSignalProcessing />} />
                 <Route path="/department/signal-processing/digital-image-video-signal-processing" element={<ECEDigitalImageVideoSignalProcessing />} />
                 <Route path="/department/signal-processing/speech-audio-signal-processing" element={<ECESpeechAudioSignalProcessing />} />

<Route path="department/vlsi-design" element={<VLSIDesignAndEmbeddedSystemsProjectDevelopmentCenter />} />
                 <Route path="/department/vlsi-design/low-power-vlsi" element={<ECELowPowerVLSI />} />
                 <Route path="/department/vlsi-design/fpga-system-prototyping" element={<ECEFPGASystemPrototyping />} />
                 <Route path="/department/vlsi-design/embedded-vlsi-signal-processing" element={<ECEEmbeddedVLSISignalProcessing />} />
                 <Route path="/department/vlsi-design/hardware-software-co-design" element={<ECEHardwareSoftwareCoDesign />} />
                 <Route path="/department/vlsi-design/nanoelectronics-emerging-devices" element={<ECENanoelectronicsEmergingDevices />} />
                 <Route path="/department/vlsi-design/vlsi-ai" element={<ECEVLSIAI />} />

<Route path="department/wireless-sensor-networks" element={<WirelessSensorNetworksProjectDevelopmentCenter />} />
                <Route path="department/wireless-sensor-networks/energy-eff-routing-wsn" element={<ECEEnergyEfficientRoutingWSN />} />
                <Route path="department/wireless-sensor-networks/secure-data-transmission-wsn" element={<ECESecureDataTransmissionWSN />} />
                <Route path="department/wireless-sensor-networks/iot-wsn" element={<ECEIoTWSN />} />
                <Route path="department/wireless-sensor-networks/environmental-disaster-monitoring" element={<ECEWSNEnvironmentalDisasterMonitoring />} />
                <Route path="department/wireless-sensor-networks/underwater-wireless-sensor-networks" element={<ECEUnderwaterWirelessSensorNetworks />} />
                <Route path="department/wireless-sensor-networks/ai-based-wsn-optimization" element={<ECEAiBasedWSNOptimizationProject />} />

<Route path="department/satellite-communication" element={<SatelliteSpaceCommunicationProjectDevelopmentCenter />} />
               <Route path="/department/satellite-communication/antenna-systems-space-applications" element={<AntennaSystemsSpaceApplications />} />
               <Route path="/department/satellite-communication/cubesat-nanosatellite" element={<CubeSatNanosatellite />} />
               <Route path="/department/satellite-communication/deep-space-communication" element={<DeepSpaceCommunication />} />
               <Route path="/department/satellite-communication/gnss-project" element={<GnssProject />} />
               <Route path="/department/satellite-communication/satellite-communication-5g-6g" element={<SatelliteCommunication5G6G />} />
               <Route path="/department/satellite-communication/satellite-iot-applications" element={<SatelliteIoTApplications />} />

<Route path="department/antenna-design" element={<AntennasProjectDevelopmentCenter />} />
              <Route path="/department/antenna-design/iot-wearable-antennas" element={<AntennasIoTWearableDevices />} />
              <Route path="/department/antenna-design/mimo-antenna-systems" element={<MimoAntennaSystemsProject />} />
              <Route path="/department/antenna-design/antenna-miniaturization" element={<AntennaMiniaturizationProject />} />
              <Route path="/department/antenna-design/reconfigurable-antenna-design" element={<ReconfigurableAntennaDesignProject />} />
              <Route path="/department/antenna-design/satellite-space-antenna-technology" element={<SatelliteSpaceAntennaTechProject />} />
              <Route path="/department/antenna-design/smart-antennas-5g-6g" element={<SmartAntennas5G6G />} />
        
        {/*EEE  */}
<Route path="department/power-systems" element={<EEEPowerSystemsProjectDevelopmentCenter />} />
                 <Route path="/department/power-systems/distributed-generation-integration" element={<EEEDistributedGenerationIntegrationProjectDevelopmentCenter />} />
                 <Route path="/department/power-systems/facts-power-systems" element={<EEEFACTSPowerSystemsProjectDevelopmentCenter />} />
                 <Route path="/department/power-systems/load-flow-analysis" element={<EEELoadFlowAnalysis />} />
                 <Route path="/department/power-systems/power-system-protection-relays" element={<EEEPowerSystemProtectionRelaysProjectDevelopmentCenter />} />
                 <Route path="/department/power-systems/power-system-stability-control" element={<EEEPowerSystemStabilityControlProjectDevelopmentCenter />} />

<Route path="department/electrical-machines" element={<EEEElectricalMachinesProjectDevelopmentCenter />} />
                <Route path="department/electrical-machines/electrical-machines" element={<EEEAdvancedDrivesControllersProjectDevelopmentCenter />} />
                <Route path="department/electrical-machines/condition-monitoring-machines" element={<EEEConditionMonitoringMachinesProjectDevelopmentCenter />} />
                <Route path="department/electrical-machines/energy-efficient-motors" element={<EEEEnergyEfficientMotorsProjectDevelopmentCenter />} />
                <Route path="department/electrical-machines/fault-diagnosis-motor-generators" element={<EEEFaultDiagnosisMotorsGeneratorsProjectDevelopmentCenter />} />
                <Route path="department/electrical-machines/loss-minimization-techniques" element={<EEELossMinimizationTechniquesProjectDevelopmentCenter />} />
                <Route path="department/electrical-machines/special-electrical-machines" element={<EEESpecialElectricalMachinesProjectDevelopmentCenter />} />
              
<Route path="department/power-electronics" element={<EEEPowerElectronicsProjectDevelopmentCenter />} />
                <Route path="department/power-electronics/dc-dc-converters" element={<EEEDcDcConvertersApplicationsProjectDevelopmentCenter />} />
                <Route path="department/power-electronics/multilevel-inverters" element={<EEEMultilevelInvertersProjectDevelopmentCenter />} />
                <Route path="department/power-electronics/renewable-energy-controllers" element={<EEEPowerElectronicControllersRenewableEnergyProjectDevelopmentCenter />} />
                <Route path="department/power-electronics/power-factor-correction" element={<EEEPowerFactorCorrectionCircuitsProjectDevelopmentCenter />} />
                <Route path="department/power-electronics/solid-state-drives" element={<EEESolidStateDrivesProjectDevelopmentCenter />} />
                <Route path="department/power-electronics/wireless-power-transfer       " element={<EEEWirelessPowerTransferCircuitsProjectDevelopmentCenter />} />

<Route path="department/renewable-energy-systems" element={<EEERenewableEnergySystemsProjectDevelopmentCenter />} />
                 <Route path="/department/renewable-energy-systems/solar-photovoltaic" element={<EEESolarPhotovoltaicSystems />} />
                 <Route path="/department/renewable-energy-systems/wind-energy-conversion" element={<EEEWindEnergyConversionSystems />} />
                 <Route path="/department/renewable-energy-systems/biomass-fuel-cell" element={<EEEBiomassFuelCellTechnologiesProjectDevelopmentCenter />} />
                 <Route path="/department/renewable-energy-systems/energy-storage-integration" element={<EEEEnergyStorageRenewableIntegrationProjectDevelopmentCenter/>} />
                 <Route path="/department/renewable-energy-systems/hybrid-renewable-systems" element={<EEEHybridRenewableEnergySystemsProjectDevelopmentCenter />} />
                 <Route path="/department/renewable-energy-systems/grid-integration-renewables" element={<EEEGridIntegrationOfRenewablesProjectDevelopmentCenter />} />

<Route path="department/embedded-systems-electrical" element={<EEEEmbeddedSystemsProjectDevelopmentCenter />} />
                <Route path="department/embedded-systems-electrical/arm-pic-avr-microcontroller" element={<EEEArmPicAvrMicrocontrollerProjectDevelopmentCenter />} />
                <Route path="department/embedded-systems-electrical/automotive-embedded-systems" element={<EEEAutomotiveEmbeddedSystemsProjectDevelopmentCenter />} />
                <Route path="department/embedded-systems-electrical/embedded-robotics" element={<EEEEmbeddedRoboticsProjectDevelopmentCenter />} />
                <Route path="department/embedded-systems-electrical/fpga-control-applications" element={<EEEFpgaControlApplicationsProjectDevelopmentCenter />} />
                <Route path="department/embedded-systems-electrical/iot-embedded-hardware-design" element={<EEEIoTEmbeddedHardwareDesignProjectDevelopmentCenter />} />
                <Route path="department/embedded-systems-electrical/rtos" element={<EEERtosProjectDevelopmentCenter />} />

<Route path="department/high-voltage-engineering" element={<EEEHighVoltageEngineeringProjectDevelopmentCenter />} />
                <Route path="department/high-voltage-engineering/gis" element={<EEEGISProjectDevelopmentCenter />} />
                <Route path="department/high-voltage-engineering/high-voltage-testing" element={<EEEHighVoltageTestingEquipmentProjectDevelopmentCenter />} />
                <Route path="department/high-voltage-engineering/hvdc-transmission" element={<EEEHVDCTransmissionSystemsProjectDevelopmentCenter />} />
                <Route path="department/high-voltage-engineering/insulation-materials" element={<EEEInsulationMaterialsTechniquesProjectDevelopmentCenter />} />
                <Route path="department/high-voltage-engineering/overvoltage-surge-protection" element={<EEEOvervoltageSurgeProtectionProjectDevelopmentCenter />} />
                <Route path="department/high-voltage-engineering/partial-discharge-analysis" element={<EEEPartialDischargeAnalysisProjectDevelopmentCenter />} />

<Route path="department/smart-grid-microgrid" element={<EEESmartGridMicrogridProjectDevelopmentCenter />} />
                <Route path="department/smart-grid-microgrid/cybersecurity-smart-grids" element={<EEECybersecuritySmartGridsProjectDevelopmentCenter />} />
                <Route path="department/smart-grid-microgrid/ev-charging-microgrids" element={<EEEEVChargingMicrogridsProjectDevelopmentCenter />} />
                <Route path="department/smart-grid-microgrid/integration-distributed-generation" element={<EEEIntegrationDistributedGenerationProjectDevelopmentCenter />} />
                <Route path="department/smart-grid-microgrid/microgrid-energy-management" element={<EEEMicrogridEnergyManagementProjectDevelopmentCenter />} />
                <Route path="department/smart-grid-microgrid/real-time-monitoring-scada" element={<EEERealtimeMonitoringSCADAProjectDevelopmentCenter />} />
                <Route path="department/smart-grid-microgrid/smart-metering-demand-response" element={<EEESmartMeteringDemandResponseProjectDevelopmentCenter />} />

<Route path="department/control-systems-electrical" element={<EEEControlSystemsProjectDevelopmentCenter />} />
                <Route path="department/control-systems-electrical/adaptive-robust-control" element={<EEEAdaptiveRobustControlProjectDevelopmentCenter />} />
                <Route path="department/control-systems-electrical/intelligent-control-ai-ml" element={<EEEIntelligentControlAiMlProjectDevelopmentCenter />} />
                <Route path="department/control-systems-electrical/nonlinear-control-systems" element={<EEENonlinearControlSystemsProjectDevelopmentCenter />} />
                <Route path="department/control-systems-electrical/optimal-control-systems" element={<EEEOptimalControlSystemsProjectDevelopmentCenter />} />
                <Route path="department/control-systems-electrical/pid-advanced-controllers" element={<EEEPidAdvancedControllersProjectDevelopmentCenter />} />
                <Route path="department/control-systems-electrical/process-control-industries" element={<EEEProcessControlIndustriesProjectDevelopmentCenter />} />

<Route path="department/industrial-automation" element={<EEEIndustrialAutomationProjectDevelopmentCenter />} />
                <Route path="department/industrial-automation/dcs" element={<EEEDcsProjectDevelopmentCenter />} />
                <Route path="department/industrial-automation/hmi" element={<EEEHmiProjectDevelopmentCenter />} />
                <Route path="department/industrial-automation/iiot-applications" element={<EEEIndustrialIiotApplicationsProjectDevelopmentCenter />} />
                <Route path="department/industrial-automation/plc-scada" element={<EEEPlcScadaSystemsProjectDevelopmentCenter />} />
                <Route path="department/industrial-automation/predictive-maintenance" element={<EEEPredictiveMaintenanceProjectDevelopmentCenter />} />
                <Route path="department/industrial-automation/rpa" element={<EEERpaProjectDevelopmentCenter />} />

<Route path="department/electric-vehicles" element={<EEEElectricVehiclesProjectDevelopmentCenter />} />
                <Route path="department/electric-vehicles/bms" element={<EEEBmsProjectDevelopmentCenter />} />
                <Route path="department/electric-vehicles/ev-charging-infrastructure" element={<EEEEvChargingInfrastructureProjectDevelopmentCenter />} />
                <Route path="department/electric-vehicles/ev-motor-drive-systems" element={<EeeEvMotorDriveSystemsProjectDevelopmentCenter />} />
                <Route path="department/electric-vehicles/hev" element={<EeeHevProjectDevelopmentCenter />} />
                <Route path="department/electric-vehicles/power-electronics-evs" element={<EEEPowerElectronicsEvsProjectDevelopmentCenter />} />
                <Route path="department/electric-vehicles/regenerative-braking-systems" element={<EEERegenerativeBrakingSystemsProjectDevelopmentCenter />} />

<Route path="department/ai-electrical-engineering" element={<EEEArtificialIntelligenceProjectDevelopmentCenter />} />
                <Route path="/department/ai-electrical-engineering/power-load-forecasting" element={<EEEAiPowerLoadForecasting />} />
                <Route path="/department/ai-electrical-engineering/machine-learning-fault-detection" element={<EEEMachineLearningforfault />} />
                <Route path="/department/ai-electrical-engineering/deep-learning-renewables" element={<EEEDeepLearninginRenewable />} />
                <Route path="/department/ai-electrical-engineering/ai-smart-grids" element={<EEEAIinsmartGrids />} />
                <Route path="/department/ai-electrical-engineering/neural-networks-motor" element={<EEENeuralNetworksforMotor />} />
                <Route path="/department/ai-electrical-engineering/ai-energy-optimization" element={<EEEAIbasedEnergyOptimization />} />      

<Route path="department/iot-electrical-systems" element={<EEEIoTProjectDevelopmentCenter />} />
                <Route path="/department/iot-electrical-systems/smart-grids" element={<EEEIoTforSmartGrids />} />    
                <Route path="/department/iot-electrical-systems/renewable-energy" element={<EEEIoTRenewableEnergy />} />
                <Route path="/department/iot-electrical-systems/predictive-maintenance" element={<EEEIoTPredictiveMaintenance />} />
                <Route path="/department/iot-electrical-systems/smart-home-automation" element={<EEESmartHomeAutomation />} />
                <Route path="/department/iot-electrical-systems/smart-meters" element={<EEEIoTEnabledSmartMeters />} />
                <Route path="/department/iot-electrical-systems/health-monitoring" element={<EEEIoTBasedHealthMonitoring />} />

<Route path="department/energy-management-systems" element={<EEEEnergyManagementSystemsProjectDevelopmentCenter />} />
                <Route path="/department/energy-management-systems/smart-building-energy" element={<EEESmartBuildingEnergy />} />   
                <Route path="/department/energy-management-systems/demand-side-management" element={<EEEDemandSideManagement />} /> 
                <Route path="/department/energy-management-systems/energy-efficiency-industries" element={<EEEEnergyEfficiencyinIndustries />} />
                <Route path="/department/energy-management-systems/renewable-energy-scheduling" element={<EEERenewableEnergyScheduling />} />
                <Route path="/department/energy-management-systems/home-energy-management" element={<EEEHomeEnergyManagement />} />
                <Route path="/department/energy-management-systems/data-analytics-energy-savings" element={<EEEDataAnalyticsforEnergySavings />} />
     {/* Civil */}
<Route path="department/construction-project-management" element={<ConstructionProjectManagement />} />
                <Route path="/department/construction-project-management/smart-construction-techniques" element={<SmartConstructionTechniques />} />
                <Route path="/department/construction-project-management/cost-optimization-in-projects" element={<CostOptimizationinProjects />} />
                <Route path="/department/construction-project-management/project-scheduling-planning" element={<ProjectSchedulingPlanning />} />

<Route path="department/environmental-engineering" element={<EnvironmentalEngineering />} />
                <Route path="/department/environmental-engineering/water-treatment-recycling" element={<WaterTreatmentRecycling />} />
                <Route path="/department/environmental-engineering/air-pollution-modeling" element={<AirPollutionModeling />} />
                <Route path="/department/environmental-engineering/waste-management-system" element={<WasteManagementSystem />} />

<Route path="department/geotechnical-engineering" element={<GeotechnicalEngineering />}/>
                 <Route path="/department/geotechnical-engineering/soil-stabilization-techniques" element={<SoilStabilizationTechniques />}/>
                 <Route path="/department/geotechnical-engineering/foundation-design" element={<FoundationDesign />} />
                 <Route path="/department/geotechnical-engineering/slope-stability-analysis" element={<SlopeStabilityAnalysis />}/>

<Route path="department/remote-sensing-gis" element={<RemoteSensingGIS />} />
                <Route path="/department/remote-sensing-gis/gis-based-urban-planning" element={<GISbasedUrbanPlanning />} />
                <Route path="/department/remote-sensing-gis/remote-sensing-for-disaster" element={<RemoteSensingforDisaster />} />

<Route path="department/structural-engineering" element={<StructuralEngineering />} />
                <Route path="/department/structural-engineering/earthquake-resistant-structures" element={<EarthquakeResistantStructures />} />
                <Route path="/department/structural-engineering/steel-rcc-design-optimization" element={<SteelRCCDesignOptimization />} />
                <Route path="/department/structural-engineering/tall-building-analysis" element={<TallBuildingAnalysis />} /> 
                <Route path="/department/structural-engineering/bridge-design-monitoring" element={<BridgeDesignMonitoring />} />

<Route path="department/transportation-engineering" element={<TransportationEngineering />} />
                <Route path="/department/transportation-engineering/smart-traffic-management" element={<SmartTrafficManagement />} />
                <Route path="/department/transportation-engineering/pavement-analysis-design" element={<PavementAnalysisDesign />} />
                <Route path="/department/transportation-engineering/highway-safety-optimization" element={<HighwaySafetyOptimization />} /> 

        {/* Mech */}
<Route path="department/thermal-engineering" element={<METhermalEngineeringHeat />} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                <Route path="/department/thermal-engineering/heat-exchanger-design" element={<HeatExchangerDesign />} />
                <Route path="/department/thermal-engineering/solar-thermal-systems" element={<SolarThermalSystems />} />
                <Route path="/department/thermal-engineering/waste-heat-recovery" element={<WasteHeatRecovery />} />
                <Route path="/department/thermal-engineering/hvac-system-analysis" element={<HVACSystemAnalysis />} />
                <Route path="/department/thermal-engineering/energy-efficiency-in-thermal" element={<EnergyEfficiencyinThermal />} />

<Route path="department/fluid-mechanics-dynamics" element={<FluidMechanicsFluidDynamics />} />
                <Route path="/department/fluid-mechanics-dynamics/computational-fluid-dynamics" element={<ComputationalFluidDynamics />} />
                <Route path="/department/fluid-mechanics-dynamics/turbomachinery-design" element={<TurbomachineryDesign />} />
                <Route path="/department/fluid-mechanics-dynamics/aerodynamics-wind-tunnel" element={<AerodynamicsWindTunnel />} />
                <Route path="/department/fluid-mechanics-dynamics/pump-valve-optimization" element={<PumpValveOptimization />} />
                <Route path="/department/fluid-mechanics-dynamics/microfluidics-lab" element={<MicrofluidicsLab />} /> 

<Route path="department/manufacturing-production" element={<ManufacturingProductionEngineering />} />
                <Route path="/department/manufacturing-production/cnc-machining-optimization" element={<CNCMachiningOptimization />} />
                <Route path="/department/manufacturing-production/additive-manufacturing" element={<AdditiveManufacturing />} />
                <Route path="/department/manufacturing-production/industrial-automation-robotics" element={<IndustriaAutomationRobotics />} />
                <Route path="/department/manufacturing-production/smart-manufacturing-systems" element={<SmartManufacturingSystems />} />
                <Route path="/department/manufacturing-production/tool-design-process" element={<ToolDesignProcess />} />

<Route path="department/design-engineering-cad" element={<DesignEngineerCAD />} />
                <Route path="/department/design-engineering-cad/finite-element-analysis" element={<FiniteElementAnalysis />} />
                <Route path="/department/design-engineering-cad/cad-modeling-simulation" element={<CADModelingSimulation />} />
                <Route path="/department/design-engineering-cad/mechanism-design" element={<MechanismDesign />} />
                <Route path="/department/design-engineering-cad/topology-optimization" element={<TopologyOptimization />} />
                <Route path="/department/design-engineering-cad/product-lifecycle-management" element={<ProductLifecycleManagement />} />

<Route path="department/robotics-mechatronics" element={<RoboticsMechatronics />} />
                <Route path="/department/robotics-mechatronics/industrial-robotics-systems" element={<IndustrialRoboticsSystems />} />
                <Route path="/department/robotics-mechatronics/iot-based-mechatronics" element={<IoTbasedMechatronics />} />
                <Route path="/department/robotics-mechatronics/autonomous-vehicles-drones" element={<AutonomousVehiclesDrones />} />
                <Route path="/department/robotics-mechatronics/robotic-manipulator-control" element={<RoboticManipulatorControl />} />
                <Route path="/department/robotics-mechatronics/embedded-control-systems" element={<EmbeddedControlSystems />} />

<Route path="department/renewable-thermal-energy" element={<RenewableEnergyThermal />} />
                <Route path="/department/renewable-thermal-energy/solar-pv-thermal" element={<SolarPVThermal />} />
                <Route path="/department/renewable-thermal-energy/wind-turbine-design" element={<WindTurbineDesign />} />
                <Route path="/department/renewable-thermal-energy/biomass-biofuel-energy" element={<BiomassBiofuelEnergy />} />
                <Route path="/department/renewable-thermal-energy/energy-storage-recovery" element={<EnergyStorageRecovery />} />
                <Route path="/department/renewable-thermal-energy/smart-grid-integration" element={<SmartGridIntegration />} />

<Route path="department/automotive-vehicle-engineering" element={<AutomotiveVehicleEngineering />} />
                <Route path="/department/automotive-vehicle-engineering/electric-vehicle-design" element={<ElectricVehicleDesign />} />
                <Route path="/department/automotive-vehicle-engineering/hybrid-vehicle-powertrains" element={<HybridVehiclePowertrains />} />
                <Route path="/department/automotive-vehicle-engineering/vehicle-dynamics-stability" element={<VehicleDynamicsStability />} />
                <Route path="/department/automotive-vehicle-engineering/engine-performance-optimization" element={<EnginePerformanceOptimization />} />
                <Route path="/department/automotive-vehicle-engineering/emission-control-fuel-efficiency" element={<EmissionControlFuelEfficiency />} />

<Route path="department/mechatronics-control-systems" element={<MechatronicsControlSystems />} />
                <Route path="/department/mechatronics-control-systems/pid-advanced-control" element={<PIDAdvancedControl />} />
                <Route path="/department/mechatronics-control-systems/automation-manufacturing" element={<AutomationManufacturing />} />
                <Route path="/department/mechatronics-control-systems/plc-systems" element={<PLCSystems />} />
                <Route path="/department/mechatronics-control-systems/sensor-integration" element={<SensorIntegration />} />
                <Route path="/department/mechatronics-control-systems/smart-actuator-systems" element={<SmartActuatorSystems />} />

<Route path="department/mechanical-properties-materials" element={<MechanicalProperties />} />
                <Route path="/department/mechanical-properties-materials/composite-materials-analysis" element={<CompositeMaterialsAnalysis />} />
                <Route path="/department/mechanical-properties-materials/advanced-alloy-development" element={<AdvancedAlloyDevelopment />} />
                <Route path="/department/mechanical-properties-materials/tribology-wear-analysis" element={<TribologyWearAnalysis />} />
                <Route path="/department/mechanical-properties-materials/nanomaterials-mechanical" element={<NanomaterialsMechanical />} />
                <Route path="/department/mechanical-properties-materials/fatigue-fracture-analysis" element={<FatigueFractureAnalysis />} />

<Route path="department/industrial-production-optimization" element={<IndustrialProductionOptimization />} />
                <Route path="/department/industrial-production-optimization/lean-manufacturing" element={<LeanManufacturing />} />
                <Route path="/department/industrial-production-optimization/supply-chain-process" element={<SupplyChainProcess />} />
                <Route path="/department/industrial-production-optimization/industrial-safety-ergonomics" element={<IndustrialSafetyErgonomics />} />
                <Route path="/department/industrial-production-optimization/smart-factory-systems" element={<SmartFactorySystems />} />
                <Route path="/department/industrial-production-optimization/cost-time-optimization" element={<CostTimeOptimization />} />

        <Route path="department" element={<Departments/>} /> 

        <Route path="/d2" element={<Design2/>} /> 

        <Route path="/se" element={<ServicesCategories/>} /> 





      </Routes>
      <Footer />
   
  </>
  );
}

export default MainPage;
