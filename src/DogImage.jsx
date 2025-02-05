// @ts-check
import PropTypes from 'prop-types'

/**
 * @param {{ imageUrl: string }} props
 */
export const DogImage = ({ imageUrl }) => {
  return <img src={imageUrl} alt="dog" style={{ width: '300px' }} />
}
DogImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
}

export default DogImage
