import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export const successResponseWithData = (res, msg, data) => {
  const resData = {
    success: true,
    statusCode: StatusCodes.OK,
    status: ReasonPhrases.OK,
    message: msg,
    data: data,
  };
  return res.status(StatusCodes.OK).json(resData);
};

export const notFoundResponse = (res, msg) => {
  const data = {
    success: false,
    statusCode: StatusCodes.NOT_FOUND,
    status: ReasonPhrases.NOT_FOUND,
    message: msg,
  };
  return res.status(StatusCodes.NOT_FOUND).json(data);
};

export const unauthorizedResponse = (res, msg) => {
  const data = {
    success: false,
    statusCode: StatusCodes.UNAUTHORIZED,
    status: ReasonPhrases.UNAUTHORIZED,
    message: msg,
  };
  return res.status(StatusCodes.UNAUTHORIZED).json(data);
};

export const expectationFailedResponse = (res, error) => {
  const data = {
    success: false,
    statusCode: StatusCodes.EXPECTATION_FAILED,
    status: ReasonPhrases.EXPECTATION_FAILED,
    message: error.message,
  };
  return res.status(StatusCodes.EXPECTATION_FAILED).json(data);
};

export const notAcceptableRequest = (res, msg) => {
  const data = {
    success: false,
    statusCode: StatusCodes.NOT_ACCEPTABLE,
    status: ReasonPhrases.NOT_ACCEPTABLE,
    message: msg,
  };
  return res.status(StatusCodes.NOT_ACCEPTABLE).json(data);
};

export const badRequest = (res, msg) => {
  const data = {
    success: false,
    statusCode: StatusCodes.BAD_REQUEST,
    status: ReasonPhrases.BAD_REQUEST,
    message: msg,
  };
  return res.status(StatusCodes.BAD_REQUEST).json(data);
};

export const sucessfullyCreatedResponse = (res, msg, data) => {
  const resData = {
    success: true,
    statusCode: StatusCodes.CREATED,
    status: ReasonPhrases.CREATED,
    message: msg,
    data: data,
  };
  return res.status(StatusCodes.CREATED).json(resData);
};