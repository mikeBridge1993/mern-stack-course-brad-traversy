const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = (data) => {
  let errors = {};

  //Convert to empty string if user does not send name input field
  data.school = !isEmpty(data.school) ? data.degree : '';
  data.company = !isEmpty(data.degree) ? data.company : '';
  data.fieldOfStudy = !isEmpty(data.fieldOfStudy) ? data.fieldOfStudy : '';

  if(Validator.isEmpty(data.school)) {
    errors.school = 'School field is required';
  }

  if(Validator.isEmpty(data.degree)) {
    errors.degree = 'Degree field is required';
  }

  if(Validator.isEmpty(data.fieldOfStudy)) {
    errors.fieldOfStudy = 'Field of study field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
