import { useState } from 'react';
import './NameLogo.css';
import useTypingEffect from './useTypingEffect.js'; // Make sure this path is correct

export default function NameLogo({
  firstInitial,
  firstName,
  lastName,
  lastInitial,
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Call the useTypingEffect hook with the isHovered state
  const typedFirstName = useTypingEffect(firstName, 100, isHovered);
  const typedLastName = useTypingEffect(lastName, 100, isHovered);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseExit = () => {
    setIsHovered(false);
  };

  // Determine the text to display based on whether the element is hovered
  const displayFirstName = isHovered ? typedFirstName : firstInitial;
  const displayLastName = isHovered ? typedLastName : lastInitial;

  return (
    <p
      className="full-name"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
    >
      <span className="first-name">
        {window.innerWidth > 680 ? displayFirstName : firstInitial}
      </span>
      {isHovered && window.innerWidth > 680 ? '\u00A0' : ''}
      <span className="last-name">
        {window.innerWidth > 680 ? displayLastName : lastInitial}
      </span>
      .
    </p>
  );
}
