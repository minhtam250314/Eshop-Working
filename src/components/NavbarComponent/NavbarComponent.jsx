import React from "react";
import { WrapperContent, WrapperLableText, WrapperTextValue } from "./style";
import { Checkbox } from "antd";


const NavbarComponent = () => {
    const onChange = {}
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option) => {
                    return (
                        <WrapperTextValue>{option}</WrapperTextValue>
                    )
                })
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column' }} onChange={onChange}>
                        {options.map((option) => {
                            return (
                                <Checkbox value={option.value}>{option.label}</Checkbox>
                            )
                        })}
                        <Checkbox value="B">B</Checkbox>
                    </Checkbox.Group>
                )
            default:
                return {}
        }
    }

    return (
        <div>
            <WrapperLableText>Lable</WrapperLableText>
            <WrapperContent>
                {renderContent('text', ['Tu Lanh', 'TV', 'MayGiat'])}
                {renderContent('checkbox', [
                    { value: 'a', label: 'A' },
                    { value: 'b', label: 'B' },
                ])}
            </WrapperContent>
        </div>
    )
}

export default NavbarComponent;