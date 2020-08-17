import React from "react";
import InputCvv from "../../Inputs/CheckoutForm/CvvPlaceholder";
import Section from "../../../core/Section";
import Label from "../../../core/Label";

function ExpirationPlaceholder({setValue, settings}) {
    return (
        <Section>
            <Label>expirationPlaceholder</Label>
            <InputCvv 
                setValue={setValue} settings={settings}/>
        </Section>
    );
}

export default ExpirationPlaceholder;