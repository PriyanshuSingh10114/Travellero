import React from 'react';

const colorPresets = {
  teal: '#066168',
  cream: '#fef9eb',
  white: '#ffffff',
  cyan: '#effefe',
  blue: '#DBEEEE',
  yellow: '#FFAA0D',
  lime: '#85d200',
  deepTeal: '#044449',
  softYellow: '#fff1da',
};

const SectionTransition = ({
  from = '#066168',
  to = '#fef9eb',
  height,
  className = '',
  style = {},
}) => {
  const fromColor = colorPresets[from] || from;
  const toColor = colorPresets[to] || to;

  const inlineStyles = {
    '--from-color': fromColor,
    '--to-color': toColor,
    ...(height ? { '--transition-height': typeof height === 'number' ? `${height}px` : height } : {}),
    ...style,
  };

  return (
    <div
      className={`section-transition ${className}`}
      style={inlineStyles}
      aria-hidden="true"
    >
      <div className="section-transition-inner" />
    </div>
  );
};

export default SectionTransition;


