import type { Preview } from "@storybook/react";
import "../src/theme.css";
import React from "react";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const preview: Preview = {
  parameters: {
    darkMode: {
      darkClass: "dark-theme",
      stylePreview: true,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    parameters: {
      layout: "centered",
    },
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
};

export default preview;
