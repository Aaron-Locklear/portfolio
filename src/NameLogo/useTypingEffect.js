import { useEffect, useState } from 'react';

export default function useTypingEffect(textToType, interKeyStrokeDurationInMs, isHovered) {
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    if (!isHovered) {
      setCurrentPosition(0);
      return;
    }

    const intervalId = setInterval(() => {
      setCurrentPosition((prevPosition) => {
        if (prevPosition < textToType.length) {
          return prevPosition + 1;
        } else {
          clearInterval(intervalId);
          return prevPosition;
        }
      });
    }, interKeyStrokeDurationInMs);

    return () => clearInterval(intervalId);
  }, [interKeyStrokeDurationInMs, textToType, isHovered]);

  return textToType.substring(0, currentPosition);
}
