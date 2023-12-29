import { Request, Response } from "express";
// Model
import User from "../models/User";

// GetuserById

const getUserById = async (req: Request, res: Response) => {
  console.log("User info is asked by frontend");
  console.log(req.query);
  let userId;
  // In this case we use req.querry
  // when use querry api call should question marks , but in express you dont put in dynamic routing, only api caller consider it express only responsible to catch query info bt using req.query
  if (Object.keys(req.query).length !== 0) {
    userId = req.query.userIDQuery;
  } else {
    return res.status(409).json({
      code: 409,
      status: "error",
      message: "there is no querry",
    });
  }

  // Check the id if it is not 24 chracter return bad request

  try {
    const findUser = await User.findOne({ _id: userId });

    if (!findUser) {
      return res.status(404).json({
        code: 404,
        status: "error",
        message: "User not found",
        data: null,
      });
    } else {
      // password should not be returned and also we only need some of information
      const { username, email, address } = findUser;

      return res.status(200).json({
        code: 200,
        status: "success",
        message: "User found successfully",
        data: {
          username: username,
          email: email,
          address: address,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// New user
const newUser = async (req: Request, res: Response) => {
  // Information recieved from front-end
  const { _id, username, email, password, country, city, postal_code } =
    req.body;

  // User object is created for matching db schema
  const user_object = {
    username: username,
    email: email,
    password: password,
    address: {
      country: country,
      city: city,
      postalCode: postal_code,
    },
  };

  // user object is matched with mongoose model
  const newuser = new User(user_object);

  //   Before adding new one we need to look up , is there any existing one , if it is we need to return 409 conflict error

  //   data sending attempts
  try {
    // check userexistence by email , if it is send back 409 conflict

    const existingUser = await User.findOne({ email: user_object.email });

    if (existingUser) {
      // Golden return reminders you basic mistakes when u first start to work with node.js

      return res.status(409).json({
        code: 409,
        status: "error",
        message: "User with this email already exists",
        data: {
          existingUserId: existingUser._id,
          email: existingUser.email,
        },
      });
    }

    const mongo_response = await newuser.save();
    const { username, email } = user_object;
    res.json({
      code: 201,
      status: "success",
      message: "User created successfully",
      data: {
        username: username,
        email: email,
      },
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

module.exports = { newUser, getUserById };
