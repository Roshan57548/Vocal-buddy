import React from "react";
import "./StoryVocal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Vocal_First from './vocal_first.png';
import Vocal_Second from './vocal_second.png';
import Vocal_Third from './vocal_third.png';
import Vocal_Four from './vocal_four.png';
const StoryVocal = () => {
  
    const TopSpecialist = [
        {
            heading: "Handycrafted",
            img: Vocal_First,
            },
        {
            heading: "Earth-Friendly",
            img: Vocal_Second,
            },
        {
            heading: "Inclusive",
            img: Vocal_Third,
            },
        {
            heading: "Sculpted Inhouse",
            img: Vocal_Four,
        },
        ];
        
        const TreatmentData = TopSpecialist.map((row, index) => {
        return (
            <div className="col-lg-3 col-md-6 col-12 mt-3 mb-5">
            <Card className="content-center-story">
                <Card.Img variant="top" src={row.img} className="sizeimages" />
                <Card.Body className="content-centers">
                <Card.Title className="content-heading">{row.heading}</Card.Title>
                </Card.Body>
            </Card>
            </div>
        );
        });
        return (
        <div className="storyvocal">
            <div className="container">
            <div className="row">
                {TreatmentData}
            </div>
            </div>
        </div>
        );
};

export default StoryVocal;
