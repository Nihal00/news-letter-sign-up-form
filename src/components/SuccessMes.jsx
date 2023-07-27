import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./SuccessMes.css";
import EmailContext from "../context/EmailContext";

const SuccessMes = () => {
  const { input, clickBtn } = useContext(EmailContext);

  return (
    <div className="success">
      <div>
        <FontAwesomeIcon className="success-icon" icon={faCircleCheck} />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirm email has sent to <b>{input}</b> Please open it and click
          the button inside to confirm your subscription
        </p>
        <button className="btn" onClick={clickBtn}>
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default SuccessMes;
