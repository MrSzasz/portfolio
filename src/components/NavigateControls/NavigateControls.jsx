// =========================  STYLES  ========================= //

import "./NavigateControls.scss";

// =========================  LIBRARIES  ========================= //

import $ from "jquery";
import { AiOutlineClose } from "react-icons/ai";
import { FaCode } from "react-icons/fa";

// =========================  CUSTOM IMPORTS  ========================= //

// ----------  COMPONENTS  ---------- //


const NavigateControls = () => {


  // ----------  SHOW NAVBAR  ---------- //

  function navShow() {
    $("#controlContainer").animate({
      width: "toggle",
      padding: "toggle",
    });
    $("#linkListContainer").fadeToggle("fast", "linear");
  }

  
  // ----------  RETURN  ---------- //

  return (
    <div id="controlContainer" className="controlContainer">
      <ul id="linkListContainer" className="linkListContainer">
        <li className="controlPosition">
          <button onClick={navShow}>
            <AiOutlineClose size={25} />
          </button>
        </li>
        <li className="controlPosition">
          <a id="a" onClick={navShow} href="#">
            INICIO
          </a>
        </li>
        <li className="controlPosition">
          <a onClick={navShow} href="#secAboutMe">
            SOBRE MI
          </a>
        </li>
        <li className="controlPosition">
          <a onClick={navShow} href="#secSkills">
            SKILLS
          </a>
        </li>
        <li className="controlPosition">
          <a onClick={navShow} href="#secWorks">
            PROYECTOS
          </a>
        </li>
        <li className="controlPosition">
          <a onClick={navShow} href="#secContact">
            CONTACTO
          </a>
        </li>
        <li className="controlPosition">
          <a
            onClick={navShow}
            href="https://github.com/MrSzasz/portfolio"
            target="_blank"
          >
            <FaCode color="#FFFADE" size="30" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavigateControls;
