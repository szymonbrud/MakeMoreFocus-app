import React from 'react';
import SVG from 'react-inlinesvg';

// eslint-disable-next-line react/prop-types
const Icon = ({ src, ...props }) => (
  <div {...props}>
    <SVG src={src} />
  </div>
);

export default Icon;
