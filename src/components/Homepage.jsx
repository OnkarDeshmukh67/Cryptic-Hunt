import { gsap } from "gsap";

import React, { useEffect } from 'react'

const Homepage = () => {
  
  useEffect(() => {
    gsap.to('.asteroid' , {duration: 8, rotation : 360 , repeat : -1 , ease: "none"})
  }, [])


  const handleNext = () => {
    gsap.to('.rotating_asteroid' , {
      x : -350,
      ease : 'power1.inOut',
      duration : 1.5
    })

    gsap.fromTo(".profile_details", { opacity: 0 }, { opacity: 1, duration: 1.5 , display : 'flex', ease: "expoScale(0.5,7,none)", });
    gsap.fromTo(".next_btn", {  opacity : 1 }, {opacity : 0});
    gsap.fromTo(".back_btn", {  opacity : 0 }, {opacity : 1 , duration : 2});

    gsap.to('.settings_btn' , {display : 'block'})
  }

  const handleBack = () => {
    gsap.to('.rotating_asteroid' , {
      x : 0,
      ease : 'power1.inOut',
      duration : 1.5
    })

    gsap.fromTo(".profile_details", { opacity: 1 }, { opacity: 0, duration: 1.5 , display : 'flex', ease: "expoScale(0.5,7,none)" })
    gsap.fromTo(".next_btn", {  opacity : 0 }, {opacity : 1, ease: "expoScale(0.5,7,none)"})
    gsap.fromTo(".back_btn", {  opacity : 1 }, {opacity : 0 , duration : 2, ease: "expoScale(0.5,7,none)"})

    gsap.to('.settings_back_btn' , {display : 'none', duration : 0})
    gsap.to('.settings_btn' , {display : 'none' , duration : 0})
    gsap.to(".profile_details", { xPercent : 0, scale : 1});
  }

  const handleSettings = () =>{
    gsap.to('.profile_details' , {
      xPercent : -80 , 
      scale : 0.75
    })
    gsap.to('.settings_back_btn' , {display : 'block'})
    gsap.to('.settings_btn' , {display : 'none' , duration : 0})
  }
  const handleSettingsBack = () =>{
    gsap.fromTo(".profile_details", { xPercent : -80 , scale : 0.75 }, { xPercent : 0, scale : 1});
    gsap.to('.settings_back_btn' , {display : 'none', duration : 0})
    gsap.to('.settings_btn' , {display : 'block'})
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center relative overflow-hidden'>

      <div className="fixed -z-20 w-full h-full"> <img src="../images/Star Animate.png" alt="" /> </div>

      <div className='rotating_asteroid w-3/5 h-3/4 flex justify-center items-center absolute'>

        <div className='circle relative w-96 h-96 rounded-full border-l-0 border-t-2 border-r-2 border-b-2 border-gray-600'>

        <img className="absolute scale-50 z-10 top-[-60px] -left-[60px] " src="../images/planets/mars.svg" alt="" />
          <img className="absolute scale-50 z-10 top-3/4 -left-[80px] " src="../images/planets/Neptune.svg" alt="" />
          <img className="absolute scale-50 z-10 top-3/4 -right-[40px] " src="../images/planets/Mercury.svg" alt="" />
          <img className="absolute scale-50 z-10 top-[10px] -right-[50px] " src="../images/planets/Moon.png" alt="" />

          <div className="hello_txt absolute flex justify-center items-center flex-col h-full w-full right-2/3">
            <h1 className="text-[80px]">Hello</h1>
            <p className="text-[10px]">Lorem ipsum dolor sit amet consectetur, adipisicing <br /> elit. Ducimus deleniti laboriosam atque, corrupti itaque <br />error iste aliquid quis unde consectetur nesciunt quisquam  <br /> fuga ut fugiat odit. Consequuntur, soluta esse!<br />
            Voluptatum</p>
          </div>
          <img className='asteroid h-1/2 w-1/2 absolute mt-24 ml-24' src="../images/asteroid.png" alt="" />
          <button onClick={handleBack} className="back_btn absolute bottom-1/2 right-4 text-lg text-gray-500 opacity-0">{`< Back`}</button>
        </div>

      </div>

      <button onClick={handleNext} className="next_btn text-lg text-gray-500 absolute right-10 z-20">{`Next >`}</button>

      <div className='profile_details absolute h-3/4 w-1/3 flex opacity-0 flex-col items-center justify-center right-16'>
        <img className="h-[100px] w-[100px]" src="" alt="" />
        <p className="text-2xl">Player_name</p>

        <span className="text-[12px] text-gray-400 mt-2">{`Last seen time mins ago`}</span>

        <p className="mt-2">I am the ultimate hacker at bleh and bleh</p>

        <div className="flex h-1/6 w-full justify-center items-center mt-8">
          <span className="w-1/3 h-3/5 flex justify-center items-center flex-col">
            <p className="text-xl">21</p>
            <p className="text-gray-500">Time Played</p>  
          </span>
          <span className="w-1/3 h-3/5 border-r-2 border-l-2 border-gray-400 flex justify-center items-center flex-col">
            <p className="text-xl">248</p>
            <p className="text-gray-500">Questions</p> 
          </span>
          <span className="w-1/3 h-3/5 flex justify-center items-center flex-col">
            <p className="text-xl">108</p>
            <p className="text-gray-500">Score</p> 
          </span>
        </div>

        <button className="h-6 w-16 bg-[#FED964] flex justify-center items-center mt-8">Begin</button>
      </div>

      <button onClick={handleSettings} className="settings_btn absolute right-4 bottom-6 text-xl text-gray-500 hidden">{`Settings >`}</button>
      <button onClick={handleSettingsBack} className="settings_back_btn absolute right-4 bottom-6 text-xl text-gray-500 hidden">{`< Back`}</button>

      <span className="h-2/5 w-0 border absolute right-1/3"></span>

      <div className='user_details border h-3/4 w-1/3 absolute right-0'>

      </div>

      <footer className="fixed bottom-0 scale-75">Made with <img className="scale-75 inline" src="../images/hearts.png" alt="" /> by Coding Club</footer>
    </div>
  )
}

export default Homepage