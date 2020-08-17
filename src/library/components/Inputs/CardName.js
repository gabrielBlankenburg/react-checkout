import React from "react";
import Input from "../../core/Input";

const handleInput = (event, cb) => {
  cb(event.target.value);
};

const onKeyPress = (event) => {
  const re = /[a-zA-Z ]+/g;

  if (!re.test(event.key)) {
    event.preventDefault();
  }
};

const handleFocusBlur = (event, cb) => {
  cb("cardName");
};

function CardName({ value, setValue, setFocus, handleBlur, placeholder }) {
  return (
    <Input
      type="text"
      id="cardName"
      maxLength="50"
      placeholder={placeholder}
      value={value}
      onChange={(event) => handleInput(event, setValue)}
      onKeyPress={(event) => onKeyPress(event)}
      onFocus={(event) => handleFocusBlur(event, setFocus)}
      onBlur={(event) => handleFocusBlur(event, handleBlur)}
    />
  );
}

export default CardName;
