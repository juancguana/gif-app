import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GiftGridItem from './GiftGridItem';

const GifGrid = ({ category }) => {

  const { data: images, loading } = useFetchGifs( category );

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{ category.toUpperCase() }</h3>
      { loading && <p className="animate__animated animate__flash">Loading...</p> }
      <main className="card-grid">
        {
          images.map( (img) => (
            <GiftGridItem 
              key={img.id}
              {...img}
            />
          ))
        }
      </main>
    </>
  )
}

export default GifGrid
