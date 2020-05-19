import React from "react";
import TeamList from "./Components/TeamList";
import Header from "./Components/Header";
import "./index.css";

function App() {
  return (
    <div
      style={{
        backgroundColor: "skyblue"
      }}
      className="App"
    >
      <Header />
      <TeamList />
    </div>
  );
}

export default App;
