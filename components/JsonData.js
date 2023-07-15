import React from 'react';

const JsonData = ({ key }) => {
  const data = require('../public/global.json');

  const value = data[key] || 'Key not found';

  return <div className="w-[240px]">{value}</div>;
};

export default JsonData;
