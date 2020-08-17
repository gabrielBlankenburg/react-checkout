import React from "react";
import PlaceholderInput from "../../Inputs/Card/ExpirationLabelPlaceholder";
import Section from "../../../core/Section";
import Label from "../../../core/Label";

function ExpirationLabelPlaceholder({setValue, settings}) {
    return (
        <Section>
            <Label>expirationLabelPlaceholder</Label>
            <PlaceholderInput 
                setValue={setValue} settings={settings}/>
        </Section>
    );
}

export default ExpirationLabelPlaceholder;