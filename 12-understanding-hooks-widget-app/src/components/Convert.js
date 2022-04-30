import React, { useState, useEffect } from "react";
import keys from "../config/keys";
import axios from "axios";

const Convert = ({ language }) => {
  const [text, setText] = useState("");
  const [translation, setTranslation] = useState("");

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: keys.GoogleTranslateAPI,
          },
        }
      );
      setTranslation(data.data.translations[0].translatedText);
    };

    const timeoutId = setTimeout(() => {
      if (text) {
        doTranslation();
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [language, text]);

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Enter text to translate:</label>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <label className="label">Translation:</label>
        <div className="input">{translation}</div>
      </div>
    </div>
  );
};

export default Convert;
