import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ShowPost extends Component {
  state = {
    id: null,
    title: '',
    body: '',
    errors: {} 
  }

  async componentDidMount(){
    const { id } = this.props.match.params;

    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

    const post = res.data;

    this.setState({
      id: post.id,
      title: post.title,
      body: post.title
    })
    
  }

  render() {
    const { id, title, body } = this.state;
    return (
      <div className="py-5 my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <header className="blog-header py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                  <div className="col-4 pt-1">
                    <Link className="" to="/posts">
                      Back to all posts
                    </Link>
                  </div>
                  <div className="col-4 text-center"></div>
                  <div className="col-4 d-flex justify-content-end align-items-center">
                    <Link to={`/posts/${ id }/edit`}>Edit</Link>
                  </div>
                </div>
              </header>
              <h3>{ title }</h3>
              <p>{ body }</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowPost;