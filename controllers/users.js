const User = require("../models/user");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const { v4: uuidv4 } = require("uuid");
const S3 = require("aws-sdk/clients/s3");
const s3 = new S3(); //intialize

module.exports = {
  signup,
  login,
};

async function signup(req, res) {
  console.log(
    req.body,
    req.file,
    "<req.body and req.file in signup in controllers"
  );

  // generate a unique filename with uuid
  const filePath = `${uuidv4()}/${req.file.originalname}`;
  // generate the options object for aws
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: filePath,
    Body: req.file.buffer,
  };

  s3.upload(params, async function (err, data) {
    // data is the return of the successful upload to AWS. We can access the image/file by using data.location

    console.log(err, "<- err from aws, are your keys and bucket correct?");

    const user = new User({ ...req.body, photoUrl: data.Location });
    try {
      await user.save();
      const token = createJWT(user);
      res.json({ token });
    } catch (err) {
      // Probably a duplicate email
      console.log(err, "<- err signup controller function");
      res.status(400).json(err);
    }
  });
}

async function login(req, res) {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) return res.status(401).json({ err: "bad credentials" });
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    console.log(err, "<- err login controller function");
    return res.status(401).json(err);
  }
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    SECRET,
    { expiresIn: "24h" }
  );
}
