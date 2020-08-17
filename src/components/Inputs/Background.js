import React from "react";
import Input from "../../core/Input";

const handleChange = (value, setValue, settings) => {
    setValue(
        "background", 
        value
    );
}

function Background({setValue, settings}) {
    return (
        <Input 
            type="color" 
            value={settings.background} 
            placeholder="Background" 
            onChange={event => {handleChange(event.target.value, setValue, settings)}} />
    );
}

export default Background;