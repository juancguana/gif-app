import React from 'react';
import PropTypes from 'prop-types';

const GiftGridItem = ({ title, url }) => {
  return (
    <figure className='card animate__animated animate__fadeIn'>
      <img src={url} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>
  );
};

GiftGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GiftGridItem;
