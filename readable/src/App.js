import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import PageComponent from './Post/PageComponent'
import PostComponent from './Post/PostComponent'
import * as BackendAPI from './BackendAPI'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    posts: [],
    error: '',
  }

  retrievePosts(){
    BackendAPI.getAllPosts().then((posts) => {
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
        <Switch>
          <Route exact path="/" render={() => (
            <PageComponent posts={posts} />
          )} />
          <Route path="/post/:id" render={(result) => {
            const id = result.match.params.id;
            const post = posts.find((post) => post.id === id)
            console.log(`found post=${post}`)
            return (
            <PostComponent
              post={post} //TODO: raise error if ID not found
            />
          )}} />
          {/* <Route component={MissingPageComponent}/> */}
      </Switch>

      </div>
    );
  }
}

export default App;
