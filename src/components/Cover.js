import * as React from 'react';
import Nav from "../components/Nav";
import Typical from 'react-typical';

import Slide from '@mui/material/Slide';
// TODO: add slide in animation on first load

export default function Cover() {
    const [slid, setSlide] = React.useState(false);
    const containerRef = React.useRef(null);

    React.useEffect(() => {
        setSlide(true);
    }, []);
    return (
        <div id="cover-container">
            <Nav />

            <div id="title-container">
                <Slide direction="right" in={slid} container={containerRef.current} mountOnEnter unmountOnExit>
                    <h2 id="title-name">I am Henry Kam</h2>
                </Slide>
                <Slide direction="right" in={slid} container={containerRef.current} timeout={{ enter: 300 }} mountOnEnter unmountOnExit>
                    <h1 id="title-occupation">
                        <Typical
                            loop={Infinity}
                            wrapper='b'
                            steps={[
                                "Computer Scientist 💻",
                                2000,
                                'Pianist 🎵',
                                2000,
                                'Materials Scientist 🔬',
                                2000,
                                'Weightlifter 💪',
                                2000,
                                'Gamer 🎮',
                                2000,
                            ]}
                        />
                    </h1>
                </Slide>
                {/* TODO: direct to contact info on click  */}
                <Slide direction="right" in={slid} container={containerRef.current} timeout={{ enter: 500 }} mountOnEnter unmountOnExit>
                    <button id="title-contact">Contact Me</button>
                </Slide>

            </div>
        </div>
    );
}