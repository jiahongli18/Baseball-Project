import React, { useState } from "react";
import axios from "axios";
import "../styles/teamlist.css";
import PlayerModalContainer from "../Components/PlayerModalContainer";

export default class PlayerList extends React.Component {
  state = {
    roster: []
  };

  componentDidMount() {
    axios.get(`https://statsapi.mlb.com/api/v1/teams/141/roster`).then(res => {
      this.setState({
        roster: res.data["roster"]
      });
    });
  }

  render() {
    return (
      <div className="body">
        <h1>
          <center>Players:</center>{" "}
        </h1>
        <ul>
          {this.state.roster.map(player => (
            <li>
              <PlayerModalContainer
                playerName={player["person"].fullName}
                playerId={player["person"].id}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
