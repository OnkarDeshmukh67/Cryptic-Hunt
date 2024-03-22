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

    const PlanetAssets = Planets.map(planet => ({
        planet,
        url: `../src/assets/gamePlanets/${planet}.png`
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
        gsap.fromTo('.currPlanet' , {rotateZ : '0deg'} , {rotate: '25deg' , duration : 0.5})
         
            
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
            gsap.fromTo('.currPlanet' , {rotateZ : '25deg'} , {rotate: '0deg' , duration : 0.5})

    };

    const landPlanet = () => {
        gsap.to('.prevPlanet' , {x: -150})
        gsap.to('.nxtPlanet' , {x: 150})
        gsap.to('.currPlanet' , {x: 700 , y : -50 , scale : 0.75 })
        gsap.to('.solsys' , {x: 750 , y : -350 , scale : .75})
        gsap.to('.changePlanet' , {opacity : 100  , zIndex : 0})
        gsap.fromTo('.question' , {opacity : 0  , zIndex : -10} , {opacity : 100  , zIndex : 0})
    }

    const changePlanet = () => {
        gsap.to('.prevPlanet' , {x: 0})
        gsap.to('.nxtPlanet' , {x: 0})
        gsap.to('.currPlanet' , {x: 0 , y : 0 , scale : 1.25 })
        gsap.to('.solsys' , {x: 0 , y : 0 , scale : 1})
        gsap.to('.changePlanet' , { duration : 1 ,opacity : 0  , zIndex : -10})
        gsap.to('.question' , {opacity : 0  , zIndex : -10 , duration : 0})
    }
    return (
        <>
        <div className="w-auto h-auto">
            <div className="planet_select h-screen w-screen flex justify-center items-center relative overflow-hidden">
              <div className="fixed -z-20 w-full h-full bg-cover">
                <img
                className="bg-cover"
                    src="../src/assets/GamePlanets/background.png"
                    alt=""
                    />
                </div>
                <img
                    className="solsys w-full right-8 absolute scale-90 -top-20"
                    src="../src/assets/GamePlanets/SolarSystem.png"
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
