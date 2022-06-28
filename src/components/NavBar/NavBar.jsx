import "./NavBar.scss";
import { FaCode } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav>
      <a href="#" className="logo">TOMAS LEANDRO LUGO</a>
      <div className="contactLogos">
        <a href="https://github.com/MrSzasz/portfolio" target="_blank">
        <FaCode color="#FFFADE" size="30"/>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
