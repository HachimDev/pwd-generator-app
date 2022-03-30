import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

const App = () => {
  const [password, setPassword] = useState("**********************");

  const generatePassword = () => {
    const randomPassword =
      Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);

    setPassword(randomPassword);

    navigator.clipboard
      .writeText(randomPassword)
      .then(() => "Password copied to your clipboard")
      .catch(() => "Error copying password to clipboard")
      .then(toast);
  };

  return (
    <div className="background">
      <h1 className="heading">Generate a random password</h1>
      <div className="wrapper">
        <div className="password">{password}</div>
        <button className="generate-password" onClick={generatePassword}>
          Generate password
        </button>
      </div>

      {/* adding toast container so that we can showcase the message */}
      <ToastContainer />
    </div>
  );
};

export default App;
