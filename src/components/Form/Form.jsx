// =========================  STYLES  ========================= //

import "./Form.scss";

// =========================  LIBRARIES  ========================= //

import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import FormInput from "../FormInput/FormInput";

// =========================  CUSTOM IMPORTS  ========================= //

const Form = () => {
  // ----------  TOAST  ---------- //

  const successToast = () =>
    toast.success("Well done!", {
      className: "toastStyle toastStyleSuccess",
    });
  const errorToast = () =>
    toast.error("Error, please try again!", {
      className: "toastStyle toastStyleError",
    });

  // ----------  EMAILJS  ---------- //

  useEffect(() => {
    const btn = document.getElementById("button");

    document
      .getElementById("form")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        btn.value = "Sending...";

        const serviceID = "default_service";
        const templateID = "template_u5ue2hf";

        emailjs.sendForm(serviceID, templateID, this).then(
          () => {
            btn.value = "Send";
            successToast();
          },
          (err) => {
            btn.value = "Send";
            alert(JSON.stringify(err));
            errorToast();
          }
        );
      });
  }, []);

  return (
    // ----------  RETURN  ---------- //

    <div className="formContainer">
      <form id="form">
        <FormInput
          type="text"
          inputName="to_name"
          placeholder="Name"
        />
        <FormInput
          type="email"
          inputName="to_email"
          placeholder="mail@example.com"
        />
        <FormInput
          type="text"
          inputName="to_message"
          placeholder="Hi! Write something"
        />
        <button>
          <input
            type="submit"
            id="button"
            value="Send"
            className="sendButton"
          ></input>
          <i></i>
        </button>
      </form>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 5000,
        }}
      />
    </div>
  );
};

export default Form;
