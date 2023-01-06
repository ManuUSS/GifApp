import { useEffect, useState } from 'react'
import { getGifs } from '../apis/getGifs.js';
import { GifItem } from './GifItem.jsx';


export const GifGrid = ({ category }) => {
  
    const [gifs, setGifs] = useState([]);

    const getImages = async () => {
        const newGifs = await getGifs( category );
        setGifs( newGifs );
    }

    useEffect(() => {
        getImages();
    }, [])
    

    return (
        <>
            <h3>{ category }</h3>
            <div className='card-grid'>
                { 
                    gifs.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            { ...image }
                        />
                    )) 
                }
            </div>
        </>
    )
}
