import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = ( { target} ) => {
    const { value } = target;
    setInputValue( value )
  }

  const handleSubmit = ( event ) => {
    event.preventDefault();
    const categorieToAdd = inputValue.trim();
    if( categorieToAdd.length <= 1 ) return;

    //Forma 1 -> setCategories( categories => [ inputValue, ...categories ]);
    onNewCategory( categorieToAdd )
    setInputValue('');
  }

  
  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        placeholder="Buscar gifs..."
        value={inputValue}
        onChange={ handleInputChange }
      />
    </form>
  )
}
