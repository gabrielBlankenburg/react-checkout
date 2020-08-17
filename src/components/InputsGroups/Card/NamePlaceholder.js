import React from "react";
import NamePlaceholderInput from "../../Inputs/Card/NamePlaceholder";
import Section from "../../../core/Section";
import Label from "../../../core/Label";

function NamePlaceholder({setValue, settings}) {
    return (
        <Section>
            <Label>namePlaceholder</Label>
            <NamePlaceholderInput 
                setValue={setValue} settings={settings}/>
        </Section>
    );
}

export default NamePlaceholder;