import React              from 'react';
import { Meteor }         from 'meteor/meteor';
import Loading            from '/imports/ui/components/Loading';

export default class Menu extends React.Component {
  render() {
    const menuStyle = {
      zIndex: 401,
      position: "absolute"
    };
    return (
      <ul className="menu" id="menu" style={menuStyle}>
        <li className="menu-item">
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
      </ul>
    )
  }
}
