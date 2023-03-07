import { IkotaConfig } from 'ikota';
import { capitalCase } from '../utils/capitalCase';

/**
 * Create component function used to generate a string to write file as
 * @param {IkotaConfig} config Ikota configuration (may also be from flags)
 * @param {string} name Name of the component
 * @returns {string} string used to copy & paste to the file
 */
export function component(config: IkotaConfig, name: string): string {
  // Here you can add a line to import a styling file
  // Config file import line is imported automatically
  // So are the types: FunctionComponent & ReactElement

  // You can use `` with multiple lines instead of an
  // array joined with \n, but for the sake of
  // indentation I left it this way

  let response = `import classes from "./styles.module.styl";\n\n`;

  // You may ignore the useLambdaSimplifier if you wish to
  if (config?.useLambdaSimplifier) {
    response += [
      `export const ${capitalCase(name)}${
        config.useTypescript
          ? ": FunctionComponent = (): ReactElement"
          : " = ()"
      } => (`,
      "  <div className={classes.box}>",
      `    <button className={classes.button}>${
        config.addConfigFile ? "{buttonLabel}" : "Button"
      }</button>`,
      "  </div>",
      ")",
    ].join("\n");
  } else {
    response += [
      `export const ${capitalCase(name)}${
        config.useTypescript
          ? ": FunctionComponent = (): ReactElement"
          : " = ()"
      } => {`,
      "  return (",
      "    <div className={classes.box}>",
      `      <button className={classes.button}>${
        config.addConfigFile ? "{buttonLabel}" : "Button"
      }</button>`,
      "    </div>",
      "  );",
      "}",
    ].join("\n");
  }

  return response;
}
