import React from "react";
import "./SocialLinks.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { Link } from "react-router-dom";
const SocialLinks = () => {
  return (
    <div className="sociallinks-1">
        <div className="social-contents">
            <h2>Thank you for your support!</h2>
            <h3 className="social-h3">We deliver good quality products</h3>
        </div>
        <div className="social-all-buttons">
            <div className="social-buttons">
                <a href="http://Facebook.com/vocalbuddy" target="_blank">
                    <Button variant="contained"  size="large" >
                        <FacebookIcon className="social-icons"/>
                        Facebook
                    </Button>
                </a>
            </div>
            
            <div className="social-buttons">
                <a href="http://Instagram.com/vocalbuddy" target="_blank">
                    <Button variant="contained" color="secondary" className="social-instagram"  size="large" >
                        <InstagramIcon className="social-icons"/>
                        Instagram
                    </Button>
                </a>
            </div>
            
        </div>
        
    </div>
  );
};

export default SocialLinks;
