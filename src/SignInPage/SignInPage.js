import { Input } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignInPage.css';

const SignInPage = () => {
    const [username, setUserName] = useState('');

    return (
        <div className='signin-container-wrapper'>
            <p className='signin-title-header'>Welcome to gallery!</p>
            <Input
                type='text'
                value={username}
                placeholder={'Enter your name...'}
                onChange={e => setUserName(e.target.value)}
                required
            />
            <div className='signin-btn'>
                {username !== '' ?

                    <Link
                        style={{ textDecoration: 'none', color: 'black', marginTop: 20 }}
                        to={{
                            pathname: '/mainPage', state: username,
                        }}>
                        Go to main page
                    </Link>
                    : null
                }
            </div>
        </div>
    );
};

export default SignInPage;