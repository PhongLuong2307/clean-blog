import './App.css';
import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import MainContent from './MainContent';
import Header from './Header';

function App() {
  let headerTitle = "Clean Blog";
  let headerSlogan = "A Blog Theme by Start Bootstrap";
  let bannerURL = 'assets\img\home-bg.jpg';

  return (
    <React.Fragment>
      <Header
        headerSlogan={headerSlogan}
        headerTitle={headerTitle}
        bannerURL={bannerURL}
      >
      </Header>
      <Navigation></Navigation>
      <MainContent></MainContent>
      <Footer></Footer>
    </React.Fragment>
  )
};

export default App;
