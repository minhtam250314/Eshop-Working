import React from 'react';
import TypeProduct from '../../components/TypeProduct/TypeProduct';
import { WrapperTypeProduct } from './style';

const HomePage = () => {
    const arr = ['TV', 'Tu Lanh', 'Laptop']
    return (
        <div style={{ padding: '0 120px', fontSize: 15 }}>
            <WrapperTypeProduct>
                {arr.map((item) => {
                    return (
                        <TypeProduct name={item} key={item} />
                    )
                })}
            </WrapperTypeProduct>
            HomePage
        </div>
    )
}

export default HomePage;