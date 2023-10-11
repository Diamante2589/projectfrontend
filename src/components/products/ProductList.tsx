import React from 'react';
import {Product} from "@/interfaces";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import ProductCard from "@/components/products/ProductCard";

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({products}) => {

    return (
        <Box sx={{minWidth: 275}}>
            <Card variant="outlined">
                {products.map((product) => (
                    <li key={product.id}>
                        <ProductCard category={product} />
                    </li>
                ))}
            </Card>
        </Box>
    );
};

export default ProductList;
