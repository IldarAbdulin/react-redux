import React from 'react';
import { Link } from 'react-router-dom';

export const FilterBtn = ({ children, ...filter }) => {
  return <Link {...filter}>{children}</Link>;
};
