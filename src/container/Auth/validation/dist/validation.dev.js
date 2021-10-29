"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validation = exports.LoginValidation = exports.ResetValidation = exports.NewJobValidation = void 0;

var NewJobValidation = function NewJobValidation(values) {
  console.log(values);
  var jobTitle = values.jobTitle,
      description = values.description,
      location = values.location;
  var errors = {};

  if (jobTitle === '' || description === '' || location === '') {
    errors.error = 'All fields are mandatory.';
  }

  return errors;
};

exports.NewJobValidation = NewJobValidation;

var ResetValidation = function ResetValidation(result, values) {
  var errors = {};

  if (values.email === '') {
    errors.error = 'The Field should not be empty.';
  } else if (values.email !== result.email) {
    errors.error = 'The email address is not registered.';
  }

  return errors;
};

exports.ResetValidation = ResetValidation;

var LoginValidation = function LoginValidation(result, credentials) {
  var errors = {};

  if (credentials.email === '' || !credentials.password === '') {
    errors.error = 'The Field/s should not be empty.';
  } else if (credentials.email !== result.email) {
    errors.error = 'Incorrect email address or password.';
  }

  return errors;
};

exports.LoginValidation = LoginValidation;

var validation = function validation(values) {
  var errors = {};

  if (!values.fullName) {
    errors.fullName = 'The Field is mandatory';
  } // else if (/^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/) {
  //   errors.fullName = 'At least 4 character long and not start with a number'
  // }


  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'The Field is required';
  } else if (values.password.length < 5) {
    errors.password = 'Password must be more than five character long';
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'password is not matching';
  }

  return errors;
};

exports.validation = validation;