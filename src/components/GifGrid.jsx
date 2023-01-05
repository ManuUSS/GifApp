import { useEffect } from 'react'
import { getGifs } from '../apis/getGifs.js';


export const GifGrid = ({ category }) => {
  

    useEffect(() => {
        getGifs( category );
    }, [ ])
    

    return (
        <h3>{ category }</h3>
    )
}
