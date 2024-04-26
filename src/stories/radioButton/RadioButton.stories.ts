import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { RadioButton } from "./RadioButton";

const meta = {
  title: "Components/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
  },
};

export const Large: Story = {
  args: {
    label: "Selection Large",
    size: "large",
    backgroundColor: "black",
  },
};
