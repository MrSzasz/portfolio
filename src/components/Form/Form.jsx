import "./Form.scss";

const Form = () => {
  return (
    <div className="formContainer">
      <form>
        <input type="text" placeholder="Inserte su nombre" />
        <input type="email" placeholder="Inserte su email" />
        <input type="text" placeholder="¡Hola! Me comunicaba para..." />
        <button>
          <span>Enviar</span>
          <i></i>
        </button>
      </form>
    </div>
  );
};

export default Form;
