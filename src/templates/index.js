import fs from 'fs-extra';

import generateContainer from './js/container.template';
import generateComponent from './js/component.template';

/**
 * Generate component files
 *
 * @param {type} type of component template
 * @param {name} the name of the component used to create folder and file
 * @param {path} where the component folder is created
 * @param {connected} if the container is connected to redux
 */
function generateBoilerplate({ type, name, connected, path}) {
  const destination = `${path}/${name}/`;

  if (connected || type === 'container') {
    fs.outputFile(`${destination}/container/${name}.jsx`, generateContainer(name, connected));
  }
  fs.outputFile(`${destination}/components/index.jsx`, generateComponent(name));
}

export default generateBoilerplate;
