import React from 'react';
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className='animate__animated animate__fadeIn'>
        {category.toUpperCase()}
      </h3>
      {loading && (
        <figure className='animate__animated animate__flash loading'>
          <img src='/logo.png' height={100} alt='Logo' />
        </figure>
      )}
      <main className='card-grid'>
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </main>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export { GifGrid };
