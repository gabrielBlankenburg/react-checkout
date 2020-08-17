import React from "react";
import { CardExpirationLabel as Span } from "../../core/Span";

function CardExpirationLabel({ value, highlight }) {
  let style = {};

  if (highlight) {
    style.opacity = "1";
  }

  return <Span style={style}>{value}</Span>;
}

export default CardExpirationLabel;
