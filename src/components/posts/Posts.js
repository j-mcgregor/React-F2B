import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import Post from './Post';
import './post.css';

class Posts extends Component {
  render() {
    return (
      <Consumer >
        {
          value => {
            const { posts } = value;
            return (
              <div className="container mt-5 pt-5">
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <header className=" py-3">
                      <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="col-4 pt-1"></div>
                        <div className="col-4 text-center">
                          <h1 className="text-dark" href="/posts">Posts</h1>
                        </div>
                        <div className="col-4 d-flex justify-content-end align-items-center">
                          <Link className="" to="/posts/new">
                            Add Post
                          </Link>
                        </div>
                      </div>
                    </header>
                    { posts.map((post,key) => (
                      <Post key={key} post={ post } />
                    ))}
                  </div>
                </div>
              </div>
            )
          }
        }
      </Consumer>
    )
  }
}

export default Posts;