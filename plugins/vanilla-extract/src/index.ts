import { component } from './component/component';
import { styles } from './component/styles';
import { config } from './component/config';
import { index } from './component/index';
import { IkotaConfig } from 'ikota';

export const components = {
  // Key name stands for preprocessor name
  'vanilla-extract': {
    // Component file
    component: {
      // Leave the name empty if you don't want to create a file
      fileName: (config: IkotaConfig, _name: string) =>
        config.useTypescript ? 'component.tsx' : 'component.jsx',
      function: component,
    },
    // Styling file
    style: {
      fileName: (config: IkotaConfig, _name: string) =>
        config.useTypescript ? 'styles.css.ts' : 'styles.css.js',
      function: styles,
    },
    // Config file
    config: {
      fileName: (config: IkotaConfig, _name: string) =>
        config.useTypescript ? 'config.ts' : 'config.js',
      function: config,
    },
    // Exports file
    index: {
      fileName: (config: IkotaConfig, _name: string) =>
        config.useTypescript ? 'index.ts' : 'index.js',
      function: index,
    },
  },
};
