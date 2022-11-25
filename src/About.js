import React from "react";
import BrowserRouter from 'react-router-dom';
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
    let headerTitle = 'About Me';
    let headerSlogan = 'This is what I do ';
    let bannerURL = 'assets/img/about-bg.jpg'
    return (
        <React.Fragment>
            <Navigation></Navigation>
            <Header
                headerSlogan={headerSlogan}
                headerTitle={headerTitle}
                bannerURL={bannerURL}
            >
            </Header>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default About;