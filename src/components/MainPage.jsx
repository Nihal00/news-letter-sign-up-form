import React, { useContext, useState } from "react";
import "./MainPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import image from "../assets/pexels-vlad-bagacian-1059042.jpg";
import EmailContext from "../context/EmailContext";

const MainPage = () => {
  const { input, setInput, err, check } = useContext(EmailContext);

  return (
    <div className="main">
      <div className="content">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>

        <ul>
          <li>
            <FontAwesomeIcon className="icon" icon={faCircleCheck} /> Product
            discovery and building what matters
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faCircleCheck} /> Measuring
            to ensure updates are a success
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faCircleCheck} /> And much
            more!
          </li>
        </ul>

        <form onSubmit={check}>
          <div className="error">
            <label className="label" htmlFor="email">
              Email address*
            </label>
            {err ? <p>Valid email required</p> : " "}
          </div>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email@company.com"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="btn">
            Subsrcible to monthly newsletter
          </button>
        </form>
      </div>
      <div className="img">
        <img src={image} alt="testimoni" className="logo" />
      </div>
    </div>
  );
};

export default MainPage;
