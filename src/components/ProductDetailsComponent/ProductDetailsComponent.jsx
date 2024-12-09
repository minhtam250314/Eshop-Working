import { Col, Image, Row } from "antd";
import React from "react";
import imageProduct from "../../assets/images/test.png";
import imageProductSmall from "../../assets/images/imagesmall.png";
import { WrapperStyleCalImage, WrapperStyleImageSmall } from "./style";

const ProductDetailsComponent = () => {
    return (
        <Row style={{ padding: '16px', background: '#fff' }}>
            <Col span={10}>
                <Image src={imageProduct} alt="image product" preview={false} />
                <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>

                    <WrapperStyleCalImage span={4} >
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleCalImage>

                    <WrapperStyleCalImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleCalImage>

                    <WrapperStyleCalImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleCalImage>

                    <WrapperStyleCalImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleCalImage>

                    <WrapperStyleCalImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleCalImage>

                    <WrapperStyleCalImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleCalImage>
                </Row>
            </Col>
            <Col span={14}>col-14</Col>
        </Row>
    );
}

export default ProductDetailsComponent;