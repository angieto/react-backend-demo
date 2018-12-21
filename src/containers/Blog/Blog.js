import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import classes from './Blog.module.css';
import { Route, NavLink } from 'react-router-dom';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render () {
        return (
            <>
                <div className={classes.Blog}>
                    <header>
                        <nav>
                            <ul>
                                {/* replace <a href=''> with <NavLink> to prevent reloading */}
                                <li><NavLink to='/' exact> Home </NavLink></li>
                                <li><NavLink to='/new-post'> New Post </NavLink></li>
                            </ul>
                        </nav>
                    </header>
                    {/* <Route path="/" exact render={ () => <h1>Home</h1> }/>
                    <Route path="/new-post" exact render={ () => <h1>New Post</h1> }/> */}
                    <Route path="/" exact component={ Posts } />
                    <Route path="/new-post" exact component={ NewPost } />
                    <Route path="/:id" exact component={ FullPost } />
                </div>
                
            </>
        );
    }
}

export default Blog;