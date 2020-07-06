import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

   // const categories = ['category 1', 'category 2', 'category 3'];
   const [categories, setCategories] = useState(['goku']);

//   const handleAdd = () => {
//      // setCategories(['Category 4', ...categories]);
//      setCategories(cats => ['Category 4', ...cats]);
//   } 

   return (
      <>
         <h2>Gif Expert App</h2>

         <AddCategory setCategories={ setCategories } />

         <hr />
         <ol>
            {
               categories.map( (category) => (
                  // return <li key={category}>{category}</li>
                  <GifGrid 
                     key={ category }
                     category={ category }
                  />
               ))
            }
         </ol>
      </>
   );
}

export default GifExpertApp;