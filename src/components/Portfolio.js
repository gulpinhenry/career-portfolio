import * as React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import btc from "../assets/btc.jpg";
import books from "../assets/books.jpg";
import art from "../assets/art.jpg";
import stocks from "../assets/stocks.jpeg";
import budget from "../assets/budget.jpeg";
import weather from "../assets/weather.jfif";

export default function Portfolio() {
    const [project, setProject] = React.useState(-1);
    return (
        <div id="portfolio-container">
            <h4>Portfolio</h4>
            <h1>Work I Have Done</h1>
            <ul id="portfolio-list">
                <li>

                    <ScrollAnimation animateIn="fadeIn" offset={50}>
                        <a target="_blank" href='https://github.com/gulpinhenry/cryptocraft'>
                            <img src={btc} alt='Cryptocraft Project'
                                onMouseEnter={() => { console.log("cryptohi"); setProject(0) }}
                                onMouseLeave={() => { console.log("crpytobye"); setProject(-1); }}
                            ></img>
                        </a>
                    </ScrollAnimation>
                    {project == 0 ? <div className='portfolio-popup'><h1>cryptocraft</h1></div> : null}
                    {/* some div with the animated stuff and info add parent animation*/}

                </li>
                <li>
                    <ScrollAnimation animateIn="fadeIn" offset={50}>
                        <a target="_blank" href='https://github.com/gulpinhenry/book-search-engine'>
                            <img src={books} alt='Book Search Engine Project'
                                onMouseEnter={() => { console.log("bookhi"); setProject(1) }}
                                onMouseLeave={() => { console.log("bookbye"); setProject(-1); }}
                            ></img>
                        </a>
                    </ScrollAnimation>
                    {project == 1 ? <div className='portfolio-popup'><h1>books</h1></div> : null}
                </li>
                <li>
                    <ScrollAnimation animateIn="fadeIn" offset={50}>
                        <a target="_blank" href='https://github.com/gulpinhenry/3d-gallery-walk'>
                            <img src={art} alt='3D Art Gallery Project'
                                onMouseEnter={() => { console.log("arthi"); setProject(2) }}
                                onMouseLeave={() => { console.log("artbye"); setProject(-1); }}
                            ></img>
                        </a>
                    </ScrollAnimation>
                    {project == 2 ? <div className='portfolio-popup'><h1>art</h1></div> : null}
                </li>
                <li>
                    <ScrollAnimation animateIn="fadeIn" offset={50}>
                        <a target="_blank" href='https://github.com/gulpinhenry/moonbase'>
                            <img src={stocks} alt='Moonbase Project'
                                onMouseEnter={() => { console.log("moonhi"); setProject(3) }}
                                onMouseLeave={() => { console.log("moonbye"); setProject(-1); }}
                            ></img>
                        </a>
                    </ScrollAnimation>
                    {project == 3 ? <div className='portfolio-popup'><h1>moon</h1></div> : null}
                </li>
                <li>
                    <ScrollAnimation animateIn="fadeIn" offset={50}>
                        <a target="_blank" href='https://github.com/gulpinhenry/budget-tracker'>
                            <img src={budget} alt='Budget Tracker PWA Project'
                                onMouseEnter={() => { console.log("budgethi"); setProject(4) }}
                                onMouseLeave={() => { console.log("budgetbye"); setProject(-1); }}
                            ></img>
                        </a>
                    </ScrollAnimation>
                    {project == 4 ? <div className='portfolio-popup'><h1>budget</h1></div> : null}
                </li>
                <li>
                    <ScrollAnimation animateIn="fadeIn" offset={50}>
                        <a target="_blank" href='https://github.com/gulpinhenry/weather-dashboard'>
                            <img src={weather} alt='Weather Dashboard Project'
                                onMouseEnter={() => { console.log("weatherhi"); setProject(5) }}
                                onMouseLeave={() => { console.log("weatherbye"); setProject(-1); }}
                            ></img>
                        </a>
                    </ScrollAnimation>
                    {project == 5 ? <div className='portfolio-popup'><h1>weather</h1></div> : null}
                </li>

            </ul>

        </div>
    );
}