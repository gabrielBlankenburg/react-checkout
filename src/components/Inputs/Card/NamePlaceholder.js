import React from "react";
import Input from "../../../core/Input";

const handleChange = (value, setValue, settings) => {
    setValue(
        "card", 
        {
            ...settings, 
            ["namePlaceholder"]: value
        }
    );
}

function NamePlaceholder({setValue, settings}) {
    return (
        <Input 
            type="text" 
            value={settings.namePlaceholder} 
            placeholder="Name Placeholder" 
            onChange={event => {handleChange(event.target.value, setValue, settings)}} />
    );
}

export default NamePlaceholder;