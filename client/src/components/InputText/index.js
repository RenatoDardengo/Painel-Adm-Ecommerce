import React from "react";
import "./styles.css"

const InputText = ({ placeholder, onChange, name, value, type }) => {

    return (
        <input className="input-text" onChange={onChange} placeholder={placeholder} name={name} value={value}
            type={type}/>
    )
}

export default InputText;