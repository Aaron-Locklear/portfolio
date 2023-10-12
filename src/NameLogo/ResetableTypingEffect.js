import { useEffect, useRef, useState } from "react";

export default function useTypingEffect(textToType, interKeyStrokeDurationInMs, shouldReset){
  const [currentPosition, setCurrentPosition] = useState(0);
  
  useEffect(() => {
    if (shouldReset) {
      setCurrentPosition(0);
    }
  }, [shouldReset]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPosition((value) => value + 1);
      if(currentPosition >= textToType.length){
        clearInterval(intervalId);
      }
    }, interKeyStrokeDurationInMs);

    return () => clearInterval(intervalId);
  },[interKeyStrokeDurationInMs, textToType, currentPosition]);

  return textToType.substring(0, currentPosition);
}
