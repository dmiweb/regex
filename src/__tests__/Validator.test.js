import Validator from '../js/Validator';

test.each([
  ['Validator', '1qwerty', false],
  ['Validator', '-qwerty', false],
  ['Validator', '_qwerty', false],
  ['Validator', '@qwerty', false],
  ['Validator', 'qwerty1', false],
  ['Validator', 'qwerty-', false],
  ['Validator', 'qwerty_', false],
  ['Validator', 'qwerty@', false],
  ['Validator', 'qwer1234ty', false],
  ['Validator', 'qwe_123-ABC-123rty', true],
])(
  ('testing method validateUsername for %s class Validator with %i userName'),
  (_, userName, expected) => {
    
    const result = Validator.validateUsername(userName);

    expect(result).toBe(expected);
  }
);
