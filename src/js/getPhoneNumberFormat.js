export default function getPhoneNumberFormat(phoneNumbers) {
  const codeModification = phoneNumbers.replace(/8{1}\s/, '7');
  const uncluttered = codeModification.replace(/\D+/g, '');
   
  return `+${uncluttered}`;
}