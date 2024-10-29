import React, {Component, ReactNode} from 'react';
import {Text, View} from 'react-native';

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<
  {children: ReactNode},
  ErrorBoundaryState
> {
  constructor(props: {children: ReactNode}) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError() {
    return {hasError: true};
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log('Error caught by Error Boundary: ', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View>
          <Text>Something went wrong.</Text>
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
