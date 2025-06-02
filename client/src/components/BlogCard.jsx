import React from 'react';
import '../styles/BlogCard.css';

const BlogCard = ({ blog }) => {
    return (
        <div className='blog-card'>
            <h2>{blog.title}</h2>
            <div className='blog-details'>
                <h6>By: {blog.author}</h6>
                <h6>{new Date(blog.timestamp).toLocaleDateString()}</h6>
            </div>
            <p>{blog.content}</p>
        </div>
    );
};

export default BlogCard;