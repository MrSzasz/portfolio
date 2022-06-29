import { useEffect } from "react";
import "./Form.scss";

import toast, { Toaster } from "react-hot-toast";

const Form = () => {
  const successToast = () =>
    toast.success("¡Enviado correctamente!", {
      className: "toastStyle toastStyleSuccess",
    });
  const errorToast = () =>
    toast.error("Error, intente nuevamente", {
      className: "toastStyle toastStyleError",
    });

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
    <div className="formContainer">
      <form id="form">
        <input
          type="text"
          name="to_name"
          id="to_name"
          placeholder="Inserte su nombre"
          required
        />
        <input
          type="email"
          name="to_email"
          id="to_email"
          placeholder="Inserte su email"
          required
        />
        <input
          type="text"
          name="to_message"
          id="to_message"
          placeholder="¡Hola! Me comunicaba para..."
          required
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
