import Footer from "./Footer";

const Resume = () => {
  return (
    <section className="resume__container">
      <div className="resume__myInfor">
        <h1>
          Liyanage <span>Kusal</span>
        </h1>
        <h3>Web Developre</h3>
        <div className="resume__myInfor_details">
          <p>Toronto, Canada</p>
          <p>
            <a href="tel:647-865-1435">647-865-1435</a>
          </p>
          <p>
            <a href="mailto: kusala123@yahoo.ca">kusala123@yahoo.ca</a>
          </p>
        </div>
      </div>

      <div className="resume__aboutMe">
        <p>
          Innovative, task-driven professional with experience in web design and
          development across diverse industries. Equipped with a record of
          success in consistently identifying and providing the technological
          needs of companies through ingenious innovation. proficient in
          devoloping databases, creating user interfaces, writing and reading
          cods, troubleshooting simple/ complex issues and implementing new
          features.
        </p>

        <a
          href="/pdf/LiyanagePortfolio.pdf"
          className="resume__download"
          download
        >
          Download My Resume
        </a>
      </div>

      <div className="resume__keySkills">
        <h2>KEY SKILLS</h2>
        <p>Adaptability</p>
        <div className="resume__keySkills_1"></div>
        <p>Strong Leadership Skills</p>
        <div className="resume__keySkills_2"></div>
        <p>HTML, HTML5, CSS</p>
        <div className="resume__keySkills_3"></div>
        <p>JavaScript</p>
        <div className="resume__keySkills_4"></div>
        <p>NodeJs, ExpressJs, ReactJs, PWA, MVC</p>
        <div className="resume__keySkills_5"></div>
        <p>MySQL, MongoDB</p>
        <div className="resume__keySkills_6"></div>
      </div>

      <div className="resume__achievements">
        <h2>ACHIEVEMENTS</h2>
        <h3>Performed in-house Trainings</h3>

        <p>I have performed team trainings on Git, Shell Scripting and Rust.</p>

        <h3>Quickly learned new landuages and technologies.</h3>

        <p>
          I have made multiple major shifts in my career and rapidly learned the
          specifics of Mobile and web development Objective C, Python, Java,
          JavaScript
        </p>
      </div>

      <div className="resume__certifications">
        <h2>CERTIFICATIONS</h2>
        <h3>University of Toronto (Web Development)</h3>
      </div>

      <div className="resume__workExperience">
        <h2>WORK EXPERIENCE</h2>
        <h3>WEB DEVELOPER (Multisoft Technologies, Toronto, Canada.)</h3>

        <ul>
          <li>
            Worked as a productive and positive team menber to design, code,
            test, report, and debug operations.
          </li>

          <li>
            Managed front-end and back-end development in the company's
            Portfolio Analyst, Employee Track, and Account Management Systems.
          </li>

          <li>
            Successfully indentified, diagnosed, and fixed website problems,
            including broken links, typographical errors, and formatting issues.
          </li>
        </ul>
      </div>

      <Footer />
    </section>
  );
};

export default Resume;
