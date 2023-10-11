"use client"
import React from 'react';
import useCategories from '@/hooks/useCategories'; // Ajusta la ruta según la ubicación de tu hook
import CategoryList from '@/components/categories/CategoryList';
import SkeletonComponent from "@/components/SkeletonComponent";

export default function CategoriesPage() {
    const { categories, loading, error } = useCategories();

    return (
        <div>
            <h1>Listado de Categorías</h1>
            {loading && <SkeletonComponent/>}
            {error && <div>Error: {error.message}</div>}
            {!loading && !error && <CategoryList categories={categories} />}
        </div>
    );
}
