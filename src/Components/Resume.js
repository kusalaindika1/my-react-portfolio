import Footer from "./Footer";
import ResumeProject from "./ResumeProject/ResumeProject";

const Resume = () => {
  const projetDetails = [
    {
      title: "TECH-BLOG",
      description:
        "This Model-View-Controller (MVC) Tech Blog application allows users to create an account and post blog posts. Users can also edit and delete their own posts. It also allows them to comment on posts from other users.",
      link: "https://github.com/kusalaindika1/my-tech-blog",
    },
    {
      title: "BOOK-SEARCH-ENGINE",
      description:
        "This Google Books API search engine application was originally built using the MERN stack, with a React front end, MongoDB database, and Node.js/ Express.js server and API.",
      link: "https://github.com/kusalaindika1/my-book-search-engine",
    },
    {
      title: "WEATHER-APP",
      description:
        "Weather-Dashboard is an application to find a weather condition of a given city both the current and 5-Days forecast at the same time. The server-side API used to get response data object is retrieved from the Open Weather API.",
      link: "https://github.com/kusalaindika1/weather-dashboard-app",
    },
    {
      title: "SOCIAL-NETWORK-API",
      description:
        "This is a Social-Network-Api application Build an API for a social network web application where users can share thoughts, react to friends thoughts, & create a friends list.",
      link: "https://github.com/kusalaindika1/my-social-network-nosql-api",
    },
  ];
  return (
    <section className="resume__container">
      <div className="resume__myInfor">
        <h1>
          Liyanage <span>Kusal</span>
        </h1>
        <h3>WEB DEVELOPER</h3>
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

        <a href="/pdf/LiyanageResume.pdf" className="resume__download" download>
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

      <div className="resume__projects">
        <h2>PROJECTS</h2>
        <div className="resume__projects__block">
          {projetDetails?.map(({ title, description, link }, index) => (
            <ResumeProject
              title={title}
              description={description}
              link={link}
              key={index}
            />
          ))}
        </div>
      </div>

      <div className="resume__certifications">
        <h2>EDUCATION</h2>
        <h3>Certificate in Full Stack Web Development</h3>
        <h4>University of Toronto School of Continuing Studies, Toronto, ON</h4>
        <ul>
          <li>
            <p>
              A 24-week intensive program focused on gaining technical
              programming skills in HTML5, CSS3, JavaScript, JQuery, Bootstrap,
              Node.js, MySQL, MongoDB, Express, and React
            </p>
          </li>
        </ul>
      </div>

      <div className="resume__workExperience">
        <h2>WORK EXPERIENCE</h2>
        <h3>WEB DEVELOPER (Multisoft Technologies, Toronto, Canada.)</h3>

        <ul>
          <li>
            Worked as a productive and positive team member to design, code,
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
