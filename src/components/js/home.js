import React, { useEffect, useState, useRef } from 'react';
import '../css/home.css';
import { ReactComponent as HomePageSVG } from '../images/home_page1.svg'; // Assuming you're using SVG as React component

function Home() {
    const [currentPhrase, setCurrentPhrase] = useState('Software Engineer');

    const phrases = ['Software Engineer', 'Backend Engineer', 'Developer', 'Frontend Developer'];
    const indexRef = useRef(0);

    useEffect(() => {
        const changePhrase = () => {
            setCurrentPhrase(phrases[indexRef.current]);
            indexRef.current = (indexRef.current + 1) % phrases.length;
        };

        const interval = setInterval(changePhrase, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home">
            <div className="content">
                <div className="text">
                    <h1>Hi There!</h1>
                    <h2>I am Srinivas Likhith</h2>
                    <div className="line"></div> {/* Line above the moving phrase */}
                    <div className="moving-phrase">
                        <h3>{currentPhrase}</h3>
                    </div>
                    <p>Feel free to download my resume to learn more about my background and skills.</p>
                    <a href="https://drive.google.com/file/d/1w3YYCBRY9CO300vmsnY9clnSgCtaJFW9/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="download-button">Download Resume</a>
                </div>
                <div className="image">
                    <HomePageSVG />
                </div>
            </div>
        </section>
    );
}

export default Home;
