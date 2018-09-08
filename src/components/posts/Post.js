import React, { Component } from 'react';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Post extends Component {
  state = {
    collapsed: true
  }

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      
      dispatch({ type: 'DELETE_POST', payload: id });
      this.state.collapsed = true;
      console.log(this.state.collapsed);
    } catch (err) {
      dispatch({ type: 'DELETE_POST', payload: id });
      this.state.collapsed = true;
      console.log(this.state.collapsed);
    }
  }

  toggleBody = () => {
    this.setState({ collapsed: !this.state.collapsed })
  };

  render() {
    const { post } = this.props;
    return (
      <Consumer>
        { value => {
          const { dispatch } = value;
          const cardBody = ( 
            <div className="card-body">
            { post.body }
            <br/>
            <div className="row">
              <div className="col-6">
                <Link to={ `/posts/${ post.id }`}>See More...</Link>
              </div>
              <div className="col-6 text-right">
                <p 
                  onClick={ this.onDeleteClick.bind( this, post.id, dispatch )} 
                  className="text-danger" 
                  style={{cursor:'pointer'}}>Delete Post</p>
              </div>
            </div>
            </div> 
          );

          return(
            <div className="card mb-3">
              <div 
                className="card-header" 
                style={{cursor:'pointer'}}
                onClick={ this.toggleBody }
              >
                { post.title }
              </div>
              { this.state.collapsed ? null : cardBody }
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Post;