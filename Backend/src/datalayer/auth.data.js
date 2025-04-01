import User from "../model/user.model.js";
import jwtHelper from "../helper/jwtHelper.js";

class AuthData {
  /**
   * * user registration
   * @param {req}
   * @returns {object}
   */
  async userRegistration(req) {
    try {
      const { name, email, password, passwordConfirm } = req.body;

      const result = await new User({ name, email, password, passwordConfirm }).save();

      return result;
    } catch (error) {
      throw error;
    }
  }

  /**
   * * user login
   * @param {req}
   * @returns {object}
   */
  async userLogin(req) {
    try {
      let result = {};
      const { email, password } = req.body;

      let user = await User.findOne({ email }).select("+password");

      if (!user || !(await user.comparePassword(password, user.password))) {
        result = {
          incorrectCredential: 1,
        };
      } else {
        user = user.toObject();
        result = {
          id: user._id,
          token: jwtHelper(user._id)
        };
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  /**
   * * Get user profile
   * @param {req}
   * @returns {object}
   */
  async getUserProfile(req) {
    try {
      const userId = req.user.userId;
      
      const result = await User.findById(userId).select("-password -createdAt -updatedAt");
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default AuthData;