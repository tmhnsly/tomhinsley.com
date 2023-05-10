import type { Meta, StoryObj } from "@storybook/react";

import { AlertDialog } from "./AlertDialog";

const meta = {
  title: "Buttons/AlertDialog",
  component: AlertDialog,
  tags: ["autodocs"],
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    triggerText: "Open dialog",
    title: "Are you sure you want to view this story?",
    description:
      "If you wish to change your mind, decide below. Otherwise your account will be deleted and som eother gubbins to pad out this box. Go on. Really. It needs padding. For real.",
  },
};
