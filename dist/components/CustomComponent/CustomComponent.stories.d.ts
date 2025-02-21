import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ initialCount, maxCount }: {
        initialCount?: number;
        maxCount?: number;
    }) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        initialCount: {
            control: {
                type: "number";
            };
        };
        maxCount: {
            control: {
                type: "number";
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const From0: Story;
export declare const MaxCount10: Story;
export declare const MaxCount50StartingAt30: Story;
