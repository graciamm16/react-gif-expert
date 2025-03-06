import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en <useFetchGifs/>', () => {
    test('debe regresar el estado inicial', () => {
        const {result} = renderHook(() => useFetchGifs('One Punch'));
        const {images, isLoading} = result.current;
        // const {images, isLoading} = useFetchGifs();

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('debe retornar un arreglo de imágenes y el isloading en false', async() => {
        const {result} = renderHook(() => useFetchGifs('One Punch'));
        
        //Espera que una considicón se cumpla antes de continuar con la ejecución del códgio
        await waitFor(
            //Espera hasta que el resultado sea mayor a 0
            () => expect(result.current.images.length).toBeGreaterThan(0),
        );
        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});