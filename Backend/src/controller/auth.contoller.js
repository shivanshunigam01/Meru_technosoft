import AuthData from "../datalayer/auth.data.js";
import {
  sucessfullyCreatedResponse,
  badRequest,
  expectationFailedResponse,
  successResponseWithData,
  unauthorizedResponse,
  notFoundResponse,
} from "../helper/apiResponse.js";

const authData = new AuthData();

class AuthController {
  /**
   * * user registration
   * @param {req}
   * @returns {JSON}
   */
  async userRegistration(req, res, next) {
    try {
      const result = await authData.userRegistration(req);

      if (result._id) {
        return sucessfullyCreatedResponse(res, "User Registered Sucessfully.", {
          id: result._id,
        });
      } else {
        return badRequest(res, "Error While registering!");
      }
    } catch (error) {
      return expectationFailedResponse(res, error);
    }
  }

  /**
   * * user login
   * @param {req}
   * @returns {JSON}
   */
  async userLogin(req, res, next) {
    try {
      const result = await authData.userLogin(req);

      if (result.id) {
        return successResponseWithData(
          res,
          "User Loggedin Successfully.",
          result
        );
      } else if (result.incorrectCredential === 1) {
        return unauthorizedResponse(res, "Incorrect email or password");
      }
    } catch (error) {
      return expectationFailedResponse(res, error);
    }
  }

  /**
   * * Get user profile
   * @param {req}
   * @returns {JSON}
   */
  async getUserProfile(req, res, next) {
    try {
        const result = await authData.getUserProfile(req);

        if(result._id) {
            return successResponseWithData(res, 'User Profile', result);
        } else {
            return notFoundResponse(res, 'User not found!');
        }
    } catch (error) {
        return expectationFailedResponse(res, error);
    }
  }
}

export default AuthController;
