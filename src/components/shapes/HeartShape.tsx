import React from 'react';
import { ShapeProps, BaseShape } from './BaseShape';

export const HeartShape: React.FC<ShapeProps> = (props) => {
  const { cx, cy, size, ...rest } = props;
  
  // Larger heart shape with better proportions
  const heartPath = `
    M ${cx} ${cy - size * 0.4}
    C ${cx - size * 1.2} ${cy - size * 1.2},
      ${cx - size * 1.2} ${cy + size * 0.6},
      ${cx} ${cy + size * 0.8}
    C ${cx + size * 1.2} ${cy + size * 0.6},
      ${cx + size * 1.2} ${cy - size * 1.2},
      ${cx} ${cy - size * 0.4}
  `;
  
  return (
    <BaseShape {...props}>
      <path
        d={heartPath}
        {...rest}
      />
    </BaseShape>
  );
};