import Footer from "./Footer";
import PortfolioUnit from "./PortfolioUnit";

const Portfolio = () => {
  const portfolioUnitGenArray = [
    {
      img: "",
      title: "mysterious-woodland",
      github: "https://github.com/Rankin47/Project-3",
    },
    {
      img: "",
      title: "Employee Traker",
      github: "https://github.com/kusalaindika1/my-employee-traker",
    },
    {
      img: "",
      title: "E-Commerce Back End",
      github: "https://github.com/kusalaindika1/My-E-commerce-Back-End-app",
    },
    {
      img: "",
      title: "Note Taker",
      github: "https://github.com/kusalaindika1/my-note-taker",
    },
    {
      img: "",
      title: "Readme Genarater",
      github: "https://github.com/kusalaindika1/my-readme-genarater",
    },
    {
      img: "",
      title: "Weather Dashboard",
      github: "https://github.com/kusalaindika1/weather-dashboard-app",
    },
  ];
  return (
    <section className="portfolio">
      <div className="portfolio__left"></div>
      <div className="portfolio__right">
        <h2>Portfolio</h2>

        <div className="portfolio__set">
          {portfolioUnitGenArray.map(({ img, title, github }, index) => (
            <PortfolioUnit
              key={index + 1}
              img={img}
              title={title}
              github={github}
            />
          ))}
        </div>

        <Footer />
      </div>
    </section>
  );
};

export default Portfolio;
