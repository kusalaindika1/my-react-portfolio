import Footer from "./Footer";

const About = () => {
  return (
    <section className="about">
      <div className="about__left">
        <h2>About Me</h2>
        <div className="about__image">
          <img
            src="https://philanthropicpeople.com/wp-content/uploads/2017/12/Female-Coder.jpg"
            alt="avatar"
          />
        </div>

        <p>
          Innovative, task-driven professional with experience in web design and
          development across diverse industries. Equipped with a record of
          success in consistently identifying and providing the technological
          needs of companies through ingenious innovation. proficient in
          devoloping databases, creating user interfaces, writing and reading
          cods, troubleshooting simple/ complex issues and implementing new
          features.
        </p>
        <Footer />
      </div>
      <div className="about__right"></div>
    </section>
  );
};

export default About;
