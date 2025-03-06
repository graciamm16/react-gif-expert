import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory/>', () => { 
    test('debe cambiar el valor de la caja de texto', () => { 
        //Creamos sujeto de pruebas
        render(<AddCategory onNewCategory={ () => {} }/>);
        //Extraemos en input
        const input = screen.getByRole('textbox');
        //Disparamos el evento
        fireEvent.input(input, {target: {value: 'Saitama'}});
        //Hacemos la aserción de lo que esperamos que suceda después del evento
        expect(input.value).toBe('Saitama');
        // screen.debug();
    });
     
    test('debe llamar onNewCategory si el input tiene un valor', () => { 
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();
        
        render(<AddCategory onNewCategory={onNewCategory}/>);
        //Referencias al input y al form
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        // screen.debug();
        
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('no debe llamar onNewCategory si el input está vacío', () => { 
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target: {value: ''}});
        fireEvent.submit(form);
        // screen.debug();
        
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    });
});