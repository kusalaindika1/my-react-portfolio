const ResumeProject = ({ title, description, link }) => {
  return (
    <div className="resumeProject__container">
      <a href={link} target="_blank" rel="noreferrer">
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
};

export default ResumeProject;
