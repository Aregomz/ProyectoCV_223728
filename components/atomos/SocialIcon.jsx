import React from "react";

const SocialIcon = ({ iconUrl, alt }) => {
  return <img src={iconUrl} alt={alt} className="w-8 h-8 mr-2" />;
};

export default SocialIcon;
