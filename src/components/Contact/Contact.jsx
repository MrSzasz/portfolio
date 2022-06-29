// =========================  STYLES  ========================= //

import "./Contact.scss";

// =========================  CUSTOM IMPORTS  ========================= //

// ----------  COMPONENTS  ---------- //

import ContactInfo from "../ContactInfo/ContactInfo";
import Form from "../Form/Form";


const Contact = () => {

  // ----------  RETURN  ---------- //

  return (
    <section className="secContact" id="secContact">
      <div className="contactContainer">
        <div className="contactIntro">
          <h2>CONTACTAME</h2>
        </div>
        <div className="contactInfoContainer">
          <Form />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
