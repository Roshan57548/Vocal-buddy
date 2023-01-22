import React from "react";
import "./StartFrom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Kite from './kite.png';
import Cammel from './cammel.png';
import People from './people.png';
import Artisian from './artisian.png';
const StartFrom = () => {
  
    const TopSpecialist = [
        {
            heading: "With Love",
            img: Kite,
            tretment: "All products are personally sourced with care and respect, for the artisan, craftform and you. Pyaar se dekho and pyaar se khareedo."
        },
        {
            heading: "Earth-Friendly",
            img: Cammel,
            tretment: "Crafts are hand-made and by nature organic, environmentally friendly. By supporting local, you are creating a sustainable future."
        },
        {
            heading: "Inclusive",
            img: People,
            tretment: "We prioritise bridging the gap, 70% of our workforce is local women, who ensure vocal buddy stays grounded. Thank you for your support."
        },
        {
            heading: "Artisan-First",
            img: Artisian,
            tretment: "We partner with and support 200+ artisan families and their legacy in craft. They give us the confidence to bring these products to you."
        },
        ];
        
        const TreatmentData = TopSpecialist.map((row, index) => {
        return (
            <div className="col-lg-3 col-md-6 col-12 mt-3 mb-3">
            <Card className="content-center">
                <Card.Img variant="top" src={row.img} className="sizeimage" />
                <Card.Body className="content-center-2">
                <Card.Title className="content-heading">{row.heading}</Card.Title>
                <Card.Text>{row.tretment}</Card.Text>
                </Card.Body>
            </Card>
            </div>
        );
        });
        return (
        <div>
            <div className="container">
            <div className="row margin">
                <h2 className="col-12 mb-3">LOCAL BUDDY WAY SINCE 2015</h2>
                {TreatmentData}
            </div>
            </div>
        </div>
        );
};

export default StartFrom;
