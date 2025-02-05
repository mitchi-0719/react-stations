// @ts-check

import { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([''])
  const [selectedBreed, setSelectedBreed] = useState('akita')
  const [dogUrls, setDogUrls] = useState([])
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => {
        setBreeds(Object.keys(data.message))
      })
  }, [])

  const handleClick = () => {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
      .then(res => res.json())
      .then(data => {
        setDogUrls(data.message)
      })
  }
  return (
    <>
      <h2>Dog List Container</h2>
      <p>{selectedBreed}</p>
      <BreedsSelect
        breeds={breeds}
        state={selectedBreed}
        setState={setSelectedBreed}
      />
      <button onClick={handleClick}>表示</button>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {dogUrls &&
          dogUrls.map((url, index) => (
            <img key={index} src={url} alt="dog" style={{ width: '200px' }} />
          ))}
      </div>
    </>
  )
}

export default DogListContainer
