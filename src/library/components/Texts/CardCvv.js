import React from "react";
import { CardCvv as Span } from "../../core/Span";

const getValue = (value, placeholder) => {
  if (!value) {
    return "".padStart(3, placeholder);
  }

  return value;
};

function CardCvv({ value, placeholder }) {
  return <Span>{getValue(value, placeholder)}</Span>;
}

export default CardCvv;
