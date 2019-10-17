import React, { Component } from "react";
import Title from "./Title";
import { RoomContext } from "../Context";

export default class Featured extends Component {
  static contextType = RoomContext;
  render() {
    const { name, greeting } = this.context;
    return (
      <div className="featured-rooms">
        <Title title="Featured Rooms"></Title>
        <div></div>
        {greeting}&nbsp;{name}
      </div>
    );
  }
}
