import React from "react";
import "../styles/header.css";
import { Image } from "semantic-ui-react";

export default class Header extends React.Component {
  render() {
    const imgLink =
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png";
    return (
      <div className="header">
        <br></br>
        <Image className="logo img" src={imgLink} fluid />
      </div>
    );
  }
}
