import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jpfiddle_extension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jpfiddle_extension:plugin',
  description: 'A JupyterLab extension for jpfiddle.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jpfiddle_extension is activated!');
  }
};

export default plugin;
