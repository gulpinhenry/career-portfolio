import * as React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import btc from "../assets/btc.jpg";
import books from "../assets/books.jpg";
import art from "../assets/art.jpg";
import stocks from "../assets/stocks.jpeg";
import budget from "../assets/budget.jpeg";
import weather from "../assets/weather.jfif";

export default function Portfolio() {
    const [project, setProject] = React.useState([-1,""]);
    console.log(project[0]);
    return (
        <div id="portfolio-container">
            <h4>Portfolio</h4>
            <h1>Work I Have Done</h1>
            <ul id="portfolio-list">
                <li>

                    <ScrollAnimation animateIn="fadeIn" offset={50}>
                        <a target="_blank" href='https://github.com/gulpinhenry/cryptocraft'>
                            <img src={btc} alt='Cryptocraft Project'
                                onMouseEnter={() => {console.log("cryptohi"); setProject([0,"some stuff about crypto"])}}
                                onMouseLeave={() => {console.log("crpytobye"); setProject([-1, ""]);}}
                            ></img>
                        </a>
                    </ScrollAnimation>
                    {project[0] == 0 ? <h1>{project[1]}</h1> : null }
                    {/* some div with the animated stuff and info add parent animation*/}

                </li>
                <li>
                    <ScrollAnimation animateIn="fadeIn" offset={50}>
                        <a target="_blank" href='https://github.com/gulpinhenry/book-search-engine'>
                            <img src={books} alt='Book Search Engine Project'
                                onMouseEnter={() => {console.log("bookhi"); setProject([1,"some stuff about books"])}}
                                onMouseLeave={() => {console.log("bookbye"); setProject([-1, ""]);}}
                            ></img>
                        </a>
                    </ScrollAnimation>
                    {project[0] == 1 ? <h1>{project[1]}</h1> : null }
                </li>
                <li>
                        <ScrollAnimation animateIn="fadeIn" offset={50}>
                            <a target="_blank" href='https://github.com/gulpinhenry/3d-gallery-walk'>
                                <img src={art} alt='3D Art Gallery Project'
                                    onMouseEnter={() => {console.log("arthi"); setProject([2,"some stuff about art"])}}
                                    onMouseLeave={() => {console.log("artbye"); setProject([-1, ""]);}}
                                ></img>
                            </a>
                        </ScrollAnimation>
                        {project[0] == 2 ? <h1>{project[1]}</h1> : null }
                </li>
                <li>
                        <ScrollAnimation animateIn="fadeIn" offset={50}>
                            <a target="_blank" href='https://github.com/gulpinhenry/moonbase'>
                                <img src={stocks} alt='Moonbase Project'
                                    onMouseEnter={() => {console.log("moonhi"); setProject([3,"some stuff about moon"])}}
                                    onMouseLeave={() => {console.log("moonbye"); setProject([-1, ""]);}}
                                ></img>
                            </a>
                        </ScrollAnimation>
                        {project[0] == 3 ? <h1>{project[1]}</h1> : null }
                </li>
                <li>
                        <ScrollAnimation animateIn="fadeIn" offset={50}>
                            <a target="_blank" href='https://github.com/gulpinhenry/budget-tracker'>
                                <img src={budget} alt='Budget Tracker PWA Project'
                                    onMouseEnter={() => {console.log("budgethi"); setProject([4,"some stuff about budget"])}}
                                    onMouseLeave={() => {console.log("budgetbye"); setProject([-1, ""]);}}
                                ></img>
                            </a>
                        </ScrollAnimation>
                        {project[0] == 4 ? <h1>{project[1]}</h1> : null }
                </li>
                <li>
                        <ScrollAnimation animateIn="fadeIn" offset={50}>
                            <a target="_blank" href='https://github.com/gulpinhenry/weather-dashboard'>
                                <img src={weather} alt='Weather Dashboard Project'
                                    onMouseEnter={() => {console.log("weatherhi"); setProject([5,"some stuff about weater"])}}
                                    onMouseLeave={() => {console.log("weatherbye"); setProject([-1, ""]);}}
                                ></img>
                            </a>
                        </ScrollAnimation>
                        {project[0] == 5 ? <h1>{project[1]}</h1> : null }
                </li>

            </ul>

        </div>
    );
}