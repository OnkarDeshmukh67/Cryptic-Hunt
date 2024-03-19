import { useState } from "react";

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
        } else
            setIndex({
                prev: index.prev + 1,
                curr: index.curr + 1,
                nxt: index.nxt + 1
            });
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
    };

    return (
        <>
            <div className="h-screen w-screen flex justify-center items-center relative overflow-hidden">
                <div className="fixed -z-20 w-full h-full">
                    <img
                        src="../src/assets/GamePlanets/background.png"
                        alt=""
                    />
                </div>
                <img
                    className="w-full right-8 absolute bottom-0"
                    src="../src/assets/GamePlanets/SolarSystem.png"
                    alt=""
                />
                <img
                    onClick={previousPlanet}
                    className="h-[300px] w-[350px] absolute -left-48"
                    src={PlanetAssets[index.prev].url}
                    alt=""
                />
                <img
                    className="h-[600px] w-[700px] absolute scale-150 bottom-24"
                    src={PlanetAssets[index.curr].url}
                    alt=""
                />
                <img
                    onClick={nextPlanet}
                    className="h-[300px] w-[350px] absolute -right-44"
                    src={PlanetAssets[index.nxt].url}
                    alt=""
                />
            </div>
        </>
    );
};

export default Gamepage;
