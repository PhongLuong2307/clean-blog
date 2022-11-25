import React from 'react';
import BrowserRouter from 'react-router-dom'

const Pager = () => {
    return (
        <React.Fragment>
            {/* <!-- Pager--> */}
            <div className="d-flex justify-content-end mb-4">
                <a className="btn btn-primary text-uppercase" href="#!">
                    Older Posts →
                </a>
            </div>
        </React.Fragment>
    )
}

export default Pager;