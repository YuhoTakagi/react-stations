// @ts-check
import PropTypes from "prop-types";

export const DogImage = ({ imageUrl }) => {
  return(
  <img className='img' src={imageUrl}/>
  )
}

DogImage.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

export default DogImage
