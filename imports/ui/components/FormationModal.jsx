import React, {PropTypes} from 'react';
import { Meteor }         from 'meteor/meteor';
import ReactDOM           from 'react-dom';
import Formation          from '/imports/ui/components/Formation';
import Loading            from '/imports/ui/components/Loading';
import keydown            from 'react-keydown';
import outsideClick       from 'outside-click';

class FormationModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }
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

  displayFormationJobs() {
    this.setState({loading: true});
    this.props.displayFormationJobs();
  }

  render() {
    let btnJobsClass = `btn btn-primary`;
    btnJobsClass += this.state.loading ? ' loading' : '';
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
            <button className={btnJobsClass} onClick={this.displayFormationJobs.bind(this)}>Afficher les offres d'emploi</button>
            <a className="btn website" target="_blank" href={this.props.formation.site}>Site web</a>
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
