const User = require("./model");
const { hashData, verifyHashedData } = require("./../../utils/hashData");
const createToken = require("./../../utils/createToken");

const authenticateUser = async (data) => {
  try {
    const { email, password } = data;
    const fetchedUser = await User.findOne({
      email,
    });
    if (!fetchedUser) {
      throw Error("Invalid credentials entered!");
    }
    if (!fetchedUser.verified) {
      throw Error("Email hasn't been verified yet. Check your inbox.");
    }
    const hashedPassword = fetchedUser.password;
    const passwordMatch = await verifyHashedData(password, hashedPassword);
    if (!passwordMatch) {
      throw Error("Invalid password entered!");
    }
    //create user token
    const tokenData = { userId: fetchedUser._id, email };
    const token = await createToken(tokenData);

    //assign user token
    fetchedUser.token = token;
    return fetchedUser;
  } catch (error) {
    throw error;
  }
};

const createNewUser = async (data) => {
  try {
    const { name, email, password } = data;

    //Checking if user already exits
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw Error("User wuth the provided email already exists");
    }
    //hash password
    const hashedPassword = await hashData(password);
    const createNewUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    //save user
    const createdUser = await createNewUser.save();
    return createdUser;
  } catch (error) {
    throw error;
  }
};

module.exports = { createNewUser, authenticateUser };
