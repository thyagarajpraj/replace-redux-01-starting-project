import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../components/Products/ProductItem';
import './Products.css';

const Products = () => {
    const productList = useSelector(state => state.shop.products);
    return (
        <ul className="products-list">
            {
                productList.map(prod => {
                    return <ProductItem
                        key={prod.key}
                        title={prod.title}
                        id={prod.id}
                        description={prod.description}
                        isFav={prod.isFavorite}
                    />
                })
            }
        </ul>
    );
};

export default Products;