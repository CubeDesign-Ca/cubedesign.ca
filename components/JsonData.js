import React from 'react';

const JsonData = ({ jsonKey }) => {
  const data = require('../public/data.json');
  const value = data[jsonKey] || 'Missing Key';

  return <>{value}</>;
};

export default JsonData;
