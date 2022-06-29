// =========================  STYLES  ========================= //

import "./ContactInfo.scss";

// =========================  CUSTOM IMPORTS  ========================= //

import { FiMail } from "react-icons/fi";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";

// ----------  COMPONENTS  ---------- //

import ContactLink from "../ContactLink/ContactLink";


const ContactInfo = () => {
  
  // ----------  RETURN  ---------- //

  return (
    <div className="infoContactContainer">
      <div className="infoContactLinks">
        <ContactLink href="mailto:lugoleandro@hotmail.com?subject=Portfolio" dataContact="&nbsp;MAIL"><FiMail size="30" /></ContactLink>
        <ContactLink href="https://wa.link/e4glc3" dataContact="&nbsp;WHATSAPP"><BsWhatsapp size="30" /></ContactLink>
        <ContactLink href="https://www.linkedin.com/in/lugotomasleandro/" dataContact="&nbsp;LINKEDIN"><BsLinkedin size="30" /></ContactLink>
        <ContactLink href="https://github.com/MrSzasz" dataContact="&nbsp;GITHUB"><BsGithub size="30" /></ContactLink>
      </div>
    </div>
  );
};

export default ContactInfo;
