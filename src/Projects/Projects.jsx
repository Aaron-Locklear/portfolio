import EasyGrid from "../EasyGrid/EasyGrid";
import FadeImage from "../FadeImage/FadeImage";
import Header from "../Header/Header";
import ProjectDemo from "../ProjectDemo/ProjectDemo";
import TechIcon from "../TechIcons/TechIcon";
import "./Projects.css"

export default function Projects(){
  //<ProjectDemo projectTitle={} projectDescription={} projectImageURL={} projectLivePreviewURL={} projectSourceCodeURL={}/> ** black template for adding more
  return(<section className="project-section">
    <ul className="projects-holder">
    <ProjectDemo projectTitle={"HTML FORM"} projectDescription={"A demonstration of html forms and JavaScript validation"} projectImageURL={"src/assets/SignUpForm.png"} projectLivePreviewURL={"https://aaron-locklear.github.io/signUpForm/"} projectSourceCodeURL={"https://github.com/Aaron-Locklear/signUpForm"}/>
    </ul>
  </section>);

}