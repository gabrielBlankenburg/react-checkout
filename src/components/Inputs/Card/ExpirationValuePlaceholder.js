import React from "react";
import Input from "../../../core/Input";

const handleChange = (value, setValue, settings) => {
    setValue(
        "card", 
        {
            ...settings, 
            ["expirationValuePlaceholder"]: value
        }
    );
}

function ExpirationValuePlaceholder({setValue, settings}) {
    return (
        <Input 
            type="text" 
            value={settings.expirationValuePlaceholder} 
            placeholder="Expiration Value Placeholder" 
            onChange={event => {handleChange(event.target.value, setValue, settings)}} />
    );
}

export default ExpirationValuePlaceholder;