import { useEffect, useState } from 'react'
import { getGifs } from '../apis/getGifs.js';


export const GifGrid = ({ category }) => {
  
    const [gifs, setGifs] = useState([]);

    const getImages = async () => {
        const newGifs = await getGifs( category );
        setGifs( newGifs );
    }

    useEffect(() => {
        getImages();
    }, [ ])
    

    return (
        <>
            <h3>{ category }</h3>
            <ul>
                { gifs.map( ({ id, title }) => (
                    <li key={ id }>{ title }</li>
                )) }
            </ul>
        </>
    )
}
