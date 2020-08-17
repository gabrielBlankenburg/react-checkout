import React, { useState, useEffect } from "react";
import CardCvv from "../components/Texts/CardCvv";
import { CardBack as CardBackDiv } from "../core/Div";

function CardBack({ data, settings, isFlipped }) {
  const [style, setStyle] = useState({
    transform: "rotateY(180deg)"
  });

  useEffect(() => {
    if (isFlipped) {
      setStyle({
        transform: "none"
      });

      return;
    }

    setStyle({
      transform: "rotateY(180deg)"
    });
  }, [isFlipped]);

  return (
    <CardBackDiv style={style}>
      <CardCvv value={data.cvv} placeholder={settings.cvvPlaceholderSymbol}/>
    </CardBackDiv>
  );
}

export default CardBack;
