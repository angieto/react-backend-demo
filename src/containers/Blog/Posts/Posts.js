import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import classes from './Posts.module.css';

class Posts extends Component {
    state = {
        posts: []
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
            <section className={classes.Posts}>
                { posts }
            </section>
        );
    }
}

export default Posts;