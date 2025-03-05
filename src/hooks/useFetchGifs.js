import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    //HOOK: función que regresa algo
    
    const[images, setImages] = useState([]);
    const[isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    // Dispara efectos secundarios: proceso que queremos ejecutar cuando algo cambie
    useEffect(() => {
        getImages();
    }, []);

    return{
        images,
        isLoading
    }
}
