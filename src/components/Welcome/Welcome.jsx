// =========================  STYLES  ========================= //

import "./Welcome.scss";

// =========================  CUSTOM IMPORTS  ========================= //

// ----------  COMPONENTS  ---------- //


const Welcome = () => {

  
  // ----------  RETURN  ---------- //

  return (
    <section className="secWelcome" id="secWelcome">
      <ul>
        <li>
          <h3 href="#" data-text="&nbsp;Tomas">
            &nbsp;Tomas&nbsp;
          </h3>
        </li>
        <li>
          <h3 href="#" data-text="&nbsp;Lugo">
            &nbsp;Lugo&nbsp;
          </h3>
        </li>
        <li>
          <h3 href="#" data-text="&nbsp;Front">
            &nbsp;Front&nbsp;
          </h3>
        </li>
        <li>
          <h3 href="#" data-text="&nbsp;End">
            &nbsp;End&nbsp;
          </h3>
        </li>
        <li>
          <h3 href="#" data-text="&nbsp;Dev">
            &nbsp;Dev&nbsp;
          </h3>
        </li>
      </ul>
    </section>
  );
};

export default Welcome;
