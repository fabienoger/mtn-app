import React, {PropTypes} from 'react';
import ReactDOM           from 'react-dom';
import { Meteor }         from 'meteor/meteor';
import Alert              from '/imports/ui/components/Alert';
import Informations       from '/imports/api/informations/collection';
import Select2            from 'react-select2-wrapper';

import 'react-select2-wrapper/css/select2.css';

export default class search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      languages: [],
      selectedLanguages: []
    }
  }

  multiSelectChange(e) {
    let selectedLanguages = [];
    let languages = [];
    _.each(e.currentTarget.selectedOptions, (o) => {
      languages.push(o.text);
      selectedLanguages.push(o.value);
    });
    this.setState({languages, selectedLanguages});
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({error: null});
    // Find the text field via the React ref
    const age = ReactDOM.findDOMNode(this.refs.age).value.trim();
    const levelOfEducation = ReactDOM.findDOMNode(this.refs.levelOfEducation).value.trim();
    const where = ReactDOM.findDOMNode(this.refs.where).value.trim();
    const job = ReactDOM.findDOMNode(this.refs.job).value.trim();
    const languages = this.state.languages;
    let languagesStr = '';
    if (!age || !levelOfEducation || !where || !languages || !job || languages.length < 1) {
      return this.setState({error: "All fields are required !"});
    }
    _.each(languages, l => {
      languagesStr += `${l},`;
    });

    const search = {
      age,
      levelOfEducation,
      where,
      job,
      languages
    }
    Meteor.call("searchFormation", search, (err, result) => {
      if (err) {
        this.setState({error: "All fields are required !"});
        return console.error("searchFormation ", err)
      }
      this.props.searchResult(result);
    });
  }
  render() {
    const selectData = [
       {id: 1, text: 'JS'},
       {id: 2, text: 'PHP'},
       {id: 3, text: 'Python'},
       {id: 4, text: 'Ruby'},
       {id: 5, text: 'Java'},
       {id: 6, text: 'HTML'},
       {id: 7, text: 'CSS'}
    ];
    const selectOptions = {
      placeholder: 'Rechercher un language de programmation'
    }

    return (
      <div id="search-form" style={this.props.style}>
        <h2>Rechercher</h2>
        <form onSubmit={this.handleSubmit.bind(this)} className="form-horizontal">
          {this.state.error ? <Alert type="danger" message={this.state.error} /> : ''}
            <div className="input-group">
              <span className="input-group-addon">Âge</span>
              <select className="form-select" id="age" ref="age">
                <option value="18+">Plus de 18 ans</option>
                <option value="18/24">Entre 18 et 24 ans</option>
                <option value="24/30">Entre 24 et 30 ans</option>
                <option value="+30">Plus de 30 ans</option>
              </select>
            </div>
            <div className="input-group">
              <span className="input-group-addon">Niveau de diplôme</span>
              <select className="form-select" id="levelOfEducation" ref="levelOfEducation">
                <option value="without">Sans diplôme</option>
                <option value="brevet">Brevet</option>
                <option value="bac">Bac</option>
                <option value="bac+2">Bac + 2</option>
                <option value="without_only">Sans diplôme uniquement</option>
              </select>
            </div>
            <div className="input-group">
              <span className="input-group-addon">Où ?</span>
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
            <Select2
              multiple
              value={this.state.selectedLanguages}
              data={selectData}
              options={selectOptions}
              onSelect={this.multiSelectChange.bind(this)}
              onUnselect={this.multiSelectChange.bind(this)}
            />
            <div className="input-group">
              <span className="input-group-addon">Métier ?</span>
              <select className="form-select" id="job" ref="job">
                <option value="developpeur_web">Développeur web</option>
                <option value="journaliste_digital">Journaliste digital</option>
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
            <button type="submit" className="centered btn btn-primary mt-10">Envoyer</button>
        </form>
      </div>
    )
  }
}
