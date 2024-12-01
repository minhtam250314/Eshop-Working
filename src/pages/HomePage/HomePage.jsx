import React from 'react';
import TypeProduct from '../../components/TypeProduct/TypeProduct';
import { WrapperTypeProduct } from './style';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import slider1 from '../../assets/images/slider1.png';
import slider2 from '../../assets/images/slider2.png';
import slider3 from '../../assets/images/slider3.png';
import CardComponent from '../../components/CardComponent/CardComponent';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';

const HomePage = () => {
    const arr = ['TV', 'Tu Lanh', 'Laptop']
    return (
        <>
            <div style={{ padding: '0 120px', fontSize: 15 }}>
                <WrapperTypeProduct>
                    {arr.map((item) => {
                        return (
                            <TypeProduct name={item} key={item} />
                        )
                    })}
                </WrapperTypeProduct>
            </div>

            <div id="container" style={{ backgroundColor: '#efefef', padding: '0 120px', height: '1000px' }}>
                <SliderComponent arrImages={[slider1, slider2, slider3]} />
                <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <CardComponent />
                </div>
                <NavbarComponent />
            </div>
        </>
    )
}

export default HomePage;