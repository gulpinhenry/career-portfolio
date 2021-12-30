import * as React from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import ScrollAnimation from 'react-animate-on-scroll';

function ArticleCard({ loadingState, title, profileiconurl, time, source, link, imagelink }) {
    const loading = loadingState ? true : false;
    return (
        <Card className="article" sx={{ minWidth: "345px", m: 3 }}>
            <a href={link} target="_blank">
                <CardHeader
                    style={{ color: "#fff" }}
                    avatar={
                        loading ? (
                            <Skeleton animation="wave" variant="circular" width={40} height={40} />
                        ) : (
                            <Avatar
                                alt={title}
                                src={profileiconurl}
                            />
                        )
                    }
                    title={
                        loading ? (
                            <Skeleton
                                animation="wave"
                                height={10}
                                width="80%"
                                style={{ marginBottom: 6 }}
                            />
                        ) : (
                            source
                        )
                    }
                    subheader={
                        loading ? (
                            <Skeleton animation="wave" height={10} width="40%" />
                        ) : (
                            <p>{time}</p>
                        )
                    }
                />
                {loading ? (
                    <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                ) : (
                    <CardMedia
                        component="img"
                        height="190"
                        image={imagelink}
                        alt={title}
                    />
                )}

                <CardContent>
                    {loading ? (
                        <React.Fragment>
                            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                            <Skeleton animation="wave" height={10} width="80%" />
                        </React.Fragment>
                    ) : (
                        <Typography variant="body2" color="#fff" component="p">
                            {
                                title
                            }
                        </Typography>
                    )}
                </CardContent>
            </a>
        </Card>
    );
}


const data = [
    ["Computer Conversations: HTTP", "https://miro.medium.com/fit/c/32/32/1*SpsODOAGmK1RaO99Xp2l9g.jpeg", "11/7/21", "Medium", "https://medium.com/@h3nrykam/computer-conversations-http-73fd637c4764", "https://miro.medium.com/max/700/0*c7yYi2WnYfmcKsv6.jpg"],
    ["First Time Web Dev explains Agile in Layman\'s Terms", "https://miro.medium.com/fit/c/32/32/1*SpsODOAGmK1RaO99Xp2l9g.jpeg", "8/9/21", "Medium", "https://medium.com/@h3nrykam/first-time-web-dev-explains-agile-in-laymans-terms-e72c3f973035", "https://miro.medium.com/max/700/1*E48UPV4i4hneLPey6XRYFw.gif"],
]

export default function Articles() {
    return (

        <div id="article-container" >
            <h4>From My Blog</h4>
            <h1>Latest Publications</h1>
            <Grid id="article-grid" container spacing={8}
                justifyContent="center">
                <Grid style={{ paddingLeft: 0 }} className="article-el" item xs>
                    <ScrollAnimation animateIn="fadeIn" offset={50}>
                        <ArticleCard title={data[0][0]} profileiconurl={data[0][1]} time={data[0][2]} source={data[0][3]} link={data[0][4]} imagelink={data[0][5]} />
                    </ScrollAnimation>
                </Grid>
                <Grid style={{ paddingLeft: 0 }} className="article-el" item xs>
                    <ScrollAnimation animateIn="fadeIn" offset={50}>
                        <ArticleCard title={data[1][0]} profileiconurl={data[1][1]} time={data[1][2]} source={data[1][3]} link={data[1][4]} imagelink={data[1][5]} />
                    </ScrollAnimation>
                </Grid>
                <Grid style={{ paddingLeft: 0 }} className="article-el" item xs>
                    <ScrollAnimation animateIn="fadeIn" offset={50}>
                        <ArticleCard loadingState />
                    </ScrollAnimation>
                </Grid>
            </Grid>
        </div>

    );
}