import React, { useState, useEffect, Fragment, createContext, Component, useContext } from 'react';
import 'prop-types';
import Editor$1 from 'react-simple-code-editor';
import Highlight, { Prism } from 'prism-react-renderer';
import { transform as transform$1 } from 'buble';
import assign from 'core-js/features/object/assign';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var theme = {
  plain: {
    color: '#C5C8C6',
    backgroundColor: '#1D1F21'
  },
  styles: [{
    types: ['prolog', 'comment', 'doctype', 'cdata'],
    style: {
      color: 'hsl(30, 20%, 50%)'
    }
  }, {
    types: ['property', 'tag', 'boolean', 'number', 'constant', 'symbol'],
    style: {
      color: 'hsl(350, 40%, 70%)'
    }
  }, {
    types: ['attr-name', 'string', 'char', 'builtin', 'insterted'],
    style: {
      color: 'hsl(75, 70%, 60%)'
    }
  }, {
    types: ['operator', 'entity', 'url', 'string', 'variable', 'language-css'],
    style: {
      color: 'hsl(40, 90%, 60%)'
    }
  }, {
    types: ['deleted'],
    style: {
      color: 'rgb(255, 85, 85)'
    }
  }, {
    types: ['italic'],
    style: {
      fontStyle: 'italic'
    }
  }, {
    types: ['important', 'bold'],
    style: {
      fontWeight: 'bold'
    }
  }, {
    types: ['regex', 'important'],
    style: {
      color: '#e90'
    }
  }, {
    types: ['atrule', 'attr-value', 'keyword'],
    style: {
      color: 'hsl(350, 40%, 70%)'
    }
  }, {
    types: ['punctuation', 'symbol'],
    style: {
      opacity: '0.7'
    }
  }]
};

var _excluded$1 = ["style", "theme", "onChange"];

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CodeEditor = function CodeEditor(props) {
  var _useState = useState({
    code: props.code || ''
  }),
      state = _useState[0],
      setState = _useState[1];

  useEffect(function () {
    if (state.prevCodeProp && props.code !== state.prevCodeProp) {
      setState({
        code: props.code,
        prevCodeProp: props.code
      });
    }
  }, [props.code]);

  var updateContent = function updateContent(code) {
    setState({
      code: code
    });
  };

  useEffect(function () {
    if (props.onChange) {
      props.onChange(state.code);
    }
  }, [state.code]);

  var highlightCode = function highlightCode(code) {
    return /*#__PURE__*/React.createElement(Highlight, {
      Prism: Prism,
      code: code,
      theme: props.theme || theme,
      language: props.language
    }, function (_ref) {
      var tokens = _ref.tokens,
          getLineProps = _ref.getLineProps,
          getTokenProps = _ref.getTokenProps;
      return /*#__PURE__*/React.createElement(Fragment, null, tokens.map(function (line, i) {
        return (
          /*#__PURE__*/
          // eslint-disable-next-line react/jsx-key
          React.createElement("div", getLineProps({
            line: line,
            key: i
          }), line.map(function (token, key) {
            return (
              /*#__PURE__*/
              // eslint-disable-next-line react/jsx-key
              React.createElement("span", getTokenProps({
                token: token,
                key: key
              }))
            );
          }))
        );
      }));
    });
  }; // eslint-disable-next-line no-unused-vars


  var style = props.style,
      theme$1 = props.theme;
      props.onChange;
      var rest = _objectWithoutPropertiesLoose(props, _excluded$1);

  var code = state.code;
  var baseTheme = theme$1 && typeof theme$1.plain === 'object' ? theme$1.plain : {};
  return /*#__PURE__*/React.createElement(Editor$1, _extends({
    value: code,
    padding: 10,
    highlight: highlightCode,
    onValueChange: updateContent,
    style: _objectSpread$3(_objectSpread$3({
      whiteSpace: 'pre',
      fontFamily: 'monospace'
    }, baseTheme), style)
  }, rest));
};

var Editor = CodeEditor;

var LiveContext = /*#__PURE__*/createContext({});
var LiveContext$1 = LiveContext;

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var _poly = {
  assign: assign
};
var transform = (function (code, transpileOptions) {
  if (transpileOptions === void 0) {
    transpileOptions = {};
  }

  var opts = _objectSpread$2(_objectSpread$2({}, transpileOptions), {}, {
    objectAssign: '_poly.assign',
    transforms: _objectSpread$2({
      dangerousForOf: true,
      dangerousTaggedTemplateString: true
    }, transpileOptions.transforms)
  });

  return transform$1(code, opts).code;
});

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

var errorBoundary = function errorBoundary(Element, errorCallback) {
  return /*#__PURE__*/function (_Component) {
    _inheritsLoose(ErrorBoundary, _Component);

    function ErrorBoundary() {
      return _Component.apply(this, arguments) || this;
    }

    var _proto = ErrorBoundary.prototype;

    _proto.componentDidCatch = function componentDidCatch(error) {
      errorCallback(error);
    };

    ErrorBoundary.propTypes = function propTypes() {
      return Element.propTypes;
    };

    _proto.render = function render() {
      return typeof Element === "function" ? /*#__PURE__*/React.createElement(Element, this.props) : /*#__PURE__*/React.isValidElement(Element) ? Element : null;
    };

    return ErrorBoundary;
  }(Component);
};

var errorBoundary$1 = errorBoundary;

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

var evalCode = function evalCode(code, scope) {
  var scopeKeys = Object.keys(scope);
  var scopeValues = scopeKeys.map(function (key) {
    return scope[key];
  }); // eslint-disable-next-line no-new-func

  var res = _construct(Function, ['_poly', 'React'].concat(scopeKeys, [code]));

  return res.apply(void 0, [_poly, React].concat(scopeValues));
};

