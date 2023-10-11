"use client"
import React from 'react';
import useCategories from '@/hooks/useCategories';
import SkeletonComponent from "@/components/SkeletonComponent";
import ProductList from "@/components/products/ProductList";

export default function ProductsPage() {
    const { categories, loading, error } = useCategories();

    return (
        <div>
            <h1>Listado de Productos</h1>
            {loading && <SkeletonComponent/>}
            {error && <div>Error: {error.message}</div>}
            {!loading && !error && <ProductList products={categories} />}
        </div>
    );
}
