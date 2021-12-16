import * as React from 'react';
import Nav from "../components/Nav";
import Typical from 'react-typical';



export default function Cover() {
    return (
        <div id="cover-container">
            <Nav />
            <div id = "title-container">
                <h2 id = "title-name">I am Henry Kam</h2>
                <h1 id = "title-occupation">
                    {/* increase line height so the text doesnt fall */}
                    <Typical
                        loop={Infinity}
                        wrapper='b'
                        steps={[
                            "Computer Scientist 💻",
                            1000,
                            'Pianist 🎵',
                            1000,
                            'Materials Scientist 🔬',
                            1000,
                            'Weightlifter 💪',
                            1000,
                            'Gamer 🎮',
                            1000,
                        ]}
                    />
                </h1>
                {/* TODO: direct to contact info on click  */}
                <button id = "title-contact">Contact Me</button>
            </div>
        </div>
    );
}