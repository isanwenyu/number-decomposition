import React from 'react';
import { ShapeProps, BaseShape } from './BaseShape';

export const SquareShape: React.FC<ShapeProps> = (props) => {
  const { cx, cy, size, ...rest } = props;
  
  return (
    <BaseShape {...props}>
      <rect
        x={cx - size}
        y={cy - size}
        width={size * 2}
        height={size * 2}
        {...rest}
      />
    </BaseShape>
  );
};