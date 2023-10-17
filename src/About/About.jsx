import EasyGrid from "../EasyGrid/EasyGrid";
import Header from "../Header/Header";
import LinkButton from "../LinkButton/LinkButton";
import TechIcon from "../TechIcons/TechIcon";
import TransformLink from "../TransformLink/TransformLink";
import "./About.css"

export default function About(){
  
  return <section className="about-section">
    <div className="background">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bower/bower-original-wordmark.svg" />
      <div className="background-text">
        <h1 className="about-header">BackGround</h1>
        <p className="about-text">&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <LinkButton linkPath={"."} linkText={"Check out my resume"}/>
      </div>
    </div>

    <div className="skills">
      <h1>My Skills</h1>
      <EasyGrid spacing={10} minWidth={"70px"} maxWidth={"1fr"}>
        <TechIcon label={"HTML"} altText={"HTML Logo"} imgSource={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"}/>
        <TechIcon label={"CSS"} altText={"CSS Logo"} imgSource={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"}/>
        <TechIcon label={"JavaScript"} altText={"JavaScript Logo"} imgSource={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"}/>
        <TechIcon label={"NPM"} altText={"NPM Logo"} imgSource={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"}/>
        <TechIcon label={"Bash"} altText={"Bash Logo"} imgSource={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"}/>
        <TechIcon label={"ESLint"} altText={"ESLint Logo"} imgSource={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg"}/>
        <TechIcon label={"Git"} altText={"Git Logo"} imgSource={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"}/>
        <TechIcon label={"Github"} altText={"Github Logo"} imgSource={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"}/>
        <TechIcon label={"React"} altText={"React Logo"} imgSource={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"}/>
        <TechIcon label={"Webpack"} altText={"Webpack Logo"} imgSource={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"}/>
        <TechIcon label={"Ubuntu"} altText={"Ubuntu Logo"} imgSource={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"}/>
      </EasyGrid>
    </div>

    <div className="contact">
      <h1>Contact Me</h1>
      <p>aaronblocklear@gmail.com</p>
    </div>
  </section>
}