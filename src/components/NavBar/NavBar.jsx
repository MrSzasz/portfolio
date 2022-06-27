import "./NavBar.scss";
import { FaCode } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav>
      <div className="logo">TOMAS LEANDRO LUGO</div>
      <div className="contactLogos">
        <a href="https://github.com/MrSzasz/portfolio" target="_blank">
        <FaCode color="#FFFADE" size="30"/>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
