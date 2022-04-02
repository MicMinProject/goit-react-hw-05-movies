import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
    this.setState({ isError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h4>Something went wrong</h4>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;