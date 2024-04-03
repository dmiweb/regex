export default  class Validator {
  static validateUsername(userName) {
    const re = /^[a-zA-Z]((?!\d{4}).)*[A-Za-z-_]*[a-zA-Z]$/;
    return re.test(userName);
  }
}