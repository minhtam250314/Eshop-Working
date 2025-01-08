import { Input } from "antd";
import React, { useState } from "react";
import { WeapperInputStyle } from "./style";

const InputForm = (props) => {
    const [valueInput, setValueInput] = useState('');
    const { placeholder = 'Nhập text', ...rests } = props;
    return (
        <>
            <WeapperInputStyle placeholder={placeholder} valueInput={valueInput} {...rests} >
            </WeapperInputStyle>
        </>
    );
}

export default InputForm;