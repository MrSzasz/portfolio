// =========================  STYLES  ========================= //

import "./NavigateControls.scss";

// =========================  LIBRARIES  ========================= //

import $ from "jquery";
import { AiOutlineClose } from "react-icons/ai";
import { FaCode } from "react-icons/fa";

// =========================  CUSTOM IMPORTS  ========================= //

// ----------  COMPONENTS  ---------- //

import LinkItem from "../LinkItem/LinkItem";


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
        <LinkItem fonClick={navShow} href="#" content="INICIO" />
        <LinkItem fonClick={navShow} href="#secAboutMe" content="SOBRE MI" />
        <LinkItem fonClick={navShow} href="#secSkills" content="SKILLS" />
        <LinkItem fonClick={navShow} href="#secWorks" content="PROYECTOS" />
        <LinkItem fonClick={navShow} href="#secContact" content="CONTACTO" />
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
