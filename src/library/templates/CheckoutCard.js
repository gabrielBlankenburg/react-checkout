import React, { useState, useEffect } from "react";
import CardFront from "../pieces/CardFront";
import CardBack from "../pieces/CardBack";
import CardForm from "../pieces/CardForm";
import Div, { ReactCheckoutWrapper, CardScene, CardObject } from "../core/Div";
import { getSetters, getFormData, getSettings } from "../utils";

function CheckoutCard({ data, settings }) {
  const [formData, setFormData] = useState(getFormData(data));
  const [currentFocus, setCurrentFocus] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);

  const handleBlur = (field) => {
    if (field === "cardCvv") {
      setIsFlipped(false);
    }

    if (field === currentFocus) {
      setCurrentFocus("");
    }
  };

  useEffect(() => {
    if (currentFocus === "cardCvv") {
      setIsFlipped(true);
      return;
    }
    setIsFlipped(false);
  }, [currentFocus]);

  const setters = getSetters(formData, setFormData);
  const appSettings = getSettings(settings);

  return (
    <ReactCheckoutWrapper
      background={appSettings.background}
      padding={appSettings.padding}
    >
      <Div>
        <CardScene>
          <CardObject>
            <CardFront
              isFlipped={isFlipped}
              currentFocus={currentFocus}
              data={formData.card}
              settings={appSettings.card}
            />
            <CardBack
              isFlipped={isFlipped}
              data={formData.card}
              settings={appSettings.card}
            />
          </CardObject>
        </CardScene>
      </Div>
      <CardForm
        setFocus={setCurrentFocus}
        handleBlur={handleBlur}
        data={formData}
        settings={appSettings.checkoutForm}
        setters={setters.card}
      />
    </ReactCheckoutWrapper>
  );
}

export default CheckoutCard;
