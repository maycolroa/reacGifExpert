import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

  const [ inputValue, setInputValue ] = useState('');

  const onInputChane = ({ target }) => {
    setInputValue( target.value );
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
    if (inputValue.trim().length <= 3) return;
    setInputValue('');
    onNewCategory(inputValue.trim() );
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
          type="text" 
          placeholder="Buscar Gif" 
          value={ inputValue } 
          onChange={ onInputChane } 
        />
    </form>
  );
}
