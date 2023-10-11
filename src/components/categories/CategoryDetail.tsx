import React, {useEffect, useState} from 'react';
import useCategories from '@/hooks/useCategories';

function CategoryDetail({categoryId}: { categoryId: string }) {
    const {getCategoryById, updateCategory, category, loading, error} = useCategories();
    const [formData, setFormData] = useState({
        name: '',
        code: '',
    });

    useEffect(() => {
        if (category)
            setFormData({
                name: category.name,
                code: category.code,
            });
    }, [category]);

    useEffect(() => {
        const fetchCategory = async () => {
            await getCategoryById(categoryId);
        };

        fetchCategory();
    }, [categoryId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await updateCategory({...formData, id: categoryId})
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!category) {
        return <div>Categoría no encontrada.</div>;
    }

    return (
        <div>
            <h2>Detalle de Categoría</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="code">Código:</label>
                    <input
                        type="text"
                        id="code"
                        name="code"
                        value={formData.code}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Guardar cambios</button>
            </form>
        </div>
    );
}

export default CategoryDetail;
