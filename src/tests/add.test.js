const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello, ${name}!`;

describe('Test Suite #1 - Learning Jest', () => {

  test('add function is defined', () => {
    expect(add).toBeDefined();
  });
  
  test('should add two numbers', () => {
    const result = add(2, 4);
    expect(result).toBe(6);
  });

  test('should generate greeting from name', () => {
    const result = generateGreeting('Neevor');
    expect(result).toBe('Hello, Neevor!');
  });

  test('should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello, Anonymous!');
  });

});