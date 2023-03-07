import { IkotaConfig } from "ikota";

/**
 * Create styles function used to generate a string to write file as
 * @param {IkotaConfig} _config Ikota configuration (may also be from flags)
 * @param {string} _name Name of the component
 * @returns {string} string used to copy & paste to the file
 */
export async function styles(_config: IkotaConfig, _name: string): Promise<string> {
  return [
    "padding = 1rem;",
    "",
    ".box",
    "  padding padding",
    "",
    "  .button",
    "    appearance none",
  ].join("\n");
}
