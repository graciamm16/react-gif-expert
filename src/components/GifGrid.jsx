import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

export const GifGrid = ({category}) => {
    //Acceso a las imágenes y cargarlo basado en una categoría
    const {images, isLoading} = useFetchGifs(category);
    // console.log({isLoading}); 

    return(
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            
            {/* <h5>{counter}</h5>
            <button onClick={() => setCounter(counter + 1)}>+1</button> */}

            <div className="card-grid">
                {/* Añadir los títulos en la lista */}
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            // Sirve para reciba cada una de las propiedades que tiene la imagen como props
                            {...image}
                            // title ={image.title}
                            // url ={image.url}
                        />
                    ))
                } 
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}