import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";

const Main = ({ aboutClick, portfolioClick, contactMeClick, resumeClick }) => {
  return (
    <main>
      {aboutClick ? (
        <About />
      ) : portfolioClick ? (
        <Portfolio />
      ) : contactMeClick ? (
        <Contact />
      ) : resumeClick ? (
        <Resume />
      ) : (
        <About />
      )}
    </main>
  );
};

export default Main;
