import React from "react";
import axios from "axios";

import { Dropdown, Header } from "semantic-ui-react";

import "../styles/teamlist.css";

export default class PlayerList extends React.Component {
  constructor() {
    super();

    this.state = {
      roster: []
    }
  }

  async componentDidMount() {
    await this.getData();
  }

  async getData() {
    const { id } = this.props;
    const res = await axios.get(`https://statsapi.mlb.com/api/v1/teams/${id}/roster`);
    const { roster } = res.data;
    this.setState({ roster });
  }

  render() {
    const rosterOptions = [];
    // Header
    // Dropdown
    // div that is only shown if something is selected in the dropdown
    return (
      <div className="body">
        <Header>Players:</Header>
      </div>
    );
  }
}
