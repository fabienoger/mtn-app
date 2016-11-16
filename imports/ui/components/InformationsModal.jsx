import React, {PropTypes} from 'react';
import { Meteor }         from 'meteor/meteor';
import ReactDOM           from 'react-dom';
import InformationsForm   from '/imports/ui/components/InformationsForm';
import Loading            from '/imports/ui/components/Loading';
import keydown            from 'react-keydown';
import outsideClick       from 'outside-click';

class InformationsModal extends React.Component {
  componentDidMount () {
    const element = ReactDOM.findDOMNode(this.refs.informationsModalContainer);
    // Add the listener
    this.outsideClick = outsideClick(element, this.props.closeModal.bind(this));
  }

  componentWillUnmount () {
    // Remove the listener
    this.outsideClick.off();
  }
  componentWillReceiveProps({keydown}) {
    if (keydown.event && keydown.event.which == 27) {
      this.props.closeModal();
    }
  }
  render() {
    return (
      <div id="informations-modal" className="modal active">
        <div className="modal-overlay"></div>
        <div className="modal-container" ref="informationsModalContainer">
          <div className="modal-header">
            <button className="btn btn-clear float-right" onClick={this.props.closeModal}></button>
            <div className="modal-title">
              Rechercher
            </div>
          </div>
          <div className="modal-body">
            <div className="content">
              <InformationsForm informations={this.props.informations} />
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-danger" onClick={this.props.closeModal}>Close</button>
          </div>
        </div>
      </div>
    )
  }
}
InformationsModal.propTypes = {
  informations: PropTypes.object.isRequired
};
export default keydown(InformationsModal);
