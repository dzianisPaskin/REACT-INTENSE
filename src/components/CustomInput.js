import React from 'react';

const CustomInput = ({
  labelName,
  className,
  placeholder,
  onChange,
  type,
  maxLength,
  record,
}) => {
  return (
    <label className="label">
      {labelName}
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={record.value}
        maxLength={maxLength}
      />

      <span className="fieldError">{record.error}</span>
    </label>
  );
};

export default CustomInput;
