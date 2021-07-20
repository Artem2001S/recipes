import { useCallback } from 'react';

export const useInputChangeHandler = (inputId, onChangeHandler) =>
  useCallback(
    (e) => onChangeHandler(inputId, e.target.value),
    [inputId, onChangeHandler]
  );
