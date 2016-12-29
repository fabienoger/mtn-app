import React, {PropTypes} from 'react';
import Scroll             from 'react-scroll';

export default class ScrollArrow extends React.Component {
  scroll(e) {
    if (this.props.top) {
      Scroll.animateScroll.scrollToTop();
    } else {
      Scroll.animateScroll.scrollMore($(window).height());
    }
  }
  render() {
    let style = {};
    if (this.props.style) {
      style = this.props.style;
    }
    let iconClass = "fa fa-angle-double-down fa-3x";
    if (this.props.top) {
      iconClass += " fa-rotate-180";
    }
    return (
      <div className="centered arrow-wrapper" style={style} ref="arrowWrapper" onClick={this.scroll.bind(this)}>
        <i className={iconClass} aria-hidden="true"></i>
      </div>
    )
  }
}

ScrollArrow.PropTypes = {
  top: PropTypes.bool.isRequired,
  style: PropTypes.object
};
