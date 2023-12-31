import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CategoryCard from '../Category/CategoryCard';
import cat2 from '../../images/cat2.png';
import clothe from '../../images/clothe.png';
import laptop from '../../images/labtop.png';
import sale from '../../images/sale.png';
import pic from '../../images/pic.png';
import SubTitle from '../Utility/SubTitle';



const HomeCategory = () => {
    return ( 
        <Container>
            <SubTitle title="التصنيفات" btntitle="المزيد" pathtext='/allcategory' />
            <Row className='my-2 d-flex justify-content-between'>
                <CategoryCard img={cat2} title="مستحضرات تجميل" background="#af04" />    
                <CategoryCard img={clothe} title="ملابس" background="#fa74" />    
                <CategoryCard img={laptop} title="أجهزة اللابتوب" background="#ag06" />    
                <CategoryCard img={sale} title=" خصومات" background="#fa03" />    
                <CategoryCard img={pic} title="أجهزة منزلية" background="#fa04" />    
            </Row>
        </Container>
     );
}
 
export default HomeCategory;