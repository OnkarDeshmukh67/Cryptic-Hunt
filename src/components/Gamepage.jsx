import React, { useState } from 'react'

const Gamepage = () => {

  const [index , setIndex] = useState(0)
  
  const PlanetsArray = [
    {
      planet : 'Mercury',
      url : '../src/assets/gamePlanets/Mercury.png'
    },
    {
      planet : 'venus',
      url : '../src/assets/gamePlanets/venus.png'
    },
    {
      planet : 'Earth',
      url : '../src/assets/gamePlanets/Earth.png'
    },
    {
      planet : 'Mars',
      url : '../src/assets/gamePlanets/Mars.png'
    },
    {
      planet : 'Jupiter',
      url : '../src/assets/gamePlanets/Jupiter.png'
    },    {
      planet : 'Saturn',
      url : '../src/assets/gamePlanets/Saturn.png'
    },
    {
      planet : 'Uranus',
      url : '../src/assets/gamePlanets/Uranus.png'
    },
    {
      planet : 'Neptune',
      url : '../src/assets/gamePlanets/Neptune.png'
    }
  ]
 
  return (
    <>
    <div className='h-full w-full flex justify-between items-center'>
        <img className='h-1/4 w-1/4' src={PlanetsArray[index].url} alt="" />
    </div>
    </>
  )
}

export default Gamepage