var evalCode$1 = evalCode;

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var generateElement = function generateElement(_ref, errorCallback) {
  var _ref$code = _ref.code,
      code = _ref$code === void 0 ? '' : _ref$code,
      _ref$scope = _ref.scope,
      scope = _ref$scope === void 0 ? {} : _ref$scope,
      transpileOptions = _ref.transpileOptions;
  // NOTE: Remove trailing semicolon to get an actual expression.
  var codeTrimmed = code.trim().replace(/;$/, ''); // NOTE: Workaround for classes and arrow functions.

  var transformed = transform("return (" + codeTrimmed + ")", transpileOptions).trim();
  return errorBoundary$1(evalCode$1(transformed, scope), errorCallback);
};
var renderElementAsync = function renderElementAsync(_ref2, resultCallback, errorCallback // eslint-disable-next-line consistent-return
) {
  var _ref2$code = _ref2.code,
      code = _ref2$code === void 0 ? '' : _ref2$code,
      _ref2$scope = _ref2.scope,
      scope = _ref2$scope === void 0 ? {} : _ref2$scope,
      transpileOptions = _ref2.transpileOptions;

  var render = function render(element) {
    if (typeof element === 'undefined') {
      errorCallback(new SyntaxError('`render` must be called with valid JSX.'));
    } else {
      resultCallback(errorBoundary$1(element, errorCallback));
    }
  };

  if (!/render\s*\(/.test(code)) {
    return errorCallback(new SyntaxError('No-Inline evaluations must call `render`.'));
  }

  evalCode$1(transform(code, transpileOptions), _objectSpread$1(_objectSpread$1({}, scope), {}, {
    render: render
  }));
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function LiveProvider(_ref) {
  var children = _ref.children,
      code = _ref.code,
      language = _ref.language,
      theme = _ref.theme,
      disabled = _ref.disabled,
      scope = _ref.scope,
      transformCode = _ref.transformCode,
      transpileOptions = _ref.transpileOptions,
      _ref$noInline = _ref.noInline,
      noInline = _ref$noInline === void 0 ? false : _ref$noInline;

  var _useState = useState({
    error: undefined,
    element: undefined
  }),
      state = _useState[0],
      setState = _useState[1];

  function transpile(newCode) {
    // Transpilation arguments
    var input = {
      code: transformCode ? transformCode(newCode) : newCode,
      scope: scope,
      transpileOptions: transpileOptions
    };

    var errorCallback = function errorCallback(error) {
      return setState({
        error: error.toString(),
        element: undefined
      });
    };

    var renderElement = function renderElement(element) {
      return setState({
        error: undefined,
        element: element
      });
    };

    try {
      if (noInline) {
        setState({
          error: undefined,
          element: null
        }); // Reset output for async (no inline) evaluation

        renderElementAsync(input, renderElement, errorCallback);
      } else {
        renderElement(generateElement(input, errorCallback));
      }
    } catch (error) {
      errorCallback(error);
    }
  }

  useEffect(function () {
    transpile(code);
  }, [code, scope, noInline, transformCode, transpileOptions]);

  var onChange = function onChange(newCode) {
    return transpile(newCode);
  };

  var onError = function onError(error) {
    return setState({
      error: error.toString()
    });
  };

  return /*#__PURE__*/React.createElement(LiveContext$1.Provider, {
    value: _objectSpread(_objectSpread({}, state), {}, {
      code: code,
      language: language,
      theme: theme,
      disabled: disabled,
      onError: onError,
      onChange: onChange
    })
  }, children);
}

LiveProvider.defaultProps = {
  code: '',
  noInline: false,
  language: 'jsx',
  disabled: false
};

function LiveEditor(props) {
  var _useContext = useContext(LiveContext$1),
      code = _useContext.code,
      language = _useContext.language,
      theme = _useContext.theme,
      disabled = _useContext.disabled,
      onChange = _useContext.onChange;

  return /*#__PURE__*/React.createElement(Editor, _extends({
    theme: theme,
    code: code,
    language: language,
    disabled: disabled,
    onChange: onChange
  }, props));
}

function LiveError(props) {
  var _useContext = useContext(LiveContext$1),
      error = _useContext.error;

  return error ? /*#__PURE__*/React.createElement("pre", props, error) : null;
}

var _excluded = ["Component"];

function LivePreview(_ref) {
  var Component = _ref.Component,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useContext = useContext(LiveContext$1),
      Element = _useContext.element;

  return /*#__PURE__*/React.createElement(Component, rest, Element ? /*#__PURE__*/React.createElement(Element, null) : null);
}

LivePreview.defaultProps = {
  Component: 'div'
};

function withLive(WrappedComponent) {
  var WithLive = /*#__PURE__*/function (_Component) {
    _inheritsLoose(WithLive, _Component);

    function WithLive() {
      return _Component.apply(this, arguments) || this;
    }

    var _proto = WithLive.prototype;

    _proto.render = function render() {
      var _this = this;

      return /*#__PURE__*/React.createElement(LiveContext$1.Consumer, null, function (live) {
        return /*#__PURE__*/React.createElement(WrappedComponent, _extends({
          live: live
        }, _this.props));
      });
    };

    return WithLive;
  }(Component);

  return WithLive;
}

export { Editor, LiveContext$1 as LiveContext, LiveEditor, LiveError, LivePreview, LiveProvider, generateElement, renderElementAsync, withLive };