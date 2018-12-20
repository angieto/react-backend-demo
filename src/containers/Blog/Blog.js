import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import classes from './Blog.module.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }

    // create side-effect (fetch data) upon componentDidMount() life-cycle
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then( res => {
                 const posts = res.data.slice(0, 4);
                 const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                 this.setState({ posts: updatedPosts });
             });
    }
    
    // methods
    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

    render () {
        const posts = this.state.posts.map(post => {
            return <Post key={post.id} 
                         title={post.title} 
                         author={post.author} 
                         clicked={ () => this.postSelectedHandler(post.id) } />
        });

        return (
            <>
                <div className={classes.Blog}>
                    <header>
                        <nav>
                            <u>
                                <li><a href="/">Home</a></li>
                                <li><a href="/new-post">New Post</a></li>
                            </u>
                        </nav>
                    </header>
                </div>
                <div>
                    <section className={classes.Blog}>
                        { posts }
                    </section>
                    <section>
                        <FullPost id={ this.state.selectedPostId }/>
                    </section>
                    <section>
                        <NewPost />
                    </section>
                </div>
            </>
        );
    }
}

export default Blog;