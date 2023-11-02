import EasyGrid from '../EasyGrid/EasyGrid';
import Header from '../Header/Header';
import LinkButton from '../LinkButton/LinkButton';
import TechIcon from '../TechIcons/TechIcon';
import TransformLink from '../TransformLink/TransformLink';
import './About.css';

export default function About() {
  return (
    <section className="about-section">
      <div className="background-container">
        <img className="user-icon" src="https://github.com/Aaron-Locklear/image-collection/blob/main/SquarePortrait.png?raw=true" />
        <div className="background-text">
          <h2 className="section-header">Background</h2>
          <p className="about-text">
            &nbsp;&nbsp;Hi, I'm Aaron, a self-motivated web developer, student of computer science and doer of jiu-jitsu.
            I'm passionate about learning new things and challenging myself to sovle problems. I have been programming since I 17
            years old and and I still have the same enthusiasm for learning now as I did then.
          </p>
          <LinkButton linkPath="." linkText="Check out my resume" />
        </div>
      </div>

      <div className="skills-container">
        <h2 className="section-header">My Skills</h2>
        <div className="grid-holder">
          <EasyGrid spacing={10} minWidth="70px" maxWidth="1fr">
            <TechIcon
              label="HTML"
              altText="HTML Logo"
              imgSource="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            />
            <TechIcon
              label="CSS"
              altText="CSS Logo"
              imgSource="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            />
            <TechIcon
              label="JavaScript"
              altText="JavaScript Logo"
              imgSource="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            />
            <TechIcon
              label="NPM"
              altText="NPM Logo"
              imgSource="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
            />
            <TechIcon
              label="Bash"
              altText="Bash Logo"
              imgSource="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
            />
            <TechIcon
              label="ESLint"
              altText="ESLint Logo"
              imgSource="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg"
            />
            <TechIcon
              label="Git"
              altText="Git Logo"
              imgSource="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            />
            <TechIcon
              label="Github"
              altText="Github Logo"
              imgSource="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            />
            <TechIcon
              label="React"
              altText="React Logo"
              imgSource="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
            <TechIcon
              label="Webpack"
              altText="Webpack Logo"
              imgSource="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
            />
            <TechIcon
              label="Ubuntu"
              altText="Ubuntu Logo"
              imgSource="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"
            />
            <TechIcon
              label="NodeJS"
              altText="NodeJS Logo"
              imgSource="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            />
            <TechIcon
              label="MongoDB"
              altText="MongoDB Logo"
              imgSource="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            />
          </EasyGrid>
        </div>

        <LinkButton linkPath="/Projects" linkText="Check out my projects" />
      </div>

      <div className="contact-info">
        <h2 className="section-header">Contact Me</h2>
        <p className="about-call-to-action">Let's build something awesome</p>
        <p className="about-email">aaronblocklear@gmail.com</p>
      </div>
    </section>
  );
}
