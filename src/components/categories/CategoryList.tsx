import React from 'react';
import {Category} from "@/interfaces";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CategoryCard from "@/components/categories/CategoryCard";

interface CategoryListProps {
    categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({categories}) => {

    return (
        <Box sx={{minWidth: 275}}>
            <Card variant="outlined">
                {categories.map((category) => (
                    <li key={category.id}>
                        <CategoryCard category={category} />
                    </li>
                ))}
            </Card>
        </Box>
    );
};

export default CategoryList;
