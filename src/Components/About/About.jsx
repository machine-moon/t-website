import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello! I&apos;m Tarek Ibrahim, a dedicated and passionate software
              developer based in Ottawa, Ontario. Currently pursuing a degree in
              Software Engineering with Co-op at Carleton University,
            </p>
            <p>
              I have a strong passion for software development, with over 5
              years of programming experience across a variety of languages and
              projects. What excites me most about software is the creativity of
              building something from behind a keyboard and the endless
              opportunities for learning and growth. I am constantly seeking to
              learn new technologies and refine my skills. Below are my most
              used languages.
            </p>
          </div>
          <div className="about-skills">
            {[
              { name: "Python", width: "100%" },
              { name: "C", width: "100%" },
              { name: "C++", width: "80%" },
              { name: "Java", width: "70%" },
              { name: "JavaScript", width: "50%" },
            ].map((skill, index) => (
              <div key={index} className="about-skill">
                <div className="skill-text">
                  <p>{skill.name}</p>
                </div>
                <hr style={{ width: skill.width }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="about-achievements">
        {[
          { count: "5+", label: "YEARS PROGRAMMING EXPERIENCE" },
          { count: "50+", label: "PROJECTS" },
          { count: "1+", label: "YEARS WORK EXPERIENCE" },
        ].map((achievement, index) => (
          <div key={index} className="about-achievement">
            <h1>{achievement.count}</h1>
            <p>{achievement.label}</p>
            {index < 2 && <hr />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
