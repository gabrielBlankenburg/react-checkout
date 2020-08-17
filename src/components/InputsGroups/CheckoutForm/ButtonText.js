import React from "react";
import ButtonTextInput from "../../Inputs/CheckoutForm/ButtonText";
import Section from "../../../core/Section";
import Label from "../../../core/Label";

function ExpirationPlaceholder({setValue, settings}) {
    return (
        <Section>
            <Label>buttonText</Label>
            <ButtonTextInput 
                setValue={setValue} settings={settings}/>
        </Section>
    );
}

export default ExpirationPlaceholder;