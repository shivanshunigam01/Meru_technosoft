import Joi from 'joi';
import { notAcceptableRequest } from '../helper/apiResponse.js';

const validation = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().messages({
      'string.empty': 'Email is required.',
      'string.email': 'Please enter a valid email address.',
    }),
    password: Joi.string().min(8).required().messages({
      'string.empty': 'Password is required.',
      'string.min': 'Password must be at least 8 characters long.',
    }),
  });

  return schema.validate(data, { abortEarly: false });
};

const loginValidator = (req, res, next) => {
  const payload = {
    email: req.body.email,
    password: req.body.password,
  };

  // Call validation directly
  const { error } = validation(payload);
  if (error) {
    return notAcceptableRequest(res, `${error.message}`);
  } else {
    next();
  }
};

export default loginValidator;