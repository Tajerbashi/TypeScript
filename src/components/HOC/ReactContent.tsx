import React from "react";

interface ReactContentProps {
  children: React.ReactNode;
}

const ReactContent: React.FC<ReactContentProps> = ({ children }) => {
  return <div className="p-1">{children}</div>;
};

export default ReactContent;
