import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from './Slider';
import SocialLinks from "./SocialLinks";
import Count from "./Count";
import StartFrom from "./StartFrom";
import CraftForms from "./Craftforms";
import CraftFormsBase from "./Craftformsbase";
import Images from "./Images";

const Home = () => {
  return (
    <div>
        <Slider />
        <CraftForms />
        <Images />
        <CraftFormsBase />
        <StartFrom/>
        <Count />
        <SocialLinks />

    </div>
  );
};

export default Home;
