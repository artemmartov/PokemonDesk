import React from 'react';

export enum Head {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

type HeadingProps = {
  size: Head;
  className?: string;
};

const Heading: React.FC<HeadingProps> = ({ size, children, className }) => {
  return React.createElement(size, { className: className }, children);
};

export default Heading;
