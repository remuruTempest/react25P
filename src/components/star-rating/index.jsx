
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import './styles.css';
export default function StarRating({ noOfStars = 5 }) {

    const[rating, setRating] =useState(0);
    const [hover, setHover] = useState(0);

    function handleClik(getCurrentIndex) {
        setRating(getCurrentIndex);
    }   

    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex);
        
    }

    function handleMouseLeave() {
        setHover(rating);
        
    }

    return (
    <div className="star-rating">
        {
            [...Array(noOfStars)].map((_, index) => {
                
                index += 1;

                return <FaStar
                 key={index}
                 className={index <= (hover || rating)
                     ? "active"
                     : "inactive"}

                 onClick={()=>handleClik(index)}
                 onMouseMove={()=>handleMouseEnter(index)}
                 onMouseLeave={()=>handleMouseLeave(index)}
                 size={40}
                 />
            

            })
        }
    </div>

    );
}
