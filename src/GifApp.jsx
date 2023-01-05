import { useState } from 'react'

export const GifApp = () => {
    const [categories, setCategories] = useState([ 'A', 'B' ]);
  return (
    <>
        <h1>Gif App</h1>

        <ol>
            { categories.map( category => {
                return <li key={ category }>{ category }</li>
            })}
        </ol>
    </>
  )
}
