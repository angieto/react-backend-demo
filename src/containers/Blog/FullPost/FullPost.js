import React, { Component } from 'react';
import axios from 'axios';
import classes from './FullPost.module.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    // fetch data
    loadData() {
        if (this.props.match.params.id) {
            // to prevent continuous data fetching, only fetch data when receiving new post
            if ( !this.state.loadedPost 
                || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) ) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
                .then( res => {
                    this.setState({ loadedPost: res.data })
                });
            }    
        }
    }

    componentDidMount() {
        console.log(this.props);
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    postDeleteHandler = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
             .then( res => {
                 console.log(res);
             })
             .catch( err => {
                 console.log(err);
             });
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.match.params.id) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className={classes.FullPost}>
                    <h1>{ this.state.loadedPost.title }</h1>
                    <p>{ this.state.loadedPost.body }</p>
                    <div className="Edit">
                        <button className="btn btn-danger"
                                onClick={this.postDeleteHandler}>Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;