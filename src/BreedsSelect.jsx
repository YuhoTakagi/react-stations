// @ts-check
import PropTypes from "prop-types";

/**
 * @param {{ 
 *   breeds: string[], 
 *   selectedBreed: string, 
 *   onChange: (value: string) => void 
 * }} props
 */

export const BreedsSelect = ( { breeds , selectedBreed , onChange }) => {
  return (
  <>
  <select value={selectedBreed} onChange={(e) => onChange(e.target.value)}>
    <option value=""> --犬種を選択してください-- </option>
    {breeds.map((breed) => (
      <option key={breed} value={breed}> {breed} </option>
    ))}
  </select>
  <p> 選択された犬種: {selectedBreed} </p>
  </>
  );
};

BreedsSelect.propTypes = {
  breeds: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedBreed: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};


export default BreedsSelect
