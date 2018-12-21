import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import classes from './Blog.module.css';
import { Route, Link } from 'react-router-dom';

class Blog extends Component {
    render () {
        return (
            <>
                <div className={classes.Blog}>
                    <header>
                        <nav>
                            <ul>
                                {/* replace <a href=''> with <Link> to prevent reloading */}
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/new-post'>New Post</Link></li>
                            </ul>
                        </nav>
                    </header>
                    {/* <Route path="/" exact render={ () => <h1>Home</h1> }/>
                    <Route path="/new-post" exact render={ () => <h1>New Post</h1> }/> */}
                    <Route path="/" exact component={ Posts } />
                    <Route path="/new-post" exact component={ NewPost } />
                </div>
                
            </>
        );
    }
}

export default Blog;