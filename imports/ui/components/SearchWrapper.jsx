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

  // Toggle search-wrapper
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

  // Close search-wrapper
  closeSearch() {
    const searchFormStyle = {left: '-700px'};
    const buttonStyle = {left: '30px'};
    this.setState({searchFormStyle, buttonStyle});
  }

  searchResult(result) {
    this.props.searchResult(result);
    this.closeSearch();
  }

  render() {
    return (
      <div id="search-wrapper">
        <SearchForm id="search-form-component" style={this.state.searchFormStyle} searchResult={this.searchResult.bind(this)}/>
        <button id="toggle-search" className="btn-lg btn btn-primary" onClick={this.toggleSearch.bind(this)} style={this.state.buttonStyle}>
          <i className="fa fa-search fa-2x" aria-hidden="true"></i>
        </button>
      </div>
    )
  }
}
