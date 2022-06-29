// =========================  STYLES  ========================= //

import "./ContactLink.scss";


const ContactLink = ({ href, dataContact, children }) => {
  
  
    // ----------  RETURN  ---------- //

  return (
    <a href={href} target="_blank" className="contactLinkContainer">
      <div data-contact={dataContact} className="contactLinkMail">
        {children}
      </div>
    </a>
  );
};

export default ContactLink;
