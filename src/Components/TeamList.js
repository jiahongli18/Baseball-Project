import React from "react";
import axios from "axios";
import { Header, Dropdown } from "semantic-ui-react";

import "../styles/teamlist.css";
import ModalContainer from "../Components/ModalContainer";

export default class TeamList extends React.Component {
  constructor() {
    super();

    this.state = {
      teams: [],
      selectedTeam: null,
      open: false,
    }

    this.onChange = this.onChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  async componentDidMount() {
    await this.getData();
  }

  async getData() {
    const res = await axios.get(`https://statsapi.mlb.com//api/v1/teams?sportId=1`)
    const { teams } = res.data;
    this.setState({ teams });
  }

  onChange(e, data) {
    const { value } = data;
    console.log(value);
    this.setState({ selectedTeam: value, open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const { teams, selectedTeam, open } = this.state;
    const teamOptions = teams.map(team => {
      return {
        key: team.id,
        text: team.name,
        value: team,
      }
    })

    return (
      <div className="page">
        <ModalContainer
          open={open}
          close={this.handleClose}
          team={selectedTeam}
        />
        <Header>Teams: </Header>
        <Dropdown
          placeholder="Select a Team"
          fluid
          selection
          options={teamOptions}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
