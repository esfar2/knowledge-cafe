import { useState } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';

export default function App() {
  const [bookmarks,setBookmarks] = useState([])
  const handleBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }
  return (
    <>
      <Header ></Header>
      <div className="md:flex justify-between max-w-7xl mx-auto">
        <Blogs handleAddToBlogs={handleBookmark}></Blogs>
        <Bookmarks bookMarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}
