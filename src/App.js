import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  const [aboutClick, setAboutClick] = useState(false);
  const [portfolioClick, setPortfolioClick] = useState(false);
  const [contactMeClick, setContactMeClick] = useState(false);
  const [resumeClick, setResumeClick] = useState(false);

  return (
    <div>
      <Header
        setAboutClick={setAboutClick}
        setPortfolioClick={setPortfolioClick}
        setContactMeClick={setContactMeClick}
        setResumeClick={setResumeClick}
      />
      <Main
        aboutClick={aboutClick}
        portfolioClick={portfolioClick}
        contactMeClick={contactMeClick}
        resumeClick={resumeClick}
      />
    </div>
  );
}

export default App;
