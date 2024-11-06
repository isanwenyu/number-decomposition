import React from 'react';
import { CircleShape } from './shapes/CircleShape';
import { SquareShape } from './shapes/SquareShape';
import { HeartShape } from './shapes/HeartShape';
import { StarShape } from './shapes/StarShape';

export type ShapeType = 'circle' | 'square' | 'heart' | 'star';

interface NumberNodeProps {
  number: string;
  cx: number;
  cy: number;
  size: number;
  shape: ShapeType;
}

const shapeComponents = {
  circle: CircleShape,
  square: SquareShape,
  heart: HeartShape,
  star: StarShape,
};

export const NumberNode: React.FC<NumberNodeProps> = ({ 
  number, 
  cx, 
  cy, 
  size,
  shape 
}) => {
  const ShapeComponent = shapeComponents[shape];
  
  // Adjust text position for different shapes
  const getTextOffset = () => {
    switch (shape) {
      case 'heart':
        return { dx: 0, dy: size * 0.1 }; // Move text slightly down in heart
      case 'star':
        return { dx: 0, dy: 0 }; // Center text in star
      default:
        return { dx: 0, dy: 0 };
    }
  };

  const { dx, dy } = getTextOffset();
  
  return (
    <>
      <ShapeComponent
        cx={cx}
        cy={cy}
        size={size}
        fill="#f0f0f3"
        stroke="currentColor"
        strokeWidth={2}
      />
      <text
        x={cx + dx}
        y={cy + dy}
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-sm font-semibold select-none"
      >
        {number}
      </text>
    </>
  );
};