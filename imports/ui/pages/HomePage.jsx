import React        from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import Formations   from '/imports/api/formations/collection'
import LeafletMap   from '/imports/ui/components/LeafletMap';
import Loading      from '/imports/ui/components/Loading';

export default class Home extends TrackerReact(React.Component) {
  constructor(props) {
    super(props)
    this.state = {
      formations: Meteor.subscribe("formations")
    }
  }

  render() {
    if (!this.state.formations.ready()) {
      return (<Loading />)
    }
    const formations = Formations.find({}).fetch();
    return (
      <div id="home-page">
        <LeafletMap formations={formations} />
      </div>
    )
  }
}
