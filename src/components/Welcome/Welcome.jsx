import WelcomeLogo from "../WelcomeLogo/WelcomeLogo";
import "./Welcome.scss";

const Welcome = () => {
  return (
    <section className="secWelcome" id="secWelcome">
      <h1>= BIENVENIDO =</h1>
      <WelcomeLogo />
    </section>
  );
};

export default Welcome;
