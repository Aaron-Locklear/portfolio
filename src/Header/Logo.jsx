import { useState } from "react";

export default function Logo(){
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  }

  const handleMouseLeave = () => {
    setHovered(false);
  }

  return <span className={isHovered ? "hovered" : "" + " logo"}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}>{isHovered && window.innerWidth > 680 ? "Aaron Locklear." : "AL."}</span>
}