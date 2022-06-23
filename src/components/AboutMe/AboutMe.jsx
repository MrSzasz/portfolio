import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <section className="secAboutMe" id="secAboutMe">
      <img src="https://source.unsplash.com/user/c_v_r" alt="" width="300px" />
      <div className="infoAboutMe">
        <h2>Tomas Lugo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ab
          iste consequatur dicta quia minus molestias temporibus quas iure,
          explicabo, velit suscipit, inventore excepturi nesciunt mollitia
          dolore soluta magnam quibusdam!
        </p>
        <button>
          <span>Descargar CV</span>
          <i></i>
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
