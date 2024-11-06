import React from 'react';

export interface ShapeProps {
  cx: number;
  cy: number;
  size: number;
  fill: string;
  stroke: string;
  strokeWidth: number;
  children?: React.ReactNode;
}

export const BaseShape: React.FC<ShapeProps> = ({ 
  children,
  ...props
}) => {
  return <>{children}</>;
};