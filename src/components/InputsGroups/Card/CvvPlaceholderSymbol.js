import React from "react";
import CvvPlaceholder from "../../Inputs/Card/CvvPlaceholderSymbol";
import Section from "../../../core/Section";
import Label from "../../../core/Label";

function CvvPlaceholderSymbol({setValue, settings}) {
    return (
        <Section>
            <Label>cvvPlaceholderSymbol</Label>
            <CvvPlaceholder 
                setValue={setValue} settings={settings}/>
        </Section>
    );
}

export default CvvPlaceholderSymbol;