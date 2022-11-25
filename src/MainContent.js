import React from 'react';
import Pager from './Pager';
import BrowserRouter from 'react-router-dom'
import PostPreview from './PostPreview';

const MainContent = () => {

  let post_data = [
    {
      title: "Man must explore, and this is exploration at its greatest",
      subtitle: "Problems look mighty small from 150 miles up",
      post_time: "September 24, 2022"
    },
    {
      title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
      subtitle: "",
      post_time: "September 18, 2022"
    },
    {
      title: "Science has not yet mastered prophecy",
      subtitle: "We predict too much for the next year and yet far too little for the next ten.",
      post_time: "August 24, 2022"
    },
    {
      title: "Failure is not an option",
      subtitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
      post_time: "July 8, 2022"
    },
  ];

  return (
    <React.Fragment>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            {
              post_data.map((item) => (
                <PostPreview
                  title={item.title}
                  subtitle={item.subtitle}
                  post_time={item.post_time}
                >
                </PostPreview>
              ))
            }

            {/* <!-- Pager--> */}
            <Pager></Pager>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MainContent;