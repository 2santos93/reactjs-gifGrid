import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


    const { data:gifs, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__bounceInDown"> { category }</h3>
            { loading && 'Loading...' }
            <div className="card-grid">
                { gifs.map( (image) => (
                    <GifGridItem
                        key={image.id}
                        {...image}
                    />
                ))
                }
            </div>
        </>
    )
}
