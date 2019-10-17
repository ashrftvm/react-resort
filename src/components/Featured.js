import React, { Component } from "react";
import Title from "./Title";
import { RoomContext } from "../Context";
import Loading from "./Loading";
import Room from "./Room";

export default class Featured extends Component {
  static contextType = RoomContext;
  render() {
    let { featuredRooms: rooms, loading } = this.context;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms"></Title>
        <div></div>
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
