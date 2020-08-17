import React from "react";
import Input from "../../../core/Input";

const handleChange = (value, setValue, settings) => {
    setValue(
        "checkoutForm", 
        {
            ...settings, 
            ["expirationPlaceholder"]: value
        }
    );
}

function ExpirationPlaceholder({setValue, settings}) {
    return (
        <Input 
            type="text" 
            value={settings.expirationPlaceholder} 
            placeholder="Name Placeholder" 
            onChange={event => {handleChange(event.target.value, setValue, settings)}} />
    );
}

export default ExpirationPlaceholder;