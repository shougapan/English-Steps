import { useEffect, useState } from "react";

export function useShuffledArray(initialArray) {
  const [shuffledArray, setShuffledArray] = useState(initialArray);
  useEffect(() => {
    function shuffleArray() {
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ];
      }
      setShuffledArray([...shuffledArray]);
    }

    return [shuffledArray, shuffleArray];
  }, [initialArray]);
}
