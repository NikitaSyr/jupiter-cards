import React from 'react';
import './App.css';
import {Portfolio} from "./components/Portfolio/Portfolio";
import {Header} from "./components/Header/Header";

function App() {
    return (
        <div className="app">
            <div className="app__wrapper">
                <div className="content">
                    <Header/>
                    <div className="content__load">
                        <Portfolio/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
