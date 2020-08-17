import React from "react";
import InputNumber from "../../Inputs/CheckoutForm/NumberPlaceholder";
import Section from "../../../core/Section";
import Label from "../../../core/Label";

function NumberPlaceholder({setValue, settings}) {
    return (
        <Section>
            <Label>numberPlaceholder</Label>
            <InputNumber 
                setValue={setValue} settings={settings}/>
        </Section>
    );
}

export default NumberPlaceholder;