import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './CardContainer.css';

const CardContainer = () => {
    const data = useLocation();
    const { imageUrl, title, username } = data;

    return (
        <div className='card-container-wrapper'>
            <img
                alt='post thumbnail'
                src={imageUrl}
            />
            <p className='title'>Title: {title}</p>
            <div className='card-comment-text'>
                {data.state.map((item, index) => {
                    return (
                        <div key={index} >
                            <b>Name: {username}</b>
                            <p>Comment: {item.text}</p>
                            <hr />
                        </div>
                    )
                }
                )}
            </div>
            <div className='btn-link'>
                <Link
                    style={{ textDecoration: 'none', color: 'black', marginTop: 20 }}
                    to='/mainPage'>
                    Back to main page
                </Link>
            </div>
        </div>
    );
};

export default CardContainer;