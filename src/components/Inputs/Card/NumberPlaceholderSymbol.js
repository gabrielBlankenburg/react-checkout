import React from "react";
import Input from "../../../core/Input";

const handleChange = (value, setValue, settings) => {
    setValue(
        "card", 
        {
            ...settings, 
            ["numberPlaceholderSymbol"]: value
        }
    );
}

function NumberPlaceholderSymbol({setValue, settings}) {
    return (
        <Input 
            type="text" 
            value={settings.numberPlaceholderSymbol} 
            placeholder="Number Symbol" 
            onChange={event => {handleChange(event.target.value, setValue, settings)}} />
    );
}

export default NumberPlaceholderSymbol;