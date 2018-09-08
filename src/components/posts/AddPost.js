import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextInputGroup from '../layout/TextInputGroup';
import { Consumer } from '../../context';
import classnames from 'classnames';
import axios from 'axios';

class AddPost extends Component {
  state = {
    title: '',
    body: '',
    errors: {}
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { title, body } = this.state;

    if (title === '') {
      this.setState({
        errors: {
          title: 'Title is required'
        }
      })
    }
    if (body === '') {
      this.setState({
        errors: {
          body: 'Body is required'
        }
      })
    }

    const newPost = {
      title,
      body
    }

    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);

    dispatch({ type: 'ADD_POST', payload: res.data });

    this.setState({
      title:'',
      body:''
    })

    this.props.history.push('/posts');

  }

  onChange = (e) => this.setState({ [ e.target.name ]: e.target.value })

  render() {
    const { title, body, errors } = this.state;
    return (
      <Consumer >
        {
          value => {
            const { dispatch } = value;

            return(
              <div className="py-5 my-5">
              <div className="container text-right">
                <Link to="/posts">Back to all posts</Link>
              </div>
                <form className="form-signin" onSubmit={this.onSubmit.bind(this, dispatch) } >
                <h1 className="h3 mb-3 font-weight-normal">Add Post</h1>
                  <TextInputGroup
                    label="Title"
                    name="title"
                    placeholder="Enter a title for your post..."
                    value={ title }
                    onChange={ this.onChange }
                    error={ errors.title }
                  />
                  <div className="form-group">
                    <label htmlFor="body">Body</label>
                    <textarea 
                      placeholder="What's on your mind?"
                      rows="8"
                      value={ body } 
                      name="body"
                      onChange={ this.onChange }
                      className={
                        // classnames is how we can have conditional classes
                        classnames(
                          'form-control form-control-lg', 
                          { 'is-invalid': errors.body }
                        )
                      }
                      ></textarea>
                      { errors.body && <div className="invalid-feedback">{ errors.body }</div>}
                  </div>
                  <input type="submit" value="Submit Post" className="btn btn-block btn-primary"/>
                </form>
              </div>
            )
          }
        }
      </Consumer>
    )
  }
}

export default AddPost;