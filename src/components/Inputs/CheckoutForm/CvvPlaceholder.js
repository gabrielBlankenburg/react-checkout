import React from "react";
import Input from "../../../core/Input";

const handleChange = (value, setValue, settings) => {
    setValue(
        "checkoutForm", 
        {
            ...settings, 
            ["cvvPlaceholder"]: value
        }
    );
}

function CvvPlaceholder({setValue, settings}) {
    return (
        <Input 
            type="text" 
            value={settings.cvvPlaceholder} 
            placeholder="CVV Placeholder" 
            onChange={event => {handleChange(event.target.value, setValue, settings)}} />
    );
}

export default CvvPlaceholder;