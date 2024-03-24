import JestEnvironmentJsdom from 'jest-environment-jsdom';

class CustomJestEnvironment extends JestEnvironmentJsdom {
  constructor(config, context) {
    super(config, context);
    // Additional setup can go here
  }

  // You can override methods if necessary
}

export default CustomJestEnvironment;
