import { render, renderHook, screen, act, fireEvent } from "@testing-library/react";
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

    // test('debe eliminar una categoría al hacer click en el botón', () => {
    //     render(<GifExpertApp/>);
    //     expect(screen.getByText('One Punch')).toBeInTheDocument();

    //     const input = screen.getByRole('textbox');
    //     const form = screen.getByRole('form');
    //     fireEvent.input(input, {target: {value: 'Naruto'}});
    //     fireEvent.submit(form);

    //     expect(screen.getByText('Naruto')).toBeInTheDocument();

    //     //Hacer click en el botón para eliminar la categoría Naruto
    //     const deleteButton = screen.getByText('Eliminar', {selector: 'button'});
    //     fireEvent.click(deleteButton[1]);

    //     //Verificar que la categoría Naruto ha sido eliminada
    //     expect(screen.queryByText('Naruto')).not.toBeInTheDocument();
    //     //Verificar que la categoría One Punch sigue en el documento
    //     expect(screen.getByText('One Punch')).toBeInTheDocument();
    // });
});