// DO NOT DELETE

import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import Description from './Description'
import DogImage from './DogImage'
import DogListContainer from './DogListContainer'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/malinois/n02105162_5667.jpg',
  )

  useEffect(() => {
    ;(async () => {
      const res = await fetch('https://dog.ceo/api/breeds/image/random')
      const data = await res.json()
      setDogUrl(data.message)
    })()
  }, [])
  return (
    <>
      <Header />
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Description />
        <DogImage imageUrl={dogUrl} />
        <button
          onClick={async () => {
            const res = await fetch('https://dog.ceo/api/breeds/image/random')
            const data = await res.json()
            setDogUrl(data.message)
          }}
        >
          update
        </button>
        <DogListContainer />
      </main>
    </>
  )
}
