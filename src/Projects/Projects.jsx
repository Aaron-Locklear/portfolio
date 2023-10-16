import EasyGrid from "../EasyGrid/EasyGrid";
import Header from "../Header/Header";
import TechIcon from "../TechIcons/TechIcon";

export default function Projects(){
  return (
    <EasyGrid spacing={10} minWidth={70}>
      <TechIcon label={"HTML5"} altText={"HTML Logo"} imgSource={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"}/>
    </EasyGrid>
    );
}