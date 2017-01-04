import React       from 'react';
import Scroll      from 'react-scroll';

export default class Footer extends React.Component {
  showHome() {
    Scroll.animateScroll.scrollToTop();
  }
  showMap() {
    Scroll.animateScroll.scrollTo($(window).height());
  }
  showCareers() {
    Scroll.animateScroll.scrollTo(($(window).height() * 2));
  }
  showResources() {
    Scroll.animateScroll.scrollTo(($(window).height() * 3));
  }
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="columns">
              <div className="column col-4">
                <ul>
                  <li><a href="http://www.dataforgood.fr/" target="_blank">DataForGood</a></li>
                  <li><a href="http://simplon.co/" target="_blank">Simplon.co</a></li>
                  <li><a href="https://github.com/fabienoger/mtn-app" target="_blank">Code Site Web</a></li>
                  <li><a href="https://github.com/Joretapau/Scrap-Data-For-Good/" target="_blank">Code Scrapper</a></li>
                  <li><a href="https://github.com/admor/teraformation" target="_blank">Code Back</a></li>
                </ul>
              </div>
              <div className="column col-4">
                <a href="http://www.dataforgood.fr/" target="_blank">
                  <img src="/images/dataforgood_logo.png" width="30%"/>
                </a>
                <a href="http://simplon.co/" target="_blank">
                  <img src="/images/simplon_logo.png" width="30%"/>
                </a>
              </div>
              <div className="column col-4">
                <ul className="site-map">
                  <li onClick={this.showHome.bind(this)}>Accueil</li>
                  <li onClick={this.showMap.bind(this)}>Carte</li>
                  <li onClick={this.showCareers.bind(this)}>Métiers Du Numérique</li>
                  <li onClick={this.showResources.bind(this)}>Culture Web</li>
                </ul>
              </div>
          </div>
        </div>
        <p className="headband">&copy; Copyright <a target="_blank" href="http://fabienoger.com/">Fabien Oger</a></p>
      </div>
    )
  }
}
