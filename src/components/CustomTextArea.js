import React from 'react';


const CustomTextArea = ({
  areaName,
  className,
  onChange,
  name,
  maxLength,
  record,
}) => {
  return (
    <label>
      {areaName}
      <textarea
        className={className}
        name={name}
        onChange={onChange}
        value={record.value}
        rows={7}
        maxLength={maxLength}
      />

      <p className={className}>Characters remaining: {600 - record.value.length} / 600</p>
      <p className='emptyTextField'>{record.error}</p>
    </label>
  );
};

export default CustomTextArea;
