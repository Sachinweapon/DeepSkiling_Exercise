import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(err => {
        console.error("Failed to fetch posts:", err);
        this.setState({ hasError: true });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    alert("An error occurred: " + error.toString());
    console.error("Error caught in componentDidCatch:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while loading posts.</h2>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
