import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifApp = () => {
    const [categories, setCategories] = useState([ 'A', 'B' ]);

    const handleAddCategorie = ( value ) => {
        //Forma 1
        //setCategories([ ...categories, 'Valorant' ]);
        if( categories.includes( value ) ) return;
        //Al réves
        setCategories([ value, ...categories ]);
        //Forma 2
        //setCategories( oldCategories => [  ...categories, 'Valorant' ] );
    }
  return (
    <>
        <h1>Gif App</h1>
        <AddCategory 
            //setCategories={ setCategories }
            onNewCategory = { handleAddCategorie }
        />
        <ol>
            { categories.map( category => {
                return <li key={ category }>{ category }</li>
            })}
        </ol>
    </>
  )
}
