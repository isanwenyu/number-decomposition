import React from 'react';
import { NumberNode, ShapeType } from './NumberNode';

interface NumberTreeProps {
  number: number;
  left: number;
  right: number;
  shape: ShapeType;
}

export const NumberTree: React.FC<NumberTreeProps> = ({ 
  number, 
  left, 
  right,
  shape 
}) => {
  const treeWidth = 120;
  const treeHeight = 140;
  const nodeRadius = 20;
  const strokeWidth = 2;

  return (
    <div className="flex justify-center items-center">
      <svg width={treeWidth} height={treeHeight} className="text-gray-800">
        {/* Lines to children */}
        <line
          x1={treeWidth / 2}
          y1={nodeRadius}
          x2={treeWidth / 4}
          y2={treeHeight - nodeRadius * 2}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="transition-all duration-300"
        />
        <line
          x1={treeWidth / 2}
          y1={nodeRadius}
          x2={(treeWidth / 4) * 3}
          y2={treeHeight - nodeRadius * 2}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="transition-all duration-300"
        />
        
        {/* Parent node */}
        <NumberNode
          number={number}
          cx={treeWidth / 2}
          cy={nodeRadius}
          size={nodeRadius}
          shape={shape}
        />

        {/* Left child */}
        <NumberNode
          number={left}
          cx={treeWidth / 4}
          cy={treeHeight - nodeRadius}
          size={nodeRadius}
          shape={shape}
        />

        {/* Right child */}
        <NumberNode
          number={right}
          cx={(treeWidth / 4) * 3}
          cy={treeHeight - nodeRadius}
          size={nodeRadius}
          shape={shape}
        />
      </svg>
    </div>
  );
};