import './About.css'
const About = () => {
    return (

        <div id='about' className='about'>
            <div className='about-title'>
                <h1>About Me</h1>
            </div>
            <div className='about-sections'>
                <div className='about-right'>
                    <div className='about-para'>
                        <p>
                            Hello! I&apos;m Tarek Ibrahim, a dedicated and passionate software developer based in Ottawa, Ontario.
                            Currently pursuing a degree in Software Engineering with Co-op at Carleton University,
                        </p>
                        <p>
                            I have a strong passion for software development, with over 5 years of programming experience across a variety of languages and projects. What excites me most about software is the creativity of building something from behind a keyboard and the endless opportunities for learning and growth. I am constantly seeking to learn new technologies and refine my skills. Below are my most used languages.
                        </p>
                    </div>
                    <div className='about-skills'>
                        <div className='about-skill'>
                            <div className='skill-text'><p>Python</p></div>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className='about-skill'>
                            <div className='skill-text'><p>C</p></div>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className='about-skill'>
                            <div className='skill-text'><p>C++</p></div>
                            <hr style={{ width: "80%" }} />
                        </div>
                        <div className='about-skill'>
                            <div className='skill-text'><p>Java</p></div>
                            <hr style={{ width: "70%" }} />
                        </div>
                        <div className='about-skill'>
                            <div className='skill-text'><p>JavaScript</p></div>
                            <hr style={{ width: "50%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-acheivments">
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>YEARS PROGRAMMING EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>50+</h1>
                    <p>PROJECTS</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>YEARS WORK EXPERIENCE</p>
                </div>
            </div>
        </div>
    )
}

export default About