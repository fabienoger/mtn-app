import React              from 'react';
import { Meteor }         from 'meteor/meteor';

export default class Download extends React.Component {
  render() {
    return (
      <div className="download column col-4 col resource">
        <h4 className="text-center">C'est quoi ce taff ?</h4>
        <div className="empty">
          <p className="empty-meta">Vous êtes attiré par un métier dans le numérique mais vous ne savez pas exactement en quoi il consiste ? Pas de souci, on a tout prévu :)</p>
          <a href="/mtn.rar" className="btn btn-primary empty-action" download>
            <i className="fa fa-download" aria-hidden="true"></i>&nbsp;
            Télécharger les fiches métier
          </a>
        </div>
      </div>
    )
  }
}
