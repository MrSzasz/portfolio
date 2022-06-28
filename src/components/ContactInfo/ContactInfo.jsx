import "./ContactInfo.scss";
import { FiMail } from "react-icons/fi";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";

const ContactInfo = () => {
  return (
    <div className="infoContactContainer">
      <div className="infoContactLinks">
        <a
          href="mailto:lugoleandro@hotmail.com?subject=Portfolio"
          target="_blank"
          className="contactLinkContainer"
        >
          <div className="contactLinkMail">
            <FiMail size="30" /> MAIL
          </div>
        </a>
        <a
          href="https://wa.link/e4glc3"
          target="_blank"
          className="contactLinkContainer"
        >
          <div className="contactLinkWhatsApp">
            <BsWhatsapp size="30" /> WHATSAPP
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/lugotomasleandro/"
          target="_blank"
          className="contactLinkContainer"
        >
          <div className="contactLinkLinkedIn">
            <BsLinkedin size="30" /> LINKEDIN
          </div>
        </a>
        <a
          href="https://github.com/MrSzasz"
          target="_blank"
          className="contactLinkContainer"
        >
          <div className="contactLinkGitHub">
            <BsGithub size="30" /> GITHUB
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
