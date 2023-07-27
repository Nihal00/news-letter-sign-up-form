import React, { useState } from "react";
import EmailContext from "./EmailContext";

const EmailProvider = (props) => {
  const [input, setInput] = useState("");
  const [err, setErr] = useState(false);
  const [go, setGo] = useState(false);

  function check(e) {
    e.preventDefault();

    if (!input.includes("@")) {
      setErr(true);
    } else {
      setErr(false);
      setGo(true);
      
    }
  }

  function clickBtn() {
    setGo(false);
    setInput("");
  }

  return (
    <EmailContext.Provider
      value={{
        input: input,
        err: err,
        setInput: setInput,
        setError: setErr,
        check: check,
        go: go,
        clickBtn: clickBtn,
      }}
    >
      {props.children}
    </EmailContext.Provider>
  );
};

export default EmailProvider;
