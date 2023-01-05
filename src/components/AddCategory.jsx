import { useState } from 'react'

export const AddCategory = () => {

  const [inputValue, setInputValue] = useState('One Punch')
  
  const handleInputChange = ( { target} ) => {
    const { value } = target;
    setInputValue( value )
  }

  const handleSubmit = ( event ) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={ (e) => handleSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs..."
        value={inputValue}
        onChange={ handleInputChange }
      />
    </form>
  )
}
