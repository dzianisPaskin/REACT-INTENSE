import React from 'react';

const CustomTextArea = ({ areaName, className, onChange, name, record }) => {
  return (
    <label>
      {areaName}
      <textarea
        className={className}
        name={name}
        onChange={onChange}
        value={record.value}
        rows={7}
      />

      <p className={className}>
        {record.value.length <= 600
          ? `Characters remaining: ${600 - record.value.length} / 600`
          : 'Character limit in field exceeded'}
      </p>
      <p className="emptyTextField">{record.error}</p>
    </label>
  );
};

export default CustomTextArea;
