import React, {useState} from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);
    
    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            {
                categories.map(category => (
                    <GifGrid key={ category } category={ category } />
                ))
            }
        </>
    )};

export default GifExpertApp;