// components/molecules/FooterInfo.jsx
import React from "react";
import FooterText from "../atomos/FooterText";

const FooterInfo = () => {
  return (
    <div>
      <FooterText text="Teléfono: 123-456-7890" />
      <FooterText text="Email: ejemplo@gmail.com" />
      <FooterText text="Dirección: 123 Calle Principal, Ciudad" />
    </div>
  );
};

export default FooterInfo;
