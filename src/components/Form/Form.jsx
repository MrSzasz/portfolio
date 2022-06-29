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
    toast.success("¡Enviado correctamente!", {
      className: "toastStyle toastStyleSuccess",
    });
  const errorToast = () =>
    toast.error("Error, intente nuevamente", {
      className: "toastStyle toastStyleError",
    });

  // ----------  EMAILJS  ---------- //

  useEffect(() => {
    const btn = document.getElementById("button");

    document
      .getElementById("form")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        btn.value = "Enviando...";

        const serviceID = "default_service";
        const templateID = "template_u5ue2hf";

        emailjs.sendForm(serviceID, templateID, this).then(
          () => {
            btn.value = "Enviar";
            successToast();
          },
          (err) => {
            btn.value = "Enviar";
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
          placeholder="Inserte su nombre"
        />
        <FormInput
          type="email"
          inputName="to_email"
          placeholder="Inserte su email"
        />
        <FormInput
          type="text"
          inputName="to_message"
          placeholder="¡Hola! Me comunicaba para..."
        />
        <button>
          <input
            type="submit"
            id="button"
            value="Enviar"
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
