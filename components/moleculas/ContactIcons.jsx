import React from "react";
import SocialIcon from "../atomos/SocialIcon";
import ContactLink from "../atomos/ContactLink";

const socialIcons = [
  {
    id: 1,
    iconUrl: "https://w7.pngwing.com/pngs/991/119/png-transparent-facebook-square-brands-icon.png",
    url: "https://www.facebook.com/Marco.AArellanes/",
    alt: "Facebook",
    name: "Facebook"
  },
  {
    id: 2,
    iconUrl: "https://e7.pngegg.com/pngimages/904/880/png-clipart-instagram-logo-screenshot-white-wine-logo-computer-icons-instagram-black-label-photography.png",
    url: "https://www.instagram.com/ft.arellanezz/",
    alt: "Instagram",
    name: "Instagram"
  },
  {
    id: 3,
    iconUrl: "https://w7.pngwing.com/pngs/965/519/png-transparent-computer-icons-twitter-black-logo-computer-wallpaper-monochrome-thumbnail.png",
    url: "https://twitter.com/Marco_AArellane",
    alt: "Twitter",
    name: "Twitter"
  },
  {
    id: 4,
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3670/3670299.png",
    url: "https://www.tiktok.com/@marco_aregom",
    alt: "TikTok",
    name: "TikTok"
  }
];

const ContactIcons = () => {
  return (
    <div className="flex flex-col items-start mt-6 ml-20">
      <h2 className="text-xl mb-2">Contactos</h2>
      <div className="flex flex-row items-center">
        {socialIcons.map((social) => (
          <div key={social.id} className="flex items-center mr-4">
            <SocialIcon iconUrl={social.iconUrl} alt={social.alt} />
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              {social.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactIcons;