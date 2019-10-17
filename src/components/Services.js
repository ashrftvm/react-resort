import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import { isTemplateElement } from "@babel/types";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free Cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, debitis."
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, debitis."
      },
      {
        icon: <FaShuttleVan />,
        title: "free Shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, debitis."
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, debitis."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Our Services"></Title>
        <div className="services-center">
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
