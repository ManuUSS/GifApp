import { useState } from 'react'

export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('One Punch')
  
  const handleInputChange = ( { target} ) => {
    const { value } = target;
    setInputValue( value )
  }

  const handleSubmit = ( event ) => {
    event.preventDefault();
    if( inputValue.trim().length <= 1 ) return;
    setCategories( categories => [ inputValue, ...categories ]);
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
