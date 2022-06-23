import ContactInfo from "../ContactInfo/ContactInfo";
import Form from "../Form/Form";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="secContact" id="secContact">
      <Form />
      <ContactInfo />
    </section>
  );
};

export default Contact;
