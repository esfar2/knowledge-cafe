import { useEffect, useState } from "react";


const Blogs = () => {
  // Creating States
  const [blogs,setBlogs] = useState([])
  //Loading Data Successfully
  useEffect(() => {
    fetch('blogs.json')
    .then(res => res.json())
    .then((data) => setBlogs(data))
  },[])
  return (
    <div>
      <h1>{blogs.length}</h1>
    </div>
  );
};

export default Blogs;