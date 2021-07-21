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
    validation: { isRequired: true, minLength: 10 },
  },
];

export const validateInputs = (inputs) => {
  const errors = [];
  inputs.forEach(({ validation, value, label }) => {
    const isEmptyValue = !value;
    if (isEmptyValue && validation.isRequired) {
      errors.push(`You should enter "${label}" value.`);
    }

    if (validation.minLength) {
      value.length < validation.minLength &&
        errors.push(
          `You should enter more than ${validation.minLength} symbols in the ${label} field.`
        );
    }
  });

  return errors;
};

export const getRecipeObjectFromInputs = (inputs) => {
  const recipe = {};
  inputs.forEach((input) => {
    recipe[input.name] = input.value;
  });

  return recipe;
};

export const fillRecipeInputs = (recipe) => {
  return recipeInputs.map((input) => ({
    ...input,
    value: recipe[input.name],
  }));
};
