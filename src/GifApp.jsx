import { useState } from 'react'

export const GifApp = () => {
    const [categories, setCategories] = useState([ 'A', 'B' ]);

    const handleAddCategorie = () => {
        //Forma 1
        //setCategories([ ...categories, 'Valorant' ]);
        //Al réves
        setCategories([ 'Valorant', ...categories ]);
        //Forma 2
        //setCategories( oldCategories => [  ...categories, 'Valorant' ] );
    }
  return (
    <>
        <h1>Gif App</h1>

        <button onClick={ handleAddCategorie } >Agregar</button>
        <ol>
            { categories.map( category => {
                return <li key={ category }>{ category }</li>
            })}
        </ol>
    </>
  )
}
