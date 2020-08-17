import React, { useState, useEffect } from "react";
import CardNumber from "../components/Texts/CardNumber";
import CardName from "../components/Texts/CardName";
import CardExpirationLabel from "../components/Texts/CardExpirationLabel";
import CardExpirationValue from "../components/Texts/CardExpirationValue";
import { CardFront as CardFrontDiv, ExpirationWrapper } from "../core/Div";

function CardFront({ data, settings, currentFocus, isFlipped }) {
  const [style, setStyle] = useState({
    transform: "none"
  });

  useEffect(() => {
    if (isFlipped) {
      setStyle({
        transform: "rotateY(-180deg)"
      });

      return;
    }

    setStyle({
      transform: "none"
    });
  }, [isFlipped]);

  return (
    <CardFrontDiv style={style}>
      <CardNumber
        value={data.number}
        highlight={currentFocus === "cardNumber"}
        placeholder={settings.numberPlaceholderSymbol}
      />
      <CardName
        value={data.name}
        highlight={currentFocus === "cardName"}
        placeholder={settings.namePlaceholder}
      />
      <ExpirationWrapper>
        <CardExpirationLabel
          value={settings.expirationLabelPlaceholder}
          highlight={currentFocus === "cardExpiration"}
        />
        <CardExpirationValue
          value={data.expiration}
          highlight={currentFocus === "cardExpiration"}
          placeholder={settings.expirationValuePlaceholder}
        />
      </ExpirationWrapper>
    </CardFrontDiv>
  );
}

export default CardFront;
