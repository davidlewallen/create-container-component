# create-container-component
This is a stripped down and modifed version of [create-component-app](https://github.com/CVarisco/create-component-app) that creates either a React component or a React container and component from the terminal.
## Install

```sh
$ npm install -g create-container-component
```

## Usage

```sh
$ cd ~/my-projects
$ create-container-component
```
You will be asked if you would like to create a container or a component.
Creating a container will automatically generate a component as well.

## Example
After providing it with the required information you will see the following

Creating with component:
```
DefaultName
    |-- components
    |   |-- index.jsx
```
```js
import React from 'react';
import PropTypes from 'prop-types';

const {} = PropTypes;
const propTypes = {};

function DefaultName(props) {
  return ();
}

DefaultName.propTypes = propTypes;
export default DefaultName;
```
Creating with container:
```
ProvidedName
    |-- components
    |   |-- index.jsx
    |-- container
    |   |-- ProvidedName
```
```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DefaultName from '../components';

const {} = PropTypes;
const propTypes = {};

class DefaultNameContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <DefaultName />
    );
  }
}

DefaultNameContainer.propTypes = propTypes;
export default DefaultNameContainer;
```

## Contributing
The library is open to everybody, contribute improve your skills.

Use `npm run watch` while coding.

## Credit
Credit for this project goes to [Christian Varisco](https://github.com/CVarisco)

## License

MIT © [David Lewallen](https://github.com/davidlewallen)
