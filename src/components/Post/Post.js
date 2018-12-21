import React from 'react';
// import { withRouter } from 'react-router-dom';

import classes from './Post.module.css';

const post = (props) => (
    <article className={classes.Post} onClick={ props.clicked }>
        <h1>{ props.title }</h1>
        <div className="">
            <div className={classes.Author}>{ props.author }</div>
        </div>
    </article>
);

// example of accessing props with a higher component
// export default withRouter(post);
export default post;