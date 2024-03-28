import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';
const Bookmarks = ({ bookMarks }) => {
  return (
    <div className="w-full bg-gray-300 ml-4 pb-2 rounded-lg">
      <h2 className='text-center p-4'>Bookmarks: {bookMarks.length}</h2>
      {bookMarks.map((bookmark, idx) => <BookMark key={bookmark.id} bookMark={bookmark}></BookMark>)}
    </div>
  );
};
Bookmarks.propTypes = {
  bookMarks: PropTypes.array,
};
export default Bookmarks;
