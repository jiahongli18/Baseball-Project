import React from "react";
import TeamList from "./Components/TeamList";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div
      style={{
        backgroundColor: "skyblue"
      }}
      className="App"
    >
      <Header></Header>
      <TeamList></TeamList>
    </div>
  );
}

export default App;
