import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Page crashed:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold">Something went wrong</h1>
          <p className="mb-6 mt-2 text-muted">Please refresh the page or go back home.</p>
          <a
            href="/"
            className="inline-flex rounded-full bg-fg px-8 py-4 font-medium text-bg"
          >
            Back home
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}