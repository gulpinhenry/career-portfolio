import * as React from 'react';
import template from "../assets/template.png";
import portrait from "../assets/portrait.jpg"
import resume from "../assets/Henry_Resume.pdf";

// TODO: Change Typography elements
const biotext = `Aspiring full stack web developer utilizing an engineering philosophy to optimize servers and databases to increase website functionality. Completed UC Berkeley’s full stack extension program and currently pursuing a computer engineering degree at New York University, and hoping to apply my refined proficiency in Java, HTML/CSS, Javascript, and other languages/frameworks to create efficient yet robust applications. Co-authored materials science research papers published in leading journals, I have acquired experience to creatively problem solve and work efficiently in a collaborative environment. Excited to utilize my passion for web development as well as my MERN stack expertise to engineer effective web applications. Composer and rearranger of artists such as IU, Illenium, and Foo Fighters. Weightlifting, badminton, and video games enthusiast.`
function Main() {
    return (
        <div id="bio-main">
            <h4>Student Web Developer {"&"} Software Engineer</h4>
            <h1>About Me</h1>
            <p> &ensp; {biotext}</p>
            <a href={resume} target="_blank"><button className = "reg-button" id="resume-btn">Download Resume</button></a>
        </div>
    );
}

function Pic() {
    return (
        <div id="bio-aside">
            <img src = {portrait} id = "bio-img" alt="portrait photo"></img>
        </div>
    );
}

export default function Bio() {
    return (
        <div id="bio-container">
            <Main />
            <Pic />
        </div>
    );
}