import React from 'react';

const useFormInput = text => {
  const [value, setValue] = React.useState(text);
  const changeText = textChange => {
    setValue(textChange);
  };

  return {
    value: value,
    changeText: changeText,
  };
};

export default useFormInput;
