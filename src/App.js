import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

export default function App() {
  const [userInput, setUserInput] = useState(`# Lets type some markdown!`);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="app">
      <textarea value={userInput} onChange={handleChange} />
      <ReactMarkdown className="preview" children={userInput} />
    </div>
  );
}
