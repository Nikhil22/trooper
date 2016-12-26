import { Component, PropTypes } from 'react';

class ZIf extends Component {
  render() {
    if (this.props.show) {
      return (
        this.props.children
      );
    } return null;
  }
}

ZIf.propTypes = {
  show: PropTypes.boolean,
  children: PropTypes.component,
};

export default ZIf;
