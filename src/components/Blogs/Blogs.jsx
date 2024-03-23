import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
  // Creating States
  const [blogs, setBlogs] = useState([]);
  //Loading Data Successfully
  useEffect(() => {
    fetch('blogs.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-2/3">
      <h2>Blogs: {blogs.length}</h2>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
