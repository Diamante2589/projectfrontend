import React from 'react';
import {Product} from "@/interfaces";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useRouter} from 'next/navigation';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    const router = useRouter();

    const handleNavigate = () => {
        router.push(`/products/${product.id}`);
    };

    return (
        <Card>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    {product.id}
                </Typography>
                <Typography variant="h5" component="div">
                    {product.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={handleNavigate} size="small">Ver producto</Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
