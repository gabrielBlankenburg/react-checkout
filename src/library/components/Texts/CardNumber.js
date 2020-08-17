import React from "react";
import { CardNumber as Span } from "../../core/Span";

const getValue = (value, placeholder) => {
  let str = value;

  if (!value) {
    str = "".padStart(16, placeholder);
  }

  let split = str.split("").map((obj, i) => {
    if ((i + 1) % 4 === 0) {
      return `${obj} `;
    }

    return obj;
  });

  return split.join("");
};

function CardNumber({ value, highlight, placeholder }) {
  let style = {};

  if (highlight) {
    style.opacity = "1";
  }

  return <Span style={style}>{getValue(value, placeholder)}</Span>;
}

export default CardNumber;
