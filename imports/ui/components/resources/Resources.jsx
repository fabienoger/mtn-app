import React      from 'react';
import Careers    from '/imports/ui/components/resources/Careers';
import WebCulture from '/imports/ui/components/resources/WebCulture';

export default class Resources extends React.Component {
  render() {
    return (
      <div className="resources">
        <Careers />
        <WebCulture />
      </div>
    )
  }
}
