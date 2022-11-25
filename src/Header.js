import React from 'react';
// import BrowserRouter from 'react-router-dom';

const Header = (props) => {

    return (
        <React.Fragment>
            {/* <!-- Page Header--> */} 
            <header className="masthead" style={{backgroundImage: `url${props.bannerURL}`}}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="site-heading">
                                <h1>{props.headerTitle}</h1>
                                <span className="subheading">{props.headerSlogan}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;