import { useState } from "react";

const Header = ({
  setAboutClick,
  setPortfolioClick,
  setContactMeClick,
  setResumeClick,
}) => {
  const [mobileMenuClick, setMobileMenuClick] = useState(false);

  const aboutClickHandle = () => {
    setAboutClick(true);
    setPortfolioClick(false);
    setContactMeClick(false);
    setResumeClick(false);
  };
  const portfolioClickHandle = () => {
    setAboutClick(false);
    setPortfolioClick(true);
    setContactMeClick(false);
    setResumeClick(false);
  };
  const contactClickHandle = () => {
    setAboutClick(false);
    setPortfolioClick(false);
    setContactMeClick(true);
    setResumeClick(false);
  };
  const resumeClickHandle = () => {
    setAboutClick(false);
    setPortfolioClick(false);
    setContactMeClick(false);
    setResumeClick(true);
  };

  return (
    <header>
      <nav>
        <h1>
          Liyanage <span>Dev</span>
        </h1>

        <ol>
          <li onClick={aboutClickHandle}>About Me</li>
          <li onClick={portfolioClickHandle}>Portfolio</li>
          <li onClick={contactClickHandle}>Contact Me</li>
          <li onClick={resumeClickHandle}>Resume</li>
        </ol>
        <ul style={{ right: `${mobileMenuClick ? "-40px" : "-300px"}` }}>
          <div className="mobileCloseButton">
            <img
              src="/image/close-svgrepo-com.svg"
              alt="menu-close"
              onClick={() => {
                setMobileMenuClick(false);
              }}
            />
          </div>
          <li style={{ marginTop: "50px" }} onClick={aboutClickHandle}>
            About Me
          </li>
          <li onClick={portfolioClickHandle}>Portfolio</li>
          <li onClick={contactClickHandle}>Contact Me</li>
          <li onClick={resumeClickHandle}>Resume</li>
        </ul>
      </nav>
      <img
        src="/image/menu-svgrepo-com.svg"
        alt="menu"
        onClick={() => {
          setMobileMenuClick(true);
        }}
      />
    </header>
  );
};

export default Header;
