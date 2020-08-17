import React from "react";
import PlaceholderInput from "../../Inputs/Card/ExpirationValuePlaceholder";
import Section from "../../../core/Section";
import Label from "../../../core/Label";

function ExpirationValuePlaceholder({setValue, settings}) {
    return (
        <Section>
            <Label>expirationValuePlaceholder</Label>
            <PlaceholderInput 
                setValue={setValue} settings={settings}/>
        </Section>
    );
}

export default ExpirationValuePlaceholder;