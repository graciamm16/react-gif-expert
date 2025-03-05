import { useState } from "react";
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

    return(
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={(value) => onAddCategory(value)}
            />

            {
                categories.map((category) => (
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                ))
            }
        </>
    );
}