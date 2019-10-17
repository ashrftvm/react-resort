import React from "react";
import { Link } from "react-router-dom";

export default function Room({ room }) {
  const defaultImg = "https://via.placeholder.com/1280x720.png";
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt={slug} />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
    </article>
  );
}
