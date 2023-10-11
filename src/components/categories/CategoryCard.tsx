import React from 'react';
import {Category} from "@/interfaces";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useRouter} from 'next/navigation';

interface CategoryCardProps {
    category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({category}) => {
    const router = useRouter();

    const handleNavigate = () => {
        router.push(`/categories/${category.id}`);
    };

    return (
        <Card >
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    {category.id}
                </Typography>
                <Typography variant="h5" component="div">
                    {category.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={handleNavigate} size="small">Ver categoria</Button>
            </CardActions>
        </Card>
    );
};

export default CategoryCard;
