import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css";
import AboutHeader from "./AboutHeader";
import AboutVocal from "./AboutVocal";
import StoryVocal from "./StoryVocal";
import AboutEasier from "./AboutEasier";
const AboutUs = () => {
  return (
    <div>
      <AboutHeader />
      <AboutVocal />
      <StoryVocal />
      <AboutEasier /> 
    </div>
  );
};

export default AboutUs;
