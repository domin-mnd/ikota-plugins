import { IkotaConfig } from "ikota";

/**
 * Create styles function used to generate a string to write file as
 * @param {IkotaConfig} config Ikota configuration (may also be from flags)
 * @param {string} _name Name of the component
 * @returns {string} string used to copy & paste to the file
 */
export async function styles(config: IkotaConfig, _name: string): Promise<string> {
  return [
    'import { style } from "@vanilla-extract/css";',
    "",
    config.useTypescript ? 'const padding: string = "1rem";' : 'const padding = "1rem";',
    "",
    config.useTypescript ? 'export const box: string = style({' : 'export const box = style({',
    "  padding,",
    "});",
    "",
    config.useTypescript ? 'export const button: string = style({' : 'export const button = style({',
    '  appearance: "none",',
    "});"
  ].join("\n");
}
