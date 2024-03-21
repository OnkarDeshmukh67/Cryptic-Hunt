import { useState } from "react";
import { gsap } from "gsap";

const Gamepage = () => {
    const [index, setIndex] = useState({ prev: 7, curr: 0, nxt: 1 });

    const Planets = [
        "Mercury",
        "venus",
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune"
    ];

    const PlanetAssets = Planets.map(planet => ({
        planet,
        url: `../src/assets/gamePlanets/${planet}.png`
    }));

    const nextPlanet = () => {
        
        if (index.nxt == 7) {
            setIndex({ prev: 6, curr: 7, nxt: 0 });
        } else if (index.curr == 7) {
            setIndex({ prev: 7, curr: 0, nxt: 1 });
        } else if (index.prev == 7) {
            setIndex({ prev: 0, curr: 1, nxt: 2 });
        } else {
            setIndex({
                prev: index.prev + 1,
                curr: index.curr + 1,
                nxt: index.nxt + 1
            });
        }        
        
        gsap.to('.solsys' , {rotate : `${-index.nxt*10}deg`})
        // gsap.fromTo('.currPlanet' , {rotateZ : '0deg'} , {rotate: '25deg' , duration : 0.5})
         
            
    };
    const previousPlanet = () => {
        if (index.prev == 0) {
            setIndex({ prev: 7, curr: 0, nxt: 1 });
        } else if (index.curr == 0) {
            setIndex({ prev: 6, curr: 7, nxt: 0 });
        } else if (index.nxt == 0) {
            setIndex({ prev: 5, curr: 6, nxt: 7 });
        } else
            setIndex({
                prev: index.prev - 1,
                curr: index.curr - 1,
                nxt: index.nxt - 1
            });

            gsap.to('.solsys' , {rotate : `${(7 - index.curr)*10}deg`})
            // gsap.fromTo('.currPlanet' , {rotateZ : '-25deg'} , {rotate: '0deg' , duration : 0.5})

    };

    const landPlanet = () => {
        gsap.to('.prevPlanet' , {x: -150})
        gsap.to('.nxtPlanet' , {x: 150})
        gsap.to('.currPlanet' , {x: 700 , y : -50 , scale : 0.75 })
        gsap.to('.solsys' , {x: 750 , y : -350 , scale : .75})
        gsap.to('.changePlanet' , {opacity : 100  , zIndex : 0})
    }

    const changePlanet = () => {
        gsap.to('.prevPlanet' , {x: 0})
        gsap.to('.nxtPlanet' , {x: 0})
        gsap.to('.currPlanet' , {x: 0 , y : 0 , scale : 1.25 })
        gsap.to('.solsys' , {x: 0 , y : 0 , scale : 1})
        gsap.to('.changePlanet' , {opacity : 0  , zIndex : -10})
    }
    return (
        <>
        <div className="w-auto h-auto">
            <div className="planet_select h-screen w-screen flex justify-center items-center relative overflow-hidden">
              <div className="fixed -z-20 w-full h-full">
                <img
                    src="../src/assets/GamePlanets/background.png"
                    alt=""
                    />
                </div>
                <img
                    className="solsys w-full right-8 absolute scale-100 top-1"
                    src="../src/assets/GamePlanets/SolarSystem.png"
                    alt=""
                />
                <img
                    onClick={previousPlanet}
                    className="prevPlanet h-[300px] w-[350px] absolute -left-48 scale-90"
                    src={PlanetAssets[index.prev].url}
                    alt=""
                />
                <img
                onClick={landPlanet}
                    className="currPlanet h-[600px] w-[650px] absolute scale-125 bottom-24"
                    src={PlanetAssets[index.curr].url}
                    alt=""
                />
                <img
                    onClick={nextPlanet}
                    className="nxtPlanet h-[300px] w-[350px] absolute -right-44 scale-90"
                    src={PlanetAssets[index.nxt].url}
                    alt=""
                />

            </div>
              <div>
                  <button onClick={changePlanet} className="changePlanet absolute bottom-10 left-10 text-lg text-gray-500 -z-10 opacity-0 block">{`<BACK`}</button>
              </div>
              <div className="question w-96 h-full border">

              </div>
        </div>
        </>
    );
};

export default Gamepage;
