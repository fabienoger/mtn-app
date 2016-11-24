import React              from 'react';
import { Meteor }         from 'meteor/meteor';
import Loading            from '/imports/ui/components/Loading';
import SearchModal        from '/imports/ui/components/SearchModal';

export default class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: null
    }
  }
  closeModal() {
    this.setState({search: null});
  }
  displayModal() {
    this.setState({search: {}});
  }
  render() {
    const menuStyle = {
      zIndex: 401,
      position: "absolute"
    };
    return (
      <ul className="menu" id="menu" style={menuStyle}>
        <li className="menu-item" onClick={this.displayModal.bind(this)}>
          <a href="">
            <i className="fa fa-search" aria-hidden="true"></i>&nbsp; Rechercher
          </a>
        </li>
        <li className="divider"></li>
        <li className="menu-item">
          <a target="_blank" href="https://github.com/fabienoger/hackathon-data-for-good-app">
            <i className="fa fa-github-alt" aria-hidden="true"></i>&nbsp; GitHub
          </a>
        </li>
        {this.state.search ?
          <SearchModal 
            search={this.state.search} onKeyPress={this.closeModal.bind(this)} closeModal={this.closeModal.bind(this)} />
        : ''}
      </ul>
    )
  }
}
