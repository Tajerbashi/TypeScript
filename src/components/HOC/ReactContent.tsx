import React from "react";

interface ReactContentProps {
  children: React.ReactNode;
  className?: string;
  style?: object;
}

const ReactContent: React.FC<ReactContentProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <div className={`${className}`} style={style}>
      {children}
    </div>
  );
};

export default ReactContent;
