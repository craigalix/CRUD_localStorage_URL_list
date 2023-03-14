import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export function EditLinkForm({ links, updateLink }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [tags, setTags] = useState('');

    useEffect(() => {
        const link = links.find(link => link.id === id);
        setName(link.name);
        setUrl(link.url);
        setTags(link.tags.join(', '));
    }, [id, links]);

    function handleSubmit(event) {
        event.preventDefault();
        const updatedLink = { id: id, name: name, url: url, tags: tags.split(', ') };
        updateLink(updatedLink);
        navigate('/');
    }

    function handleCancel(event) {
        event.preventDefault();
        navigate('/')
    }

    return (
        <div>
            <h1 className='form-header-edit'>Edit a Link</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-row'>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                </div>
                <div className='form-row'>
                    <label htmlFor="url">URL:</label>
                    <input
                        id="url"
                        type="text"
                        value={url}
                        onChange={event => setUrl(event.target.value)}
                    />
                </div>
                <div className='form-row'>
                    <label htmlFor="tags">Tags:</label>
                    <input
                        id="tags"
                        type="text"
                        value={tags}
                        onChange={event => setTags(event.target.value)}
                    />
                </div >
                <div className='form-row'>
                    <button type="submit"><b>Update Link</b></button>
                    <button onClick={handleCancel}><b>Cancel</b></button>
                </div>
            </form>
        </div>
    );
}
