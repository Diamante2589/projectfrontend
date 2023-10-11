"use client"
import React from 'react';
import CategoryDetail from "@/components/categories/CategoryDetail";

export default function CategoryPage({params}: { params: { id: string } }) {

    return (
        <div>
            <CategoryDetail categoryId={params.id}/>
        </div>
    );
}
