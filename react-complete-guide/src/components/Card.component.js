/* eslint-disable react/prop-types */
import React from 'react';
import "./card.css";

function CardComponent(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}
export default CardComponent;
