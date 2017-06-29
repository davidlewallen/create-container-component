function generateContainer(NAME, ISCONNECTED) {
  return `import React, { Component } from 'react';
import PropTypes from 'prop-types';
${ISCONNECTED
  ? `import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';\n`
  : ''
}
import ${NAME} from '../components';

const {} = PropTypes;
const propTypes = {};

${ISCONNECTED ? 'export ' : ''}class ${NAME}Container extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <${NAME} />
    );
  }
}
${ISCONNECTED
  ? `\nfunction mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}\n`
  : ''
}
${NAME}Container.propTypes = propTypes;
export default ${ISCONNECTED
  ? `connect(
  mapStateToProps,
  mapDispatchToProps,
)(${NAME}Container);`
  : `${NAME}Container;`
}
`
};

export default generateContainer;
