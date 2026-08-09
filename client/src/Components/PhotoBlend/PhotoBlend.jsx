import React from 'react';

const PhotoBlend = ({
  children,
  src,
  alt = 'photo',
  direction = 'bottom',
  color = '#fef9eb',
  size,
  className = '',
  imgClassName = '',
  style = {},
  ...props
}) => {
  const colorMap = {
    cream: '#fef9eb',
    teal: '#066168',
    white: '#ffffff',
    yellow: '#fff1da',
    cyan: '#effefe',
  };

  const activeColor = colorMap[color] || color;

  const blendStyle = {
    '--blend-color': activeColor,
    '--blend-color-top': activeColor,
    '--blend-color-bottom': activeColor,
    '--blend-color-left': activeColor,
    '--blend-color-right': activeColor,
    ...(size ? { [`--blend-size-${direction}`]: typeof size === 'number' ? `${size}px` : size } : {}),
    ...style,
  };

  const directionClass = {
    top: 'photo-blend-top',
    bottom: 'photo-blend-bottom',
    both: 'photo-blend-both',
    left: 'photo-blend-left',
    right: 'photo-blend-right',
    all: 'photo-blend-all',
  }[direction] || 'photo-blend-bottom';

  if (src) {
    return (
      <div className={`photo-blend ${directionClass} ${className}`} style={blendStyle} {...props}>
        <img src={src} alt={alt} className={`w-full h-full object-cover ${imgClassName}`} />
      </div>
    );
  }

  return (
    <div className={`photo-blend ${directionClass} ${className}`} style={blendStyle} {...props}>
      {children}
    </div>
  );
};

export default PhotoBlend;


