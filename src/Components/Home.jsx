import React, { useState, useEffect } from "react";
import './Pages.css';

function Home() {
    return (
        <div className = 'home'>
            <div className = 'container pt-3 pb-3 my-3'>
                <div className = 'welcomeMessage'>
                    <label>
                        Hello there! My name is Gao Changxiang, and welcome to my website! Here are some links to start you off!
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Home; 