import PropTypes from "prop-types"
const Bookmarks = ({bookMarks}) => {
  return (
    <div className="w-1/3">
      <h2>Bookmarks: {bookMarks.length}</h2>
    </div>
  );
};
Bookmarks.propTypes = {
  bookMarks: PropTypes.object.isRequired
}
export default Bookmarks;
