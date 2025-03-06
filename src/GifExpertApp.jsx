import { useEffect, useState } from "react";
import {AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    // console.log(categories);

    const onAddCategory = (newCategory) => 
    {
        //Agregar nuevo elemento al arreglo de categorias
        if(categories.includes(newCategory)) return;
        
        // categories.push(newCategory);
        // console.log(newCategory);

        //... Copia de las categorias y añado la nueva categoria
        setCategories([newCategory, ...categories]);
        // setCategories(cat => [...categories, 'Valorant']);
    }

    //Agregar una categoría
    useEffect(() => {
        onAddCategory('Naruto');
    }, []);

    //Eliminar una categoría
    const onRemoveCategory = (categoryToRemove) => {
        setCategories(categories.filter(category => category !== categoryToRemove));
    };

    return(
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={(value) => onAddCategory(value)}
            />

            {
                categories.map((category) => (
                    <div key={category}>
                        <GifGrid
                            key={category}
                            category={category}
                        />
                        <button onClick={() => onRemoveCategory(category)}>Eliminar</button>
                    </div>
                ))
            }
        </>
    );
}