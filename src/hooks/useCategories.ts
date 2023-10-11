import {useEffect, useState} from 'react';
import {Category} from '@/interfaces';
import {httpGet, httpPost, httpPut} from '@/helpers/AxiosHelper';

// Define un hook personalizado para obtener categorías
const useCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [category, setCategory] = useState<Category>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await httpGet<Category[]>('/categories');
                setCategories(response); // response ya debe ser un arreglo de categorías
                setLoading(false);
            } catch (error) {
                setError(error as Error); // Asumimos que httpGet maneja errores y devuelve instancias de Error
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const getCategoryById = async (categoryId: string) => {
        try {
            const category = await httpGet<Category>(`/categories/${categoryId}`);
            setCategory(category); // response ya debe ser un arreglo de categorías
            setLoading(false);
        } catch (error) {
            setError(error as Error); // Asumimos que httpGet maneja errores y devuelve instancias de Error
            setLoading(false);
        }
    };

    const saveCategory = async (category: { name: string, code: string }) => {
        try {
            const category = await httpPost<Category>(`/categories/`, categories);
            setCategory(category);
            setLoading(false);
        } catch (error) {
            setError(error as Error);
            setLoading(false);
        }
    };

    const updateCategory = async (category: { id: string, name: string, code: string }) => {
        try {
            const categoryResp = await httpPut<Category>(`/categories/${category.id}`, category);
            setCategory(categoryResp);
            setLoading(false);
        } catch (error) {
            setError(error as Error);
            setLoading(false);
        }
    };

    return {categories, category, loading, error, getCategoryById, saveCategory, updateCategory};
};

export default useCategories;
