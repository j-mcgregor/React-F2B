import React, { Component } from 'react'

class ThumbnailModal extends Component {
  
  render() {
    const { target, title, image, byline, description, link } = this.props.props;
    return (
      <div>
        <div className="modal fade" id={target} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content text-center">
              <div className="modal-header">
                <h4 className="">{title}</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-header text-center">
                <small className="byline">{ byline }</small>
              </div>
              <div className="modal-body">
                <img className="img-fluid" src={image} alt=""/>
              </div>
              <div className="modal-footer">
                <p>{ description}</p>
                <a href={ link } className="btn">See on Github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ThumbnailModal;
