import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBlogs,handleTimeRead}) => {
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
      
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} handleAddToBookMark={handleAddToBlogs} handleTimeRead={handleTimeRead}></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleAddToBlogs: PropTypes.func.isRequired
}

export default Blogs;
