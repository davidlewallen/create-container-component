const questions = {
  type: {
    type: 'list',
    name: 'type',
    message: "Do you want to create a container or a componet",
    choices: ['container', 'component'],
  },
  name: {
    type: 'input',
    name: 'name',
    message: 'What is the name of this container and/or component',
    default: 'DefaultName',
  },
  connected: {
    type: 'confirm',
    name: 'connected',
    message: 'Do you want to connect the container and/or component to redux?',
    default: false,
  },
  path: {
    type: 'input',
    name: 'path',
    message: 'Where do you want to create your component?',
    default: './',
  },
}

export default questions;
