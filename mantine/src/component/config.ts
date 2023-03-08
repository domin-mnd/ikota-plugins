import { IkotaConfig } from 'ikota';

/**
 * Create config function used to generate a string to write file as
 * @param {IkotaConfig} config Ikota configuration (may also be from flags)
 * @param {string} _name Name of the component
 * @returns {string} string used to copy & paste to the file
 */
export async function config(
  config: IkotaConfig,
  _name: string
): Promise<string> {
  return config.useTypescript
    ? `export const cardLabel: string = "Allow cookies";

export const description: string = [
  "So the deal is, we want to spy on you. We would like to know what did you have for todays",
  "breakfast, where do you live, how much do you earn and like 50 other things. To view our",
  "landing page you will have to accept all cookies. That's all, and remember that we are",
  "watching..."
].join(" ")

export const defaultButton: string = "Cookies preferences";

export const outlineButton: string = "Accept all";`
    : `export const cardLabel = "Allow cookies";

export const description = [
  "So the deal is, we want to spy on you. We would like to know what did you have for todays",
  "breakfast, where do you live, how much do you earn and like 50 other things. To view our",
  "landing page you will have to accept all cookies. That's all, and remember that we are",
  "watching..."
].join(" ")

export const defaultButton = "Cookies preferences";

export const outlineButton = "Accept all";`;
}
