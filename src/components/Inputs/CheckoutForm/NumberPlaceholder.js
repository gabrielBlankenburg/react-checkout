import React from "react";
import Input from "../../../core/Input";

const handleChange = (value, setValue, settings) => {
    setValue(
        "checkoutForm", 
        {
            ...settings, 
            ["numberPlaceholder"]: value
        }
    );
}

function NumberPlaceholder({setValue, settings}) {
    return (
        <Input 
            type="text" 
            value={settings.numberPlaceholder} 
            placeholder="Number Placeholder" 
            onChange={event => {handleChange(event.target.value, setValue, settings)}} />
    );
}

export default NumberPlaceholder;