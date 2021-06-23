import React, { useContext } from "react";
// import { VscGithub } from "react-icons/vsc";
import { FaBeer } from 'react-icons/fa'
import Typewriter from "typewriter-effect";
import ThemeContext from "../../ThemeContext";
import AppTheme from "../../Themes";
import { picUrl, strings } from "./../../Data/homeData";
import "./Home.css";

function Home() {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <div className="home-page">
      <div className="center-content">
        <img className="pic" alt="" src={picUrl} />
        <div>Hi, I am</div>
        <strong>Suraj Patil</strong>
        <Typewriter
          options={{
            strings: strings,
            autoStart: true,
            loop: true,
            delay: 50,
          }}
        />
        <button
          className="button"
          style={{
            backgroundColor: `${currentTheme.darkBackground}`,
          }}
        >
          <FaBeer />
          <p>surajpatil369</p>
        </button>
      </div>
    </div>
  );
}

export default Home;
