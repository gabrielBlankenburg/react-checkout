import React from "react";
import Input from "../../core/Input";

const handleInput = (event, cb) => {
  cb(event.target.value);
};

const onKeyPress = (event) => {
  const re = /\d/;

  if (!re.test(event.key)) {
    event.preventDefault();
  }
};

const handleFocusBlur = (event, cb) => {
  cb("cardCvv");
};

function CardCvv({ value, setValue, setFocus, handleBlur, placeholder }) {
  return (
    <Input
      type="text"
      id="cardCvv"
      maxLength="3"
      placeholder={placeholder}
      value={value}
      onChange={(event) => handleInput(event, setValue)}
      onKeyPress={(event) => onKeyPress(event)}
      onFocus={(event) => handleFocusBlur(event, setFocus)}
      onBlur={(event) => handleFocusBlur(event, handleBlur)}
    />
  );
}

export default CardCvv;
