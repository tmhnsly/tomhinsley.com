import type { Preview } from "@storybook/react";
import "../src/theme.css";
import React from "react";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { BrowserRouter } from "react-router-dom";

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
      <BrowserRouter>
        <TooltipProvider>
          <Story />
        </TooltipProvider>
      </BrowserRouter>
    ),
  ],
};

export default preview;
