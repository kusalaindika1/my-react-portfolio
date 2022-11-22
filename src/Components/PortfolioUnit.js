const PortfolioUnit = ({ img, title, github }) => {
  return (
    <div className="portfolioUnitCard">
      <img
        src="https://cutewallpaper.org/23/web-development-wallpaper-hd/the-complete-full-stack-web-developer-roadmap-2021-dev-community.jpeg"
        alt={`${title}+project`}
      />

      <div className="portfolioUnitCardDetails">
        <a href={github} target="_blank" rel="noreferrer">
          <h4>{title}</h4>
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          <img src="/image/github-svgrepo-com.svg" alt="github" />
        </a>
      </div>
    </div>
  );
};

export default PortfolioUnit;
