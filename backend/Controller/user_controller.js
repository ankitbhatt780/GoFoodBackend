const UserModel = require("../models/user_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = "ankitbhatt#780";

async function newUser(req, res) {
  const { name, location, email, } = req.body;
  console.log("data", name, email, location)
  if (!name || !location || !email) {
    return res.status(400).json({ msg: "data is missing" });
  }

  const salt = await bcrypt.genSalt(10);
  const secPassword = await bcrypt.hash(req.body.password, salt);
  try {
    const preuser = await UserModel.findOne({ email: email });
    if (preuser) {
      return res.status(500).json({ msg: "email is already exist" });
    }

    let user = await UserModel.create({
      name: name,
      location: location,
      email: email,
      password: secPassword,
    });
    if (!user) {
      return res.status(500).json("Server error");
    }
    else
      return res.status(200).json({ success: true });
  }
  catch (err) {
    return res.status(401).json(err);
  }
}

async function loginUser(req, res) {
  const email = req.body.email;
  //   console.log(email, "====]");

  //   if (!email || !password) {
  //     res.status(400).json({ msg: "data is missing" });
  //   }
  //   const pwdCompare = await bcrypt.compare(req.params.password);

  try {
    const response = await UserModel.findOne({ email: email });
    if (response) {
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        response.password
      );
      if (!passwordMatch) {
        return res.status(500).send({ msg: "password is not match" });
      }
    }

    // if (!response) {
    //   return res.status(403).json({ msg: "Invlaid email or password" });
    // }

    const data = {
      user: {
        id: response.id,
      },
    };

    const authToken = jwt.sign(data, jwtSecret);

    {
      return res.status(200).json({ success: true, authToken: authToken });
    }
  } catch (err) {
    return res.status(401).json(err);
  }
}

module.exports = { newUser, loginUser };
