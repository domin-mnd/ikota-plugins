import { IkotaConfig } from "ikota";

/**
 * Create config function used to generate a string to write file as
 * @param {IkotaConfig} config Ikota configuration (may also be from flags)
 * @param {string} _name Name of the component
 * @returns {string} string used to copy & paste to the file
 */
export async function config(config: IkotaConfig, _name: string): Promise<string> {
  return config.useTypescript
    ? 'export const buttonLabel: string = "Button";'
    : 'export const buttonLabel = "Button";';
}
