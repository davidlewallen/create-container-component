function generateComponent(NAME) {
  return `import React from 'react';
import PropTypes from 'prop-types';

const {} = PropTypes;
const propTypes = {};

function ${NAME}(props) {
  return ();
}

${NAME}.propTypes = propTypes;
export default ${NAME};
`;
}

export default generateComponent;
