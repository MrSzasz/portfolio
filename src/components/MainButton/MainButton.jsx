// =========================  STYLES  ========================= //

import "./MainButton.scss";

const MainButton = ({ text, link }) => {
  return (
    // ----------  RETURN  ---------- //
    <>
      <a className="btn-main" href={link} target="_blank">
        <span>{text}</span>
        <i></i>
      </a>
    </>
  );
};

export default MainButton;
