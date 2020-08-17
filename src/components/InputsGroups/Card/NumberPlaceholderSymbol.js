import React from "react";
import NumberPlaceholder from "../../Inputs/Card/NumberPlaceholderSymbol";
import Section from "../../../core/Section";
import Label from "../../../core/Label";

function NumberPlaceholderSymbol({setValue, settings}) {
    return (
        <Section>
            <Label>numberPlaceholderSymbol</Label>
            <NumberPlaceholder 
                setValue={setValue} settings={settings}/>
        </Section>
    );
}

export default NumberPlaceholderSymbol;