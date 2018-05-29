const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = (data) => {
  let errors = {};

  //Convert to empty string if user does not send input field
  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.status = !isEmpty(data.status) ? data.status : '';
  data.skills = !isEmpty(data.skills) ? data.skills : '';

  if(!Validator.isLength(data.handle, {min: 2, max: 40})) {
    errors.handle = "Handle must be at between 2 characters and 40 characters";
  }

  if(Validator.isEmpty(data.handle)) {
    errors.handle = "Profile Handle is required";
  }

  if(Validator.isEmpty(data.status)) {
    errors.status = "Profile status is required";
  }

  if(Validator.isEmpty(data.skills)) {
    errors.skills = "Profile skills is required";
  }

  if(!isEmpty(data.website)) {
    if(!Validator.isURL(data.website)) {
      errors.website = "Not a valid URL";
    }
  }

  if(!isEmpty(data.youtube)) {
    if(!Validator.isURL(data.youtube)) {
      errors.youtube = "Not a valid URL";
    }
  }

  if(!isEmpty(data.facebook)) {
    if(!Validator.isURL(data.facebook)) {
      errors.facebook = "Not a valid URL";
    }
  }
  
  if(!isEmpty(data.instagram)) {
    if(!Validator.isURL(data.instagram)) {
      errors.instagram = "Not a valid URL";
    }
  }

  if(!isEmpty(data.linkedin)) {
    if(!Validator.isURL(data.linkedin)) {
      errors.linkedin = "Not a valid URL";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
