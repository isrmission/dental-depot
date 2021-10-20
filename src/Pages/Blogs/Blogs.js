import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-bootstrap';
import Blog from './Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    })
    return (
        <div className='p-5 bg-dark bg-opacity-10 mx-auto pb-5'>
            <div className='container'>
                <p className="bg-info bg-opacity-25">
                    BLOGS
                </p>
                <h1 className='text-info mb-5'>Health Tips
                </h1>
                <div className='row row-cols-3 gx-2'>
                    {
                        blogs.slice(0, 3).map(blog => <Blog key={blog.name} blog={blog}
                        ></Blog>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;