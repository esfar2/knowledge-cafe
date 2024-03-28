import PropTypes from 'prop-types';
import { BsBookmark } from 'react-icons/bs';

const Blog = ({ blog, handleAddToBookMark,handleTimeRead }) => {
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  // console.log(blog);
  return (
    <div className="mb-16">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`Cover pic of the title: ${title}`}
      />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            className="h-[60px] w-[60px] rounded-full"
            src={author_img}
            alt={`Image of ${author}`}
          />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span className="mr-4 inline-block">{reading_time} min read</span>
          <button onClick={()=> handleAddToBookMark(blog)}>
            <BsBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      {hashtags.map((hashtag, idx) => (
        <span className="mr-4" key={idx}>
          <a href="">#{hashtag}</a>
        </span>
      ))}
      <button onClick={() => handleTimeRead(blog)} className="block mt-2 border-none bg-none ">Mask as Read</button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookMark: PropTypes.func.isRequired,
  handleTimeRead: PropTypes.func.isRequired,
};

export default Blog;
