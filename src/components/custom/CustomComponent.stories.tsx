import type { Meta, StoryObj } from '@storybook/react';

import { CustomComponent } from './CustomComponent.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Hihi/CustomComponent',
    component: CustomComponent,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        initialCount: {
            control: { type: "number" }
        },
        maxCount: {
            control: { type: "number" }
        }
    },
} satisfies Meta<typeof CustomComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const From0: Story = {
    args: {
        initialCount: 0,
    },
};

export const MaxCount10: Story = {
    args: {
        maxCount: 10,
    },
};

export const MaxCount50StartingAt30: Story = {
    args: {
        maxCount: 50,
        initialCount: 30,
    },
};

