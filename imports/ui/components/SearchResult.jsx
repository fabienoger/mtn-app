import React, {PropTypes} from 'react';
import ReactDOM           from 'react-dom';
import { Meteor }         from 'meteor/meteor';
import Alert              from '/imports/ui/components/Alert';

export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({display: true});
  }

  closeSearch(e) {
    this.setState({display: false});
  }

  render() {
    const formations = this.props.formations;
    const jobs = this.props.jobs;
    const clearButtonStyle = {
      position: 'absolute',
      top: '10px',
      right: '10px'
    };
    let searchResultStyle = {
      zIndex: 500,
      position: 'absolute',
      right: '10px',
      bottom: '20px',
      transition: 'all .5s'
    };
    if (!this.state.display) {
      searchResultStyle.right = '-200px';
    }

    return (
      <div className="empty" id="search-result" style={searchResultStyle}>
        <button className="btn btn-clear" style={clearButtonStyle} onClick={this.closeSearch.bind(this)}></button>
        <p className="empty-title">
          {jobs.length > 0 ?
            <span>{jobs.length} Emploi{jobs.length > 1 ? 's' : ''} <br />trouvé{jobs.length > 1 ? 's' : ''}</span>
          :
            <span>{formations.length} Formation{formations.length > 1 ? 's' : ''} <br />trouvée{formations.length > 1 ? 's' : ''}</span>
          }
        </p>
          <p className="empty-meta"></p>
          <button className="empty-action btn btn-primary" onClick={this.props.clearAndAddFormations.bind(this)}>
            <i className="fa fa-refresh" aria-hidden="true"></i>
          </button>
      </div>
    )
  }
}

SearchResult.propTypes = {
  formations: PropTypes.array.isRequired,
  jobs: PropTypes.array.isRequired
};
