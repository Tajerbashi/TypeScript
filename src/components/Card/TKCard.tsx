import React from "react";
import "./style.css";
interface ReactContentProps {
  children: React.ReactNode;
  className?: string;
  style?: object;
}

const TKCard: React.FC<ReactContentProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <div id="TKCard" className={`${className}`} style={style}>
      {children}
    </div>
  );
};
const TKCardContent: React.FC<ReactContentProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <div id="TKCardContent" className={`${className}`} style={style}>
      {children}
    </div>
  );
};
export { TKCard, TKCardContent };
