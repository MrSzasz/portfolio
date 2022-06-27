import "./ContactInfo.scss";

const ContactInfo = () => {
  return (
    <div className="infoContactContainer">
      <div className="contactInfoGlowPink"></div>
      <div className="contactInfoGlowBlue"></div>
      <div className="infoContactLinks">
        <a
          href="mailto:lugoleandro@hotmail.com?subject=Portfolio"
          target="_blank"
          className="contactLinkContainer"
        >
          <img src="https://i.imgur.com/w0Grji7.png" alt="EmailLogo" />
          <div className="contactLinkMail">MAIL</div>
        </a>
        <a
          href="https://wa.link/e4glc3"
          target="_blank"
          className="contactLinkContainer"
        >
          <img src="https://i.imgur.com/md0NYzY.png" alt="WhatsAppLogo" />
          <div className="contactLinkWhatsApp">WHATSAPP</div>
        </a>
        <a
          href="https://www.linkedin.com/in/lugotomasleandro/"
          target="_blank"
          className="contactLinkContainer"
        >
          <img src="https://i.imgur.com/NKbarCo.png" alt="LinkedInLogo" />
          <div className="contactLinkLinkedIn">LINKEDIN</div>
        </a>
        <a
          href="https://github.com/MrSzasz"
          target="_blank"
          className="contactLinkContainer"
        >
          <img src="https://i.imgur.com/pLFaWar.png" alt="GitHubLink" />
          <div className="contactLinkGitHub">GITHUB</div>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
