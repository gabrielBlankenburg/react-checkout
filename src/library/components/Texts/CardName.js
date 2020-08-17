import React from "react";
import { CardName as Span } from "../../core/Span";

const getValue = (value, placeholder) => {
  if (!value) {
    return placeholder;
  }

  if (value.length > 25) {
    return value.substring(0, 25) + "...";
  }

  return value;
};

function CardName({ value, highlight, placeholder }) {
  let style = {};

  if (highlight) {
    style.opacity = "1";
  }

  return <Span style={style}>{getValue(value, placeholder)}</Span>;
}

export default CardName;
