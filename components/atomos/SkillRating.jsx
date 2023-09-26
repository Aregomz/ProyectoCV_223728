import React from 'react';
import './SkillRating.css';

const SkillRating = ({ filled }) => {
  return <span className={`skill-circle ${filled ? 'filled' : ''}`}></span>;
};

export default SkillRating;

