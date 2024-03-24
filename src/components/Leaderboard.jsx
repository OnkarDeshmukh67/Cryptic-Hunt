import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Leaderboard = () => {

  const [Players , setPlayers] = useState([])

  // async function fetchData () {
  //   const response = await axios.get("/leaderboard")
  //   setPlayers(response.data)
  // }

  // useEffect(()=>{
  //   fetchData()
  // } , [])

  const players = [
    {
      id : 2,
      usrnm : 'baki',
      usrid : 'abc@23',
      score : 12,
      time : '15hr',
    },
    {
      id : 3,
      usrnm : 'jack',
      usrid : 'bdg@9876',
      score : 10,
      time : '14hr',
    },
    {
      id : 1,
      usrnm : 'yujiro',
      usrid : 'jcj@6547',
      score : 18,
      time : '16hr',
    }
  ]
  players.sort((a , b) => {
    return b.score-a.score
  })
  return (
    <>
    <div className='w-screen h-screen flex flex-col justify-center items-center relative mt-12 bg-transparent'>
      <div className="fixed -z-20 w-full h-full bg-cover">
        <img
            className="bg-cover"
            src="./src/assets/GamePlanets/background.png"
            alt=""
          />
      </div>
      <p className='text-5xl tracking-widest'>LEADERBOARD</p>
      <div className='leader_brd w-3/5 h-4/5 flex flex-col '>
        <span className='w-full h-24 bg-slate-400/30 rounded-xl mb-1'></span>
          {players.map(sc => {
            return(
              <div className='w-full h-20 flex justify-around items-center bg-slate-400/30'>
                <p>{sc.id}</p>
                <img src="" alt="" />
                <p>{sc.usrnm}</p>
                <p>{sc.usrid}</p>
                <p>{sc.time}</p>
                <p>{sc.score}</p>
              </div>
            )
          })}
      </div>
    </div>
    </>
  )
}

export default Leaderboard    