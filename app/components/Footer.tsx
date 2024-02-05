import React from "react";
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <div className="border-t border-t-secondary mt-8 px-4">
        <div className="pb-6 px-1 mx-auto">

        </div>

      <div className="text-primary">
        <SocialIcon 
            url="https://www.instagram.com/hustle_her_way/"
            fgColor="primary"
            bgColor="transparent"
        />
      </div>
    </div>
  );
};

export default Footer;
