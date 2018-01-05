import React, { Component } from 'react';
import PageComponent from './Post/PageComponent'
import * as PostAPI from './Post/PostAPI'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    posts: [],
    error: '',
  }

  retrievePosts(){
    PostAPI.getAll().then((posts) => {
      this.setState({ posts: posts || []})
      console.log("posts = "+posts)
    }).catch((e) => {
      this.setState({error: "Error -- "+e});
      console.log('error:', e);
    });
}

  componentDidMount() {
    this.retrievePosts();
  }

  render() {
    const { posts } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Readable</h1>
        </header>
        <PageComponent posts={posts} />
      </div>
    );
  }
}

export default App;
