import React from "react";
import InputName from "../../Inputs/CheckoutForm/NamePlaceholder";
import Section from "../../../core/Section";
import Label from "../../../core/Label";

function NamePlaceholder({setValue, settings}) {
    return (
        <Section>
            <Label>namePlaceholder</Label>
            <InputName 
                setValue={setValue} settings={settings}/>
        </Section>
    );
}

export default NamePlaceholder;