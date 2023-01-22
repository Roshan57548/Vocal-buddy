import React from "react";
import "./SocialLinks.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
const SocialLinks = () => {
  return (
    <div className="sociallinks-1">
        <div className="social-contents">
            <h2>Thank you for your support!</h2>
            <h3 className="social-h3">We deliver good quality products</h3>
        </div>
        <div className="social-all-buttons">
            <div className="social-buttons">
                <Button variant="contained"  size="large" >
                    <FacebookIcon className="social-icons"/>
                    Facebook
                </Button>
            </div>
            <div className="social-buttons">
                <Button variant="contained" color="secondary" className="social-instagram"  size="large" >
                    <InstagramIcon className="social-icons"/>
                    Instagram
                </Button>
            </div>
            <div className="social-buttons">
                <Button variant="contained"  color="error" size="large" >
                    <SubscriptionsIcon className="social-icons"/>
                    Youtube
                </Button>
            </div>
        </div>
        
    </div>
  );
};

export default SocialLinks;
