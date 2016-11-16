import React, {PropTypes} from 'react';
import ReactDOM           from 'react-dom';
import { Meteor }         from 'meteor/meteor';
import Alert              from '/imports/ui/components/Alert';
import Informations       from '/imports/api/informations/collection'

export default class InformationsForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    // Find the text field via the React ref
    const name = ReactDOM.findDOMNode(this.refs.name).value.trim();
    const age = ReactDOM.findDOMNode(this.refs.age).value.trim();
    const levelOfEducation = ReactDOM.findDOMNode(this.refs.levelOfEducation).value.trim();
    const where = ReactDOM.findDOMNode(this.refs.where).value.trim();
    const language = ReactDOM.findDOMNode(this.refs.language).value.trim();
    const levelOfProgramming = ReactDOM.findDOMNode(this.refs.levelOfProgramming).value.trim();
    const job = ReactDOM.findDOMNode(this.refs.job).value.trim();
    if (!name || !age || !levelOfEducation || !where || !language || !levelOfProgramming) {
      return this.setState({error: "All fields are required !"});
    }
    const informations = {
      name,
      age,
      levelOfEducation,
      where,
      language,
      levelOfProgramming
    }
    Meteor.call("createInformation", informations, (err, result) => {
      if (err) {
        this.setState({error: "All fields are required !"});
        return console.error("createInformation ", err)
      }
      console.log("result ", result);
    });
  }

  render() {
    const colStyle = {
      padding: '5px'
    }
    return (
      <div id="informations-form" className="container">
        <form onSubmit={this.handleSubmit.bind(this)} className="columns">
          {this.state.error ? <Alert type="danger" message={this.state.error} /> : ''}
          <div className="col-6" style={colStyle}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Nom Prénom</label>
              <input className="form-input" type="text" id="name" ref="name" placeholder="Nom, Prénom" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="age">Âge</label>
              <select className="form-select" id="age" ref="age">
                <option value="-18">Moins de 18 ans</option>
                <option value="18/24">Entre 18 et 24 ans</option>
                <option value="24/30">Entre 24 et 30 ans</option>
                <option value="+30">Plus de 30 ans</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="levelOfEducation">Niveau de diplôme</label>
              <select className="form-select" id="levelOfEducation" ref="levelOfEducation">
                <option value="without">Sans diplôme</option>
                <option value="brevet">Brevet</option>
                <option value="bac">Bac</option>
                <option value="licence">Licence</option>
                <option value="master">Master</option>
                <option value="doctorat">Doctorat</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary mt-10">Envoyer</button>
          </div>
          <div className="col-6" style={colStyle}>
            <div className="form-group">
              <label className="form-label" htmlFor="where">Où ?</label>
              <select className="form-select" id="where" ref="where">
                <option value="75">Paris (75)</option>
                <option value="77">Seine-et-Marne (77)</option>
                <option value="78">Yvelines (78)</option>
                <option value="91">Essone (91)</option>
                <option value="92">Hauts-de-Seine (92)</option>
                <option value="93">Seine-Saint-Denis (93)</option>
                <option value="94">Val-de-Marne (94)</option>
                <option value="95">Val-d'Oise (95)</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="language">Quel language ?</label>
              <select className="form-select" id="language" ref="language">
                <option value="js">JavaScript</option>
                <option value="php">PHP</option>
                <option value="python">Python</option>
                <option value="ruby">Ruby</option>
                <option value="html">HTML</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="levelOfProgramming">Quel est votre niveau en programmation ?</label>
              <select className="form-select" id="levelOfProgramming" ref="levelOfProgramming">
                <option value="beginner">Débutant</option>
                <option value="intermediate">Intermédiaire</option>
                <option value="confirmed">Confirmé</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="job">Métier ?</label>
              <select className="form-select" id="job" ref="job">
                <option value="journaliste_digital">Journaliste digital</option>
                <option value="developpeur_web">Développeur web</option>
                <option value="integrateur_web">Intégrateur web</option>
                <option value="technicien_maintenance">Technicien de maintenance</option>
                <option value="developpeur_nouvelles_technologies">Développeur nouvelles technologies</option>
                <option value="architecte_technologie_numerique">Architecte en technologie numérique</option>
                <option value="web_designer">Web designer</option>
                <option value="forgeur_numerique">Forgeur numérique</option>
                <option value="maker">Maker</option>
                <option value="depanneur_informatique">Dépanneur informatique</option>
                <option value="mediateur_numerique">Médiateur numérique</option>
                <option value="autre">Autre</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
