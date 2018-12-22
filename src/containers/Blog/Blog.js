import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import classes from './Blog.module.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render () {
        return (
            <>
                <div className={classes.Blog}>
                    <header>
                        <nav>
                            <ul>
                                {/* replace <a href=''> with <NavLink> to prevent reloading */}
                                <li><NavLink to='/posts' exact> Home </NavLink></li>
                                <li><NavLink to='/new-post'> New Post </NavLink></li>
                            </ul>
                        </nav>
                    </header>
                    {/* <Route path="/" exact render={ () => <h1>Home</h1> }/>
                    <Route path="/new-post" exact render={ () => <h1>New Post</h1> }/> */}
                    {/* <Switch> ensures that only 1 route gets loaded */}
                    {/* route order is important */}
                    <Switch>
                        <Route path="/new-post" exact component={ NewPost } />
                        <Route path="/posts" component={ Posts } />
                        {/* <Route path="/:id" exact component={ FullPost } /> */}
                        <Redirect from='/' to='/posts' />
                    </Switch>
                    
                </div>
                
            </>
        );
    }
}

export default Blog;