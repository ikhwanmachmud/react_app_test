//People.js
import React from 'react';
import { useState } from 'react';
import people from './data.jsx';

const Review = () => {
    const [index, setIndex] = useState(0);
    const {firstName, age, image} = people[index];
    return <article>
        
        <img className='' src={image} alt={firstName} />
        
    </article>
};




export default Review;