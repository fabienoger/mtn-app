import React, {PropTypes} from 'react';
import { Meteor }         from 'meteor/meteor';

export default class Alert extends React.Component {
  render() {
    return (
      <div className={"toast toast-" + this.props.type}>
        <button className="btn btn-clear float-right"></button>
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
