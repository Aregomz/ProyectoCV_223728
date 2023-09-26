// components/atoms/Avatar.jsx
import React from "react";
import "./SkillRating.css"; // Asegúrate de importar tu archivo CSS aquí

const Avatar = ({ imageUrl, alt }) => {
  return <img src={imageUrl} alt={alt} className="w-100 h-100 mb-6 hover:shadow-md" />;
};

export default Avatar;
