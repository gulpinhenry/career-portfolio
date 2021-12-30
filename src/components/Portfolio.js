import * as React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import btc from "../assets/btc.jpg";
import books from "../assets/books.jpg";
import art from "../assets/art.jpg";
import stocks from "../assets/stocks.jpeg";
import budget from "../assets/budget.jpeg";
import weather from "../assets/weather.jfif";


import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';

function PortfolioCard({ loadingState, title, languages, link, picture }) {
    const [slid, setSlide] = React.useState(false);
    const loading = loadingState ? true : false;
    const [project, setProject] = React.useState(false);
    const containerRef = React.useRef(null);
    console.log(project);
    return (
        <Card className="article" sx={{ width: "345px", m: 3 }}
            onMouseEnter={() => { setProject(true); setSlide(true) }}
            onMouseLeave={() => { setProject(false); setSlide(false) }}>
            <a href={link} target="_blank">

                {loading ? (
                    <Skeleton sx={{ height: 450 }} animation="wave" variant="rectangular" />
                ) : (
                    <CardMedia
                        component="img"
                        height="450"
                        image={picture}
                        alt={title}
                    />
                )}
                <CardHeader
                    style={{ color: "#fff" }}
                    title={
                        loading ? (
                            <Skeleton
                                animation="wave"
                                height={10}
                                width="80%"
                            // style={{ marginBottom: 6 }}
                            />
                        ) : (
                            project ? (<Slide direction="right" in={slid} container={containerRef.current} mountOnEnter unmountOnExit><div>{title}</div></Slide>) : (<div>&nbsp;</div>)
                        )
                    }
                />
                <CardContent>
                    {loading ? (
                        <React.Fragment>
                            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                            <Skeleton animation="wave" height={10} width="80%" />
                        </React.Fragment>
                    ) : (
                        project ? (<Fade in={slid} container={containerRef.current} mountOnEnter unmountOnExit><div><Typography variant="body2" color="#fff" component="p">
                            {
                                languages
                            }
                        </Typography></div></Fade>) : (
                            <Typography variant="body2" color="#fff" component="p">
                                &nbsp;
                            </Typography>)

                    )}
                </CardContent>
            </a>
        </Card>
    );
}

// project name, languages, link, picture
const data = [
    ["Cryptocraft", "Cryptocurrency Investment Simulator", "https://github.com/gulpinhenry/cryptocraft", btc],
    ["Book Search Engine", "Personalized Online Library", "https://github.com/gulpinhenry/book-search-engine", books],
    ["3D Gallery Walk", "3D Virtual Art Gallery of the Rijksmuseum", "https://github.com/gulpinhenry/3d-gallery-walk", art],
    ["Moonbase", "Investment Forum with Integrated Stock Data", "https://github.com/gulpinhenry/moonbase", stocks],
    ["Budget Tracker", "Progressive Web Application to track spending", "https://github.com/gulpinhenry/budget-tracker", budget],
    ["Weather Dashboard", "Weekly Weather Forecast of American cities", "https://github.com/gulpinhenry/weather-dashboard", weather],
]

export default function Portfolio() {

    return (
        <div id="portfolio-container" >
            <h4>Portfolio</h4>
            <h1>Work I Have Done</h1>
            <Grid id="portfolio-grid" container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 6, md: 12 }}
                justifyContent="center">
                <Grid style={{ paddingLeft: 0 }} className="article-el" item xs={2} sm={4} md={4} >
                    <ScrollAnimation animateIn="fadeIn" offset={50}>
                        <PortfolioCard title={data[0][0]} languages={data[0][1]} link={data[0][2]} picture={data[0][3]} />
                    </ScrollAnimation>
                </Grid>
                <Grid style={{ paddingLeft: 0 }} className="article-el" item xs={2} sm={4} md={4} >
                    <ScrollAnimation animateIn="fadeIn" offset={50}>
                        <PortfolioCard title={data[1][0]} languages={data[1][1]} link={data[1][2]} picture={data[1][3]} />
                    </ScrollAnimation>
                </Grid>
                <Grid style={{ paddingLeft: 0 }} className="article-el" item xs={2} sm={4} md={4} >
                    <ScrollAnimation animateIn="fadeIn" offset={50}>
                        <PortfolioCard title={data[2][0]} languages={data[2][1]} link={data[2][2]} picture={data[2][3]} />
                    </ScrollAnimation>
                </Grid>
                <Grid style={{ paddingLeft: 0 }} className="article-el" item xs={2} sm={4} md={4} >
                    <ScrollAnimation animateIn="fadeIn" offset={50}>
                        <PortfolioCard title={data[3][0]} languages={data[3][1]} link={data[3][2]} picture={data[3][3]} />
                    </ScrollAnimation>
                </Grid>
                <Grid style={{ paddingLeft: 0 }} className="article-el" item xs={2} sm={4} md={4} >
                    <ScrollAnimation animateIn="fadeIn" offset={50}>
                        <PortfolioCard title={data[4][0]} languages={data[4][1]} link={data[4][2]} picture={data[4][3]} />
                    </ScrollAnimation>
                </Grid>
                <Grid style={{ paddingLeft: 0 }} className="article-el" item xs={2} sm={4} md={4} >
                    <ScrollAnimation animateIn="fadeIn" offset={50}>
                        <PortfolioCard title={data[5][0]} languages={data[5][1]} link={data[5][2]} picture={data[5][3]} />
                    </ScrollAnimation>
                </Grid>
            </Grid>
        </div>

    );
}