import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextInputGroup from '../layout/TextInputGroup';
import { Consumer } from '../../context';
import classnames from 'classnames';
import axios from 'axios';

class EditPost extends Component {
  state = {
    title: '',
    body: '',
    errors: {}
  }

  async componentDidMount(){
    const { id } = this.props.match.params;

    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

    const contact = res.data;

    this.setState({
      title: contact.title,
      body: contact.body
    });
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

    const updatePost = {
      title,
      body
    }

    const { id } = this.props.match.params;

    const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${ id }`, updatePost);

    dispatch({ type: 'UPDATE_POST', payload: res.data });

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
              <div>
                <header className="blog-header py-3">
                  <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1">
                    </div>
                    <div className="col-4 text-center">
                      <h3 className="text-dark" href="#">Add Post</h3>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                      <Link to="/posts">
                        Back to all posts
                      </Link>
                    </div>
                  </div>
                </header>
                <div className="card">
                  <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this, dispatch) } >
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
                </div>
              </div>
            )
          }
        }
      </Consumer>
    )
  }
}

export default EditPost;