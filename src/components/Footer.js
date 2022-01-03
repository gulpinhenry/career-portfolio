import * as React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
                
                <div className="icons">
                    <a href="https://github.com/gulpinhenry" target="_blank"><i className="fa fa-github">Github</i></a>
                    <a href="https://www.linkedin.com/in/kamhenry/" target="_blank"><i className="fa fa-linkedin">LinkedIn</i></a>
                    <a href="https://twitter.com/gulpinhenry" target="_blank"><i className="fa fa-twitter">Twitter</i></a>
                    <a href="mailto:h3nrykam@gmail.com" target="_blank"><i className="fa fa-gmail">Gmail</i></a>
                    <a href="https://www.youtube.com/channel/UCxkAspmWlZ51Ikvvhw9bB4Q" target="_blank"><i className="fa fa-gmail">Youtube</i></a>
                </div>


                <p className="copyright"> Henry Kam &copy; 2021</p>

        </footer>
    );
}