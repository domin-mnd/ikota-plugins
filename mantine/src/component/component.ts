import { IkotaConfig } from 'ikota';
import { readFileSync } from "fs";
import { join } from "path";

/**
 * Create component function used to generate a string to write file as
 * @param {IkotaConfig} config Ikota configuration (may also be from flags)
 * @param {string} name Name of the component
 * @returns {string} string used to copy & paste to the file
 */
export function component(config: IkotaConfig, name: string): string {
  let response = !config.useLambdaSimplifier ? `import { useStyles } from "./styles";\n` : "";

  response += config.addConfigFile ? `import { cardLabel, description, defaultButtom, outlineButton } from "./config";\n` : "";

  // Spaces for description
  const spaces = config.useLambdaSimplifier ? " ".repeat(6) : " ".repeat(8);

  const path = config.useLambdaSimplifier ? "../templates/inlineStylesSimplified.txt" : "../templates/inlineStyles.txt";
  let file = readFileSync(join(__dirname, path)).toString();

  file = file
    .replace("{{componentName}}", name)
    .replace("{{useTypescript}}", config.useTypescript ? ": FunctionComponent = (): ReactElement" : " = ()")
    .replace("{{useStyles}}", "\nconst { classes } = useStyles();\n") // with lambda simplifier there's no space for styles
    .replace("{{cardClassName}}", !config.useLambdaSimplifier ? " className={classes.card}" : "")
    .replace("{{paperInline}}", config.other?.styleProps ? ' withBorder p="lg" radius="md" shadow="md"' : "")
    .replace("{{labelGroupInline}}", config.other?.styleProps ? ' position="apart" mb="xs"' : "")
    .replace("{{labelInline}}", config.other?.styleProps ? ' fz="md" fw={500}' : "")
    .replace("{{closeButtonInline}}", config.other?.styleProps ? ' mr={-9} mt={-9}' : "")
    .replace("{{descriptionInline}}", config.other?.styleProps ? ' c="dimmed" fz="xs"' : "")
    .replace("{{buttonGroupInline}}", config.other?.styleProps ? ' position="right" mt="md"' : "")
    .replace("{{defaultButtonInline}}", config.other?.styleProps ? ' variant="default" size="xs"' : "")
    .replace("{{outlineButtonInline}}", config.other?.styleProps ? ' variant="outline" size="xs"' : "")
    .replace("{{labelConfig}}", config.addConfigFile ? "${cardLabel}" : "Allow cookies")
    .replace("{{descriptionConfig}}", config.addConfigFile ? "${description}" : [
      "So the deal is, we want to spy on you. We would like to know what did you have for todays",
      "breakfast, where do you live, how much do you earn and like 50 other things. To view our",
      "landing page you will have to accept all cookies. That&apos;s all, and remember that we are",
      "watching..."
    ].join(`\n${spaces}`)) // 8/6 spaces because of lambda simplifier
    .replace("{{defaultButtonConfig}}", config.addConfigFile ? "${defaultButton}" : "Cookies preferences")
    .replace("{{outlineButtonConfig}}", config.addConfigFile ? "${outlineButton}" : "Accept all");

  return response;
}
