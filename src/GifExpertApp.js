import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h1>Gift Expert App</h1>
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} id={category}/>
        ))}
      </ol>
    </>
  );
};

export { GifExpertApp };
