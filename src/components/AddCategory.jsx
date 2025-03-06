import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('One Punch');
    
    const onInputChange = ({target}) => {
        // console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        // console.log("Hola Mundo desde onSubmit");
        event.preventDefault();
        // console.log(inputValue);
        if(inputValue.trim().length <= 1) return;

        // setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return(
        <form onSubmit={onSubmit} aria-label='form'>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                //Está emitiendo algo
                onChange={onInputChange}
            />
        </form> 
    );
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}