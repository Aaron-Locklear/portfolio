import { useEffect, useState } from "react";
import "./NameLogo.css";
import ResetableTypingEffect from "./ResetableTypingEffect.js";

export default function NameLogo({ firstInitial, firstName, lastName, lastInitial }) {
  const [isHovered, setIsHovered] = useState(false);
  const [resetText, setResetText] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setResetText(false);
  };

  const handleMouseExit = () => {
    setIsHovered(false);
    setResetText(true);
  };

  const typedFirstName = ResetableTypingEffect(firstName, 100, resetText);
  const typedLastName = ResetableTypingEffect(lastName, 100, resetText);

  const currentFirstNameText = isHovered ? typedFirstName : firstInitial;
  const currentLastNameText = isHovered ? typedLastName : lastInitial;

  return (
    <p className="full-name"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}>
      <span className="first-name">{window.innerWidth > 680 ? currentFirstNameText : firstInitial}</span>
      {isHovered && window.innerWidth > 680 ? "\u00A0" : ""}
      <span className="last-name">{window.innerWidth > 680 ? currentLastNameText : lastInitial}</span>
      .
    </p>
  );
}
