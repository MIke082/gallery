import React, { useState, useEffect } from 'react';
import './post.css';
import { db } from '../Firebase'
import Post from './Post';
import { Link, useLocation } from 'react-router-dom';

const Posts = () => {
    const username = useLocation();

    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState(username.state);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                post: doc.data()
            })))
        })
    }, []);

    return (
        <div>

            <div className='posts-component-list'>
                {
                    posts.map(({ id, post }) => (
                        <Post key={id} postId={id} posts={posts} title={post.title} imageUrl={post.imageUrl} username={user} />
                    ))
                }
            </div>
            <div className='posts-btn-add-post'>
                <Link
                    to='/ImageUploadPage'
                    style={{ textDecoration: 'none', fontSize: 30 }}
                >
                    Add new Post
                </Link>
            </div>
        </div>
    );
}

export default Posts;