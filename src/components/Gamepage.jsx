import { useState } from "react";
import { gsap } from "gsap";

const Gamepage = () => {
    const [index, setIndex] = useState({ prev: 6, curr: 0, nxt: 1 });
    const [level , setlevel] = useState(1)
    const [question , setQuestion] = useState("Who is the father of communism?")

    const Planets = [
        "Gluttony",
        "Greed",
        "Envy",
        "Wrath",
        "Pride",
        "Lust",
        "Sloth",
    ];
    const PlanetsDetails = [
        {
            planet : "Gluttony",
            diameter : '4880 km',
            dayLength : '4224 hours',
            avgTemp : '100 to 700 K',
            climate: 'Scorching'
        },
        {
            planet : "Greed",
            diameter : '12104 km',
            dayLength : '28020 hours',
            avgTemp : '735 K',
            climate: 'Inferno'
        },
        {
            planet : "Envy",
            diameter : '12742 km',
            dayLength : '4860 hours',
            avgTemp : '185 to 215 K',
            climate: 'Diverse'
        },
        {
            planet : "Wrath",
            diameter : '6779 km',
            dayLength : '246 hours',
            avgTemp : '130to 308 K',
            climate: 'Frigid'
        },
        {
            planet : "Pride",
            diameter : '4880 km',
            dayLength : '4224 hours',
            avgTemp : '100 to 700 K',
            climate: 'Tempestous'
        },
        {
            planet : "Lust",
            diameter : '139,820km',
            dayLength : '9.9 hours',
            avgTemp : '128 to 165 K',
            climate: 'Icy'
        },
        {
            planet : "Sloth",
            diameter : '50,704 km',
            dayLength : '17.2 hours',
            avgTemp : '49 to 76 K',
            climate: 'Blustery'
        }
    ];

    const PlanetAssets = PlanetsDetails.map(planet => ({
        planet,
        url: `./src/assets/gamePlanets/${planet.planet}.png`
    }));

    const nextPlanet = () => {
        
        if (index.nxt == 6) {
            setIndex({ prev: 5, curr: 6, nxt: 0 });
        } else if (index.curr == 6) {
            setIndex({ prev: 6, curr: 0, nxt: 1 });
        } else if (index.prev == 6) {
            setIndex({ prev: 0, curr: 1, nxt: 2 });
        } else {
            setIndex({
                prev: index.prev + 1,
                curr: index.curr + 1,
                nxt: index.nxt + 1
            });
        }        
        
        gsap.to('.solsys' , {rotate : `${-index.nxt*10}deg`})
        gsap.fromTo('.currPlanet' , {rotateZ : '0deg' , scale : 0.5} , {rotate: '75deg' , duration : 0.5 , scale : 1})
        gsap.fromTo('.nxtPlanet' , {x : -100} , {x : 0 , duration : 0.5})
        gsap.fromTo('.prevPlanet' ,  {x : 100} , {x : 0 , duration : 0.5})
            
    };
    const previousPlanet = () => {
        if (index.prev == 0) {
            setIndex({ prev: 6, curr: 0, nxt: 1 });
        } else if (index.curr == 0) {
            setIndex({ prev: 5, curr: 6, nxt: 0 });
        } else if (index.nxt == 0) {
            setIndex({ prev: 4, curr: 5, nxt: 6 });
        } else
            setIndex({
                prev: index.prev - 1,
                curr: index.curr - 1,
                nxt: index.nxt - 1
            });

            gsap.to('.solsys' , {rotate : `${(6 - index.curr)*10}deg`})
            gsap.fromTo('.currPlanet' , {rotateZ : '75deg' , scale : 0.5} , {rotate: '0deg' , duration : 0.5 , scale : 1})
            gsap.fromTo('.nxtPlanet' , {x : -100} , {x : 0 , duration : 0.5})
            gsap.fromTo('.prevPlanet' ,  {x : 100} , {x : 0 , duration : 0.5})
    };

    const landPlanet = () => {
        gsap.to('.prevPlanet' , {x: -150})
        gsap.to('.nxtPlanet' , {x: 150})
        gsap.to('.currPlanet' , {x: 750 , y : -250 , scale : 0.75 })
        gsap.to('.solsys' , {x: 750 , y : -350 , scale : .75})
        gsap.to('.changePlanet' , {opacity : 100  , zIndex : 0})
        gsap.fromTo('.question' , {opacity : 0  , zIndex : -10} , {opacity : 100  , zIndex : 0})
        gsap.to('.planet_info' , {zIndex :  -10 , opacity : 0})
    }

    const changePlanet = () => {
        gsap.to('.prevPlanet' , {x: 0})
        gsap.to('.nxtPlanet' , {x: 0})
        gsap.to('.currPlanet' , {x: 0 , y : 0 , scale : 1.25 })
        gsap.to('.solsys' , {x: 0 , y : 0 , scale : 1})
        gsap.to('.changePlanet' , { duration : 1 ,opacity : 0  , zIndex : -10})
        gsap.to('.question' , {opacity : 0  , zIndex : -10 , duration : 0})
        gsap.to('.planet_info' , {zIndex : 10 , opacity : 1})
    }
    return (
        <>
        <div className="w-auto h-auto flex justify-center">

            <div className="navbar fixed h-20 w-screen flex justify-around items-center">
                <span className="text-[14px]">Profile</span>
                <span className="text-[14px]">Leaderboard</span>
                <span className="text-[20px]">Cryptic Hunt</span>
                <span className="text-[14px]">Rules</span>
                <span className="text-[14px]">Contact Us</span>
            </div>

            <div className="planet_info h-1/4 w-1/3 absolute top-14 flex flex-col justify-center items-center z-10">
                <span className="text-4xl">{Planets[index.curr].toLocaleUpperCase()}</span>
                <div className="w-full mt-4 flex justify-around items-center text-[12px]">
                    <div className="flex flex-col justify-center items-center">
                    <span className="text-gray-500">DIAMETER</span>
                    <span>{PlanetsDetails[index.curr].diameter}</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                    <span className="text-gray-500">DAY LENGTH</span>
                    <span> {PlanetsDetails[index.curr].dayLength} </span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                    <span className="text-gray-500">AVG TEMPERATURE</span>
                    <span> {PlanetsDetails[index.curr].avgTemp} </span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                    <span className="text-gray-500">CLIMATE</span>
                    <span> {PlanetsDetails[index.curr].climate} </span>
                    </div>              
                </div>
            </div>

            <div className="planet_select h-screen w-screen flex justify-center items-center relative overflow-hidden">
              <div className="fixed -z-20 w-full h-full bg-cover">
                <img
                className="bg-cover"
                    src="./src/assets/GamePlanets/background.png"
                    alt=""
                    />
                </div>
                <img
                    className="solsys w-full right-8 absolute scale-90 -top-20"
                    src="./src/assets/GamePlanets/SolarSystem.png"
                    alt=""
                />
                <img
                    onClick={previousPlanet}
                    className="prevPlanet h-[300px] w-[350px] absolute bottom-24 -left-48 scale-75"
                    src={PlanetAssets[index.prev].url}
                    alt=""
                />
                <img
                onClick={landPlanet}
                    className="currPlanet h-[400px] w-[400px] absolute scale-125 bottom-20 left-1/3 ml-6"
                    src={PlanetAssets[index.curr].url}
                    alt=""
                />
                <img
                    onClick={nextPlanet}
                    className="nxtPlanet h-[300px] w-[350px] absolute bottom-24 -right-44 scale-75"
                    src={PlanetAssets[index.nxt].url}
                    alt=""
                />
            </div>
              <div>
                  <button onClick={changePlanet} className="changePlanet absolute bottom-10 left-10 text-lg text-gray-500 -z-10 opacity-0 block">{`<BACK`}</button>
              </div>
              <div className="question w-1/3 h-3/4 absolute top-20 left-10 flex flex-col items-center justify-around -z-10 opacity-0">
                <span className="Q_name w-full text-center">{`Stellar Conundrum : Query ${level}`} </span>
                <div className="q_space w-3/4 border h-52  bg-black rounded-2xl"></div>
                <p className="q_description w-3/4 h-auto">{question}</p>
                <button className="border w-48 h-8 rounded-2xl bg-[#D9D9D9]/[0.22] tracking-wider text-sm">Submit</button>
                <div className="progressbar w-56 h-2 border rounded-2xl bg-[#454545] "></div>
              </div>
        </div>
        </>
    );
};

export default Gamepage;
