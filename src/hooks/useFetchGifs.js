import { useEffect, useState } from 'react'
import { getGifs } from '../apis/getGifs';

export const useFetchGifs = ( category ) => {

    const [gifs, setGifs] = useState( [] );
    const [isLoading, setisLoading] = useState( true );

    const getImages = async () => {
        const newGifs = await getGifs( category );
        setGifs( newGifs );
        setisLoading( false );
    }

    useEffect(() => {
        getImages();
    }, [])
    
    return [
        gifs, 
        isLoading
    ]

}
