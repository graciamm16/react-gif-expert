import { render, renderHook, screen, act } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";
import { useState } from "react";

describe('Pruebas en <GifExpertApp/>', (categories) => {
    test('debe agregar una nueva categoría', () => {
        const {result} = renderHook(() => useState(['One Punch']));
        const [categories, setCategories] = result.current;

        //Envuelve actualizaciones que afectan el estado de los componentes.
        //Se asegura de actualizar el estado count antes de realizar la aserción expect
        act(() => {
            setCategories(['Naruto', ...categories]);
        });

        // render(<GifExpertApp/>);
        expect(result.current[0]).toContain('Naruto');
    });

    test('debe eliminar una categoría', () => {
        const {result} = renderHook(() => useState(['One Punch', 'Naruto']));
        const [categories, setCategories] = result.current;

        act(() => {
            setCategories(categories.filter(category => category !== 'Naruto'));
        });

        // render(<GifExpertApp/>);
        expect(result.current[0]).not.toContain('Naruto');
        expect(result.current[0]).toContain('One Punch');
    });
});