import getPhoneNumberFormat from '../js/getPhoneNumberFormat';

test.each([
  ['phoneNumber', '8 (927) 000-00-00', '+79270000000'],
  ['phoneNumber', '+7 960 000 00 00', '+79600000000'],
  ['phoneNumber', '+86 000 000 0000', '+860000000000']
])(
  ('testing function getPhoneNumberFormat for %s phoneNumber with %i number'),
  (_, number, expected) => {
    
    const result = getPhoneNumberFormat(number);

    expect(result).toBe(expected);
  }
);