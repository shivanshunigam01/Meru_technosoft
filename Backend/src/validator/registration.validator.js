import Joi from 'joi';
import { notAcceptableRequest } from '../helper/apiResponse.js';

const validation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
      'string.empty': 'Name is required.',
      'string.min': 'Name must be at least 3 characters long.',
      'string.max': 'Name must not exceed 30 characters.',
    }),
    email: Joi.string().email().required().messages({
      'string.empty': 'Email is required.',
      'string.email': 'Please enter a valid email address.',
    }),
    password: Joi.string().min(8).required().messages({
      'string.empty': 'Password is required.',
      'string.min': 'Password must be at least 8 characters long.',
    }),
    passwordConfirm: Joi.string()
      .valid(Joi.ref('password'))
      .required()
      .messages({
        'any.only': 'Password confirmation does not match.',
        'string.empty': 'Password confirmation is required.',
      }),
  });

  return schema.validate(data, { abortEarly: false });
};

const registrationValidator = (req, res, next) => {
  const payload = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  };

  // Call validation directly
  const { error } = validation(payload);
  if (error) {
    return notAcceptableRequest(res, `${error.message}`);
  } else {
    next();
  }
};

export default registrationValidator;