import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
  const { title, cover, author, author_img, reading_time,posted_date,hashtags } = blog;
  console.log(blog);
  return (
    <div>
      <img src={cover} alt={`Cover pic of the title: ${title}`} />
      <div className="flex justify-between items-center">
        <div className='flex items-center gap-2'>
          <img
            className="h-[60px] w-[60px] rounded-full"
            src={author_img}
            alt={`Image of ${author}`} 
            />
          <div>
            <h3 className='text-2xl'>{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      {
        hashtags.map((hashtag,idx) => <span className='mr-4' key={idx} ><a href="">#{hashtag}</a></span>)
      }
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
