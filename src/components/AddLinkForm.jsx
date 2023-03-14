import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function AddLinkForm({ addLink }) {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [tags, setTags] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const id = new Date().getTime().toString();
        addLink(id, name, url, tags.split(',').map(tag => tag.trim()));
        setName('');
        setUrl('');
        setTags('');
        navigate('/');
    }

    function handleCancel(event) {
        event.preventDefault();
        navigate('/')
    }

    return (
        <div>
            <h1 className='form-header-add'>Add a Link</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-row'>
                    <label>
                        Name:
                    </label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className='form-row'>
                    <label>
                        URL:
                    </label>
                    <input type="text" value={url} onChange={e => setUrl(e.target.value)} />

                </div>
                <div className='form-row'>
                    <label>
                        Tags (comma separated):
                    </label>
                    <input type="text" value={tags} onChange={e => setTags(e.target.value)} />
                </div>
                <div className='form-row'>
                    <button type="submit"><b>Add Link</b></button>
                    <button onClick={handleCancel}><b>Cancel</b></button>
                </div>
            </form>
        </div>
    );
}