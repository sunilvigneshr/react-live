import React, { Component } from 'react';

const errorBoundary = (Element, errorCallback) => {
  return class ErrorBoundary extends Component {
    componentDidCatch(error) {
      errorCallback(error);
    }

    static propTypes() {
      return Element.propTypes
    }

    render() {
      return typeof Element === "function" ? (
        <Element {...this.props} />
      ) : React.isValidElement(Element) ? (
        Element
      ) : null;
    }
  };
};

export default errorBoundary;
