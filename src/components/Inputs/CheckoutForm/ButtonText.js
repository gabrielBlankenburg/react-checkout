import React from "react";
import Input from "../../../core/Input";

const handleChange = (value, setValue, settings) => {
    setValue(
        "checkoutForm", 
        {
            ...settings, 
            ["buttonText"]: value
        }
    );
}

function ButtonText({setValue, settings}) {
    return (
        <Input 
            type="text" 
            value={settings.buttonText} 
            placeholder="Button Text" 
            onChange={event => {handleChange(event.target.value, setValue, settings)}} />
    );
}

export default ButtonText;