// =========================  STYLES  ========================= //

import "./ContactInfo.scss";

// =========================  CUSTOM IMPORTS  ========================= //

import { FiMail } from "react-icons/fi";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";


const ContactInfo = () => {
  
  // ----------  RETURN  ---------- //

  return (
    <div className="infoContactContainer">
      <div className="infoContactLinks">
        <a
          href="mailto:lugoleandro@hotmail.com?subject=Portfolio"
          target="_blank"
          className="contactLinkContainer"
        >
          <div data-contact="&nbsp;MAIL" className="contactLinkMail">
            <FiMail size="30" />
          </div>
        </a>
        <a
          href="https://wa.link/e4glc3"
          target="_blank"
          className="contactLinkContainer"
        >
          <div data-contact="&nbsp;WHATSAPP" className="contactLinkWhatsApp">
            <BsWhatsapp size="30" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/lugotomasleandro/"
          target="_blank"
          className="contactLinkContainer"
        >
          <div data-contact="&nbsp;LINKEDIN" className="contactLinkLinkedIn">
            <BsLinkedin size="30" />
          </div>
        </a>
        <a
          href="https://github.com/MrSzasz"
          target="_blank"
          className="contactLinkContainer"
        >
          <div data-contact="&nbsp;GITHUB" className="contactLinkGitHub">
            <BsGithub size="30" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
