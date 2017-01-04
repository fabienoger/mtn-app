import React, {PropTypes} from 'react';

export default class Resource extends React.Component {
  render() {
    return (
      <div className="column col-4 col resource">
        <h4 className="text-center">{this.props.title}</h4>

        {this.props.video ?
          <div className="video-responsive">
            <iframe src={this.props.url} frameBorder="0" allowFullScreen></iframe>
          </div>
        :
        
          <a href={this.props.url} target="_blank">
            <img src={this.props.img}/>
          </a>
        }

      </div>
    )
  }
}


Resource.PropTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  video: PropTypes.bool.isRequired
};




