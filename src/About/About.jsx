import Header from "../Header/Header";
import LinkButton from "../LinkButton/LinkButton";
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
      
    </div>
    <div className="contact"></div>
  </section>
}