// =========================  STYLES  ========================= //

import "./ContactLink.scss";


const ContactLink = ({ href, dataContact, classType, children }) => {
  
  
    // ----------  RETURN  ---------- //

  return (
    <a href={href} target="_blank" className="contactLinkContainer">
      <div data-contact={dataContact} className={"contactLinkAfter " + classType}>
        {children}
      </div>
    </a>
  );
};

export default ContactLink;
