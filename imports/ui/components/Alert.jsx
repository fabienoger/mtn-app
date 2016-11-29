import React, {PropTypes} from 'react';
import { Meteor }         from 'meteor/meteor';

export default class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
  }
  close(e) {
    this.setState({display: false})
  }
  render() {
    if (!this.state.display) {
      return (<div></div>);
    }
    return (
      <div className={"toast toast-" + this.props.type}>
        <button onClick={this.close.bind(this)} className="btn btn-clear float-right"></button>
        <i className="fa fa-exclamation-triangle"></i>&nbsp;
        {this.props.message}
      </div>
    )
  }
}

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
