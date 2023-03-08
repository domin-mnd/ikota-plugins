import { IkotaConfig } from "ikota";

/**
 * Create styles function used to generate a string to write file as
 * @param {IkotaConfig} config Ikota configuration (may also be from flags)
 * @param {string} _name Name of the component
 * @returns {string} string used to copy & paste to the file
 */
export async function styles(config: IkotaConfig, _name: string): Promise<string> {
  return `import { createStyles${config.useTypescript ? ", MantineTheme" : ""} } from "@mantine/core";

const useStyles = createStyles((theme${config.useTypescript ? ": MantineTheme" : ""}) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  }
}));`;
}
