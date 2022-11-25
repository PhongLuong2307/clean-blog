import React from 'react';
import Divider from './Divider';

const PostPreview = (props) => {
    return (
        <React.Fragment>
            {/* <!-- Post preview--> */}
            <div className="post-preview">
                <a href="post.html">
                    <h2 className="post-title">{props.title}</h2>
                    <h3 className="post-subtitle">{props.subtitle}</h3>
                </a>
                <p className="post-meta">
                    Posted by {''}
                    <a href="#!">Start Bootstrap </a>
                    on {props.post_time}
                </p>
            </div>
            <Divider></Divider>
        </React.Fragment>
    )
}

export default PostPreview;