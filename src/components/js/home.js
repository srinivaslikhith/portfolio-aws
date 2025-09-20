// Home.jsx
import React, { useEffect, useState } from 'react';
import '../css/home.css';
import ProfilePic from '../images/profile.jpeg';

function Home() {
  const [currentPhrase, setCurrentPhrase] = useState('Software Engineer');
  const [isAnimating, setIsAnimating] = useState(false);
  const phrases = ['Software Engineer', 'Backend Engineer', 'Developer', 'Frontend Developer'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullText = "Hi There!\nI am Srinivas Likhith Raichur";

  // ✅ Typewriter effect for intro text
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [typedText]);

  // ✅ Rotating job titles once typing is done
  useEffect(() => {
    if (!isTypingComplete) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [isTypingComplete]);

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/14CwIBtelo5e86sXMknRHZNX1ZuqL_z7I/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section id="home">
      <div className="home-card">
        {/* Left side: circular photo */}
        <div className="home-left">
          <img src={ProfilePic} alt="Profile" className="profile-circle" />
        </div>

        {/* Right side: typewriter + rotating phrases + resume */}
        <div className="home-right">
          {/* Typewriter intro */}
          <div className="typewriter-text">
            {typedText.split('\n').map((line, index) => (
              <div key={index} className="typed-line">
                {line}
                {index === typedText.split('\n').length - 1 && typedText.length < fullText.length ? (
                  <span className="cursor">|</span>
                ) : null}
              </div>
            ))}
          </div>

          {/* Rotating job titles */}
          {isTypingComplete && (
            <div className="phrase-container">
              <h3 className={`single-phrase ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                {phrases[currentIndex]}
                <span className="cursor">|</span>
              </h3>
            </div>
          )}

          {/* Resume button */}
          <div className="resume-link-container">
            <button
              onClick={handleResumeClick}
              className="resume-link"
              aria-label="Download Resume"
            >
              <span className="resume-text">{"< Resume />"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
