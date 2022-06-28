import ContactInfo from "../ContactInfo/ContactInfo";
import Form from "../Form/Form";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="secContact" id="secContact">
      <div className="contactContainer">
        <h2>CONTACTAME</h2>
        <div className="contactInfoContainer">
          <Form />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
