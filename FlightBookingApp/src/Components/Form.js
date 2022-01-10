import React, { useState, useEffect } from "react";
import {name, email, pswrd, termsCheckBox} from "./src/Screens/SignUp.js"

interface LoginForm {
  username: string;
  password: string;
}

export const Hello = () => {
  const [disabled, setDisabled] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (username === "" || password === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [username, password]);

  
};
export default Hello;

