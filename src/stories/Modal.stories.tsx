import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from '../components/Modal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalPrimary = Template.bind({});
ModalPrimary.args = {
  primary: true,
  header: 'Primary Style',
  content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, non voluptates, repellendus cupiditate officia ad vel vero commodi nemo nihil, dolorem quas? Eius distinctio at non, quisquam unde amet tenetur!',
  handleOK: () => { console.log('OK clic primary') }
};

export const ModalSecundary = Template.bind({});
ModalSecundary.args = {
  primary: false,
  header: 'Secundary Style',
  content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, non voluptates, repellendus cupiditate officia ad vel vero commodi nemo nihil, dolorem quas? Eius distinctio at non, quisquam unde amet tenetur!',
  handleOK: () => { console.log('OK clic secundary') }
};