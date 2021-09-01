import React, { useState } from 'react';

const Rating = () => {
    const [like, setLike] = useState(localStorage.getItem('raiting') | 0);

    const getLikes = localStorage.setItem("like", like) / 0;

    const countRating = () => {
        if (like == 1) {
            return (
                <div>
                    <i className="fa fa-thumbs-up" 
                    style={{fontSize: 28, color: 'blue'}}  
                    onClick={() => setLike(like - 1)}
                    >
                    </i>
                </div>
            )
        } else if (like === 0) {
            return (
                <div>
                    <i className="fa fa-thumbs-down" 
                    style={{fontSize: 28, color: 'blue'}} 
                    onClick={() => setLike(like + 1)}
                    >
                    </i>

                </div>
            )
        } else return localStorage.setItem("like", 0)
    }

    return (
        <div>
            {countRating()}Like:{like}
        </div>
    );
};

export default Rating;