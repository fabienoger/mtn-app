import React      from 'react';
import SearchForm from '/imports/ui/components/SearchForm';

export default class SearchWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      searchFormStyle: {
        left: '-700px'
      },
      buttonStyle: {
        left: '30px'
      }
    }
  }

  toggleSearch(e) {
    let searchFormStyle = {left: '-700px'};
    let buttonStyle = {left: '30px'};
    if (this.state.searchFormStyle.left == '-700px') {
      searchFormStyle = {
        left: 0
      };
      buttonStyle = {
        left: '530px'
      }
    }
    this.setState({searchFormStyle, buttonStyle});
  }

  render() {
    return (
      <div id="search-wrapper">
        <SearchForm id="search-form-component" style={this.state.searchFormStyle}/>
        <button id="toggle-search" className="btn-lg btn btn-primary" onClick={this.toggleSearch.bind(this)} style={this.state.buttonStyle}>
          <i className="fa fa-search fa-2x" aria-hidden="true"></i>
        </button>
      </div>
    )
  }
}
