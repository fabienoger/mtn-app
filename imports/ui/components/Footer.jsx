import React              from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="columns">
              <div className="column col-4">
                <ul>
                  <li>DataForGood</li>
                  <li>Simplon.co</li>
                </ul>
              </div>
              <div className="column col-4"></div>
              <div className="column col-4">
                <ul>
                  <li>Accueil</li>
                  <li>Carte</li>
                  <li>Métiers Du Numérique</li>
                  <li>Culture Web</li>
                </ul>
              </div>
          </div>
        </div>
        <p className="headband">&copy; Copyright <a target="_blank" href="http://fabienoger.com/">Fabien Oger</a></p>
      </div>
    )
  }
}
