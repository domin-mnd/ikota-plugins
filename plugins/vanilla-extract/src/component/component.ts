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

  // You can use `` with multiple lines instead of an
  // array joined with \n, but for the sake of
  // indentation I left it this way

  let response = `import { box, button } from "./styles.css";\n`;
  if (config.useTypescript) response += 'import type { FunctionComponent, ReactElement } from "react";\n';
  if (config.addConfigFile) response += `import { buttonLabel } from "./config";\n`;

  // Whitespace
  response += "\n";

  // You may ignore the useLambdaSimplifier if you wish to
  if (config?.useLambdaSimplifier) {
    response += [
      `export const ${capitalCase(name)}${
        config.useTypescript
          ? ": FunctionComponent = (): ReactElement"
          : " = ()"
      } => (`,
      "  <div className={box}>",
      `    <button className={button}>${
        config.addConfigFile ? "{buttonLabel}" : "Button"
      }</button>`,
      "  </div>",
      ");",
    ].join("\n");
  } else {
    response += [
      `export const ${capitalCase(name)}${
        config.useTypescript
          ? ": FunctionComponent = (): ReactElement"
          : " = ()"
      } => {`,
      "  return (",
      "    <div className={box}>",
      `      <button className={button}>${
        config.addConfigFile ? "{buttonLabel}" : "Button"
      }</button>`,
      "    </div>",
      "  );",
      "}",
    ].join("\n");
  }

  return response;
}
