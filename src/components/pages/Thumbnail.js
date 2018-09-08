import React, { Component } from 'react';
import ThumbnailModal from './ThumbnailModal';

class Thumbnail extends Component {
  render() {
    console.log(this.props);
    return (
      <div 
        className="col-sm-3 col-xs-6" 
        data-toggle="modal" 
        data-target={`#${this.props.target}`}
      >
        <img className="img-fluid" src={this.props.image} alt=""/>
        <ThumbnailModal props={this.props}/>
      </div>
    )
  }
}

export default Thumbnail;