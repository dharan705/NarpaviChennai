import React, { useEffect, useState } from "react";
import "./LogoSlider.scss";

const logos = [
  {image: "src/images/cse/StaticWebApp.png"},
  {image: "src/images/cse/DynamicWebApp.png"},
  {image: "src/images/cse/Mobile.png"},
  {image: "src/images/cse/Animations.png"},
  {image: "src/images/cse/AI.png"},
  {image: "src/images/cse/DataScience.png"},
  {image: "src/images/cse/BigData.png"},
  {image: "src/images/cse/Blockchain.png"},
  {image: "src/images/cse/DevOps.png"},
  {image: "src/images/cse/Networking.png"},
  {image: "src/images/cse/ImageProcessing.png"},
  {image: "src/images/cse/NLP.png"},
  {image: "src/images/cse/CloudComputing.png"},
  {image: "src/images/cse/CyberSecurity.png"},

  {image: "src/images/ece/BiomedicalElectronics.png"},
  {image: "src/images/ece/communicationsystem.png"},
  {image: "src/images/ece/CryptographySecurity.png"},
  {image: "src/images/ece/EmbeddedSystems.png"},
  {image: "src/images/ece/IOT.png"},
  {image: "src/images/ece/SignalProcessing.png"},
  {image: "src/images/ece/VLSIDesign.png"},
  {image: "src/images/ece/WirelessSensor.png"},
  {image: "src/images/ece/SatelliteCommunication.png"},
  {image: "src/images/ece/Antenna.png"},

  {image: "src/images/eee/EEE_PowerSystems.png"},
  {image: "src/images/eee/EEE_ElectricalMachines.png"},
  {image: "src/images/eee/EEE_PowerElectronics.png"},
  {image: "src/images/eee/EEE_RenewableEnergy.png"},
  {image: "src/images/eee/EEE_EmbeddedSystems.png"},
  {image: "src/images/eee/EEE_HighVoltage.png"},
  {image: "src/images/eee/EEE_SmartGridAndMicrogrid.png"},
  {image: "src/images/eee/EEE_ControlSystems.png"},
  {image: "src/images/eee/EEE_IndustrialAutomation.png"},
  {image: "src/images/eee/EEE_ElectricVehicles.png"},
  {image: "src/images/eee/EEE_AI.png"},
  {image: "src/images/eee/IoTinElectrical.png"},
  {image: "src/images/eee/EnergyManagementSystems .png"},

  {image: "src/images/civil/civil-ConstructionProjectManagement.png"},
  {image: "src/images/civil/GeotechnicalEngineering.png"},
    {image: "src/images/civil/StructuralEngineering.png"},
  {image: "src/images/civil/TransportationEngineering.png"},

  {image: "src/images/mech/mech-ThermalEngineering.png"},
  {image: "src/images/mech/FluidMechanicsAndDynamics.png"},
  {image: "src/images/mech/ManufacturingAndProduction.png"},
  {image: "src/images/mech/CAD.png"},
  {image: "src/images/mech/RoboticsAndMechatronics.png"},
  {image: "src/images/mech/AutomotiveAndVehicle.png"},
  {image: "src/images/mech/MechatronicsControlSystems.png"},
  {image: "src/images/mech/MechanicalPropertiesAndMaterials.png"},
  {image: "src/images/mech/IndustrialProductionOptimization.png"},
   
];

const LogoSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length);
    }, 3000); // slide speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="logo-slider">
      <div
        className="logo-track"
        style={{ transform: `translateX(-${index * 160}px)` }}
      >
        {logos.concat(logos).map((item, i) => (
       <div className="logo-item" key={`${item.image}-${i}`}>
  <div className="hexagon-border">
    <img src={item.image} alt={item.alt || "logo"} className="hexagon-img" />
  </div>
</div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;

