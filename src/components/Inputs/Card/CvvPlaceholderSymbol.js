import React from "react";
import Input from "../../../core/Input";

const handleChange = (value, setValue, settings) => {
    setValue(
        "card", 
        {
            ...settings, 
            ["cvvPlaceholderSymbol"]: value
        }
    );
}

function CvvPlaceholder({setValue, settings}) {
    return (
        <Input 
            type="text" 
            value={settings.cvvPlaceholderSymbol} 
            placeholder="Cvv Placeholder" 
            onChange={event => {handleChange(event.target.value, setValue, settings)}} />
    );
}

export default CvvPlaceholder;