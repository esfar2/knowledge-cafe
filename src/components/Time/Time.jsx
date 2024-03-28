
import PropTypes from 'prop-types'

const Time = ({time}) => {
  const timeArray = time.map(each => each.reading_time)
  console.log(timeArray);
  const sum = timeArray.reduce((sum, time) => sum + time,0)
  console.log(sum);
  return (
    <div className='bg-purple-200 p-3 rounded-lg ml-4 text-center font-bold'>
      <p className='text-xl text-purple-800'>Spent Time on Read: {sum} min</p>
    </div>
  )
}

Time.propTypes = {
  time: PropTypes.array
}

export default Time