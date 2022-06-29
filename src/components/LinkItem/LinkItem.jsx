// =========================  STYLES  ========================= //

import "./LinkItem.scss";


const LinkItem = ({ fonClick, href, content }) => {
  
    // ----------  RETURN  ---------- //
  
    return (
    <li className="controlPosition">
      <a onClick={()=>fonClick()} href={href}>
        {content}
      </a>
    </li>
  );
};

export default LinkItem;
