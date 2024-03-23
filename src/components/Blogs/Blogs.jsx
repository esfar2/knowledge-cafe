import { useEffect, useState } from 'react';

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
      
    </div>
  );
};

export default Blogs;
