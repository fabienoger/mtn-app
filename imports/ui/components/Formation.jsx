import React, {PropTypes} from 'react';
import { Meteor }         from 'meteor/meteor';

export default class Formation extends React.Component {
  render() {
    const formation = this.props.formation;
    const languageStyle = {margin: '5px', display: 'inline-block'};
    const languagesStyle = {width: '100%'};
    return (
      <div id="formation" className="containers">
        <h2 className="mt-5">{formation.nom_formation}</h2>
        <small className="label">Formation {formation.formation_diplomante}</small>
        <div className="columns">
          <div className="column col-6">
            <h6>Métier</h6>
            <p>{formation.metier}</p>
            <div className="divider"></div>
            <h6>Languages</h6>
            <div className="languages" style={languagesStyle}>
              {formation.languages.map((language) => {
                return (<span key={language} className="label label-primary" style={languageStyle}>{language}</span>)
              })}
            </div>
            <div className="divider"></div>
            <h6>Niveau</h6>
            <span className="label label-primary">{formation.niveau}</span>
            <div className="divider"></div>
            <h6>Niveau diplôme</h6>
            <span className="label label-primary">{formation.niveau_diplome}</span>
          </div>
          <div className="column col-6">
            <h6>Prix <span className="label label-primary float-right">{formation.prix}</span></h6>
            <div className="divider"></div>
            <h6>Durée <span className="label label-primary float-right">{formation.duree}</span></h6>
            <div className="divider"></div>
            <h6>Public</h6>
            <p>{formation.public}</p>
            <div className="divider"></div>
            <h6>Code postal <span className="label label-primary float-right">{formation.post_code}</span></h6>
            <div className="divider"></div>

          </div>

        </div>
      </div>
    )
  }
}
Formation.propTypes = {
  formation: PropTypes.object.isRequired
};
