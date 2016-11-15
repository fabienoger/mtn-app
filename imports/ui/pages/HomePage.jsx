import React      from 'react';
import LeafletMap from '/imports/ui/components/LeafletMap';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="home-page">
        <LeafletMap />
      </div>
    )
  }
}
