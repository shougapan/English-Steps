import { useState, useEffect } from "react";

const useTextToSpeech = () => {
  const [utter, setUtter] = useState(null);
  const getVoices = () => {
    return new Promise((resolve, reject) => {
      const available_voices = window.speechSynthesis.getVoices();
      if (available_voices.length !== 0) {
        resolve(available_voices);
      } else {
        reject("sad");
      }
    });
  };
  useEffect(() => {
    setUtter(new SpeechSynthesisUtterance());
  }, []);

  const textToSpeech = (e) => {
    e.stopPropagation();
    console.log(e.target.innerText);
    getVoices().then((data) => {
      let available_voices = data;
      let index = 1; // default to Edge or Firefox
      if (
        navigator.userAgent.indexOf("Chrome") != -1 &&
        navigator.userAgent.indexOf("Edg") == -1
      ) {
        index = 9; // use index 9 for Chrome
      }
      console.log(navigator.userAgent);
      utter.voice = available_voices[1];
      console.log(index);
      let filteredVoice;
      if (e.target.className === "sentence") {
        filteredVoice = this.$refs.sentence.textContent;
      } else {
        filteredVoice = e.target.innerText.replace("_", "");
      }
      utter.text = filteredVoice;
      window.speechSynthesis.speak(utter);
    });
  };

  return textToSpeech;
};

export default useTextToSpeech;
