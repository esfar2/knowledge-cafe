import { useState } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';
import Time from './components/Time/Time';

export default function App() {
  const [bookmarks,setBookmarks] = useState([])
  const handleBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }
  const [timeRead, setTimeRead] = useState([])
  const handleTimeRead = blog =>{
    const newTimeRead = [...timeRead, blog]
    setTimeRead(newTimeRead)
  }
  return (
    <>
      <Header ></Header>
      <div className="md:flex justify-between max-w-7xl mx-auto">
        <Blogs handleAddToBlogs={handleBookmark} handleTimeRead={handleTimeRead}></Blogs>
        <div>
        <Time time={timeRead}></Time>
        <Bookmarks bookMarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </>
  );
}
