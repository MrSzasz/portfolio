import "./SkillsAndEd.scss";

const SkillsAndEd = () => {
  return (
    <section className="secSkills" id="secSkills">
      <div className="topSkills">
        <div className="skillsGlowPink"></div>
        <div className="skillsGlowBlue"></div>
        <div className="infoBlock">
          <h3>Desarrollo Front-End</h3>
          <p>
            Desarrollo Front-End con base en ReactJS, diseño HTML y CSS puro,
            ademas del uso de sus respectivos frameworks. Uso de JS
          </p>
        </div>
      </div>
      <div className="bottomSkills">
        <div className="techLogoBg logoHTML">
          <div className="techLogo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"
              alt="HTML"
            />
          </div>
        </div>
        <div className="techLogoBg logoCSS">
          <div className="techLogo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
              alt="CSS"
            />
          </div>
        </div>
        <div className="techLogoBg logoBootstrap">
          <div className="techLogo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"
              alt="Bootstrap"
            />
          </div>
        </div>
        <div className="techLogoBg logoSass">
          <div className="techLogo">
            <img
              src="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png"
              alt="Sass"
            />
          </div>
        </div>
        <div className="techLogoBg logoJavaScript">
          <div className="techLogo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
              alt="JavaScript"
            />
          </div>
        </div>
        <div className="techLogoBg logoReact">
          <div className="techLogo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
              alt="ReactJS"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndEd;
