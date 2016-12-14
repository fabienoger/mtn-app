import React, {PropTypes} from 'react';
import { Meteor }         from 'meteor/meteor';
import ReactDOM           from 'react-dom';
import Formation          from '/imports/ui/components/Formation';
import Loading            from '/imports/ui/components/Loading';
import keydown            from 'react-keydown';
import outsideClick       from 'outside-click';

class FormationModal extends React.Component {
  componentDidMount () {
    const element = ReactDOM.findDOMNode(this.refs.formationModalContainer);
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
      <div id="formationModal" className="modal active">
        <div className="modal-overlay"></div>
        <div className="modal-container" ref="formationModalContainer">
          <div className="modal-header">
            <button className="btn btn-clear float-right" onClick={this.props.closeModal}></button>
            <div className="modal-title">.</div>
          </div>
          <div className="modal-body">
            <div className="content">
              {this.props.formation ?
                <Formation formation={this.props.formation} />
              : <Loading />}
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={this.props.closeModal}>Fermer</button>
          </div>
        </div>
      </div>
    )
  }
}
FormationModal.propTypes = {
  formation: PropTypes.object.isRequired
};
export default keydown(FormationModal);
