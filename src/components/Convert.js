import React, { useState, useEffect } from "react";
import { getTranslationResults } from "../utils/apis";

const Convert = ({language, text}) => {
  const [translation, setTranslation] = useState("");

  useEffect(() => {
    const translate = async () => {
      const {data} = await getTranslationResults(text, language.value);
      
      setTranslation(data.data.translations[0].translatedText);
    };

    const timeoutId = setTimeout(() => {
      translate();
    }, 500);

    return (() => {
      clearTimeout(timeoutId);
    });
  }, [language, text]);

  return (
    <div>
      <h4>Output</h4>
      <div >{translation}</div>
    </div>
  );
};

export default Convert;
