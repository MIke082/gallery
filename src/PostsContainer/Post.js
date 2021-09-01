import React, { useState, useEffect } from 'react';
import './post.css';
import { db } from '../Firebase'
import firebase from 'firebase';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Rating from '../RatingComponent/RatingComponent';
import TimeAgo from 'timeago-react';

const Post = ({ postId, username, title, imageUrl }) => {
    const [comments, setcomments] = useState([]);
    const [comment, setcomment] = useState('');
    const [visibleComments, setVisibleComments] = useState(false);
    const [openCommentModal, setOpenCommentModal] = useState(false);

    const countComents = Object.keys(comments).length;

    useEffect(() => {
        if (postId) {
            db
                .collection('posts')
                .doc(postId)
                .collection('comments')
                .orderBy('timestamp', 'asc')
                .onSnapshot((snapshot) => {
                    setcomments(snapshot.docs.map((doc) => doc.data()))
                })
        }

    }, [postId]);

    const postComment = (e) => {
        e.preventDefault();
        db.collection('posts').doc(postId).collection('comments').add({
            text: comment,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setcomment('');
    }

    return (
        <div className='post'>
            <Link
                to={{ pathname: `/cardContainer/${postId}`, state: comments, title, imageUrl, username }}
                style={{ textDecoration: 'none' }}
            >

                <img src={imageUrl} alt='img' className='post_image' />
                <h4 className='post_text'>{title}</h4>

            </Link>

            <div>
                {!visibleComments ?
                    <div className='post-toogle-btn-open'>
                        <div className='post-like-comments'>
                            <Button onClick={() => setVisibleComments(true)}>{countComents} comments</Button>
                            <Rating />
                        </div>
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={() => setVisibleComments(true)}>
                            Open comments
                        </Button>
                    </div>
                    :
                    <div style={{ paddingBottom: 30 }}>
                        <div className='post_comments'>
                            {
                                comments.map((comment, index) => {
                                    const dateNowzxc = comment && comment.timestamp && comment.timestamp.seconds;
                                    const dateNow = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(dateNowzxc * 1000);
                                    return (
                                        <div key={index} className='post-commenst'>
                                            <div className='post-coment-like'>
                                                <strong> {username}:
                                                    {comment.text}
                                                    <br />
                                                    <span>  Submited <span></span>

                                                        <TimeAgo
                                                            datetime={dateNow}
                                                        />
                                                        <span></span>
                                                        by
                                                        <br />
                                                        {username}
                                                    </span>
                                                </strong>
                                                <Rating />
                                            </div>
                                            <div className='post-date'>
                                                <p>Sent :{dateNow}</p>
                                                <hr />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                        <div className='post-btn-click-add-comment-and-close-modale'>
                            <Button
                                onClick={() => setOpenCommentModal(true)}
                                variant='contained'
                                color='primary' >
                                <p>Add new comment</p>
                            </Button>

                            <Button
                                variant='contained'
                                color='primary'
                                onClick={() => setVisibleComments(false)}>
                                <p>Close commetns</p>
                            </Button>
                        </div>

                        <Modal
                            open={openCommentModal}
                            onClose={() => setOpenCommentModal(false)}
                            aria-labelledby='simple-modal-title'
                            aria-describedby='simple-modal-description'
                            className='posts-modal'
                        >
                            <div className='post-modal-add-post'>
                                <form >
                                    <Input
                                        type='text'
                                        className='post_input'
                                        placeholder='Add a Comment'
                                        value={comment}
                                        onChange={(e) => setcomment(e.target.value)}
                                    />
                                    <div>
                                        <Button
                                            variant='contained'
                                            color='primary'
                                            type='submit'
                                            onClick={postComment}
                                        >
                                            Post
                                        </Button>

                                        <Button
                                            variant='contained'
                                            color='primary'
                                            type='submit'
                                            onClick={()=>setOpenCommentModal(false)}
                                        >
                                            Close
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </Modal>
                    </div>
                }
            </div>
        </div>
    );
}

export default Post;
