import React, {PropTypes} from 'react';
import { Meteor }         from 'meteor/meteor';
import ReactDOM           from 'react-dom';
import SearchForm         from '/imports/ui/components/SearchForm';
import Loading            from '/imports/ui/components/Loading';
import keydown            from 'react-keydown';
import outsideClick       from 'outside-click';

class SearchModal extends React.Component {
  componentDidMount () {
    const element = ReactDOM.findDOMNode(this.refs.searchModalContainer);
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
      <div id="search-modal" className="modal active">
        <div className="modal-overlay"></div>
        <div className="modal-container" ref="searchModalContainer">
          <div className="modal-header">
            <button className="btn btn-clear float-right" onClick={this.props.closeModal}></button>
            <div className="modal-title">
              Rechercher
            </div>
          </div>
          <div className="modal-body">
            <div className="content">
              <SearchForm search={this.props.search} submitForm={this.props.closeModal} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
SearchModal.propTypes = {
  search: PropTypes.object.isRequired
};
export default keydown(SearchModal);
