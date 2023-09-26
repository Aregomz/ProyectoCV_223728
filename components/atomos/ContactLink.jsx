import React from "react";

const ContactLink = ({ url, iconComponent, alt }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {iconComponent}
    </a>
  );
};

export default ContactLink;
