import React from "react";
import { CardExpiration as Span } from "../../core/Span";

const getValue = (value, placeholder) => {
  if (!value) {
    return placeholder;
  }

  let split = value.split("").map((obj, i) => {
    if (i === 1) {
      return `${obj}/`;
    }

    return obj;
  });

  return split.join("");
};

function CardExpirationValue({ value, highlight, placeholder }) {
  let style = {};

  if (highlight) {
    style.opacity = "1";
  }

  return <Span style={style}>{getValue(value, placeholder)}</Span>;
}

export default CardExpirationValue;
