import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import axios from 'axios';

const EditPost = (props) => {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { id } = useParams();

    const navigateBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/api/post/${id}`)
            .then((res) => {
                console.log(res.data);
                setTitle(res.data.post.title);
                setContent(res.data.post.content);
                if (res.data.post.imageUrl.length > 1) {
                    setImageUrl(res.data.post.imageUrl);
                } else {
                    setImageUrl('');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const updatePost = (e) => {
        e.preventDefault();
        if (title.length < 2 || content.length < 2 || imageUrl.length < 1) {
            setErrorMessage('Your form has some unsolved issues!');
        } else {
            axios.put(`http://localhost:8000/api/post/${id}`, {
                title,
                content,
                imageUrl
            })
                .then((res) => {
                    navigate('/');
                })
                .catch((err) => {
                    setErrorMessage("Your API has some problems!");
                    console.log(err);
                });
        }
    };

    return (
        <div className="px-3">
            <p className="text-decoration-none" onClick={navigateBack}>&larr;</p>
            <h1 className="text-center p-2">Edit Post</h1>
            {errorMessage ? <p className="text-danger text-center">{errorMessage}</p> : null}

            <form className="w-75 m-auto" onSubmit={(e) => updatePost(e)}>
                <div>
                    <label className="form-label">Title:</label>
                    <input className="form-center" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                {title.length > 0 && title.length < 3 ?
                    <p className="text-danger">The title should be 2 characters or more</p> :
                    null
                }
                <div>
                    <label className="form-label">Content:</label>
                    <input className="form-control" type="text" value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                {content.length > 0 && content.length < 3 ?
                    <p className="text-danger">The content should be 2 characters or more</p> :
                    null
                }
                <div>
                    <label className="form-label">Image URL:</label>
                    <input className="form-control" type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Put the image URL" />
                </div>
                {imageUrl.length < 1 ?
                    <p className="text-danger">The image URL is required</p> :
                    null
                }
                <button className="btn btn-outline-primary customColor mt-2">Edit the post</button>
            </form>
        </div>
    );
};

export default EditPost;
