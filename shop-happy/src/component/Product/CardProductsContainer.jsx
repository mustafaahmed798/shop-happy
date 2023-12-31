import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SubTitle from '../Utility/SubTitle';
import ProductCard from './ProductCard';

const CardProductsContainer = ({title , btntitle}) => {
    return ( 
        <Container>
            <br/>
            <SubTitle title={title} btntitle={btntitle} />
            <Row className='my-2 d-flex justify-content-between'>
                <ProductCard title='1' />
                <ProductCard title='2' />
                <ProductCard title='3' />
                <ProductCard title='4' />
            </Row>
        </Container>
     );
}
 
export default CardProductsContainer;