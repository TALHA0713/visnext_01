class Validators {

  static isValidStr (str: string) {

    if (!str) {

      return false;

    }

    return (str && typeof (str) === 'string' && str.trim() && str !== '');

  }

  static validateCode (code: number, defaultCode: number) {

    if (code >= 400 && code < 500) {

      return code;

    }

    return defaultCode;
  
  }
}

export default Validators;
