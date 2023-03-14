import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from "react-icons/fa";

export function LinkList({ links, deleteLink }) {
    return (
        <div className="container">
            <div>
                <nav>
                    <Link to="/add">
                        <button className='add-btn'>
                            <b>Add New Entry</b>
                        </button>
                    </Link>
                </nav>
            </div>
            {links.map(link => (
                <ul key={link.id}>
                    <li className="list-row">
                        <b>Name:</b> {link.name} <b>| URL:</b> {link.url}
                        <div style={{ float: "right" }}>
                            {link.tags && (
                                <span>
                                    {' '} {link.tags.map(tag => <span key={tag}>#{tag} </span>)}
                                </span>
                            )}
                            <button className="delete-btn" onClick={() => deleteLink(link.url)}><FaTrash /></button>
                            <Link to={`/edit/${link.id}`}>
                                <button className="edit-btn" ><FaEdit /></button>
                            </Link>
                        </div>
                    </li>
                </ul>
            ))}
        </div>
    );
}
