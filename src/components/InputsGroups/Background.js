import React from "react";
import BackgroundInput from "../Inputs/Background";
import Section from "../../core/Section";
import Label from "../../core/Label";

function Background({setValue, settings}) {
    return (
        <Section>
            <Label>background</Label>
            <BackgroundInput 
                setValue={setValue} settings={settings}/>
        </Section>
    );
}

export default Background;