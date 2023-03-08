import { IkotaConfig } from "ikota";

/**
 * Create index function used to generate a string to write file as
 * @param {IkotaConfig} config Ikota configuration (may also be from flags)
 * @param {string} _name Name of the component
 * @returns {string} string used to copy & paste to the file
 */
export async function index(config: IkotaConfig, _name: string): Promise<string> {
  let response: string = 'export * from "./component";';

  if (config.addConfigFile) {
    response += '\nexport * from "./config";';
  }

  response += '\nexport * from "./styles";';

  return response;
}
