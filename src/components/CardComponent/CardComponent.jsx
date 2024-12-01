import React from "react";
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReporText } from "./style";
import { StarFilled } from '@ant-design/icons';
import logo from '../../assets/images/logo.png';

const CardComponent = ({ name }) => {
    return (
        <WrapperCardStyle
            hoverable
            headStyle={{ width: '200px', height: '200px' }}
            style={{ width: 200 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <img
                src={logo}
                style={{
                    width: '68px', height: '14px', position: 'absolute', top: '-1px', left: '-1px',
                    borderRadius: '3px'
                }}
            />


            <StyleNameProduct>Iphone</StyleNameProduct>
            <WrapperReporText>
                <span style={{ marginRight: '4px' }}>
                    <span>4.96 </span><StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                </span>
                <span> | Da ban 1000+</span>
            </WrapperReporText>
            <WrapperPriceText>
                1.000.000đ
                <WrapperDiscountText>
                    -10%
                </WrapperDiscountText>
            </WrapperPriceText>
        </WrapperCardStyle>
    )
}

export default CardComponent;