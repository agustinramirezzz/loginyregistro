import React from 'react';

const InputComponent = ({ placeholder, secureTextEntry, value, onChangeText }) => {
  return (
    <input
      type={secureTextEntry ? 'password' : 'text'}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChangeText(e.target.value)}
      style={styles.input}
    />
  );
};

const styles = {
  input: {
    marginBottom: '10px',
    padding: '10px',
    width: '100%',
    border: '1px solid gray',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
};

export default InputComponent;
