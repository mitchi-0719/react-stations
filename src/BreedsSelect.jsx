// @ts-check

import PropTypes from 'prop-types'

/**
 * @param {{ breeds: string[],state: string, setState: React.Dispatch<React.SetStateAction<any>> }} props
 * @returns {JSX.Element}
 */
export const BreedsSelect = ({ breeds, state, setState }) => {
  return (
    <select onChange={e => setState(e.target.value)} value={state}>
      {breeds.map((breed, index) => (
        <option key={index} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  )
}

BreedsSelect.propTypes = {
  breeds: PropTypes.arrayOf(PropTypes.string).isRequired,
  state: PropTypes.any.isRequired,
  setState: PropTypes.func.isRequired,
}

export default BreedsSelect
