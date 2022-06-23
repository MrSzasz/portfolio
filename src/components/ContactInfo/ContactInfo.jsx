import "./ContactInfo.scss";

const ContactInfo = () => {
  return (
    <div className="infoContactContainer">
      <div className="contactLinkContainer">
        <img src="https://source.unsplash.com/user/c_v_r" alt="" width="50px" height="50px" />
        <div className="contactLink">MAIL</div>
      </div>
      <div className="contactLinkContainer">
        <img src="https://source.unsplash.com/user/c_v_r" alt="" width="50px" height="50px" />
        <div className="contactLink">WHATSAPP</div>
      </div>
      <div className="contactLinkContainer">
        <img src="https://source.unsplash.com/user/c_v_r" alt="" width="50px" height="50px" />
        <div className="contactLink">LINKEDIN</div>
      </div>
      <div className="contactLinkContainer">
        <img src="https://source.unsplash.com/user/c_v_r" alt="" width="50px" height="50px" />
        <div className="contactLink">GITHUB</div>
      </div>
    </div>
  );
};

export default ContactInfo;
