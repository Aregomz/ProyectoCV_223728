// components/organisms/Footer.jsx
import React from "react";
import FooterInfo from "../moleculas/FooterInfo";

const Footer = () => {
  return (
    <div className="footer mt-20 p-6 bg-customBgColor text-center">
      <div className="flex flex-col items-center">
        <FooterInfo />
      </div>
    </div>
  );
};

export default Footer;
