import React, { useContext } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import SuccessMes from "./components/SuccessMes";
import EmailContext from "./context/EmailContext";

const App = () => {
  const { go } = useContext(EmailContext);

  return <div className="App">{go ? <SuccessMes /> : <MainPage />}</div>;
};

export default App;
