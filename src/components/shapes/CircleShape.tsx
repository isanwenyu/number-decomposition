import React from 'react';
import { ShapeProps, BaseShape } from './BaseShape';

export const CircleShape: React.FC<ShapeProps> = (props) => {
  const { cx, cy, size, ...rest } = props;
  
  return (
    <BaseShape {...props}>
      <circle
        cx={cx}
        cy={cy}
        r={size}
        {...rest}
      />
    </BaseShape>
  );
};