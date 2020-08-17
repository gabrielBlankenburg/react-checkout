import React from "react";
import Input from "../../../core/Input";

const handleChange = (value, setValue, settings) => {
    setValue(
        "card", 
        {
            ...settings, 
            ["expirationLabelPlaceholder"]: value
        }
    );
}

function ExpirationLabelPlaceholder({setValue, settings}) {
    return (
        <Input 
            type="text" 
            value={settings.expirationLabelPlaceholder} 
            placeholder="Expiration Label Placeholder" 
            onChange={event => {handleChange(event.target.value, setValue, settings)}} />
    );
}

export default ExpirationLabelPlaceholder;