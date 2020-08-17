import React from "react";
import InputExpiration from "../../Inputs/CheckoutForm/ExpirationPlaceholder";
import Section from "../../../core/Section";
import Label from "../../../core/Label";

function ExpirationPlaceholder({setValue, settings}) {
    return (
        <Section>
            <Label>expirationPlaceholder</Label>
            <InputExpiration 
                setValue={setValue} settings={settings}/>
        </Section>
    );
}

export default ExpirationPlaceholder;