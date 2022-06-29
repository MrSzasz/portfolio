// =========================  STYLES  ========================= //

import "./FormInput.scss";


const FormInput = ({ type, inputName, placeholder }) => {
  
    // ----------  RETURN  ---------- //

  return (
    <input
      type={type}
      name={inputName}
      id={inputName}
      placeholder={placeholder}
      required
    />
  );
};

export default FormInput;
