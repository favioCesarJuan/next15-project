import { Meta, StoryObj} from "@storybook/react";
import { Nav } from "./Nav";

const meta: Meta<typeof Nav> = {
  title: "components/Nav",
  component: Nav,
  args: {},
} satisfies Meta<typeof Nav>;
export default meta
type Story = StoryObj<typeof Nav>;

export const Primary: Story = {
  args: {}
}

