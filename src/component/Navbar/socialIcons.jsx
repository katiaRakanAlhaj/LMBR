// components/SocialIcons.jsx
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialIcons = ({ spacing = "1.5rem" ,contactData}) => {
  const social = [
    { icon: <FaLinkedinIn />, link: contactData?.data?.linkedin },
    { icon: <FaInstagram />, link: contactData?.data?.instagram },
    { icon: <FaTwitter />, link: contactData?.data?.x },
    { icon: <BiLogoFacebook />, link: contactData?.data?.facebook },
    { icon: <FaYoutube />, link: contactData?.data?.youtube },
  ];

  return (
    <div className="flex" style={{ gap: spacing }}>
      {social.map((s, index) => (
        <a 
          key={index}
          href={s.link}
          className="text-white text-2xl cursor-pointer mt-[-2.2rem] hover:text-gray-300 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;