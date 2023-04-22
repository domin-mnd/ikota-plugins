export default `import { Button, Paper, Text, Group, CloseButton } from "@mantine/core";

export const {{componentName}}{{useTypescript}} => (
  <Paper{{paperInline}}{{cardClassName}}>
    <Group{{labelGroupInline}}>
      <Text{{labelInline}}>
        {{labelConfig}}
      </Text>
      <CloseButton{{closeButtonInline}} />
    </Group>
    <Text{{descriptionInline}}>
      {{descriptionConfig}}
    </Text>
    <Group{{buttonGroupInline}}>
      <Button{{defaultButtonInline}}>
        {{defaultButtonConfig}}
      </Button>
      <Button{{outlineButtonInline}}>
        {{outlineButtonConfig}}
      </Button>
    </Group>
  </Paper>
);`