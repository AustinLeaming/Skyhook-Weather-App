const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/users");
const multer = require("multer");
const upload = multer();

/*---------- Public Routes ----------*/
//upload.single('photo') is what will make our req.body, and req.file, be defined, since they are multipart/formdata
router.post("/signup", upload.single("photo"), usersCtrl.signup);
router.post("/login", usersCtrl.login);

/*---------- Protected Routes ----------*/

module.exports = router;
