import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

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

  return (
    <div>
      <Convert language={language} />
      <Dropdown
        label="Select a language: "
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
    </div>
  );
};

export default Translate;
