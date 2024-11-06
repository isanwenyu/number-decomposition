import React from 'react';
import { ShapeProps, BaseShape } from './BaseShape';

export const StarShape: React.FC<ShapeProps> = (props) => {
  const { cx, cy, size, ...rest } = props;
  
  const points = 5;
  const outerRadius = size * 1.2; // Slightly reduce outer radius
  const innerRadius = size * 0.5; // Increase inner radius for better spacing
  const startAngle = -Math.PI / 2;
  
  const getPoint = (angle: number, radius: number) => ({
    x: cx + radius * Math.cos(angle),
    y: cy + radius * Math.sin(angle)
  });
  
  let path = 'M ';
  for (let i = 0; i < points * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = startAngle + (i * Math.PI) / points;
    const point = getPoint(angle, radius);
    path += `${point.x},${point.y} `;
  }
  path += 'Z';
  
  return (
    <BaseShape {...props}>
      <path d={path} {...rest} />
    </BaseShape>
  );
};