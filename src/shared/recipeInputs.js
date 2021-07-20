import { nanoid } from '@reduxjs/toolkit';

export const recipeInputs = [
  {
    id: nanoid(),
    label: 'Author',
    name: 'author',
    value: '',
    type: 'text',
    validation: { isRequired: true },
  },
  {
    id: nanoid(),
    label: 'Title',
    name: 'title',
    value: '',
    type: 'text',
    validation: { isRequired: true },
  },
  {
    id: nanoid(),
    label: 'Content',
    name: 'content',
    value: '',
    type: 'textarea',
    validation: { isRequired: true },
  },
];
