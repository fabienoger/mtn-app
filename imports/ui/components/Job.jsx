import React, {PropTypes} from 'react';
import { Meteor }         from 'meteor/meteor';

export default class Job extends React.Component {
  render() {
    const job = this.props.job;
    console.log('job', job);
    const tagStyle = {margin: '5px', display: 'inline-block'};
    const tagsStyle = {width: '100%'};
    return (
      <div id="job" className="containers">
        <div className="columns">
          <div className="column col-6">
            <h6>Entreprise</h6>
            <p>{job.entreprise}</p>
            <div className="divider"></div>
            {job.tags ?
              job.tags.length > 0 ?
                <div>
                  <h6>Tags</h6>
                  <div className="tags" style={tagsStyle}>
                    {job.tags.map((tag) => {
                      return (<span key={tag} className="label label-primary" style={tagStyle}>{tag}</span>)
                    })}
                  </div>
                  <div className="divider"></div>
                </div>
              : ''
            : ''}
            <h6>Date publication</h6>
            <span className="label label-primary">{job.date_publication}</span>
          </div>
          <div className="column col-6">
            <h6>Nom du poste</h6>
            <span className="label label-primary" style={{whiteSpace: 'normal'}}>{job.nom_du_poste}</span>
            <div className="divider"></div>
            <h6>Lieu</h6>
            <span className="label label-primary">{job.lieu}</span>
            <div className="divider"></div>
            <h6>Salaire <span className="label label-primary float-right">{job.salaire}</span></h6>
            <div className="divider"></div>
            <h6>Type de contrat</h6>
            <span className="label label-primary">{job.type_de_contrat}</span>
          </div>
        </div>
      </div>
    )
  }
}
Job.propTypes = {
  job: PropTypes.object.isRequired
};
