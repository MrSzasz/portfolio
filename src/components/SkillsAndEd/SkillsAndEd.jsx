// import "./SkillsAndEd.scss";

// const SkillsAndEd = () => {
//   return (
//     <section className="secSkills" id="secSkills">
//       <div className="topSkills">
//         <div className="skillsGlowPink"></div>
//         <div className="skillsGlowBlue"></div>
//         <div className="infoBlock">
//           <h3>Desarrollo Front-End</h3>
//           <p>
//             Desarrollo Front-End con base en ReactJS, diseño HTML y CSS puro,
//             ademas del uso de sus respectivos frameworks. Uso de JS
//           </p>
//         </div>
//       </div>
//       <div className="bottomSkills">
//         <div className="techLogoBg logoHTML">
//           <div className="techLogo">
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"
//               alt="HTML"
//             />
//           </div>
//         </div>
//         <div className="techLogoBg logoCSS">
//           <div className="techLogo">
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
//               alt="CSS"
//             />
//           </div>
//         </div>
//         <div className="techLogoBg logoBootstrap">
//           <div className="techLogo">
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"
//               alt="Bootstrap"
//             />
//           </div>
//         </div>
//         <div className="techLogoBg logoSass">
//           <div className="techLogo">
//             <img
//               src="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png"
//               alt="Sass"
//             />
//           </div>
//         </div>
//         <div className="techLogoBg logoJavaScript">
//           <div className="techLogo">
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
//               alt="JavaScript"
//             />
//           </div>
//         </div>
//         <div className="techLogoBg logoReact">
//           <div className="techLogo">
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
//               alt="ReactJS"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsAndEd;

import "./SkillsAndEd.scss";

import { BsCode } from "react-icons/bs";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

const SkillsAndEd = () => {
  return (
    <section className="secSkills" id="secSkills">
      <div className="infoSkills">
        <h2>
          <BsCode /> Front-End
        </h2>
        <p>
        Desarrollo Front-End con base en ReactJS, diseño HTML y CSS puro,
               ademas del uso de sus respectivos frameworks. Uso de JS
        </p>
      </div>
      <div className="skillsLevel">
        <div className="skillsBlock">
          <div className="skillBar">
            <div className="skillInfo">
              <h6>HTML</h6>
              <h6>80%</h6>
            </div>
            <ProgressBar now={80} />
          </div>
          <div className="skillBar">
            <div className="skillInfo">
              <h6>CSS</h6>
              <h6>75%</h6>
            </div>
            <ProgressBar now={75} />
          </div>
          <div className="skillBar">
            <div className="skillInfo">
              <h6>SASS</h6>
              <h6>65%</h6>
            </div>
            <ProgressBar now={65} />
          </div>
        </div>
        <div className="skillsBlock">
          <div className="skillBar">
            <div className="skillInfo">
              <h6>BOOTSTRAP</h6>
              <h6>80%</h6>
            </div>
            <ProgressBar now={80} />
          </div>
          <div className="skillBar">
            <div className="skillInfo">
              <h6>JAVASCRIPT</h6>
              <h6>75%</h6>
            </div>
            <ProgressBar now={75} />
          </div>
          <div className="skillBar">
            <div className="skillInfo">
              <h6>REACTJS</h6>
              <h6>70%</h6>
            </div>
            <ProgressBar now={70} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndEd;
