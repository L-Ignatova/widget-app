import React, { useState } from "react";
import { Convert, Dropdown } from ".";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("hello");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input value={text} onChange={(ev) => setText(ev.target.value)}/>
        </div>
      </div>
      <Dropdown 
        options={options} 
        selected={language} 
        onSelectedChange={setLanguage} 
        label="Select a language"
      />
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;