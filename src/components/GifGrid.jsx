import { getGifs } from '../apis/getGifs.js';


export const GifGrid = ({ category }) => {
  
    getGifs( category );

    return (
        <h3>{ category }</h3>
  
    )
}
