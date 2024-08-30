import React from "react";

// Define the type for the component props
interface WithLoadingProps {
  loading: boolean;
}

// HOC that adds a loading prop to a component
function withLoading<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return (props: P & WithLoadingProps & JSX.IntrinsicAttributes) => {
    const { loading, ...rest } = props;

    if (loading) {
      return <div className="alert alert-primary">Loading...</div>; // Replace with your loading indicator component
    }

    // Pass the rest of the props to the wrapped component
    return <WrappedComponent {...(rest as P)} />;
  };
}

export default withLoading;
