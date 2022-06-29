// =========================  STYLES  ========================= //

import "./NavBar.scss";

// =========================  LIBRARIES  ========================= //

import $ from "jquery";
import { AiOutlineMenu } from "react-icons/ai";

// =========================  CUSTOM IMPORTS  ========================= //

// ----------  COMPONENTS  ---------- //


const NavBar = () => {


  // ----------  SHOW NAVBAR  ---------- //

  function navShow() {
    $("#controlContainer").animate({
      width: "toggle",
      padding: "toggle",
    });
    setTimeout(() => {
      $("#linkListContainer").fadeToggle("fast", "linear");
    }, 150);
  }


  // ----------  RETURN  ---------- //

  return (
    <nav>
      <a href="#" className="logo">
        TOMAS LEANDRO LUGO
      </a>
      <div className="contactLogos">
        <button onClick={navShow}>
          <AiOutlineMenu size={25} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
