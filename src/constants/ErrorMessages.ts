const ErrorMessages = Object.freeze({

  MESSAGES: {
    INTERNAL_SERVER_ERROR: 'internal server error',
    SOMETHING_WENT_WRONG: 'Something went wrong',
    CANNOT_FULFILL_THE_REQUEST: 'Cannot fulfill the request'
  }

});

export default ErrorMessages;

// Object.freeze() is a powerful method in JavaScript for creating immutable objects. 
// It is particularly useful for defining constants, preventing accidental modifications, 
// and ensuring the integrity of objects in your application.