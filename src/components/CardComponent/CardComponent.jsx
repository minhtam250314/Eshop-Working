import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { StyleNameProduct, WrapperDiscountText, WrapperPriceText, WrapperReporText } from "./style";
import { StarFilled } from '@ant-design/icons';

const CardComponent = ({ name }) => {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <StyleNameProduct>Iphone</StyleNameProduct>
            <WrapperReporText>
                <span>
                    <span>4.96 </span><StarFilled style={{ fontSize: '10px', color: 'yellow' }} />
                </span>
                <span> | Da ban 1000+</span>
            </WrapperReporText>
            <WrapperPriceText>
                1.000.000đ
                <WrapperDiscountText>
                    -10%
                </WrapperDiscountText>
            </WrapperPriceText>
        </Card>
    )
}

export default CardComponent;