import React, { useState } from "react";
import axios from "axios";
import "../styles/teamlist.css";
import ModalContainer from "../Components/ModalContainer";

export default class TeamList extends React.Component {
  state = {
    teams: []
  };

  componentDidMount() {
    axios.get(`https://statsapi.mlb.com//api/v1/teams?sportId=1`).then(res => {
      this.setState({
        teams: res.data["teams"]
      });
    });
  }

  //   getUser = id => {
  //     axios
  //       .get(`https://statsapi.mlb.com/api/v1/teams/${id}/roster`)
  //       .then(res => {
  //         this.setState({
  //             roster: res.data["roster"]
  //         });
  //       });
  //   };

  render() {
    return (
      <div className="body">
        <h1>
          <center>Teams: </center>
        </h1>
        <ul>
          {this.state.teams.map(team => (
            <li>
              <ModalContainer teamName={team.name} teamId={team.id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
