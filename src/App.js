import React from "react";
import  "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/About/About";
import Skills from "./components/skills/Skills";
import Education from "./components/Education/Education";
import Certificates from "./components/certificates/Certificates";

import Project from "./components/project/Project";

import Contact from "./components/contact/Contact";




const App = () =>{
    return( 
        <>
        <Sidebar/>
        <main className="main">
        <Home />
        <About />
        <Skills />
        <Education/>
        <Certificates />
        
        <Project />
        
        <Contact />

        </main>

        </>

    );
};
export default App;