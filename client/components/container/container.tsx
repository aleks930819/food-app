import React from 'react';

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`max-w-6xl mx-auto px-4 ${className}`}>{children}</div>;
};

export default Container;
